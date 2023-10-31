
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
    return "<a href=\"/gallery\">Galerija</a>\r\n" + 
      compiled.blocks['image'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'image': function image(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['image'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n    <img src=\"" + 
          __escape(guard(value)) + 
          "\" alt=\"\" width=\"100\">\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
