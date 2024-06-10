/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.CMS_HOST]
  },
  reactStrictMode: true,
};

export default nextConfig;
