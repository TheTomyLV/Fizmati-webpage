
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div title=\"[[topic:sort-by]]\" class=\"btn-group bottom-sheet hidden-xs\" component=\"thread/sort\">\n\t<button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t<span><i class=\"fa fa-fw fa-sort\"></i></span></button>\n\t<ul class=\"dropdown-menu dropdown-menu-end\">\n\t\t<li><a class=\"dropdown-item\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\"><i class=\"fa fa-fw\"></i> [[topic:oldest-to-newest]]</a></li>\n\t\t<li><a class=\"dropdown-item\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\"><i class=\"fa fa-fw\"></i> [[topic:newest-to-oldest]]</a></li>\n\t\t<li><a class=\"dropdown-item\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\"><i class=\"fa fa-fw\"></i> [[topic:most-votes]]</a></li>\n\t</ul>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
