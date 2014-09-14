App.Flights.Controller = function(){}

App.Flights.Controller.prototype = {
  init: function(){
    this.getGeoLocation()
  },

  getGeoLocation: function(){
   navigator.geolocation.getCurrentPosition(this.showCurrentLocation, this.showError)
  },

  showCurrentLocation: function(position){
    return position.coords.latitude+","+position.coords.longitude
  },

  showError: function(){
    alert('Could not get your current location')
  }

}
