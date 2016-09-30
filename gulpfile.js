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
        if( ['068'].indexOf(agencyID) != -1 ) { json[k][field] = "Admin for Children's Services";}
        if( ['073'].indexOf(agencyID) != -1 ) { json[k][field] = "Board of Correction";}
        if( ['003'].indexOf(agencyID) != -1 ) { json[k][field] = "Board of Elections";}
        if( ['829'].indexOf(agencyID) != -1 ) { json[k][field] = "Business Integrity Commission";}
        if( ['010','011','012','013','014'].indexOf(agencyID) != -1 ) { json[k][field] = "Borough President";}
        if( ['004'].indexOf(agencyID) != -1 ) { json[k][field] = "Campaign Finance Board";}
        if( ['103'].indexOf(agencyID) != -1 ) { json[k][field] = "City Clerk";}
        if( ['102'].indexOf(agencyID) != -1 ) { json[k][field] = "City Council";}
        if( ['042'].indexOf(agencyID) != -1 ) { json[k][field] = "City University of New York";}
        if( ['134'].indexOf(agencyID) != -1 ) { json[k][field] = 'Civil Service Commission';}
        if( ['054'].indexOf(agencyID) != -1 ) { json[k][field] = 'Civilian Complaint Review Board';}
        if( ['226'].indexOf(agencyID) != -1 ) { json[k][field] = 'Commission on Human Rights';}
        if( ['341','342','343','344','345','346','347','348','349','350','351','352','381',
          '382','383','384','385','386','387','388','389','390','391','392','431','432','433',
          '434','435','436','437','438','439','440','441','442','443','444','471','472','473',
          '474','475','476','477','478','479','480','481','482','483','484','485','486','487',
          '488','491','492','493'].indexOf(agencyID) != -1 ) { json[k][field] = "Community Board";}
        if( ['312'].indexOf(agencyID) != -1 ) { json[k][field] = "Conflicts of Interest Board";}
        if( ['099'].indexOf(agencyID) != -1 ) { json[k][field] = "Debt Service";}
        if( ['125'].indexOf(agencyID) != -1 ) { json[k][field] = "Department for the Aging";}
        if( ['810'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Buildings";}
        if( ['030'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of City Planning";}
        if( ['856'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Citywide Admin Service";}
        if( ['866'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Consumer Affairs";}
        if( ['072'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Correction";}
        if( ['126'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Cultural Affairs";}
        if( ['850'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Design & Construction";}
        if( ['040'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Education";}
        if( ['017'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Emergency Management";}
        if( ['826'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Environmental Protection";}
        if( ['836'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Finance";}
        if( ['816'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Health & Mental Hygiene";}
        if( ['071'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Homeless Services";}
        if( ['858'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Information Technology & Telecommunications";}
        if( ['032'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Investigation";}
        if( ['846'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Parks & Recreation";}
        if( ['781'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Probation";}
        if( ['860'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Records & Information Services";}
        if( ['827'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Sanitation";}
        if( ['801'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Small Business Services";}
        if( ['069'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Social Services";}
        if( ['841'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Transportation";}
        if( ['063'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Veterans' Services";}
        if( ['260'].indexOf(agencyID) != -1 ) { json[k][field] = "Department of Youth & Community Dev";}
        if( ['901','902','903','904','905'].indexOf(agencyID) != -1 ) { json[k][field] = "District Attorney";}
        if( ['133'].indexOf(agencyID) != -1 ) { json[k][field] = "Equal Employment Practices Commission";}
        if( ['127'].indexOf(agencyID) != -1 ) { json[k][field] = "Financial Information Service Agency";}
        if( ['057'].indexOf(agencyID) != -1 ) { json[k][field] = "Fire Department";}
        if( ['819'].indexOf(agencyID) != -1 ) { json[k][field] = "Health & Hospitals Corporation";}
        if( ['806'].indexOf(agencyID) != -1 ) { json[k][field] = "Housing Preservation & Development";}
        if( ['132'].indexOf(agencyID) != -1 ) { json[k][field] = "Independent Budget Office";}
        if( ['136'].indexOf(agencyID) != -1 ) { json[k][field] = "Landmarks Preservation Commission";}
        if( ['025'].indexOf(agencyID) != -1 ) { json[k][field] = "Law Department";}
        if( ['035','037','038','039'].indexOf(agencyID) != -1 ) { json[k][field] = "Libraries";}
        if( ['002'].indexOf(agencyID) != -1 ) { json[k][field] = "Mayoralty";}
        if( ['098'].indexOf(agencyID) != -1 ) { json[k][field] = "Miscellaneous";}
        if( ['156'].indexOf(agencyID) != -1 ) { json[k][field] = "NYC Taxi & Limousine Commission";}
        if( ['820'].indexOf(agencyID) != -1 ) { json[k][field] = "Office of Admin Trials & Hearings";}
        if( ['021'].indexOf(agencyID) != -1 ) { json[k][field] = "Office of Administrative Tax Appeals";}
        if( ['313'].indexOf(agencyID) != -1 ) { json[k][field] = "Office of Collective Bargaining";}
        if( ['131'].indexOf(agencyID) != -1 ) { json[k][field] = "Office of Payroll Administration";}
        if( ['906'].indexOf(agencyID) != -1 ) { json[k][field] = "Office of the Special Narcotics Prosecutor";}
        if( ['008'].indexOf(agencyID) != -1 ) { json[k][field] = "Office of the Actuary";}
        if( ['015'].indexOf(agencyID) != -1 ) { json[k][field] = "Office of the Comptroller";}
        if( ['095'].indexOf(agencyID) != -1 ) { json[k][field] = "Pension Contributions";}
        if( ['056'].indexOf(agencyID) != -1 ) { json[k][field] = "Police Department";}
        if( ['941','942','943','944','945','945'].indexOf(agencyID) != -1 ) { json[k][field] = "Public Administrator";}
        if( ['101'].indexOf(agencyID) != -1 ) { json[k][field] = "Public Advocate";}
      }
      return json;
    }
    json = combineAgencies('agency_number');

    // Function to replace object_class_number with class name
    function combineClasses(field) {
      for( var k = 0; k < json.length; ++k ) {
        var object_class_number = json[k][field];
        if( ['05'].indexOf(object_class_number) != -1 ) { json[k][field] = "Amounts to be Scheduled";}
        if( ['70','07','40'].indexOf(object_class_number) != -1 ) { json[k][field] = "Charges, Services, Expenses";}
        if( ['60'].indexOf(object_class_number) != -1 ) { json[k][field] = "Contractual Services";}
        if( ['90'].indexOf(object_class_number) != -1 ) { json[k][field] = "OTPS";}
        if( ['04','06','01','02','03'].indexOf(object_class_number) != -1 ) { json[k][field] = "Pay, Fringe Benefits";}
        if( ['30','10'].indexOf(object_class_number) != -1 ) { json[k][field] = "Property, Equipment, Supplies";}
        if( ['50'].indexOf(object_class_number) != -1 ) { json[k][field] = "Social Services";}
        if( ['80'].indexOf(object_class_number) != -1 ) { json[k][field] = "Transfers for Debt Service";}
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
          + '<p class="text-small">'
            + '<strong>$' + dollarAmmount.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + ':</strong> '
            + json[k][i].object_code
          + '</p>\n'
        ;
      }

      // Write the HTML for the grouped items
      objectData =
        '<html><body>\n<h3 class="header-xlarge">$' + totalCost.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</h3>\n'
        + '<h4 class="header-medium sans-serif">'
          + '<strong>' + json[k][0].agency_number + '</strong><br>'
          + '<small>' + json[k][0].object_class_number + '</small>'
        + '</h4>'
        + '<hr>'
        + '<p>'
          + objectData
        + '</p>\n'
        + '</body></html>'
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
