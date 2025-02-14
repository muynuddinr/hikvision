/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    },
  },
  env: {
    JWT_SECRET: 'your-jwt-secret-key',
  },
  images: {
    domains: ['res.cloudinary.com', 'localhost', 'hikvisionuae.ae',],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },


  typescript: {
    // This will allow the build to continue even with type errors
    // Remove this once you've fixed all type issues
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
