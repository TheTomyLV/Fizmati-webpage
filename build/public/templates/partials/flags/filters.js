
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
    return "<div class=\"text-center\">\n\t<div class=\"card mb-3\">\n\t\t<div class=\"card-body collapse\" id=\"flags-daily-wrapper\" aria-expanded=\"false\">\n\t\t\t<div class=\"position-relative\" style=\"aspect-ratio: 2; max-height: initial;\">\n\t\t\t\t<canvas id=\"flags:daily\" style=\"max-height: initial;\"></canvas>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card-footer\" data-bs-toggle=\"collapse\" data-bs-target=\"#flags-daily-wrapper\" aria-controls=\"#flags-daily-wrapper\"><small>[[flags:graph-label]]</small>&nbsp;<i class=\"fa fa-sort\"></i></div>\n\t</div>\n</div>\n\n<div class=\"card mb-3\">\n\t<div class=\"card-header\">\n\t\t[[flags:quick-filters]]\n\t</div>\n\t<div class=\"card-body\">\n\t\t<ul>\n\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/flags?quick=mine\">[[flags:filter-quick-mine]]</a></li>\n\t\t</ul>\n\t</div>\n</div>\n\n<div class=\"card mb-3\">\n\t<div class=\"card-header\">\n\t\t[[flags:filters]]\n\t</div>\n\t<div class=\"card-body\">\n\t\t<form role=\"form\" component=\"flags/filters\">\n\t\t\t<fieldset>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"filter-cid\">[[flags:filter-cid]]</label>\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<div component=\"category/dropdown\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\n\t<button type=\"button\" class=\"btn btn-outline-secondary d-flex gap-2 align-items-baseline dropdown-toggle\" data-bs-toggle=\"dropdown\">\n    " + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "\n    <span class=\"category-item\">\n        " + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "20px", "rounded-circle"])) + 
          "\n        <span class=\"visible-md-inline visible-lg-inline\">" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "</span>\n    </span>\n    " :
        "\n    <i class=\"fa fa-fw fa-list\"></i>\n    <span class=\"visible-md-inline visible-lg-inline\">[[unread:all-categories]]</span>") + 
      "\n</button>\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n    <li role=\"presentation\" class=\"category\" data-cid=\"all\">\n        <a class=\"dropdown-item\" role=\"menu-item\" href=\"" + 
      (guard((context != null) ? context['allCategoriesUrl'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) :
        "#") + 
      "\"><i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "invisible" :
        "") + 
      "\"></i> [[unread:all-categories]]</a>\n    </li>\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"sort\">[[flags:sort]]</label>\n\t\t\t\t\t<select class=\"form-control\" id=\"sort\" name=\"sort\">\n\t\t\t\t\t\t<optgroup label=\"[[flags:sort-all]]\">\n\t\t\t\t\t\t\t<option value=\"newest\">[[flags:sort-newest]]</option>\n\t\t\t\t\t\t\t<option value=\"oldest\">[[flags:sort-oldest]]</option>\n\t\t\t\t\t\t\t<option value=\"reports\">[[flags:sort-reports]]</option>\n\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t<optgroup label=\"[[flags:sort-posts-only]]\">\n\t\t\t\t\t\t\t<option value=\"downvotes\">[[flags:sort-downvotes]]</option>\n\t\t\t\t\t\t\t<option value=\"upvotes\">[[flags:sort-upvotes]]</option>\n\t\t\t\t\t\t\t<option value=\"replies\">[[flags:sort-replies]]</option>\n\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"filter-state\">[[flags:filter-state]]</label>\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-state\" name=\"state\">\n\t\t\t\t\t\t<option value=\"\">[[flags:state-all]]</option>\n\t\t\t\t\t\t<option value=\"open\">[[flags:state-open]]</option>\n\t\t\t\t\t\t<option value=\"wip\">[[flags:state-wip]]</option>\n\t\t\t\t\t\t<option value=\"resolved\">[[flags:state-resolved]]</option>\n\t\t\t\t\t\t<option value=\"rejected\">[[flags:state-rejected]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"filter-type\">[[flags:filter-type]]</label>\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-type\" name=\"type\">\n\t\t\t\t\t\t<option value=\"\">[[flags:filter-type-all]]</option>\n\t\t\t\t\t\t<option value=\"post\">[[flags:filter-type-post]]</option>\n\t\t\t\t\t\t<option value=\"user\">[[flags:filter-type-user]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</fieldset>\n\n\t\t\t<fieldset class=\"collapse" + 
      (guard((context != null) ? context['expanded'] : null) ?
        " show" :
        "") + 
      "\" id=\"more-filters\" aria-expanded=\"" + 
      __escape(guard((context != null) ? context['expanded'] : null)) + 
      "\">\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"filter-assignee\">[[flags:filter-assignee]]</label>\n\t\t\t\t\t<div component=\"flags/filter/assignee\" class=\"dropdown\" data-filter-name=\"assignee\">\n\t\t\t\t\t\t<a component=\"user/filter/button\" class=\"filter-btn btn btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['assignee'] : null) ?
        "btn-primary" :
        "btn-light") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<span class=\"filter-label\">[[flags:filter-assignee]]</span>\n\t\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" style=\"width: 350px;\">\n\t\t\t\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n\t\t\t\t\t\t\t\t<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t\t\t\t" + 
      compiled.blocks['selected.assignee'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t\t\t\t" + 
      compiled.blocks['userFilterResults'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"filter-targetUid\">[[flags:filter-targetUid]]</label>\n\t\t\t\t\t<div component=\"flags/filter/targetUid\" class=\"dropdown\" data-filter-name=\"targetUid\">\n\t\t\t\t\t\t<a component=\"user/filter/button\" class=\"filter-btn btn btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['targetUid'] : null) ?
        "btn-primary" :
        "btn-light") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<span class=\"filter-label\">[[flags:filter-targetUid]]</span>\n\t\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" style=\"width: 350px;\">\n\t\t\t\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n\t\t\t\t\t\t\t\t<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t\t\t\t" + 
      compiled.blocks['selected.targetUid'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"filter-reporterId\">[[flags:filter-reporterId]]</label>\n\t\t\t\t\t<div component=\"flags/filter/reporterId\" class=\"dropdown\" data-filter-name=\"reporterId\">\n\t\t\t\t\t\t<a component=\"user/filter/button\" class=\"filter-btn btn btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['reporterId'] : null) ?
        "btn-primary" :
        "btn-light") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<span class=\"filter-label\">[[flags:filter-reporterId]]</span>\n\t\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" style=\"width: 350px;\">\n\t\t\t\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n\t\t\t\t\t\t\t\t<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t\t\t\t" + 
      compiled.blocks['selected.reporterId'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</fieldset>\n\n\t\t\t<div class=\"d-grid gap-2\">\n\t\t\t\t" + 
      (guard((context != null) ? context['expanded'] : null) ?
        "\n\t\t\t\t<button type=\"button\" class=\"btn btn-link\" data-bs-toggle=\"collapse\" data-bs-target=\"#more-filters\" aria-controls=\"#more-filters\" data-text-variant=\"[[flags:more-filters]] \">[[flags:fewer-filters]]&nbsp;<i class=\"fa fa-sort\"></i></button>\n\t\t\t\t" :
        "\n\t\t\t\t<button type=\"button\" class=\"btn btn-link\" data-bs-toggle=\"collapse\" data-bs-target=\"#more-filters\" aria-controls=\"#more-filters\" data-text-variant=\"[[flags:fewer-filters]] \">[[flags:more-filters]]&nbsp;<i class=\"fa fa-sort\"></i></button>\n\t\t\t\t") + 
      "\n\t\t\t\t<button type=\"button\" id=\"apply-filters\" class=\"btn btn-primary\">[[flags:apply-filters]]</button>\n\t\t\t  </div>\n\t\t</form>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\n        <a class=\"dropdown-item\" role=\"menu-item\" href=\"#\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n            <span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\n                <div class=\"category-item d-inline-block\">\n                    " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\n                    " + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n                    " :
            "") + 
          "\n                    " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\n                </div>\n            </span>\n        </a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'selected.assignee': function selectedassignee(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['selected'] != null) ? context['selected']['assignee'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n\t\t\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['assignee'] != null && context['selected']['assignee'][key0] != null) ? context['selected']['assignee'][key0]['username'] : null)) + 
          "\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['assignee'] != null && context['selected']['assignee'][key0] != null) ? context['selected']['assignee'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'userFilterResults': function userFilterResults(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'selected.targetUid': function selectedtargetUid(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['selected'] != null) ? context['selected']['targetUid'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n\t\t\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['targetUid'] != null && context['selected']['targetUid'][key0] != null) ? context['selected']['targetUid'][key0]['username'] : null)) + 
          "\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['targetUid'] != null && context['selected']['targetUid'][key0] != null) ? context['selected']['targetUid'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'selected.reporterId': function selectedreporterId(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['selected'] != null) ? context['selected']['reporterId'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n\t\t\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['reporterId'] != null && context['selected']['reporterId'][key0] != null) ? context['selected']['reporterId'][key0]['username'] : null)) + 
          "\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['reporterId'] != null && context['selected']['reporterId'][key0] != null) ? context['selected']['reporterId'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
