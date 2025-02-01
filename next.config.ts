import type { NextConfig } from 'next'

const config: NextConfig = {
  transpilePackages: ['@splinetool/runtime'],
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  eslint: {
    ignoreDuringBuilds: true, // 如果你想在构建时忽略 ESLint 错误
  }
}

export default config