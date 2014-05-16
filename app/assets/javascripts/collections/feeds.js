App.Collections.Feeds = Backbone.Collection.extend({
  model: App.Models.Feed,
  url: "/api/feeds",

  getOrFetch: function (id) {
    var feed;

    feed = this.get(id);
    if (feed) {
      return feed;
    } else {
      feed = new App.Models.Feed({ id: id });
      feed.fetch({
        success: function () {
          App.Collections.feeds.add(feed);
        }
      });
      return feed;
    }
  }
});


App.Collections.feeds = new App.Collections.Feeds();
