
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
    return "<div component=\"groups/container\" class=\"groups details row\">\n\t<div component=\"groups/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:position'] : null)) + 
      ";\">\n\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n\t\t<div class=\"controls\">\n\t\t\t<span class=\"upload\"><i class=\"fa fa-fw fa-4x fa-upload\"></i></span>\n\t\t\t<span class=\"resize\"><i class=\"fa fa-fw fa-4x fa-arrows\"></i></span>\n\t\t\t<span class=\"remove\"><i class=\"fa fa-fw fa-4x fa-times\"></i></span>\n\t\t</div>\n\t\t<div class=\"save\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n\t\t<div class=\"indicator\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n\t\t" :
        "") + 
      "\n\t</div>\n\n\t<div class=\"col-12\">\n\t\t" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\t</div>\n\n\t<div class=\"col-lg-4 col-12\">\n\t\t<div class=\"card mb-3\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<span class=\"fs-5\">\n\t\t\t\t\t<i class=\"fa fa-list-ul\"></i> [[groups:details.title]]\n\t\t\t\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
        "<span class=\"badge bg-info text-dark\">[[groups:details.private]]</span>" :
        "") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
        "<span class=\"badge bg-info text-dark\">[[groups:details.hidden]]</span>&nbsp;" :
        "") + 
      "\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h2>" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "</h2>\n\t\t\t\t<p>" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['descriptionParsed'] : null)) + 
      "</p>\n\t\t\t\t" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n\t\t\t\t<div class=\"float-end\">\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/groups/" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['nameEncoded'] : null)) + 
          "\" target=\"_blank\" class=\"btn btn-info\"><i class=\"fa fa-gear\"></i> [[user:edit]]</a>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t\t\t\t<div class=\"float-end\">\n\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'membershipBtn', [guard((context != null) ? context['group'] : null)])) + 
          "&nbsp;\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card mb-3\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<span class=\"fs-5\">\n\t\t\t\t\t<i class=\"fa fa-users\"></i> [[groups:details.members]]\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"d-flex mb-3\">\n\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n\t<div class=\"flex-shrink-0\">\n\t\t<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary me-3\" title=\"[[groups:details.add-member]]\"><i class=\"fa fa-user-plus\"></i></button>\n\t</div>\n\t" :
        "") + 
      "\n\t<div class=\"flex-grow-1\">\n\t\t<div class=\"input-group\">\n\t\t\t<input class=\"form-control\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\n\t\t\t<span class=\"input-group-text search-button\"><i class=\"fa fa-search\"></i></span>\n\t\t</div>\n\t</div>\n</div>\n\n<div component=\"groups/members\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\" style=\"max-height: 500px; overflow: auto;\">\n\t<table class=\"table table-striped table-hover\">\n\t\t<tbody>\n\t\t" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\n\t\t</tbody>\n\t</table>\n</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n\t\t<div class=\"card mb-3\">\n\t<div class=\"card-header\">\n\t\t<div class=\"fs-5\">\n\t\t\t<i class=\"fa fa-clock-o\"></i> [[groups:details.pending]]\n\t\t\t" + 
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
          ">\n\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t[[groups:details.hidden-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<button class=\"btn btn-link text-danger float-end\" type=\"button\" data-action=\"delete\">[[groups:details.delete-group]]</button>\n\t\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"update\">[[global:save-changes]]</button>\n\t\t</form>\n\t</div>\n</div>\n\t\t" :
        "") + 
      "\n\n\t\t<div data-widget-area=\"left\">\n\t\t\t" + 
      compiled.blocks['widgets.left'](helpers, context, guard, iter, helper) + 
      "\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-8 col-12\">\n\t\t<div class=\"col-lg-11\">\n\t\t\t" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n\t\t\t<div class=\"alert alert-info\">[[groups:details.has-no-posts]]</div>\n\t\t\t") + 
      "\n\t\t\t<ul component=\"posts\" class=\"posts-list list-unstyled\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\n\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n<div component=\"posts/loading\" class=\"loading-indicator text-center hidden\">\n\t<i class=\"fa fa-refresh fa-spin\"></i>\n</div>\n\t\t</div>\n\t\t<div data-widget-area=\"right\">\n\t\t\t" + 
      compiled.blocks['widgets.right'](helpers, context, guard, iter, helper) + 
      "\n\t\t</div>\n\t</div>\n</div>\n";
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
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\" data-isowner=\"" + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "1" :
            "0") + 
          "\">\n\t\t\t<td class=\"p-2\">\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['members'] != null) ? context['group']['members'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t</td>\n\t\t\t<td class=\"member-name w-100 p-2\">\n\t\t\t\t<a class=\"align-text-top\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t<i component=\"groups/owner/icon\" title=\"[[groups:owner]]\" class=\"user-owner-icon fa fa-star align-text-top text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n\n\t\t\t\t" + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\n\t\t\t\t<div class=\"owner-controls btn-group float-end\">\n\t\t\t\t\t<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\n\t\t\t\t\t\t<i class=\"fa fa-ban\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</td>\n\t\t</tr>\n\t\t";
      }, function alt() {
        return "";
      });
    },
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
    },
    'widgets.left': function widgetsleft(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['left'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['left'] != null && context['widgets']['left'][key0] != null) ? context['widgets']['left'][key0]['html'] : null) + 
          "\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li component=\"post\" class=\"posts-list-item row" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['scheduled'] : null) ?
            " scheduled" :
            "") + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\">\n    <div class=\"col-lg-11 col-sm-10 col-9 post-body\">\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">\n            " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
            "" :
            "RE: ") + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "\n        </a>\n\n        <div component=\"post/content\" class=\"content\">\n            " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n        </div>\n\n        <small class=\"topic-category\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted-in, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "]]</a></small>\n\n        " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
            "\n        " + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null) ? context['posts'][key0]['topic']['tags']['length'] : null) ?
                "\n        <span class=\"tag-list\">\n            " + 
                  iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['tags'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n            <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/tags/" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['valueEncoded'] : null)) + 
                      "\"><span class=\"tag tag-item tag-class-" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['class'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['valueEscaped'] : null)) + 
                      "</span></a>\n            ";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n        </span>\n        " :
                "") + 
              "\n        " :
            "") + 
          "\n\n        <div class=\"post-info\">\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "28px", guard((context != null) ? context['true'] : null), "user-img not-responsive"])) + 
          "</a>\n\n            <div class=\"post-author\">\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a><br />\n                <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n            </div>\n        </div>\n    </div>\n</li>\n\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.right': function widgetsright(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['right'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['right'] != null && context['widgets']['right'][key0] != null) ? context['widgets']['right'][key0]['html'] : null) + 
          "\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
