App.Views.GuidesIndex = Backbone.View.extend({
    className: 'guides-panel',
    template: JST['guides/index'],
    initialize: function(args) {
        var args = args || {};
        this.listenTo(this.collection, 'reset sort', this.render);
    },

    render: function() {
        var that = this;
        that.$el.html("");
        if (this.collection.length > 0) {
            this.collection.each(function(guide) {
                var guideView = new App.Views.Guide({ model: guide });
                that.$el.append(guideView.render().el);
            });
        } else {
            that.$el.html("No matches found.");
        }

        return this;
    },

    initTraitify: function() {
      this.collection.each(function(model) {
        var traitifyId = model.get('traitify_id');
        var selector = '.traitify-widget-' + model.get('id');

        Traitify.ui.slideDeck(traitifyId, selector, function(data) {
          Traitify.ui.resultsProp(traitifyId, selector, { showTraits: true });
        });
      });
    }
});
