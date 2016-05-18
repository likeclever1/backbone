var app = app || {};

app.viewListRocket = Backbone.View.extend({

    tpl: Handlebars.compile($('#listRocket').html()),

    events: {
        'click .addObject': 'addObject',
        'click .toJSON': 'toJSON',
    },

    initialize: function() {

        this.col = new app.collectionOfRockets();

        this.listenTo(this.col, 'all', this.update);
        this.render();

        var items = new app.viewItemRocket({
            el: '.rocketsList',
            collection: this.col,
        });
    },

    render: function() {

        var json = this.model.toJSON();
        var view = this.tpl(json);
        this.$el.html(view);
    },

    update: function() {
        var size = 0;

        this.col.each(function(object, index) {
            size += parseInt(object.get('size') );
        });

        this.model.set('total', this.col.length);
        this.model.set('size', size);

        this.$('.rockets-count').text(this.col.length);
        this.$('.rockets-size').text(size);
    },

    addObject: function() {
        this.col.add({});
    },

    toJSON: function() {
        var stringifyJSON = JSON.stringify(this.col);

        this.$(".json-out").html(stringifyJSON);
    }
});