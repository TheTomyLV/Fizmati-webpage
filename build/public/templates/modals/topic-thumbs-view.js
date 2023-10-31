
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
    return "<div class=\"d-flex flex-column gap-4 topic-thumbs-view-modal\">\n\t<div class=\"d-flex justify-content-center align-items-center mb-5\" style=\"height: 33vh; max-height: 33vh;\">\n\t\t<img component=\"topic/thumb/current\" src=\"" + 
      __escape(guard((context != null) ? context['src'] : null)) + 
      "\" style=\"max-height: 33vh;\" />\n\t</div>\n\t" + 
      ((guard((context != null && context['thumbs'] != null) ? context['thumbs']['length'] : null) != "1") ?
        "\n\t<hr/>\n\t<div class=\"d-flex justify-content-center mb-3 gap-3\">\n\t" + 
          compiled.blocks['thumbs'](helpers, context, guard, iter, helper) + 
          "\n\t</div>\n\t" :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    'thumbs': function thumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<div>\n\t\t\t<img component=\"topic/thumb/select\" class=\"pointer rounded p-1 border border-3 " + 
          (guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['selected'] : null) ?
            "border-primary" :
            "") + 
          "\" height=\"64px\" style=\"width: auto;\" src=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['url'] : null)) + 
          "\"/>\n\t\t</div>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
