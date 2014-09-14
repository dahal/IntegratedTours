$(function() {
    "use strict";

    console.log('app loaded');

    var guidesRouter = new App.Routers.Router();
    Backbone.history.start();

    var flights = new App.Flights.Controller()
    flights.init()
});
