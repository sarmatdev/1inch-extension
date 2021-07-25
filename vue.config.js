const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path')

module.exports = {
  filenameHashing: false,
  configureWebpack: {
    mode: process.env.NODE_ENV,
    entry: {
      entry: `src/index.ts`,
      filename: `popup.html`
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      chunkFilename: `[name].js`
    },
    plugins: [
      CopyWebpackPlugin([
        {
          from: path.resolve(`src/manifest.${process.env.NODE_ENV}.json`),
          to: `${path.resolve('dist')}/manifest.json`
        },
        {
          from: 'src/icons',
          to: './icons'
        },
        {
          from: 'src/index.html',
          to: './popup/index.html'
        }
      ])
    ]
  }
}
