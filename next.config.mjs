/** @type {import('next').NextConfig} */
const nextConfig = {
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
