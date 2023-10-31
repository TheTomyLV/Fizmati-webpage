
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
    return "<div class=\"acp-page-container\">\n\t<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\n\t<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0\">\n\t\t<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\n\t</div>\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n\t</div>\n</div>\n\n\t<div class=\"row settings m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n\t\t\t<div id=\"site-settings\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:site-settings]]\n\t\t\t\t</h5>\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"site-title\">[[admin/settings/general:title]]</label>\n\t\t\t\t\t\t<input id=\"site-title\" class=\"form-control\" type=\"text\" placeholder=\"[[admin/settings/general:title.name]]\" data-field=\"title\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"showSiteTitle\" data-field=\"showSiteTitle\" name=\"showSiteTitle\" />\n\t\t\t\t\t\t<label for=\"showSiteTitle\" class=\"form-check-label\">[[admin/settings/general:title.show-in-header]]</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"title:short\">[[admin/settings/general:title.short]]</label>\n\t\t\t\t\t\t<input id=\"title:short\" type=\"text\" class=\"form-control\" data-field=\"title:short\" />\n\t\t\t\t\t\t<p class=\"form-text\">[[admin/settings/general:title.short-placeholder]]</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"title:url\">[[admin/settings/general:title.url]]</label>\n\t\t\t\t\t\t<input id =\"title:url\" type=\"text\" class=\"form-control\" data-field=\"title:url\" />\n\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t[[admin/settings/general:title.url-help]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"browserTitle\">[[admin/settings/general:browser-title]]</label>\n\t\t\t\t\t\t<input id=\"browserTitle\" class=\"form-control\" type=\"text\" data-field=\"browserTitle\" />\n\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t[[admin/settings/general:browser-title-help]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"titleLayout\">[[admin/settings/general:title-layout]]</label>\n\t\t\t\t\t\t<input id=\"titleLayout\" class=\"form-control\" type=\"text\" data-field=\"titleLayout\" />\n\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t[[admin/settings/general:title-layout-help]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"description\">[[admin/settings/general:description]]</label>\n\t\t\t\t\t\t<input id=\"description\" type=\"text\" class=\"form-control\" data-field=\"description\" />\n\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t[[admin/settings/general:description.placeholder]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"keywords\">[[admin/settings/general:keywords]]</label>\n\t\t\t\t\t\t<input id=\"keywords\" type=\"text\" class=\"form-control\" data-field=\"keywords\" data-field-type=\"tagsinput\" />\n\t\t\t\t\t\t<p class=\"form-text\">[[admin/settings/general:keywords-placeholder]]</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t\t\t<label class=\"form-label\" for=\"language\">[[admin/settings/languages:default-language]]</label>\n\t\t\t\t\t\t\t<select id=\"language\" data-field=\"defaultLang\" class=\"form-select\">\n\t\t\t\t\t\t\t\t" + 
      compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t[[admin/settings/languages:description]]\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t\t\t\t<input id=\"autoDetectLang\" class=\"form-check-input\" type=\"checkbox\" data-field=\"autoDetectLang\" " + 
      (guard((context != null) ? context['autoDetectLang'] : null) ?
        "checked" :
        "") + 
      "/>\n\t\t\t\t\t\t\t\t<label for=\"autoDetectLang\" class=\"form-check-label\">[[admin/settings/languages:auto-detect]]</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"logo-and-icons\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:logo-and-icons]]</h5>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"logoUrl\">[[admin/settings/general:logo.image]]</label>\n\t\t\t\t\t<div class=\"d-flex gap-1\">\n\t\t\t\t\t\t<input id=\"logoUrl\" type=\"text\" class=\"form-control\" placeholder=\"[[admin/settings/general:logo.image-placeholder]]\" data-field=\"brand:logo\" />\n\n\t\t\t\t\t\t<input data-action=\"upload\" data-target=\"logoUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadlogo\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/general:logo.upload]]\" />\n\t\t\t\t\t\t<button data-action=\"removeLogo\" type=\"button\" class=\"btn btn-light\"><i class=\"fa fa-trash text-danger\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"brand:logo:url\">[[admin/settings/general:logo.url]]</label>\n\t\t\t\t\t<input id =\"brand:logo:url\" type=\"text\" class=\"form-control\" data-field=\"brand:logo:url\" />\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/general:logo.url-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"brand:logo:alt\">[[admin/settings/general:logo.alt-text]]</label>\n\t\t\t\t\t<input id =\"brand:logo:alt\" type=\"text\" class=\"form-control\" data-field=\"brand:logo:alt\" />\n\t\t\t\t\t<p class=\"form-text\">[[admin/settings/general:log.alt-text-placeholder]]</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"og_image\">og:image</label>\n\t\t\t\t\t<div class=\"d-flex gap-1\">\n\t\t\t\t\t\t<input id=\"og_image\" type=\"text\" class=\"form-control\" placeholder=\"\" data-field=\"og:image\" />\n\n\t\t\t\t\t\t<input data-action=\"upload\" data-target=\"og_image\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadOgImage\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/general:logo.upload]]\" />\n\t\t\t\t\t\t<button data-action=\"removeOgImage\" type=\"button\" class=\"btn btn-light\"><i class=\"fa fa-trash text-danger\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"og_image\">[[admin/settings/general:favicon]]</label>\n\t\t\t\t\t<div class=\"d-flex gap-1\">\n\t\t\t\t\t\t<input id=\"faviconUrl\" type=\"text\" class=\"form-control\" placeholder=\"favicon.ico\" data-field=\"brand:favicon\" data-action=\"upload\" data-target=\"faviconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadfavicon\" readonly />\n\n\t\t\t\t\t\t<input data-action=\"upload\" data-target=\"faviconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadfavicon\" data-help=\"0\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/general:favicon.upload]]\" />\n\t\t\t\t\t\t<button data-action=\"removeFavicon\" type=\"button\" class=\"btn btn-light\"><i class=\"fa fa-trash text-danger\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"touchIconUrl\">[[admin/settings/general:touch-icon]]</label>\n\t\t\t\t\t<div class=\"d-flex gap-1\">\n\t\t\t\t\t\t<input id=\"touchIconUrl\" type=\"text\" class=\"form-control\" data-field=\"brand:touchIcon\" data-action=\"upload\" data-target=\"touchIconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadTouchIcon\" readonly />\n\t\t\t\t\t\t<input data-action=\"upload\" data-target=\"touchIconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadTouchIcon\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/general:touch-icon.upload]]\" />\n\t\t\t\t\t\t<button data-action=\"removeTouchIcon\" type=\"button\" class=\"btn btn-light\"><i class=\"fa fa-trash text-danger\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/general:touch-icon.help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"maskableIconUrl\">[[admin/settings/general:maskable-icon]]</label>\n\t\t\t\t\t<div class=\"d-flex gap-1\">\n\t\t\t\t\t\t<input id=\"maskableIconUrl\" type=\"text\" class=\"form-control\" data-field=\"brand:maskableIcon\" data-action=\"upload\" data-target=\"maskableIconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadMaskableIcon\" readonly />\n\n\t\t\t\t\t\t<input data-action=\"upload\" data-target=\"maskableIconUrl\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadMaskableIcon\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/general:touch-icon.upload]]\" />\n\t\t\t\t\t\t<button data-action=\"removeMaskableIcon\" type=\"button\" class=\"btn btn-light\"><i class=\"fa fa-trash text-danger\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/general:maskable-icon.help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"home-page\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/homepage:home-page]]</h5>\n\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t[[admin/settings/homepage:description]]\n\t\t\t\t\t</p>\n\t\t\t\t\t<form class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"homePageRoute\">[[admin/settings/homepage:home-page-route]]</label>\n\t\t\t\t\t\t\t\t<select id=\"homePageRoute\" class=\"form-select\" data-field=\"homePageRoute\">\n\t\t\t\t\t\t\t\t\t" + 
      compiled.blocks['routes'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"homePageCustom\" class=\"mb-3\" style=\"display: none;\">\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"homePageCustomInput\">[[admin/settings/homepage:custom-route]]</label>\n\t\t\t\t\t\t\t\t<input id=\"homePageCustomInput\" type=\"text\" class=\"form-control\" data-field=\"homePageCustom\"/>\n\t\t\t\t\t\t\t\t<p class=\"form-text\">[[user:custom-route-help]]</p>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"allowUserHomePage\" data-field=\"allowUserHomePage\">\n\t\t\t\t\t\t\t\t<label for=\"allowUserHomePage\" class=\"form-check-label\">[[admin/settings/homepage:allow-user-home-pages]]</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"homePageTitle\">[[admin/settings/homepage:home-page-title]]</label>\n\t\t\t\t\t\t\t\t<input id=\"homePageTitle\" class=\"form-control\" type=\"text\" data-field=\"homePageTitle\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"search-settings\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:search]]</h5>\n\n\t\t\t\t<div class=\"mb-3 d-flex justify-content-between align-items-center\">\n\t\t\t\t\t<label class=\"form-label\" for=\"searchDefaultIn\">[[admin/settings/general:search-default-in]]</label>\n\t\t\t\t\t<select id=\"searchDefaultIn\" class=\"form-select w-auto\" data-field=\"searchDefaultIn\">\n\t\t\t\t\t\t<option value=\"titlesposts\">[[search:in-titles-posts]]</option>\n\t\t\t\t\t\t<option value=\"titles\">[[search:in-titles]]</option>\n\t\t\t\t\t\t<option value=\"posts\">[[search:in-posts]]</option>\n\t\t\t\t\t\t<option value=\"categories\">[[search:in-categories]]</option>\n\t\t\t\t\t\t<option value=\"users\">[[search:in-users]]</option>\n\t\t\t\t\t\t<option value=\"tags\">[[search:in-tags]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3 d-flex justify-content-between align-items-center\">\n\t\t\t\t\t<label class=\"form-label\" for=\"searchDefaultInQuick\">[[admin/settings/general:search-default-in-quick]]</label>\n\t\t\t\t\t<select id=\"searchDefaultInQuick\" class=\"form-select w-auto\" data-field=\"searchDefaultInQuick\">\n\t\t\t\t\t\t<option value=\"titlesposts\">[[search:in-titles-posts]]</option>\n\t\t\t\t\t\t<option value=\"titles\">[[search:in-titles]]</option>\n\t\t\t\t\t\t<option value=\"posts\">[[search:in-posts]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3 d-flex justify-content-between align-items-center\">\n\t\t\t\t\t<label class=\"form-label\" for=\"post-sort-by\">[[admin/settings/general:search-default-sort-by]]</label>\n\t\t\t\t\t<select id=\"post-sort-by\" class=\"form-select w-auto\" data-field=\"searchDefaultSortBy\">\n\t\t\t\t\t\t<option value=\"relevance\">[[search:relevance]]</option>\n\t\t\t\t\t\t<option value=\"timestamp\">[[search:post-time]]</option>\n\t\t\t\t\t\t<option value=\"votes\">[[search:votes]]</option>\n\t\t\t\t\t\t<option value=\"topic.lastposttime\">[[search:last-reply-time]]</option>\n\t\t\t\t\t\t<option value=\"topic.title\">[[search:topic-title]]</option>\n\t\t\t\t\t\t<option value=\"topic.postcount\">[[search:number-of-replies]]</option>\n\t\t\t\t\t\t<option value=\"topic.viewcount\">[[search:number-of-views]]</option>\n\t\t\t\t\t\t<option value=\"topic.votes\">[[search:topic-votes]]</option>\n\t\t\t\t\t\t<option value=\"topic.timestamp\">[[search:topic-start-date]]</option>\n\t\t\t\t\t\t<option value=\"user.username\">[[search:username]]</option>\n\t\t\t\t\t\t<option value=\"category.name\">[[search:category]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3 d-flex justify-content-between align-items-center\">\n\t\t\t\t\t<label class=\"form-label\" for=\"userSearchResultsPerPage\">[[admin/settings/user:user-search-results-per-page]]</label>\n\t\t\t\t\t<input id=\"userSearchResultsPerPage\" type=\"text\" class=\"form-control\" value=\"24\" data-field=\"userSearchResultsPerPage\" style=\"max-width: 64px;\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"outgoing-links\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:outgoing-links]]</h5>\n\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"useOutgoingLinksPage\" data-field=\"useOutgoingLinksPage\">\n\t\t\t\t\t\t<label for=\"useOutgoingLinksPage\" class=\"form-check-label\">[[admin/settings/general:outgoing-links.warning-page]]</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"outgoingLinks:whitelist\">[[admin/settings/general:outgoing-links.whitelist]]</label>\n\t\t\t\t\t\t<input id=\"outgoingLinks:whitelist\" type=\"text\" class=\"form-control\" data-field=\"outgoingLinks:whitelist\" data-field-type=\"tagsinput\" />\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"site-colors\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:site-colors]]</h5>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"themeColor\">[[admin/settings/general:theme-color]]</label>\n\t\t\t\t\t<input id=\"themeColor\" type=\"text\" class=\"form-control\" placeholder=\"#ffffff\" data-field=\"themeColor\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"backgroundColor\">[[admin/settings/general:background-color]]</label>\n\t\t\t\t\t<input id=\"backgroundColor\" type=\"text\" class=\"form-control\" placeholder=\"#ffffff\" data-field=\"backgroundColor\" />\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/general:background-color-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"topic-tools\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/general:topic-tools]]</h5>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"undoTimeout\">[[admin/settings/general:undo-timeout]]</label>\n\t\t\t\t\t<input id=\"undoTimeout\" type=\"text\" class=\"form-control\" data-field=\"undoTimeout\" />\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/general:undo-timeout-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"post-sharing\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/social:post-sharing]]</h5>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<div class=\"form-group\" id=\"postSharingNetworks\">\n\t\t\t\t\t\t" + 
      compiled.blocks['postSharing'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t<p class=\"form-text\">[[admin/settings/social:info-plugins-additional]]</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n\t<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n\t\t<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n\t\t<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n\t\t\t<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n\t\t\t\t<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n\t\t\t</nav>\n\t\t</nav>\n\t</div>\n</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['languages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          "\" " + 
          (guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['name'] : null)) + 
          " (" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          ")</option>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'routes': function routes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['routes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['routes'] != null && context['routes'][key0] != null) ? context['routes'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['routes'] != null && context['routes'][key0] != null) ? context['routes'][key0]['name'] : null)) + 
          "</option>\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'postSharing': function postSharing(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['postSharing'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"" + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['id'] : null)) + 
          "\" data-field=\"post-sharing-" + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['id'] : null)) + 
          "\" name=\"" + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['id'] : null)) + 
          "\" " + 
          (guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['activated'] : null) ?
            "checked" :
            "") + 
          " />\n\t\t\t\t\t\t\t<label for=\"" + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['id'] : null)) + 
          "\" class=\"form-check-label\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['class'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['name'] : null)) + 
          "\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})