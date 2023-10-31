
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
    return "<div class=\"mb-3\">\n\t<label class=\"form-label\">[[admin/extend/widgets:title]]</label>\n\t<input type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"[[admin/extend/widgets:title.placeholder]]\" />\n</div>\n\n<div class=\"mb-3\">\n\t<label class=\"form-label\">[[admin/extend/widgets:container]]</label>\n\t<textarea rows=\"4\" class=\"form-control container-html\" name=\"container\" placeholder=\"[[admin/extend/widgets:container.placeholder]]\"></textarea>\n</div>\n\n<div class=\"row mb-3\">\n\t<div class=\"col-lg-6\">\n\t\t<label class=\"form-label\">[[admin/extend/widgets:show-to-groups]]</label>\n\t\t<select name=\"groups\" class=\"form-select\" multiple size=\"10\">\n\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t</select>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<label class=\"form-label\">[[admin/extend/widgets:hide-from-groups]]</label>\n\t\t<select name=\"groupsHideFrom\" class=\"form-select\" multiple size=\"10\">\n\t\t\t" + 
      iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t</select>\n\t</div>\n</div>\n\n<div class=\"row mb-3\">\n\t<div class=\"col-lg-6\">\n\t\t<label class=\"form-label\">[[admin/extend/widgets:start-date]]</label>\n\t\t<input class=\"form-control\" name=\"startDate\" type=\"datetime-local\" />\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<label class=\"form-label\">[[admin/extend/widgets:end-date]]</label>\n\t\t<input class=\"form-control\" name=\"endDate\" type=\"datetime-local\" />\n\t</div>\n</div>\n\n<div class=\"form-check form-switch mb-3\">\n\t<input class=\"form-check-input\" type=\"checkbox\" name=\"hide-mobile\" id=\"hide-mobile-check\"/>\n\t<label class=\"form-check-label\" for=\"hide-mobile-check\">[[admin/extend/widgets:hide-on-mobile]]</label>\n</div>\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
