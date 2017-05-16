const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/'],
  output: {
    path: 'build/',
    filename: 'app.js',
    publicPath: 'build/'
  },
  devServer: {
    inline: true
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    alias: {
      app: path.join( __dirname, 'src' )
    }
  }
};
