
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
    return "<!DOCTYPE html>\n<html lang=\"" + 
      __escape(helper(context, helpers, 'localeToHTML', [guard((context != null) ? context['userLang'] : null), guard((context != null) ? context['defaultLang'] : null)])) + 
      "\" " + 
      (guard((context != null) ? context['languageDirection'] : null) ?
        "data-dir=\"" + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          "\" style=\"direction: " + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          ";\"" :
        "") + 
      ">\n<head>\n\t<title>" + 
      __escape(guard((context != null) ? context['browserTitle'] : null)) + 
      "</title>\n\t" + 
      compiled.blocks['metaTags'](helpers, context, guard, iter, helper) + 
      "\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/client" + 
      (guard((context != null) ? context['bootswatchSkin'] : null) ?
        "-" + 
          __escape(guard((context != null) ? context['bootswatchSkin'] : null)) :
        "") + 
      ((guard((context != null) ? context['languageDirection'] : null) == "rtl") ?
        "-rtl" :
        "") + 
      ".css?" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
      "\" />\n\t" + 
      compiled.blocks['linkTags'](helpers, context, guard, iter, helper) + 
      "\n\n\t<script>\n\t\tvar config = JSON.parse('" + 
      guard((context != null) ? context['configJSON'] : null) + 
      "');\n\t\tvar app = {\n\t\t\tuser: JSON.parse('" + 
      guard((context != null) ? context['userJSON'] : null) + 
      "')\n\t\t};\n\n\t\tdocument.documentElement.style.setProperty('--panel-offset', `${localStorage.getItem('panelOffset') || 0}px`);\n\t</script>\n\n\t" + 
      (guard((context != null) ? context['useCustomHTML'] : null) ?
        "\n\t" + 
          guard((context != null) ? context['customHTML'] : null) + 
          "\n\t" :
        "") + 
      "\n\t" + 
      (guard((context != null) ? context['useCustomCSS'] : null) ?
        "\n\t<style>" + 
          guard((context != null) ? context['customCSS'] : null) + 
          "</style>\n\t" :
        "") + 
      "\n</head>\n\n<body class=\"" + 
      __escape(guard((context != null) ? context['bodyClass'] : null)) + 
      " skin-" + 
      (guard((context != null) ? context['bootswatchSkin'] : null) ?
        __escape(guard((context != null) ? context['bootswatchSkin'] : null)) :
        "noskin") + 
      "\">\n\t<nav id=\"menu\" class=\"slideout-menu hidden\">\n\t\t<section class=\"menu-section\" data-section=\"navigation\">\n\t<ul class=\"menu-section-list text-bg-dark\"></ul>\n</section>\n\n\n\t</nav>\n\t<nav id=\"chats-menu\" class=\"slideout-menu hidden\">\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<ul class=\"nav nav-pills\">\n\t<li class=\"nav-item\">\n\t\t<a class=\"nav-link\" href=\"#\" data-bs-target=\"#notifications\" data-bs-toggle=\"tab\"><span class=\"counter unread-count\" component=\"notifications/icon\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
          "\"></span> <i class=\"fa fa-fw fa-bell\"></i></a>\n\t</li>\n\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\n\t<li class=\"nav-item\">\n\t\t<a class=\"nav-link\" href=\"#\" data-bs-target=\"#chats\" data-bs-toggle=\"tab\"><i class=\"counter unread-count\" component=\"chat/icon\" data-content=\"" + 
              __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
              "\"></i> <i class=\"fa fa-fw fa-comment\"></i></a>\n\t</li>\n\t") + 
          "\n\t<li class=\"nav-item\">\n\t\t<a class=\"nav-link active\" href=\"#\" data-bs-target=\"#profile\" data-bs-toggle=\"tab\">\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "24px", guard((context != null) ? context['true'] : null), "user-icon"])) + 
          "\n\t\t\t<i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
          "\"></i>\n\t\t</a>\n\t</li>\n</ul>\n\n<div class=\"tab-content\">\n\t<div class=\"tab-pane fade show active\" id=\"profile\">\n\t\t<section class=\"menu-section\" data-section=\"profile\">\n\t\t\t<ul class=\"menu-section-list dropdown-menu show text-bg-dark w-100 border-0\" component=\"header/usercontrol\"></ul>\n\t\t</section>\n\t</div>\n\t<div class=\"tab-pane fade\" id=\"notifications\">\n\t\t<section class=\"menu-section text-bg-dark\" data-section=\"notifications\">\n\t\t\t<ul class=\"menu-section-list notification-list-mobile\" component=\"notifications/list\"></ul>\n\t\t\t<p class=\"menu-section-list\"><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/notifications\">[[notifications:see-all]]</a></p>\n\t\t</section>\n\t</div>\n\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\n\t<div class=\"tab-pane fade\" id=\"chats\">\n\t\t<section class=\"menu-section text-bg-dark\" data-section=\"chats\">\n\t\t\t<ul class=\"menu-section-list chat-list\" component=\"chat/list\">\n\t\t\t\t<a class=\"navigation-link\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/chats\">[[modules:chat.see-all]]</a>\n\t\t\t</ul>\n\t\t</section>\n\t</div>\n\t") + 
          "\n</div>\n" :
        "") + 
      "\n\t</nav>\n\n\t<main id=\"panel\" class=\"slideout-panel\" style=\"min-height: calc(100vh - 20px); background: url('" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/plugins/nodebb-theme-fizmati/images/background grid.svg');transition-duration: 0ms; background-position-x: -50px\">\n\t\t<div style=\"backdrop-filter: blur(10px); min-height: calc(100vh - 20px);\">\n\t\t<nav class=\"navbar sticky-top navbar-expand-lg bg-light header border-bottom py-0\" id=\"header-menu\" component=\"navbar\">\n\t\t\t<div class=\"container justify-content-start flex-nowrap\">\n\t\t\t\t\t\t\t<div class=\"d-flex align-items-center me-auto\" style=\"min-width: 0px;\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggler border-0\" id=\"mobile-menu\">\n\t\t\t\t\t<i class=\"fa fa-lg fa-fw fa-bars unread-count\" ></i>\n\t\t\t\t\t<span component=\"unread/icon\" class=\"notification-icon fa fa-fw fa-book unread-count\" data-content=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['mobileUnread'] : null)) + 
      "\" data-unread-url=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['unreadUrl'] : null)) + 
      "\"></span>\n\t\t\t\t</button>\n\t\t\t\t<div class=\"d-inline-flex align-items-center\" style=\"min-width: 0px;\">\n\t\t\t\t\t" + 
      (guard((context != null) ? context['brand:logo'] : null) ?
        "\n\t\t\t\t\t<a class=\"navbar-brand\" href=\"" + 
          (guard((context != null) ? context['brand:logo:url'] : null) ?
            __escape(guard((context != null) ? context['brand:logo:url'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/") + 
          "\">\n\t\t\t\t\t\t<img alt=\"" + 
          __escape(guard((context != null) ? context['brand:logo:alt'] : null)) + 
          "\" class=\"" + 
          __escape(guard((context != null) ? context['brand:logo:display'] : null)) + 
          " forum-logo d-inline-block align-text-bottom\" src=\"" + 
          __escape(guard((context != null) ? context['brand:logo'] : null)) + 
          "?" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
          "\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null) ?
        "\n\t\t\t\t\t<a class=\"navbar-brand text-truncate\" href=\"" + 
          (guard((context != null) ? context['title:url'] : null) ?
            __escape(guard((context != null) ? context['title:url'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/") + 
          "\">\n\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "\n\t\t\t\t\t</a>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
        "\n\t\t\t<div class=\"navbar-search hidden\">\n\t\t\t\t<form action=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/search\" method=\"GET\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-search fa-fw\" title=\"[[global:header.search]]\"></i></button>\n\t\t\t\t\t<input autocomplete=\"off\" type=\"text\" class=\"form-control hidden\" name=\"term\" placeholder=\"[[global:search]]\"/>\n\t\t\t\t\t<button class=\"btn btn-primary hidden\" type=\"submit\"></button>\n\t\t\t\t\t<input type=\"text\" class=\"hidden\" name=\"in\" value=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['searchDefaultInQuick'] : null)) + 
          "\" />\n\t\t\t\t</form>\n\t\t\t\t<div class=\"quick-search-container dropdown-menu d-block mt-2 hidden\">\n\t\t\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n\t\t\t<button type=\"button\" class=\"navbar-toggler border-0\" id=\"mobile-chats\">\n\t\t\t\t<span component=\"notifications/icon\" class=\"notification-icon fa fa-fw fa-bell-o unread-count\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
          "\"></span>\n\t\t\t\t<span component=\"chat/icon\" class=\"notification-icon fa fa-fw fa-comments unread-count\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
          "\"></span>\n\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "32px", guard((context != null) ? context['true'] : null)])) + 
          "\n\t\t\t</button>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t<div component=\"navbar/title\" class=\"visible-xs hidden\">\n\t\t\t\t<span></span>\n\t\t\t</div>\n\n\t\t\t<div id=\"nav-dropdown\" class=\"collapse navbar-collapse d-none d-lg-block\">\n\t\t\t\t<ul id=\"main-nav\" class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n\t\t\t\t\t" + 
      compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"navbar-nav mb-2 mb-lg-0 hidden-xs\">\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"#\" id=\"reconnect\" class=\"nav-link hide\" title=\"[[global:reconnecting-message, " + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
      "]]\">\n\t\t\t\t\t\t\t<i class=\"fa fa-check\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
        "\n\t\t\t\t<div class=\"navbar-nav mb-2 mb-lg-0 position-relative\">\n\t\t\t\t\t<form component=\"search/form\" id=\"search-form\" class=\"d-flex justify-content-end align-items-center\" role=\"search\" method=\"GET\">\n\t<div component=\"search/fields\" class=\"hidden\" id=\"search-fields\">\n\t\t<div class=\"input-group flex-nowrap\">\n\t\t\t<input autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\">\n\n\t\t\t<button href=\"#\" class=\"btn btn-outline-secondary\">\n\t\t\t\t<i class=\"fa fa-gears fa-fw advanced-search-link\"></i>\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div id=\"quick-search-container\" class=\"quick-search-container dropdown-menu d-block mt-2 hidden\">\n\t\t\t<div class=\"form-check filter-category mb-2 ms-4\">\n\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" checked>\n\t\t\t\t<label class=\"form-check-label name\"></label>\n\t\t\t</div>\n\n\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-outline-secondary hide\">[[global:search]]</button>\n\t</div>\n\n\t<div id=\"\" class=\"nav-item\"><a component=\"search/button\" id=\"search-button\" href=\"#\" class=\"nav-link\"><i class=\"fa fa-search fa-fw\" title=\"Search\"></i></a></div>\n</form>\n\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null) ? context['maintenanceHeader'] : null) ?
        "\n\t\t\t\t<ul class=\"navbar-nav me-0 mb-2 mb-lg-0\"></ul>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/login\">\n\t\t\t\t\t\t\t<i class=\"fa fa-sign-in fa-fw d-block d-sm-none\"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t" :
        "\n\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\n\t\t\t\t<ul id=\"logged-in-menu\" class=\"navbar-nav me-0 mb-2 mb-lg-0 align-items-center\">\n\t\t\t\t\t<li class=\"nav-item notifications dropdown d-none d-sm-block\" component=\"notifications\" title=\"[[global:header.notifications]]\">\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/notifications\" class=\"nav-link\" data-bs-toggle=\"dropdown\" id=\"notif_dropdown\" data-ajaxify=\"false\" role=\"button\">\n\t<i component=\"notifications/icon\" class=\"fa fa-fw " + 
              (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null) ?
                "fa-bell" :
                "fa-bell-o") + 
              " unread-count\" data-content=\"" + 
              __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
              "\"></i>\n</a>\n<ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"notif_dropdown\">\n\t<li>\n\t\t<ul component=\"notifications/list\" class=\"notification-list\">\n\t\t\t<li class=\"loading-text\">\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:notifications.loading]]</a>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n\t<li class=\"notif-dropdown-link\">\n\t\t<div class=\"btn-group d-flex justify-content-center\">\n\t\t\t<a role=\"button\" href=\"#\" class=\"btn btn-light mark-all-read\"><i class=\"fa fa-check-double\"></i> [[notifications:mark-all-read]]</a>\n\t\t\t<a class=\"btn btn-light\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/notifications\"><i class=\"fa fa-list\"></i> [[notifications:see-all]]</a>\n\t\t</div>\n\t</li>\n</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t" + 
              (guard((context != null) ? context['canChat'] : null) ?
                "\n\t\t\t\t\t<li class=\"nav-item chats dropdown\" title=\"[[global:header.chats]]\">\n\t\t\t\t\t\t<a class=\"nav-link\" data-bs-toggle=\"dropdown\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
                  "/chats\" id=\"chat_dropdown\" component=\"chat/dropdown\" data-ajaxify=\"false\" role=\"button\">\n\t<i component=\"chat/icon\" class=\"fa " + 
                  (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null) ?
                    "fa-comment" :
                    "fa-comment-o") + 
                  " fa-fw unread-count\" data-content=\"" + 
                  __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
                  "\"></i> <span class=\"d-inline d-sm-none\">[[global:header.chats]]</span>\n</a>\n<ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"chat_dropdown\">\n\t<li>\n\t\t<ul component=\"chat/list\" class=\"chat-list chats-list\">\n\t\t\t<li class=\"loading-text\">\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:chats.loading]]</a>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n\t<li class=\"notif-dropdown-link\">\n\t\t<div class=\"btn-group d-flex justify-content-center\">\n\t\t\t<a class=\"btn btn-light mark-all-read\" href=\"#\" component=\"chats/mark-all-read\"><i class=\"fa fa-check-double\"></i> [[modules:chat.mark-all-read]]</a>\n\t\t\t<a class=\"btn btn-light\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
                  "/chats\"><i class=\"fa fa-comments\"></i> [[modules:chat.see-all]]</a>\n\t\t</div>\n\t</li>\n</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
                "") + 
              "\n\n\t\t\t\t\t<li id=\"user_label\" class=\"nav-item dropdown\" title=\"[[global:header.profile]]\">\n\t<label for=\"user-control-list-check\" class=\"\" data-bs-toggle=\"dropdown\" id=\"user_dropdown\" role=\"button\" component=\"header/avatar\">\n\t\t" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "32px", guard((context != null) ? context['true'] : null)])) + 
              "\n\t\t<span id=\"user-header-name\" class=\"d-block d-sm-none\">" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "</span>\n\t</label>\n\t<input type=\"checkbox\" class=\"hidden\" id=\"user-control-list-check\" aria-hidden=\"true\">\n\t<ul id=\"user-control-list\" component=\"header/usercontrol\" class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"user_dropdown\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" component=\"header/profilelink\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "\">\n\t\t\t\t<i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
              "\"></i> <span component=\"header/username\">" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t\t<li><h6 class=\"dropdown-header\">[[global:status]]</h6></li>\n\t\t<li>\n\t\t\t<a href=\"#\" class=\"dropdown-item user-status " + 
              (guard((context != null && context['user'] != null) ? context['user']['online'] : null) ?
                "selected" :
                "") + 
              "\" data-status=\"online\">\n\t\t\t\t<i class=\"fa fa-fw fa-circle status online\"></i><span> [[global:online]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a href=\"#\" class=\"dropdown-item user-status " + 
              (guard((context != null && context['user'] != null) ? context['user']['away'] : null) ?
                "selected" :
                "") + 
              "\" data-status=\"away\">\n\t\t\t\t<i class=\"fa fa-fw fa-circle status away\"></i><span> [[global:away]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a href=\"#\" class=\"dropdown-item user-status " + 
              (guard((context != null && context['user'] != null) ? context['user']['dnd'] : null) ?
                "selected" :
                "") + 
              "\" data-status=\"dnd\">\n\t\t\t\t<i class=\"fa fa-fw fa-circle status dnd\"></i><span> [[global:dnd]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a href=\"#\" class=\"dropdown-item user-status " + 
              (guard((context != null && context['user'] != null) ? context['user']['offline'] : null) ?
                "selected" :
                "") + 
              "\" data-status=\"offline\">\n\t\t\t\t<i class=\"fa fa-fw fa-circle status offline\"></i><span> [[global:invisible]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/bookmarks\">\n\t\t\t\t<i class=\"fa fa-fw fa-bookmark\"></i> <span>[[user:bookmarks]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" component=\"header/profilelink/edit\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/edit\">\n\t\t\t\t<i class=\"fa fa-fw fa-edit\"></i> <span>[[user:edit-profile]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" component=\"header/profilelink/settings\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/settings\">\n\t\t\t\t<i class=\"fa fa-fw fa-gear\"></i> <span>[[user:settings]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t" + 
              (guard((context != null) ? context['showModMenu'] : null) ?
                "\n\t\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t\t<li><h6 class=\"dropdown-header\">[[pages:moderator-tools]]</h6></li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/flags\">\n\t\t\t\t<i class=\"fa fa-fw fa-flag\"></i> <span>[[pages:flagged-content]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/post-queue\">\n\t\t\t\t<i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:post-queue]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t" + 
                  (guard((context != null) ? context['registrationQueueEnabled'] : null) ?
                    "\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" href=\"" + 
                      __escape(guard((context != null) ? context['relative_path'] : null)) + 
                      "/registration-queue\">\n\t\t\t\t<i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:registration-queue]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t" :
                    "") + 
                  "\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/ip-blacklist\">\n\t\t\t\t<i class=\"fa fa-fw fa-ban\"></i> <span>[[pages:ip-blacklist]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t" :
                "\n\t\t" + 
                  (guard((context != null) ? context['postQueueEnabled'] : null) ?
                    "\n\t\t<li>\n\t\t\t<a class=\"dropdown-item\" href=\"" + 
                      __escape(guard((context != null) ? context['relative_path'] : null)) + 
                      "/post-queue\">\n\t\t\t\t<i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:post-queue]]</span>\n\t\t\t</a>\n\t\t</li>\n\t\t" :
                    "") + 
                  "\n\t\t") + 
              "\n\n\t\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t\t<li component=\"user/logout\">\n\t\t\t<form method=\"post\" action=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/logout\">\n\t\t\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
              "\">\n\t\t\t\t<input type=\"hidden\" name=\"noscript\" value=\"true\">\n\t\t\t\t<button type=\"submit\" class=\"dropdown-item\">\n\t\t\t\t\t<i class=\"fa fa-fw fa-sign-out\"></i><span> [[global:logout]]</span>\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</li>\n\t</ul>\n</li>\n\t\t\t\t</ul>\n\t\t\t\t" :
            "\n\t\t\t\t<ul id=\"logged-out-menu\" class=\"navbar-nav me-0 mb-2 mb-lg-0 align-items-center\">\n\t\t\t\t\t" + 
              (guard((context != null) ? context['allowRegistration'] : null) ?
                "\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/register\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil fa-fw fa-solid\"></i>\n\t\t\t\t\t\t\t<span>[[global:register]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/login\">\n\t\t\t\t\t\t\t<i class=\"fa fa-sign-in fa-fw fa-solid\"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t") + 
          "\n\t\t\t\t") + 
      "\n\t\t\t</div>\n\n\t\t\t</div>\n\t\t</nav>\n\t\t\n\t\t<script>\n\t\t\tconst rect = document.getElementById('header-menu').getBoundingClientRect();\n\t\t\tconst offset = Math.max(0, rect.bottom);\n\t\t\tdocument.documentElement.style.setProperty('--panel-offset', offset + `px`);\n\t\t</script>\n\t\t<div class=\"container pt-3\" id=\"content\">\n\t\t<noscript>\n    <div class=\"alert alert-danger\">\n        <p>\n            Your browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you have been placed in <strong>read-only mode</strong>.\n        </p>\n        <p>\n            Please download a browser that supports JavaScript, or enable it if it's disabled (i.e. NoScript).\n        </p>\n    </div>\n</noscript>\n\t\t" + 
      (guard((context != null) ? context['noScriptMessage'] : null) ?
        "\n<noscript>\n    <div class=\"alert alert-info\">\n        <p>\n            " + 
          __escape(guard((context != null) ? context['noScriptMessage'] : null)) + 
          "\n        </p>\n    </div>\n</noscript>\n" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    'metaTags': function metaTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['metaTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildMetaTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
    'linkTags': function linkTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['linkTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildLinkTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t" + 
          (helper(context, helpers, 'displayMenuItem', [context, index]) ?
            "\n\t\t\t\t\t<li class=\"nav-item " + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " dropdown" :
                "") + 
              "\" title=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['title'] : null)) + 
              "\">\n\t\t\t\t\t\t<a class=\"nav-link navigation-link " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "dropdown-toggle" :
                "") + 
              "\"\n\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" " :
                " href=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
                  "\"") + 
              " " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null) ?
                "id=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
                  "\"" :
                "") + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['targetBlank'] : null) ?
                " target=\"_blank\"" :
                "") + 
              ">\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
                "\n\t\t\t\t\t\t\t<i class=\"fa fa-fw " + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) + 
                  "\" data-content=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
                  "\"></i>\n\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null) ?
                "\n\t\t\t\t\t\t\t<span class=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['textClass'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null)) + 
                  "</span>\n\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "\n\t\t\t\t\t\t\t<i class=\"fa fa-caret-down\"></i>\n\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdownContent'] : null)) + 
                  "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
