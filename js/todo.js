var data = [
    {
        title: 'uncomplete',
        completed: false,
    },
    {
        title: 'complete',
        completed: true,
    },
];

var itemModel = Backbone.Model.extend(
    {
        defaults: item
    }
);

var TodosCollection = Backbone.Collection.extend(data, {
    model: itemModel
});

var modelTodo = new Todo();

var ItemView = Backbone.View.extend({
    events: {
        'change input': 'toggle'
    },
    el: '<div class="todo__item"></div>',
    todoTlp: Handlebars.compile($('#item-template').html()),

    initialize: function() {
        this.listenTo(this.model, "change", this.render);
    },

    render: function() {
        this.$el.html( this.todoTlp( this.model.attributes ));
        return this;
    },

    toggle: function(e) {
        if($(e.target).is(":checked")) {
            this.model.set("completed", true);
            this.model.set("title", "completed");
        } else {
            this.model.set("completed", false);
            this.model.set("title", "uncompleted");
        }
    }
});

var ListView = Backbone.View.extend({
    el: '#todo',

    initialize: function() {
        this.render();
    },

    render: function() {
        var me = this;
        var items = this.model.get('items');

        data.forEach(function(item, index) {



            var itemModelInstance = new itemModel();

            var itemView = new ItemView({model: itemModelInstance});
            me.$el.append(itemView.render().el);
        });
        return this;
    },
});

var ListView = new ListView();
