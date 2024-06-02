/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: 'static.tildacdn.com' }],
    },
};

export default nextConfig;
