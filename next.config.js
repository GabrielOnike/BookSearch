/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: '*',
        hostname: '**',
      },
    ],
    domains: ["placeimg.com", "cdn.pixabay.com", "gutenberg.org", "www.gutenberg.org"]
 }
}
