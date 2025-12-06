/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/appstore',
        destination: 'https://apps.apple.com/us/app/harmony-cloud-pro/id6748590924',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
