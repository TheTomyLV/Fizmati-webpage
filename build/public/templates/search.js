
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n<div class=\"search\">\n\t<div id=\"advanced-search\" class=\"d-flex flex-column flex-md-row\">\n\t\t<!-- sidebar -->\n\t\t<div class=\"flex-0 pe-2 border-end-md text-sm mb-3\" style=\"flex-basis: 240px!important;\">\n\t\t\t<form action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/search\" method=\"get\" class=\"nav sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-3 pe-md-3\" style=\"top: 1rem; z-index: 1;\">\n\t\t\t\t<h2 class=\"fw-semibold tracking-tight mb-0\">[[global:search]]</h2>\n\n\t\t\t\t<input id=\"search-input\" name=\"term\" type=\"text\" class=\"form-control fw-semibold py-2 ps-2 pe-3\" id=\"search-input\" placeholder=\"[[search:type-to-search]]\">\n\n\t\t\t\t<select id=\"search-in\" name=\"in\" class=\"form-select text-sm py-2 ps-2 pe-3\">\n\t\t\t\t\t<option value=\"titlesposts\">[[search:in-titles-posts]]</option>\n\t\t\t\t\t<option value=\"titles\">[[search:in-titles]]</option>\n\t\t\t\t\t<option value=\"posts\">[[search:in-posts]]</option>\n\t\t\t\t\t<option value=\"categories\">[[search:in-categories]]</option>\n\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['search:users'] : null) ?
        "\n\t\t\t\t\t<option value=\"users\">[[search:in-users]]</option>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['search:tags'] : null) ?
        "\n\t\t\t\t\t<option value=\"tags\">[[search:in-tags]]</option>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t</select>\n\n\t\t\t\t<select id=\"match-words-filter\" name=\"matchWords\" class=\"post-search-item form-select text-sm py-2 ps-2 pe-3\">\n\t\t\t\t\t<option value=\"all\">[[search:match-all-words]]</option>\n\t\t\t\t\t<option value=\"any\">[[search:match-any-word]]</option>\n\t\t\t\t</select>\n\n\t\t\t\t<select id=\"show-results-as\" name=\"showAs\" class=\"post-search-item form-select text-sm py-2 ps-2 pe-3\">\n\t\t\t\t\t<option value=\"posts\" selected>[[search:show-results-as-posts]]</option>\n\t\t\t\t\t<option value=\"topics\">[[search:show-results-as-topics]]</option>\n\t\t\t\t</select>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary fw-semibold form-control py-2 px-3\">[[global:search]]</button>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<!-- filters and search results -->\n\t\t<div class=\"flex-1 ps-md-2 ps-lg-5\" style=\"min-width:0;\">\n\t\t\t<div class=\"d-flex flex-column gap-3\">\n\t\t\t\t<div class=\"d-flex flex-wrap gap-2 align-items-center\" component=\"search/filters\">\n\t<!-- category filter -->\n\t<div class=\"post-search-item\">\n\t\t<div component=\"category/filter\" class=\"dropdown\" data-filter-name=\"category\">\n\t\t\t<a component=\"category/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['label'] : null)) :
        "[[search:categories]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t\t\t<li class=\"px-3 py-1 mb-2 d-flex flex-column gap-2\">\n\t\t\t\t\t<div component=\"category-selector-search\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"category/filter/search\" placeholder=\"[[search:type-a-category]]\">\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div component=\"category/list\" class=\"overflow-auto\" style=\"max-height: 350px;\"></div>\n\t\t\t\t<div class=\"px-3 py-1\">\n\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t<input id=\"search-children\" class=\"form-check-input\" type=\"checkbox\"/>\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"search-children\">[[search:search-child-categories]]</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\n\t<!-- tag filter -->\n\t<div class=\"post-search-item\">\n\t\t<div component=\"tag/filter\" class=\"dropdown\" data-filter-name=\"tag\">\n\t\t\t<a component=\"tag/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['label'] : null)) :
        "[[search:tags]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"tag/filter/search\" placeholder=\"[[search:type-a-tag]]\">\n\t\t\t\t\t<div component=\"tag/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t" + 
      compiled.blocks['tagFilterSelected'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<div component=\"tag/filter/results\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t" + 
      compiled.blocks['tagFilterResults'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<!-- user name filter -->\n\t<div class=\"post-search-item\">\n\t\t<div component=\"user/filter\" class=\"dropdown\" data-filter-name=\"user\">\n\t\t\t<a component=\"user/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['label'] : null)) :
        "[[search:posted-by]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n\t\t\t\t\t<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t" + 
      compiled.blocks['userFilterSelected'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t" + 
      compiled.blocks['userFilterResults'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\n\t<!-- reply count filter -->\n\t<div class=\"post-search-item\">\n\t\t<div class=\"dropdown\" data-filter-name=\"replies\">\n\t\t\t<a id=\"reply-count-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['label'] : null)) :
        "[[search:replies]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 300px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-nowrap gap-2\">\n\t\t\t\t\t<select id=\"reply-count-filter\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"atleast\">[[search:at-least]]</option>\n\t\t\t\t\t\t<option value=\"atmost\">[[search:at-most]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<input id=\"reply-count\" type=\"number\" min=\"0\" class=\"form-control py-2 ps-2 pe-3\" />\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<!-- time filter -->\n\t<div class=\"post-search-item\">\n\t\t<div class=\"dropdown\" data-filter-name=\"time\">\n\t\t\t<a id=\"post-time-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['label'] : null)) :
        "[[search:time]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-nowrap gap-2\">\n\t\t\t\t\t<select id=\"post-time-filter\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"newer\">[[search:newer-than]]</option>\n\t\t\t\t\t\t<option value=\"older\">[[search:older-than]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<select id=\"post-time-range\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"\">[[search:any-date]]</option>\n\t\t\t\t\t\t<option value=\"86400\">[[search:yesterday]]</option>\n\t\t\t\t\t\t<option value=\"604800\">[[search:one-week]]</option>\n\t\t\t\t\t\t<option value=\"1209600\">[[search:two-weeks]]</option>\n\t\t\t\t\t\t<option value=\"2592000\">[[search:one-month]]</option>\n\t\t\t\t\t\t<option value=\"7776000\">[[search:three-months]]</option>\n\t\t\t\t\t\t<option value=\"15552000\">[[search:six-months]]</option>\n\t\t\t\t\t\t<option value=\"31104000\">[[search:one-year]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<!-- sort filter -->\n\t<div class=\"post-search-item\">\n\t\t<div class=\"dropdown\" data-filter-name=\"sort\">\n\t\t\t<a id=\"sort-by-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['label'] : null)) :
        "[[search:sort]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 250px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t<select id=\"post-sort-by\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"relevance\">[[search:relevance]]</option>\n\t\t\t\t\t\t<option value=\"timestamp\">[[search:post-time]]</option>\n\t\t\t\t\t\t<option value=\"votes\">[[search:votes]]</option>\n\t\t\t\t\t\t<option value=\"topic.lastposttime\">[[search:last-reply-time]]</option>\n\t\t\t\t\t\t<option value=\"topic.title\">[[search:topic-title]]</option>\n\t\t\t\t\t\t<option value=\"topic.postcount\">[[search:number-of-replies]]</option>\n\t\t\t\t\t\t<option value=\"topic.viewcount\">[[search:number-of-views]]</option>\n\t\t\t\t\t\t<option value=\"topic.votes\">[[search:topic-votes]]</option>\n\t\t\t\t\t\t<option value=\"topic.timestamp\">[[search:topic-start-date]]</option>\n\t\t\t\t\t\t<option value=\"user.username\">[[search:username]]</option>\n\t\t\t\t\t\t<option value=\"category.name\">[[search:category]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<select id=\"post-sort-direction\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"desc\">[[search:descending]]</option>\n\t\t\t\t\t\t<option value=\"asc\">[[search:ascending]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<!-- save & reset preferences -->\n\t<div class=\"post-search-item\">\n\t\t<div class=\"dropdown\">\n\t\t\t<a class=\"btn btn-light btn-sm border border-gray-300 dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">[[search:save]] <span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 300px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t<button id=\"save-preferences\" class=\"btn btn-primary\">[[search:save-preferences]]</button>\n\t\t\t\t\t<button id=\"clear-preferences\" class=\"btn-outline border\">[[search:clear-preferences]]</button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n\t\t\t\t<div id=\"results\" class=\"search-results col-md-12\" data-search-query=\"" + 
      __escape(guard((context != null) ? context['search_query'] : null)) + 
      "\">\n\t" + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "\n\t<div class=\"alert alert-info\">[[search:results-matching, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['search_query'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['time'] : null)) + 
          "]] </div>\n\t" :
        "\n\t" + 
          (guard((context != null) ? context['search_query'] : null) ?
            "\n\t<div class=\"alert alert-warning\">[[search:no-matches]]</div>\n\t" :
            "") + 
          "\n\t") + 
      "\n\n\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n\n\t" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\n\t<ul id=\"users-container\" class=\"users-container list-unstyled d-flex flex-wrap gap-2\">\n" + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\n" + 
          (guard((context != null) ? context['anonymousUserCount'] : null) ?
            "\n<li class=\"users-box anon-user text-center pb-3\" style=\"width: 102px;\">\n\t<span class=\"avatar avatar-rounded text-bg-secondary\" component=\"avatar/icon\" style=\"--avatar-size: 64px;\">G</span>\n\t<br/>\n\t<div class=\"user-info\">\n\t\t<span id=\"online_anon_count\">" + 
              __escape(guard((context != null) ? context['anonymousUserCount'] : null)) + 
              "</span>\n\t\t<span>[[global:guests]]</span>\n\t</div>\n</li>\n" :
            "") + 
          "\n</ul>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "\n\t" + 
          compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
          "\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['categories'] != null) ? context['categories']['length'] : null) ?
        "\n\t<ul class=\"categories\">\n\t\t" + 
          compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
          "\n\t</ul>\n\t" :
        "") + 
      "\n\n\t<div component=\"pagination\" class=\"pagination-container" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t<ul class=\"pagination hidden-xs justify-content-center\">\n\t\t<li class=\"page-item previous float-start" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t<li class=\"page-item next float-end" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class=\"pagination hidden-sm hidden-md hidden-lg justify-content-center\">\n\t\t<li class=\"page-item first" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
      "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n\t\t</li>\n\n\t\t<li class=\"page-item previous" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t<a class=\"page-link\" href=\"#\">" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "</a>\n\t\t</li>\n\n\t\t<li class=\"page-item next" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\n\t\t<li class=\"page-item last" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" class=\"breadcrumb-item " + 
          (index === length - 1 ?
            "active" :
            "") + 
          "\">\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n\t\t\t<span itemprop=\"name\">\n\t\t\t\t" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\n\t\t\t\t" + 
          (index === length - 1 ?
            "\n\t\t\t\t" + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\n\t\t\t\t" + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</span>\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    },
    'tagFilterSelected': function tagFilterSelected(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagFilterSelected'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n\t\t\t\t\t\t\t<div>" + 
          __escape(guard((context != null && context['tagFilterSelected'] != null && context['tagFilterSelected'][key0] != null) ? context['tagFilterSelected'][key0]['valueEscaped'] : null)) + 
          "</div>\n\t\t\t\t\t\t\t<button component=\"tag/filter/delete\" data-tag=\"" + 
          __escape(guard((context != null && context['tagFilterSelected'] != null && context['tagFilterSelected'][key0] != null) ? context['tagFilterSelected'][key0]['valueEscaped'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'tagFilterResults': function tagFilterResults(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<button class=\"btn btn-light btn-sm border\" data-tag=\"" + 
          __escape(guard((context != null && context['tagFilterResults'] != null && context['tagFilterResults'][key0] != null) ? context['tagFilterResults'][key0]['valueEscaped'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tagFilterResults'] != null && context['tagFilterResults'][key0] != null) ? context['tagFilterResults'][key0]['valueEscaped'] : null)) + 
          "</button>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'userFilterSelected': function userFilterSelected(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['userFilterSelected'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterSelected'] != null && context['userFilterSelected'][key0] != null) ? context['userFilterSelected'][key0]['username'] : null)) + 
          "\n\t\t\t\t\t\t\t<button component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterSelected'] != null && context['userFilterSelected'][key0] != null) ? context['userFilterSelected'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'userFilterResults': function userFilterResults(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<button class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<div class=\"topic-row card clearfix mb-3\">\n\t\t<div class=\"card-body\">\n\t\t\t<div>\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t<span class=\"search-result-text search-result-title\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "</a></span>\n\t\t\t</div>\n\n\t\t\t" + 
          (guard((context != null) ? context['showAsPosts'] : null) ?
            "\n\t\t\t<div class=\"search-result-text\">\n\t\t\t\t" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\n\t\t\t\t<p class=\"fade-out\"></p>\n\t\t\t</div>\n\t\t\t" :
            "") + 
          "\n\n\t\t\t<small class=\"post-info float-end\">\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">\n\t\t\t\t\t<div class=\"category-item d-inline-block\">\n\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null), "24px", "rounded-circle"])) + 
          "\n\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "\n\t\t\t\t\t</div>\n\t\t\t\t</a> &bull;\n\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n\t\t\t</small>\n\t\t</div>\n\t</div>\n\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"users-box registered-user text-center pb-3\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" style=\"width: 102px;\">\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "64px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\n\t<div class=\"user-info\">\n\t\t<div class=\"text-nowrap text-truncate\">\n\t\t\t<span>\n\t\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['status'] : null)) + 
          "\" title=\"[[global:" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['status'] : null)) + 
          "]]\"></i>\n\t\t\t\t<a  href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\n\t\t\t</span>\n\t\t</div>\n\t\t" + 
          (guard((context != null) ? context['section_online'] : null) ?
            "\n\t\t<div class=\"lastonline\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_joindate'] : null) ?
            "\n\t\t<div class=\"joindate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-reputation'] : null) ?
            "\n\t\t<div class=\"reputation\">\n\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-posts'] : null) ?
            "\n\t\t<div class=\"post-count\">\n\t\t\t<i class=\"fa fa-pencil\"></i>\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_flagged'] : null) ?
            "\n\t\t<div class=\"flag-count\">\n\t\t\t<i class=\"fa fa-flag\"></i>\n\t\t\t<span><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/flags?targetUid=" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)) + 
              "</a></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\t</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<h5 class=\"float-start tag-container me-4 mb-4 fw-bold\">\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) + 
          "\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\"><span class=\"tag-item text-muted text-uppercase text-nowrap tag-class-" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['class'] : null)) + 
          " me-2\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span><span class=\"tag-topic-count text-primary text-nowrap\" title=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)])) + 
          "</span></a>\n</h5>\n";
      }, function alt() {
        return "";
      });
    },
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-numRecentReplies=\"1\" class=\"row clearfix category-" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          " " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['unread-class'] : null)) + 
          "\">\r\n\t<meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\">\r\n\r\n\t<div class=\"content col-12 " + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "col-md-10 col-sm-12" :
            "col-md-7 col-sm-9") + 
          "\">\r\n\t\t<div class=\"float-start\">\r\n\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "48px", "rounded-circle"])) + 
          "\r\n\t\t</div>\r\n\t\t<h2 class=\"title\">\r\n\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isSection'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n" :
            "\n" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\n" :
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\n") + 
              "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n</a>\n") + 
          "\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null) ?
            "\r\n\t\t\t<div class=\"description text-muted\">\r\n\t\t\t\t" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
              "\r\n\t\t\t</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
            "" :
            "\r\n\t\t\t" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null) ? context['categories'][key0]['children']['length'] : null) ?
                "\r\n\t\t\t<div class=\"category-children\">\r\n\t\t\t\t" + 
                  iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['children'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\r\n\t\t\t\t" + 
                      (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['isSection'] : null) ?
                        "" :
                        "\r\n\t\t\t\t<span class=\"category-children-item\">\r\n\t\t\t\t\t" + 
                          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
                          "\r\n\t\t\t\t\t" + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['link'] : null) ?
                            "\r\n\t\t\t\t\t<a href=\"" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['link'] : null)) + 
                              "\">" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['name'] : null)) + 
                              "</a>\r\n\t\t\t\t\t" :
                            "\r\n\t\t\t\t\t<a href=\"" + 
                              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                              "/category/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['slug'] : null)) + 
                              "\">" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['name'] : null)) + 
                              "</a>\r\n\t\t\t\t\t") + 
                          "\r\n\t\t\t\t</span>\r\n\t\t\t\t") + 
                      "\r\n\t\t\t\t";
                  }, function alt() {
                    return "";
                  }) + 
                  "\r\n\t\t\t</div>\r\n\t\t\t" :
                "") + 
              "\r\n\t\t\t") + 
          "\r\n\t\t</div>\r\n\t\t<span class=\"d-block d-sm-none float-end\">\r\n\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['timestampISO'] : null) ?
            "\r\n\t\t\t<a class=\"permalink\" href=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['url'] : null)) + 
              "\">\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['timestampISO'] : null)) + 
              "\"></small>\r\n\t\t\t</a>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</span>\r\n\t</div>\r\n</li>\r\n\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t\t<a class=\"page-link\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n\t\t\t</li>\n\t\t\t" :
            "\n\t\t\t<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n\t\t\t\t<a class=\"page-link\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n\t\t\t</li>\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
