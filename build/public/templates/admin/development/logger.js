
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
    return "<div class=\"logger settings d-flex flex-column gap-2 px-lg-4\">\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/development/logger:logger]]</h4>\n\t\t</div>\n\t\t<div class=\"d-flex align-items-center\">\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card-body\">\n\t\t<p>\n\t\t\t[[admin/development/logger:description]]\n\t\t</p>\n\t\t<br/>\n\t\t<p>\n\t\t\t[[admin/development/logger:explanation]]\n\t\t</p>\n\t\t<br/>\n\n\t\t<form>\n\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"loggerStatus\" data-field=\"loggerStatus\">\n\t\t\t\t<label for=\"loggerStatus\" class=\"form-check-label\">[[admin/development/logger:enable-http]]</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"loggerIOStatus\" data-field=\"loggerIOStatus\">\n\t\t\t\t<label for=\"loggerIOStatus\" class=\"form-check-label\">[[admin/development/logger:enable-socket]]</label>\n\t\t\t</div>\n\n\t\t\t<label class=\"form-label\" for=\"loggerPath\">[[admin/development/logger:file-path]]</label>\n\t\t\t<input id=\"loggerPath\" class=\"form-control\" type=\"text\" placeholder=\"[[admin/development/logger:file-path-placeholder]]\" data-field=\"loggerPath\" />\n\t\t</form>\n\t</div>\n</div>\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
