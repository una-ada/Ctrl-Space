/*----- IMPORTS --------------------------------------------------------------*/
const { dest, series, src, watch } = require('gulp'),
  concat = require('gulp-concat'),
  minify = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  web = require('gulp-webserver'),
  /*----- CONSTANTS ----------------------------------------------------------*/
  buildPath = '_build',
  css = 'game.min.css',
  host = 'localhost',
  js = 'game.min.js',
  port = '5000',
  source = {
    css: ['src/css/*.css'],
    js: ['src/js/game.js', 'src/js/*.js'],
    html: ['src/index.html'],
  };

/*----- TASKS ----------------------------------------------------------------*/
const build = {
    css: _ =>
      src(source.css).pipe(concat(css)).pipe(minify()).pipe(dest(buildPath)),
    html: _ => {},
    js: _ =>
      src(source.js).pipe(concat(js)).pipe(uglify()).pipe(dest(buildPath)),
  },
  buildAll = series(build.js, build.css),
  serve = _ =>
    src('./src').pipe(
      web({
        host,
        port,
        fallback: 'index.html',
        livereload: false,
        directoryListing: false,
        open: true,
      })
    );

module.exports = {
  serve,
  build: buildAll,
  default: series(buildAll, serve),
};
