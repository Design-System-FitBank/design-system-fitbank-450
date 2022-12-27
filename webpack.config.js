const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
    // {
    //     test: /\.js(x)?$/,
    //     loader: require.resolve('babel-loader'),
    //     exclude: /node_modules/,
    //     options: {
    //       presets: [
    //         "@babel/preset-react",
    //         "@babel/preset-typescript",
    //         "@babel/preset-env"
    //       ]
    //     }
    //   },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
}