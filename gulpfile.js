const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const webpack = require('webpack-stream');

function html() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
};

function assets() {
  return gulp.src(['src/*.png', 'src/*.jpg', 'src/*.svg'])
    .pipe(gulp.dest('dist/assets/'))
}

function sassy() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
};

function webpk() {
  return gulp.src('src/js/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/js/'));
};

gulp.task('build', gulp.series(html, assets, webpk, sassy));

gulp.watch(['src/*.html', 'src/scss/style.scss', 'src/js/index.js'], gulp.series(html, assets, webpk, sassy));
