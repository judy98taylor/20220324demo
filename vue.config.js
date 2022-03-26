const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/20220324demo/",
  outputDir: "docs",
  productionSourceMap: false,
});
