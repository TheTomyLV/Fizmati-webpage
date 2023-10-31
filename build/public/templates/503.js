
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
    return "<div class=\"flex-fill\">\n\t<h2 class=\"fw-semibold tracking-tight text-center\">[[pages:maintenance.text, " + 
      __escape(guard((context != null) ? context['site_title'] : null)) + 
      "]]</h2>\n\n\t<div class=\"mx-auto\">\n\t\t<div class=\"d-flex flex-column gap-3 justify-content-center text-center\">\n\t\t\t<div class=\"mx-auto p-4 bg-light border rounded\">\n\t\t\t\t<i class=\"text-secondary fa fa-fw fa-4x fa-wrench\"></i>\n\t\t\t</div>\n\t\t\t" + 
      (guard((context != null) ? context['message'] : null) ?
        "\n\t\t\t[[pages:maintenance.messageIntro]]\n\t\t\t<div class=\"text-sm text-muted\">" + 
          __escape(guard((context != null) ? context['message'] : null)) + 
          "</div>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
