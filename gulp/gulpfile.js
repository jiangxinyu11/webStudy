var gulp = require('gulp');
var sass = require('gulp-sass')
gulp.task('test',function () {
    console.log('haha');
});
gulp.task('test2',function () {
    console.log('hehe');
});
gulp.task('default',['test','test2']);

gulp.task('test1',function () {
    gulp.src('index.html');
});

