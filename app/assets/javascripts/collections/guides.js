App.Collections.Guides = Backbone.Collection.extend({
    model: App.Models.Guide,
    initialize: function (options) {
        this.params = options.params;
    },
    url: function () {
        return '/guides' + '?' + this.params;
    }
});
