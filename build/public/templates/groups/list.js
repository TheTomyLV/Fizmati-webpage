
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n<div data-widget-area=\"header\">\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"groups list\">\n\t<div class=\"row justify-content-between\">\n\t\t<div class=\"col-lg-6\">\n\t\t\t" + 
      (guard((context != null) ? context['allowGroupCreation'] : null) ?
        "\n\t\t\t<button class=\"btn btn-primary\" data-action=\"new\"><i class=\"fa fa-plus\"></i> [[groups:new-group]]</button>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t\t<div class=\"col-lg-6\">\n\t\t\t<div class=\"row justify-content-end\">\n\t\t\t\t<div class=\"col-5 col-md-6\">\n\t\t\t\t\t<select class=\"form-select\" id=\"search-sort\">\n\t\t\t\t\t\t<option value=\"alpha\">[[groups:details.group-name]]</option>\n\t\t\t\t\t\t<option value=\"count\">[[groups:details.member-count]]</option>\n\t\t\t\t\t\t<option value=\"date\">[[groups:details.creation-date]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-7 col-md-6\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\" id=\"search-text\">\n\t\t\t\t\t\t<button id=\"search-button\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<hr />\n\n\t<div component=\"groups/container\" class=\"row\" id=\"groups-list\" data-nextstart=" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      ">\n\t\t" + 
      (guard((context != null && context['groups'] != null) ? context['groups']['length'] : null) ?
        "\n\t\t\t" + 
          compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
          "\n\t\t" :
        "\n\t\t<div class=\"col-12\">\n\t\t\t<div class=\"alert alert-warning\">\n\t\t\t[[groups:no-groups-found]]\n\t\t\t</div>\n\t\t</div>\n\t\t") + 
      "\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" class=\"breadcrumb-item " + 
          (index === length - 1 ?
            "active" :
            "") + 
          "\">\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n\t\t\t<span itemprop=\"name\">\n\t\t\t\t" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\n\t\t\t\t" + 
          (index === length - 1 ?
            "\n\t\t\t\t" + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\n\t\t\t\t" + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</span>\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<div class=\"col-lg-4 col-md-6 col-sm-12 mb-3\" component=\"groups/summary\" data-slug=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\">\n\t\t<div class=\"card h-100\">\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\" class=\"card-header list-cover\" style=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null) ?
            "background-image: url(" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null)) + 
              ");background-size: cover;\tmin-height: 125px; background-position: " + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:position'] : null)) :
            "") + 
          "\">\n\t\t\t\t<h5 class=\"card-title\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          " <small>" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['memberCount'] : null)) + 
          "</small></h5>\n\t\t\t</a>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<ul class=\"members\">\n\t\t\t\t\t" + 
          iter(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['members'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null) ? context['groups'][key0]['members'][key1] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['truncated'] : null) ?
            "\n\t\t\t\t\t<li class=\"truncated\"><i class=\"fa fa-ellipsis-h\"></i></li>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
