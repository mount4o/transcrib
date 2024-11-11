// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // When requests are made to /api/<path>, they will be proxied
        destination: 'https://your-remote-api.com/:path*',
      },
    ];
  },
};

export default nextConfig;