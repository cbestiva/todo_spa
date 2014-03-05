SpaApp.Views.TodosDetail = Backbone.View.extend({
  id: "detail",

 template: HandlebarsTemplates['todos/detail'],

  events: {
    "click a": "linkClicked"
  },

  render: function() {
    $(this.el).html(this.template(this.model));

    return this;
  },

  linkClicked: function(event) {
    event.preventDefault();
    var path = event.target.pathname;
    SpaApp.router.navigate(path, {trigger: true});
  }

});
