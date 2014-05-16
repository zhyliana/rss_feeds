App.Views.FeedsShow = Backbone.View.extend({
  events: {
    "click button.refresh": "refresh"
  },

  template: JST["feeds/show"],

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.model, 'sync', this.buildSubViews)
    this.subViews = [];
  },

  refresh: function () {
    this.model.fetch();
  },

  render: function() {
    var renderedContent = this.template({
      feed: this.model,
      entries: this.model.entries()
    });


    this.$el.html(renderedContent);

    var $entries = $(".entries")
    this.subViews.forEach(function(subView) {
      $entries.append(subView.render().$el)
    })

    return this;
  },

  buildSubViews: function(){
    this.subviews = [];

    var feedView = this;
    this.model.entries().each(function(entry){
      var subView = new App.Views.EntriesShow({
        model: entry,
      });
      feedView.subViews.push(subView);
    });
  }
});
