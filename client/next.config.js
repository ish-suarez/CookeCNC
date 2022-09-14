/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['img.icons8.com',] },
  compiler: { styledComponents: true },
  experimental: { images: { allowFutureImage: true } },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
