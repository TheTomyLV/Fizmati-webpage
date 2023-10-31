
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
    return "<div class=\"flex-fill\">\n\t<h2 class=\"fw-semibold tracking-tight text-center\">[[global:500.title]]</h2>\n\n\t<div class=\"mx-auto\">\n\t\t<div class=\"d-flex flex-column gap-3 justify-content-center text-center\">\n\t\t\t<div class=\"mx-auto p-4 bg-light border rounded\">\n\t\t\t\t<i class=\"text-secondary fa fa-fw fa-4x fa-triangle-exclamation\"></i>\n\t\t\t</div>\n\t\t\t[[global:500.message]]\n\t\t\t" + 
      (guard((context != null) ? context['error'] : null) ?
        "<div class=\"text-sm text-muted\">" + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          "</div>" :
        "") + 
      "\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
