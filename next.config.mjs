/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 't3.gstatic.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
