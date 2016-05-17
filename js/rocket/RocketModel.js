var RocketModel = Backbone.Model.extend({
    defaults: {
        "name": "defaultName",
        "description": 'defaultDescription',
        "size": 100,
    },

    initialize: function() {
        this.on("change", function() {
            console.log(this.toJSON());
        })
    },

    validate: function(attrs) {
        if ( attrs.size > 200 || attrs.size < 1) {
            console.log('incorrect size');
            return 'incorrect size';
        }
    },
});