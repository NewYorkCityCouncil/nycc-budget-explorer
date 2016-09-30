// Include gulp & plugins
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });
var fs = require('fs');

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
  plugins.remoteSrc(['66mb-ky9b.json?$select=agency_number,object_class_number,object_code,financial_plan_amount&$where=financial_plan_amount%3E0&publication_date=20160615'], {
      base: 'https://data.cityofnewyork.us/resource/'
  })
  .pipe(plugins.jsonEditor(function(json){

    // Function to replace agency_number with agency name
    function combineAgencies(field) {
      for( var k = 0; k < json.length; ++k ) {
        var agencyID = json[k][field];
        if( ['068'].indexOf(agencyID) != -1 ) { json[k][field] = "ADMIN FOR CHILDREN'S SERVICES";}
        if( ['073'].indexOf(agencyID) != -1 ) { json[k][field] = "BOARD OF CORRECTION";}
        if( ['003'].indexOf(agencyID) != -1 ) { json[k][field] = "BOARD OF ELECTIONS";}
        if( ['829'].indexOf(agencyID) != -1 ) { json[k][field] = "BUSINESS INTEGRITY COMMISSION";}
        if( ['010','011','012','013','014'].indexOf(agencyID) != -1 ) { json[k][field] = "BOROUGH PRESIDENT";}
        if( ['004'].indexOf(agencyID) != -1 ) { json[k][field] = "CAMPAIGN FINANCE BOARD";}
        if( ['103'].indexOf(agencyID) != -1 ) { json[k][field] = "CITY CLERK";}
        if( ['102'].indexOf(agencyID) != -1 ) { json[k][field] = "CITY COUNCIL";}
        if( ['042'].indexOf(agencyID) != -1 ) { json[k][field] = "CITY UNIVERSITY OF NEW YORK";}
        if( ['134'].indexOf(agencyID) != -1 ) { json[k][field] = 'CIVIL SERVICE COMMISSION';}
        if( ['054'].indexOf(agencyID) != -1 ) { json[k][field] = 'CIVILIAN COMPLAINT REVIEW BOARD';}
        if( ['226'].indexOf(agencyID) != -1 ) { json[k][field] = 'COMMISSION ON HUMAN RIGHTS';}
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
    json = combineAgencies('agency_number');

    // Function to replace object_class_number with class name
    function combineClasses(field) {
      for( var k = 0; k < json.length; ++k ) {
        var object_class_number = json[k][field];
        if( ['05'].indexOf(object_class_number) != -1 ) { json[k][field] = "AMOUNTS TO BE SCHEDULED";}
        if( ['70','07','40'].indexOf(object_class_number) != -1 ) { json[k][field] = "Charges, Services, Expenses";}
        if( ['60'].indexOf(object_class_number) != -1 ) { json[k][field] = "CONTRACTUAL SERVICES";}
        if( ['90'].indexOf(object_class_number) != -1 ) { json[k][field] = "OTPS";}
        if( ['04','06','01','02','03'].indexOf(object_class_number) != -1 ) { json[k][field] = "Pay, Fringe Benefits";}
        if( ['30','10'].indexOf(object_class_number) != -1 ) { json[k][field] = "Property, Equipment, Supplies";}
        if( ['50'].indexOf(object_class_number) != -1 ) { json[k][field] = "SOCIAL SERVICES";}
        if( ['80'].indexOf(object_class_number) != -1 ) { json[k][field] = "TRANSFERS FOR DEBT SERVICE";}
      }
      return json;
    }
    json = combineClasses('object_class_number');

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
    var groupedData = groupBy(json,function(item){
      return [
        item.agency_number,
        item.object_class_number
      ];
    });
    return groupedData;

  }))
  .pipe(plugins.rename('66mb-ky9b.json'))
  .pipe(gulp.dest('./assets/data/'))
});

// Write summary JSON file and HTML files for groups
gulp.task('summary', function() {
  return gulp.src([
    './assets/data/66mb-ky9b.json'
  ])
  .pipe(plugins.jsonEditor(function(json){

    var summary = [];

    // Loop through the groups of budget items
    for( var k = 0; k < json.length; ++k ) {

      // Set variables for the group
      var objectData = '';
      var totalCost = 0;

      // Loop through the budget items in the group
      for( var i = 0; i < json[k].length; ++i ) {

        var dollarAmmount = parseInt(json[k][i].financial_plan_amount); // Make the value an integer
        totalCost = totalCost + dollarAmmount; // Add each item to the group total

        // Combine all the group's items
        var objectData = objectData
          + '<p>'
            + json[k][i].object_code + '<br>'
            + '$' + dollarAmmount.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
          + '</p>\n'
        ;
      }

      // Write the HTML for the grouped items
      objectData =
        '<html>\n<h1>Total: $' + totalCost.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</h1>\n'
        + '<p>'
          + json[k][0].agency_number + '<br>'
          + json[k][0].object_class_number + '<br>'
          + objectData
        + '</p>\n'
        + '</html>'
      ;

      // TODO: Should all the HTML files be deleted before writing new ones (to prevent extras)?
      fs.writeFile('./assets/html/group-' + k + '.html', objectData);

      // Set the sumary items for the group
      var groupSummary = new Object();
          groupSummary['agency'] = json[k][0].agency_number;
          groupSummary['class'] = json[k][0].object_class_number;
          groupSummary['amount'] = totalCost;

      summary.push(groupSummary);

    }

    return summary;

  }))
  .pipe(plugins.rename('summary.json'))
  .pipe(gulp.dest('./assets/data/'))
});
