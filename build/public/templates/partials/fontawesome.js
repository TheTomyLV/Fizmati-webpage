
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
    return "<div class=\"icon-container\">\n\t<div class=\"form-group\">\n\t\t<label class=\"form-label\" for=\"fa-filter\">Type to search for icons</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\n\t</div>\n\t<div class=\"d-flex nbb-fa-icons flex-wrap\">\n\t\t" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\t<p class=\"form-text text-center\">\n\t\tFor a full list of icons, please consult:\n\t\t<a href=\"https://fontawesome.com/v6/icons/\">FontAwesome</a>\n\t</p>\n</div>";
  }

  compiled.blocks = {
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<i class=\"fa fa-xl fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['style'] : null)) + 
          " fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['id'] : null)) + 
          " rounded-1\"></i>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
