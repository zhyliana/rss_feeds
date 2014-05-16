App.Collections.FeedEntries = Backbone.Collection.extend({
  model: App.Models.Entry,

  url: function(){
    return this.feed.url() + "/entries";
  },

  initialize: function(models, options){
    this.feed = options.feed;
  }
})