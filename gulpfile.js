var gulp = require('gulp');
var server = require('gulp-express');
var open = require('gulp-open');
gulp.task('default',['start','watch']);
gulp.task('start',function(){
  server.run(['bin/www']);
  gulp.src('')
  .pipe(open({
    uri:'http://localhost:3000',
    app:'chrome'
  }));
});
gulp.task('watch',function(){
  gulp.watch('views/*.ejs',server.notify);
  gulp.watch('app.js',server.run);
});
