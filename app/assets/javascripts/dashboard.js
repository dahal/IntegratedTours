$(function() {
  "user strict";

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

        $('.search-results').html(html);
      }
    });
  });
});
