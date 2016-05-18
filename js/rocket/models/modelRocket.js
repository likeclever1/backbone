var app = app || {};

app.modelItemRocket = Backbone.Model.extend({
    defaults: {
        name: 'name',
        description: 'description',
        size: 100,
    },

    initialize: function() {
        
    },

    validate: function() {

    },
});

app.modelListRocket = Backbone.Model.extend({
    defaults: {
        total: 0,
        size: 0,
    },
});

app.collectionOfRockets = Backbone.Collection.extend({
    model: app.modelItemRocket
});