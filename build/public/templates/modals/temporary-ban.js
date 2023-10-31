
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
    return "<form class=\"form\">\n\t<div class=\"row\">\n\t\t<div class=\"col-12\">\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t[[admin/manage/users:temp-ban.explanation]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-5\">\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<label class=\"form-label\" for=\"length\">[[admin/manage/users:temp-ban.length]]</label>\n\t\t\t\t<input class=\"form-control\" id=\"length\" name=\"length\" type=\"number\" min=\"0\" value=\"1\" />\n\t\t\t</div>\n\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t<label class=\"form-check-label\" for=\"unit-hours\">[[admin/manage/users:temp-ban.hours]]</label>\n\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"unit-hours\" name=\"unit\" value=\"0\" checked />\n\t\t\t</div>\n\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t<label class=\"form-check-label\" for=\"unit-days\">[[admin/manage/users:temp-ban.days]]</label>\n\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"unit-days\" name=\"unit\" value=\"1\" />\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-7\">\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<label class=\"form-label\" for=\"reason\">[[admin/manage/users:temp-ban.reason]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"reason\" name=\"reason\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
