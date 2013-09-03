(function() {
  var ready, renderArticle, renderData;

  renderArticle = function(index, article) {
    var directive;
    directive = {
      '.title': 'title',
      '.summary': 'summary',
      '.industry': 'industry',
      '.country': 'country'
    };
    $("#article-" + index).render(article, directive);
    return $("#article-" + index).show();
  };

  renderData = function(articles) {
    var article, i, _i, _len, _results;
    _results = [];
    for (i = _i = 0, _len = articles.length; _i < _len; i = ++_i) {
      article = articles[i];
      _results.push(renderArticle(i + 1, article));
    }
    return _results;
  };

  ready = function() {
    var url;
    url = 'http://api.trade.gov/articles/search?callback=?';
    return $.getJSON(url, renderData);
  };

  $(document).ready(ready);

}).call(this);
