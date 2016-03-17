var gulp = require('gulp'),
    touch = require('touch'),
    sass = require('gulp-sass'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config.js');

var devServer = {};

gulp.task('css', function () {
  return gulp.src('./src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-assets', function () {
  gulp.src('src/index.html')
      .pipe(gulp.dest('./dist'));
});

gulp.task('webpack-dev-server', ['css'], function(callback) {
  touch.sync('./dist/main.css', {time : new Date(0) });

  devServer = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: './dist',
    hot: true,
    watchOptions: {
      aggregateTimeout: 100,
      poll: 300
    },
    noInfo: true
  });

  devServer.listen(3000, "0.0.0.0", function (err) {
    if (err) {
      console.log(err);
      throw err;
    }

    console.log( '[webpack-dev-server]', 'http://localhost:3000' );

    if (callback)
      callback();
  });
});

gulp.task('watch', ['css', 'copy-assets', 'webpack-dev-server'], function () {
  gulp.watch(['src/styles/**'], ['css']);
  gulp.watch(['assets/**'], ['copy-assets']);
});

gulp.task('default', function () {
  gulp.start('build');
});
