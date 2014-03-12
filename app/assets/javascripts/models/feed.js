window.NewsReader.Models.Feed = Backbone.Model.extend({
  entries: function () {
    if (!this._entries) {
      this._entries = new NewsReader.Collections.Entries([], {
        feed: this
      });
    }
    return this._entries;
  },

  parse: function (jsonResp) {
    if (jsonResp.entries) {
      this.entries().set(jsonResp.entries);
      delete jsonResp.entries;
    }
    return jsonResp;
  }
});