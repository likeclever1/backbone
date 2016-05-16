$(function() {
    
    var object = {};
    _.extend(object, Backbone.Events);

    object.on("alert", function(msg) {
        alert("Triggered ", msg);
    });

    var app = app || {};

    app.MyObject = Backbone.Model.extend({
        defaults: {
            name: "name",
            description: "-",
            size: 100,
        },

        initialize: function() {
            this.on("change", function() {
                var json = this.toJSON();
                console.log(json);
            });
        },
        increaseSize: function() {
            var size = app.myObject.get("size");

            this.set(
                {
                    "size": size + 100
                },
                {
                    'validate': true
                }
            );
        },

        validate: function(attr) {
            if(attr.size > 1000) {
                return 'Incorrect size';
            }
        },

    });

    app.myObject = new app.MyObject({
        "name": "roket",
        "description": "super",
    });

    app.myObject.set({
        "size": 250,
        "type": 'active',
    });

    $("#btn").on("click", function() {
        app.myObject.increaseSize();
    });
});