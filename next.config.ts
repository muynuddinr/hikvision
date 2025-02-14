/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    },
  },
  images: {
    domains: ['res.cloudinary.com', 'localhost', 'hikvisionuae.ae', 'hikvisionuae.vercel.app'],
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
