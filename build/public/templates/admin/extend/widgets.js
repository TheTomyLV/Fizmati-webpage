
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
    return "<div class=\"d-flex flex-column gap-2 px-lg-4\">\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/extend/widgets:widgets]]</h4>\n\t\t</div>\n\t\t<div class=\"d-flex align-items-center gap-1\">\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n\t\t</div>\n\t</div>\n\t<div id=\"widgets\" class=\"row px-2\">\n\t\t<div class=\"col-9\" id=\"active-widgets\">\n\t\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t\t<div class=\"dropdown mb-3\">\n\t\t\t\t\t<button class=\"btn btn-light btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t\t<span class=\"selected-template\">" + 
      __escape(guard((context != null && context['templates'] != null && context['templates']['0'] != null) ? context['templates']['0']['template'] : null)) + 
      "</span> <span class=\"caret\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu " + 
      (guard((context != null && context['config'] != null) ? context['config']['isRTL'] : null) ?
        "dropdown-menu-end" :
        "") + 
      " p-1\">\n\t\t\t\t\t\t" + 
      compiled.blocks['templates'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button id=\"hide-drafts\" class=\"btn btn-light btn-sm\">[[admin/extend/widgets:hide-drafts]]</button>\n\t\t\t\t\t<button id=\"show-drafts\" class=\"btn btn-light btn-sm hidden\">[[admin/extend/widgets:show-drafts]]</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-6\" component=\"widgets-container\">\n\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t" + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<div class=\"tab-pane " + 
          (index === 0 ?
            "active" :
            "") + 
          "\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\">\n\t\t\t\t\t\t" + 
          iter(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['areas'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t<div class=\"area\" data-template=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "\" data-location=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "\">\n\t\t\t\t\t\t\t\t<h5>" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['name'] : null)) + 
              " <span class=\"fs-6 text-secondary\">" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              " / " + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "</span></h5>\n\t\t\t\t\t\t\t\t<div class=\"card card-body text-bg-light widget-area " + 
              ((guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null) == "drafts") ?
                " overflow-auto" :
                "") + 
              "\" " + 
              ((guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null) == "drafts") ?
                "style=\"max-height: calc(100vh - 200px);\"" :
                "") + 
              ">\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6\" component=\"drafts-container\">\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-3\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<div class=\"card-header\">[[admin/extend/widgets:available]]</div>\n\t\t\t\t<div class=\"card-body pt-0\">\n\t\t\t\t\t<div class=\"available-widgets\">\n\t\t\t\t\t\t<p class=\"text-sm\">[[admin/extend/widgets:explanation]]</p>\n\t\t\t\t\t\t" + 
      (guard((context != null && context['availableWidgets'] != null) ? context['availableWidgets']['length'] : null) ?
        "" :
        "\n\t\t\t\t\t\t<div class=\"alert alert-info\">[[admin/extend/widgets:none-installed, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/extend/plugins]]</div>\n\t\t\t\t\t\t") + 
      "\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<select id=\"widget-selector\" class=\"form-select\">\n\t\t\t\t\t\t\t\t" + 
      compiled.blocks['availableWidgets'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div data-widget=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\" class=\"card widget-panel  pointer hide\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t\t\t<strong>" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</strong>\n\t\t\t\t\t\t\t\t\t\t<small><br />" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['description'] : null)) + 
          "</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body hidden\">\n\t\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['content'] : null)) + 
          "\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"btn-group\" component=\"clone\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" component=\"clone/button\">[[admin/extend/widgets:clone-from]] ...</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary dropdown-toggle flex-0\" data-bs-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end\">\n\t\t\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t" + 
          (index === 0 ?
            "" :
            "\n\t\t\t\t\t\t\t\t<li><a class=\"dropdown-item\" href=\"#\">" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "</a></li>\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">[[admin/extend/widgets:containers.available]]</div>\n\t\t\t\t<div class=\"card-body pt-0\">\n\t\t\t\t\t<p class=\"text-sm\">[[admin/extend/widgets:containers.explanation]]</p>\n\t\t\t\t\t<div class=\"available-containers\">\n\t\t\t\t\t\t<div class=\"containers\">\n\t\t\t\t\t\t\t<div class=\"pointer\" style=\"padding: 20px; border: 1px dotted #dedede; margin-bottom: 20px;\" data-container-html=\" \">\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:containers.none]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card card-header p-3 rounded-0 border-0 shadow-none mb-3 pointer\" data-container-html='<div class=\"card card-header p-3 rounded-0 border-0 shadow-none mb-3\">" + 
      "{{body}}</div>'>\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.well]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card card-header rounded-0 border-0 shadow-none p-5 mb-3 pointer\" data-container-html='<div class=\"card card-header rounded-0 border-0 shadow-none p-5 mb-3\">" + 
      "{{body}}</div>'>\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.jumbotron]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card mb-3\" data-container-html='<div class=\"card\"><div class=\"card-body\">" + 
      "{{body}}</div></div>'>\n\t\t\t\t\t\t\t\t<div class=\"card-body pointer\">\n\t\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.card]]\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card mb-3 pointer\" data-container-html='<div class=\"card\"><h5 class=\"card-header\">" + 
      "{{title}}</h5><div class=\"card-body\">" + 
      "{{body}}</div></div>'>\n\t\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.card-header]]\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex gap-1 color-selector\">\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"text-bg-primary\" class=\"btn btn-sm btn-primary\"</button>\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"\" class=\"btn btn-sm btn-secondary\"</button>\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"text-bg-success\" class=\"btn btn-sm btn-success\"</button>\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"text-bg-info\" class=\"btn btn-sm btn-info\"</button>\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"text-bg-warning\" class=\"btn btn-sm btn-warning\"</button>\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"text-bg-danger\" class=\"btn btn-sm btn-danger\"</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.card-body]]\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"alert alert-info pointer\" data-container-html='<div class=\"alert alert-info\">" + 
      "{{body}}</div>'>\n\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.alert]]\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex gap-1 color-selector\">\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"alert-success\" class=\"btn btn-sm btn-success\"></button>\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"alert-info\" class=\"btn btn-sm btn-info\"></button>\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"alert-warning\" class=\"btn btn-sm btn-warning\"></button>\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"alert-danger\" class=\"btn btn-sm btn-danger\"></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'templates': function templates(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1 d-flex justify-content-between align-items-center gap-3\" href=\"#\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\" data-toggle=\"pill\">" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          " <span class=\"badge text-bg-light border\" style=\"min-width: 2.15em;\">" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['widgetCount'] : null)) + 
          "</span></a></li>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'availableWidgets': function availableWidgets(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</option>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
