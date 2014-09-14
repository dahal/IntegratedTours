$(function() {
  "user strict";

  var searchUrl = $('.search-form').attr('action');

  var performSearch = function(query) {
    $.ajax({
      url: searchUrl,
      data: { location: query },
      dataType: 'json',
      success: function(results) {
        map.setMarkers(results);
      }
    });

    var guides = new App.Collections.Guides({ params: 'location='+query  });
    guides.fetch({
        success: function(results) {
            var guidesView = new App.Views.GuidesIndex({ el: '.search-results', collection: guides });
            guidesView.render();
            guidesView.initTraitify();
        },
        error: function() {
            $('.search-results').html("No matches found. For now...");
        }
    });
  }

  var map = new App.Components.SearchResultMap($('.search-map')[0]);

  App.Components.CurrentLocation.getLocation(function(position) {
    map.render();

    performSearch([position.coords.latitude, position.coords.longitude])
  });

  $('.search-form').on('submit', function(e) {
    e.preventDefault();

    performSearch($(this).find('[name=location]').val());
    scrollToAnchor('results');
  });

});
