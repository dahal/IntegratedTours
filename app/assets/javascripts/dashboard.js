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

    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      dataType: 'json',
      success: function(results) {
        var html = [];

        if (results.length > 0) {
          $.each(results, function(i, item) {
            html += '<div class="guide">' +
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
