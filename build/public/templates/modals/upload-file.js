
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
    return "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"upload-file\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h5>\n\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form class=\"mb-3\" id=\"uploadForm\" action=\"\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['description'] : null) ?
        "\n\t\t\t\t\t\t<label class=\"form-label\" for=\"fileInput\">" + 
          __escape(guard((context != null) ? context['description'] : null)) + 
          "</label>\n\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t\t<input type=\"file\" id=\"fileInput\" name=\"files[]\" " + 
      (guard((context != null) ? context['accept'] : null) ?
        "accept=\"" + 
          __escape(guard((context != null) ? context['accept'] : null)) + 
          "\"" :
        "") + 
      ">\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['showHelp'] : null) ?
        "\n\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['accept'] : null) ?
            "\n\t\t\t\t\t\t\t[[global:allowed-file-types, " + 
              __escape(guard((context != null) ? context['accept'] : null)) + 
              "]]\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['fileSize'] : null) ?
            "<span id=\"file-size-block\">([[uploads:maximum-file-size, " + 
              __escape(guard((context != null) ? context['fileSize'] : null)) + 
              "]])</span>" :
            "") + 
          "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type=\"hidden\" id=\"params\" name=\"params\" />\n\t\t\t\t</form>\n\n\t\t\t\t<div id=\"upload-progress-box\" class=\"progress progress-striped hide mb-3\">\n\t\t\t\t\t<div id=\"upload-progress-bar\" class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\">\n\t\t\t\t\t\t<span class=\"sr-only\"> [[success:success]]</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id=\"alert-status\" class=\"alert alert-info hide\"></div>\n\t\t\t\t<div id=\"alert-success\" class=\"alert alert-success hide\"></div>\n\t\t\t\t<div id=\"alert-error\" class=\"alert alert-danger hide\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\" aria-hidden=\"true\">[[global:close]]</button>\n\t\t\t\t<button id=\"fileUploadSubmitBtn\" class=\"btn btn-primary\">" + 
      __escape(guard((context != null) ? context['button'] : null)) + 
      "</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
