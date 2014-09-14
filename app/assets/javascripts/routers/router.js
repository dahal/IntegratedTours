App.Routers.Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "tasks/new": "new",
        "tasks/:id": "show"
    },

    index: function() {
        
    }
});
