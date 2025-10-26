/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  assetPrefix: '',
}

module.exports = nextConfig
