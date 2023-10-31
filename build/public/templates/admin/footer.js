
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
    return "\t\t</div> <!-- #content end-->\n\t</div>\n\n\t<div component=\"bottombar\" class=\"bottombar d-flex d-lg-none fixed-bottom ff-secondary gap-1 align-items-center\">\n\t<div class=\"bottombar-nav p-2 border-top text-bg-light d-flex justify-content-between align-items-center w-100\">\n\t\t<div class=\"\">\n\t\t\t<a href=\"#\" role=\"button\" class=\"p-2 nav-link nav-btn\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvas\" >\n\t\t\t\t<i class=\"fa fa-fw fa-lg fa-bars\"></i>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n</div>\n\t" + 
      (guard((context != null) ? context['isSpider'] : null) ?
        "" :
        "\n\t<div class=\"\">\n\t\t<div component=\"toaster/tray\" class=\"alert-window fixed-bottom mb-5 mb-md-2 me-2 me-md-5 ms-auto\" style=\"width:300px; z-index: 1090;\">\n\t\t\t<div id=\"reconnect-alert\" class=\"alert alert-dismissible alert-warning fade hide\" component=\"toaster/toast\">\n\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-hidden=\"true\"></button>\n\t\t\t\t<p class=\"mb-0\">[[global:reconnecting-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "]]</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t") + 
      "\n\t<script>\n\t\tif (document.readyState === 'loading') {\n\t\t\tdocument.addEventListener('DOMContentLoaded', prepareFooter);\n\t\t} else {\n\t\t\tprepareFooter();\n\t\t}\n\n\t\tfunction prepareFooter() {\n\t\t\t$(document).ready(function () {\n\t\t\t\tapp.coldLoad();\n\t\t\t});\n\t\t}\n\t</script>\n</body>\n</html>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
