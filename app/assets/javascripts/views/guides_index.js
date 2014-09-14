App.Views.GuidesIndex = Backbone.View.extend({
    className: 'guides-panel',
    template: JST['guides/index'],
    initialize: function(args) {
        var args = args || {};
        this.listenTo(this.collection, 'reset sort', this.render);
    },

    render: function() {
        var that = this;

        if (this.collection.length > 0) {
            this.collection.each(function(guide) {
                var guideView = new App.Views.Guide({ model: guide });
                that.$el.append(guideView.render().el);
            });
        } else {
            that.$el.html("No matches found.");
        }

        return this;
    }
});
