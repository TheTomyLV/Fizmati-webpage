
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
    return "<div class=\"navigation d-flex flex-column gap-2 px-lg-4\">\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/settings/navigation:navigation]]</h4>\n\t\t</div>\n\t\t<div class=\"d-flex gap-1\">\n\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n\t\t</div>\n\t</div>\n\n\n\n\t<div class=\"row\" id=\"navigation\">\n\t\t<div class=\"col-lg-9\">\n\t\t\t<div class=\"clearfix\">\n\t\t\t\t<ul id=\"active-navigation\" class=\"nav border\">\n\t\t\t\t\t" + 
      compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<ul id=\"enabled\">\n\t\t\t\t" + 
      compiled.blocks['enabled'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"col-lg-3\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">[[admin/settings/navigation:available-menu-items]]</div>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<ul id=\"available\">\n\t\t\t\t\t\t<li data-id=\"custom\" class=\"clearfix\">\n\t\t\t\t\t\t\t<div data-id=\"custom\" class=\"drag-item alert alert-success float-start\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-plus-circle\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<strong>[[admin/settings/navigation:custom-route]]</strong>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t" + 
      compiled.blocks['available'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<li data-index=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['index'] : null)) + 
          "\" class=\"float-start nav-item " + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
          " " + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['selected'] : null) ?
            " active " :
            "") + 
          "\">\n\t\t\t\t\t\t<a href=\"#\" title=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
          "\" id=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
          "\" class=\"nav-link p-3 " + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['enabled'] : null) ?
            "" :
            "text-muted") + 
          "\">\n\t\t\t\t\t\t\t<i class=\"nav-icon fa fa-fw " + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
            __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) :
            "") + 
          "\"></i><i class=\"dropdown-icon fa fa-caret-down" + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'enabled': function enabled(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['enabled'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li data-index=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" class=\"card card-body text-bg-light border-0 " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['selected'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t<label class=\"form-label\">[[admin/settings/navigation:icon]]</label>\n\t\t\t\t\t\t\t\t<span class=\"iconPicker\"><i class=\"fa fa-2x " + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null)) + 
          "\"></i>\n\t\t\t\t\t\t\t\t\t<a class=\"change-icon-link " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null) ?
            "hidden" :
            "") + 
          "\" href=\"#\">[[admin/settings/navigation:change-icon]]</a>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"hidden\" name=\"iconClass\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null)) + 
          "\" />\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:route\">[[admin/settings/navigation:route]]</label>\n\t\t\t\t\t\t\t\t<input id=\"nav:route\" class=\"form-control\" type=\"text\" name=\"route\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['route'] : null)) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:class\">[[admin/settings/navigation:class]]</label>\n\t\t\t\t\t\t\t\t<input id=\"nav:class\" class=\"form-control\" type=\"text\" name=\"class\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['class'] : null)) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:id\">[[admin/settings/navigation:id]]</label>\n\t\t\t\t\t\t\t\t<input id=\"nav:id\" class=\"form-control\" type=\"text\" name=\"id\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['id'] : null)) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:text\">[[admin/settings/navigation:text]]</label>\n\t\t\t\t\t\t\t\t<input id=\"nav:text\" class=\"form-control unescape\" type=\"text\" name=\"text\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['text'] : null)) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:text-class\">[[admin/settings/navigation:text-class]]</label>\n\t\t\t\t\t\t\t\t<input id=\"nav:text-class\" class=\"form-control\" type=\"text\" name=\"textClass\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['textClass'] : null)) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:tooltip\">[[admin/settings/navigation:tooltip]]</label>\n\t\t\t\t\t\t\t\t<input id=\"nav:tooltip\" class=\"form-control unescape\" type=\"text\" name=\"title\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['title'] : null)) + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<label class=\"form-label\">[[admin/settings/navigation:groups]]</label>\n\n\t\t\t\t\t\t\t\t<select name=\"groups\" class=\"form-select\" size=\"10\" multiple>\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['groups'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['displayName'] : null)) + 
              "\"" + 
              (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['selected'] : null) ?
                " selected" :
                "") + 
              ">" + 
              __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['displayName'] : null)) + 
              "</option>\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"targetBlank-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" name=\"targetBlank\" " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['targetBlank'] : null) ?
            "checked" :
            "") + 
          "/>\n\t\t\t\t\t\t\t<label for=\"targetBlank-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" class=\"form-check-label\">[[admin/settings/navigation:open-new-window]]</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"dropdown-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" name=\"dropdown\" " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['dropdown'] : null) ?
            "checked" :
            "") + 
          "/>\n\t\t\t\t\t\t\t<label for=\"dropdown-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" class=\"form-check-label\">[[admin/settings/navigation:dropdown]]</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t\t[[admin/settings/navigation:dropdown-placeholder]]\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<textarea name=\"dropdownContent\" rows=\"5\" class=\"form-control\">" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['dropdownContent'] : null)) + 
          "</textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-end\">\n\n\t\t\t\t\t\t\t\t<button class=\"btn btn-light btn-sm toggle disable " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['enabled'] : null) ?
            "" :
            "hidden") + 
          "\"><i class=\"fa fa-ban text-danger\"></i> [[admin/settings/navigation:btn.disable]]</button>\n\n\t\t\t\t\t\t\t\t<button class=\"btn btn-light btn-sm toggle enable " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['enabled'] : null) ?
            "hidden" :
            "") + 
          "\"><i class=\"fa fa-check text-success\"></i> [[admin/settings/navigation:btn.enable]]</button>\n\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm delete\">[[admin/settings/navigation:btn.delete]]</button>\n\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"enabled\" value=\"" + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['enabled'] : null) ?
            "on" :
            "") + 
          "\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'available': function available(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['available'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<li data-id=\"" + 
          __escape(index) + 
          "\" class=\"clearfix\">\n\t\t\t\t\t\t\t<div data-id=\"" + 
          __escape(index) + 
          "\" class=\"drag-item alert " + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['core'] : null) ?
            "alert-warning" :
            "alert-info") + 
          " float-start\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-fw " + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['iconClass'] : null) ?
            __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['iconClass'] : null)) :
            "fa-navicon") + 
          "\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<strong>" + 
          __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['text'] : null)) + 
          "</strong> " + 
          __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['route'] : null)) + 
          " <br/>\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['core'] : null) ?
            " [[admin/settings/navigation:core]] " :
            " [[admin/settings/navigation:plugin]] ") + 
          "\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
