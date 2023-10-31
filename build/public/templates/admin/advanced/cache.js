
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
    return "\n<div class=\"post-cache settings d-flex flex-column gap-2 px-lg-4\">\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/advanced/cache:cache]]</h4>\n\t\t</div>\n\t\t<div class=\"d-flex align-items-center\">\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"row px-2\">\n\t\t" + 
      compiled.blocks['caches'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n</div>\n\n";
  }

  compiled.blocks = {
    'caches': function caches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['caches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<div class=\"col-xl-3\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">[[admin/advanced/cache:" + 
          __escape(key) + 
          "-cache]]</div>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"form-check form-switch mb-3\" data-name=\"" + 
          __escape(key) + 
          "\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" " + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['enabled'] : null) ?
            "checked" :
            "") + 
          ">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"mb-3\">" + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['length'] : null) ?
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['length'] : null)) :
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['itemCount'] : null))) + 
          " / " + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['max'] : null) ?
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['max'] : null)) :
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['maxSize'] : null))) + 
          "</div>\n\t\t\t\t\t<div class=\"progress mb-3\" style=\"height:20px;\">\n\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "%;\">\n\t\t\t\t\t\t\t[[admin/advanced/cache:percent-full, " + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t\t<label>Hits:</label> <span>" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['hits'] : null)) + 
          "</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t\t<label>Misses:</label> <span>" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['misses'] : null)) + 
          "</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t\t<label>Hit Ratio:</label> <span>" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['hitRatio'] : null)) + 
          "</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t\t<label>Hits / Sec:</label> <span>" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['hitsPerSecond'] : null)) + 
          "</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t" + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['ttl'] : null) ?
            "\n\t\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t\t<label>TTL:</label> <span>" + 
              __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['ttl'] : null)) + 
              "</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t" + 
          ((key == "post") ?
            "\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label for=\"postCacheSize\">[[admin/advanced/cache:post-cache-size]]</label>\n\t\t\t\t\t\t<input id=\"postCacheSize\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"postCacheSize\">\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/api/admin/advanced/cache/dump?name=" + 
          __escape(key) + 
          "\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-download\"></i></a>\n\t\t\t\t\t<a class=\"btn btn-sm btn-danger clear\" data-name=\"" + 
          __escape(key) + 
          "\"><i class=\"fa fa-trash\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
