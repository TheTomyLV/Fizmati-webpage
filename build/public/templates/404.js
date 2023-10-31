
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
    return "<div class=\"flex-fill\">\n\t<h2 class=\"fw-semibold tracking-tight text-center\">[[global:404.title]]</h2>\n\n\t<div class=\"mx-auto\">\n\t\t<div class=\"d-flex flex-column gap-3 justify-content-center text-center\">\n\t\t\t<div class=\"mx-auto p-4 bg-light border rounded\">\n\t\t\t\t<i class=\"text-secondary fa fa-fw fa-4x " + 
      (guard((context != null) ? context['icon'] : null) ?
        __escape(guard((context != null) ? context['icon'] : null)) :
        "fa-otter") + 
      "\"></i>\n\t\t\t</div>\n\t\t\t" + 
      (guard((context != null) ? context['error'] : null) ?
        __escape(guard((context != null) ? context['error'] : null)) :
        "[[global:404.message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "]]") + 
      "\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
