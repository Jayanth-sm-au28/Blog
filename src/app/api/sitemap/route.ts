// pages/api/sitemap.js
import { getAllStrapiSlugs } from '@/utils/Strapi';
import { createSitemapXml } from '@/utils/SiteMap';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';
import { getAllNextJsSlugs } from '@/utils/Nextjs';

export async function POST(request:Request) {
  try {
    // Fetch slugs from Strapi
    const strapiSlugs = await getAllStrapiSlugs();
    const nextJsSlugs = await getAllNextJsSlugs();
    const allSlugs = [...strapiSlugs, ...nextJsSlugs];
    // Generate sitemap XML
    const sitemapXml = createSitemapXml(allSlugs);

    // Write sitemap to public directory
    const filePath = join(process.cwd(), 'public', 'sitemap.xml');
    writeFileSync(filePath, sitemapXml);

    // Respond with sitemap XML
    const response = new NextResponse(sitemapXml, { headers: { 'Content-Type': 'text/xml' } });
    return response;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
