window.NewsReader.Views.FeedsShowView = Backbone.View.extend({
  template: JST["feeds/show"],

  initialize: function () {
    this.listenTo(this.model, "change:entries sync", this.render )
  },

  render: function () {

    var renderedContent = this.template({
      feed: this.model
    })
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click button.refresh": "refresh"
  },

  refresh: function (event) {
    event.preventDefault();
    this.model.fetch();
  }

});