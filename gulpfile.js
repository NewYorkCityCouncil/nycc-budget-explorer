// Include gulp & plugins
var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

// Compile, autoprefix, minify SASS
gulp.task('styles', function() {
  return gulp.src('./assets/scss/*.scss')
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9'],
        cascade: false
    }))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('./assets/css/'))
});

// Concat, minify JavaScript
gulp.task('scripts', function() {
  return gulp.src([
      './node_modules/isotope-layout/dist/isotope.pkgd.min.js',
      './assets/data/summary.js',
      './assets/scripts/app.js'
    ])
    .pipe(plugins.concat('scripts.js'))
    .pipe(gulp.dest('./assets/js/'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./assets/js/'))
});

// Create a default task
gulp.task('default', function() {
  gulp.start('styles');
  gulp.start('scripts');
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('./assets/scss/*.scss', ['styles']);
  gulp.watch('./assets/scripts/*.js', ['scripts']);
});

// Download the Budget OpenData
var request = require('request');
var fs = require('fs');
gulp.task('data', function () {
  return request('https://data.cityofnewyork.us/resource/66mb-ky9b.json?$select=fiscal_year,agency_number,budget_code_number,object_class_number,object_code,unit_appropriation_number,financial_plan_amount&$where=financial_plan_amount%3E0&publication_date=20160615').pipe(fs.createWriteStream('./assets/data/66mb-ky9b.json'));
});
