import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://www.deinesteuern.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'deinesteuern.com' }],
        destination: 'https://www.deinesteuern.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;