/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Handle figma:asset imports
    config.module.rules.push({
      test: /figma:asset/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: false,
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
