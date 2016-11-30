"use strict";

var gulp = require("gulp");
var browserify = require('browserify');
var babelify = require("babelify");
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: 'js/app.jsx', extensions: ['.jsx'], debug: true})
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
    gulp.watch("./js/*.jsx", ["build"]).on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});