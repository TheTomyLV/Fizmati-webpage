
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
    return "<div component=\"bottombar\" class=\"bottombar d-flex d-lg-none fixed-bottom ff-secondary gap-1 align-items-center\">\n\t<div class=\"bottombar-nav p-2 border-top text-bg-light d-flex justify-content-between align-items-center w-100\">\n\t\t<div class=\"\">\n\t\t\t<a href=\"#\" role=\"button\" class=\"p-2 nav-link nav-btn\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvas\" >\n\t\t\t\t<i class=\"fa fa-fw fa-lg fa-bars\"></i>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
