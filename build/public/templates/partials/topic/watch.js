
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
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\"\ndata-bs-toggle=\"tooltip\"\n\t" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "title=\"[[topic:watching]]\"" :
            "") + 
          "\n\t" + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "title=\"[[topic:not-watching]]\"" :
            "") + 
          "\n\t" + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "title=\"[[topic:ignoring]]\"" :
            "") + 
          "\n>\n\t<button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<span component=\"topic/following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-o\"></i></span>\n\n\t\t<span component=\"topic/not-following/menu\" " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-slash-o\"></i></span>\n\n\t\t<span component=\"topic/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i></span>\n\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"topic/following\">\n\t\t\t\t<span><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-bell-o\"></i> [[topic:watching]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[topic:watching.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"topic/not-following\">\n\t\t\t\t<span><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-bell-slash-o\"></i> [[topic:not-watching]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[topic:not-watching.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item d-flex\" href=\"#\" component=\"topic/ignoring\">\n\t\t\t\t<span><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<span><i class=\"fa fa-fw fa-eye-slash\"></i> [[topic:ignoring]]</span>\n\t\t\t\t\t<p class=\"help-text text-muted\"><small>[[topic:ignoring.description]]</small></p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
