/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'jg-app.obs.cn-north-4.myhuaweicloud.com' // 添加这个域名到白名单
        ],
      },
};

export default nextConfig;
