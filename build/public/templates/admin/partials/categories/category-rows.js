
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
    return "<ul data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" class=\"m-0 p-0 list-unstyled user-select-none\">\n" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\" class=\"" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null) ?
            "disabled" :
            "") + 
          "\">\n\t\t<hr/>\n\t\t<div class=\"category-row d-flex justify-content-between mb-1\">\n\t\t\t<div class=\"flex-grow-1 align-items-start d-flex gap-2\">\n\t\t\t\t<div class=\"d-flex gap-2\">\n\t\t\t\t\t<div class=\"toggle text-center text-sm\">\n\t\t\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"information flex-1 align-items-start d-flex gap-2\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "28px", "rounded-1"])) + 
          "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"d-grid gap-0\">\n\t\t\t\t\t\t\t<div class=\"title fw-semibold\">\n\t\t\t\t\t\t\t\t<a class=\"category-header text-reset\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "</a> " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            "<a class=\"text-xs text-muted\" href=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
              "\"><i class=\"fa fa-link\"></i> " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
              "</a>" :
            "") + 
          "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null) ?
            "\n\t\t\t\t\t\t\t<div class=\"description text-muted text-xs w-100\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
              "</div>\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"flex-shrink-0 d-flex gap-1 align-items-start\">\n\t\t\t\t<a href=\"" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null))) + 
          "\" class=\"btn btn-light btn-sm d-none d-sm-block\" target=\"_blank\">[[admin/admin:view]]</a>\n\n\t\t\t\t<a href=\"./categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" class=\"btn btn-light btn-sm d-none d-sm-block\">[[admin/manage/categories:edit]]</a>\n\n\t\t\t\t<div class=\"category-tools\">\n\t\t\t\t\t<button class=\"btn btn-light btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\"><i class=\"fa fa-fw fa-gear text-primary\"></i></button>\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1\">\n\t\t\t\t\t\t<li><a href=\"" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null))) + 
          "\" class=\"dropdown-item rounded-1 d-block d-sm-none\" target=\"_blank\">[[admin/admin:view]]</a></li>\n\n\t\t\t\t\t\t<li><a href=\"./categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" class=\"dropdown-item rounded-1 d-block d-sm-none\">[[admin/manage/categories:edit]]</a></li>\n\n\n\n\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"./categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "/analytics\">[[admin/manage/categories:analytics]]</a></li>\n\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/privileges/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">[[admin/manage/categories:privileges]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"set-order dropdown-item rounded-1\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-order=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['order'] : null)) + 
          "\">[[admin/manage/categories:set-order]]</a></li>\n\t\t\t\t\t\t<li class=\"dropdown-divider\"></li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a class=\"dropdown-item rounded-1\" href=\"#\" data-disable-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-action=\"toggle\" data-disabled=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null)) + 
          "\">\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null) ?
            "\n\t\t\t\t\t\t\t[[admin/manage/categories:enable]]\n\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t[[admin/manage/categories:disable]]\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ul class=\"list-unstyled has-more-categories mt-2 " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['hasMoreSubCategories'] : null) ?
            "" :
            "hidden") + 
          "\" data-hasmore=\"" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['hasMoreSubCategories'] : null) ?
            "1" :
            "0") + 
          "\">\n\t\t\t<li class=\"d-flex gap-2\">\n\t\t\t\t<div class=\"invisible toggle text-center text-sm\">\n\t\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\n\t\t\t\t</div>\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/categories?cid=" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "&page=" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['showMorePage'] : null)) + 
          "\" class=\"btn btn-sm btn-light\">[[category:x-more-categories, " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['subCategoriesLeft'] : null)) + 
          "]]</a>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
