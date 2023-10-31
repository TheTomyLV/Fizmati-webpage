
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
    return "<div class=\"row gy-2\">\n\t<div class=\"col-12 col-sm-8 col-md-6\">\n\t\t<div class=\"list-group\">\n\t\t\t" + 
      compiled.blocks['pictures'](helpers, context, guard, iter, helper) + 
      "\n\t\t</div>\n\t</div>\n\t<div class=\"col-12 col-sm-4 col-md-6\">\n\t\t<div class=\"list-group\">\n\t\t\t" + 
      (guard((context != null) ? context['allowProfileImageUploads'] : null) ?
        "\n\t\t\t<button type=\"button\" class=\"list-group-item\" data-action=\"upload\">\n\t\t\t\t[[user:upload-new-picture]]\n\t\t\t</button>\n\t\t\t" :
        "") + 
      "\n\t\t\t<button type=\"button\" class=\"list-group-item\" data-action=\"upload-url\">\n\t\t\t\t[[user:upload-new-picture-from-url]]\n\t\t\t</button>\n\t\t\t" + 
      (guard((context != null) ? context['uploaded'] : null) ?
        "\n\t\t\t<button type=\"button\" class=\"list-group-item\" data-action=\"remove-uploaded\">\n\t\t\t\t[[user:remove-uploaded-picture]]\n\t\t\t</button>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n</div>\n\n<hr />\n\n<h4>[[user:avatar-background-colour]]</h4>\n\n<label><input type=\"radio\" name=\"icon:bgColor\" value=\"transparent\" /><span></span></label>\n" + 
      compiled.blocks['iconBackgrounds'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'pictures': function pictures(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['pictures'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<button type=\"button\" class=\"list-group-item d-flex p-3\" data-type=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['type'] : null)) + 
          "\">\n\t\t\t\t<div class=\"flex-shrink-0\">\n\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['pictures'] != null) ? context['pictures'][key0] : null), "48px", guard((context != null) ? context['true'] : null)])) + 
          "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"flex-grow-1 ms-3 align-self-center fs-5 text-start\">\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['username'] : null)) + 
          "\n\t\t\t\t</div>\n\t\t\t</button>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'iconBackgrounds': function iconBackgrounds(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['iconBackgrounds'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<label><input type=\"radio\" name=\"icon:bgColor\" value=\"" + 
          __escape(guard(value)) + 
          "\" /><span style=\"background-color: " + 
          __escape(guard(value)) + 
          ";\"></span></label>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
