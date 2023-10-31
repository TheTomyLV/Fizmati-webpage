
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
    return "<div class=\"row ip-blacklist\">\n\t<div class=\"col-lg-12\">\n\t\t<p class=\"lead\">\n\t\t\t[[ip-blacklist:lead]]\n\t\t</p>\n\t\t<p>\n\t\t\t[[ip-blacklist:description]]\n\t\t</p>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 d-flex flex-column\">\n\t\t\t\t<div class=\"card mb-3 flex-grow-1\">\n\t\t\t\t\t<div class=\"card-header\">[[ip-blacklist:active-rules]]</div>\n\t\t\t\t\t<div class=\"card-body d-flex flex-column\">\n\t\t\t\t\t\t<textarea id=\"blacklist-rules\" class=\"flex-grow-1 mb-3 w-100 d-block border px-2 py-1\">" + 
      __escape(guard((context != null) ? context['rules'] : null)) + 
      "</textarea>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" data-action=\"test\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-bomb\"></i> [[ip-blacklist:validate]]\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-action=\"apply\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-save\"></i> [[ip-blacklist:apply]]\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card flex-shrink-1\">\n\t\t\t\t\t<div class=\"card-header\">[[ip-blacklist:hints]]</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t[[ip-blacklist:hint-1]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t[[ip-blacklist:hint-2]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<div class=\"card mb-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"position-relative\" style=\"aspect-ratio: 2; max-height: initial;\">\n\t\t\t\t\t\t\t<canvas id=\"blacklist:hourly\" style=\"max-height: initial;\"></canvas>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-footer\"><small>[[ip-blacklist:analytics.blacklist-hourly]]</small></div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"position-relative\" style=\"aspect-ratio: 2; max-height: initial;\">\n\t\t\t\t\t\t\t<canvas id=\"blacklist:daily\" style=\"max-height: initial;\"></canvas>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-footer\"><small>[[ip-blacklist:analytics.blacklist-daily]]</small></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
