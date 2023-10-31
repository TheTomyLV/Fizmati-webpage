<div data-widget-area="header">
	{{{each widgets.header}}}
	{{widgets.header.html}}
	{{{end}}}
</div>
<div class="row">
	<div class="topic {{{ if widgets.sidebar.length }}}col-lg-9 col-sm-12{{{ else }}}col-lg-12{{{ end }}}">
		<div class="topic-header sticky-top">
			<h1 component="post/header" class="" itemprop="name">
				<span class="topic-title">
					<span component="topic/labels" class="d-inline-flex gap-2 align-items-center">
						<i component="topic/scheduled" class="fa fa-clock-o {{{ if !scheduled }}}hidden{{{ end }}}" title="[[topic:scheduled]]"></i>
						<i component="topic/pinned" class="fa fa-thumb-tack {{{ if (scheduled || !pinned) }}}hidden{{{ end }}}" title="{{{ if !pinExpiry }}}[[topic:pinned]]{{{ else }}}[[topic:pinned-with-expiry, {pinExpiryISO}]]{{{ end }}}"></i>
						<i component="topic/locked" class="fa fa-lock {{{ if !locked }}}hidden{{{ end }}}" title="[[topic:locked]]"></i>
						<i class="fa fa-arrow-circle-right {{{ if !oldCid }}}hidden{{{ end }}}" title="{{{ if privileges.isAdminOrMod }}}[[topic:moved-from, {oldCategory.name}]]{{{ else }}}[[topic:moved]]{{{ end }}}"></i>
						{{{each icons}}}<span class="lh-1 align-middle">{@value}</span>{{{end}}}
					</span>
					<span component="topic/title">{title}</span>
				</span>
			</h1>

			<div class="topic-info clearfix">
				<div class="category-item d-inline-block">
					{buildCategoryIcon(category, "24px", "rounded-circle")}
					<a href="{config.relative_path}/category/{category.slug}">{category.name}</a>
				</div>

				<div data-tid="{./tid}" component="topic/tags" class="tags tag-list d-inline-block hidden-xs">
					{{{ each tags }}}
<a href="{config.relative_path}/tags/{./valueEncoded}"><span class="tag tag-item fw-bold tag-class-{./class}" data-tag="{./value}">{./valueEscaped}</span></a>
{{{ end }}}
				</div>
				<div class="d-inline-block hidden-xs">
					<div class="stats text-muted">
	<i class="fa fa-fw fa-user" title="[[global:posters]]"></i>
	<span title="{postercount}">{humanReadableNumber(postercount)}</span>
</div>
<div class="stats text-muted">
	<i class="fa fa-fw fa-pencil" title="[[global:posts]]"></i>
	<span component="topic/post-count" title="{postcount}">{humanReadableNumber(postcount)}</span>
</div>
<div class="stats text-muted">
	<i class="fa fa-fw fa-eye" title="[[global:views]]"></i>
	<span title="{viewcount}">{humanReadableNumber(viewcount)}</span>
</div>
				</div>
				{{{ if !feeds:disableRSS }}}
				{{{ if rssFeedUrl }}}<a class="hidden-xs" target="_blank" href="{rssFeedUrl}"><i class="fa fa-rss-square"></i></a>{{{ end }}}
				{{{ end }}}
				{{{ if browsingUsers }}}
				<div class="d-inline-block hidden-xs">
				<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->
				</div>
				{{{ end }}}

				<div class="topic-main-buttons float-end d-inline-block">
	<span class="loading-indicator btn float-start hidden" done="0">
		<span class="hidden-xs">[[topic:loading-more-posts]]</span> <i class="fa fa-refresh fa-spin"></i>
	</span>

	<!-- IF loggedIn -->
	<button component="topic/mark-unread" class="btn btn-sm btn-outline-secondary" title="[[topic:mark-unread]]">
		<i class="fa fa-fw fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"></span>
	</button>
	<!-- ENDIF loggedIn -->

	<!-- IF config.loggedIn -->
<div class="btn-group bottom-sheet" component="topic/watch"
data-bs-toggle="tooltip"
	{{{if isFollowing}}}title="[[topic:watching]]"{{{end}}}
	{{{if isNotFollowing}}}title="[[topic:not-watching]]"{{{end}}}
	{{{if isIgnoring}}}title="[[topic:ignoring]]"{{{end}}}
>
	<button class="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">
		<span component="topic/following/menu" <!-- IF !isFollowing -->class="hidden"<!-- ENDIF !isFollowing -->><i class="fa fa-fw fa-bell-o"></i></span>

		<span component="topic/not-following/menu" <!-- IF !isNotFollowing -->class="hidden"<!-- ENDIF !isNotFollowing -->><i class="fa fa-fw fa-bell-slash-o"></i></span>

		<span component="topic/ignoring/menu" <!-- IF !isIgnoring -->class="hidden"<!-- ENDIF !isIgnoring -->><i class="fa fa-fw fa-eye-slash"></i></span>

	</button>
	<ul class="dropdown-menu dropdown-menu-end">
		<li>
			<a class="dropdown-item d-flex" href="#" component="topic/following">
				<span><i component="topic/following/check" class="fa fa-fw {{{ if isFollowing }}}fa-check{{{ end }}}"></i></span>
				<div class="d-flex flex-column">
					<span><i class="fa fa-fw fa-bell-o"></i> [[topic:watching]]</span>
					<p class="help-text text-muted"><small>[[topic:watching.description]]</small></p>
				</div>
			</a>
		</li>

		<li>
			<a class="dropdown-item d-flex" href="#" component="topic/not-following">
				<span><i component="topic/not-following/check" class="fa fa-fw {{{ if isNotFollowing }}}fa-check{{{ end }}}"></i></span>
				<div class="d-flex flex-column">
					<span><i class="fa fa-fw fa-bell-slash-o"></i> [[topic:not-watching]]</span>
					<p class="help-text text-muted"><small>[[topic:not-watching.description]]</small></p>
				</div>
			</a>
		</li>

		<li>
			<a class="dropdown-item d-flex" href="#" component="topic/ignoring">
				<span><i component="topic/ignoring/check" class="fa fa-fw {{{ if isIgnoring }}}fa-check{{{ end }}}"></i></span>
				<div class="d-flex flex-column">
					<span><i class="fa fa-fw fa-eye-slash"></i> [[topic:ignoring]]</span>
					<p class="help-text text-muted"><small>[[topic:ignoring.description]]</small></p>
				</div>
			</a>
		</li>
	</ul>
</div>
<!-- ENDIF config.loggedIn -->

	<div title="[[topic:sort-by]]" class="btn-group bottom-sheet hidden-xs" component="thread/sort">
	<button class="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">
	<span><i class="fa fa-fw fa-sort"></i></span></button>
	<ul class="dropdown-menu dropdown-menu-end">
		<li><a class="dropdown-item" href="#" class="oldest_to_newest" data-sort="oldest_to_newest"><i class="fa fa-fw"></i> [[topic:oldest-to-newest]]</a></li>
		<li><a class="dropdown-item" href="#" class="newest_to_oldest" data-sort="newest_to_oldest"><i class="fa fa-fw"></i> [[topic:newest-to-oldest]]</a></li>
		<li><a class="dropdown-item" href="#" class="most_votes" data-sort="most_votes"><i class="fa fa-fw"></i> [[topic:most-votes]]</a></li>
	</ul>
</div>


	<div class="d-inline-block">
	{{{ if privileges.view_thread_tools }}}
<div title="[[topic:thread-tools.title]]" class="btn-group thread-tools bottom-sheet">
	<button class="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">
		<i class="fa fa-fw fa-gear"></i>
	</button>
	<ul class="dropdown-menu dropdown-menu-end"></ul>
</div>
{{{ end }}}
	</div>
	<div component="topic/reply/container" class="btn-group action-bar bottom-sheet <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">
	<a href="{config.relative_path}/compose?tid={tid}" class="btn btn-sm btn-primary" component="topic/reply" data-ajaxify="false" role="button"><i class="fa fa-reply visible-xs-inline"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"> [[topic:reply]]</span></a>
	<button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown">
		<span class="caret"></span>
	</button>
	<ul class="dropdown-menu dropdown-menu-end" role="menu">
		<li><a class="dropdown-item" href="#" component="topic/reply-as-topic">[[topic:reply-as-topic]]</a></li>
	</ul>
</div>

<!-- IF loggedIn -->
<!-- IF !privileges.topics:reply -->
<!-- IF locked -->
<a component="topic/reply/locked" class="btn btn-sm btn-primary" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
<!-- ENDIF locked -->
<!-- ENDIF !privileges.topics:reply -->

<!-- IF !locked -->
<a component="topic/reply/locked" class="btn btn-sm btn-primary hidden" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
<!-- ENDIF !locked -->

<!-- ENDIF loggedIn -->
</div>

			</div>
		</div>
		{{{ if merger }}}
		<div component="topic/merged/message" class="alert alert-info mt-3 d-flex justify-content-between flex-wrap">
	<span>[[topic:merged-message, {config.relative_path}/topic/{mergeIntoTid}, {merger.mergedIntoTitle}]]</span>
	<span>
		<a class="fw-bold" href="{config.relative_path}/user/{merger.userslug}">{merger.username}</strong></a> <small class="timeago" title="{mergedTimestampISO}"></small>
	</span>
</div>
		{{{ end }}}

		{{{ if !scheduled }}}
		<div component="topic/deleted/message" class="alert alert-warning mt-3{{{ if !deleted }}} hidden{{{ end }}} d-flex justify-content-between flex-wrap">
    <span>[[topic:deleted-message]]</span>
    <span>
        {{{ if deleter }}}
        <a class="fw-bold" href="{config.relative_path}/user/{deleter.userslug}">{deleter.username}</a> <small class="timeago" title="{deletedTimestampISO}"></small>
        {{{ end }}}
    </span>
</div>
		{{{ end }}}

		<ul component="topic" class="posts timeline" data-tid="{tid}" data-cid="{cid}">
			{{{each posts}}}
				<li component="post" class="{{{ if posts.deleted }}}deleted{{{ end }}} {{{ if posts.selfPost }}}self-post{{{ end }}} {{{ if posts.topicOwnerPost }}}topic-owner-post{{{ end }}}" data-index="{posts.index}" data-pid="{posts.pid}" data-uid="{posts.uid}" data-timestamp="{posts.timestamp}" data-username="{posts.user.username}" data-userslug="{posts.user.userslug}"{{{ if posts.allowDupe }}} data-allow-dupe="1"{{{ end }}}{{{ if posts.navigatorIgnore }}} data-navigator-ignore="1"{{{ end }}} itemscope itemtype="http://schema.org/Comment">
					<a component="post/anchor" data-index="{./index}" id="{increment(./index, "1")}"></a>

					<meta itemprop="datePublished" content="{posts.timestampISO}">
					<meta itemprop="dateModified" content="{posts.editedISO}">

					{{{ if (!./index && widgets.mainpost-header.length) }}}
<div data-widget-area="mainpost-header">
	{{{ each widgets.mainpost-header }}}
	{widgets.mainpost-header.html}
	{{{ end }}}
</div>
{{{ end }}}

<div class="clearfix post-header">
	<div class="icon float-start">
		<a href="<!-- IF posts.user.userslug -->{config.relative_path}/user/{posts.user.userslug}<!-- ELSE -->#<!-- ENDIF posts.user.userslug -->">
			{buildAvatar(posts.user, "48px", true, "", "user/picture")}
			<i component="user/status" class="fa fa-circle status {posts.user.status}" title="[[global:{posts.user.status}]]"></i>
		</a>
	</div>

	<small class="d-flex">
		<div class="d-flex align-items-center gap-1 flex-wrap w-100">
			<strong class="text-nowrap">
				<a href="<!-- IF posts.user.userslug -->{config.relative_path}/user/{posts.user.userslug}<!-- ELSE -->#<!-- ENDIF posts.user.userslug -->" itemprop="author" data-username="{posts.user.username}" data-uid="{posts.user.uid}">{posts.user.displayname}</a>
			</strong>

			{{{ each posts.user.selectedGroups }}}
			{{{ if posts.user.selectedGroups.slug }}}
			<a href="{config.relative_path}/groups/{./slug}" class="badge rounded-1 text-uppercase text-truncate" style="max-width: 150px;color:{./textColor};background-color: {./labelColor};"><i class="fa {{{ if ./icon }}}{./icon}{{{ if ./userTitle}}} me-1{{{ end }}}{{{else}}}hidden{{{ end }}}"></i><span class="badge-text">{{{ if ./userTitle }}}{./userTitle}{{{ end }}}</span></a>
			{{{ end }}}
			{{{ end }}}

			<!-- IF posts.user.banned -->
			<span class="badge bg-danger">[[user:banned]]</span>
			<!-- ENDIF posts.user.banned -->

			<span class="visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block">
				<!-- IF posts.toPid -->
				<a component="post/parent" class="btn btn-sm btn-outline-secondary hidden-xs" data-topid="{posts.toPid}" href="{config.relative_path}/post/{posts.toPid}"><i class="fa fa-reply"></i> @<!-- IF posts.parent.username -->{posts.parent.username}<!-- ELSE -->[[global:guest]]<!-- ENDIF posts.parent.username --></a>
				<!-- ENDIF posts.toPid -->

				<span>
					<!-- IF posts.user.custom_profile_info.length -->
					&#124;
					{{{each posts.user.custom_profile_info}}}
					{posts.user.custom_profile_info.content}
					{{{end}}}
					<!-- ENDIF posts.user.custom_profile_info.length -->
				</span>
			</span>
			<div class="d-flex align-items-center gap-1 flex-grow-1 justify-content-end">
				<span>
					<i component="post/edit-indicator" class="fa fa-pencil-square<!-- IF privileges.posts:history --> pointer<!-- END --> edit-icon <!-- IF !posts.editor.username -->hidden<!-- ENDIF !posts.editor.username -->"></i>

					<span data-editor="{posts.editor.userslug}" component="post/editor" class="hidden">[[global:last-edited-by, {posts.editor.username}]] <span class="timeago" title="{posts.editedISO}"></span></span>

					<span class="visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block">
						<a class="permalink text-muted" href="{config.relative_path}/post/{posts.pid}"><span class="timeago" title="{posts.timestampISO}"></span></a>
					</span>
				</span>
				<span class="bookmarked"><i class="fa fa-bookmark-o"></i></span>
			</div>
		</div>
	</small>
</div>

<br />

<div class="content" component="post/content" itemprop="text">
	{posts.content}
</div>

<div class="post-footer">
	{{{ if posts.user.signature }}}
	<div component="post/signature" data-uid="{posts.user.uid}" class="post-signature">{posts.user.signature}</div>
	{{{ end }}}

	<div class="clearfix">
	{{{ if !hideReplies }}}
	<a component="post/reply-count" data-target-component="post/replies/container" href="#" class="threaded-replies user-select-none float-start text-muted {{{ if (!./replies || shouldHideReplyContainer(@value)) }}}hidden{{{ end }}}">
		<span component="post/reply-count/avatars" class="avatars d-inline-flex gap-1 align-items-top hidden-xs {{{ if posts.replies.hasMore }}}hasMore{{{ end }}}">
			{{{each posts.replies.users}}}
			<span>{buildAvatar(posts.replies.users, "16px", true, "")}</span>
			{{{end}}}
			{{{ if posts.replies.hasMore}}}
			<span><i class="fa fa-ellipsis"></i></span>
			{{{ end }}}
		</span>

		<span class="replies-count small" component="post/reply-count/text" data-replies="{posts.replies.count}">{posts.replies.text}</span>
		<span class="replies-last hidden-xs small">[[topic:last-reply-time]] <span class="timeago" title="{posts.replies.timestampISO}"></span></span>

		<i class="fa fa-fw fa-chevron-right" component="post/replies/open"></i>
		<i class="fa fa-fw fa-chevron-down hidden" component="post/replies/close"></i>
		<i class="fa fa-fw fa-spin fa-spinner hidden" component="post/replies/loading"></i>
	</a>
	{{{ end }}}

	<small class="float-end" component="post/actions">
		<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->
		<span class="post-tools">
			<a component="post/reply" href="#" class="user-select-none <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">[[topic:reply]]</a>
			<a component="post/quote" href="#" class="user-select-none <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">[[topic:quote]]</a>
		</span>

		<!-- IF !reputation:disabled -->
		<span class="votes">
			<a component="post/upvote" href="#" class="<!-- IF posts.upvoted -->upvoted<!-- ENDIF posts.upvoted -->">
				<i class="fa fa-chevron-up"></i>
			</a>

			<span component="post/vote-count" data-votes="{posts.votes}">{posts.votes}</span>

			<!-- IF !downvote:disabled -->
			<a component="post/downvote" href="#" class="<!-- IF posts.downvoted -->downvoted<!-- ENDIF posts.downvoted -->">
				<i class="fa fa-chevron-down"></i>
			</a>
			<!-- ENDIF !downvote:disabled -->
		</span>
		<!-- ENDIF !reputation:disabled -->

		<span component="post/tools" class="dropdown moderator-tools bottom-sheet d-inline-block {{{ if !posts.display_post_menu }}}hidden{{{ end }}}">
	<a class="dropdown-toggle d-block" href="#" data-bs-toggle="dropdown"><i class="fa fa-fw fa-ellipsis-v"></i></a>
	<ul class="dropdown-menu dropdown-menu-end" role="menu"></ul>
</span>

	</small>
	</div>
	<div component="post/replies/container"></div>
</div>
{{{ if (!./index && widgets.mainpost-footer.length) }}}
<div data-widget-area="mainpost-footer">
	{{{ each widgets.mainpost-footer }}}
	{widgets.mainpost-footer.html}
	{{{ end }}}
</div>
{{{ end }}}
				</li>
				{{{ if (config.topicPostSort != "most_votes") }}}
				{{{ each ./events}}}
				<li component="topic/event" class="timeline-event text-muted" data-topic-event-id="{./id}" data-topic-event-type="{./type}">
	<div class="timeline-badge">
		<i class="fa {{{ if ./icon }}}{./icon}{{{ else }}}fa-circle{{{ end }}}"></i>
	</div>
	<span class="timeline-text">
		{./text}
	</span>
	{{{ if privileges.isAdminOrMod }}}
		&nbsp;<span component="topic/event/delete" data-topic-event-id="{./id}" data-topic-event-type="{./type}" class="timeline-text pointer" title="[[topic:delete-event]]"><i class="fa fa-trash"></i></span>
	{{{ end }}}
</li>


				{{{ end }}}
				{{{ end }}}
			{{{end}}}
		</ul>

		{{{ if browsingUsers }}}
		<div class="visible-xs">
			<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->
			<hr/>
		</div>
		{{{ end }}}

		{{{ if config.enableQuickReply }}}
		<!-- IF privileges.topics:reply -->
<div component="topic/quickreply/container" class="clearfix quick-reply">
	<div class="icon float-start hidden-xs">
		<a data-uid="{loggedInUser.uid}" href="{{{ if loggedInUser.userslug }}}{config.relative_path}/user/{loggedInUser.userslug}{{{ else }}}#{{{ end }}}">
			{buildAvatar(loggedInUser, "48px", true, "", "user/picture")}
			{{{ if loggedInUser.status }}}
			<i component="user/status" class="fa fa-circle status {loggedInUser.status}" title="[[global:{loggedInUser.status}]]"></i>
			{{{ end }}}
		</a>
	</div>
	<form method="post" action="{config.relative_path}/compose">
		<input type="hidden" name="tid" value="{tid}" />
		<input type="hidden" name="_csrf" value="{config.csrf_token}" />
		<div class="quickreply-message">
			<textarea name="content" component="topic/quickreply/text" class="form-control mousetrap" rows="5" placeholder="[[modules:composer.textarea.placeholder]]"></textarea>
			<div class="imagedrop"><div>[[topic:composer.drag-and-drop-images]]</div></div>
		</div>
		<div class="btn-group float-end">
			<button type="submit" component="topic/quickreply/button" class="btn btn-primary">[[topic:post-quick-reply]]</button>
			<button type="submit" component="topic/quickreply/expand" class="btn btn-outline-primary" formmethod="get"><i class="fa fa-expand"></i></button>
		</div>
	</form>
	<form component="topic/quickreply/upload" method="post" enctype="multipart/form-data">
		<input type="file" name="files[]" multiple class="hidden"/>
	</form>

</div>
<!-- ENDIF privileges.topics:reply -->

		{{{ end }}}

		{{{ if config.usePagination }}}
		<div component="pagination" class="pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
	<ul class="pagination hidden-xs justify-content-center">
		<li class="page-item previous float-start<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a class="page-link" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		{{{each pagination.pages}}}
			<!-- IF pagination.pages.separator -->
			<li component="pagination/select-page" class="page-item page select-page">
				<a class="page-link" href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			<!-- ELSE -->
			<li class="page-item page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
				<a class="page-link" href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			<!-- ENDIF pagination.pages.separator -->
		{{{end}}}

		<li class="page-item next float-end<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a class="page-link" href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>

	<ul class="pagination hidden-sm hidden-md hidden-lg justify-content-center">
		<li class="page-item first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a class="page-link" href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
		</li>

		<li class="page-item previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a class="page-link" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<li component="pagination/select-page" class="page-item page select-page">
			<a class="page-link" href="#">{pagination.currentPage} / {pagination.pageCount}</a>
		</li>

		<li class="page-item next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a class="page-link" href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>

		<li class="page-item last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a class="page-link" href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
		</li>
	</ul>
</div>
		{{{ end }}}

		<div class="pagination-block border border-1 text-bg-light text-center">
    <div class="progress-bar bg-info"></div>
    <div class="wrapper dropup">
        <i class="fa fa-2x fa-angle-double-up pointer fa-fw pagetop"></i>

        <a href="#" class="dropdown-toggle d-inline-block text-decoration-none" data-bs-toggle="dropdown" data-bs-reference="parent">
            <span class="pagination-text"></span>
        </a>

        <i class="fa fa-2x fa-angle-double-down pointer fa-fw pagebottom"></i>
        <ul class="dropdown-menu dropdown-menu-end" role="menu">
            <li>
                <div class="row">
                    <div class="col-8 post-content"></div>
                    <div class="col-4 text-end">
                        <div class="scroller-content">
                            <span class="pointer pagetop">[[topic:first-post]] <i class="fa fa-angle-double-up"></i></span>
                            <div class="scroller-container">
                                <div class="scroller-thumb">
                                    <span class="thumb-text"></span>
                                    <div class="scroller-thumb-icon"></div>
                                </div>
                            </div>
                            <span class="pointer pagebottom">[[topic:last-post]] <i class="fa fa-angle-double-down"></i></span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <button id="myNextPostBtn" class="btn btn-outline-secondary form-control" disabled>[[topic:go-to-my-next-post]]</button>
                    </div>
                    <div class="col-6">
                        <input type="number" class="form-control" id="indexInput" placeholder="[[global:pagination.enter-index]]">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>

	</div>
	<div data-widget-area="sidebar" class="col-lg-3 col-sm-12 {{{ if !widgets.sidebar.length }}}hidden{{{ end }}}">
		{{{each widgets.sidebar}}}
		{{widgets.sidebar.html}}
		{{{end}}}
	</div>
</div>

<div data-widget-area="footer">
	{{{each widgets.footer}}}
	{{widgets.footer.html}}
	{{{end}}}
</div>

{{{ if !config.usePagination }}}
<noscript>
<div component="pagination" class="pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
	<ul class="pagination hidden-xs justify-content-center">
		<li class="page-item previous float-start<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a class="page-link" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		{{{each pagination.pages}}}
			<!-- IF pagination.pages.separator -->
			<li component="pagination/select-page" class="page-item page select-page">
				<a class="page-link" href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			<!-- ELSE -->
			<li class="page-item page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
				<a class="page-link" href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			<!-- ENDIF pagination.pages.separator -->
		{{{end}}}

		<li class="page-item next float-end<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a class="page-link" href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>

	<ul class="pagination hidden-sm hidden-md hidden-lg justify-content-center">
		<li class="page-item first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a class="page-link" href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
		</li>

		<li class="page-item previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a class="page-link" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<li component="pagination/select-page" class="page-item page select-page">
			<a class="page-link" href="#">{pagination.currentPage} / {pagination.pageCount}</a>
		</li>

		<li class="page-item next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a class="page-link" href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>

		<li class="page-item last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a class="page-link" href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
		</li>
	</ul>
</div>
</noscript>
{{{ end }}}
