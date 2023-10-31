
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
    return "<div class=\"mb-3\">\n\t<div class=\"mb-3\">\n\t\t<label class=\"form-label text-nowrap\">[[modules:chat.room-name-optional]]</label>\n\t\t<input component=\"chat/room/name\" class=\"form-control\" />\n\t</div>\n\n\t<div class=\"mb-3\">\n\t\t<div class=\"dropdown\">\n\t\t\t<label class=\"form-label\">[[modules:chat.add-user]]</label>\n\t\t\t<input component=\"chat/search\" class=\"form-control\" type=\"text\" placeholder=\"[[global:user-search-prompt]]\" data-bs-toggle=\"dropdown\"/>\n\t\t\t<ul component=\"chat/search/list\" class=\"dropdown-menu p-1 overflow-auto\" style=\"max-height: 400px;\">\n\t\t\t\t<li component=\"chat/search/start-typing\"><a href=\"#\" class=\"dropdown-item rounded-1\">[[admin/menu:search.start-typing]]</a></li>\n\t\t\t\t<li component=\"chat/search/no-users\" class=\"hidden\"><a href=\"#\" class=\"dropdown-item rounded-1\">[[users:no-users-found]]</a></li>\n\t\t\t\t" + 
      compiled.blocks['searchUsers'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</ul>\n\t\t</div>\n\t\t<ul component=\"chat/room/users\" class=\"list-group mt-2\">\n\t\t\t" + 
      compiled.blocks['selectedUsers'](helpers, context, guard, iter, helper) + 
      "\n\t\t</ul>\n\t</div>\n\n\t" + 
      (guard((context != null && context['user'] != null) ? context['user']['isAdmin'] : null) ?
        "\n\t<select component=\"chat/room/type\" class=\"form-select mb-3\">\n\t\t<option value=\"private\">[[modules:chat.private.option]]</option>\n\t\t<option value=\"public\">[[modules:chat.public.option]]</option>\n\t</select>\n\n\t<div component=\"chat/room/public/options\" class=\"hidden\">\n\t\t<select component=\"chat/room/groups\" class=\"form-select\" multiple size=\"10\">\n\t\t\t" + 
          compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
          "\n\t\t</select>\n\t\t<p class=\"form-text\">\n\t\t\t[[modules:chat.public.groups-help]]\n\t\t</p>\n\t</div>\n\t" :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    'searchUsers': function searchUsers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['searchUsers'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li component=\"chat/search/user\" data-uid=\"" + 
          __escape(guard((context != null && context['searchUsers'] != null && context['searchUsers'][key0] != null) ? context['searchUsers'][key0]['uid'] : null)) + 
          "\"><a href=\"#\" class=\"dropdown-item rounded-1\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "24px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['searchUsers'] != null && context['searchUsers'][key0] != null) ? context['searchUsers'][key0]['username'] : null)) + 
          "</a></li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'selectedUsers': function selectedUsers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['selectedUsers'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li class=\"list-group-item d-flex gap-2 align-items-center justify-content-between\" component=\"chat/user\" data-uid=\"" + 
          __escape(guard((context != null && context['selectedUsers'] != null && context['selectedUsers'][key0] != null) ? context['selectedUsers'][key0]['uid'] : null)) + 
          "\">\n\t\t\t\t<a href=\"#\" class=\"text-reset text-decoration-none\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "24px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selectedUsers'] != null && context['selectedUsers'][key0] != null) ? context['selectedUsers'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t<button component=\"chat/room/users/remove\" class=\"btn btn-sm btn-light\"><i class=\"fa fa-times text-danger\"></i></button>\n\t\t\t</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
