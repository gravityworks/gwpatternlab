'use strict';

var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	nodeunit 	= require('gulp-nodeunit'),
	del			= require('del'),
	lr 			= require('tiny-lr')(),
    express 	= require('express'),
    app 		= express();

var loadTasks = require('gulp-load')(gulp);


// Setup Express and Livereload server

var EXPRESS_ROOT = __dirname + '/public';
var EXPRESS_PORT = 4000;
var LIVERELOAD_PORT = 35729;


function notifyLivereload(event) {
  var fileName = require('path').relative(EXPRESS_ROOT, event.path); 
  lr.changed({
    body: {
      files: [fileName]
    }
  });
}


gulp.task('connect', function () {
  app.use(require('connect-livereload')());
  app.use(express.static(EXPRESS_ROOT));
  app.listen(EXPRESS_PORT);
  console.log('\n Serving Patternlab at localhost:' + EXPRESS_PORT + '\n');

});

gulp.task('startLivereload', function() {
  lr.listen(LIVERELOAD_PORT);
  console.log('\n Started livereload server on port ' + LIVERELOAD_PORT + '\n');
});

// Clean Patternlab
gulp.task('clean', function(cb) {
	del([
		'./public/patterns'
	], cb);
});


// Copy Tasks
gulp.task('copy:js', function() {
	gulp.src('./source/js/*.js')
		.pipe(gulp.dest('./public/js'));
});
gulp.task('copy:img', function() {
	gulp.src('./source/images/**/*.{png,jpg,gif,jpeg}')
		.pipe(gulp.dest('./public/images'));
});
gulp.task('copy:fonts', function() {
	gulp.src('./source/fonts/*.*')
		.pipe(gulp.dest('./public/fonts'));
});
gulp.task('copy:data', function() {
	gulp.src('./source/_data/annotations.js')
		.pipe(gulp.dest('./public/_data'));
});
gulp.task('copy', ['copy:js','copy:img','copy:fonts','copy:data']);

// CSS Tasks
gulp.task('sass', function() {
	gulp.src('./source/css/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public/css'));
	gulp.src('./public/styleguide/css/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public/styleguide/css'));
});

// Unit Testing
gulp.task('nodeunit', function () {
    gulp.src('./test/*.js')
        .pipe(nodeunit());
});

// Load Patternlab Tasks
gulp.loadTasks(__dirname + '/builder/patternlab_gulp.js');


// Watch
gulp.task('watch', function() {
	gulp.watch('./source/css/**/*.scss', ['sass']);
	gulp.watch('./public/css/*.css', notifyLivereload);
	gulp.watch('./source/_patterns/**/*.mustache', ['patternlab']);
	gulp.watch('./public/**/**/**/*.html', notifyLivereload);
});

// Tasks
gulp.task('serve', ['connect','startLivereload']);
gulp.task('default', ['patternlab', 'copy', 'connect', 'startLivereload','watch']);