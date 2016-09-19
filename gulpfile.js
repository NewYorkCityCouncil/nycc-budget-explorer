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
      './assets/scripts/summary.js',
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
