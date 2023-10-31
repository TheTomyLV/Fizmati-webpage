
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
    return "<div class=\"flex-fill\">\n\t<div class=\"alert alert-info\">\n\t\t[[reset_password:enter-email]]\n\t</div>\n\n\t<div class=\"card card-body bg-light\">\n\t\t<div class=\"alert alert-success alert-dismissible hide\" id=\"success\">\n\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\n\t\t\t[[reset_password:password-reset-sent]]\n\t\t</div>\n\t\t<div class=\"alert alert-danger alert-dismissible hide\" id=\"error\">\n\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\n\t\t\t[[reset_password:invalid-email]]\n\t\t</div>\n\t\t<form onsubmit=\"return false;\">\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<input type=\"email\" class=\"form-control form-control-lg\" id=\"email\" placeholder=\"[[reset_password:enter-email-address]]\" autocomplete=\"off\">\n\t\t\t</div>\n\t\t\t<div class=\"d-grid\">\n\t\t\t\t<button class=\"btn btn-primary btn-lg\" id=\"reset\" type=\"submit\">[[reset_password:reset-password]]</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
