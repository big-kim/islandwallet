/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@ic-wallet/ui", "@ic-wallet/sdk"],
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
