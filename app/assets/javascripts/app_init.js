$(function() {
    "use strict";

    console.log('app loaded');

    var flightsController = new App.Flights.Controller();
    var guidesRouter = new App.Routers.Router();

    flightsController.init();
    Backbone.history.start();
});
