/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['img.icons8.com',] },
  compiler: { styledComponents: true },
  experimental: { images: { allowFutureImage: true } },
}

module.exports = nextConfig
