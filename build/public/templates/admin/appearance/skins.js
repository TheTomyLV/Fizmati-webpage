
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
    return "<div id=\"skins\" class=\"d-flex flex-column gap-2 px-lg-4\">\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"d-flex flex-wrap gap-3 align-items-center\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/appearance/skins:skins]]</h4>\n\t\t\t<ul class=\"nav nav-pills d-flex gap-1 text-sm\">\n\t\t\t\t<li class=\"nav-item\"><a href=\"#\" class=\"nav-link active px-2 py-1\" data-bs-target=\"#skins-tab\" data-bs-toggle=\"tab\">[[admin/appearance/skins:bootswatch-skins]]</a></li>\n\t\t\t\t<li class=\"nav-item\"><a href=\"#\" class=\"nav-link px-2 py-1\" data-bs-target=\"#custom-skins-tab\" data-bs-toggle=\"tab\">[[admin/appearance/skins:custom-skins]]</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"d-flex align-items-center gap-1\">\n\t\t\t<div data-type=\"bootswatch\" data-theme=\"\" data-css=\"\">\n\t\t\t\t<button data-action=\"use\" class=\"btn btn-primary btn-sm text-nowrap\" type=\"button\">[[admin/appearance/skins:revert-skin]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"tab-content\">\n\t\t<div class=\"tab-pane fade show active\" role=\"tabpanel\" id=\"skins-tab\">\n\t\t\t<div class=\"skins px-2\">\n\t\t\t\t<div class=\"directory row text-center\" id=\"bootstrap_themes\">\n\t\t\t\t\t<i class=\"fa fa-refresh fa-spin\"></i> [[admin/appearance/skins:loading]]\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"tab-pane fade\" role=\"tabpanel\" id=\"custom-skins-tab\">\n\t\t\t<form role=\"form\" class=\"custom-skin-settings\">\n\t\t\t\t<div class=\"mb-3\" data-type=\"sorted-list\" data-sorted-list=\"custom-skin-list\" data-item-template=\"admin/partials/appearance/skins/item-custom-skin\" data-form-template=\"admin/partials/appearance/skins/form-custom-skin\">\n\t\t\t\t\t<input hidden=\"text\" name=\"custom-skin-list\">\n\t\t\t\t\t<div class=\"d-flex gap-1 mb-3 justify-content-between\">\n\t\t\t\t\t\t<button type=\"button\" data-type=\"add\" class=\"btn btn-sm btn-light\">[[admin/appearance/skins:add-skin]]</button>\n\t\t\t\t\t\t<button id=\"save-custom-skins\" class=\"btn btn-sm btn-primary\">[[admin/appearance/skins:save-custom-skins]]</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<ul data-type=\"list\" class=\"list-group mb-3\"></ul>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
