
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
    return "<div class=\"card mb-3\">\n\t<div class=\"card-header\">\n\t\t<div class=\"fs-5\">\n\t\t\t<i class=\"fa fa-clock-o\"></i> [[groups:details.pending]]\n\t\t\t" + 
      (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
        "\n\t\t\t<div class=\"btn-group float-end\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t\t[[global:more]] <span class=\"caret\"></span>\n\t\t\t\t</button>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t<li><a class=\"dropdown-item\" href=\"#\" data-ajaxify=\"false\" data-action=\"acceptAll\">[[groups:pending.accept-all]]</a></li>\n\t\t\t\t\t<li><a class=\"dropdown-item\" href=\"#\" data-ajaxify=\"false\" data-action=\"rejectAll\">[[groups:pending.reject-all]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n\t<div class=\"card-body\">\n\t\t<table component=\"groups/pending\" class=\"table table-striped table-hover\">\n\t\t\t" + 
      (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
        "" :
        "\n\t\t\t<div class=\"alert alert-info\">[[groups:pending.none]]</div>\n\t\t\t") + 
      "\n\t\t\t" + 
      compiled.blocks['group.pending'](helpers, context, guard, iter, helper) + 
      "\n\t\t</table>\n\t</div>\n</div>\n<div class=\"card mb-3\">\n\t<div class=\"card-header\">\n\t\t<span class=\"fs-5\">\n\t\t\t<i class=\"fa fa-gift\"></i> [[groups:details.invited]]\n\t\t</span>\n\t</div>\n\t<div class=\"card-body\">\n\t\t<div class=\"input-group mb-2\">\n\t\t\t<input class=\"form-control\" type=\"text\" component=\"groups/members/invite\" placeholder=\"[[groups:invited.search]]\"/>\n\t\t\t<span class=\"input-group-text search-button\"><i class=\"fa fa-search\"></i></span>\n\t\t</div>\n\n\t\t<div class=\"mb-2\">\n\t\t\t<textarea class=\"form-control\" component=\"groups/members/bulk-invite\" placeholder=\"[[groups:bulk-invite-instructions]]\"></textarea>\n\t\t</div>\n\n\t\t<div class=\"mb-2 clearfix\">\n\t\t\t<button class=\"btn btn-outline-secondary btn-sm float-end\" component=\"groups/members/bulk-invite-button\">[[groups:bulk-invite]]</button>\n\t\t</div>\n\n\t\t<table component=\"groups/invited\" class=\"table table-striped table-hover\">\n\t\t\t" + 
      (guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null) ?
        "" :
        "\n\t\t\t<div class=\"alert alert-info\">[[groups:invited.none]]</div>\n\t\t\t") + 
      "\n\t\t\t" + 
      compiled.blocks['group.invited'](helpers, context, guard, iter, helper) + 
      "\n\t\t</table>\n\t</div>\n</div>\n\n<div class=\"card mb-3\">\n\t<div class=\"card-header pointer\" data-bs-toggle=\"collapse\" data-bs-target=\".options\">\n\t\t<span class=\"fs-5\">\n\t\t\t<i class=\"fa fa-caret-down float-end\"></i>\n\t\t\t<i class=\"fa fa-cogs\"></i> [[groups:details.owner-options]]\n\t\t</span>\n\t</div>\n\n\t<div class=\"card-body options collapse\">\n\t\t<form component=\"groups/settings\" role=\"form\">\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<label class=\"form-label\" for=\"name\">[[groups:details.group-name]]</label>\n\t\t\t\t<input " + 
      (guard((context != null && context['group'] != null) ? context['group']['system'] : null) ?
        "readonly" :
        "") + 
      " class=\"form-control\" name=\"name\" id=\"name\" type=\"text\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "\" />\n\t\t\t</div>\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<label class=\"form-label\" for=\"name\">[[groups:details.description]]</label>\n\t\t\t\t<textarea class=\"form-control\" name=\"description\" id=\"description\" type=\"text\" maxlength=\"255\">" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['description'] : null)) + 
      "</textarea>\n\t\t\t</div>\n\n\t\t\t<hr />\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<label class=\"form-label\" for=\"memberPostCids\">[[groups:details.member-post-cids]]</label>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<input id=\"memberPostCids\" type=\"text\" class=\"form-control\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['memberPostCids'] : null)) + 
      "\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 member-post-cids-selector\">\n\t\t\t\t\t\t<div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\n\t<button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">\n        " + 
      ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
        "\n        <span class=\"category-item\">\n            " + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
          "\n            " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "\n        </span>\n        " :
        "\n    <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread-tools.select-category]]") + 
          "</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw " + 
          (guard((context != null) ? context['selectCategoryIcon'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
            "fa-list") + 
          "\"></i></span>\n    ") + 
      "</span> <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n    <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n        <a class=\"dropdown-item\" role=\"menu-item\">[[search:no-matches]]</a>\n    </li>\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr />\n\n\t\t\t<div class=\"mb-3 user-title-option\">\n\t\t\t\t<label class=\"form-label\" for=\"userTitle\">[[groups:details.badge-text]]</label>\n\t\t\t\t<input component=\"groups/userTitleOption\" class=\"form-control\" name=\"userTitle\" id=\"userTitle\" type=\"text\" maxlength=\"40\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['userTitleEscaped'] : null)) + 
      "\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        "" :
        " disabled") + 
      " />\n\t\t\t</div>\n\n\t\t\t<div class=\"mb-3 user-title-option\">\n\t\t\t\t<label>[[groups:details.badge-preview]]</label><br />\n\t\t\t\t<span class=\"badge rounded-1 text-uppercase text-truncate rounded-1 " + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        "" :
        " hide") + 
      "\" style=\"max-width:150px; color: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) + 
      "; background-color: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) + 
      "\"><i class=\"fa" + 
      (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
        " " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) + 
          (guard((context != null) ? context['userTitle'] : null) ?
            "me-1" :
            "") :
        "") + 
      "\"></i><span class=\"badge-text\">" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null)) :
        "") + 
      "</span></span>\n\n\t\t\t\t<hr/>\n\t\t\t\t<button component=\"groups/userTitleOption\" type=\"button\" class=\"btn btn-outline-secondary btn-sm\" data-action=\"icon-select\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        "" :
        " disabled") + 
      ">[[groups:details.change-icon]]</button>\n\t\t\t\t<div>\n\t\t\t\t\t<label class=\"form-label\" for=\"labelColor\" class=\"badge-color-label\">[[groups:details.change-label-colour]]</label>\n\t\t\t\t\t<input component=\"groups/userTitleOption\" type=\"color\" name=\"labelColor\" value=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) :
        "") + 
      "\" />\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<label class=\"form-label\" for=\"color\" class=\"badge-color-label\">[[groups:details.change-text-colour]]</label>\n\t\t\t\t\t<input component=\"groups/userTitleOption\" type=\"color\" name=\"textColor\" value=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['textColor'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) :
        "") + 
      "\" />\n\t\t\t\t</div>\n\t\t\t\t<input type=\"hidden\" name=\"icon\" value=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
        "") + 
      "\" />\n\n\t\t\t\t<div id=\"icons\" class=\"hidden\">\n\t\t\t\t\t<div class=\"icon-container\">\n\t\t\t\t\t\t<div class=\"row nbb-fa-icons\">\n\t\t\t\t\t\t\t<div class=\"icon-container\">\n\t<div class=\"form-group\">\n\t\t<label class=\"form-label\" for=\"fa-filter\">Type to search for icons</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\n\t</div>\n\t<div class=\"d-flex nbb-fa-icons flex-wrap\">\n\t\t" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\t<p class=\"form-text text-center\">\n\t\tFor a full list of icons, please consult:\n\t\t<a href=\"https://fontawesome.com/v6/icons/\">FontAwesome</a>\n\t</p>\n</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr />\n\t\t\t<div class=\"form-check\">\n\t\t\t\t<label class=\"form-check-label\">[[groups:details.userTitleEnabled]]</label>\n\t\t\t\t<input class=\"form-check-input\" name=\"userTitleEnabled\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        " checked" :
        "") + 
      ">\n\t\t\t</div>\n\t\t\t<div class=\"form-check\">\n\t\t\t\t<label class=\"form-check-label\">[[groups:details.private]]</label>\n\t\t\t\t<input class=\"form-check-input\" name=\"private\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
        " checked" :
        "") + 
      ">\n\t\t\t\t" + 
      (guard((context != null) ? context['allowPrivateGroups'] : null) ?
        "" :
        "\n\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t[[groups:details.private-system-help]]\n\t\t\t\t</p>\n\t\t\t\t") + 
      "\n\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t[[groups:details.private-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"form-check\">\n\t\t\t\t<label class=\"form-check-label\">[[groups:details.disableJoinRequests]]</label>\n\t\t\t\t<input class=\"form-check-input\" name=\"disableJoinRequests\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['disableJoinRequests'] : null) ?
        " checked" :
        "") + 
      ">\n\t\t\t</div>\n\t\t\t<div class=\"form-check\">\n\t\t\t\t<label class=\"form-check-label\">[[groups:details.disableLeave]]</label>\n\t\t\t\t<input class=\"form-check-input\" name=\"disableLeave\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['disableLeave'] : null) ?
        " checked" :
        "") + 
      ">\n\t\t\t</div>\n\t\t\t<div class=\"form-check\">\n\t\t\t\t<label class=\"form-check-label\">[[groups:details.hidden]]</label>\n\t\t\t\t<input class=\"form-check-input\" name=\"hidden\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
        " checked" :
        "") + 
      ">\n\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t[[groups:details.hidden-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<button class=\"btn btn-link text-danger float-end\" type=\"button\" data-action=\"delete\">[[groups:details.delete-group]]</button>\n\t\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"update\">[[global:save-changes]]</button>\n\t\t</form>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'group.pending': function grouppending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['pending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['uid'] : null)) + 
          "\">\n\t\t\t\t<td class=\"p-2\">\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"member-name p-2\">\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"p-2\">\n\t\t\t\t\t<div class=\"btn-group float-end\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t[[global:more]] <span class=\"caret\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t\t\t<li><a class=\"dropdown-item\" href=\"#\" data-ajaxify=\"false\" data-action=\"accept\">[[groups:pending.accept]]</a></li>\n\t\t\t\t\t\t\t<li><a class=\"dropdown-item\" href=\"#\" data-ajaxify=\"false\" data-action=\"reject\">[[groups:pending.reject]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'group.invited': function groupinvited(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['invited'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['uid'] : null)) + 
          "\">\n\t\t\t\t<td class=\"p-2\">\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"member-name p-2\">\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"p-2\">\n\t\t\t\t\t<div class=\"btn-group float-end\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t[[global:more]] <span class=\"caret\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t\t\t<li><a class=\"dropdown-item\" href=\"#\" data-ajaxify=\"false\" data-action=\"rescindInvite\">[[groups:invited.uninvite]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n        <a class=\"dropdown-item " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" role=\"menu-item\" href=\"#\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n            <span component=\"category-markup\" style=\"" + 
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
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<i class=\"fa fa-xl fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['style'] : null)) + 
          " fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['id'] : null)) + 
          " rounded-1\"></i>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
