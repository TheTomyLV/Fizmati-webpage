
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
    return "<div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "hidden") + 
      " mb-0 py-1 pe-2 alert-dismissible\">\n\t<div>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</div>\n\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n\t\t[[admin/menu:alerts.upgrade, " + 
      __escape(guard((context != null) ? context['latestVersion'] : null)) + 
      "]]\n\t</a>\n\t<button type=\"button\" class=\"btn-close p-2\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
