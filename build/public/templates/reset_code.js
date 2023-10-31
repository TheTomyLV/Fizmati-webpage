
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
    return "<div class=\"row col-12 col-sm-6 offset-sm-3\">\n\t" + 
      (guard((context != null) ? context['valid'] : null) ?
        "\n\t<div class=\"card card-body bg-light\">\n\t\t" + 
          (guard((context != null) ? context['displayExpiryNotice'] : null) ?
            "\n\t\t<div class=\"alert alert-warning\">\n\t\t\t[[reset_password:password-expired]]\n\t\t</div>\n\t\t" :
            "") + 
          "\n\t\t<div class=\"alert alert-success alert-dismissible hidden\" id=\"success\">\n\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\n\t\t\t<strong>[[reset_password:password-changed.title]]</strong>\n\t\t\t<p>[[reset_password:password-changed.message]]</p>\n\t\t</div>\n\t\t<div class=\"alert alert-warning hidden\" id=\"notice\">\n\t\t\t<strong></strong>\n\t\t\t<p></p>\n\t\t</div>\n\t\t<form onsubmit=\"return false;\" id=\"reset-form\">\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<label class=\"form-label\" for=\"password\">[[reset_password:new-password]]</label>\n\t\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:new-password]]\" id=\"password\" /><br />\n\t\t\t</div>\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<label class=\"form-label\" for=\"repeat\">[[reset_password:repeat-password]]</label>\n\t\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:repeat-password]]\" id=\"repeat\" /><br />\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-primary btn-block\" id=\"reset\" type=\"submit\">[[reset_password:reset-password]]</button>\n\t\t</form>\n\t</div>\n\t" :
        "\n\t<div class=\"card text-bg-danger\">\n\t\t<h5 class=\"card-header\">\n\t\t\t[[reset_password:wrong-reset-code.title]]\n\t\t</h5>\n\t\t<div class=\"card-body\">\n\t\t\t<p>[[reset_password:wrong-reset-code.message]]</p>\n\t\t</div>\n\t</div>\n\t") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
