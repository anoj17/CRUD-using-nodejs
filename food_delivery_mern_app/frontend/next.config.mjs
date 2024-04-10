/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                hostname: 'food-delivery-backend-henna.vercel.app',
            },

        ],
    },
};

export default nextConfig;

