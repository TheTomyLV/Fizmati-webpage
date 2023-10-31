
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
    return (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"tag/watch\"\ndata-bs-toggle=\"tooltip\">\n\t<button class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<span component=\"tag/following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          ">\n\t\t\t<i class=\"fa fa-fw fa-bell-o\"></i>\n\t\t\t<span class=\"d-none d-md-inline\">[[tags:watching]]</span>\n\t\t</span>\n\t\t<span component=\"tag/not-following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "class=\"hidden\"" :
            "") + 
          ">\n\t\t\t<i class=\"fa fa-fw fa-bell-slash-o\"></i>\n\t\t\t<span class=\"d-none d-md-inline\">[[tags:not-watching]]</span>\n\t\t</span>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"tag/following\">\n\t\t\t\t<span><i component=\"tag/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-bell-o\"></i> [[tags:watching]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[tags:watching.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"tag/not-following\">\n\t\t\t\t<span><i component=\"tag/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "fa-check") + 
          "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-bell-slash-o\"></i> [[tags:not-watching]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[tags:not-watching.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
