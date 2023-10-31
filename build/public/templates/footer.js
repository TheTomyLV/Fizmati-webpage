
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
    return "\t\t</div><!-- /.container#content -->\n\t\t</div>\n\t</main>\n\t" + 
      (guard((context != null) ? context['isSpider'] : null) ?
        "" :
        "\n\t<div component=\"toaster/tray\" class=\"alert-window\">\n\t\t<div id=\"reconnect-alert\" class=\"alert alert-dismissible alert-warning fade hide\" component=\"toaster/toast\">\n\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-hidden=\"true\"></button>\n\t<p class=\"mb-0\">[[global:reconnecting-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "]]</p>\n</div>\n\t</div>\n\t") + 
      "\n\t<div style=\"background-color: #fe6601; width: 100%; height: 20px;justify-content: center;display: flex;flex-direction: row;\">\n\t\t<a>Kaut kādi link</a><p> • </p><a>Par</a>\n\t</div>\n\t<div id=\"taskbar\" component=\"taskbar\" class=\"taskbar fixed-bottom\">\n\t<div class=\"navbar-inner\"><ul class=\"nav navbar-nav\"></ul></div>\n</div>\n\t<script defer src=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/nodebb.min.js?" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
      "\"></script>\n\n" + 
      compiled.blocks['scripts'](helpers, context, guard, iter, helper) + 
      "\n\n<script>\n    if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', prepareFooter);\n    } else {\n        prepareFooter();\n    }\n\n    function prepareFooter() {\n        " + 
      (guard((context != null) ? context['useCustomJS'] : null) ?
        "\n        " + 
          guard((context != null) ? context['customJS'] : null) + 
          "\n        " :
        "") + 
      "\n\n        $(document).ready(function () {\n            app.coldLoad();\n        });\n    }\n</script>\n</body>\n</html>\n";
  }

  compiled.blocks = {
    'scripts': function scripts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['scripts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<script defer type=\"text/javascript\" src=\"" + 
          __escape(guard((context != null && context['scripts'] != null && context['scripts'][key0] != null) ? context['scripts'][key0]['src'] : null)) + 
          "\"></script>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
