
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
      "</h4>\n\t</div>\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n\t</div>\n</div>\n\n\t<div class=\"row m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 px-0 mb-4\" tabindex=\"0\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">DB Search</div>\n\t\t\t\t<div class=\"card-body row\">\n\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t<div class=\"alert alert-info\">\n\t\t\t\t\t\t\t\tTopics Indexed: <strong id=\"topics-indexed\">" + 
      __escape(guard((context != null) ? context['topicsIndexed'] : null)) + 
      "</strong> / <strong>" + 
      __escape(guard((context != null) ? context['topicCount'] : null)) + 
      "</strong>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"progress\" style=\"height:24px;\">\n\t\t\t\t\t\t\t\t<div class=\"topic-progress progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + 
      __escape(guard((context != null && context['progressData'] != null) ? context['progressData']['topicsPercent'] : null)) + 
      "%;min-width: 2em;\">" + 
      __escape(guard((context != null && context['progressData'] != null) ? context['progressData']['topicsPercent'] : null)) + 
      "%</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t<div class=\"alert alert-info\">\n\t\t\t\t\t\t\t\tPosts Indexed: <strong id=\"posts-indexed\">" + 
      __escape(guard((context != null) ? context['postsIndexed'] : null)) + 
      "</strong> / <strong>" + 
      __escape(guard((context != null) ? context['postCount'] : null)) + 
      "</strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"progress\" style=\"height:24px;\">\n\t\t\t\t\t\t\t\t<div class=\"post-progress progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + 
      __escape(guard((context != null && context['progressData'] != null) ? context['progressData']['postsPercent'] : null)) + 
      "%;min-width: 2em;\">" + 
      __escape(guard((context != null && context['progressData'] != null) ? context['progressData']['postsPercent'] : null)) + 
      "%</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t<div class=\"alert alert-info\">\n\t\t\t\t\t\t\t\tMessages Indexed: <strong id=\"messages-indexed\">" + 
      __escape(guard((context != null) ? context['messagesIndexed'] : null)) + 
      "</strong> / <strong>" + 
      __escape(guard((context != null) ? context['messageCount'] : null)) + 
      "</strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"progress\" style=\"height:24px;\">\n\t\t\t\t\t\t\t\t<div class=\"message-progress progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + 
      __escape(guard((context != null && context['progressData'] != null) ? context['progressData']['messagesPercent'] : null)) + 
      "%;min-width: 2em;\">" + 
      __escape(guard((context != null && context['progressData'] != null) ? context['progressData']['messagesPercent'] : null)) + 
      "%</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<button class=\"btn btn-warning\" id=\"reindex\" " + 
      (guard((context != null) ? context['working'] : null) ?
        "disabled" :
        "") + 
      ">Re Index</button>\n\t\t\t\t\t\t<button class=\"btn btn-danger\" id=\"clear-index\">Clear Index</button>\n\t\t\t\t\t\t<span id=\"work-in-progress\" class=\"" + 
      (guard((context != null) ? context['working'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t\t\t\t\t\t\t<i class=\"fa fa-gear fa-spin\"></i> Working...\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<hr/>\n\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['languageSupported'] : null) ?
        "\n\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t<label class=\"form-label\">Index Language</label>\n\t\t\t\t\t\t\t<select class=\"form-select\" id=\"indexLanguage\">\n\t\t\t\t\t\t\t\t" + 
          compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"btn btn-primary\" id=\"changeLanguage\">Change Language</button>\n\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t<label class=\"form-label\">Topic Limit</label>\n\t\t\t\t\t\t\t<input id=\"topicLimit\" type=\"text\" class=\"form-control\" placeholder=\"Number of topics to return\" value=\"" + 
      __escape(guard((context != null) ? context['topicLimit'] : null)) + 
      "\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t<label class=\"form-label\">Post Limit</label>\n\t\t\t\t\t\t\t<input id=\"postLimit\" type=\"text\" class=\"form-control\" placeholder=\"Number of posts to return\" value=\"" + 
      __escape(guard((context != null) ? context['postLimit'] : null)) + 
      "\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t<div class=\"post-search-item\">\n\t\t\t\t\t\t\t<label class=\"form-label\">Select categories to exclude from indexing</label>\n\t\t\t\t\t\t\t<select multiple class=\"form-select\" id=\"exclude-categories\" size=\"30\">\n\t\t\t\t\t\t\t\t" + 
      compiled.blocks['allCategories'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['languages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['name'] : null)) + 
          "</option>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'allCategories': function allCategories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['allCategories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['allCategories'] != null && context['allCategories'][key0] != null) ? context['allCategories'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['allCategories'] != null && context['allCategories'][key0] != null) ? context['allCategories'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['allCategories'] != null && context['allCategories'][key0] != null) ? context['allCategories'][key0]['text'] : null)) + 
          "</option>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
