let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('sass', function () {
  return gulp.src('app/sass/main.sass')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', function () {
  return gulp.src('app/js/main.js')
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
    notify: false
  });
});

gulp.task('watch', function(){
  gulp.watch('app/sass/main.sass', gulp.parallel('sass'))
  gulp.watch('app/*.html', gulp.parallel('html'))
  gulp.watch('app/js/main.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));