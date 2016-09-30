// Format text string as slug
function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// Change text string to title case
function capitalizeMe(str){
  var noCaps = ['of','a','the','and','an','am','or','nor','but','is','if','then', 'else','when','at','from','by','on','off','for','in','out','to','into','with'];
  return str.replace(/\w\S*/g, function(txt, offset){
      if(offset != 0 && noCaps.indexOf(txt.toLowerCase()) != -1){
          return txt.toLowerCase();
      }
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Get unique values in an array
Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};
Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

jQuery(document).ready(function($) {

    var agencyList = [];
    var categoryList = [];

    var summary = $.getJSON( "assets/data/summary.json", function(data) {
    $.each( data, function( key, val ) {

      // slugify the agency and category
      var agencySlug = slugify(val.agency);
      var categorySlug = slugify(val.class);
      var agencyName = capitalizeMe(val.agency);
      var categoryName = capitalizeMe(val.class);

      // render budget items
      var size = Math.sqrt(val.amount / 10000);
      if(size < 1) { size = 1;}
      $('#budget-items').append('<div class="budget-item ' + agencySlug + ' ' + categorySlug + '" data-amount="' + val.amount + '" data-agency="' + agencySlug + '" data-category="' + categorySlug + '" data-html-key="' + key + '"><div class="size" style="border-top-width:' + size + 'px;"><span class="dollar-ammount">$' + val.amount.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span> <span class="agency">' + agencyName + '</span> <span class="category">' + categoryName + '</span> </div></div>');

      agencyList.push(val.agency);
      categoryList.push(val.class);

    });
  })
  .done(function() {

    // init budget items grid
    var $grid = $('#budget-items').isotope({
      itemSelector: '.budget-item',
      percentPosition: true,
      layoutMode: 'masonry',
      masonry: {
        columnWidth: '.budget-item'
      },
      getSortData: {
        agency: '[data-agency]'
      },
      sortBy: 'agency'
    });

    // Get unique agencies and categories
    var uniqueAgencies = agencyList.unique();
    var uniqueCategories = categoryList.unique();

    // render the filters
    $.each( uniqueAgencies, function( i, val ) {
      $('#budget-filter--agency').append( '<option value=".' + slugify(val) + '">' + capitalizeMe(val) + '</option>');
    });
    $.each( uniqueCategories, function( i, val ) {
      $('#budget-filter--category').append( '<option value=".' + slugify(val) + '">' + capitalizeMe(val) + '</option>');
      $('#budget-filter--key').append( '<li><span class="label ' + slugify(val) + '">' + capitalizeMe(val) + '</span></li>');
    });

    // filter functions
    $('.budget-filter').on( 'change', function() {
      var filterAgency = $('#budget-filter--agency').val();
      var filterCategory = $('#budget-filter--category').val();
      filterValue = filterAgency + filterCategory;
      $grid.isotope({ filter: filterValue });
    });

    // Open the details modal
    $( ".budget-item" ).click(function() {

      var key = $(this).attr('data-html-key'),
          $modal = $('#modal');

      $.ajax({
        url: 'assets/html/group-' + key + '.html',
        context: document.body,
        dataType: 'html'
      })
      .fail(function() {
        alert( "error" );
      })
      .done(function(resp) {
        $modal.html(resp).foundation('open');
      });

    });

  });


});
