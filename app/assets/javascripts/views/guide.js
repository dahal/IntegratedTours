App.Views.Guide = Backbone.View.extend({
    className: 'tour-guide',

    template: JST['guides/show'],

    events: {
        'click .traitify-link': 'showTraitify'
    },

    initialize: function(args) {
        var args = args || {};

        _(this).extend(args);
    },

    render: function() {
        var content = this.template({ model: this.model.toJSON() });
        this.$el.html(content);

        if (!this.model.get('traitify_id')) {
          this.$el.find('.traitify-link').addClass('hide');
        }

        return this;
    },

    showTraitify: function(e) {
        e.preventDefault();

        this.$el.find('.traitify-link').addClass('hide');
        this.$el.find('.traitify-widget').removeClass('hide');
    },
});
