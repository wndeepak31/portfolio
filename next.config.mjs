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
    ];
  },
};

export default nextConfig;
