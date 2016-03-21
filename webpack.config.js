var path = require('path');
var webpack = require('webpack');

var babelSettings = {
  'presets': [
    'es2015',
    'react',
    'stage-2'
  ],
  'plugins': [
    'transform-class-properties'
  ]
}

module.exports = function (type) {
  var entry,
      exportables = {},
      loaders,
      plugins;

  if (type === 'DEBUG') {
    entry = [
      "webpack-dev-server/client?http://0.0.0.0:3000",
      'webpack/hot/only-dev-server',
      './src/js/index.jsx'
    ];
    exportables.DEBUG = true;
    loaders = ['react-hot', 'babel?' + JSON.stringify(babelSettings)];
    plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(exportables)
    ];
  } else {
    entry = [
      './src/js/index.jsx'
    ];
    exportables.DEBUG = false;
    loaders = ['babel?' + JSON.stringify(babelSettings)];
    plugins = [
      new webpack.DefinePlugin(exportables)
    ];
  }

  return {
    entry: entry,
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
    plugins: plugins,
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        { test: /\.css$/, loaders: ['style', 'css']},
        {
          test: /\.js(x)?$/,
          exclude: /node_modules/,
          loaders: loaders
        }
      ]
    }
  };
};
