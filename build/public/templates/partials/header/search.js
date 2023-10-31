
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
    return "<form component=\"search/form\" id=\"search-form\" class=\"d-flex justify-content-end align-items-center\" role=\"search\" method=\"GET\">\n\t<div component=\"search/fields\" class=\"hidden\" id=\"search-fields\">\n\t\t<div class=\"input-group flex-nowrap\">\n\t\t\t<input autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\">\n\n\t\t\t<button href=\"#\" class=\"btn btn-outline-secondary\">\n\t\t\t\t<i class=\"fa fa-gears fa-fw advanced-search-link\"></i>\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div id=\"quick-search-container\" class=\"quick-search-container dropdown-menu d-block mt-2 hidden\">\n\t\t\t<div class=\"form-check filter-category mb-2 ms-4\">\n\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" checked>\n\t\t\t\t<label class=\"form-check-label name\"></label>\n\t\t\t</div>\n\n\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-outline-secondary hide\">[[global:search]]</button>\n\t</div>\n\n\t<div id=\"\" class=\"nav-item\"><a component=\"search/button\" id=\"search-button\" href=\"#\" class=\"nav-link\"><i class=\"fa fa-search fa-fw\" title=\"Search\"></i></a></div>\n</form>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
