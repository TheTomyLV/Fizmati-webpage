
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
    return "<div class=\"acp-page-container\">\n\t<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\n        <div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0\">\n            <h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\n        </div>\n        <div class=\"col-12 col-md-4 px-0 px-md-3 d-flex gap-1\">\n            <button id=\"add\" class=\"btn btn-light btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\"><i class=\"fa fa-plus text-primary\"></i> [[admin/admin:add]]</button>\n            <button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n        </div>\n    </div>\n\n\t<div class=\"row m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 px-0 mb-4\" tabindex=\"0\">\n            <p class=\"lead\">\n                Define and customise your new routes here.\n            </p>\n            <p>\n               You can add content to your new routes from <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/extend/widgets\">Extend &rarr; Widgets</a>.\n            </p>\n            <p>\n                You can add your new route to the site navigation from <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/general/navigation\">General &rarr; Navigation</a> and select \"Custom Route\".\n            </p>\n            <p>\n                If you wish to set a custom page as your homepage, go to <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/settings/general#home-page\">General &rarr; Homepage</a> and select \"Custom\".\n            </p>\n\n            <div id=\"custom-pages\">\n                " + 
      compiled.blocks['pages'](helpers, context, guard, iter, helper) + 
      "\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"template card card-body text-bg-light hidden\">\n    <form>\n        <span class=\"float-end\"><i class=\"fa fa-times pointer\"></i></span>\n        <div class=\"mb-3\">\n            <label>Page Title\n            <input type=\"text\" class=\"form-control\" name=\"name\" value=\"\" placeholder=\"Page Title\" />\n            </label>\n\n            <label>Path to Page\n            <input type=\"text\" class=\"form-control\" name=\"route\" value=\"\" placeholder=\"/my-page\" />\n            </label>\n        </div>\n\n        <div>\n        <label class=\"form-label\">Restrict access to groups (leave blank for public):</label>\n        </div>\n        <input type=\"text\" class=\"form-control groups-list\" name=\"groups\" value=\"\" placeholder=\"\" />\n    </form>\n</div>\n";
  }

  compiled.blocks = {
    'pages': function pages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <div class=\"card card-body text-bg-light\">\n                    <form>\n                        <span class=\"float-end\"><i class=\"fa fa-times pointer\"></i></span>\n                        <div class=\"mb-3\">\n                            <label>Page Title\n                            <input type=\"text\" class=\"form-control\" name=\"name\" value=\"" + 
          __escape(guard((context != null && context['pages'] != null && context['pages'][key0] != null) ? context['pages'][key0]['name'] : null)) + 
          "\" placeholder=\"Page Title\" />\n                            </label>\n\n                            <label>Path to Page\n                            <input type=\"text\" class=\"form-control\" name=\"route\" value=\"" + 
          __escape(guard((context != null && context['pages'] != null && context['pages'][key0] != null) ? context['pages'][key0]['route'] : null)) + 
          "\" placeholder=\"/my-page\" />\n                            </label>\n                        </div>\n\n                        <div>\n                            <label class=\"form-label\">Restrict access to groups (leave blank for public):</label>\n                        </div>\n                        <input type=\"text\" class=\"form-control groups-list\" name=\"groups\" value=\"" + 
          __escape(guard((context != null && context['pages'] != null && context['pages'][key0] != null) ? context['pages'][key0]['groups'] : null)) + 
          "\" placeholder=\"\" />\n                    </form>\n                </div>\n                ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
