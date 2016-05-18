var app = app || {};

app.viewItemRocket = Backbone.View.extend({
    tagName: "tr",

    tpl: Handlebars.compile($('#itemRocket').html()),

    events: {
        'click .changeSize': 'changeSize',
    },

    initialize: function() {

        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },

    render: function() {
        var view = '';

        var json = this.collection.toJSON();
        
        json.forEach(function(item, index) {
            view += this.tpl(item);
        }.bind(this));

        this.$el.html(view);
    },

    changeSize: function(e) {
        var diff = $(e.target).data('rel');

        console.log(this.model);
    },
});