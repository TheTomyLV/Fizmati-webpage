
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
    return (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n<div component=\"acp/search\" class=\"my-1 acp-search\">\n\t<div class=\"dropdown\">\n\t\t<input type=\"text\" data-bs-toggle=\"dropdown\" class=\"form-control\" placeholder=\"[[admin/menu:search.placeholder]]\">\n\t\t<ul class=\"dropdown-menu state-start-typing p-1\" role=\"menu\">\n\t\t\t<li role=\"presentation\" class=\"no-results\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.no-results]]</a>\n\t\t\t</li>\n\t\t\t<li role=\"presentation\" class=\"dropdown-divider search-forum\"></li>\n\t\t\t<li role=\"presentation\" class=\"search-forum\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\" target=\"_top\" href=\"#\">\n\t\t\t\t\t[[admin/menu:search.search-forum]]\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li role=\"presentation\" class=\"keep-typing\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.keep-typing]]</a>\n\t\t\t</li>\n\t\t\t<li role=\"presentation\" class=\"start-typing\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.start-typing]]</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
