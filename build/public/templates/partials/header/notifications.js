
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
    return "<a href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/notifications\" class=\"nav-link\" data-bs-toggle=\"dropdown\" id=\"notif_dropdown\" data-ajaxify=\"false\" role=\"button\">\n\t<i component=\"notifications/icon\" class=\"fa fa-fw " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null) ?
        "fa-bell" :
        "fa-bell-o") + 
      " unread-count\" data-content=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
      "\"></i>\n</a>\n<ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"notif_dropdown\">\n\t<li>\n\t\t<ul component=\"notifications/list\" class=\"notification-list\">\n\t\t\t<li class=\"loading-text\">\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:notifications.loading]]</a>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n\t<li class=\"notif-dropdown-link\">\n\t\t<div class=\"btn-group d-flex justify-content-center\">\n\t\t\t<a role=\"button\" href=\"#\" class=\"btn btn-light mark-all-read\"><i class=\"fa fa-check-double\"></i> [[notifications:mark-all-read]]</a>\n\t\t\t<a class=\"btn btn-light\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/notifications\"><i class=\"fa fa-list\"></i> [[notifications:see-all]]</a>\n\t\t</div>\n\t</li>\n</ul>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
