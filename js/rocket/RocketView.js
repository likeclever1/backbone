var RocketView = Backbone.View.extend({

    tpl: Handlebars.compile($('#viewRocket').html()),

    events: {
        "click .changeSize": 'changeSize',
        "click .deleteRow": 'deleteRow',

        "blur .name": 'editValue',
        "blur .desc": 'editValue',
        "blur input.size": 'editValue',
    },

    initialize: function() {
        this.render();
        this.listenTo(this.model, "change", this.render);
    },

    render: function() {
        var json = this.model.toJSON();
        var view = this.tpl(json);
        this.$el.html(view);

    },

    editValue: function() {
        this.model.set({
            name: this.$(".name").text(),
            description: this.$(".desc").text(),
            size: this.$("input.size").val(),
        }, {validate: true});

        this.$("input.size").val(this.model.get('size'));

    },

    changeSize: function(e) {
        var view = this;
        var number = parseInt($(e.target).data('rel'));
        var currentSize = parseInt(this.model.get("size"));

        this.model.set({size: currentSize + number}, {validate: true});
        this.$("input.size").val(view.model.get('size'));
    },

    deleteRow: function() {
        this.model.set({
            name: '',
            description: '',
            size: 1,
        }, {validate: true});
    },
});