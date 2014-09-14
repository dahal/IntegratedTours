App.Collections.Guides = Backbone.Collection.extend({
    model: App.Models.Guide,
    sortKey: "name",
    initialize: function (options) {
        this.sortKey = 'name';
        this.params = options.params;
    },
    url: function () {
        return '/guides' + '?' + this.params;
    },
    comparator: function(a, b) {
        a = a.get(this.sort_key);
        b = b.get(this.sort_key);
        return a > b ?  1
             : a < b ? -1
             :          0;
    },
    changeSort: function (sortProperty) {
        this.sortKey = sortProperty; 
        this.sort();
    }
});
