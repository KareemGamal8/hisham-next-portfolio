/** @type {import('next').NextConfig} */
import { withNextVideo } from "next-video/process";

const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default withNextVideo(nextConfig);
