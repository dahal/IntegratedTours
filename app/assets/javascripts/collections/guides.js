App.Collections.Guides = Backbone.Collection.extend({
    url: 'guides',
    model: App.Models.Guide,
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
    },
    initialize: function () {
        this.sortKey = 'name'; 
    }
});
