
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
    return "<div data-widget-area=\"header\">\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"row\">\n\t<div class=\"topic " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n\t\t<div class=\"topic-header sticky-top\">\n\t\t\t<h1 component=\"post/header\" class=\"\" itemprop=\"name\">\n\t\t\t\t<span class=\"topic-title\">\n\t\t\t\t\t<span component=\"topic/labels\" class=\"d-inline-flex gap-2 align-items-center\">\n\t\t\t\t\t\t<i component=\"topic/scheduled\" class=\"fa fa-clock-o " + 
      (guard((context != null) ? context['scheduled'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[topic:scheduled]]\"></i>\n\t\t\t\t\t\t<i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
      ((guard((context != null) ? context['scheduled'] : null) || !guard((context != null) ? context['pinned'] : null)) ?
        "hidden" :
        "") + 
      "\" title=\"" + 
      (guard((context != null) ? context['pinExpiry'] : null) ?
        "[[topic:pinned-with-expiry, " + 
          __escape(guard((context != null) ? context['pinExpiryISO'] : null)) + 
          "]]" :
        "[[topic:pinned]]") + 
      "\"></i>\n\t\t\t\t\t\t<i component=\"topic/locked\" class=\"fa fa-lock " + 
      (guard((context != null) ? context['locked'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[topic:locked]]\"></i>\n\t\t\t\t\t\t<i class=\"fa fa-arrow-circle-right " + 
      (guard((context != null) ? context['oldCid'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) ?
        "[[topic:moved-from, " + 
          __escape(guard((context != null && context['oldCategory'] != null) ? context['oldCategory']['name'] : null)) + 
          "]]" :
        "[[topic:moved]]") + 
      "\"></i>\n\t\t\t\t\t\t" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</span>\n\t\t\t\t\t<span component=\"topic/title\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</span>\n\t\t\t\t</span>\n\t\t\t</h1>\n\n\t\t\t<div class=\"topic-info clearfix\">\n\t\t\t\t<div class=\"category-item d-inline-block\">\n\t\t\t\t\t" + 
      __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['category'] : null), "24px", "rounded-circle"])) + 
      "\n\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/category/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['slug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['name'] : null)) + 
      "</a>\n\t\t\t\t</div>\n\n\t\t\t\t<div data-tid=\"" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" component=\"topic/tags\" class=\"tags tag-list d-inline-block hidden-xs\">\n\t\t\t\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-inline-block hidden-xs\">\n\t\t\t\t\t<div class=\"stats text-muted\">\n\t<i class=\"fa fa-fw fa-user\" title=\"[[global:posters]]\"></i>\n\t<span title=\"" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['postercount'] : null)])) + 
      "</span>\n</div>\n<div class=\"stats text-muted\">\n\t<i class=\"fa fa-fw fa-pencil\" title=\"[[global:posts]]\"></i>\n\t<span component=\"topic/post-count\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['postcount'] : null)])) + 
      "</span>\n</div>\n<div class=\"stats text-muted\">\n\t<i class=\"fa fa-fw fa-eye\" title=\"[[global:views]]\"></i>\n\t<span title=\"" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['viewcount'] : null)])) + 
      "</span>\n</div>\n\t\t\t\t</div>\n\t\t\t\t" + 
      (guard((context != null) ? context['feeds:disableRSS'] : null) ?
        "" :
        "\n\t\t\t\t" + 
          (guard((context != null) ? context['rssFeedUrl'] : null) ?
            "<a class=\"hidden-xs\" target=\"_blank\" href=\"" + 
              __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
              "\"><i class=\"fa fa-rss-square\"></i></a>" :
            "") + 
          "\n\t\t\t\t") + 
      "\n\t\t\t\t" + 
      (guard((context != null) ? context['browsingUsers'] : null) ?
        "\n\t\t\t\t<div class=\"d-inline-block hidden-xs\">\n\t\t\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t<div class=\"topic-main-buttons float-end d-inline-block\">\n\t<span class=\"loading-indicator btn float-start hidden\" done=\"0\">\n\t\t<span class=\"hidden-xs\">[[topic:loading-more-posts]]</span> <i class=\"fa fa-refresh fa-spin\"></i>\n\t</span>\n\n\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t<button component=\"topic/mark-unread\" class=\"btn btn-sm btn-outline-secondary\" title=\"[[topic:mark-unread]]\">\n\t\t<i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"></span>\n\t</button>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\"\ndata-bs-toggle=\"tooltip\"\n\t" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "title=\"[[topic:watching]]\"" :
            "") + 
          "\n\t" + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "title=\"[[topic:not-watching]]\"" :
            "") + 
          "\n\t" + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "title=\"[[topic:ignoring]]\"" :
            "") + 
          "\n>\n\t<button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<span component=\"topic/following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-o\"></i></span>\n\n\t\t<span component=\"topic/not-following/menu\" " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-slash-o\"></i></span>\n\n\t\t<span component=\"topic/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i></span>\n\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"topic/following\">\n\t\t\t\t<span><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-bell-o\"></i> [[topic:watching]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[topic:watching.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"topic/not-following\">\n\t\t\t\t<span><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-bell-slash-o\"></i> [[topic:not-watching]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[topic:not-watching.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"topic/ignoring\">\n\t\t\t\t<span><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-eye-slash\"></i> [[topic:ignoring]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[topic:ignoring.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n" :
        "") + 
      "\n\n\t<div title=\"[[topic:sort-by]]\" class=\"btn-group bottom-sheet hidden-xs\" component=\"thread/sort\">\n\t<button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t<span><i class=\"fa fa-fw fa-sort\"></i></span></button>\n\t<ul class=\"dropdown-menu dropdown-menu-end\">\n\t\t<li><a class=\"dropdown-item\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\"><i class=\"fa fa-fw\"></i> [[topic:oldest-to-newest]]</a></li>\n\t\t<li><a class=\"dropdown-item\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\"><i class=\"fa fa-fw\"></i> [[topic:newest-to-oldest]]</a></li>\n\t\t<li><a class=\"dropdown-item\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\"><i class=\"fa fa-fw\"></i> [[topic:most-votes]]</a></li>\n\t</ul>\n</div>\n\n\n\t<div class=\"d-inline-block\">\n\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\n<div title=\"[[topic:thread-tools.title]]\" class=\"btn-group thread-tools bottom-sheet\">\n\t<button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<i class=\"fa fa-fw fa-gear\"></i>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end\"></ul>\n</div>\n" :
        "") + 
      "\n\t</div>\n\t<div component=\"topic/reply/container\" class=\"btn-group action-bar bottom-sheet " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">\r\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/compose?tid=" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" class=\"btn btn-sm btn-primary\" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-reply visible-xs-inline\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[topic:reply]]</span></a>\r\n\t<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-bs-toggle=\"dropdown\">\r\n\t\t<span class=\"caret\"></span>\r\n\t</button>\r\n\t<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\r\n\t\t<li><a class=\"dropdown-item\" href=\"#\" component=\"topic/reply-as-topic\">[[topic:reply-as-topic]]</a></li>\r\n\t</ul>\r\n</div>\r\n\r\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\r\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\r\n" + 
              (guard((context != null) ? context['locked'] : null) ?
                "\r\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\r\n" :
                "") + 
              "\r\n") + 
          "\r\n\r\n" + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "\r\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary hidden\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\r\n") + 
          "\r\n\r\n" :
        "") + 
      "\n</div>\n\n\t\t\t</div>\n\t\t</div>\n\t\t" + 
      (guard((context != null) ? context['merger'] : null) ?
        "\n\t\t<div component=\"topic/merged/message\" class=\"alert alert-info mt-3 d-flex justify-content-between flex-wrap\">\n\t<span>[[topic:merged-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null) ? context['mergeIntoTid'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['mergedIntoTitle'] : null)) + 
          "]]</span>\n\t<span>\n\t\t<a class=\"fw-bold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['username'] : null)) + 
          "</strong></a> <small class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['mergedTimestampISO'] : null)) + 
          "\"></small>\n\t</span>\n</div>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['scheduled'] : null) ?
        "" :
        "\n\t\t<div component=\"topic/deleted/message\" class=\"alert alert-warning mt-3" + 
          (guard((context != null) ? context['deleted'] : null) ?
            "" :
            " hidden") + 
          " d-flex justify-content-between flex-wrap\">\n    <span>[[topic:deleted-message]]</span>\n    <span>\n        " + 
          (guard((context != null) ? context['deleter'] : null) ?
            "\n        <a class=\"fw-bold\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['username'] : null)) + 
              "</a> <small class=\"timeago\" title=\"" + 
              __escape(guard((context != null) ? context['deletedTimestampISO'] : null)) + 
              "\"></small>\n        " :
            "") + 
          "\n    </span>\n</div>\n\t\t") + 
      "\n\n\t\t<ul component=\"topic\" class=\"posts timeline\" data-tid=\"" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\n\t\t\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n\t\t</ul>\n\n\t\t" + 
      (guard((context != null) ? context['browsingUsers'] : null) ?
        "\n\t\t<div class=\"visible-xs\">\n\t\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->\n\t\t\t<hr/>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['enableQuickReply'] : null) ?
        "\n\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "\n<div component=\"topic/quickreply/container\" class=\"clearfix quick-reply\">\n\t<div class=\"icon float-start hidden-xs\">\n\t\t<a data-uid=\"" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['uid'] : null)) + 
              "\" href=\"" + 
              (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null) ?
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null)) :
                "#") + 
              "\">\n\t\t\t" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['loggedInUser'] : null), "48px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
              "\n\t\t\t" + 
              (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null) ?
                "\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
                  __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
                  "\" title=\"[[global:" + 
                  __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
                  "]]\"></i>\n\t\t\t" :
                "") + 
              "\n\t\t</a>\n\t</div>\n\t<form method=\"post\" action=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/compose\">\n\t\t<input type=\"hidden\" name=\"tid\" value=\"" + 
              __escape(guard((context != null) ? context['tid'] : null)) + 
              "\" />\n\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
              "\" />\n\t\t<div class=\"quickreply-message\">\n\t\t\t<textarea name=\"content\" component=\"topic/quickreply/text\" class=\"form-control mousetrap\" rows=\"5\" placeholder=\"[[modules:composer.textarea.placeholder]]\"></textarea>\n\t\t\t<div class=\"imagedrop\"><div>[[topic:composer.drag-and-drop-images]]</div></div>\n\t\t</div>\n\t\t<div class=\"btn-group float-end\">\n\t\t\t<button type=\"submit\" component=\"topic/quickreply/button\" class=\"btn btn-primary\">[[topic:post-quick-reply]]</button>\n\t\t\t<button type=\"submit\" component=\"topic/quickreply/expand\" class=\"btn btn-outline-primary\" formmethod=\"get\"><i class=\"fa fa-expand\"></i></button>\n\t\t</div>\n\t</form>\n\t<form component=\"topic/quickreply/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n\t</form>\n\n</div>\n" :
            "") + 
          "\n\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n\t\t<div component=\"pagination\" class=\"pagination-container" + 
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
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t" :
        "") + 
      "\n\n\t\t<div class=\"pagination-block border border-1 text-bg-light text-center\">\n    <div class=\"progress-bar bg-info\"></div>\n    <div class=\"wrapper dropup\">\n        <i class=\"fa fa-2x fa-angle-double-up pointer fa-fw pagetop\"></i>\n\n        <a href=\"#\" class=\"dropdown-toggle d-inline-block text-decoration-none\" data-bs-toggle=\"dropdown\" data-bs-reference=\"parent\">\n            <span class=\"pagination-text\"></span>\n        </a>\n\n        <i class=\"fa fa-2x fa-angle-double-down pointer fa-fw pagebottom\"></i>\n        <ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n            <li>\n                <div class=\"row\">\n                    <div class=\"col-8 post-content\"></div>\n                    <div class=\"col-4 text-end\">\n                        <div class=\"scroller-content\">\n                            <span class=\"pointer pagetop\">[[topic:first-post]] <i class=\"fa fa-angle-double-up\"></i></span>\n                            <div class=\"scroller-container\">\n                                <div class=\"scroller-thumb\">\n                                    <span class=\"thumb-text\"></span>\n                                    <div class=\"scroller-thumb-icon\"></div>\n                                </div>\n                            </div>\n                            <span class=\"pointer pagebottom\">[[topic:last-post]] <i class=\"fa fa-angle-double-down\"></i></span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <button id=\"myNextPostBtn\" class=\"btn btn-outline-secondary form-control\" disabled>[[topic:go-to-my-next-post]]</button>\n                    </div>\n                    <div class=\"col-6\">\n                        <input type=\"number\" class=\"form-control\" id=\"indexInput\" placeholder=\"[[global:pagination.enter-index]]\">\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>\n\n\t</div>\n\t<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t\t" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n</div>\n\n<div data-widget-area=\"footer\">\n\t" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>\n\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "" :
        "\n<noscript>\n<div component=\"pagination\" class=\"pagination-container" + 
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
          iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
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
          }) + 
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
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n</noscript>\n") + 
      "\n";
  }

  compiled.blocks = {
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    },
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "<span class=\"lh-1 align-middle\">" + 
          __escape(guard(value)) + 
          "</span>";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) + 
          "\"><span class=\"tag tag-item fw-bold tag-class-" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['class'] : null)) + 
          "\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span></a>\n";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li component=\"post\" class=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            "deleted" :
            "") + 
          " " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['selfPost'] : null) ?
            "self-post" :
            "") + 
          " " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['topicOwnerPost'] : null) ?
            "topic-owner-post" :
            "") + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\" data-timestamp=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestamp'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "\" data-userslug=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['allowDupe'] : null) ?
            " data-allow-dupe=\"1\"" :
            "") + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['navigatorIgnore'] : null) ?
            " data-navigator-ignore=\"1\"" :
            "") + 
          " itemscope itemtype=\"http://schema.org/Comment\">\n\t\t\t\t\t<a component=\"post/anchor\" data-index=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\" id=\"" + 
          __escape(helper(context, helpers, 'increment', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null), "1"])) + 
          "\"></a>\n\n\t\t\t\t\t<meta itemprop=\"datePublished\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\">\n\t\t\t\t\t<meta itemprop=\"dateModified\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
          "\">\n\n\t\t\t\t\t" + 
          ((!guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) && guard((context != null && context['widgets'] != null && context['widgets']['mainpost-header'] != null) ? context['widgets']['mainpost-header']['length'] : null)) ?
            "\n<div data-widget-area=\"mainpost-header\">\n\t" + 
              iter(guard((context != null && context['widgets'] != null) ? context['widgets']['mainpost-header'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t" + 
                  __escape(guard((context != null && context['widgets'] != null && context['widgets']['mainpost-header'] != null && context['widgets']['mainpost-header'][key1] != null) ? context['widgets']['mainpost-header'][key1]['html'] : null)) + 
                  "\n\t";
              }, function alt() {
                return "";
              }) + 
              "\n</div>\n" :
            "") + 
          "\n\n<div class=\"clearfix post-header\">\n\t<div class=\"icon float-start\">\n\t\t<a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "48px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
          "\" title=\"[[global:" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
          "]]\"></i>\n\t\t</a>\n\t</div>\n\n\t<small class=\"d-flex\">\n\t\t<div class=\"d-flex align-items-center gap-1 flex-wrap w-100\">\n\t\t\t<strong class=\"text-nowrap\">\n\t\t\t\t<a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a>\n\t\t\t</strong>\n\n\t\t\t" + 
          iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['selectedGroups'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null) ?
                "\n\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/groups/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null)) + 
                  "\" class=\"badge rounded-1 text-uppercase text-truncate\" style=\"max-width: 150px;color:" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['textColor'] : null)) + 
                  ";background-color: " + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['labelColor'] : null)) + 
                  ";\"><i class=\"fa " + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null) ?
                    __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null)) + 
                      (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null) ?
                        " me-1" :
                        "") :
                    "hidden") + 
                  "\"></i><span class=\"badge-text\">" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null) ?
                    __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null)) :
                    "") + 
                  "</span></a>\n\t\t\t" :
                "") + 
              "\n\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\n\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['banned'] : null) ?
            "\n\t\t\t<span class=\"badge bg-danger\">[[user:banned]]</span>\n\t\t\t" :
            "") + 
          "\n\n\t\t\t<span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\n\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['toPid'] : null) ?
            "\n\t\t\t\t<a component=\"post/parent\" class=\"btn btn-sm btn-outline-secondary hidden-xs\" data-topid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['toPid'] : null)) + 
              "\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/post/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['toPid'] : null)) + 
              "\"><i class=\"fa fa-reply\"></i> @" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null) ? context['posts'][key0]['parent']['username'] : null) ?
                __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null) ? context['posts'][key0]['parent']['username'] : null)) :
                "[[global:guest]]") + 
              "</a>\n\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t<span>\n\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['custom_profile_info'] != null) ? context['posts'][key0]['user']['custom_profile_info']['length'] : null) ?
            "\n\t\t\t\t\t&#124;\n\t\t\t\t\t" + 
              iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['custom_profile_info'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t\t\t\t" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['custom_profile_info'] != null && context['posts'][key0]['user']['custom_profile_info'][key1] != null) ? context['posts'][key0]['user']['custom_profile_info'][key1]['content'] : null)) + 
                  "\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t\t<div class=\"d-flex align-items-center gap-1 flex-grow-1 justify-content-end\">\n\t\t\t\t<span>\n\t\t\t\t\t<i component=\"post/edit-indicator\" class=\"fa fa-pencil-square" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['posts:history'] : null) ?
            " pointer" :
            "") + 
          " edit-icon " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null) ?
            "" :
            "hidden") + 
          "\"></i>\n\n\t\t\t\t\t<span data-editor=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['userslug'] : null)) + 
          "\" component=\"post/editor\" class=\"hidden\">[[global:last-edited-by, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null)) + 
          "]] <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
          "\"></span></span>\n\n\t\t\t\t\t<span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\n\t\t\t\t\t\t<a class=\"permalink text-muted\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\"><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span></a>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t\t<span class=\"bookmarked\"><i class=\"fa fa-bookmark-o\"></i></span>\n\t\t\t</div>\n\t\t</div>\n\t</small>\n</div>\n\n<br />\n\n<div class=\"content\" component=\"post/content\" itemprop=\"text\">\n\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n</div>\n\n<div class=\"post-footer\">\n\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null) ?
            "\n\t<div component=\"post/signature\" data-uid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
              "\" class=\"post-signature\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null)) + 
              "</div>\n\t" :
            "") + 
          "\n\n\t<div class=\"clearfix\">\n\t" + 
          (guard((context != null) ? context['hideReplies'] : null) ?
            "" :
            "\n\t<a component=\"post/reply-count\" data-target-component=\"post/replies/container\" href=\"#\" class=\"threaded-replies user-select-none float-start text-muted " + 
              ((!guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['replies'] : null) || helper(context, helpers, 'shouldHideReplyContainer', [guard(value)])) ?
                "hidden" :
                "") + 
              "\">\n\t\t<span component=\"post/reply-count/avatars\" class=\"avatars d-inline-flex gap-1 align-items-top hidden-xs " + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['hasMore'] : null) ?
                "hasMore" :
                "") + 
              "\">\n\t\t\t" + 
              iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['users'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t\t<span>" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null && context['posts'][key0]['replies']['users'] != null) ? context['posts'][key0]['replies']['users'][key1] : null), "16px", guard((context != null) ? context['true'] : null), ""])) + 
                  "</span>\n\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['hasMore'] : null) ?
                "\n\t\t\t<span><i class=\"fa fa-ellipsis\"></i></span>\n\t\t\t" :
                "") + 
              "\n\t\t</span>\n\n\t\t<span class=\"replies-count small\" component=\"post/reply-count/text\" data-replies=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['count'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['text'] : null)) + 
              "</span>\n\t\t<span class=\"replies-last hidden-xs small\">[[topic:last-reply-time]] <span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['timestampISO'] : null)) + 
              "\"></span></span>\n\n\t\t<i class=\"fa fa-fw fa-chevron-right\" component=\"post/replies/open\"></i>\n\t\t<i class=\"fa fa-fw fa-chevron-down hidden\" component=\"post/replies/close\"></i>\n\t\t<i class=\"fa fa-fw fa-spin fa-spinner hidden\" component=\"post/replies/loading\"></i>\n\t</a>\n\t") + 
          "\n\n\t<small class=\"float-end\" component=\"post/actions\">\n\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\n\t\t<span class=\"post-tools\">\n\t\t\t<a component=\"post/reply\" href=\"#\" class=\"user-select-none " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "hidden") + 
          "\">[[topic:reply]]</a>\n\t\t\t<a component=\"post/quote\" href=\"#\" class=\"user-select-none " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "hidden") + 
          "\">[[topic:quote]]</a>\n\t\t</span>\n\n\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n\t\t<span class=\"votes\">\n\t\t\t<a component=\"post/upvote\" href=\"#\" class=\"" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['upvoted'] : null) ?
                "upvoted" :
                "") + 
              "\">\n\t\t\t\t<i class=\"fa fa-chevron-up\"></i>\n\t\t\t</a>\n\n\t\t\t<span component=\"post/vote-count\" data-votes=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "</span>\n\n\t\t\t" + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\n\t\t\t<a component=\"post/downvote\" href=\"#\" class=\"" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['downvoted'] : null) ?
                    "downvoted" :
                    "") + 
                  "\">\n\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\n\t\t\t</a>\n\t\t\t") + 
              "\n\t\t</span>\n\t\t") + 
          "\n\n\t\t<span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet d-inline-block " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['display_post_menu'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t<a class=\"dropdown-toggle d-block\" href=\"#\" data-bs-toggle=\"dropdown\"><i class=\"fa fa-fw fa-ellipsis-v\"></i></a>\n\t<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\"></ul>\n</span>\n\n\t</small>\n\t</div>\n\t<div component=\"post/replies/container\"></div>\n</div>\n" + 
          ((!guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) && guard((context != null && context['widgets'] != null && context['widgets']['mainpost-footer'] != null) ? context['widgets']['mainpost-footer']['length'] : null)) ?
            "\n<div data-widget-area=\"mainpost-footer\">\n\t" + 
              iter(guard((context != null && context['widgets'] != null) ? context['widgets']['mainpost-footer'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t" + 
                  __escape(guard((context != null && context['widgets'] != null && context['widgets']['mainpost-footer'] != null && context['widgets']['mainpost-footer'][key1] != null) ? context['widgets']['mainpost-footer'][key1]['html'] : null)) + 
                  "\n\t";
              }, function alt() {
                return "";
              }) + 
              "\n</div>\n" :
            "") + 
          "\n\t\t\t\t</li>\n\t\t\t\t" + 
          ((guard((context != null && context['config'] != null) ? context['config']['topicPostSort'] : null) != "most_votes") ?
            "\n\t\t\t\t" + 
              iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['events'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t\t\t<li component=\"topic/event\" class=\"timeline-event text-muted\" data-topic-event-id=\"" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['id'] : null)) + 
                  "\" data-topic-event-type=\"" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['type'] : null)) + 
                  "\">\n\t<div class=\"timeline-badge\">\n\t\t<i class=\"fa " + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['icon'] : null) ?
                    __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['icon'] : null)) :
                    "fa-circle") + 
                  "\"></i>\n\t</div>\n\t<span class=\"timeline-text\">\n\t\t" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['text'] : null)) + 
                  "\n\t</span>\n\t" + 
                  (guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) ?
                    "\n\t\t&nbsp;<span component=\"topic/event/delete\" data-topic-event-id=\"" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['id'] : null)) + 
                      "\" data-topic-event-type=\"" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['type'] : null)) + 
                      "\" class=\"timeline-text pointer\" title=\"[[topic:delete-event]]\"><i class=\"fa fa-trash\"></i></span>\n\t" :
                    "") + 
                  "\n</li>\n\n\n\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t\t" :
            "") + 
          "\n\t\t\t";
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
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['footer'] != null && context['widgets']['footer'][key0] != null) ? context['widgets']['footer'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
