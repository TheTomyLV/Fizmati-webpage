
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
    return "<div class=\"\">\n\t<label class=\"form-label\">[[modules:chat.add-user]]</label>\n\t<input component=\"chat/manage/user/add/search\" class=\"form-control\" type=\"text\" placeholder=\"[[global:user-search-prompt]]\" />\n\t<p class=\"text-danger\"></p>\n\t<p class=\"form-text\">[[modules:chat.add-user-help]]</p>\n\n\t<hr />\n\n\t<label class=\"form-label\">[[global:users]]</label>\n\t<input component=\"chat/manage/user/list/search\" class=\"form-control mb-1\" type=\"text\" placeholder=\"[[global:user-search-prompt]]\" />\n\t<ul component=\"chat/manage/user/list\" class=\"list-group overflow-auto pe-1 mb-3\" style=\"max-height: 300px;\">\n\t\t<li class=\"list-group-item\"><i class=\"fa fa-spinner fa-spin\"></i> [[modules:chat.retrieving-users]]</li>\n\t</ul>\n\n\t" + 
      (guard((context != null && context['user'] != null) ? context['user']['isAdmin'] : null) ?
        "\n\t<hr/>\n\t<div class=\"d-flex gap-2 mb-3 align-items-center justify-content-between\">\n\t\t<label class=\"form-label text-nowrap mb-0\">[[modules:chat.default-notification-setting]]</label>\n\t\t<select component=\"chat/room/notification/setting\" class=\"form-select\" style=\"width: 200px;\">\n\t\t\t<option value=\"1\" " + 
          ((guard((context != null && context['room'] != null) ? context['room']['notificationSetting'] : null) == "1") ?
            "selected" :
            "") + 
          ">[[modules:chat.notification-setting-none]]</option>\n\t\t\t<option value=\"2\" " + 
          ((guard((context != null && context['room'] != null) ? context['room']['notificationSetting'] : null) == "2") ?
            "selected" :
            "") + 
          ">[[modules:chat.notification-setting-at-mention-only]]</option>\n\t\t\t<option value=\"3\" " + 
          ((guard((context != null && context['room'] != null) ? context['room']['notificationSetting'] : null) == "3") ?
            "selected" :
            "") + 
          ">[[modules:chat.notification-setting-all-messages]]</option>\n\t\t</select>\n\t</div>\n\n\t" + 
          (guard((context != null && context['room'] != null) ? context['room']['public'] : null) ?
            "\n\n\t<label class=\"form-label\">[[modules:chat.select-groups]]</label>\n\n\t<select component=\"chat/room/groups\" class=\"form-select mb-3\" multiple size=\"10\">\n\t\t" + 
              compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
              "\n\t</select>\n\t" :
            "") + 
          "\n\t<div class=\"d-flex justify-content-end\">\n\t\t<button component=\"chat/manage/save\" class=\"btn btn-sm btn-primary\">[[global:save]]</button>\n\t</div>\n\t" :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\" " + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
