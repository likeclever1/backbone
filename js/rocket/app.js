var app = app || {};

app.listRocket = new app.viewListRocket({
    el: '#rocket',
    model: new app.modelListRocket(),
});