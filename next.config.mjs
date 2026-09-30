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
  async redirects() {
    return [
      { source: "/blog/haryana-cet-vs-uksssc-study-plan", destination: "/blog/haryana-cet-complete-preparation-guide", permanent: true },
      { source: "/blog/reasoning-and-quantitative-aptitude-strategy", destination: "/blog/government-exam-preparation-guide-for-aspirants", permanent: true },
      { source: "/blog/exam-day-strategy-and-time-management", destination: "/blog/mock-test-analysis-and-final-revision-plan", permanent: true },
    ]
  },
  
  // ============================================
  // DATA TRANSFER OPTIMIZATIONS
  // ============================================
  
  // 1. Enable React Compiler for automatic optimization
  // Reduces bundle size, improves rendering performance
  reactCompiler: true,
  
  // 2. Enhanced compression with brotli
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
  
  // 3. Experimental features are now built-in to Next.js 16
  
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
