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

// Download the open data and group items with matching agency_number & budget_code_number
gulp.task('data', function () {
  plugins.remoteSrc(['66mb-ky9b.json?$select=agency_number,budget_code_number,object_class_number,object_code,unit_appropriation_number,financial_plan_amount&$where=financial_plan_amount%3E0&publication_date=20160615'], {
        base: 'https://data.cityofnewyork.us/resource/'
    })
  .pipe(plugins.jsonEditor(function(json){
    // http://codereview.stackexchange.com/questions/37028/grouping-elements-in-array-by-multiple-properties
    function groupBy(array,f){
      var groups = {};
      array.forEach(function(o){
        var group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
      });
      return Object.keys(groups).map(function(group){
        return groups[group];
      });
    }
    var result = groupBy(json,function(item){
      return [
        item.agency_number,
        item.budget_code_number
      ];
    });
    return result;
  }))
  .pipe(plugins.rename('66mb-ky9b.json'))
  .pipe(gulp.dest('./assets/data'))
});
