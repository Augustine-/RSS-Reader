window.NewsReader.Views.FeedsShowView = Backbone.View.extend({
  template: JST["feeds/show"],

  initialize: function () {
    this.listenTo(this.model, "add reset sync submit", this.render),
    this.listenTo(this.model, "destroy change", this.backToIndex);
  },

  render: function () {

    var renderedContent = this.template({
      feed: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click button.refresh": "refresh"
  },

  refresh: function (event) {
    event.preventDefault();
    this.model.fetch();
  },

  backToIndex: function () {
    // $('content').html("")
    Backbone.history.navigate("", {trigger: true});
  }

});