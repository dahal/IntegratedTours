$(function() {
  "user strict";

  var searchUrl = $('.search-form').attr('action');

  var performSearch = function(query) {
    $.ajax({
      url: searchUrl,
      data: { location: query },
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

        map.setMarkers(results);

        $('.search-results').html(html);
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
  });

});
