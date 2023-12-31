
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
    return "<li component=\"chat/system-message\" class=\"system-message fs-6 py-3 clear\" data-index=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['index'] : null)) + 
      "\" data-mid=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['messageId'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['fromuid'] : null)) + 
      "\" data-self=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['self'] : null)) + 
      "\" data-break=\"0\" data-timestamp=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['timestamp'] : null)) + 
      "\">\r\n\t[[modules:chat.system." + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['content'] : null)) + 
      ", " + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['username'] : null)) + 
      ", " + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['timestampISO'] : null)) + 
      "]]\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
