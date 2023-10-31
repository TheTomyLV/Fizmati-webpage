
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
    return "\n<div class=\"tags d-flex flex-column gap-2 px-lg-4\">\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/extend/plugins:plugins]]</h4>\n\t\t</div>\n\t\t<div class=\"d-flex align-items-center gap-1\">\n\t\t\t<input autofocus class=\"form-control form-control-sm\" type=\"text\" id=\"plugin-search\" placeholder=\"[[admin/extend/plugins:plugin-search-placeholder]]\"/><br/>\n\t\t\t<button class=\"btn btn-primary btn-sm text-nowrap\" id=\"plugin-order\">[[admin/extend/plugins:order-active]]</button>\n\t\t</div>\n\t</div>\n\t<div class=\"\">\n\t\t" + 
      (guard((context != null) ? context['canChangeState'] : null) ?
        "" :
        "\n\t\t<div class=\"alert alert-warning\">[[error:plugins-set-in-configuration]]</div>\n\t\t") + 
      "\n\t\t<ul class=\"nav nav-pills mb-3\">\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<button class=\"nav-link\" data-bs-target=\"#trending\" data-bs-toggle=\"tab\">\n\t\t\t\t\t[[admin/extend/plugins:trending]]\n\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<button class=\"nav-link active\" data-bs-target=\"#installed\" data-bs-toggle=\"tab\">\n\t\t\t\t\t[[admin/extend/plugins:installed]]\n\t\t\t\t\t<span class=\"badge text-bg-light\">" + 
      __escape(guard((context != null) ? context['installedCount'] : null)) + 
      "</span>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<button class=\"nav-link\" data-bs-target=\"#active\" data-bs-toggle=\"tab\">\n\t\t\t\t\t[[admin/extend/plugins:active]]\n\t\t\t\t\t<span class=\"badge text-bg-light\">" + 
      __escape(guard((context != null) ? context['activeCount'] : null)) + 
      "</span>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<button class=\"nav-link\" data-bs-target=\"#deactive\" data-bs-toggle=\"tab\">\n\t\t\t\t\t[[admin/extend/plugins:inactive]]\n\t\t\t\t\t<span class=\"badge text-bg-light\">" + 
      __escape(guard((context != null) ? context['inactiveCount'] : null)) + 
      "</span>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<button class=\"nav-link\" data-bs-target=\"#upgrade\" data-bs-toggle=\"tab\">\n\t\t\t\t\t[[admin/extend/plugins:out-of-date]]\n\t\t\t\t\t<span class=\"badge text-bg-light\">" + 
      __escape(guard((context != null) ? context['upgradeCount'] : null)) + 
      "</span>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<button class=\"nav-link\" data-bs-target=\"#download\" data-bs-toggle=\"tab\">[[admin/extend/plugins:find-plugins]]</button>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<div class=\"plugins row px-2\">\n\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t<div class=\"tab-pane fade\" id=\"trending\">\n\t\t\t\t\t\t<div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n\t\t\t\t\t\t<ul class=\"trending list-unstyled\">\n\t\t\t\t\t\t\t" + 
      compiled.blocks['trending'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tab-pane fade show active\" id=\"installed\">\n\t\t\t\t\t\t<div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n\t\t\t\t\t\t<ul class=\"installed list-unstyled\">\n\t\t\t\t\t\t\t" + 
      compiled.blocks['installed'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tab-pane fade\" id=\"active\">\n\t\t\t\t\t\t<div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n\t\t\t\t\t\t<ul class=\"active list-unstyled\"></ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tab-pane fade\" id=\"deactive\">\n\t\t\t\t\t\t<div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n\t\t\t\t\t\t<ul class=\"deactive list-unstyled\"></ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tab-pane fade\" id=\"upgrade\">\n\t\t\t\t\t\t<div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n\t\t\t\t\t\t<ul class=\"upgrade list-unstyled\"></ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tab-pane fade\" id=\"download\">\n\t\t\t\t\t\t<div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n\t\t\t\t\t\t<ul class=\"download list-unstyled\">\n\t\t\t\t\t\t\t" + 
      compiled.blocks['download'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"acp-sidebar col-lg-3\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"form-check form-switch text-sm\">\n\t\t\t\t\t\t\t<input id=\"plugin-submit-usage\" class=\"form-check-input\" type=\"checkbox\" data-field=\"submitPluginUsage\" " + 
      (guard((context != null) ? context['submitPluginUsage'] : null) ?
        "checked" :
        "") + 
      "/>\n\t\t\t\t\t\t\t<label for=\"plugin-submit-usage\" class=\"form-check-label\">[[admin/extend/plugins:submit-anonymous-usage]]</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"fw-semibold text-sm\">[[admin/extend/plugins:dev-interested]]</div>\n\t\t\t\t\t\t\t<p class=\"text-xs text-muted\">\n\t\t\t\t\t\t\t\t[[admin/extend/plugins:docs-info]]\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"modal fade\" id=\"order-active-plugins-modal\">\n\t\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t<h4 class=\"modal-title\">[[admin/extend/plugins:order-active]]</h4>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t[[admin/extend/plugins:order.description]]\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t[[admin/extend/plugins:order.explanation]]\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<ul class=\"plugin-list list-unstyled d-flex flex-column gap-2\"></ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\">[[global:buttons.close]]</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"save-plugin-order\">[[global:save]]</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'trending': function trending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['trending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['error'] : null) ?
            "" :
            "\n<li id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" data-version=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['version'] : null)) + 
              "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 " + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                "active" :
                "") + 
              "\">\n\t<div>\n\t\t<h6><strong>" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['name'] : null)) + 
              "</strong></h6>\n\n\t\t" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['description'] : null) ?
                "\n\t\t<p class=\"text-xs\">" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['description'] : null)) + 
                  "</p>\n\t\t" :
                "") + 
              "\n\t\t" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['outdated'] : null) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\n\t\t<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['version'] : null)) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['latest'] : null)) + 
              "</strong></small>\n\n\t\t" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['outdated'] : null) ?
                "\n\t\t<button data-action=\"upgrade\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n\t\t<p class=\"text-xs\">\n\t\t\t" + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['isCompatible'] : null) ?
                    "\n\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard((context != null) ? context['version'] : null)) + 
                      "]]\n\t\t\t" :
                    "\n\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n\t\t\t") + 
                  "\n\t\t</p>\n\t\t" :
                "") + 
              "\n\n\t\t" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null) ?
                "\n\t\t<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null)) + 
                  "</a></p>\n\t\t" :
                "") + 
              "\n\t</div>\n\n\t<div class=\"controls d-flex flex-column gap-1\">\n\t\t" + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['installed'] : null) ?
                "\n\t\t\t" + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['isTheme'] : null) ?
                    "\n\t\t\t<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/admin/appearance/themes\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-arrow-up-right-from-square text-primary\"></i> [[admin/extend/plugins:plugin-item.themes]]</a>\n\t\t\t" :
                    "\n\n\t\t\t<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                        "" :
                        "hidden") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n\t\t\t\t<i class=\"fa fa-power-off text-danger\"></i> [[admin/extend/plugins:plugin-item.deactivate]]\n\t\t\t</button>\n\n\t\t\t<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                        "hidden" :
                        "") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n\t\t\t\t<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\n\t\t\t</button>\n\n\t\t\t") + 
                  "\n\n\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\n\t\t\t" + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                    "\n\t\t\t" + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['settingsRoute'] : null) ?
                        "\n\t\t\t<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['settingsRoute'] : null)) + 
                          "\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-wrench text-primary\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n\t\t\t" :
                        "") + 
                      "\n\t\t\t" :
                    "") + 
                  "\n\t\t" :
                "\n\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n\t\t") + 
              "\n\t</div>\n\n</li>\n") + 
          "\n\n" + 
          (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['error'] : null) ?
            "\n<li data-plugin-id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" class=\"clearfix\">\n\t<div class=\"float-end\">\n\t\t<button class=\"btn btn-light btn-sm disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\t</div>\n\n\t<h2><strong>" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "</strong></h2>\n\t<p class=\"text-xs\">\n\t\t[[admin/extend/plugins:plugin-item.unknown-explanation]]\n\t</p>\n</li>\n" :
            "") + 
          "\n\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'installed': function installed(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['installed'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['error'] : null) ?
            "" :
            "\n<li id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" data-version=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['version'] : null)) + 
              "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 " + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                "active" :
                "") + 
              "\">\n\t<div>\n\t\t<h6><strong>" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['name'] : null)) + 
              "</strong></h6>\n\n\t\t" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['description'] : null) ?
                "\n\t\t<p class=\"text-xs\">" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['description'] : null)) + 
                  "</p>\n\t\t" :
                "") + 
              "\n\t\t" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['outdated'] : null) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\n\t\t<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['version'] : null)) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['latest'] : null)) + 
              "</strong></small>\n\n\t\t" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['outdated'] : null) ?
                "\n\t\t<button data-action=\"upgrade\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n\t\t<p class=\"text-xs\">\n\t\t\t" + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['isCompatible'] : null) ?
                    "\n\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard((context != null) ? context['version'] : null)) + 
                      "]]\n\t\t\t" :
                    "\n\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n\t\t\t") + 
                  "\n\t\t</p>\n\t\t" :
                "") + 
              "\n\n\t\t" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null) ?
                "\n\t\t<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null)) + 
                  "</a></p>\n\t\t" :
                "") + 
              "\n\t</div>\n\n\t<div class=\"controls d-flex flex-column gap-1\">\n\t\t" + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['installed'] : null) ?
                "\n\t\t\t" + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['isTheme'] : null) ?
                    "\n\t\t\t<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/admin/appearance/themes\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-arrow-up-right-from-square text-primary\"></i> [[admin/extend/plugins:plugin-item.themes]]</a>\n\t\t\t" :
                    "\n\n\t\t\t<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                        "" :
                        "hidden") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n\t\t\t\t<i class=\"fa fa-power-off text-danger\"></i> [[admin/extend/plugins:plugin-item.deactivate]]\n\t\t\t</button>\n\n\t\t\t<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                        "hidden" :
                        "") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n\t\t\t\t<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\n\t\t\t</button>\n\n\t\t\t") + 
                  "\n\n\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\n\t\t\t" + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                    "\n\t\t\t" + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['settingsRoute'] : null) ?
                        "\n\t\t\t<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['settingsRoute'] : null)) + 
                          "\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-wrench text-primary\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n\t\t\t" :
                        "") + 
                      "\n\t\t\t" :
                    "") + 
                  "\n\t\t" :
                "\n\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n\t\t") + 
              "\n\t</div>\n\n</li>\n") + 
          "\n\n" + 
          (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['error'] : null) ?
            "\n<li data-plugin-id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" class=\"clearfix\">\n\t<div class=\"float-end\">\n\t\t<button class=\"btn btn-light btn-sm disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\t</div>\n\n\t<h2><strong>" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "</strong></h2>\n\t<p class=\"text-xs\">\n\t\t[[admin/extend/plugins:plugin-item.unknown-explanation]]\n\t</p>\n</li>\n" :
            "") + 
          "\n\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'download': function download(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['download'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<li id=\"" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['id'] : null)) + 
          "\" data-plugin-id=\"" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['id'] : null)) + 
          "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2\">\n\t<div class=\"\">\n\t\t<h6><strong>" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['name'] : null)) + 
          "</strong></h6>\n\n\t\t" + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['description'] : null) ?
            "\n\t\t<p class=\"text-xs\">" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['description'] : null)) + 
              "</p>\n\t\t" :
            "") + 
          "\n\n\t\t<small>[[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['latest'] : null)) + 
          "</strong></small>\n\t\t<p class=\"text-xs\">\n\t\t\t" + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['isCompatible'] : null) ?
            "\n\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
              __escape(guard((context != null) ? context['version'] : null)) + 
              "]]\n\t\t\t" :
            "\n\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n\t\t\t") + 
          "\n\t\t</p>\n\n\t\t" + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null) ?
            "\n\t\t<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null)) + 
              "</a></p>\n\t\t" :
            "") + 
          "\n\t</div>\n\t<div class=\"d-flex flex-column gap-1\">\n\t\t<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm hidden text-nowrap\">\n\t\t\t<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\n\t\t</button>\n\n\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\">\n\t\t\t<i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]\n\t\t</button>\n\t</div>\n</li>\n\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
