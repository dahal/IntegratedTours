App.Views.Guide = Backbone.View.extend({
    className: 'guide',
    template: JST['guides/show'],
    events: {
        'click .contact': 'initiateContact',
        'mousein .avatar': 'getMoreInfo'
    },

    initialize: function(args) {
        var args = args || {};
        
        _(this).extend(args);
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        this.listenTo(this.model, 'visible', this.toggleVisible);
    },
    render: function() {
        var content = this.template({ model: this.model.toJSON() });
        this.$el.html(content);
        return this;
    },
    initiateContact: function() {
        this.$el.append('<div class="yuck">Clicked</div>'); 
    },
    getMoreInfo: function() {
        this.$el.addClass('.exanded');
    }
});
