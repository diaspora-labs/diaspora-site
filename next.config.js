const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require("path")

// import CopyWebpackPlugin from "copy-webpack-plugin"
// import path from "path"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker",
          },
        },
      ],
    })

    config.plugins = [
      ...config.plugins,
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(path.dirname(require.resolve("pdfjs-dist/package.json")), "cmaps"),
            to: "cmaps/",
          },
        ],
      }),
    ]

    return config
  },
}

module.exports = nextConfig
