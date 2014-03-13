window.NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["feeds/index"],

  initialize: function () {
    this.listenTo(this.collection, "add reset sync submit destroy change", this.render)
  },

  render: function () {
    var renderedContent = this.template({feeds: this.collection});
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click button.destroy": "destroy"
  },

  destroy: function (event) {
    event.preventDefault();
    var feed_id = event.currentTarget.id
    // debugger
    NewsReader.Collections.feeds.get(feed_id).destroy()
  }


});