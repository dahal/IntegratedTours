App.Components.SearchResultMap = function(el, options) {
  this.el = el;
  this.options = options;

  this.init = function() {
    this.map = new google.maps.Map(this.el, this.options);
  };

  this.drawPins = function(guides) {
    var bounds = new google.maps.LatLngBounds();

    for (var i in guides) {
      var guide = guides[i];

      var coords = new google.maps.LatLng(guide.latitude, guide.longitude);

      bounds.extend(coords);

      new google.maps.Marker({
        position: coords,
        map: this.map,
        title: 'Hello World!'
      });

    }

    this.map.fitBounds(bounds);
  };
};
