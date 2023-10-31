
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
      "\" data-parent-cid=\"" + 
      __escape(guard((context != null) ? context['parentCid'] : null)) + 
      "\" class=\"row clearfix\">\n\t<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\n\n\t<div class=\"content col-10 depth-" + 
      __escape(guard((context != null) ? context['depth'] : null)) + 
      "\">\n\t\t<div class=\"float-start\">\n\t\t" + 
      __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "48px", "rounded-circle"])) + 
      "\n\t\t</div>\n\n\t\t<h2 class=\"title\">\n\t\t\t" + 
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
      "\n\t\t</h2>\n\t\t<div>\n\t\t\t" + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\n\t\t\t<div class=\"description text-muted\">\n\t\t\t\t" + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n\t<div class=\"col-2\">\n\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n\n\t<button class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<span component=\"category/watching/menu\" " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[category:watching]]</span></span>\n\n\t\t<span component=\"category/notwatching/menu\" " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-clock-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[category:not-watching]]</span></span>\n\n\t\t<span component=\"category/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[category:ignoring]]</span></span>\n\t\t<span class=\"caret\"></span>\n\t</button>\n\n\t<ul class=\"dropdown-menu dropdown-menu-end\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"category/watching\" data-state=\"watching\">\n\t\t\t\t<span><i component=\"category/watching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-inbox\"></i> [[category:watching]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[category:watching.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\">\n\t\t\t\t<span><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-clock-o\"></i> [[category:not-watching]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[category:not-watching.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\">\n\t\t\t\t<span><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-eye-slash\"></i> [[category:ignoring]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[category:ignoring.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n" :
        "") + 
      "\n\t</div>\n</li>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
