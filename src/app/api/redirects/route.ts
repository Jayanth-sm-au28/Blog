import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import redirects from '@app/../../redirects.json';

const redis = new Redis({
  url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_URL!,
  token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_TOKEN!,
});

interface Redirects {
  [key: string]: string;
}

export async function POST(request: Request) {
  const { slug } = await request.json();
  const start = Date.now();

  // Type assertion for redirects
  const staticRedirects = redirects as Redirects;

  // Construct the base URL for absolute URLs
  const baseUrl = new URL(request.url).origin;
  // Check static redirects
  if (staticRedirects[slug]) {
    const latency = Date.now() - start;
    const absoluteRedirectUrl = new URL(`${staticRedirects[slug]}?latency=${latency}`, baseUrl);
    return NextResponse.redirect(absoluteRedirectUrl);
    // const absoluteRedirectUrl = `${baseUrl}${staticRedirects[slug]}?latency=${latency}`;
    // return NextResponse.redirect(absoluteRedirectUrl);
  }

  // Check dynamic redirects
  if (parseInt(slug) >= 1001 && parseInt(slug) <= 10000) {
    const redirectUrl = await redis.get(slug);
    if (redirectUrl) {
      const latency = Date.now() - start;
      const absoluteRedirectUrl = new URL(`${redirectUrl}?latency=${latency}`, baseUrl);
      return NextResponse.redirect(absoluteRedirectUrl);
    }
  }
  // Fallback for non-existent paths
  return new NextResponse('Not Found', { status: 404 });
}

// export const config = {
//   matcher: '/:slug*'
// };
