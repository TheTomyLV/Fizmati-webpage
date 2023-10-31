
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
    return "<div class=\"admins-mods acp-page-container px-lg-4\">\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/admins-mods:manage-admins-and-mods]]</h4>\n\t\t</div>\n\t</div>\n\n\t<div>\n\t\t<div class=\"d-flex gap-2 justify-content-between align-items-center mb-2 flex-wrap\">\n\t\t\t<h4 class=\"mb-0\">[[admin/manage/admins-mods:administrators]]</h4>\n\t\t\t<input id=\"admin-search\" class=\"form-control form-control-sm w-auto\" placeholder=\"[[admin/manage/admins-mods:add-administrator]]\" />\n\t\t</div>\n\t\t<div class=\"administrator-area d-flex flex-wrap\">\n\t\t" + 
      compiled.blocks['admins.members'](helpers, context, guard, iter, helper) + 
      "\n\t\t</div>\n\t</div>\n\n\t<hr/>\n\n\t<div>\n\t\t<div class=\"d-flex gap-2 justify-content-between align-items-center mb-2 flex-wrap\">\n\t\t\t<h4 class=\"mb-0\">[[admin/manage/admins-mods:global-moderators]]</h4>\n\t\t\t<input id=\"global-mod-search\" class=\"form-control form-control-sm w-auto\" placeholder=\"[[admin/manage/admins-mods:add-global-moderator]]\" />\n\t\t</div>\n\t\t<div class=\"global-moderator-area mb-2 d-flex flex-wrap\">\n\t\t" + 
      compiled.blocks['globalMods.members'](helpers, context, guard, iter, helper) + 
      "\n\t\t</div>\n\n\t\t<div id=\"no-global-mods-warning\" class=\"text-sm text-muted mb-0 " + 
      (guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null) ? context['globalMods']['members']['length'] : null) ?
        "hidden" :
        "") + 
      "\">[[admin/manage/admins-mods:no-global-moderators]]</div>\n\t</div>\n\n\t<hr/>\n\n\t<div>\n\t\t<div class=\"d-flex gap-2 align-items-center\">\n\t\t\t<h4 class=\"mb-0\" id=\"moderators-title\">[[admin/manage/admins-mods:moderators]]</h4>\n\t\t\t<div class=\"\">\n\t\t\t\t<div component=\"category-selector\" class=\"btn-group dropdown-left bottom-sheet\">\n<button type=\"button\" class=\"btn-ghost-sm dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t<span component=\"category-selector-selected\">\n\t\t<span class=\"category-item d-inline-flex align-items-center gap-1\">\n\t\t" + 
      ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
        "\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
          "\n\t\t\t" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "\n\t\t" :
        "\n\t\t<i class=\"fa fa-fw " + 
          (guard((context != null) ? context['selectCategoryIcon'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
            "fa-list") + 
          "\"></i>\n\t\t" + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread-tools.select-category]]") + 
          "\n\t\t") + 
      "\n\t\t</span>\n\t</span> <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n\t<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu p-1\" role=\"menu\">\n\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n\t\t<a class=\"dropdown-item rounded-1\" role=\"menu-item\">[[search:no-matches]]</a>\n\t</li>\n\t" + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"mb-2\">\n\t\t" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb mb-0\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\t\t</div>\n\t\t" + 
      (guard((context != null && context['categoryMods'] != null) ? context['categoryMods']['length'] : null) ?
        "" :
        "\n\t\t<p class=\"alert alert-info\">[[admin/manage/admins-mods:no-sub-categories]]</p>\n\t\t") + 
      "\n\n\t\t" + 
      compiled.blocks['categoryMods'](helpers, context, guard, iter, helper) + 
      "\n\t\t<div>\n\t\t\t<div component=\"pagination\" class=\"pagination-container mt-3" + 
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
      "\n</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'admins.members': function adminsmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['admins'] != null) ? context['admins']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<div class=\"badge text-bg-light m-1 p-1 border d-inline-flex gap-1 align-items-center\" data-uid=\"" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['uid'] : null)) + 
          "\">\n\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['admins'] != null && context['admins']['members'] != null) ? context['admins']['members'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t<button class=\"btn-ghost-sm p-0 remove-user-icon\">\n\t\t\t\t\t<i class=\"fa fa-fw fa-times\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'globalMods.members': function globalModsmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['globalMods'] != null) ? context['globalMods']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<div class=\"badge text-bg-light m-1 p-1 border d-inline-flex gap-1 align-items-center\" data-uid=\"" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['uid'] : null)) + 
          "\">\n\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null) ? context['globalMods']['members'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t<button class=\"btn-ghost-sm p-0 remove-user-icon\">\n\t\t\t\t\t<i class=\"fa fa-fw fa-times\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1\" role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n\t\t\t<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\n\t\t\t\t<div class=\"category-item d-inline-flex align-items-center gap-1\">\n\t\t\t\t\t" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\n\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\n\t\t\t\t</div>\n\t\t\t</span>\n\t\t</a>\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    },
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
          "\n\t\t\t<span class=\"fw-semibold\" itemprop=\"name\">" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "</span>\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    },
    'categoryMods': function categoryMods(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryMods'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t" + 
          (index === 0 ?
            "\n\t\t<hr>\n\t\t" :
            "") + 
          "\n\t\t<div class=\"categories category-wrapper mb-4\">\n\t\t\t<div class=\"d-flex gap-2 justify-content-between flex-column flex-md-row align-items-start align-items-md-center mb-2 flex-wrap\">\n\t\t\t\t<div class=\"d-flex flex-column flex-md-row gap-2 align-items-md-center\">\n\t\t\t\t\t<div class=\"d-flex gap-1 align-items-center\">\n\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "28px", "rounded-1"])) + 
          "\n\t\t\t\t\t\t<h5 class=\"mb-0\">" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['name'] : null)) + 
          "</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t" + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['subCategoryCount'] : null) ?
            "\n\t\t\t\t\t<a class=\"btn btn-light btn-sm\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/admin/manage/admins-mods?cid=" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
              "#moderators-title\">[[admin/manage/admins-mods:view-children, " + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['subCategoryCount'] : null)) + 
              "]]</a>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['disabled'] : null) ?
            "<span class=\"badge text-bg-warning\">[[admin/manage/admins-mods:disabled]]</span>" :
            "") + 
          "\n\t\t\t\t</div>\n\t\t\t\t<input data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\" class=\"form-control form-control-sm moderator-search w-auto\" placeholder=\"[[admin/manage/admins-mods:add-moderator]]\" />\n\t\t\t</div>\n\n\n\n\t\t\t<div class=\"moderator-area d-flex flex-wrap\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\">\n\t\t\t\t" + 
          iter(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['moderators'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t<div class=\"badge text-bg-light m-1 p-1 border d-inline-flex gap-1 align-items-center\" data-uid=\"" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['uid'] : null)) + 
              "\">\n\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null) ? context['categoryMods'][key0]['moderators'][key1] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "\n\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['username'] : null)) + 
              "</a>\n\t\t\t\t\t<button class=\"btn-ghost-sm p-0 remove-user-icon\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-times\" role=\"button\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t</div>\n\n\t\t\t<div data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\" class=\"no-moderator-warning text-sm text-muted " + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null) ? context['categoryMods'][key0]['moderators']['length'] : null) ?
            "hidden" :
            "") + 
          "\">[[admin/manage/admins-mods:no-moderators]]</div>\n\n\t\t</div>\n\t\t<hr >\n\t\t";
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
