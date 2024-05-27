// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
  async redirects() {
    return [
      {
        source: '/:slug(\\d{1,4})',
        destination: '/api/redirect',
        permanent: false,
      },
    ];
  },
};

export { nextConfig };
