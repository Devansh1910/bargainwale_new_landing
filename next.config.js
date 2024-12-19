/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Match SVG files
      use: [
        {
          loader: '@svgr/webpack', // Use @svgr/webpack to handle SVGs
          options: {
            icon: true, // Optional: Treat SVGs as icons
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
