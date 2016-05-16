var AppRouter = Backbone.Router.extend({
    routes: {
        "about": "showAbout",
        "todo/:id": "getTodo",
        "search/:query": "searchTodos",
        "*other": "defaultRoute",
    },
    showAbout: function() {
        console.log("about");
    },
    getTodo: function(id) {
        console.log(this);
    },
    searchTodos: function(query, page) {
        console.log(this);
        console.dir(arguments);
    },
    defaultRoute: function(other){
        console.log('Invalid. You attempted to reach:' + other);
    },
});

var myRouter = new AppRouter();

Backbone.history.start();