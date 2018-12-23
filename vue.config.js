const path = require('path');

module.exports = {
  // The base URL your application bundle will be deployed at.
  // For example, if your app is deployed at https://www.foobar.com/my-app/,
  // set baseUrl to '/my-app/'.
  baseUrl: process.env.VUE_APP_BASE_URL || '/',

  // The directory where the production build files will be generated in when
  // running 'vue-cli-service build'.
  outputDir: 'dist',

  // A directory (relative to 'outputDir') to nest generated static assets
  // (js, css, img, fonts) under.
  assetsDir: '',

  // Specify the output path for the generated index.html (relative to
  // 'outputDir').
  indexPath: 'index.html',

  // Generated static assets contains hashes in their filenames for better
  // caching control.
  filenameHashing: true,

  // Whether to perform lint-on-save during development using 'eslint-loader'.
  lintOnSave: true,

  // Whether to use the build of Vue core that includes the runtime compiler.
  runtimeCompiler: false,

  // By default 'babel-loader' ignores all files inside 'node_modules'.
  transpileDependencies: [],

  productionSourceMap: false,

  // It will be merged into the final config using 'webpack-merge'.
  configureWebpack: {
    resolve: {
      modules: ['src'],
      alias: {
        assets: path.resolve(__dirname, 'src/assets/'),
        components: path.resolve(__dirname, 'src/components/'),
        config: path.resolve(__dirname, 'src/config/'),
        pages: path.resolve(__dirname, 'src/pages/'),
        store: path.resolve(__dirname, 'src/store/'),
      },
    },
  },

  css: {
    // Pass options to CSS-related loaders.
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
        `,
      },
    },
  },
};
