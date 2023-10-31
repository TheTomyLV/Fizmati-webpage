
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
      "\n\t\t</div>\n\t</div>\n\n" + 
      (guard((context != null && context['sso'] != null) ? context['sso']['length'] : null) ?
        "<div>" :
        "") + 
      "\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3 col-sm-4\">\n\t\t\t<div class=\"account-picture-block text-center\">\n\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t<div class=\"col-12 hidden-xs\">\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['picture'] : null) ?
        "\n\t\t\t\t\t\t<img id=\"user-current-picture\" class=\"avatar avatar-rounded\" style=\"--avatar-size: 128px;\" src=\"" + 
          __escape(guard((context != null) ? context['picture'] : null)) + 
          "\" />\n\t\t\t\t\t\t" :
        "\n\t\t\t\t\t\t<div class=\"avatar avatar-rounded\" style=\"background-color: " + 
          __escape(guard((context != null) ? context['icon:bgColor'] : null)) + 
          "; --avatar-size: 128px;\">" + 
          __escape(guard((context != null) ? context['icon:text'] : null)) + 
          "</div>\n\t\t\t\t\t\t") + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-group mb-3\">\n\t\t\t\t\t" + 
      (guard((context != null) ? context['allowProfilePicture'] : null) ?
        "\n\t\t\t\t\t<a component=\"profile/change/picture\" href=\"#\" class=\"list-group-item\">[[user:change-picture]]</a>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null) ? context['username:disableEdit'] : null) ?
        "" :
        "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/username\" class=\"list-group-item\">[[user:change-username]]</a>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null) ? context['email:disableEdit'] : null) ?
        "" :
        "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/email\" class=\"list-group-item\">[[user:change-email]]</a>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null) ? context['canChangePassword'] : null) ?
        "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/password\" class=\"list-group-item\">[[user:change-password]]</a>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t" + 
      compiled.blocks['editButtons'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['requireEmailConfirmation'] : null) ?
        "\n\t\t\t\t" + 
          (guard((context != null) ? context['email'] : null) ?
            "\n\t\t\t\t" + 
              (guard((context != null) ? context['isSelf'] : null) ?
                "\n\t\t\t\t<a id=\"confirm-email\" href=\"#\" class=\"btn btn-warning " + 
                  (guard((context != null) ? context['email:confirmed'] : null) ?
                    "hide" :
                    "") + 
                  "\">[[user:confirm-email]]</a><br/><br/>\n\t\t\t\t" :
                "") + 
              "\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null) ? context['allowAccountDelete'] : null) ?
        "\n\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "\n\t\t\t\t<a id=\"deleteAccountBtn\" href=\"#\" class=\"btn btn-danger\">[[user:delete-account]]</a><br/><br/>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"" + 
      (guard((context != null && context['sso'] != null) ? context['sso']['length'] : null) ?
        "col-md-5 col-sm-4" :
        "col-md-9 col-sm-8") + 
      "\">\n\t\t\t<form role=\"form\" component=\"profile/edit/form\">\n\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t<label class=\"form-label fw-bold\" for=\"fullname\">[[user:fullname]]</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"fullname\" name=\"fullname\" placeholder=\"[[user:fullname]]\" value=\"" + 
      __escape(guard((context != null) ? context['fullname'] : null)) + 
      "\">\n\t\t\t\t</div>\n\t\t\t\t" + 
      (guard((context != null) ? context['allowWebsite'] : null) ?
        "\n\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t<label class=\"form-label fw-bold\" for=\"website\">[[user:website]]</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"website\" name=\"website\" placeholder=\"http://...\" value=\"" + 
          __escape(guard((context != null) ? context['website'] : null)) + 
          "\">\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t<label class=\"form-label fw-bold\" for=\"location\">[[user:location]]</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"location\" name=\"location\" placeholder=\"[[user:location]]\" value=\"" + 
      __escape(guard((context != null) ? context['location'] : null)) + 
      "\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t<label class=\"form-label fw-bold\" for=\"birthday\">[[user:birthday]]</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"date\" id=\"birthday\" name=\"birthday\" value=\"" + 
      __escape(guard((context != null) ? context['birthday'] : null)) + 
      "\" placeholder=\"mm/dd/yyyy\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t<label class=\"form-label fw-bold\" for=\"groupTitle\">[[user:grouptitle]]</label>\n\n\t\t\t\t\t<select class=\"form-select\" id=\"groupTitle\" name=\"groupTitle\" " + 
      (guard((context != null) ? context['allowMultipleBadges'] : null) ?
        " size=\"" + 
          __escape(guard((context != null) ? context['groupSelectSize'] : null)) + 
          "\" multiple" :
        "") + 
      ">\n\t\t\t\t\t\t<option value=\"\">[[user:no-group-title]]</option>\n\t\t\t\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</select>\n\t\t\t\t\t" + 
      (guard((context != null) ? context['allowMultipleBadges'] : null) ?
        "\n\t\t\t\t\t<span>[[user:group-order-help]]</span>\n\t\t\t\t\t<i role=\"button\" component=\"group/order/up\" class=\"fa fa-chevron-up\"></i> <i role=\"button\" component=\"group/order/down\" class=\"fa fa-chevron-down\"></i>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t</div>\n\n\t\t\t\t" + 
      (guard((context != null) ? context['allowAboutMe'] : null) ?
        "\n\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t<label class=\"form-label fw-bold\" for=\"aboutme\">[[user:aboutme]]</label> <small><label id=\"aboutMeCharCountLeft\"></label></small>\n\t\t\t\t\t<textarea class=\"form-control\" id=\"aboutme\" name=\"aboutme\" rows=\"5\">" + 
          __escape(guard((context != null) ? context['aboutme'] : null)) + 
          "</textarea>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null) ? context['allowSignature'] : null) ?
        "\n\t\t\t\t" + 
          (guard((context != null) ? context['disableSignatures'] : null) ?
            "" :
            "\n\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t<label class=\"form-label fw-bold\" for=\"signature\">[[user:signature]]</label> <small><label id=\"signatureCharCountLeft\"></label></small>\n\t\t\t\t\t<textarea class=\"form-control\" id=\"signature\" name=\"signature\" rows=\"5\">" + 
              __escape(guard((context != null) ? context['signature'] : null)) + 
              "</textarea>\n\t\t\t\t</div>\n\t\t\t\t") + 
          "\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t<a id=\"submitBtn\" href=\"#\" class=\"btn btn-primary\">[[global:save-changes]]</a>\n\t\t\t</form>\n\n\t\t\t<hr class=\"visible-xs visible-sm\"/>\n\t\t</div>\n\n\t\t" + 
      (guard((context != null && context['sso'] != null) ? context['sso']['length'] : null) ?
        "\n\t\t<div class=\"col-md-4 col-sm-4\">\n\t\t\t<label>[[user:sso.title]]</label>\n\t\t\t<div class=\"list-group\">\n\t\t\t\t" + 
          compiled.blocks['sso'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</div>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\t</div>\n" + 
      (guard((context != null && context['sso'] != null) ? context['sso']['length'] : null) ?
        "</div>" :
        "") + 
      "\n\n</div>";
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
    'editButtons': function editButtons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['editButtons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null && context['editButtons'] != null && context['editButtons'][key0] != null) ? context['editButtons'][key0]['link'] : null)) + 
          "\" class=\"list-group-item\">" + 
          __escape(guard((context != null && context['editButtons'] != null && context['editButtons'][key0] != null) ? context['editButtons'][key0]['text'] : null)) + 
          "</a>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitleEnabled'] : null) ?
            "\n\t\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
              "\" " + 
              (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['selected'] : null) ?
                "selected" :
                "") + 
              ">" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitle'] : null)) + 
              "</option>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sso': function sso(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sso'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['deauthUrl'] : null) ?
            "\n\t\t\t\t\t<a data-component=\"" + 
              __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['component'] : null)) + 
              "\" class=\"btn btn-outline-secondary btn-sm float-end\" href=\"" + 
              __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['deauthUrl'] : null)) + 
              "\">[[user:sso.dissociate]]</a>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t<a data-component=\"" + 
          __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['component'] : null)) + 
          "\" href=\"" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['url'] : null) ?
            __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['url'] : null)) :
            "#") + 
          "\" target=\"" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['associated'] : null) ?
            "_blank" :
            "_top") + 
          "\">\n\t\t\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['icon'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['icon'] : null)) + 
              "\"></i>" :
            "") + 
          "\n\t\t\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['associated'] : null) ?
            "[[user:sso.associated]]" :
            "[[user:sso.not-associated]]") + 
          "\n\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['name'] : null)) + 
          "\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
