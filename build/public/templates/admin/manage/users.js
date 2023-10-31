
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
    return "<div class=\"manage-users d-flex flex-column gap-2 px-lg-4 h-100\">\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/users:manage-users]]</h4>\n\t\t</div>\n\t\t<div class=\"d-flex align-items-center gap-3 flex-wrap\">\n\t\t\t<div class=\"d-flex gap-1 align-items-stretch flex-wrap\">\n\t\t\t\t<div class=\"input-group flex-nowrap w-auto\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-sm w-auto\" placeholder=\"[[global:search]]\" id=\"user-search\" value=\"" + 
      __escape(guard((context != null) ? context['query'] : null)) + 
      "\">\n\t\t\t\t\t<span class=\"input-group-text px-2 search-button\"><i class=\"fa fa-search\"></i></span>\n\t\t\t\t</div>\n\t\t\t\t<select id=\"user-search-by\" class=\"form-select form-select-sm w-auto\">\n\t\t\t\t\t<option value=\"username\" " + 
      (guard((context != null) ? context['searchBy_username'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.username]]</option>\n\t\t\t\t\t<option value=\"email\" " + 
      (guard((context != null) ? context['searchBy_email'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.email]]</option>\n\t\t\t\t\t<option value=\"uid\" " + 
      (guard((context != null) ? context['searchBy_uid'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.uid]]</option>\n\t\t\t\t\t<option value=\"ip\" " + 
      (guard((context != null) ? context['searchBy_ip'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.ip]]</option>\n\t\t\t\t</select>\n\t\t\t\t<select id=\"results-per-page\" class=\"form-select form-select-sm w-auto\">\n\t\t\t\t\t<option value=\"50\">[[admin/manage/users:50-per-page]]</option>\n\t\t\t\t\t<option value=\"100\">[[admin/manage/users:100-per-page]]</option>\n\t\t\t\t\t<option value=\"250\">[[admin/manage/users:250-per-page]]</option>\n\t\t\t\t\t<option value=\"500\">[[admin/manage/users:500-per-page]]</option>\n\t\t\t\t</select>\n\t\t\t\t<div class=\"btn-group\" id=\"filter-by\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t\t\t\t\t\t[[admin/manage/users:filter-by]] <span class=\"caret\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t\t<li data-filter-by=\"unverified\" role=\"presentation\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_unverified'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.unvalidated]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li data-filter-by=\"verified\" role=\"presentation\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_verified'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.validated]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li data-filter-by=\"banned\" role=\"presentation\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_banned'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.banned]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm dropdown-toggle\" id=\"action-dropdown\" data-bs-toggle=\"dropdown\" type=\"button\" disabled=\"disabled\">[[admin/manage/users:edit]] <span class=\"caret\"></span></button>\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\">\n\n\t\t\t\t\t\t<li><h6 class=\"dropdown-header\">[[admin/manage/users:email]]</h6></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 change-email\"><i class=\"text-secondary fa fa-fw fa-envelope text-start\"></i> [[admin/manage/users:change-email]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 validate-email\"><i class=\"text-secondary fa fa-fw fa-envelope-circle-check\"></i> [[admin/manage/users:validate-email]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 send-validation-email\"><i class=\"text-secondary fa fa-fw fa-mail-forward\"></i> [[admin/manage/users:send-validation-email]]</a></li>\n\n\t\t\t\t\t\t<li><hr class=\"dropdown-divider\"></li>\n\n\t\t\t\t\t\t<li><h6 class=\"dropdown-header\">[[admin/manage/users:password]]</h6></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 change-password\"><i class=\"text-secondary fa fa-fw fa-key\"></i> [[admin/manage/users:change-password]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 password-reset-email\"><i class=\"text-secondary fa fa-fw fa-envelope-open-text\"></i> [[admin/manage/users:password-reset-email]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 force-password-reset\"><i class=\"text-secondary fa fa-fw fa-user-lock\"></i> [[admin/manage/users:force-password-reset]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 reset-lockout\"><i class=\"text-secondary fa fa-fw fa-lock-open\"></i> [[admin/manage/users:reset-lockout]]</a></li>\n\n\t\t\t\t\t\t<li><hr class=\"dropdown-divider\"></li>\n\n\t\t\t\t\t\t<li><h6 class=\"dropdown-header\">[[admin/manage/users:manage]]</h6></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 manage-groups\"><i class=\"text-secondary fa fa-fw fa-users\"></i> [[admin/manage/users:manage-groups]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 set-reputation\"><i class=\"text-secondary fa fa-fw fa-star\"></i> [[admin/manage/users:set-reputation]]</a></li>\n\n\t\t\t\t\t\t<li><hr class=\"dropdown-divider\"></li>\n\n\t\t\t\t\t\t<li><h6 class=\"dropdown-header\">[[admin/manage/users:ban]]</h6></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 ban-user\"><i class=\"text-secondary fa fa-fw fa-gavel\"></i> [[admin/manage/users:ban-users]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 ban-user-temporary\"><i class=\"text-secondary fa fa-fw fa-clock-o\"></i> [[admin/manage/users:temp-ban]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 unban-user\"><i class=\"text-secondary fa fa-fw fa-comment-o\"></i> [[admin/manage/users:unban]]</a></li>\n\n\t\t\t\t\t\t<li><hr class=\"dropdown-divider\"></li>\n\n\t\t\t\t\t\t<li><h6 class=\"dropdown-header\">[[admin/manage/users:delete]]</h6></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 delete-user\"><i class=\"text-secondary fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete-users]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 delete-user-content\"><i class=\"text-secondary fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete-content]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 delete-user-and-content\"><i class=\"text-secondary fa fa-fw fa-trash-o\"></i> [[admin/manage/users:purge]]</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t<button class=\"btn btn-light btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\"><i class=\"fa fa-gear text-primary\"></i></button>\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1\">\n\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"create\">[[admin/manage/users:create]]</a></li>\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['showInviteButton'] : null) ?
        "<li><a class=\"dropdown-item rounded-1\" href=\"#\" component=\"user/invite\">[[admin/manage/users:invite]]</a></li>" :
        "") + 
      "\n\t\t\t\t\t\t<li><a target=\"_blank\" href=\"#\" class=\"dropdown-item rounded-1 export-csv\">[[admin/manage/users:download-csv]]</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row flex-grow-1\">\n\t\t<div class=\"col-lg-12 d-flex flex-column gap-2\">\n\t\t\t<div class=\"search " + 
      __escape(guard((context != null) ? context['search_display'] : null)) + 
      "\">\n\t\t\t\t<i class=\"fa fa-spinner fa-spin hidden\"></i>\n\n\t\t\t\t<div id=\"user-found-notify\" class=\"badge text-bg-light " + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "" :
        "hidden") + 
      "\">[[admin/manage/users:alerts.x-users-found, " + 
      __escape(guard((context != null) ? context['matchCount'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['timing'] : null)) + 
      "]]</div>\n\n\t\t\t\t<div id=\"user-notfound-notify\" class=\"badge text-bg-warning " + 
      (guard((context != null) ? context['query'] : null) ?
        "" :
        "hidden") + 
      " " + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "hidden" :
        "") + 
      "\">[[admin/manage/users:search.not-found]]</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"table-responsive flex-grow-1\">\n\t\t\t\t<table class=\"table users-table text-sm\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th><input component=\"user/select/all\" type=\"checkbox\"/></th>\n\t\t\t\t\t\t\t<th class=\"text-end text-muted\">[[admin/manage/users:users.uid]]</th>\n\t\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.username]]</th>\n\t\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.email]]</th>\n\t\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.ip]]</th>\n\t\t\t\t\t\t\t<th data-sort=\"postcount\" class=\"text-end pointer text-nowrap\">[[admin/manage/users:users.postcount]] " + 
      (guard((context != null) ? context['sort_postcount'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t\t<th data-sort=\"reputation\" class=\"text-end pointer text-nowrap\">[[admin/manage/users:users.reputation]] " + 
      (guard((context != null) ? context['sort_reputation'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t\t<th data-sort=\"flags\" class=\"text-end pointer text-nowrap\">[[admin/manage/users:users.flags]] " + 
      (guard((context != null) ? context['sort_flags'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t\t<th data-sort=\"joindate\" class=\"pointer text-nowrap\">[[admin/manage/users:users.joined]] " + 
      (guard((context != null) ? context['sort_joindate'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t\t<th data-sort=\"lastonline\" class=\"pointer text-nowrap\">[[admin/manage/users:users.last-online]] " + 
      (guard((context != null) ? context['sort_lastonline'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<div component=\"pagination\" class=\"pagination-container mt-3" + 
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
      "\n</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<tr class=\"user-row align-middle\">\n\t\t\t\t\t\t\t<th><input component=\"user/select/single\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" type=\"checkbox\"/></th>\n\t\t\t\t\t\t\t<td class=\"text-end\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<i title=\"[[admin/manage/users:users.banned]]\" class=\"ban fa fa-gavel text-danger" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['banned'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\n\t\t\t\t\t\t\t\t<i class=\"administrator fa fa-shield text-success" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['administrator'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\"> " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"text-nowrap\">\n\t\t\t\t\t\t\t\t<div class=\"d-flex flex-column gap-1\">\n\t\t\t\t\t\t\t\t\t<em class=\"text-muted no-email " + 
          ((guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null) || guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null)) ?
            "hidden" :
            "") + 
          " \">[[admin/manage/users:users.no-email]]</em>\n\n\t\t\t\t\t\t\t\t\t<span class=\"validated " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:confirmed'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-check text-success\" title=\"[[admin/manage/users:users.validated]]\" data-bs-toggle=\"tooltip\"></i>\n\t\t\t\t\t\t\t\t\t\t<span class=\"email\">" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null) ?
            __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null)) :
            "") + 
          "</span>\n\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t<span class=\"validated-by-admin hidden\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-check text-success\" title=\"[[admin/manage/users:users.validated]]\" data-bs-toggle=\"tooltip\"></i>\n\t\t\t\t\t\t\t\t\t\t<span class=\"email\">" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null) ?
            __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null)) :
            "") + 
          "</span>\n\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t<span class=\"pending " + 
          ((!guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null) || !guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:pending'] : null)) ?
            " hidden" :
            "") + 
          "\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-clock-o text-warning\" title=\"[[admin/manage/users:users.validation-pending]]\" data-bs-toggle=\"tooltip\"></i>\n\t\t\t\t\t\t\t\t\t\t<span class=\"email\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null)) + 
          "</span>\n\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t<span class=\"expired " + 
          ((!guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null) || !guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:expired'] : null)) ?
            " hidden" :
            "") + 
          "\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-times text-danger\" title=\"[[admin/manage/users:users.validation-expired]]\" data-bs-toggle=\"tooltip\"></i>\n\t\t\t\t\t\t\t\t\t\t<span class=\"email\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null)) + 
          "</span>\n\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t<span class=\"notvalidated " + 
          ((!guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null) || (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:expired'] : null) || (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:pending'] : null) || guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:confirmed'] : null)))) ?
            " hidden" :
            "") + 
          "\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-times text-danger\" title=\"[[admin/manage/users:users.not-validated]]\" data-bs-toggle=\"tooltip\"></i>\n\t\t\t\t\t\t\t\t\t\t<span class=\"email\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null)) + 
          "</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ips'] != null) ? context['users'][key0]['ips']['length'] : null) ?
            "\n\t\t\t\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-light btn-sm\" data-bs-toggle=\"dropdown\"><i class=\"fa fa-fw fa-list text-muted\"></i></button>\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu p-1\">\n\t\t\t\t\t\t\t\t\t\t" + 
              iter(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['ips'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t\t\t\t\t\t\t\t\t<li class=\"d-flex gap-1 " + 
                  (index === length - 1 ?
                    "" :
                    "mb-1") + 
                  "\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item rounded-1\">" + 
                  __escape(guard(value)) + 
                  "</a>\n\t\t\t\t\t\t\t\t\t\t\t<button data-ip=\"" + 
                  __escape(guard(value)) + 
                  "\" onclick=\"navigator.clipboard.writeText(this.getAttribute('data-ip'))\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-copy\"></i></button>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)])) + 
          "</td>\n\t\t\t\t\t\t\t<td class=\"text-end\" component=\"user/reputation\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)])) + 
          "</td>\n\t\t\t\t\t\t\t<td class=\"text-end\">" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null) ?
            __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)) :
            "0") + 
          "</td>\n\t\t\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
          "\"></span></td>\n\t\t\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
          "\"></span></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t";
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
