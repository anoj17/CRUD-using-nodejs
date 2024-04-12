/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],

        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
                // domains: ['res.cloudinary.com'],
            },
        ],
    },
};

export default nextConfig;
