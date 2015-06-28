var doxray = require('doxray');
var gulp = require('gulp');

gulp.task('move-doxray-template', function() {
    return gulp.src('bower_components/doxray-template/template/*')
    .pipe(gulp.dest('docs'));
});

gulp.task('doxray', function() {
    doxray(['variables.less'], {
        jsFile: 'docs/doxray-parsed-data.js',
        logging: true
    });
});
