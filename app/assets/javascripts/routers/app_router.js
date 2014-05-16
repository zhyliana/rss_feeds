App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "" : "feedsIndex",
    "feeds/:id" : "feedsShow"
  },

  feedsIndex: function () {
    App.Collections.feeds.fetch();

    var indexView = new App.Views.FeedsIndex({
      collection: App.Collections.feeds
    });

    $("body").html(indexView.$el);
  },

  feedsShow: function (id) {
    var feed = App.Collections.feeds.getOrFetch(id);
    feed.fetch();
    var showView = new App.Views.FeedsShow({
      model: feed
    });

    $("body").html(showView.render().$el);
  }
});