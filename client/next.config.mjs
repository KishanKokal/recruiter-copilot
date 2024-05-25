/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HOST_BASE_URL: process.env.HOST_BASE_URL,
  },
};

export default nextConfig;
