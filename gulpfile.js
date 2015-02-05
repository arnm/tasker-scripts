var gulp = require('gulp'),
  watch = require('gulp-watch'),
  coffeeify = require('coffeeify'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  to5 = require('6to5ify').configure({
    blacklist: ['useStrict']
  });

gulp.task('trello', function() {
  return browserify()
    .transform(coffeeify)
    .add('./src/trello/main.coffee')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/trello/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.coffee', ['trello']);
});
