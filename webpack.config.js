var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:3000",
    'webpack/hot/only-dev-server',
    './src/js/index.jsx'
  ],
  devtool: "eval",
  debug: true,
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    publicPath: '/js/',
    filename: 'index.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEBUG: true
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css']},
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
      }
    ]
  }
};
