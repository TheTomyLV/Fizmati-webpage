
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
    return (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
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
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
