
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
    return "<div class=\"px-lg-4\">\n\t<p class=\"lead\">[[admin/manage/digest:lead]]</p>\n\t<p>[[admin/manage/digest:disclaimer]]</p>\n\t<p>[[admin/manage/digest:disclaimer-continued]]</p>\n\n\t<hr />\n\n\n\t<div class=\"mb-3\">\n\t\t<div class=\"mb-2\"><em>[[admin/manage/digest:default-help, " + 
      __escape(guard((context != null) ? context['default'] : null)) + 
      "]]</em></div>\n\t\t<div class=\"d-flex gap-1\">\n\t\t\t<div>[[admin/manage/digest:manual-run]]</div>\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-day\">[[admin/settings/user:digest-freq.daily]]</button>\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-week\">[[admin/settings/user:digest-freq.weekly]]</button>\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-biweek\">[[admin/settings/user:digest-freq.biweekly]]</button>\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-month\">[[admin/settings/user:digest-freq.monthly]]</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"table-responsive\">\n\t\t<table class=\"table\">\n\t\t\t<thead>\n\t\t\t\t<th>[[admin/manage/digest:user]]</th>\n\t\t\t\t<th>[[admin/manage/digest:subscription]]</th>\n\t\t\t\t<th>[[admin/manage/digest:last-delivery]]</th>\n\t\t\t\t<th></th>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t" + 
      compiled.blocks['delivery'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t" + 
      (guard((context != null && context['delivery'] != null) ? context['delivery']['length'] : null) ?
        "" :
        "\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=\"4\">\n\t\t\t\t\t\t<div class=\"alert alert-success\">\n\t\t\t\t\t\t\t[[admin/manage/digest:no-delivery-data]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t") + 
      "\n\t\t\t</tbody>\n\t\t\t<tfoot>\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=\"4\"><div component=\"pagination\" class=\"pagination-container mt-3" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\n\t\t<li class=\"page-item previous float-start" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t<li class=\"page-item next float-end " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n\n\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
        "" :
        "\n\t<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\n\t\t<li class=\"page-item first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n\t\t</li>\n\n\t\t<li class=\"page-item previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\n\t\t</li>\n\n\t\t<li class=\"page-item next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\n\t\t<li class=\"page-item last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n\t") + 
      "\n</div></td>\n\t\t\t\t</tr>\n\t\t\t</tfoot>\n\t\t</table>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'delivery': function delivery(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['delivery'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<tr>\n\t\t\t\t\t<td>" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['delivery'] != null) ? context['delivery'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          " <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['username'] : null)) + 
          "</a></td>\n\t\t\t\t\t<td>" + 
          (guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['setting'] : null) ?
            __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['setting'] : null)) :
            "<em>[[admin/manage/digest:default]]</em>") + 
          "</td>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['lastDelivery'] : null)) + 
          "</td>\n\t\t\t\t\t<td><button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend\" data-uid=\"" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['uid'] : null)) + 
          "\">[[admin/manage/digest:resend]]</button></td>\n\t\t\t\t</tr>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n\t\t\t</li>\n\t\t\t" :
            "\n\t\t\t<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n\t\t\t</li>\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
