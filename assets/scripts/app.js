// Format text strings as slugs
function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// Change text to title case
function capitalizeMe(str){
  var noCaps = ['of','a','the','and','an','am','or','nor','but','is','if','then', 'else','when','at','from','by','on','off','for','in','out','to','into','with'];
  return str.replace(/\w\S*/g, function(txt, offset){
      if(offset != 0 && noCaps.indexOf(txt.toLowerCase()) != -1){
          return txt.toLowerCase();
      }
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

jQuery(document).ready(function($) {

  budgetSummary.aspects.rows.forEach(function(row){
    // slugify the agency and category
    var agencySlug = slugify(row.key[0]);
    var categorySlug = slugify(row.key[1]);
    var agencyName = capitalizeMe(row.key[0]);
    var categoryName = capitalizeMe(row.key[1]);

    // render budget items
    var size = Math.sqrt(row.value / 10000);
    if(size < 1) { size = 1;}
    $('#budget-items').append('<div class="budget-item ' + agencySlug + ' ' + categorySlug + '" data-amount="' + row.value + '" data-amount-desc="' + (-1*row.value) + '"><div class="size" style="border-top-width:' + size + 'px;"><span class="dollar-ammount">$' + row.value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span> <span class="agency">' + agencyName + '</span> <span class="category">' + categoryName + '</span> </div></div>');
  });

  // init budget items grid
  var $grid = $('#budget-items').isotope({
    itemSelector: '.budget-item',
    percentPosition: true,
    layoutMode: 'masonry',
    masonry: {
      columnWidth: '.budget-item'
    },
    // getSortData: {
    //   amount: '[data-amount-desc] parseInt'
    // },
    // sortBy: 'amount'
  });

  // render the filters
  for (var agencyName in budgetSummary.agencies) {
    if (budgetSummary.agencies.hasOwnProperty(agencyName)) {
       $('#budget-filter--agency').append( '<option value=".' + slugify(agencyName) + '">' + capitalizeMe(agencyName) + '</option>');
     }
  }
  for (var className in budgetSummary.classes) {
    if (budgetSummary.classes.hasOwnProperty(className)) {
      $('#budget-filter--category').append( '<option value=".' + slugify(className) + '">' + capitalizeMe(className) + '</option>');
      $('#budget-filter--key').append( '<li><span class="label ' + slugify(className) + '">' + capitalizeMe(className) + '</span></li>');
    }
  }

  // filter functions
  $('.budget-filter').on( 'change', function() {
    var filterAgency = $('#budget-filter--agency').val();
    var filterCategory = $('#budget-filter--category').val();
    filterValue = filterAgency + filterCategory;
    $grid.isotope({ filter: filterValue });
  });

});
