
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
      "</h4>\n\t</div>\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n\t</div>\n</div>\n\n\t<div class=\"row settings m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n\t\t\t<div id=\"crawlability-settings\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/web-crawler:crawlability-settings]]</h5>\n\t\t\t\t<div>\n\t\t\t\t\t<label class=\"form-label\">[[admin/settings/web-crawler:robots-txt]]</label>\n\t\t\t\t\t<textarea class=\"form-control\" data-field=\"robots:txt\"></textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"sitemap-feed-settings\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/web-crawler:sitemap-feed-settings]]</h5>\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"feeds:disableRSS\" data-field=\"feeds:disableRSS\">\n\t\t\t\t\t<label for=\"feeds:disableRSS\" class=\"form-check-label\">[[admin/settings/web-crawler:disable-rss-feeds]]</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"feeds:disableSitemap\" data-field=\"feeds:disableSitemap\">\n\t\t\t\t\t<label for=\"feeds:disableSitemap\" class=\"form-check-label\">[[admin/settings/web-crawler:disable-sitemap-xml]]</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"sitemapTopics\">[[admin/settings/web-crawler:sitemap-topics]]</label>\n\t\t\t\t\t<input id=\"sitemapTopics\" class=\"form-control\" type=\"text\" data-field=\"sitemapTopics\" />\n\t\t\t\t</div>\n\n\t\t\t\t<p>\n\t\t\t\t\t<button id=\"clear-sitemap-cache\" class=\"btn btn-sm btn-warning\">[[admin/settings/web-crawler:clear-sitemap-cache]]</button>\n\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/sitemap.xml\" target=\"_blank\" class=\"btn btn-sm btn-light\">[[admin/settings/web-crawler:view-sitemap]]</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n\t<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n\t\t<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n\t\t<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n\t\t\t<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n\t\t\t\t<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n\t\t\t</nav>\n\t\t</nav>\n\t</div>\n</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
