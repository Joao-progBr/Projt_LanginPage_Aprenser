const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const sourcemaps = require('gulp-sourcemaps')


function compSass(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe( gulp.dest('./dist/styles'))
}

function compImages(){
    return gulp.src('./src/images/**/**')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}


exports.default = gulp.parallel(compSass, compImages)
exports.watch = (function(){
    gulp.watch ('./src/styles/*.scss', gulp.parallel(compSass))
})