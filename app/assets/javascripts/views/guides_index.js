IntegratedTours.Views.GuidesIndex = Backbone.View.extend({
    className: 'guides-panel'
    template: JST['guides/index'],
    initialize: function(args) {
        var args = args || {};
        this.listenTo(this.collection, 'reset sort', this.render);
    }
});
