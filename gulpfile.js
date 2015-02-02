var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  to5 = require('6to5ify').configure({
    blacklist: ['useStrict']
  });

gulp.task('trello', function() {
  return browserify()
    .transform(to5)
    .add('./src/trello/main.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/trello/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['trello']);
});
