window.NewsReader.Views.NewFeedView = Backbone.View.extend({
  events: {
    "submit form": "submit",
    "keyup textarea": "handleKeyup"
  },

  template: JST["feeds/new"],

  render: function () {
    var renderedContent = this.template({model: this.model});

    this.$el.html(renderedContent);
    return this;
  },

  submit: function (event) {

    event.preventDefault();
    var view = this;
    var params = $(event.currentTarget).serializeJSON()["feed"];
    var newFeed = new NewsReader.Models.Feed(params)

    this.collection.create({ title: params.title, url: params.url}, {

      success: function () {
        Backbone.history.navigate("", {trigger: true})
      }
    })
  }
});