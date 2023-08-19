/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@unknown-co/react-ui"],

  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
}

module.exports = nextConfig
