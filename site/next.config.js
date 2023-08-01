/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Del Norte HS Computer Science',
    description: 'Del Norte HS Kasm supported workspaces.',
    icon: 'https://nighthawkcoders.github.io/kasm_registry/1.0/logo.png',
    listUrl: 'https://nighthawkcoders.github.io/kasm_registry/',
    contactUrl: 'https://github.com/nighthawkcoders/kasm_registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
