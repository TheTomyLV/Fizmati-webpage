
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
    return "<div class=\"dropdown dropdown-left bottom-sheet " + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t<button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t" + 
      (guard((context != null) ? context['selectedUser'] : null) ?
        "\n\t<span class=\"\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['selectedUser'] : null), "20px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
          " " + 
          __escape(guard((context != null && context['selectedUser'] != null) ? context['selectedUser']['username'] : null)) + 
          "</span>\n\t" :
        "\n\t<span class=\"\">[[users:all-users]]</span>\n\t") + 
      " <span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu\" role=\"menu\">\n\t<li role=\"presentation\" class=\"user " + 
      (guard((context != null) ? context['selectedUser'] : null) ?
        "" :
        "selected") + 
      "\">\n\t\t<a class=\"dropdown-item\" role=\"menu-item\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['allUsersUrl'] : null)) + 
      "\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['selectedUser'] : null) ?
        "" :
        "fa-check") + 
      "\"></i>[[users:all-users]]</a>\n\t</li>\n\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n\n</div>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li role=\"presentation\" class=\"user " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          "\">\n\t\t<a class=\"dropdown-item\" role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['url'] : null)) + 
          "\">\n\t\t\t<i class=\"fa fa-fw " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>\n\t\t\t<div class=\"d-inline-flex gap-1 align-items-center\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "24px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
          " " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</div>\n\t\t</a>\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
