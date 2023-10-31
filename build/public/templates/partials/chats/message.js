
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
    return "<li component=\"chat/message\" class=\"chat-message mx-2 pe-2 fw-light clear" + 
      (guard((context != null && context['messages'] != null) ? context['messages']['deleted'] : null) ?
        " deleted" :
        "") + 
      " " + 
      (guard((context != null && context['messages'] != null) ? context['messages']['pinned'] : null) ?
        " pinned" :
        "") + 
      "\" data-mid=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['messageId'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['fromuid'] : null)) + 
      "\" data-self=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['self'] : null)) + 
      "\" data-break=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['newSet'] : null)) + 
      "\" data-timestamp=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['timestamp'] : null)) + 
      "\" data-username=\"" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['username'] : null)) + 
      "\">\r\n\r\n\t" + 
      (guard((context != null && context['messages'] != null) ? context['messages']['parent'] : null) ?
        "\r\n\t<div class=\"d-flex ms-4 mb-2 align-items-center\">\n\t<div component=\"chat/message/parent\" data-parent-mid=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['mid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['fromuid'] : null)) + 
          "\" class=\"btn btn-sm btn-light align-items-start d-flex flex-row gap-2 text-start w-100\">\n\t\t<div class=\"d-flex gap-2 text-sm text-nowrap\">\n\t\t\t<div><i class=\"fa fa-sm fa-reply opacity-50\"></i></div>\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null && context['messages']['parent']['user'] != null) ? context['messages']['parent']['user']['userslug'] : null)) + 
          "\" class=\"text-decoration-none lh-sm\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['user'] : null), "14px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
          "</a>\n\t\t\t<a class=\"chat-user fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null && context['messages']['parent']['user'] != null) ? context['messages']['parent']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null && context['messages']['parent']['user'] != null) ? context['messages']['parent']['user']['displayname'] : null)) + 
          "</a>\n\t\t\t<span class=\"chat-timestamp text-muted timeago text-nowrap hidden\" title=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['timestampISO'] : null)) + 
          "\"></span>\n\t\t</div>\n\t\t<div component=\"chat/message/parent/content\" class=\"text-muted line-clamp-1 text-sm w-100\">" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['content'] : null)) + 
          "</div>\n\t</div>\n</div>\r\n\t" :
        "") + 
      "\r\n\r\n\t<div class=\"message-header\">\r\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['userslug'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null) ? context['messages']['fromUser'] : null), "32px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
      "</a>\r\n\t\t<span class=\"chat-user fw-bold\"><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['userslug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['displayname'] : null)) + 
      "</a></span>\r\n\t\t" + 
      (guard((context != null && context['fromUser'] != null) ? context['fromUser']['banned'] : null) ?
        "\r\n\t\t<span class=\"badge bg-danger\">[[user:banned]]</span>\r\n\t\t" :
        "") + 
      "\r\n\t\t" + 
      (guard((context != null && context['fromUser'] != null) ? context['fromUser']['deleted'] : null) ?
        "\r\n\t\t<span class=\"badge bg-danger\">[[user:deleted]]</span>\r\n\t\t" :
        "") + 
      "\r\n\t\t<small class=\"chat-timestamp text-muted ms-2 timeago\" title=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['timestampISO'] : null)) + 
      "\"></small>\r\n\r\n\t\t<div component=\"chat/message/edited\" class=\"text-muted float-end " + 
      (guard((context != null && context['messages'] != null) ? context['messages']['edited'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[global:edited-timestamp, " + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['editedISO'] : null)) + 
      "]]\"><i class=\"fa fa-edit\"></i></span></div>\r\n\t</div>\r\n\t<div class=\"message-body-wrapper\">\r\n\t\t<div component=\"chat/message/body\" class=\"message-body\">\r\n\t\t\t" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['content'] : null)) + 
      "\r\n\t\t</div>\r\n\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\r\n\t\t<div component=\"chat/message/controls\" class=\"btn-group controls\">\r\n\t\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\r\n\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"reply\" title=\"[[topic:reply]]\"><i class=\"fa fa-reply\"></i></button>\r\n\t\t\t" + 
      ((guard((context != null) ? context['isAdminOrGlobalMod'] : null) || (!guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) && guard((context != null && context['messages'] != null) ? context['messages']['self'] : null))) ?
        "\r\n\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"edit\" title=\"[[topic:edit]]\"><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"delete\" title=\"[[topic:delete]]\"><i class=\"fa fa-trash\"></i></button>\r\n\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"restore\" title=\"[[topic:restore]]\"><i class=\"fa fa-repeat\"></i></button>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t" + 
      ((guard((context != null) ? context['isAdminOrGlobalMod'] : null) || guard((context != null) ? context['isOwner'] : null)) ?
        "\r\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"pin\" title=\"[[modules:chat.pin-message]]\"><i class=\"fa fa-thumbtack\"></i></button>\r\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"unpin\" title=\"[[modules:chat.unpin-message]]\"><i class=\"fa fa-thumbtack fa-rotate-90\"></i></button>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t" + 
      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
        "\r\n\t\t\t<button class=\"btn btn-sm btn-link chat-ip-button\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle\"></i></button>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</div>\r\n\t</div>\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
