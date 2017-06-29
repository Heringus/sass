var gulp = require('gulp');
gulp.task('pranie', function (){
  console.log('robie pranie');
});
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var input = 'sass/**/*.scss';
var output = 'css/';
var sassOptions ={
  outputStyle:'expanded'
};
gulp.task('sass', function(){
  return gulp
  .src (input)
  .pipe(sourcemaps.init())
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(output))
});
gulp.task('watch', function (){
  gulp.watch(input, ['sass', ])
});
