
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
    return (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "\n<div component=\"topic/quickreply/container\" class=\"clearfix quick-reply\">\n\t<div class=\"icon float-start hidden-xs\">\n\t\t<a data-uid=\"" + 
          __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['uid'] : null)) + 
          "\" href=\"" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null)) :
            "#") + 
          "\">\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['loggedInUser'] : null), "48px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n\t\t\t" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null) ?
            "\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
              "\" title=\"[[global:" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
              "]]\"></i>\n\t\t\t" :
            "") + 
          "\n\t\t</a>\n\t</div>\n\t<form method=\"post\" action=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/compose\">\n\t\t<input type=\"hidden\" name=\"tid\" value=\"" + 
          __escape(guard((context != null) ? context['tid'] : null)) + 
          "\" />\n\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
          "\" />\n\t\t<div class=\"quickreply-message\">\n\t\t\t<textarea name=\"content\" component=\"topic/quickreply/text\" class=\"form-control mousetrap\" rows=\"5\" placeholder=\"[[modules:composer.textarea.placeholder]]\"></textarea>\n\t\t\t<div class=\"imagedrop\"><div>[[topic:composer.drag-and-drop-images]]</div></div>\n\t\t</div>\n\t\t<div class=\"btn-group float-end\">\n\t\t\t<button type=\"submit\" component=\"topic/quickreply/button\" class=\"btn btn-primary\">[[topic:post-quick-reply]]</button>\n\t\t\t<button type=\"submit\" component=\"topic/quickreply/expand\" class=\"btn btn-outline-primary\" formmethod=\"get\"><i class=\"fa fa-expand\"></i></button>\n\t\t</div>\n\t</form>\n\t<form component=\"topic/quickreply/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n\t</form>\n\n</div>\n" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
