
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
    return "<!-- main acp navigation menu -->\n\n<div class=\"accordion overflow-auto d-flex flex-column gap-1\" component=\"acp/accordion\" id=\"accordionACP\">\n\n\t<!-- dashboard menu -->\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseDashboard\" aria-expanded=\"true\" aria-controls=\"collapseDashboard\">\n\t\t\t<i class=\"fa fa-fw fa-gauge\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-dashboard]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseDashboard\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard\">[[admin/menu:dashboard/overview]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/logins\">[[admin/menu:dashboard/logins]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/users\">[[admin/menu:dashboard/users]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/topics\">[[admin/menu:dashboard/topics]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/searches\">[[admin/menu:dashboard/searches]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- manage menu -->\n\t" + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseManage\" aria-expanded=\"true\" aria-controls=\"collapseManage\">\n\t\t\t<i class=\"fa fa-fw fa-list\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-manage]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseManage\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-categories\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-users\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a>\n\t\t\t\t<hr/>\n\t\t\t\t<h6 class=\"text-xs ps-4\">[[pages:moderator-tools]]</h6>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/flags\">[[admin/menu:manage/flagged-content]] <i class=\"fa fa-external-link\"></i></a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t<!-- settings menu -->\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseSettings\" aria-expanded=\"true\" aria-controls=\"collapseSettings\">\n\t\t\t<i class=\"fa fa-fw fa-sliders\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-settings]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseSettings\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"settings-general\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<!-- appearance menu -->\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAppearance\" aria-expanded=\"true\" aria-controls=\"collapseAppearance\">\n\t\t\t<i class=\"fa fa-fw fa-paintbrush\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-appearance]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseAppearance\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-themes\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-skins\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-customise\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<!-- extend menu -->\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseExtend\" aria-expanded=\"true\" aria-controls=\"collapseExtend\">\n\t\t\t<i class=\"fa fa-fw fa-wrench\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-extend]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseExtend\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- plugins menu -->\n\t" + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsePlugins\" aria-expanded=\"true\" aria-controls=\"collapsePlugins\">\n\t\t\t<i class=\"fa fa-fw fa-plug\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-plugins]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapsePlugins\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t" + 
              compiled.blocks['plugins'](helpers, context, guard, iter, helper) + 
              "\n\n\t\t\t\t" + 
              (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                "\n\t\t\t\t<hr/>\n\t\t\t\t<div class=\"text-sm ms-4\">[[admin/menu:section-social-auth]]</div>\n\t\t\t\t" + 
                  compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
                  "\n\t\t\t\t" :
                "") + 
              "\n\t\t\t\t<hr/>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/extend/plugins#download\">[[admin/menu:extend/plugins.install]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
            "") + 
          "\n\t" :
        "") + 
      "\n\n\t<!-- advanced menu -->\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAdvanced\" aria-expanded=\"true\" aria-controls=\"collapseAdvanced\">\n\t\t\t<i class=\"fa fa-fw fa-superpowers\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-advanced]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseAdvanced\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a>\n\t\t\t\t" + 
          (guard((context != null) ? context['env'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n  </div>";
  }

  compiled.blocks = {
    'plugins': function plugins(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
          "</a>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          "</a>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
