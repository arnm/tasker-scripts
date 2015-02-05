var gulp = require('gulp'),
  watch = require('gulp-watch'),
  coffeeify = require('coffeeify'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream')

gulp.task('trello', function() {
  return browserify()
    .transform(coffeeify)
    .add('./src/trello/add_card.coffee')
    .bundle()
    .pipe(source('add_card.js'))
    .pipe(gulp.dest('./dist/trello/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.coffee', ['trello']);
});
