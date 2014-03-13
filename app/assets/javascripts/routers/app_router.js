window.NewsReader.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "feedsIndex",
    "feeds/new": "feedsNew",
    "feeds/:id": "feedsShow"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl; //swap the views inside the div
  },

  feedsIndex: function () {
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.Collections.feeds
    });

    this.$rootEl.html(indexView.render().$el);
  },

  feedsShow: function (id) {
    var feedModel = NewsReader.Collections.feeds.getOrFetch(id);

    var showView = new NewsReader.Views.FeedsShowView({
      model: feedModel,
      collection: feedModel.entries()
    });

    this.$rootEl.html(showView.render().$el);
  }
});



