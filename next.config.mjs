/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackMemoryOptimizations: true,
    reactCompiler: true,
  },
  images: {
    remotePatterns: [{ hostname: "static.tildacdn.com" }],
  },
};

export default nextConfig;
