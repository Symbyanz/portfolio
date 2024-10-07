/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
dotenv.config();

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: process.env.PROD_URL,
                port: '3000',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: '194.87.43.32',
                port: '',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;
