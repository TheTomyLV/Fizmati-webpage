
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
    return "<div class=\"row dashboard px-lg-4\">\n\t<div class=\"col-lg-8 col-xl-9\">\n\t\t<div class=\"card mb-3\" id=\"analytics-panel\">\n\t<div class=\"card-header\">\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t[[admin/dashboard:forum-traffic]]\n\n\t\t\t<div class=\"d-flex gap-1\">\n\t\t\t\t<a class=\"btn btn-sm btn-light lh-sm\" target=\"_blank\" id=\"view-as-json\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/v3/admin/analytics/" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "?type=hourly\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"[[admin/dashboard:view-as-json]]\"><i class=\"fa fa-fw fa-xs fa-terminal text-primary\"></i></a>\n\t\t\t\t<a class=\"btn btn-sm btn-light lh-sm\" id=\"expand-analytics\" href=\"#\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"[[admin/dashboard:expand-analytics]]\"><i class=\"fa fa-fw fa-xs fa-expand text-primary\"></i></a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"card-body\">\n\t\t<div class=\"graph-container position-relative\" id=\"analytics-traffic-container\" style=\"aspect-ratio: 2;\">\n\t\t\t<canvas id=\"analytics-traffic\" ></canvas>\n\t\t</div>\n\t\t<hr/>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n\t\t\t\t<div><strong id=\"pageViewsThirty\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['month'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['month'] : null)) :
        "0") + 
      "</strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"30\">[[admin/dashboard:page-views-thirty]]</a></div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\n\t\t\t\t<div><strong id=\"pageViewsSeven\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['week'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['week'] : null)) :
        "0") + 
      "</strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"7\">[[admin/dashboard:page-views-seven]]</a></div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n\t\t\t\t<div><strong id=\"pageViewsPastDay\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['day'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['day'] : null)) :
        "0") + 
      "</strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"hours\" data-amount=\"24\">[[admin/dashboard:page-views-last-day]]</a></div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\n\t\t\t\t<div><strong><i class=\"fa fa-clock-o\"></i></strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"custom\">[[admin/dashboard:page-views-custom]]</a></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\t\t<div class=\"table-responsive mb-3\">\n\t<table class=\"table text-sm\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.yesterday]]</th>\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.today]]</th>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.last-week]]</th>\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.this-week]]</th>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.last-month]]</th>\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.this-month]]</th>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.all]]</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t" + 
      compiled.blocks['stats'](helpers, context, guard, iter, helper) + 
      "\n\t\t</tbody>\n\t</table>\n</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">[[admin/dashboard:guest-registered-users]]</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"graph-container pie-chart legend-down position-relative mb-3 px-3 mx-auto\" style=\"aspect-ratio: 1;\">\n\t\t\t\t\t\t\t<canvas id=\"analytics-registered\"></canvas>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"graph-legend list-unstyled\" id=\"analytics-legend\">\n\t\t\t\t\t\t\t<li><div class=\"registered\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:registered]]</span></li>\n\t\t\t\t\t\t\t<li><div class=\"guest\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:guest]]</span></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">[[admin/dashboard:user-presence]]</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"graph-container pie-chart legend-down position-relative mb-3 px-3 mx-auto\" style=\"aspect-ratio: 1;\">\n\t\t\t\t\t\t\t<canvas id=\"analytics-presence\"></canvas>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"graph-legend list-unstyled\" id=\"analytics-presence-legend\">\n\t\t\t\t\t\t\t<li><div class=\"reading-posts\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:reading-posts]]</span></li>\n\t\t\t\t\t\t\t<li><div class=\"on-categories\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:on-categories]]</span></li>\n\t\t\t\t\t\t\t<li><div class=\"browsing-topics\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:browsing-topics]]</span></li>\n\t\t\t\t\t\t\t<li><div class=\"recent\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:recent]]</span></li>\n\t\t\t\t\t\t\t<li><div class=\"unread\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:unread]]</span></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">[[admin/dashboard:high-presence-topics]]</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"graph-container pie-chart legend-down position-relative mb-3 px-3 mx-auto\" style=\"aspect-ratio: 1;\">\n\t\t\t\t\t\t\t<canvas id=\"analytics-topics\"></canvas>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"graph-legend list-unstyled\" id=\"topics-legend\"></ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-lg-4 col-xl-3\">\n\t\t<div class=\"card mb-3\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"text-sm shadow-sm alert " + 
      (guard((context != null) ? context['lookupFailed'] : null) ?
        "alert-danger" :
        (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "alert-warning" :
            (guard((context != null) ? context['currentPrerelease'] : null) ?
                "alert-info" :
                "alert-success"))) + 
      " version-check\">\n\t\t\t\t\t<p class=\"\">[[admin/dashboard:running-version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</p>\n\t\t\t\t\t<p class=\"mb-0\">\n\t\t\t\t\t" + 
      (guard((context != null) ? context['lookupFailed'] : null) ?
        "\n\t\t\t\t\t[[admin/dashboard:latest-lookup-failed]]\n\t\t\t\t\t" :
        "\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "\n\t\t\t\t\t\t\t" + 
              (guard((context != null) ? context['currentPrerelease'] : null) ?
                "\n\t\t\t\t\t\t\t[[admin/dashboard:prerelease-upgrade-available, " + 
                  __escape(guard((context != null) ? context['latestVersion'] : null)) + 
                  "]]\n\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t[[admin/dashboard:upgrade-available, " + 
                  __escape(guard((context != null) ? context['latestVersion'] : null)) + 
                  "]]\n\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t" + 
              (guard((context != null) ? context['currentPrerelease'] : null) ?
                "\n\t\t\t\t\t\t\t[[admin/dashboard:prerelease-warning]]\n\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t[[admin/dashboard:up-to-date]]\n\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t[[admin/dashboard:keep-updated]]\n\t\t\t\t</p>\n\t\t\t\t<hr/>\n\t\t\t\t" + 
      (guard((context != null) ? context['showSystemControls'] : null) ?
        "\n\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/settings/advanced\" class=\"d-block mb-2 btn btn-info btn-sm\" data-bs-placement=\"bottom\" data-bs-toggle=\"tooltip\" title=\"[[admin/dashboard:maintenance-mode-title]]\">[[admin/dashboard:maintenance-mode]]</a>\n\n\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t<label for=\"toggle-realtime\" class=\"form-check-label text-sm\">[[admin/dashboard:realtime-chart-updates]]</label>\n\t\t\t\t\t<input id=\"toggle-realtime\" class=\"form-check-input\" type=\"checkbox\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t<label for=\"toggle-dark-mode\" class=\"form-check-label text-sm\">[[admin/dashboard:dark-mode]]</label>\n\t\t\t\t\t<input id=\"toggle-dark-mode\" class=\"form-check-input\" type=\"checkbox\">\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t<hr/>\n\t\t\t\t<h6>[[admin/dashboard:notices]]</h6>\n\t\t\t\t" + 
      compiled.blocks['notices'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card mb-3\">\n\t\t\t<div class=\"card-header\">[[admin/dashboard:active-users]]</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div id=\"active-users\" class=\"stats row row-cols-2 row-cols-md-1 row-cols-lg-2\"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">[[admin/dashboard:popular-searches]]</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<ul class=\"list-unstyled text-sm\">\n\t\t\t\t\t" + 
      compiled.blocks['popularSearches'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'stats': function stats(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['stats'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t" + 
          (guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null) ?
            "\n\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "</a>\n\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t</strong>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['yesterday'] : null)])) + 
          "</td>\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['today'] : null)])) + 
          "</td>\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayIncrease'] : null)) + 
          "%</small></td>\n\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastweek'] : null)])) + 
          "</td>\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thisweek'] : null)])) + 
          "</td>\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekIncrease'] : null)) + 
          "%</small></td>\n\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastmonth'] : null)])) + 
          "</td>\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thismonth'] : null)])) + 
          "</td>\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthIncrease'] : null)) + 
          "%</small></td>\n\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['alltime'] : null)])) + 
          "</td>\n\t\t\t</tr>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'notices': function notices(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notices'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<div class=\"text-sm\">\n\t\t\t\t\t" + 
          (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['done'] : null) ?
            "\n\t\t\t\t\t<i class=\"fa fa-fw fa-check text-success\"></i> " + 
              __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['doneText'] : null)) + 
              "\n\t\t\t\t\t" :
            "\n\t\t\t\t\t" + 
              (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null) ?
                "<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null)) + 
                  "\" data-bs-toggle=\"tooltip\" title=\"" + 
                  __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['tooltip'] : null)) + 
                  "\">" :
                "") + 
              "\n\t\t\t\t\t<i class=\"fa fa-fw fa-times text-danger\"></i> " + 
              __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['notDoneText'] : null)) + 
              "\n\t\t\t\t\t" + 
              (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null) ?
                "</a>" :
                "") + 
              "\n\t\t\t\t\t") + 
          "\n\t\t\t\t</div>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'popularSearches': function popularSearches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['popularSearches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<li>(" + 
          __escape(guard((context != null && context['popularSearches'] != null && context['popularSearches'][key0] != null) ? context['popularSearches'][key0]['score'] : null)) + 
          ") " + 
          __escape(guard((context != null && context['popularSearches'] != null && context['popularSearches'][key0] != null) ? context['popularSearches'][key0]['value'] : null)) + 
          "</li>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
