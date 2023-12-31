
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
    return "<span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet d-inline-block " + 
      (guard((context != null && context['posts'] != null) ? context['posts']['display_post_menu'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t<a class=\"dropdown-toggle d-block\" href=\"#\" data-bs-toggle=\"dropdown\"><i class=\"fa fa-fw fa-ellipsis-v\"></i></a>\n\t<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\"></ul>\n</span>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
