
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
    return "<a class=\"nav-link\" data-bs-toggle=\"dropdown\" href=\"" + 
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
      "/chats\"><i class=\"fa fa-comments\"></i> [[modules:chat.see-all]]</a>\n\t\t</div>\n\t</li>\n</ul>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
