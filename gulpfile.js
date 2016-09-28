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
        var agencyID = json[k][field];
        if( ['068'] == agencyID ) { json[k][field] = "ADMIN FOR CHILDREN'S SERVICES";}
        if( ['073'] == agencyID ) { json[k][field] = "BOARD OF CORRECTION";}
        if( ['003'] == agencyID ) { json[k][field] = "BOARD OF ELECTIONS";}
        if( ['829'] == agencyID ) { json[k][field] = "BUSINESS INTEGRITY COMMISSION";}
        if( ['010','011','012','013','014'] == agencyID ) { json[k][field] = "BOROUGH PRESIDENT";}
        if( ['004'] == agencyID ) { json[k][field] = "CAMPAIGN FINANCE BOARD";}
        if( ['103'] == agencyID ) { json[k][field] = "CITY CLERK";}
        if( ['102'] == agencyID ) { json[k][field] = "CITY COUNCIL";}
        if( ['042'] == agencyID ) { json[k][field] = "CITY UNIVERSITY OF NEW YORK";}
        if( ['134'] == agencyID ) { json[k][field] = 'CIVIL SERVICE COMMISSION';}
        if( ['054'] == agencyID ) { json[k][field] = 'CIVILIAN COMPLAINT REVIEW BOARD';}
        if( ['226'] == agencyID ) { json[k][field] = 'COMMISSION ON HUMAN RIGHTS';}
        if( ['341','342','343','344','345','346','347','348','349','350','351','352','381',
          '382','383','384','385','386','387','388','389','390','391','392','431','432','433',
          '434','435','436','437','438','439','440','441','442','443','444','471','472','473',
          '474','475','476','477','478','479','480','481','482','483','484','485','486','487',
          '488','491','492','493'].indexOf(agencyID) != -1 ) { json[k][field] = "COMMUNITY BOARD";}
        if( ['312'].indexOf(agencyID) != -1 ) { json[k][field] = "CONFLICTS OF INTEREST BOARD";}
        if( ['099'].indexOf(agencyID) != -1 ) { json[k][field] = "DEBT SERVICE";}
        if( ['125'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT FOR THE AGING";}
        if( ['810'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF BUILDINGS";}
        if( ['030'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF CITY PLANNING";}
        if( ['856'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF CITYWIDE ADMIN SERVICE";}
        if( ['866'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF CONSUMER AFFAIRS";}
        if( ['072'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF CORRECTION";}
        if( ['126'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF CULTURAL AFFAIRS";}
        if( ['850'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF DESIGN & CONSTRUCTION";}
        if( ['040'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF EDUCATION";}
        if( ['017'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF EMERGENCY MANAGEMENT";}
        if( ['826'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF ENVIRONMENTAL PROTECT.";}
        if( ['836'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF FINANCE";}
        if( ['816'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF HEALTH AND MENTAL HYGIENE";}
        if( ['071'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF HOMELESS SERVICES";}
        if( ['858'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF INFO TECH & TELECOMM";}
        if( ['032'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF INVESTIGATION";}
        if( ['846'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF PARKS AND RECREATION";}
        if( ['781'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF PROBATION";}
        if( ['860'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF RECORDS & INFORMATION SVS";}
        if( ['827'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF SANITATION";}
        if( ['801'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF SMALL BUSINESS SERVICES";}
        if( ['069'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF SOCIAL SERVICES";}
        if( ['841'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF TRANSPORTATION";}
        if( ['063'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF VETERANS' SERVICES";}
        if( ['260'].indexOf(agencyID) != -1 ) { json[k][field] = "DEPARTMENT OF YOUTH & COMMUNITY DEV";}
        if( ['901','902','903','904','905'].indexOf(agencyID) != -1 ) { json[k][field] = "DISTRICT ATTORNEY";}
        if( ['133'].indexOf(agencyID) != -1 ) { json[k][field] = "EQUAL EMPLOYMENT PRACTICES COMMISSION";}
        if( ['127'].indexOf(agencyID) != -1 ) { json[k][field] = "FINANCIAL INFORMATION SERVICE AGENCY";}
        if( ['057'].indexOf(agencyID) != -1 ) { json[k][field] = "FIRE DEPARTMENT";}
        if( ['819'].indexOf(agencyID) != -1 ) { json[k][field] = "HEALTH AND HOSPITALS CORP";}
        if( ['806'].indexOf(agencyID) != -1 ) { json[k][field] = "HOUSING PRESERVATION AND DEVELOPMENT";}
        if( ['132'].indexOf(agencyID) != -1 ) { json[k][field] = "INDEPENDENT BUDGET OFFICE";}
        if( ['136'].indexOf(agencyID) != -1 ) { json[k][field] = "LANDMARKS PRESERVATION COMM.";}
        if( ['025'].indexOf(agencyID) != -1 ) { json[k][field] = "LAW DEPARTMENT";}
        if( ['035','037','038','039'].indexOf(agencyID) != -1 ) { json[k][field] = "LIBRARIES";}
        if( ['002'].indexOf(agencyID) != -1 ) { json[k][field] = "MAYORALTY";}
        if( ['098'].indexOf(agencyID) != -1 ) { json[k][field] = "MISCELLANEOUS";}
        if( ['156'].indexOf(agencyID) != -1 ) { json[k][field] = "NYC TAXI AND LIMOUSINE COMM";}
        if( ['820'].indexOf(agencyID) != -1 ) { json[k][field] = "OFFICE OF ADMIN TRIALS & HEARINGS";}
        if( ['021'].indexOf(agencyID) != -1 ) { json[k][field] = "OFFICE OF ADMINISTRATIVE TAX APPEALS";}
        if( ['313'].indexOf(agencyID) != -1 ) { json[k][field] = "OFFICE OF COLLECTIVE BARGAINING";}
        if( ['131'].indexOf(agencyID) != -1 ) { json[k][field] = "OFFICE OF PAYROLL ADMINISTRATION";}
        if( ['906'].indexOf(agencyID) != -1 ) { json[k][field] = "OFFICE OF PROSECUTION SPEC NARCO";}
        if( ['008'].indexOf(agencyID) != -1 ) { json[k][field] = "OFFICE OF THE ACTUARY";}
        if( ['015'].indexOf(agencyID) != -1 ) { json[k][field] = "OFFICE OF THE COMPTROLLER";}
        if( ['095'].indexOf(agencyID) != -1 ) { json[k][field] = "PENSION CONTRIBUTIONS";}
        if( ['056'].indexOf(agencyID) != -1 ) { json[k][field] = "POLICE DEPARTMENT";}
        if( ['941','942','943','944','945','945'].indexOf(agencyID) != -1 ) { json[k][field] = "PUBLIC ADMINISTRATOR";}
        if( ['101'].indexOf(agencyID) != -1 ) { json[k][field] = "PUBLIC ADVOCATE";}
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
