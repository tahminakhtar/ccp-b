import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'facebook.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'instagram.com',
        port: '',
        pathname: '/**',
      },
    ],
  },  
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
