IntegratedTours.Flights.Controller = function(){}

IntegratedTours.Flights.Controller.prototype = {
  init: function(){
    this.getGeoLocation()
  },

  getGeoLocation: function(){
   navigator.geolocation.getCurrentPosition(this.showCurrentLocation, this.showError)
  },

  showCurrentLocation: function(position){
    console.log(position.coords.latitude+","+position.coords.longitude)
  },

  showError: function(){
    alert('Could not get your current location')
  }

}