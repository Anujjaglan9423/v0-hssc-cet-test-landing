/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: {},
  
  // ============================================
  // DATA TRANSFER OPTIMIZATIONS
  // ============================================
  
  // 1. Enhanced compression with brotli
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
  
  // 2. SWR (stale-while-revalidate) for ISR pages
  experimental: {
    isrMemoryCacheSize: 50 * 1024 * 1024, // 50MB cache for ISR
  },
  
  // 3. Bundle analysis (optional - remove if not needed)
  // Enable with: ANALYZE=true npm run build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };
    }
    return config;
  },
};

export default nextConfig;
