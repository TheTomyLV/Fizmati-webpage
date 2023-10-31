
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
    return "<div class=\"tags d-flex flex-column gap-2 px-lg-4\">\n\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/tags:manage-tags]]</h4>\n\t\t</div>\n\t\t<div class=\"d-flex align-items-center gap-1 flex-wrap\">\n\t\t\t<div class=\"input-group flex-nowrap w-auto\">\n\t\t\t\t<input class=\"form-control form-control-sm w-auto\" type=\"text\" id=\"tag-search\" placeholder=\"[[admin/manage/tags:search]]\"/>\n\t\t\t\t<span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n\t\t\t</div>\n\n\n\t\t\t<button class=\"btn btn-light btn-sm text-nowrap\" id=\"rename\"><i class=\"fa fa-pencil text-primary\"></i> [[admin/manage/tags:rename]]</button>\n\t\t\t<button class=\"btn btn-light btn-sm text-nowrap\" id=\"deleteSelected\"><i class=\"fa fa-trash text-danger\"></i> [[admin/manage/tags:delete]]</button>\n\t\t\t<button class=\"btn btn-primary btn-sm text-nowrap\" id=\"create\">[[admin/manage/tags:add-tag]]</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"tags\">\n\t\t<div class=\"\">\n\t\t\t<div class=\"tag-management\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<div class=\"alert alert-light text-sm\">\n\t\t\t\t\t\t[[admin/manage/tags:description]]\n\t\t\t\t\t</div>\n\n\t\t\t\t\t" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "" :
        "\n\t\t\t\t\t[[admin/manage/tags:none]]\n\t\t\t\t\t") + 
      "\n\n\t\t\t\t\t<div class=\"tag-list\">\n\t\t\t\t\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"modal fade\" id=\"create-modal\">\n\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h4 class=\"modal-title\">[[admin/manage/tags:create]]</h4>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"create-tag-name\">[[admin/manage/tags:name]]</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"create-tag-name\" placeholder=\"[[admin/manage/tags:name]]\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">[[admin/manage/tags:create]]</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"rename-modal hidden\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"form-label\" for=\"value\">[[admin/manage/tags:name]]</label>\n\t\t\t\t<input id=\"value\" data-name=\"value\" value=\"\" class=\"form-control\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<div class=\"tag-row p-2 me-3 mb-1\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<button disabled class=\"rounded-3 btn btn-light border position-relative\">\n\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\n\t\t\t\t\t\t\t\t\t<span class=\"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          " <span class=\"visually-hidden\">[[tags:tags]]</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
