const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
    {
        test: /\.js(x)?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-react",
            "@babel/preset-typescript",
            "@babel/preset-env"
          ]
        }
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, 'public', 'index.html'),
  //     filename: 'index.html'
  //   })
  // ]
}