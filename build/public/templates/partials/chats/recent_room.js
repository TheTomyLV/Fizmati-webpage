
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
    return "<li component=\"chat/recent/room\" data-roomid=\"" + 
      __escape(guard((context != null && context['rooms'] != null) ? context['rooms']['roomId'] : null)) + 
      "\" class=\"" + 
      (guard((context != null && context['rooms'] != null) ? context['rooms']['unread'] : null) ?
        "unread" :
        "") + 
      "\">\n\t" + 
      compiled.blocks['rooms.users'](helpers, context, guard, iter, helper) + 
      "\n\n\t" + 
      (guard((context != null && context['rooms'] != null && context['rooms']['users'] != null) ? context['rooms']['users']['length'] : null) ?
        "\n\t<ul class=\"members\">\n\t\t" + 
          iter(guard((context != null && context['rooms'] != null) ? context['rooms']['users'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t<li>\n\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms']['users'] != null && context['rooms']['users'][key0] != null) ? context['rooms']['users'][key0]['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms']['users'] != null) ? context['rooms']['users'][key0] : null), "28px", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n\t\t</li>\n\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t</ul>\n\t" :
        "") + 
      "\n\n\t<div class=\"notification-chat-content flex-grow-1\">\n\t\t<div component=\"chat/room/title\" class=\"room-name fw-semibold\">\n\t\t\t" + 
      (guard((context != null) ? context['roomName'] : null) ?
        "\n\t\t\t" + 
          __escape(guard((context != null) ? context['roomName'] : null)) + 
          "\n\t\t\t" :
        "\n\t\t\t\t" + 
          (guard((context != null && context['lastUser'] != null) ? context['lastUser']['uid'] : null) ?
            "\n\t\t\t\t" + 
              __escape(guard((context != null) ? context['usernames'] : null)) + 
              "\n\t\t\t\t" :
            "\n\t\t\t\t<div class=\"p-3 text-center h-100\">\n\t\t\t\t\t<span>[[modules:chat.no-users-in-room]]</span>\n\t\t\t\t</div>\n\t\t\t\t") + 
          "\n\t\t\t") + 
      "\n\t\t</div>\n\t</div>\n</li>";
  }

  compiled.blocks = {
    'rooms.users': function roomsusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['rooms'] != null) ? context['rooms']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          (index === 0 ?
            "\n\t<div class=\"main-avatar me-2\">\n\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms']['users'] != null && context['rooms']['users'][key0] != null) ? context['rooms']['users'][key0]['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms']['users'] != null) ? context['rooms']['users'][key0] : null), "28px", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n\t</div>\n\t" :
            "") + 
          "\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
