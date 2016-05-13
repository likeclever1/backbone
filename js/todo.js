var TodoModel = Backbone.Model.extend({
    defaults: {
        title: 'title',
        completed: true
    }
});

var TodosCollection = Backbone.Collection.extend({
    model: TodoModel,
    url: "/todos",
});

var todosCollection = new TodosCollection();
todosCollection.fetch();

var TodoView = Backbone.View.extend({
    el: '#todo',

    todoTpl: Handlebars.compile($('#item-template').html()),
    events: {
        'change': 'toggle',
    },

    initialize: function() {
        this.render();
    },

    render: function() {
        var data = this.collection;
        console.log(data.size());

        var dataSorted = data.sortBy(function(item) {
            return item.get("title").toLowerCase();
        });


        dataSorted.forEach(function(item) {
            console.log(item['cid']);
            this.$el.append( this.todoTpl( item.toJSON() ) );
        }.bind(this));

        return this;
    },

    toggle: function(e) {
        console.dir(this);
    },
});

var todoView = new TodoView({collection: todosCollection});