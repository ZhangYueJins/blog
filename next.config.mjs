/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',  // 新增这一行
  basePath: isProd ? '/blog' : '',
  assetPrefix: isProd ? '/blog/' : '',
};
