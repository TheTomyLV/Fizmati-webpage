
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
    return "<div class=\"card tool-modal shadow\">\n\t<h5 class=\"card-header\">\n\t\t[[topic:thread-tools.delete-posts]]\n\t</h5>\n\t<div class=\"card-body\">\n\t\t<p>\n\t\t\t[[topic:delete-posts-instruction]]\n\t\t</p>\n\t\t<p><strong><span id=\"pids\"></span></strong></p>\n\t</div>\n\t<div class=\"card-footer text-end\">\n\t\t<button class=\"btn btn-link btn-sm\" id=\"delete_posts_cancel\">[[global:buttons.close]]</button>\n\t\t<button class=\"btn btn-primary btn-sm\" id=\"delete_posts_confirm\" disabled>[[topic:delete]]</button>\n\t\t<button class=\"btn btn-danger btn-sm\" id=\"purge_posts_confirm\" disabled>[[topic:purge]]</button>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
