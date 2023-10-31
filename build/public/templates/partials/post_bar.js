
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
    return "<div class=\"topic-main-buttons float-end d-inline-block\">\n\t<span class=\"loading-indicator btn float-start hidden\" done=\"0\">\n\t\t<span class=\"hidden-xs\">[[topic:loading-more-posts]]</span> <i class=\"fa fa-refresh fa-spin\"></i>\n\t</span>\n\n\t" + 
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
      "\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
