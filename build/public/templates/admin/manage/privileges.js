
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
    return "<div class=\"d-flex flex-column gap-2 px-lg-4\">\n\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/privileges:manage-privileges]]</h4>\n\t\t</div>\n\t\t<div class=\"d-flex gap-1\">\n\t\t\t<button id=\"discard\" class=\"btn btn-light btn-sm text-nowrap\" type=\"button\">\n\t\t\t\t<i class=\"fa fa-rotate-left text-danger\"></i> [[admin/manage/privileges:discard-changes]]\n\t\t\t</button>\n\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-12\">\n\t\t\t<form role=\"form\" class=\"category\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t[[admin/manage/categories:privileges.description]]\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<div class=\"lead mb-3\">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.category-selector]]\n\t\t\t\t\t\t<div component=\"category-selector\" class=\"btn-group dropdown-left bottom-sheet\">\n<button type=\"button\" class=\"btn-ghost-sm dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t<span component=\"category-selector-selected\">\n\t\t<span class=\"category-item d-inline-flex align-items-center gap-1\">\n\t\t" + 
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
      "\n</ul>\n</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"privilege-table-container\">\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['cid'] : null) ?
        "\n\t\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\n<div class=\"table-responsive\">\n\t<table class=\"table privilege-table text-sm\">\n\t\t<thead>\n\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t<th class=\"privilege-filters\" colspan=\"100\">\n\t\t\t\t\t<div component=\"privileges/groups/filters\" class=\"btn-toolbar justify-content-end gap-1\">\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"viewing\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-viewing]]</button>\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"posting\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-posting]]</button>\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"moderation\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-moderation]]</button>\n\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null) ?
            "\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"other\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-other]]</button>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t<tr>\n\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t" + 
          compiled.blocks['privileges.labelData'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t" + 
          compiled.blocks['privileges.groups'](helpers, context, guard, iter, helper) + 
          "\n\t\t</tbody>\n\t\t<tfoot>\n\t\t\t<tr>\n\t\t\t\t<td colspan=\"3\"></td>\n\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['groups'] != null) ? context['privileges']['keys']['groups']['length'] : null)) + 
          "\">\n\t\t\t\t\t<div class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"search.group\">\n\t\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\n\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"copyPrivilegesFrom\">\n\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-from-category]]\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"copyToChildren\">\n\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-to-children]]\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"copyToAll\">\n\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-privileges-to-all-categories]]\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tfoot>\n\t</table>\n</div>\n<div class=\"form-text\">\n\t[[admin/manage/categories:privileges.inherit]]\n</div>\n\n<hr/>\n\n<label>[[admin/manage/privileges:user-privileges]]</label>\n<div class=\"table-responsive\">\n\t<table class=\"table privilege-table text-sm\">\n\t\t<thead>\n\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t<th class=\"privilege-filters\" colspan=\"100\">\n\t\t\t\t\t<div class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"viewing\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-viewing]]</button>\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"posting\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-posting]]</button>\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"moderation\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-moderation]]</button>\n\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountUserOther'] : null) ?
            "\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"other\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-other]]</button>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t<tr>\n\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['labelData'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t\t<th class=\"text-center\" data-type=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['type'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['label'] : null)) + 
              "</th>\n\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t" + 
          compiled.blocks['privileges.users'](helpers, context, guard, iter, helper) + 
          "\n\t\t</tbody>\n\t\t<tfoot>\n\t\t\t<tr>\n\t\t\t\t<td colspan=\"3\"></td>\n\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['users'] != null) ? context['privileges']['keys']['users']['length'] : null)) + 
          "\">\n\t\t\t\t\t<div class=\"btn-toolbar justify-content-end\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-ajaxify=\"false\" data-action=\"search.user\">\n\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tfoot>\n\t</table>\n</div>\n\n\t\t\t\t\t\t" :
        "\n\t\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\n<div class=\"table-responsive\">\n\t<table class=\"table privilege-table text-sm\">\n\t\t<thead>\n\t\t\t" + 
          (guard((context != null) ? context['isAdminPriv'] : null) ?
            "" :
            "\n\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t<th class=\"privilege-filters\" colspan=\"100\">\n\t\t\t\t\t<div component=\"privileges/groups/filters\" class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"viewing\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-viewing]]</button>\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"posting\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-posting]]</button>\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"moderation\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-moderation]]</button>\n\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null) ?
                "\n\t\t\t\t\t\t<button type=\"button\" data-filter=\"other\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-other]]</button>\n\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t") + 
          "\n\t\t\t<tr>\n\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['labelData'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t\t<th class=\"text-center\" data-type=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['type'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['label'] : null)) + 
              "</th>\n\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['groups'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t<tr data-group-name=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['nameEscaped'] : null)) + 
              "\" data-private=\"" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
                "1" :
                "0") + 
              "\">\n\t\t\t\t<td>\n\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
                "\n\t\t\t\t\t\t" + 
                  ((guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null) == "banned-users") ?
                    "\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-exclamation-triangle text-muted\" title=\"[[admin/manage/categories:privileges.inheritance-exception]]\"></i>\n\t\t\t\t\t\t" :
                    "\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-lock text-muted\" title=\"[[admin/manage/categories:privileges.group-private]]\"></i>\n\t\t\t\t\t\t") + 
                  "\n\t\t\t\t\t" :
                "\n\t\t\t\t\t<i class=\"fa fa-fw fa-none\"></i>\n\t\t\t\t\t") + 
              "\n\t\t\t\t\t" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null)) + 
              "\n\t\t\t\t</td>\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n\t\t\t\t" + 
              __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['privileges'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['types'] : null)])) + 
              "\n\t\t\t</tr>\n\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t</tbody>\n\t\t<tfoot>\n\t\t\t<tr>\n\t\t\t\t<td colspan=\"3\"></td>\n\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['groups'] != null) ? context['privileges']['keys']['groups']['length'] : null)) + 
          "\">\n\t\t\t\t\t<div class=\"btn-toolbar justify-content-end\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-ajaxify=\"false\" data-action=\"search.group\">\n\t\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\n\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tfoot>\n\t</table>\n</div>\n<div class=\"form-text\">\n\t[[admin/manage/categories:privileges.inherit]]\n</div>\n<hr/>\n<label>[[admin/manage/privileges:user-privileges]]</label>\n<div class=\"table-responsive\">\n\t<table class=\"table privilege-table text-sm\">\n\t\t<thead>\n\t\t\t" + 
          (guard((context != null) ? context['isAdminPriv'] : null) ?
            "" :
            "\n\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t<th class=\"privilege-filters\" colspan=\"100\">\n\t\t\t\t\t<div class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\n\t\t\t\t\t<button type=\"button\" data-filter=\"viewing\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-viewing]]</button>\n\t\t\t\t\t<button type=\"button\" data-filter=\"posting\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-posting]]</button>\n\t\t\t\t\t<button type=\"button\" data-filter=\"moderation\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-moderation]]</button>\n\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountUserOther'] : null) ?
                "\n\t\t\t\t\t<button type=\"button\" data-filter=\"other\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-other]]</button>\n\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t") + 
          "\n\t\t\t<tr>\n\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['labelData'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t\t<th class=\"text-center\" data-type=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['type'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['label'] : null)) + 
              "</th>\n\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['users'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t<tr data-uid=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['uid'] : null)) + 
              "\"" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
                " data-banned" :
                "") + 
              ">\n\t\t\t\t<td>\n\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null) ? context['privileges']['users'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "\n\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
                "\n\t\t\t\t\t\t<i class=\"ban fa fa-gavel text-danger\" title=\"[[admin/manage/categories:privileges.banned-user-inheritance]]\"></i>\n\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
              "\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<!-- need this empty -->\n\t\t\t\t</td>\n\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n\t\t\t\t" + 
              __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['privileges'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['types'] : null)])) + 
              "\n\t\t\t</tr>\n\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t</tbody>\n\t\t<tfoot>\n\t\t\t<tr>\n\t\t\t\t<td colspan=\"3\"></td>\n\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['users'] != null) ? context['privileges']['keys']['users']['length'] : null)) + 
          "\">\n\t\t\t\t\t<div class=\"btn-toolbar justify-content-end\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-ajaxify=\"false\" data-action=\"search.user\">\n\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tfoot>\n\t</table>\n</div>\n\n\t\t\t\t\t\t") + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
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
    'privileges.labelData': function privilegeslabelData(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['labelData'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<th class=\"text-center\" data-type=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['type'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['labelData'] != null && context['privileges']['labelData'][key0] != null) ? context['privileges']['labelData'][key0]['label'] : null)) + 
          "</th>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.groups': function privilegesgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<tr data-group-name=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['nameEscaped'] : null)) + 
          "\" data-private=\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "1" :
            "0") + 
          "\">\n\t\t\t\t<td>\n\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "\n\t\t\t\t\t\t" + 
              ((guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null) == "banned-users") ?
                "\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-exclamation-triangle text-muted\" title=\"[[admin/manage/categories:privileges.inheritance-exception]]\"></i>\n\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-lock text-muted\" title=\"[[admin/manage/categories:privileges.group-private]]\"></i>\n\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t" :
            "\n\t\t\t\t\t<i class=\"fa fa-fw fa-none\"></i>\n\t\t\t\t\t") + 
          "\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null)) + 
          "\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t<button class=\"btn btn-outline-secondary btn-sm dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li data-action=\"copyToAllGroup\"><a class=\"dropdown-item\" href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>\n\t\t\t\t\t\t\t<li data-action=\"copyToChildrenGroup\"><a class=\"dropdown-item\" href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>\n\t\t\t\t\t\t\t<li data-action=\"copyPrivilegesFromGroup\"><a class=\"dropdown-item\" href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"\">\n\t\t\t\t\t<div class=\"form-check text-center\">\n\t\t\t\t\t\t<input autocomplete=\"off\" type=\"checkbox\" class=\"form-check-input float-none checkbox-helper\">\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['privileges'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['types'] : null)])) + 
          "\n\t\t\t</tr>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.users': function privilegesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['uid'] : null)) + 
          "\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            " data-banned" :
            "") + 
          ">\n\t\t\t\t<td>\n\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null) ? context['privileges']['users'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            "\n\t\t\t\t\t<i class=\"ban fa fa-gavel text-danger\" title=\"[[admin/manage/categories:privileges.banned-user-inheritance]]\"></i>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
          "\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<!-- need this empty -->\n\t\t\t\t</td>\n\t\t\t\t<td class=\"\">\n\t\t\t\t\t<div class=\"form-check text-center\">\n\t\t\t\t\t\t<input autocomplete=\"off\" type=\"checkbox\" class=\"form-check-input float-none checkbox-helper\">\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['privileges'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['types'] : null)])) + 
          "\n\t\t\t</tr>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
