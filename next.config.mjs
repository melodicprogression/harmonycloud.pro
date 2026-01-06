/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/appstore',
        destination: 'https://apps.apple.com/us/app/harmony-cloud-pro/id6748590924',
        permanent: false,
      },
      {
        source: '/JEN2026',
        destination: 'https://apps.apple.com/redeem?ctx=offercodes&id=6748590924&code=JEN2026',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
