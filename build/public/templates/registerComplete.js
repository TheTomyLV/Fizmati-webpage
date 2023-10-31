
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
    return "<div class=\"row\">\n\t<div class=\"col-12 col-sm-8 offset-sm-2\">\n\t\t<p class=\"lead text-center\">\n\t\t\t" + 
      (guard((context != null) ? context['register'] : null) ?
        "[[register:interstitial.intro-new]]" :
        "[[register:interstitial.intro]]") + 
      "\n\t\t</p>\n\n\t\t" + 
      (guard((context != null && context['errors'] != null) ? context['errors']['length'] : null) ?
        "\n\t\t<div class=\"alert alert-warning\">\n\t\t\t<p>\n\t\t\t\t[[register:interstitial.errors-found]]\n\t\t\t</p>\n\t\t\t<ul>\n\t\t\t\t" + 
          compiled.blocks['errors'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</ul>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\t</div>\n</div>\n\n<form role=\"form\" method=\"post\" action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register/complete\" enctype=\"multipart/form-data\">\n\t<input type=\"hidden\" name=\"csrf_token\" value=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\" />\n\n\t" + 
      compiled.blocks['sections'](helpers, context, guard, iter, helper) + 
      "\n\n\t<div class=\"row mt-3\">\n\t\t<div class=\"col-12 col-sm-8 offset-sm-2 d-grid\">\n\t\t\t<button class=\"btn btn-primary\">[[topic:composer.submit]]</button>\n\t\t\t<button class=\"btn btn-link\" formaction=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register/abort\">" + 
      (guard((context != null) ? context['register'] : null) ?
        "[[register:cancel-registration]]" :
        "[[modules:bootbox.cancel]]") + 
      "</button>\n\t\t</div>\n\t</div>\n</form>\n";
  }

  compiled.blocks = {
    'errors': function errors(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['errors'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li>" + 
          __escape(guard(value)) + 
          "</li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sections': function sections(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sections'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<div class=\"row mb-3\">\n\t\t<div class=\"col-12 col-sm-8 offset-sm-2\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t" + 
          __escape(guard(value)) + 
          "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
