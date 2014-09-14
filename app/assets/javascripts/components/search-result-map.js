App.Components.SearchResultMap = function(el, options) {
  this.el = el;
  this.options = options;
  this.markers = [];

  this.render = function() {
    this.map = new google.maps.Map(this.el, this.options);
  };

  this.setMarkers = function(guides) {
    this.clearMarkers();

    var bounds = new google.maps.LatLngBounds();

    for (var i in guides) {
      var guide = guides[i];

      var coords = new google.maps.LatLng(guide.latitude, guide.longitude);

      bounds.extend(coords);

      this.markers.push(
        new google.maps.Marker({
          position: coords,
          map: this.map
        })
      );
    }

    this.map.fitBounds(bounds);
  };

  this.clearMarkers = function() {
    for (var i in this.markers) {
      var marker = this.markers[i];
      marker.setMap(null);
    }
    this.markers = [];
  }
};
