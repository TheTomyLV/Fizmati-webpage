
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
    return "<form type=\"form\">\n\t<div class=\"form-group\">\n\t\t<div component=\"category-selector\" class=\"btn-group\">\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t\t\t\t<span component=\"category-selector-selected\">[[topic:thread-tools.select-category]]</span> <span class=\"caret\"></span>\n\t\t\t</button>\n\t\t\t<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n\t\t\t</div>\n\t\t\t<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n\t\t\t\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n\t\t\t\t\t<a class=\"dropdown-item\" role=\"menuitem\">[[search:no-matches]]</a>\n\t\t\t\t</li>\n\t\t\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</form>\n" + 
      (guard((context != null) ? context['message'] : null) ?
        "\n<div>" + 
          __escape(guard((context != null) ? context['message'] : null)) + 
          "</div>\n" :
        "");
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\">\n\t\t\t\t\t<a class=\"dropdown-item\" role=\"menuitem\">" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['level'] : null)) + 
          "\n\t\t\t\t\t\t<span component=\"category-markup\">\n\t\t\t\t\t\t\t<div class=\"category-item d-inline-block\">\n\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
          "\n\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
