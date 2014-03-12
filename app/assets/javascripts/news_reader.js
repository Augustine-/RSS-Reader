window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initalize: function () {

    NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();
    NewsReader.Collections.feeds.fetch({
      success: function () {
        var newNewIndexView = new NewsReader.Views.FeedsIndex({collection: NewsReader.Collections.feeds});
        $('#sidebar').html(newNewIndexView.render().$el);

        var model;
        var feeds = NewsReader.Collections.feeds
        var newView = new NewsReader.Views.NewFeedView({collection: feeds, model: model});
        $('.feed_form').html(newView.render().$el);

        new NewsReader.Routers.AppRouter({
          $rootEl: $('#content')
        }); //pass in root element to routers
        Backbone.history.start();
      }
    });
  }
};

$(NewsReader.initalize);