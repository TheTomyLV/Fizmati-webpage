
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
    return "<div id=\"upload-picture-from-url-modal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"upload-picture-url\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"upload-picture-url\">[[user:upload-picture]]</h5>\n\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<input id=\"uploadFromUrl\" class=\"form-control\" type=\"text\"/>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\" aria-hidden=\"true\">[[global:close]]</button>\n\t\t\t\t<button class=\"btn btn-primary upload-btn\">[[user:upload-picture]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
