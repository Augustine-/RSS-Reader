window.NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["feeds/index"],

  initialize: function () {
    this.listenTo(this.collection, "add reset sync", this.render)
  },

  render: function () {
    var renderedContent = this.template({feeds: this.collection});
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click #refresh" : "refresh"
  },

  refresh: function (event) {
    event.preventDefault();
    // new feed stuff
  }
});