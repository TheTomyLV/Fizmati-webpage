
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
    return "<li id=\"user_label\" class=\"nav-item dropdown\" title=\"[[global:header.profile]]\">\n\t<label for=\"user-control-list-check\" class=\"\" data-bs-toggle=\"dropdown\" id=\"user_dropdown\" role=\"button\" component=\"header/avatar\">\n\t\t" + 
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
      "\">\n\t\t\t\t<input type=\"hidden\" name=\"noscript\" value=\"true\">\n\t\t\t\t<button type=\"submit\" class=\"dropdown-item\">\n\t\t\t\t\t<i class=\"fa fa-fw fa-sign-out\"></i><span> [[global:logout]]</span>\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</li>\n\t</ul>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
