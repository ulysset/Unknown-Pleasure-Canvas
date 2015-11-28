//require each gulp plugins
var gulp         = require('gulp'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync').create(),
    imagemin     = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    babel        = require('gulp-babel'),
    sourcemaps   = require('gulp-sourcemaps'),
    concat       = require('gulp-concat');

//prevent gulp from stop watching and returns errors
function errorLog(error){
    console.error.bind(error);
    this.emit('end');
}

// task script
gulp.task('script', function(){
    // source
    gulp.src('js/*.js')
    // actions
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        // create a *.js.map
        .pipe(sourcemaps.write('.'))
        .on('error', errorLog)
    //destination
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
});
// //live reload it
// gulp.task('script-watch', ['script'], browserSync.reload);

//task style (sass, autoprefixer...)
gulp.task('style', function(){
    gulp.src('css/**/*')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle : 'compressed'}))
        .on('error', errorLog)
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

// image compressor
gulp.task('image', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'));
});

// html
gulp.task('html', function(){
    gulp.src('*.html')
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
});



//watches changes and trigger an action
gulp.task('watch', /*maybe add something here*/ function(){
    browserSync.init({
        server : {
            //where is the index.html?
            baseDir : 'build/'
        }
    });
    gulp.watch('*.html', ['html']);
    gulp.watch('img/**/*', ['image']);
    gulp.watch('js/*.js', ['script']);
    // might want to change to scss
    gulp.watch('css/*', ['style']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

//trigger by default each time you run gulp an array of tasks
//order sensitive?
gulp.task('default', ['script', 'style', 'image', 'html', 'watch']);




































/**
 *  PUSH
 */
