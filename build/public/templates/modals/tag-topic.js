
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
    return "<div class=\"card tool-modal shadow\">\n\t<h5 class=\"card-header\">\n\t\t[[topic:thread-tools.tag]]\n\t</h5>\n\t<div class=\"card-body d-flex flex-column gap-2\">\n\t\t" + 
      (guard((context != null) ? context['tagWhitelist'] : null) ?
        "\n\t\t<div class=\"d-flex flex-column gap-1\">\n\t\t\t<span>[[tags:tag-whitelist]]</span>\n\t\t\t<div>\n\t\t\t\t" + 
          compiled.blocks['tagWhitelist'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</div>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\t\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\t<div class=\"card-footer text-end\">\n\t\t<button class=\"btn btn-link btn-sm\" id=\"tag-topic-cancel\">[[global:buttons.close]]</button>\n\t\t<button class=\"btn btn-primary btn-sm\" id=\"tag-topic-commit\">[[global:save]]</button>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'tagWhitelist': function tagWhitelist(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagWhitelist'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<span class=\"badge bg-info\">" + 
          __escape(guard(value)) + 
          "</span>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<div class=\"mb-3\">\n\t\t\t<label class=\"form-label\" for=\"fork-title\"><strong>" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</strong></label>\n\t\t\t<input class=\"tags\" type=\"text\" placeholder=\"[[tags:enter-tags-here, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['minimumTagLength'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['maximumTagLength'] : null)) + 
          "]]\" />\n\t\t</div>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
