
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
    return "<div class=\"modal fade\" id=\"create-modal\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h4 class=\"modal-title\">[[admin/manage/groups:create]]</h4>\n\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"alert alert-danger hide\" id=\"create-modal-error\"></div>\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"create-group-name\">[[admin/manage/groups:name]]</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"create-group-name\" placeholder=\"[[admin/manage/groups:name]]\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"create-group-desc\">[[admin/manage/groups:description]]</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"create-group-desc\" placeholder=\"[[admin/manage/groups:description-placeholder]]\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t\t<input class=\"form-check-input\" id=\"create-group-private\" name=\"private\" type=\"checkbox\" checked>\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"create-group-private\">[[admin/manage/groups:private]]</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t\t<input class=\"form-check-input\" id=\"create-group-hidden\" name=\"hidden\" type=\"checkbox\">\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"create-group-hidden\">[[admin/manage/groups:hidden]]</label>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\">\n\t\t\t\t\t[[global:close]]\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">\n\t\t\t\t\t[[admin/manage/groups:create-button]]\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
