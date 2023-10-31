
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
      "\n\t\t</div>\n\t</div>\n\n\n<div class=\"profile row\">\n\t<h1 class=\"fullname\">" + 
      (guard((context != null) ? context['fullname'] : null) ?
        __escape(guard((context != null) ? context['fullname'] : null)) :
        __escape(guard((context != null) ? context['username'] : null))) + 
      "</h1>\n\t<div class=\"d-flex gap-2 justify-content-center mb-2\" component=\"user/badges\"></div>\n\t<h2 class=\"username\">" + 
      (guard((context != null) ? context['banned'] : null) ?
        "[[user:banned]]" :
        "@" + 
          __escape(guard((context != null) ? context['username'] : null))) + 
      "</h2>\n\t" + 
      (guard((context != null) ? context['isAdminOrGlobalModeratorOrModerator'] : null) ?
        "\n\t" + 
          (guard((context != null) ? context['banned'] : null) ?
            "\n\t<div class=\"text-center\">\n\t" + 
              (guard((context != null) ? context['banned_until'] : null) ?
                "\n\t[[user:info.banned-until, " + 
                  __escape(guard((context != null) ? context['banned_until_readable'] : null)) + 
                  "]]\n\t" :
                "\n\t[[user:info.banned-permanently]]\n\t") + 
              "\n\t</div>\n\t" :
            "") + 
          "\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['selectedGroup'] != null) ? context['selectedGroup']['length'] : null) ?
        "\n\t<div class=\"text-center\">\n\t" + 
          compiled.blocks['selectedGroup'](helpers, context, guard, iter, helper) + 
          "\n\t</div>\n\t<br/>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null) ? context['aboutme'] : null) ?
        "\n\t<span component=\"aboutme\" class=\"text-center aboutme\">" + 
          __escape(guard((context != null) ? context['aboutmeParsed'] : null)) + 
          "</span>\n\t" :
        "") + 
      "\n\n\t<div class=\"account-stats\">\n\t\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n\t\t<div class=\"stat\">\n\t\t\t<div title=\"" + 
          __escape(guard((context != null) ? context['reputation'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['reputation'] : null)])) + 
          "</div>\n\t\t\t<span class=\"stat-label\">[[global:reputation]]</span>\n\t\t</div>\n\t\t") + 
      "\n\n\t\t<div class=\"stat\">\n\t\t\t<div title=\"" + 
      __escape(guard((context != null) ? context['profileviews'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['profileviews'] : null)])) + 
      "</div>\n\t\t\t<span class=\"stat-label\">[[user:profile-views]]</span>\n\t\t</div>\n\n\t\t<div class=\"stat\">\n\t\t\t<div><a title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)])) + 
      "</a></div>\n\t\t\t<span class=\"stat-label\">[[global:posts]]</span>\n\t\t</div>\n\n\t\t<div class=\"stat\">\n\t\t\t<div><a title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)])) + 
      "</a></div>\n\t\t\t<span class=\"stat-label\">[[user:followers]]</span>\n\t\t</div>\n\n\t\t<div class=\"stat\">\n\t\t\t<div><a title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)])) + 
      "</a></div>\n\t\t\t<span class=\"stat-label\">[[user:following]]</span>\n\t\t</div>\n\t</div>\n\n\t<div class=\"text-center profile-meta\">\n\t\t<span>[[user:joined]]</span>\n\t\t<strong class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['joindateISO'] : null)) + 
      "\"></strong>\n\n\t\t<span>[[user:lastonline]]</span>\n\t\t<strong class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['lastonlineISO'] : null)) + 
      "\"></strong><br />\n\n\t\t" + 
      (guard((context != null) ? context['email'] : null) ?
        "\n\t\t<span>[[user:email]]</span>\n\t\t<strong><i class=\"fa fa-eye-slash " + 
          __escape(guard((context != null) ? context['emailClass'] : null)) + 
          "\" title=\"[[user:email-hidden]]\"></i> " + 
          __escape(guard((context != null) ? context['email'] : null)) + 
          "</strong>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['websiteName'] : null) ?
        "\n\t\t<span>[[user:website]]</span>\n\t\t<strong><a href=\"" + 
          __escape(guard((context != null) ? context['websiteLink'] : null)) + 
          "\" rel=\"nofollow noreferrer me\">" + 
          __escape(guard((context != null) ? context['websiteName'] : null)) + 
          "</a></strong>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['location'] : null) ?
        "\n\t\t<span>[[user:location]]</span>\n\t\t<strong>" + 
          __escape(guard((context != null) ? context['location'] : null)) + 
          "</strong>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['age'] : null) ?
        "\n\t\t<span>[[user:age]]</span>\n\t\t<strong>" + 
          __escape(guard((context != null) ? context['age'] : null)) + 
          "</strong>\n\t\t" :
        "") + 
      "\n\t</div>\n</div>\n\n\n<hr />\n\n<div class=\"row\">\n\t<div class=\"col-12 account-block hidden\">\n\t\t<div class=\"account-picture-block text-center\">\n\t\t\t<span>\n\t\t\t\t<span class=\"account-username\"> " + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "</span>\n\t\t\t</span>\n\n\t\t\t" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n\t\t\t<a component=\"account/unfollow\" href=\"#\" class=\"btn btn-outline-secondary" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            " hide") + 
          "\">[[user:unfollow]]</a>\n\t\t\t<a component=\"account/follow\" href=\"#\" class=\"btn btn-primary" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            " hide" :
            "") + 
          "\">[[user:follow]]</a>\n\t\t\t") + 
      "\n\t\t</div>\n\t</div>\n</div>\n\n" + 
      (guard((context != null && context['groups'] != null) ? context['groups']['length'] : null) ?
        "\n<div class=\"row\">\n\t<div class=\"col-12 hidden\">\n\t\t" + 
          compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
          "\n\t</div>\n</div>\n" :
        "") + 
      "\n\n" + 
      (guard((context != null && context['ips'] != null) ? context['ips']['length'] : null) ?
        "\n<div class=\"row\">\n\t<div class=\"col-12 hidden\">\n\t\t<div class=\"card\">\n\t\t\t<h5 class=\"card-header\">\n\t\t\t\t[[global:recentips]]\n\t\t\t</h5>\n\t\t\t<div class=\"card-body\">\n\t\t\t" + 
          compiled.blocks['ips'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n" :
        "") + 
      "\n\n<div class=\"row\">\n\t" + 
      (guard((context != null && context['bestPosts'] != null) ? context['bestPosts']['length'] : null) ?
        "\n\t<div class=\"col-lg-12 col-12\">\n\t\t<h1>[[pages:account/best, " + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "]]</h1>\n\n\t\t<div class=\"col-12\">\n\t\t\t<ul component=\"posts\" class=\"posts-list list-unstyled\">\n\t\t\t" + 
          compiled.blocks['bestPosts'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n\t" + 
      (guard((context != null && context['latestPosts'] != null) ? context['latestPosts']['length'] : null) ?
        "\n\t<div class=\"col-lg-12 col-12\">\n\t\t<h1>[[pages:account/latest-posts, " + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "]]</h1>\n\t\t<div class=\"col-12\">\n\t\t\t<ul component=\"posts\" class=\"posts-list list-unstyled\">\n\t\t\t" + 
          compiled.blocks['latestPosts'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n</div>\n\n<div id=\"user-action-alert\" class=\"alert alert-success hide\"></div>\n\n</div>";
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
    'selectedGroup': function selectedGroup(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['selectedGroup'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['slug'] : null) ?
            "\n\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/groups/" + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['slug'] : null)) + 
              "\" class=\"badge rounded-1 text-uppercase text-truncate\" style=\"max-width: 150px;color:" + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['textColor'] : null)) + 
              ";background-color: " + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['labelColor'] : null)) + 
              ";\"><i class=\"fa " + 
              (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['icon'] : null) ?
                __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['icon'] : null)) + 
                  (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null) ?
                    " me-1" :
                    "") :
                "hidden") + 
              "\"></i><span class=\"badge-text\">" + 
              (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null) ?
                __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null)) :
                "") + 
              "</span></a>\n\t" :
            "") + 
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
        return "\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\"><span class=\"label group-label inline-block\" style=\"background-color: " + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['labelColor'] : null)) + 
          ";\">" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['icon'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitle'] : null)) + 
          "</span></a>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'ips': function ips(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['ips'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<div>" + 
          __escape(guard((context != null && context['ips'] != null) ? context['ips'][key0] : null)) + 
          "</div>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'bestPosts': function bestPosts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['bestPosts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li component=\"post\" class=\"posts-list-item row" + 
          (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null) ? context['bestPosts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null) ? context['bestPosts'][key0]['topic']['scheduled'] : null) ?
            " scheduled" :
            "") + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['uid'] : null)) + 
          "\">\n    <div class=\"col-lg-11 col-sm-10 col-9 post-body\">\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['pid'] : null)) + 
          "\">\n            " + 
          (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['isMainPost'] : null) ?
            "" :
            "RE: ") + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null) ? context['bestPosts'][key0]['topic']['title'] : null)) + 
          "\n        </a>\n\n        <div component=\"post/content\" class=\"content\">\n            " + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['content'] : null)) + 
          "\n        </div>\n\n        <small class=\"topic-category\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['category'] != null) ? context['bestPosts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted-in, " + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['category'] != null) ? context['bestPosts'][key0]['category']['name'] : null)) + 
          "]]</a></small>\n\n        " + 
          (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['isMainPost'] : null) ?
            "\n        " + 
              (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null && context['bestPosts'][key0]['topic']['tags'] != null) ? context['bestPosts'][key0]['topic']['tags']['length'] : null) ?
                "\n        <span class=\"tag-list\">\n            " + 
                  iter(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null) ? context['bestPosts'][key0]['topic']['tags'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n            <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/tags/" + 
                      __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null && context['bestPosts'][key0]['topic']['tags'] != null && context['bestPosts'][key0]['topic']['tags'][key1] != null) ? context['bestPosts'][key0]['topic']['tags'][key1]['valueEncoded'] : null)) + 
                      "\"><span class=\"tag tag-item tag-class-" + 
                      __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null && context['bestPosts'][key0]['topic']['tags'] != null && context['bestPosts'][key0]['topic']['tags'][key1] != null) ? context['bestPosts'][key0]['topic']['tags'][key1]['class'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null && context['bestPosts'][key0]['topic']['tags'] != null && context['bestPosts'][key0]['topic']['tags'][key1] != null) ? context['bestPosts'][key0]['topic']['tags'][key1]['valueEscaped'] : null)) + 
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
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['user'] != null) ? context['bestPosts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['user'] : null), "28px", guard((context != null) ? context['true'] : null), "user-img not-responsive"])) + 
          "</a>\n\n            <div class=\"post-author\">\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['user'] != null) ? context['bestPosts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['user'] != null) ? context['bestPosts'][key0]['user']['displayname'] : null)) + 
          "</a><br />\n                <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n            </div>\n        </div>\n    </div>\n</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'latestPosts': function latestPosts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['latestPosts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li component=\"post\" class=\"posts-list-item row" + 
          (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null) ? context['latestPosts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null) ? context['latestPosts'][key0]['topic']['scheduled'] : null) ?
            " scheduled" :
            "") + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['uid'] : null)) + 
          "\">\n    <div class=\"col-lg-11 col-sm-10 col-9 post-body\">\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['pid'] : null)) + 
          "\">\n            " + 
          (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['isMainPost'] : null) ?
            "" :
            "RE: ") + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null) ? context['latestPosts'][key0]['topic']['title'] : null)) + 
          "\n        </a>\n\n        <div component=\"post/content\" class=\"content\">\n            " + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['content'] : null)) + 
          "\n        </div>\n\n        <small class=\"topic-category\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['category'] != null) ? context['latestPosts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted-in, " + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['category'] != null) ? context['latestPosts'][key0]['category']['name'] : null)) + 
          "]]</a></small>\n\n        " + 
          (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['isMainPost'] : null) ?
            "\n        " + 
              (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null && context['latestPosts'][key0]['topic']['tags'] != null) ? context['latestPosts'][key0]['topic']['tags']['length'] : null) ?
                "\n        <span class=\"tag-list\">\n            " + 
                  iter(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null) ? context['latestPosts'][key0]['topic']['tags'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n            <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/tags/" + 
                      __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null && context['latestPosts'][key0]['topic']['tags'] != null && context['latestPosts'][key0]['topic']['tags'][key1] != null) ? context['latestPosts'][key0]['topic']['tags'][key1]['valueEncoded'] : null)) + 
                      "\"><span class=\"tag tag-item tag-class-" + 
                      __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null && context['latestPosts'][key0]['topic']['tags'] != null && context['latestPosts'][key0]['topic']['tags'][key1] != null) ? context['latestPosts'][key0]['topic']['tags'][key1]['class'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null && context['latestPosts'][key0]['topic']['tags'] != null && context['latestPosts'][key0]['topic']['tags'][key1] != null) ? context['latestPosts'][key0]['topic']['tags'][key1]['valueEscaped'] : null)) + 
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
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['user'] != null) ? context['latestPosts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['user'] : null), "28px", guard((context != null) ? context['true'] : null), "user-img not-responsive"])) + 
          "</a>\n\n            <div class=\"post-author\">\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['user'] != null) ? context['latestPosts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['user'] != null) ? context['latestPosts'][key0]['user']['displayname'] : null)) + 
          "</a><br />\n                <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n            </div>\n        </div>\n    </div>\n</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
