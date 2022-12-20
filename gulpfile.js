var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var webp = require('gulp-webp');
var imagemin = require('gulp-imagemin');

const { src, series, parallel, dest, watch } = require('gulp');

gulp.task('placementJs', function(){
    path = './js/';
    return gulp.src([
        path + 'custom.js',
        path + 'lightbox.js'
    ])
    .pipe(concat('placement.js'))
    .pipe(minify())
    .pipe(gulp.dest('dest/js'));
});

gulp.task('enrolJs', function(){
    path = './js/';
    return gulp.src([
        path + 'enrol.js',
    ])
    .pipe(concat('enrol.js'))
    .pipe(minify())
    .pipe(gulp.dest('dest/js'));
});

gulp.task('mainJs', function(){
    path = './js/';
    return gulp.src([
        path + 'main.js',
    ])
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(gulp.dest('dest/js'));
});

gulp.task('newCareersJs', function(){
    path = './js/';
    return gulp.src([
        path + 'open-jobs.js',
        path + 'festival.js',
    ])
    .pipe(concat('new-careers.js'))
    .pipe(minify())
    .pipe(gulp.dest('dest/js'));
});

gulp.task('newsJs', function(){
    path = './js/';
    return gulp.src([
        path + 'news.js',
    ])
    .pipe(concat('news.js'))
    .pipe(minify())
    .pipe(gulp.dest('dest/js'));
});
// gulp.task('successStoriesJs', function(){
//     path = './js/';
//     return gulp.src([
//         path + 'success-stories.js',
//     ])
//     .pipe(concat('success-stories.js'))
//     .pipe(minify())
//     .pipe(gulp.dest('dest/js'));
// });


gulp.task('newPlacementJs', function(){
    path = './js/';
    return gulp.src([
        path + 'placement-pagination-data.js',
    ])
    .pipe(concat('new-placement.js'))
    .pipe(minify())
    .pipe(gulp.dest('dest/js'));
});
gulp.task('reviewJs', function(){
    path = './js/';
    return gulp.src([
        path + 'review.js',
    ])
    .pipe(concat('review.js'))
    .pipe(minify())
    .pipe(gulp.dest('dest/js'));
});


gulp.task('formJs', function(){
    path = './js/';
    return gulp.src([
        path + 'popup-form.js',
        path + 'brochure-form.js',
        path + 'form.js',
        path + 'footer-form.js',
        path + 'banner-inquiry.js',
        path + 'career-guide-popup.js',
        path + 'career-form.js',
        path + 'api.js',
    ])
    .pipe(concat('form.js'))
    .pipe(minify())
    .pipe(gulp.dest('dest/js'));
});

// to run all Js task at once
// gulp.task('allJs', gulp.series('placementJs', 'enrolJs', 'mainJs', 'newCareersJs', 'newPlacementJs', 'formJs','newsJs','successStoriesJs'));
gulp.task('allJs', gulp.series('placementJs', 'enrolJs', 'mainJs', 'newCareersJs', 'newPlacementJs', 'formJs','newsJs','reviewJs'));



// for CSS
const bundleCSS = () => {
    path = './css/';
    return src([
        path + ''
    ])
    .pipe()
}

//minify css
gulp.task('allCss', () => {
    return gulp.src('css/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('dest/css'));
});
  
//minify img



gulp.task('img', async () => {
    gulp.src([
        'images/*.png',
        'images/*.jpg',
        'images/*.jpeg'
    ])
    //   .pipe(imagemin())
      .pipe(webp())
      .pipe(gulp.dest('dest/img'))
  });