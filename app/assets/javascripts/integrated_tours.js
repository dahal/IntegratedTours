window.IntegratedTours = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Flights : {}
};

$(document).ready(function(){
  var flightsController = new IntegratedTours.Flights.Controller()
  flightsController.init()
});
