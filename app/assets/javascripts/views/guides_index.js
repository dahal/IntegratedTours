App.Views.GuidesIndex = Backbone.View.extend({
    className: 'guides-panel',
    template: JST['guides/index'],
    initialize: function(args) {
        var args = args || {};
        this.listenTo(this.collection, 'reset sort', this.render);
    },

    render: function() {
        var that = this;
        this.collection.each(function(guide) {
            var guideView = new App.Views.Guide({ model: guide });
            that.$el.append(guideView.render().el);
        });

        return this;
    }
});
