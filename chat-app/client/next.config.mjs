/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // formats: ['image/avif', 'image/webp', 'image/jpg', 'image/png'],

        remotePatterns: [
            {
                // protocol: 'https',
                hostname: 'res.cloudinary.com',
                // port: '',
                // pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
