<li component="chat/message" class="chat-message mx-2 pe-2 fw-light clear{{{ if messages.deleted }}} deleted{{{ end }}} {{{ if messages.pinned}}} pinned{{{ end }}}" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-self="{messages.self}" data-break="{messages.newSet}" data-timestamp="{messages.timestamp}" data-username="{messages.fromUser.username}">

	{{{ if messages.parent }}}
	<div class="d-flex ms-4 mb-2 align-items-center">
	<div component="chat/message/parent" data-parent-mid="{messages.parent.mid}" data-uid="{messages.parent.fromuid}" class="btn btn-sm btn-light align-items-start d-flex flex-row gap-2 text-start w-100">
		<div class="d-flex gap-2 text-sm text-nowrap">
			<div><i class="fa fa-sm fa-reply opacity-50"></i></div>
			<a href="{config.relative_path}/user/{messages.parent.user.userslug}" class="text-decoration-none lh-sm">{buildAvatar(messages.parent.user, "14px", true, "not-responsive")}</a>
			<a class="chat-user fw-semibold" href="{config.relative_path}/user/{messages.parent.user.userslug}">{messages.parent.user.displayname}</a>
			<span class="chat-timestamp text-muted timeago text-nowrap hidden" title="{messages.parent.timestampISO}"></span>
		</div>
		<div component="chat/message/parent/content" class="text-muted line-clamp-1 text-sm w-100">{messages.parent.content}</div>
	</div>
</div>
	{{{ end }}}

	<div class="message-header">
		<a href="{config.relative_path}/user/{messages.fromUser.userslug}">{buildAvatar(messages.fromUser, "32px", true, "not-responsive")}</a>
		<span class="chat-user fw-bold"><a href="{config.relative_path}/user/{messages.fromUser.userslug}">{messages.fromUser.displayname}</a></span>
		<!-- IF ../fromUser.banned -->
		<span class="badge bg-danger">[[user:banned]]</span>
		<!-- END -->
		<!-- IF ../fromUser.deleted -->
		<span class="badge bg-danger">[[user:deleted]]</span>
		<!-- END -->
		<small class="chat-timestamp text-muted ms-2 timeago" title="{messages.timestampISO}"></small>

		<div component="chat/message/edited" class="text-muted float-end {{{ if !messages.edited }}}hidden{{{ end }}}" title="[[global:edited-timestamp, {messages.editedISO}]]"><i class="fa fa-edit"></i></span></div>
	</div>
	<div class="message-body-wrapper">
		<div component="chat/message/body" class="message-body">
			{messages.content}
		</div>
		<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->
		<div component="chat/message/controls" class="btn-group controls">
			<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->
			<button class="btn btn-sm btn-link" data-action="reply" title="[[topic:reply]]"><i class="fa fa-reply"></i></button>
			{{{ if (isAdminOrGlobalMod || (!config.disableChatMessageEditing && messages.self)) }}}
			<button class="btn btn-sm btn-link" data-action="edit" title="[[topic:edit]]"><i class="fa fa-pencil"></i></button>
			<button class="btn btn-sm btn-link" data-action="delete" title="[[topic:delete]]"><i class="fa fa-trash"></i></button>
			<button class="btn btn-sm btn-link" data-action="restore" title="[[topic:restore]]"><i class="fa fa-repeat"></i></button>
			{{{ end }}}
			{{{ if (isAdminOrGlobalMod || isOwner )}}}
				<button class="btn btn-sm btn-link" data-action="pin" title="[[modules:chat.pin-message]]"><i class="fa fa-thumbtack"></i></button>
				<button class="btn btn-sm btn-link" data-action="unpin" title="[[modules:chat.unpin-message]]"><i class="fa fa-thumbtack fa-rotate-90"></i></button>
			{{{ end }}}
			{{{ if isAdminOrGlobalMod }}}
			<button class="btn btn-sm btn-link chat-ip-button" title="[[modules:chat.show-ip]]"><i class="fa fa-info-circle"></i></button>
			{{{ end }}}
		</div>
	</div>
</li>