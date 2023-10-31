
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
    return "<div id=\"chat-modal\" class=\"chat-modal modal hide\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Chat\" aria-hidden=\"true\" data-backdrop=\"none\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\" component=\"chat/message/window\">\n\t\t\t<div class=\"modal-header d-flex\">\n\t\t\t\t<div class=\"fs-6 flex-grow-1 fw-semibold tracking-tight text-truncate text-nowrap\" component=\"chat/room/name\" data-icon=\"" + 
      __escape(guard((context != null) ? context['icon'] : null)) + 
      "\">" + 
      (guard((context != null) ? context['roomName'] : null) ?
        "<i class=\"fa " + 
          __escape(guard((context != null) ? context['icon'] : null)) + 
          " text-muted\"></i> " + 
          __escape(guard((context != null) ? context['roomName'] : null)) :
        __escape(guard((context != null) ? context['chatWithMessage'] : null))) + 
      "</div>\n\t\t\t\t<button type=\"button\" class=\"btn btn-link d-none d-md-block p-2 text-muted align-text-top\" data-action=\"maximize\" title=\"[[modules:chat.maximize]]\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\">\n\t\t\t\t\t<span aria-hidden=\"true\"><i class=\"fa fa-fw fa-expand\"></i></span>\n\t\t\t\t\t<span class=\"sr-only\">[[modules:chat.maximize]]</span>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-link d-none d-md-block p-2 text-muted align-text-top\" data-action=\"minimize\" title=\"[[modules:chat.minimize]]\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\">\n\t\t\t\t\t<span aria-hidden=\"true\"><i class=\"fa fa-fw fa-minus\"></i></span>\n\t\t\t\t\t<span class=\"sr-only\">[[modules:chat.minimize]]</span>\n\t\t\t\t</button>\n\t\t\t\t<div class=\"d-flex gap-1 align-items-stretch\">\n\t<!-- search -->\n\t<button class=\"btn btn-sm btn-light\" component=\"chat/room/search/toggle\" data-manual-tooltip=\"1\" title=\"[[global:header.search]]\">\n\t\t<i class=\"fa fa-search text-muted\"></i>\n\t</button>\n\t<div component=\"chat/room/search/container\" class=\"position-relative hidden align-self-center\">\n\t\t<input component=\"chat/room/search\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" style=\"width: 150px;\">\n\t\t<a component=\"chat/room/search/clear\" href=\"#\" class=\"hidden px-2 py-1 position-absolute top-50 end-0 translate-middle-y\">\n\t\t\t<i class=\"fa fa-times text-muted opacity-75\"></i>\n\t\t</a>\n\t</div>\n\n\t<!-- notification dropdown -->\n\t<div class=\"dropdown d-flex\" data-manual-tooltip=\"1\" title=\"[[modules:chat.notification-settings]]\" component=\"chat/notification/setting\">\n\t\t<button class=\"btn btn-sm btn-light position-relative\" data-bs-toggle=\"dropdown\">\n\t\t\t<i class=\"fa fa-bell text-muted\"></i>\n\t\t\t<span class=\"position-absolute top-0 end-0 text-xs text-muted opacity-75\" style=\"font-size: 10px!important; padding: 1px; line-height: 10px;\">\n\t\t\t\t<i component=\"chat/notification/setting/icon\" class=\"fa " + 
      __escape(guard((context != null) ? context['notificationOptionsIcon'] : null)) + 
      "\"></i>\n\t\t\t</span>\n\t\t</button>\n\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\">\n\t\t\t" + 
      compiled.blocks['notificationOptions'](helpers, context, guard, iter, helper) + 
      "\n\t\t</ul>\n\t</div>\n\n\t<!-- pinned messages -->\n\t<button component=\"chat/pinned/messages/btn\" class=\"btn btn-sm btn-light\" title=\"[[modules:chat.pinned-messages]]\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\">\n\t\t<i class=\"fa fa-thumb-tack text-muted\"></i>\n\t</button>\n\n\t<!-- manage/options dropdown -->\n\t<div class=\"dropdown d-flex\" data-manual-tooltip=\"1\" title=\"[[modules:chat.options]]\">\n\t\t<button class=\"btn btn-sm btn-light\" data-bs-toggle=\"dropdown\" component=\"chat/controlsToggle\">\n\t\t\t<i class=\"fa fa-gear text-muted\"></i>\n\t\t</button>\n\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" component=\"chat/controls\">\n\t\t\t<li>\n\t\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"manage\">\n\t\t\t\t\t<i class=\"fa fa-fw text-muted fa-cog\"></i> [[modules:chat.manage-room]]\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t" + 
      (guard((context != null) ? context['isOwner'] : null) ?
        "\n\t\t\t<li>\n\t\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"rename\">\n\t\t\t\t\t<i class=\"fa fa-fw text-muted fa-edit\"></i> [[modules:chat.rename-room]]\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t" :
        "") + 
      "\n\t\t\t<li>\n\t\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"leave\">\n\t\t\t\t\t<i class=\"fa fa-fw text-muted fa-sign-out\"></i> [[modules:chat.leave-room]]\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t" + 
      ((guard((context != null) ? context['public'] : null) && guard((context != null) ? context['isAdmin'] : null)) ?
        "\n\t\t\t<li>\n\t\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"delete\">\n\t\t\t\t\t<i class=\"fa fa-fw text-danger fa-trash\"></i> [[modules:chat.delete-room]]\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t" :
        "") + 
      "\n\t\t</ul>\n\t</div>\n\n\t<!-- users toggle -->\n\t" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\n\t<div component=\"chat/user/list/btn\" class=\"btn btn-sm btn-light d-none d-lg-flex flex-nowrap gap-3 align-items-center\" title=\"[[modules:chat.view-users-list]]\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\">\n\t\t<div class=\"d-flex text-nowrap\">\n\t\t\t" + 
          (guard((context != null && context['users'] != null) ? context['users']['0'] : null) ?
            "\n\t\t\t<span style=\"width: 18px; z-index: 3;\" class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['users'] != null && context['users']['0'] != null) ? context['users']['0']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users']['0'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</span>\n\t\t\t" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['users'] != null) ? context['users']['1'] : null) ?
            "\n\t\t\t<span style=\"width: 18px; z-index: 2;\" class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['users'] != null && context['users']['1'] != null) ? context['users']['1']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users']['1'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</span>\n\t\t\t" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['users'] != null) ? context['users']['2'] : null) ?
            "\n\t\t\t<span style=\"width: 18px; z-index: 1;\" class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['users'] != null && context['users']['2'] != null) ? context['users']['2']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users']['2'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</span>\n\t\t\t" :
            "") + 
          "\n\t\t</div>\n\t\t" + 
          __escape(guard((context != null) ? context['userCount'] : null)) + 
          "\n\t</div>\n\t" :
        "") + 
      "\n</div>\n\n\n\t\t\t\t<button id=\"chat-close-btn\" type=\"button\" class=\"btn-close\" aria-label=\"Close\"></button>\n\t\t\t</div>\n\t\t\t<div class=\"position-relative\">\n\t<div component=\"chat/messages/scroll-up-alert\" class=\"py-1 mt-1 position-absolute start-50 top-50 translate-middle text-sm scroll-up-alert alert alert-info d-none d-md-block text-nowrap hidden\" role=\"button\" style=\"z-index: 500;\"><i class=\"fa fa-fw fa-arrow-down\"></i> [[modules:chat.scroll-up-alert]]</div>\n</div>\n\t\t\t<div class=\"modal-body d-flex flex-column\" style=\"height: 500px;\">\n\t\t\t\t<div class=\"d-flex flex-grow-1 gap-1 overflow-auto\" style=\"min-width: 0px;\">\n\t\t\t\t\t<div component=\"chat/messages\" class=\"expanded-chat d-flex flex-column flex-grow-1\" data-roomid=\"" + 
      __escape(guard((context != null) ? context['roomId'] : null)) + 
      "\" style=\"min-width: 0px;\">\n\t\t\t\t\t\t<ul component=\"chat/message/content\" class=\"chat-content p-0 m-0 list-unstyled overflow-auto flex-grow-1\">\n\t\t\t\t\t\t\t" + 
      compiled.blocks['messages'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<ul component=\"chat/message/search/results\" class=\"chat-content p-0 m-0 list-unstyled overflow-auto flex-grow-1 hidden\">\n\t\t\t\t\t\t\t<div component=\"chat/message/search/no-results\" class=\"text-center p-4 d-flex flex-column\">\n\t\t\t\t\t\t\t\t<div class=\"p-4\"><i class=\"fa-solid fa-wind fs-2 text-muted\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"text-xs fw-semibold text-muted\">[[search:no-matches]]</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div component=\"chat/composer\" class=\"d-flex flex-column border-top pt-2 align-items-start\">\n\t<div component=\"chat/composer/replying-to\" data-tomid=\"\" class=\"text-sm px-2 mb-1 d-flex gap-2 align-items-center hidden\">\n\t\t<div component=\"chat/composer/replying-to-text\"></div> <button component=\"chat/composer/replying-to-cancel\" class=\"btn-ghost-sm px-2 py-1\"><i class=\"fa fa-times\"></i></button>\n\t</div>\n\t<div class=\"w-100 flex-grow-1 flex-nowrap position-relative d-flex rounded-2 border border-secondary p-1 align-items-end\">\n\t\t<button component=\"chat/upload/button\" class=\"btn btn-light btn-sm px-2 rounded-1\" type=\"button\" title=\"[[global:upload]]\" data-bs-toggle=\"tooltip\"><i class=\"fa fa-fw fa-upload\"></i></button>\n\t\t<div class=\"flex-grow-1 align-self-center\">\n\t\t\t<textarea component=\"chat/input\" placeholder=\"[[modules:chat.placeholder.mobile]]\" class=\"bg-transparent text-body form-control chat-input mousetrap rounded-0 border-0 shadow-none px-1 py-0\" style=\"min-height: 1.5rem;height:0;max-height:30vh;resize:none;\"></textarea>\n\t\t</div>\n\t\t<div class=\"d-flex gap-1\">\n\t\t\t" + 
      compiled.blocks['composerActions'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t<button class=\"btn btn-primary btn-sm px-2 rounded-1\" type=\"button\" data-action=\"send\" title=\"[[modules:chat.send]]\" data-bs-toggle=\"tooltip\"><i class=\"fa fa-fw fa-paper-plane\"></i></button>\n\t\t</div>\n\t</div>\n\t<div class=\"d-flex justify-content-between align-items-center text-xs w-100 px-2 mt-1\">\n\t\t<div component=\"chat/composer/typing\" class=\"\">\n\t\t\t<div component=\"chat/composer/typing/users\" class=\"hidden\"></div>\n\t\t\t<div component=\"chat/composer/typing/text\" class=\"hidden\"></div>\n\t\t</div>\n\t\t<div component=\"chat/message/remaining\" class=\"text-xs text-muted\">" + 
      __escape(guard((context != null) ? context['maximumChatMessageLength'] : null)) + 
      "</div>\n\t</div>\n\t<form class=\"hidden\" component=\"chat/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n\t</form>\n</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"imagedrop\"><div>[[topic:composer.drag-and-drop-images]]</div></div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'notificationOptions': function notificationOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notificationOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li>\n\t\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-value=\"" + 
          __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['value'] : null)) + 
          "\" data-icon=\"" + 
          __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['icon'] : null)) + 
          "\">\n\t\t\t\t\t<div class=\"d-flex flex-column gap-1\">\n\t\t\t\t\t\t<div class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t\t<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['label'] : null)) + 
          "</div>\n\t\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['selected'] : null) ?
            "" :
            "hidden") + 
          "\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t" + 
          (index === 0 ?
            "\n\t\t\t\t\t\t<div component=\"chat/notification/setting/sub-label\" class=\"text-sm text-muted\">" + 
              __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['subLabel'] : null)) + 
              "</div>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</li>\n\n\t\t\t" + 
          (index === 0 ?
            "\n\t\t\t<li><hr class=\"dropdown-divider\"></li>\n\t\t\t" :
            "") + 
          "\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'messages': function messages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['messages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['system'] : null) ?
            "\n\t<li component=\"chat/system-message\" class=\"system-message fs-6 py-3 clear\" data-index=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['index'] : null)) + 
              "\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"0\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\">\r\n\t[[modules:chat.system." + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['username'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestampISO'] : null)) + 
              "]]\r\n</li>\n\t" :
            "\n\t<li component=\"chat/message\" class=\"chat-message mx-2 pe-2 fw-light clear" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['deleted'] : null) ?
                " deleted" :
                "") + 
              " " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['pinned'] : null) ?
                " pinned" :
                "") + 
              "\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['newSet'] : null)) + 
              "\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\" data-username=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['username'] : null)) + 
              "\">\r\n\r\n\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['parent'] : null) ?
                "\r\n\t<div class=\"d-flex ms-4 mb-2 align-items-center\">\n\t<div component=\"chat/message/parent\" data-parent-mid=\"" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['mid'] : null)) + 
                  "\" data-uid=\"" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['fromuid'] : null)) + 
                  "\" class=\"btn btn-sm btn-light align-items-start d-flex flex-row gap-2 text-start w-100\">\n\t\t<div class=\"d-flex gap-2 text-sm text-nowrap\">\n\t\t\t<div><i class=\"fa fa-sm fa-reply opacity-50\"></i></div>\n\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['userslug'] : null)) + 
                  "\" class=\"text-decoration-none lh-sm\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['user'] : null), "14px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                  "</a>\n\t\t\t<a class=\"chat-user fw-semibold\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['userslug'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['displayname'] : null)) + 
                  "</a>\n\t\t\t<span class=\"chat-timestamp text-muted timeago text-nowrap hidden\" title=\"" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['timestampISO'] : null)) + 
                  "\"></span>\n\t\t</div>\n\t\t<div component=\"chat/message/parent/content\" class=\"text-muted line-clamp-1 text-sm w-100\">" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['content'] : null)) + 
                  "</div>\n\t</div>\n</div>\r\n\t" :
                "") + 
              "\r\n\r\n\t<div class=\"message-header\">\r\n\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromUser'] : null), "32px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
              "</a>\r\n\t\t<span class=\"chat-user fw-bold\"><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['displayname'] : null)) + 
              "</a></span>\r\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['banned'] : null) ?
                "\r\n\t\t<span class=\"badge bg-danger\">[[user:banned]]</span>\r\n\t\t" :
                "") + 
              "\r\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['deleted'] : null) ?
                "\r\n\t\t<span class=\"badge bg-danger\">[[user:deleted]]</span>\r\n\t\t" :
                "") + 
              "\r\n\t\t<small class=\"chat-timestamp text-muted ms-2 timeago\" title=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestampISO'] : null)) + 
              "\"></small>\r\n\r\n\t\t<div component=\"chat/message/edited\" class=\"text-muted float-end " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['edited'] : null) ?
                "" :
                "hidden") + 
              "\" title=\"[[global:edited-timestamp, " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['editedISO'] : null)) + 
              "]]\"><i class=\"fa fa-edit\"></i></span></div>\r\n\t</div>\r\n\t<div class=\"message-body-wrapper\">\r\n\t\t<div component=\"chat/message/body\" class=\"message-body\">\r\n\t\t\t" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              "\r\n\t\t</div>\r\n\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\r\n\t\t<div component=\"chat/message/controls\" class=\"btn-group controls\">\r\n\t\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\r\n\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"reply\" title=\"[[topic:reply]]\"><i class=\"fa fa-reply\"></i></button>\r\n\t\t\t" + 
              ((guard((context != null) ? context['isAdminOrGlobalMod'] : null) || (!guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) && guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null))) ?
                "\r\n\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"edit\" title=\"[[topic:edit]]\"><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"delete\" title=\"[[topic:delete]]\"><i class=\"fa fa-trash\"></i></button>\r\n\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"restore\" title=\"[[topic:restore]]\"><i class=\"fa fa-repeat\"></i></button>\r\n\t\t\t" :
                "") + 
              "\r\n\t\t\t" + 
              ((guard((context != null) ? context['isAdminOrGlobalMod'] : null) || guard((context != null) ? context['isOwner'] : null)) ?
                "\r\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"pin\" title=\"[[modules:chat.pin-message]]\"><i class=\"fa fa-thumbtack\"></i></button>\r\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"unpin\" title=\"[[modules:chat.unpin-message]]\"><i class=\"fa fa-thumbtack fa-rotate-90\"></i></button>\r\n\t\t\t" :
                "") + 
              "\r\n\t\t\t" + 
              (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
                "\r\n\t\t\t<button class=\"btn btn-sm btn-link chat-ip-button\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle\"></i></button>\r\n\t\t\t" :
                "") + 
              "\r\n\t\t</div>\r\n\t</div>\r\n</li>\n\t") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'composerActions': function composerActions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['composerActions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<button data-action=\"" + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['action'] : null)) + 
          "\" class=\"btn-ghost-sm px-2 " + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['class'] : null)) + 
          "\" type=\"button\" title=\"" + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['title'] : null)) + 
          "\" data-bs-toggle=\"tooltip\"><i class=\"fa " + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['icon'] : null)) + 
          "\"></i></button>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
