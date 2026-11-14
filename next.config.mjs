/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/how-to-use',
        destination: '/how-to-work-with-us',
        permanent: true,
      },
      {
        source: '/services/ai-solutions',
        destination: '/services/ai-automation',
        permanent: true,
      },
      {
        source: '/services/cloud-native',
        destination: '/services/cloud-architecture',
        permanent: true,
      },
      {
        source: '/services/web-platforms',
        destination: '/services/custom-saas',
        permanent: true,
      },
      {
        source: '/services/dedicated-teams',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/security-audit',
        destination: '/security',
        permanent: true,
      },
      {
        source: '/blog/hybrid-workforce-saas-efficiency',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
