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
    console.log(guides);
    guides.fetch({
        success: function() {
            var guidesView = new App.Views.GuidesIndex({ collection: guides });
            $('.search-results-again').html(guidesView.render().el);
        },
        error: function() {
            $('.search-results-again').html("No matches found.");
        }
    });

    console.log($(this).attr('action'));
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      dataType: 'json',
      success: function(results) {
        var html = [];

        if (results.length > 0) {
          $.each(results, function(i, item) {
            html += '<div class="tour-guide">' +
                      '<div class="avatar">' +
                        '<img src="' + item.gravatar_url + '</img>' +
                      '</div>' +
                      '<div class="name">' + item.name + '</div>' +
                      '<div class="address">' + item.address + '</div>' +
                    '</div>';
          });

        } else {
          html = "No matches found."
        }

        map.drawPins(results);

        $('.search-results').html(html);
      }
    });
  });
});
