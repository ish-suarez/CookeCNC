/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['img.icons8.com',] },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
