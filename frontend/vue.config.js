const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  indexPath: path.resolve(__dirname, "../app/Views/frontend/index.html"),
  outputDir: path.resolve(__dirname, "../public"),
  publicPath: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
})