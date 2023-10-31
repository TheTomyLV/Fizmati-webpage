
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
    return "<div class=\"account\">\n\t" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\n\t<div data-widget-area=\"header\">\n\t\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\n\t<div class=\"cover\" component=\"account/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null) ? context['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null) ? context['cover:position'] : null)) + 
      ";\">\n\t\t<div class=\"avatar-wrapper\" data-uid=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\">\n\t\t\t" + 
      (guard((context != null) ? context['picture'] : null) ?
        "\n\t\t\t<img src=\"" + 
          __escape(guard((context != null) ? context['picture'] : null)) + 
          "\" class=\"avatar avatar-rounded\" style=\"--avatar-size: 128px;\" />\n\t\t\t" :
        "\n\t\t\t<div class=\"avatar avatar-rounded\" style=\"background-color: " + 
          __escape(guard((context != null) ? context['icon:bgColor'] : null)) + 
          "; --avatar-size: 128px;\" title=\"" + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['icon:text'] : null)) + 
          "</div>\n\t\t\t") + 
      "\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
      __escape(guard((context != null) ? context['status'] : null)) + 
      "\" title=\"[[global:" + 
      __escape(guard((context != null) ? context['status'] : null)) + 
      "]]\"></i>\n\n\t\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n\t\t\t<button class=\"btn-morph persona-fab " + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "heart" :
                "plus") + 
              "\" title=\"" + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "[[global:unfollow]]" :
                "[[global:follow]]") + 
              "\">\n\t\t\t\t<span>\n\t\t\t\t\t<span class=\"s1\"></span>\n\t\t\t\t\t<span class=\"s2\"></span>\n\t\t\t\t\t<span class=\"s3\"></span>\n\t\t\t\t</span>\n\t\t\t</button>\n\t\t\t") + 
          "\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\n\t\t<div class=\"container\">\n\t\t\t<div class=\"btn-group account-fab bottom-sheet\">\n\t<button type=\"button\" class=\"persona-fab dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t<i class=\"fa fa-ellipsis-v\"></i>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end account-sub-links\">\n\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n\t\t" + 
              (guard((context != null) ? context['banned'] : null) ?
                "" :
                "\n\t\t" + 
                  (guard((context != null) ? context['canChat'] : null) ?
                    "\n\t\t<li class=\"" + 
                      (guard((context != null) ? context['hasPrivateChat'] : null) ?
                        "" :
                        "hidden") + 
                      "\">\n\t\t\t<a class=\"dropdown-item\" component=\"account/chat\" href=\"#\">[[user:chat-with, " + 
                      __escape(guard((context != null) ? context['username'] : null)) + 
                      "]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" component=\"account/new-chat\" href=\"#\">[[user:new-chat-with, " + 
                      __escape(guard((context != null) ? context['username'] : null)) + 
                      "]]</a>\n\t\t</li>\n\t\t" :
                    "") + 
                  "\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" component=\"account/flag\" href=\"#\">[[user:flag-profile]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item " + 
                  (guard((context != null) ? context['isBlocked'] : null) ?
                    "hidden" :
                    "") + 
                  "\" component=\"account/block\" href=\"#\">[[user:block-user]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item " + 
                  (guard((context != null) ? context['isBlocked'] : null) ?
                    "" :
                    "hidden") + 
                  "\" component=\"account/unblock\" href=\"#\">[[user:unblock-user]]</a>\n\t\t</li>\n\t\t<li role=\"separator\" class=\"dropdown-divider\"></li>\n\t\t") + 
              "\n\t\t") + 
          "\n\t\t" :
        "") + 
      "\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"d-inline-block\" id=\"profile\">[[user:profile]]</a>\n\t\t</li>\n\t\t" + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n\t\t<li><a class=\"dropdown-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit\">[[user:edit]]</a></li>\n\t\t<li><a class=\"dropdown-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\">[[user:settings]]</a></li>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n\t\t" + 
          ((guard((context != null) ? context['canBan'] : null) || guard((context != null) ? context['canMute'] : null)) ?
            "\n\t\t<li role=\"separator\" class=\"dropdown-divider\"></li>\n\t\t<li class=\"dropdown-header\">[[user:admin-actions-label]]</li>\n\t\t" :
            "") + 
          "\n\t\t" + 
          (guard((context != null) ? context['canBan'] : null) ?
            "\n\t\t<li class=\"" + 
              (guard((context != null) ? context['banned'] : null) ?
                "hide" :
                "") + 
              "\">\n\t\t\t<a class=\"dropdown-item\" component=\"account/ban\" href=\"#\">[[user:ban-account]]</a>\n\t\t</li>\n\t\t<li class=\"" + 
              (guard((context != null) ? context['banned'] : null) ?
                "" :
                "hide") + 
              "\">\n\t\t\t<a class=\"dropdown-item\" component=\"account/unban\" href=\"#\">[[user:unban-account]]</a>\n\t\t</li>\n\t\t" :
            "") + 
          "\n\t\t" + 
          (guard((context != null) ? context['canMute'] : null) ?
            "\n\t\t<li class=\"" + 
              (guard((context != null) ? context['muted'] : null) ?
                "hide" :
                "") + 
              "\">\n\t\t\t<a class=\"dropdown-item\" component=\"account/mute\" href=\"#\">[[user:mute-account]]</a>\n\t\t</li>\n\t\t<li class=\"" + 
              (guard((context != null) ? context['muted'] : null) ?
                "" :
                "hide") + 
              "\">\n\t\t\t<a class=\"dropdown-item\" component=\"account/unmute\" href=\"#\">[[user:unmute-account]]</a>\n\t\t</li>\n\t\t" :
            "") + 
          "\n\t\t" + 
          (guard((context != null) ? context['isAdmin'] : null) ?
            "\n\t\t<li>\n\t\t\t<a component=\"account/delete-account\" href=\"#\" class=\"dropdown-item\">[[user:delete-account-as-admin]]</a>\n\t\t\t<a component=\"account/delete-content\" href=\"#\" class=\"dropdown-item\">[[user:delete-content]]</a>\n\t\t\t<a component=\"account/delete-all\" href=\"#\" class=\"dropdown-item\">[[user:delete-all]]</a>\n\t\t</li>\n\t\t" :
            "") + 
          "\n\t\t") + 
      "\n\n\t\t<li role=\"separator\" class=\"dropdown-divider\"></li>\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\">[[user:following]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)])) + 
      "</span></a></li>\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\">[[user:followers]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)])) + 
      "</span></a></li>\n\t\t" + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/blocks\">[[user:blocks]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)])) + 
          "</span></a></li>\n\t\t" :
        "") + 
      "\n\t\t<li role=\"separator\" class=\"dropdown-divider\"></li>\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/topics\">[[global:topics]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)])) + 
      "</span></a></li>\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\">[[global:posts]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)])) + 
      "</span></a></li>\n\t\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/best\">[[global:best]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['best'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['best'] : null)])) + 
          "</span></a></li>\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/controversial\">[[global:controversial]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['controversial'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['controversial'] : null)])) + 
          "</span></a></li>\n\t\t") + 
      "\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/groups\">[[global:header.groups]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)])) + 
      "</span></a></li>\n\n\t\t" + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/categories\">[[user:watched-categories]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)])) + 
          "</span></a></li>\n\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/tags\">\n\t\t[[user:watched-tags]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
              __escape(guard((context != null && context['counts'] != null) ? context['counts']['tagsWatched'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['tagsWatched'] : null)])) + 
              "</span></a></li>\n\t\t" :
            "") + 
          "\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/bookmarks\">[[user:bookmarks]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['bookmarks'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['bookmarks'] : null)])) + 
          "</span></a></li>\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/watched\">[[user:watched]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['watched'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['watched'] : null)])) + 
          "</span></a></li>\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/ignored\">[[user:ignored]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['ignored'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['ignored'] : null)])) + 
          "</span></a></li>\n\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/upvoted\">[[global:upvoted]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
              __escape(guard((context != null && context['counts'] != null) ? context['counts']['upvoted'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['upvoted'] : null)])) + 
              "</span></a></li>\n\t\t" + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null) ? context['userslug'] : null)) + 
                  "/downvoted\">[[global:downvoted]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
                  __escape(guard((context != null && context['counts'] != null) ? context['counts']['downvoted'] : null)) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['downvoted'] : null)])) + 
                  "</span></a></li>\n\t\t") + 
              "\n\t\t") + 
          "\n\t\t<li><a class=\"dropdown-item d-flex justify-content-between align-items-center\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/uploads\">[[global:uploads]] <span class=\"badge bg-secondary rounded-pill ms-2\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)])) + 
          "</span></a></li>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\n\t</ul>\n</div>\n\n\n\t\t\t" + 
      (guard((context != null) ? context['allowCoverPicture'] : null) ?
        "\n\t\t\t" + 
          (guard((context != null) ? context['canEdit'] : null) ?
            "\n\t\t\t<div class=\"controls\">\n\t\t\t\t<span class=\"upload\"><i class=\"fa fa-fw fa-4x fa-upload\"></i></span>\n\t\t\t\t<span class=\"resize\"><i class=\"fa fa-fw fa-4x fa-arrows\"></i></span>\n\t\t\t\t<span class=\"remove\"><i class=\"fa fa-fw fa-4x fa-times\"></i></span>\n\t\t\t</div>\n\t\t\t<div class=\"save\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n\t\t\t<div class=\"indicator\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n\t\t\t" :
            "") + 
          "\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n\n\n<div class=\"row\">\n\t<h1 class=\"fs-2\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h1>\n\t<div class=\"col-lg-12 mb-2\">\n\t\t<div class=\"btn-group bottom-sheet\" component=\"category/watch/all\">\n\t\t\t<button class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t\t\t<span>[[user:change-all]]</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</button>\n\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t<li><a class=\"dropdown-item\" href=\"#\" component=\"category/watching\" data-state=\"watching\"><i class=\"fa fa-fw fa-inbox\"></i> [[category:watching]]<p class=\"help-text\"><small>[[category:watching.description]]</small></p></a></li>\n\t\t\t\t<li><a class=\"dropdown-item\" href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\"><i class=\"fa fa-fw fa-clock-o\"></i> [[category:not-watching]]<p class=\"help-text\"><small>[[category:not-watching.description]]</small></p></a></li>\n\t\t\t\t<li><a class=\"dropdown-item\" href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\"><i class=\"fa fa-fw fa-eye-slash\"></i> [[category:ignoring]]<p class=\"help-text\"><small>[[category:ignoring.description]]</small></p></a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-12\">\n\t\t<ul class=\"categories list-unstyled\" itemscope itemtype=\"http://www.schema.org/ItemList\">\n\t\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n\t\t</ul>\n\t\t<div component=\"pagination\" class=\"pagination-container" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t<ul class=\"pagination hidden-xs justify-content-center\">\n\t\t<li class=\"page-item previous float-start" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t<li class=\"page-item next float-end" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class=\"pagination hidden-sm hidden-md hidden-lg justify-content-center\">\n\t\t<li class=\"page-item first" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
      "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n\t\t</li>\n\n\t\t<li class=\"page-item previous" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t<a class=\"page-link\" href=\"#\">" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "</a>\n\t\t</li>\n\n\t\t<li class=\"page-item next" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\n\t\t<li class=\"page-item last" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t</div>\n</div>\n\n</div>";
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
        return "\n\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['profile_links'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t" + 
          (index === 0 ?
            "\n\t\t<li role=\"separator\" class=\"dropdown-divider\"></li>\n\t\t" :
            "") + 
          "\n\t\t<li id=\"" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['id'] : null)) + 
          "\" class=\"plugin-link " + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['public'] : null) ?
            "public" :
            "private") + 
          "\"><a class=\"dropdown-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['route'] : null)) + 
          "\">" + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['icon'] : null) ?
            "<i class=\"fa fa-fw " + 
              __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['name'] : null)) + 
          "</a></li>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['parentCid'] : null)) + 
          "\" class=\"row clearfix\">\n\t<meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\">\n\n\t<div class=\"content col-10 depth-" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['depth'] : null)) + 
          "\">\n\t\t<div class=\"float-start\">\n\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "48px", "rounded-circle"])) + 
          "\n\t\t</div>\n\n\t\t<h2 class=\"title\">\n\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isSection'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n" :
            "\n" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\n" :
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\n") + 
              "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n</a>\n") + 
          "\n\t\t</h2>\n\t\t<div>\n\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null) ?
            "\n\t\t\t<div class=\"description text-muted\">\n\t\t\t\t" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
              "\n\t\t\t</div>\n\t\t\t" :
            "") + 
          "\n\t\t</div>\n\t</div>\n\t<div class=\"col-2\">\n\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n\n\t<button class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<span component=\"category/watching/menu\" " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isWatched'] : null) ?
                "" :
                "class=\"hidden\"") + 
              "><i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[category:watching]]</span></span>\n\n\t\t<span component=\"category/notwatching/menu\" " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isNotWatched'] : null) ?
                "" :
                "class=\"hidden\"") + 
              "><i class=\"fa fa-fw fa-clock-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[category:not-watching]]</span></span>\n\n\t\t<span component=\"category/ignoring/menu\" " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isIgnored'] : null) ?
                "" :
                "class=\"hidden\"") + 
              "><i class=\"fa fa-fw fa-eye-slash\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[category:ignoring]]</span></span>\n\t\t<span class=\"caret\"></span>\n\t</button>\n\n\t<ul class=\"dropdown-menu dropdown-menu-end\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"category/watching\" data-state=\"watching\">\n\t\t\t\t<span><i component=\"category/watching/check\" class=\"fa fa-fw " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isWatched'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-inbox\"></i> [[category:watching]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[category:watching.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\">\n\t\t\t\t<span><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isNotWatched'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-clock-o\"></i> [[category:not-watching]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[category:not-watching.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\">\n\t\t\t\t<span><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isIgnored'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-eye-slash\"></i> [[category:ignoring]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[category:ignoring.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n" :
            "") + 
          "\n\t</div>\n</li>\n\n\t\t\t";
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
            "\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t\t<a class=\"page-link\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n\t\t\t</li>\n\t\t\t" :
            "\n\t\t\t<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n\t\t\t\t<a class=\"page-link\" href=\"?" + 
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
