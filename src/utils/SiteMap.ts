// utils/sitemap.js
export function createSitemapXml(slugs:any) {
    const urls = slugs.map((slug:any) => `
      <url>
        <loc>${process.env.NEXT_PUBLIC_SITE_URL}/${slug}</loc>
      </url>
    `).join('');
  
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;
  }
  