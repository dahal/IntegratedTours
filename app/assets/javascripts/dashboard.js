$(function() {
  "user strict";

  var map = null;

  App.Components.CurrentLocation.getLocation(function(position) {
    var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    console.log(coords)
    map = new App.Components.SearchResultMap($('.search-map')[0], { center: coords });
    map.init();
  });

  $('.search-form').on('submit', function(e) {
    e.preventDefault();
    var guides = new App.Collections.Guides({ params: $(this).serialize() });
    guides.fetch({
        success: function(results) {
            var guidesView = new App.Views.GuidesIndex({ collection: guides });
            $('.search-results').html(guidesView.render().el);
            // map.drawPins(results);
        },
        error: function() {
            $('.search-results').html("No matches found. For now...");
        }
    });

    console.log($(this).attr('action'));
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      dataType: 'json',
      success: function(results) {
        map.drawPins(results);
      }
    });
  });
});
