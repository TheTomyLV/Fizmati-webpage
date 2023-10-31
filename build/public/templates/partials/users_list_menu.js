
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
    return "<ul component=\"user/list/menu\" class=\"nav nav-pills\">\n\t<li class=\"nav-item\">\n\t\t<a class=\"nav-link\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=online\">[[global:online]]</a>\n\t</li>\n\t<li class=\"nav-item\">\n\t\t<a class=\"nav-link\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=sort-posts\">[[users:top-posters]]</a>\n\t</li>\n\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n\t<li class=\"nav-item\">\n\t\t<a class=\"nav-link\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=sort-reputation\">[[users:most-reputation]]</a>\n\t</li>\n\t") + 
      "\n\t" + 
      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
        "\n\t<li class=\"nav-item\">\n\t\t<a class=\"nav-link\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=flagged\">[[users:most-flags]]</a>\n\t</li>\n\t<li class=\"nav-item\">\n\t\t<a class=\"nav-link\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=banned\">[[user:banned]]</a>\n\t</li>\n\t" :
        "") + 
      "\n</ul>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
