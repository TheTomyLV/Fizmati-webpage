
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
    return "<div class=\"card tool-modal shadow\">\n\t<h5 class=\"card-header\">\n\t\t[[topic:thread-tools.move-posts]]\n\t</h5>\n\t<div class=\"card-body\">\n\t\t<p>\n            [[topic:move-posts-instruction]]\n        </p>\n\t\t<div>\n\t\t\t<label class=\"form-label\" for=\"topicId\"><strong>[[topic:topic-id]]</strong></label>\n\t\t\t<input id=\"topicId\" type=\"text\" class=\"form-control\"><br/>\n\t\t</div>\n\t\t<p>\n    \t\t<strong><span id=\"pids\"></span></strong>\n        </p>\n\t</div>\n\t<div class=\"card-footer text-end\">\n\t\t<button class=\"btn btn-link btn-sm\" id=\"move_posts_cancel\">[[global:buttons.close]]</button>\n\t\t<button class=\"btn btn-primary btn-sm\" id=\"move_posts_confirm\" disabled>[[topic:move]]</button>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
