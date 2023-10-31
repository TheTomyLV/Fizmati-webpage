
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
      compiled.blocks['folder'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'folder': function folder(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['folder'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<div>\r\n    <a href=\"/gallery/" + 
          __escape(guard((context != null && context['folder'] != null && context['folder'][key0] != null) ? context['folder'][key0]['url'] : null)) + 
          "\" class=\"title text-break fs-4 fw-semibold m-0 tracking-tight w-100 text-reset\">" + 
          __escape(guard((context != null && context['folder'] != null && context['folder'][key0] != null) ? context['folder'][key0]['name'] : null)) + 
          "</a>\r\n    <br>\r\n    " + 
          iter(guard((context != null && context['folder'] != null && context['folder'][key0] != null) ? context['folder'][key0]['images'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n        <img src=\"" + 
              __escape(guard(value)) + 
              "\" alt=\"\" width=\"100\">\r\n    ";
          }, function alt() {
            return "";
          }) + 
          "\r\n</div>\r\n\r\n\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
