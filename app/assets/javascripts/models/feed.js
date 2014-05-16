App.Models.Feed = Backbone.Model.extend({
  urlRoot: "/api/feeds",

  entries: function(){
    if(!this._entries){
      this._entries = new App.Collections.FeedEntries([],{
        feed: this
      });
    }

    return this._entries;
  },

  parse: function(resp){
    if(resp.entries){
      var entry = new App.Models.Entry();

      this.entries().set(resp.entries, { parse: true });

      delete resp.entries;
    }

    return resp;
  }
});