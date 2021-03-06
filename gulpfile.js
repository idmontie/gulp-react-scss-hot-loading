require('babel-core/register');

var gulp = require('gulp'),
    touch = require('touch'),
    sass = require('gulp-sass'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config.js'),
    eslint = require('gulp-eslint'),
    mocha = require('gulp-mocha');

var devServer = {};

gulp.task('css', function () {
  return gulp.src('./src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('copy-assets', function () {
  gulp.src('src/index.html')
      .pipe(gulp.dest('./dist'));
});

gulp.task('webpack-prod', function(callback) {
  process.env.NODE_ENV = 'production';
  webpack(webpackConfig('PROD'), function(err, stats) {
    callback();
  });
});

gulp.task('webpack-dev-server', ['css'], function(callback) {
  touch.sync('./dist/styles/main.css', {time : new Date(0) });

  devServer = new WebpackDevServer(webpack(webpackConfig('DEBUG')), {
    contentBase: './dist',
    hot: true,
    watchOptions: {
      aggregateTimeout: 100,
      poll: 300
    },
    publicPath: '/js/',
    noInfo: true,
    historyApiFallback: true
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
  gulp.watch(['assets/**', 'src/index.html'], ['copy-assets']);
});

gulp.task('lint', function() {
  return gulp.src(['src/js/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('test', function () {
  gulp.src([
    'tests/**/*.js',
    'tests/**/*.jsx'
  ]).pipe(mocha());
});

gulp.task('build', ['css', 'copy-assets', 'webpack-prod']);

gulp.task('default', ['lint', 'test'], function () {
  gulp.start('build');
});
