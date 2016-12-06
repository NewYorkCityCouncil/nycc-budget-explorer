// Format text string as slug
function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
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
      var agencyName = val.agency;
      var categoryName = val.class;

      // format the dollar amount
      if( val.amount >= 0 ){
        var dollarAmount = '$' + val.amount.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      } else {
        var negativeAmount = val.amount * -1;
        var dollarAmount = '-$' + negativeAmount.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      }

      // render budget items
      var size = Math.sqrt(val.amount / 10000);
      if(size < 1) { size = 1;}
      $('#budget-items').append('<div class="budget-item ' + agencySlug + ' ' + categorySlug + '" data-amount="' + val.amount + '" data-agency="' + agencySlug + '" data-category="' + categorySlug + '" data-html-key="' + key + '"><div class="size" style="border-top-width:' + size + 'px;"><span class="dollar-ammount">' + dollarAmount + '</span> <span class="agency">' + agencyName + '</span> <span class="category">' + categoryName + '</span> </div></div>');

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
        agency: '[data-agency]',
        category: '[data-category]',
        amount: '[data-amount] parseInt'
      },
      sortBy: 'agency'
    });

    // Get unique agencies and categories
    var uniqueAgencies = agencyList.unique();
    uniqueAgencies.sort();
    var uniqueCategories = categoryList.unique();
    uniqueCategories.sort();

    // render the filters
    $.each( uniqueAgencies, function( i, val ) {
      $('#budget-filter--agency').append( '<option value=".' + slugify(val) + '">' + val + '</option>');
    });
    $.each( uniqueCategories, function( i, val ) {
      $('#budget-filter--category').append( '<option value=".' + slugify(val) + '">' + val + '</option>');
      $('#budget-filter--key').append( '<li><button class="button tiny filter-button ' + slugify(val) + '" data-category=".' + slugify(val) + '">' + val + '</button></li>');
    });

    // filter functions
    var applyFilters = function() {
      var filterAgency = $('#budget-filter--agency').val();
      var inclusives = [];
      $('.filter-button').not('.hollow').each(function() {
        inclusives.push( filterAgency + $(this).attr('data-category') );
      });
      var filterValue = inclusives.length ? inclusives.join(', ') : filterAgency;
      $grid.isotope({ filter: filterValue });
      ga('send', 'event', 'Budget Filter', filterValue);
    }

    $('.budget-filter').on( 'change', function() {
      applyFilters();
    });

    $('.filter-button').on( 'click', function() {
      if ( $('.filter-button.hollow').length > 0 ) {
        $(this).toggleClass('hollow').promise().done(function(){
          if ( $('.filter-button').not('.hollow').length == 0 ) {
            $('.filter-button').removeClass('hollow');
          }
        });
      }
      else {
        // there are no hollow buttons
        $('.filter-button').not(this).addClass('hollow');
      }
      applyFilters();
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
        $('#modal-content').html(resp);
        $modal.foundation('open');
        ga('send', 'event', 'Budget Modal', 'assets/html/group-' + key + '.html');
      });

    });

    var budgetTotal = 0;
    var setBudgetTotal = function() {
      $('.budget-item').each(function() {
        budgetTotal = budgetTotal + Number($(this).attr('data-amount'));
      });
      visibleTotal();
    }

    var visibleTotal = function() {
      var total = 0;
      $('.budget-item:visible').each(function() {
        total = total + Number($(this).attr('data-amount'));
      });
      var percentage = ((total / budgetTotal) * 100);
      if ( percentage < 0.01 && percentage > 0 ) {
        percentage = "Less than 0.01";
      } else {
        percentage = parseFloat( percentage.toFixed(2) );
      }

      // format the dollar amount
      if( total >= 0 ){
        var formattedTotal = '$' + total.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      } else {
        var negativeAmount = total * -1;
        var formattedTotal = '-$' + negativeAmount.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      }

      $('#visible-total').text( formattedTotal );
      $('#visible-percentage').text( percentage );
    }

    $grid.on( 'arrangeComplete', function() {
      visibleTotal();
    });

    setBudgetTotal();

    $( "#sort-agency" ).click(function() { $grid.isotope({ sortBy : 'agency' }); $(this).removeClass('hollow'); $('.sort-button').not(this).addClass('hollow'); ga('send', 'event', 'Budget Sort', 'Agency'); });
    $( "#sort-category" ).click(function() { $grid.isotope({ sortBy : 'category' }); $(this).removeClass('hollow'); $('.sort-button').not(this).addClass('hollow'); ga('send', 'event', 'Budget Sort', 'Category'); });
    $( "#sort-amount" ).click(function() { $grid.isotope({ sortBy : 'amount' }); $(this).removeClass('hollow'); $('.sort-button').not(this).addClass('hollow'); ga('send', 'event', 'Budget Sort', 'Amount'); });

  });


});
