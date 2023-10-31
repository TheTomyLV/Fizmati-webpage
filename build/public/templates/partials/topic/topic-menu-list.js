
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
    return (guard((context != null && context['privileges'] != null) ? context['privileges']['editable'] : null) ?
        "\n<li " + 
          (guard((context != null) ? context['locked'] : null) ?
            "hidden" :
            "") + 
          "><a component=\"topic/lock\" href=\"#\" class=\"dropdown-item " + 
          (guard((context != null) ? context['locked'] : null) ?
            "hidden" :
            "") + 
          "\"><i class=\"fa fa-fw fa-lock\"></i> [[topic:thread-tools.lock]]</a></li>\n<li " + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "hidden") + 
          "><a component=\"topic/unlock\" href=\"#\" class=\"dropdown-item " + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "hidden") + 
          "\"><i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread-tools.unlock]]</a></li>\n<li " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "hidden" :
            "") + 
          "><a component=\"topic/pin\" href=\"#\" class=\"dropdown-item " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "hidden" :
            "") + 
          "\"><i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread-tools.pin]]</a></li>\n<li " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "" :
            "hidden") + 
          "><a component=\"topic/unpin\" href=\"#\" class=\"dropdown-item " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "" :
            "hidden") + 
          "\"><i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread-tools.unpin]]</a></li>\n\n<li><a component=\"topic/move\" class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread-tools.move]]</a></li>\n<li><a component=\"topic/merge\" class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread-tools.merge]]</a></li>\n<li><a component=\"topic/fork\" class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread-tools.fork]]</a></li>\n<li><a component=\"topic/tag\" class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-fw fa-tag\"></i> [[topic:thread-tools.tag]]</a></li>\n" + 
          (guard((context != null) ? context['scheduled'] : null) ?
            "" :
            "\n<li><a component=\"topic/move-posts\" class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread-tools.move-posts]]</a></li>\n") + 
          "\n<li><a component=\"topic/mark-unread-for-all\" class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread-tools.markAsUnreadForAll]]</a></li>\n<li class=\"dropdown-divider\"></li>\n" :
        "") + 
      "\n\n" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['deletable'] : null) ?
        "\n<li " + 
          (guard((context != null) ? context['deleted'] : null) ?
            "hidden" :
            "") + 
          "><a component=\"topic/delete\" href=\"#\" class=\"dropdown-item " + 
          (guard((context != null) ? context['deleted'] : null) ?
            "hidden" :
            "") + 
          "\"><i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread-tools.delete]]</a></li>\n" + 
          (guard((context != null) ? context['scheduled'] : null) ?
            "" :
            "\n<li " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "><a component=\"topic/restore\" href=\"#\" class=\"dropdown-item " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "\"><i class=\"fa fa-fw fa-history\"></i> [[topic:thread-tools.restore]]</a></li>\n") + 
          "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['purge'] : null) ?
            "\n<li " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "><a component=\"topic/purge\" href=\"#\" class=\"dropdown-item " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "\"><i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread-tools.purge]]</a></li>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) ?
            "\n<li><a component=\"topic/delete/posts\" class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread-tools.delete-posts]]</a></li>\n" :
            "") + 
          "\n\n" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n" :
        "");
  }

  compiled.blocks = {
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li><a href=\"#\" class=\"dropdown-item " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\"><i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a></li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
