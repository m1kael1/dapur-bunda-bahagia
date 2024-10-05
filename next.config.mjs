/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8090",
        pathname: "/**"
      }, {
        protocol: "https",
        hostname: "dbb-lsp1.pockethost.io",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;



