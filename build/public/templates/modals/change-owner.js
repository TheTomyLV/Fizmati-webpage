
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
    return "<div class=\"card tool-modal shadow\">\n\t<h5 class=\"card-header\">[[topic:thread-tools.change-owner]]</h5>\n\t<div class=\"card-body\">\n\t\t<p>\n\t\t\t[[topic:change-owner-instruction]]\n\t\t</p>\n\t\t<div class=\"mb-3\">\n\t\t\t<label class=\"form-label\" for=\"username\"><strong>[[user:username]]</strong></label>\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<input id=\"username\" type=\"text\" class=\"form-control\">\n\t\t\t\t<span class=\"input-group-text\" type=\"button\">\n\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<p>\n\t\t\t<strong><span id=\"pids\"></span></strong>\n\t\t</p>\n\t</div>\n\t<div class=\"card-footer text-end\">\n\t\t<button class=\"btn btn-link btn-sm\" id=\"change_owner_cancel\">[[global:buttons.close]]</button>\n\t\t<button class=\"btn btn-primary btn-sm\" id=\"change_owner_commit\" disabled>[[topic:change-owner]]</button>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
