/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Del Norte HS Computer Science',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://nighthawkcoders.github.io/kasm_registry/1.0/',
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
