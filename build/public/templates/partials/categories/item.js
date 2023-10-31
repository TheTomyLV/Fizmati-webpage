
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" data-numRecentReplies=\"1\" class=\"row clearfix category-" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      " " + 
      __escape(guard((context != null) ? context['unread-class'] : null)) + 
      "\">\r\n\t<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\r\n\r\n\t<div class=\"content col-12 " + 
      (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
        "col-md-10 col-sm-12" :
        "col-md-7 col-sm-9") + 
      "\">\r\n\t\t<div class=\"float-start\">\r\n\t\t" + 
      __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "48px", "rounded-circle"])) + 
      "\r\n\t\t</div>\r\n\t\t<h2 class=\"title\">\r\n\t\t\t" + 
      (guard((context != null) ? context['isSection'] : null) ?
        "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n" :
        "\n" + 
          (guard((context != null) ? context['link'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null) ? context['link'] : null)) + 
              "\" itemprop=\"url\">\n" :
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null)) + 
              "\" itemprop=\"url\">\n") + 
          "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n</a>\n") + 
      "\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t" + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\r\n\t\t\t<div class=\"description text-muted\">\r\n\t\t\t\t" + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
        "" :
        "\r\n\t\t\t" + 
          (guard((context != null && context['children'] != null) ? context['children']['length'] : null) ?
            "\r\n\t\t\t<div class=\"category-children\">\r\n\t\t\t\t" + 
              compiled.blocks['../children'](helpers, context, guard, iter, helper) + 
              "\r\n\t\t\t</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t") + 
      "\r\n\t\t</div>\r\n\t\t<span class=\"d-block d-sm-none float-end\">\r\n\t\t\t" + 
      (guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null) ?
        "\r\n\t\t\t<a class=\"permalink\" href=\"" + 
          __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['url'] : null)) + 
          "\">\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null)) + 
          "\"></small>\r\n\t\t\t</a>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</span>\r\n\t</div>\r\n</li>\r\n";
  }

  compiled.blocks = {
    '../children': function children(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['children'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['isSection'] : null) ?
            "" :
            "\r\n\t\t\t\t<span class=\"category-children-item\">\r\n\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\r\n\t\t\t\t\t" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
                "\r\n\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
                  "</a>\r\n\t\t\t\t\t" :
                "\r\n\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['slug'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
                  "</a>\r\n\t\t\t\t\t") + 
              "\r\n\t\t\t\t</span>\r\n\t\t\t\t") + 
          "\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
