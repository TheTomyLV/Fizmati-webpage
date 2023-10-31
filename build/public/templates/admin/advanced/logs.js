
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
    return "<div class=\"logs settings d-flex flex-column gap-2 px-lg-4\">\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/advanced/logs:logs]]</h4>\n\t\t</div>\n\t\t<div class=\"d-flex align-items-center gap-1\">\n\t\t\t<button class=\"btn btn-sm btn-light text-nowrap\" data-action=\"clear\">\n\t\t\t\t<i class=\"fa fa-trash text-danger\"></i> [[admin/advanced/logs:clear]]\n\t\t\t</button>\n\t\t\t<button class=\"btn btn-sm btn-light text-nowrap\" data-action=\"reload\">\n\t\t\t\t<i class=\"fa fa-refresh text-primary\"></i> [[admin/advanced/logs:reload]]\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card\">\n\t\t<div class=\"card-body\">\n\t\t\t<pre class=\"text-break\" style=\"height: 600px; white-space: break-spaces;\">" + 
      __escape(guard((context != null) ? context['data'] : null)) + 
      "</pre>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
