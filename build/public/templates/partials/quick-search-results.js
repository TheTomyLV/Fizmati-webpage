
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
    return "<ul id=\"quick-search-results\" class=\"quick-search-results list-unstyled mb-0 p-0 overflow-auto\" style=\"max-width:400px; max-height: 500px;\">\n" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n" + 
      (guard((context != null) ? context['multiplePages'] : null) ?
        "\n<div class=\"text-center mt-2\">\n\t<a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "\">\n\t\t[[search:see-more-results, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          "]]\n\t</a>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n<div class=\"text-center no-results\">[[search:no-matches]]</li>\n");
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-tid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['tid'] : null)) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\"\n\t\tclass=\"text-decoration-none text-reset clearfix d-block text-truncate px-3 py-1\">\n\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n\t\t<span class=\"quick-search-title fw-bold\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "</span>\n\t\t<br/>\n\t\t<p class=\"snippet text-break text-wrap\">\n\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['snippet'] : null)) + 
          "\n\t\t</p>\n\t\t<small class=\"post-info float-end\">\n\t\t\t<div class=\"category-item d-inline-block\">\n\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null), "24px", "rounded-circle"])) + 
          " " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "\n\t\t\t\t&bull; <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n\t\t\t</div>\n\t\t</small>\n\t</a>\n</li>\n" + 
          (index === length - 1 ?
            "" :
            "\n<li role=\"separator\" class=\"dropdown-divider\"></li>\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
