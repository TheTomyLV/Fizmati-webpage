
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
    return "<div class=\"d-flex ms-4 mb-2 align-items-center\">\n\t<div component=\"chat/message/parent\" data-parent-mid=\"" + 
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
      "</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
