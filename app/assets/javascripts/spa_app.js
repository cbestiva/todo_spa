window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    this.router = new this.Routers.Home();
    Backbone.history.start({pushState: true});

    // $.get("/todos.json").done(function (data) {
    //   // initialize the index view with the fetched data
    //   var view = new SpaApp.Views.TodosIndex({ collection: data });
    //   $('#container').html(view.render().el);
    // });
  }
};


SpaApp.Routers.Home = Backbone.Router.extend({
  routes: {
    "": "home",
    "todos/:id": "todosDetail"
  },

  home: function() { 
    $.get("/todos.json").done(function (data) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosIndex({ collection: data });
      $('#container').html(view.render().el);
    });
  },

  todosDetail: function(id) {
    $.get("/todos/" + id + ".json").done(function (data) {
      $("#detail").empty();
      var viewDetail = new SpaApp.Views.TodosDetail({model: data});
      $("#detail").append(viewDetail.render().el);
    });
  }
});

$(document).ready(function(){
  SpaApp.initialize();
});
