/*----- IMPORTS --------------------------------------------------------------*/
const { dest, series, src, watch } = require('gulp'),
  web = require('gulp-webserver');

/*----- CONSTANTS ------------------------------------------------------------*/
const buildPath = '_build',
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
    css: _ => {},
    html: _ > {},
    js: _ => {},
  },
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
  default: series(serve),
};
