window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Flights : {}
};

$(document).ready(function(){
  var flightsController = new App.Flights.Controller()
  flightsController.init()
});
