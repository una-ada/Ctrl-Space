/*----- IMPORTS --------------------------------------------------------------*/
const { dest, series, src, watch } = require('gulp'),
  concat = require('gulp-concat'),
  htmlmin = require('gulp-htmlmin'),
  minify = require('gulp-clean-css'),
  replace = require('gulp-html-replace'),
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
    html: _ =>
      src(source.html)
        .pipe(replace({ css, js }))
        .pipe(htmlmin())
        .pipe(dest(buildPath)),
    js: _ =>
      src(source.js).pipe(concat(js)).pipe(uglify()).pipe(dest(buildPath)),
  },
  buildAll = series(build.js, build.css, build.html),
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
