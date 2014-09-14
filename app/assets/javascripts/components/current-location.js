App.Components.CurrentLocation = {
  getLocation: function(cb) {
    navigator.geolocation.getCurrentPosition(cb, this.showError);
  },

  showError: function() {
    alert('Could not get your current location');
  }
};
