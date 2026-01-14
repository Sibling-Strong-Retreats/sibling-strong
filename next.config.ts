import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sibling-strong',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
