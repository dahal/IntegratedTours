App.Routers.Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "guides/:id": "show"
    },

    index: function() {
        // var guides = new App.Collections.Guides();
        // guides.fetch({
        //     success: function() {
        //         console.log(guides);
        //         var guidesView = new App.Views.GuidesIndex({ collection: guides });
        //         $('.search-results-again').html(guidesView.render());
        //     }
        // });
    },

    show: function() {

    }
});
