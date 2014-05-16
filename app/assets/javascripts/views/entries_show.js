App.Views.EntriesShow = Backbone.View.extend({
  template: JST["entries/show"],

  render: function () {
    var htmlContent = this.template({
      entry: this.model
    });

    this.$el.html(htmlContent);

    return this;
  }
});