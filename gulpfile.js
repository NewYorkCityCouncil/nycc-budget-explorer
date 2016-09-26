// Include gulp & plugins
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
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

// Download the open data
gulp.task('data', function() {
  plugins.remoteSrc(['66mb-ky9b.json?$select=agency_number,budget_code_number,object_class_number,object_code,unit_appropriation_number,financial_plan_amount&$where=financial_plan_amount%3E0&publication_date=20160615'], {
      base: 'https://data.cityofnewyork.us/resource/'
  })
  .pipe(plugins.jsonEditor(function(json){

    function replaceByValue(field) {
      for( var k = 0; k < json.length; ++k ) {
        if( "068" == json[k][field] ) { json[k][field] = "ADMIN FOR CHILDREN'S SERVICES";}
        if( "073" == json[k][field] ) { json[k][field] = "BOARD OF CORRECTION";}
        if( "003" == json[k][field] ) { json[k][field] = "BOARD OF ELECTIONS";}
        if( "829" == json[k][field] ) { json[k][field] = "BUSINESS INTEGRITY COMMISSION";}
        if( "010" == json[k][field] ) { json[k][field] = "BOROUGH PRESIDENT";}
        if( "011" == json[k][field] ) { json[k][field] = "BOROUGH PRESIDENT";}
        if( "012" == json[k][field] ) { json[k][field] = "BOROUGH PRESIDENT";}
        if( "013" == json[k][field] ) { json[k][field] = "BOROUGH PRESIDENT";}
        if( "014" == json[k][field] ) { json[k][field] = "BOROUGH PRESIDENT";}
        if( "004" == json[k][field] ) { json[k][field] = "CAMPAIGN FINANCE BOARD";}
        if( "103" == json[k][field] ) { json[k][field] = "CITY CLERK";}
        if( "102" == json[k][field] ) { json[k][field] = "CITY COUNCIL";}
        if( "042" == json[k][field] ) { json[k][field] = "CITY UNIVERSITY OF NEW YORK";}
        if( "134" == json[k][field] ) { json[k][field] = 'CIVIL SERVICE COMMISSION';}
        if( "054" == json[k][field] ) { json[k][field] = 'CIVILIAN COMPLAINT REVIEW BOARD';}
        if( '226' == json[k][field] ) { json[k][field] = 'COMMISSION ON HUMAN RIGHTS';}
        if( '341' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '342' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '343' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '344' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '345' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '346' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '347' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '348' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '349' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '350' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '351' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '352' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '381' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '382' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '383' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '384' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '385' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '386' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '387' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '388' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '389' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '390' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '391' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '392' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '431' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '432' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '433' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '434' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '435' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '436' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '437' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '438' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '439' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '440' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '441' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '442' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '443' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '444' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '471' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '472' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '473' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '474' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '475' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '476' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '477' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '478' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '479' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '480' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '481' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '482' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '483' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '484' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '485' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '486' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '487' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '488' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '491' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '492' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( '493' == json[k][field] ) { json[k][field] = 'COMMUNITY BOARD';}
        if( "312" == json[k][field] ) { json[k][field] = "CONFLICTS OF INTEREST BOARD";}
        if( "099" == json[k][field] ) { json[k][field] = "DEBT SERVICE";}
        if( "125" == json[k][field] ) { json[k][field] = "DEPARTMENT FOR THE AGING";}
        if( "810" == json[k][field] ) { json[k][field] = "DEPARTMENT OF BUILDINGS";}
        if( "030" == json[k][field] ) { json[k][field] = "DEPARTMENT OF CITY PLANNING";}
        if( "856" == json[k][field] ) { json[k][field] = "DEPARTMENT OF CITYWIDE ADMIN SERVICE";}
        if( "866" == json[k][field] ) { json[k][field] = "DEPARTMENT OF CONSUMER AFFAIRS";}
        if( "072" == json[k][field] ) { json[k][field] = "DEPARTMENT OF CORRECTION";}
        if( "126" == json[k][field] ) { json[k][field] = "DEPARTMENT OF CULTURAL AFFAIRS";}
        if( "850" == json[k][field] ) { json[k][field] = "DEPARTMENT OF DESIGN & CONSTRUCTION";}
        if( "040" == json[k][field] ) { json[k][field] = "DEPARTMENT OF EDUCATION";}
        if( "017" == json[k][field] ) { json[k][field] = "DEPARTMENT OF EMERGENCY MANAGEMENT";}
        if( "826" == json[k][field] ) { json[k][field] = "DEPARTMENT OF ENVIRONMENTAL PROTECT.";}
        if( "836" == json[k][field] ) { json[k][field] = "DEPARTMENT OF FINANCE";}
        if( "816" == json[k][field] ) { json[k][field] = "DEPARTMENT OF HEALTH AND MENTAL HYGIENE";}
        if( "071" == json[k][field] ) { json[k][field] = "DEPARTMENT OF HOMELESS SERVICES";}
        if( "858" == json[k][field] ) { json[k][field] = "DEPARTMENT OF INFO TECH & TELECOMM";}
        if( "032" == json[k][field] ) { json[k][field] = "DEPARTMENT OF INVESTIGATION";}
        if( "846" == json[k][field] ) { json[k][field] = "DEPARTMENT OF PARKS AND RECREATION";}
        if( "781" == json[k][field] ) { json[k][field] = "DEPARTMENT OF PROBATION";}
        if( "860" == json[k][field] ) { json[k][field] = "DEPARTMENT OF RECORDS & INFORMATION SVS";}
        if( "827" == json[k][field] ) { json[k][field] = "DEPARTMENT OF SANITATION";}
        if( "801" == json[k][field] ) { json[k][field] = "DEPARTMENT OF SMALL BUSINESS SERVICES";}
        if( "069" == json[k][field] ) { json[k][field] = "DEPARTMENT OF SOCIAL SERVICES";}
        if( "841" == json[k][field] ) { json[k][field] = "DEPARTMENT OF TRANSPORTATION";}
        if( "063" == json[k][field] ) { json[k][field] = "DEPARTMENT OF VETERANS' SERVICES";}
        if( "260" == json[k][field] ) { json[k][field] = "DEPARTMENT OF YOUTH & COMMUNITY DEV";}
        if( "901" == json[k][field] ) { json[k][field] = "DISTRICT ATTORNEY";}
        if( "902" == json[k][field] ) { json[k][field] = "DISTRICT ATTORNEY";}
        if( "903" == json[k][field] ) { json[k][field] = "DISTRICT ATTORNEY";}
        if( "904" == json[k][field] ) { json[k][field] = "DISTRICT ATTORNEY";}
        if( "905" == json[k][field] ) { json[k][field] = "DISTRICT ATTORNEY";}
        if( "133" == json[k][field] ) { json[k][field] = "EQUAL EMPLOYMENT PRACTICES COMMISSION";}
        if( "127" == json[k][field] ) { json[k][field] = "FINANCIAL INFORMATION SERVICE AGENCY";}
        if( "057" == json[k][field] ) { json[k][field] = "FIRE DEPARTMENT";}
        if( "819" == json[k][field] ) { json[k][field] = "HEALTH AND HOSPITALS CORP";}
        if( "806" == json[k][field] ) { json[k][field] = "HOUSING PRESERVATION AND DEVELOPMENT";}
        if( "132" == json[k][field] ) { json[k][field] = "INDEPENDENT BUDGET OFFICE";}
        if( "136" == json[k][field] ) { json[k][field] = "LANDMARKS PRESERVATION COMM.";}
        if( "025" == json[k][field] ) { json[k][field] = "LAW DEPARTMENT";}
        if( "035" == json[k][field] ) { json[k][field] = "LIBRARIES";}
        if( "037" == json[k][field] ) { json[k][field] = "LIBRARIES";}
        if( "038" == json[k][field] ) { json[k][field] = "LIBRARIES";}
        if( "039" == json[k][field] ) { json[k][field] = "LIBRARIES";}
        if( "002" == json[k][field] ) { json[k][field] = "MAYORALTY";}
        if( "098" == json[k][field] ) { json[k][field] = "MISCELLANEOUS";}
        if( "156" == json[k][field] ) { json[k][field] = "NYC TAXI AND LIMOUSINE COMM";}
        if( "820" == json[k][field] ) { json[k][field] = "OFFICE OF ADMIN TRIALS & HEARINGS";}
        if( "021" == json[k][field] ) { json[k][field] = "OFFICE OF ADMINISTRATIVE TAX APPEALS";}
        if( "313" == json[k][field] ) { json[k][field] = "OFFICE OF COLLECTIVE BARGAINING";}
        if( "131" == json[k][field] ) { json[k][field] = "OFFICE OF PAYROLL ADMINISTRATION";}
        if( "906" == json[k][field] ) { json[k][field] = "OFFICE OF PROSECUTION SPEC NARCO";}
        if( "008" == json[k][field] ) { json[k][field] = "OFFICE OF THE ACTUARY";}
        if( "015" == json[k][field] ) { json[k][field] = "OFFICE OF THE COMPTROLLER";}
        if( "095" == json[k][field] ) { json[k][field] = "PENSION CONTRIBUTIONS";}
        if( "056" == json[k][field] ) { json[k][field] = "POLICE DEPARTMENT";}
        if( "941" == json[k][field] ) { json[k][field] = "PUBLIC ADMINISTRATOR";}
        if( "942" == json[k][field] ) { json[k][field] = "PUBLIC ADMINISTRATOR";}
        if( "943" == json[k][field] ) { json[k][field] = "PUBLIC ADMINISTRATOR";}
        if( "944" == json[k][field] ) { json[k][field] = "PUBLIC ADMINISTRATOR";}
        if( "945" == json[k][field] ) { json[k][field] = "PUBLIC ADMINISTRATOR";}
        if( "945" == json[k][field] ) { json[k][field] = "PUBLIC ADMINISTRATOR";}
        if( "101" == json[k][field] ) { json[k][field] = "PUBLIC ADVOCATE";}
      }
      return json;
    }
    var renamedAgencies = replaceByValue('agency_number');

    // Group items with matching agency_number & budget_code_number
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
    var summary = groupBy(renamedAgencies,function(item){
      return [
        item.agency_number,
        item.budget_code_number
      ];
    });
    return summary;

  }))
  .pipe(plugins.rename('66mb-ky9b.json'))
  .pipe(gulp.dest('./assets/data/'))
});
