
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
    return "<div class=\"mb-3\">\n\t<p class=\"lead\">[[user:consent.lead]]</p>\n\t<p>[[user:consent.intro]]</p>\n\t<div class=\"form-check mb-3\">\n\t\t<input class=\"form-check-input\" type=\"checkbox\" name=\"gdpr_agree_data\" id=\"gdpr_agree_data\">\n\t\t<label class=\"form-check-label\" for=\"gdpr_agree_data\">[[register:gdpr-agree-data]]</label>\n\t</div>\n\n\t<p>\n\t\t[[user:consent.email-intro]]\n\t\t" + 
      (guard((context != null) ? context['digestEnabled'] : null) ?
        "\n\t\t[[user:consent.digest-frequency, " + 
          __escape(guard((context != null) ? context['digestFrequency'] : null)) + 
          "]]\n\t\t" :
        "\n\t\t[[user:consent.digest-off]]\n\t\t") + 
      "\n\t</p>\n\n\t<div class=\"form-check\">\n\t\t<input class=\"form-check-input\" type=\"checkbox\" name=\"gdpr_agree_email\" id=\"gdpr_agree_email\">\n\t\t<label class=\"form-check-label\" for=\"gdpr_agree_email\">[[register:gdpr-agree-email]]</label>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
