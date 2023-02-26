const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


gulp.task('sass', function() {
    return gulp.src('./public/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
    gulp.watch('./public/sass/**/*.scss', gulp.series('sass'));
});