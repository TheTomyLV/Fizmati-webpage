<div class="account">
	<!-- IF breadcrumbs.length -->
<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
	{{{each breadcrumbs}}}
	<li<!-- IF @last --> component="breadcrumb/current"<!-- ENDIF @last --> itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" class="breadcrumb-item <!-- IF @last -->active<!-- ENDIF @last -->">
		<meta itemprop="position" content="{@index}" />
		{{{ if ./url }}}<a href="{breadcrumbs.url}" itemprop="item">{{{ end }}}
			<span itemprop="name">
				{breadcrumbs.text}
				<!-- IF @last -->
				<!-- IF !feeds:disableRSS -->
				<!-- IF rssFeedUrl --><a target="_blank" href="{rssFeedUrl}" itemprop="item"><i class="fa fa-rss-square"></i></a><!-- ENDIF rssFeedUrl --><!-- ENDIF !feeds:disableRSS -->
				<!-- ENDIF @last -->
			</span>
		{{{ if ./url }}}</a>{{{ end }}}
	</li>
	{{{end}}}
</ol>
<!-- ENDIF breadcrumbs.length -->


	<div data-widget-area="header">
		{{{each widgets.header}}}
		{{widgets.header.html}}
		{{{end}}}
	</div>

	<div class="cover" component="account/cover" style="background-image: url({cover:url}); background-position: {cover:position};">
		<div class="avatar-wrapper" data-uid="{uid}">
			<!-- IF picture -->
			<img src="{picture}" class="avatar avatar-rounded" style="--avatar-size: 128px;" />
			<!-- ELSE -->
			<div class="avatar avatar-rounded" style="background-color: {icon:bgColor}; --avatar-size: 128px;" title="{username}">{icon:text}</div>
			<!-- ENDIF picture -->
			<i component="user/status" class="fa fa-circle status {status}" title="[[global:{status}]]"></i>

			<!-- IF loggedIn -->
			<!-- IF !isSelf -->
			<button class="btn-morph persona-fab <!-- IF isFollowing -->heart<!-- ELSE -->plus<!-- ENDIF isFollowing -->" title="<!-- IF isFollowing -->[[global:unfollow]]<!-- ELSE -->[[global:follow]]<!-- ENDIF isFollowing -->">
				<span>
					<span class="s1"></span>
					<span class="s2"></span>
					<span class="s3"></span>
				</span>
			</button>
			<!-- ENDIF !isSelf -->
			<!-- ENDIF loggedIn -->
		</div>

		<div class="container">
			<div class="btn-group account-fab bottom-sheet">
	<button type="button" class="persona-fab dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		<i class="fa fa-ellipsis-v"></i>
	</button>
	<ul class="dropdown-menu dropdown-menu-end account-sub-links">
		<!-- IF loggedIn -->
		<!-- IF !isSelf -->
		<!-- IF !banned -->
		<!-- IF canChat -->
		<li class="<!-- IF !hasPrivateChat -->hidden<!-- ENDIF !hasPrivateChat -->">
			<a class="dropdown-item" component="account/chat" href="#">[[user:chat-with, {username}]]</a>
		</li>
		<li>
			<a class="dropdown-item" component="account/new-chat" href="#">[[user:new-chat-with, {username}]]</a>
		</li>
		<!-- ENDIF canChat -->
		<li>
			<a class="dropdown-item" component="account/flag" href="#">[[user:flag-profile]]</a>
		</li>
		<li>
			<a class="dropdown-item {{{ if ./isBlocked }}}hidden{{{ end }}}" component="account/block" href="#">[[user:block-user]]</a>
		</li>
		<li>
			<a class="dropdown-item {{{ if !./isBlocked }}}hidden{{{ end }}}" component="account/unblock" href="#">[[user:unblock-user]]</a>
		</li>
		<li role="separator" class="dropdown-divider"></li>
		<!-- ENDIF !banned -->
		<!-- ENDIF !isSelf -->
		<!-- ENDIF loggedIn -->
		<li>
			<a class="dropdown-item" href="{config.relative_path}/user/{userslug}" class="d-inline-block" id="profile">[[user:profile]]</a>
		</li>
		<!-- IF canEdit -->
		<li><a class="dropdown-item" href="{config.relative_path}/user/{userslug}/edit">[[user:edit]]</a></li>
		<li><a class="dropdown-item" href="{config.relative_path}/user/{userslug}/settings">[[user:settings]]</a></li>
		<!-- ENDIF canEdit -->

		<!-- IF !isSelf -->
		{{{ if (canBan || canMute) }}}
		<li role="separator" class="dropdown-divider"></li>
		<li class="dropdown-header">[[user:admin-actions-label]]</li>
		{{{ end }}}
		{{{ if canBan }}}
		<li class="<!-- IF banned -->hide<!-- ENDIF banned -->">
			<a class="dropdown-item" component="account/ban" href="#">[[user:ban-account]]</a>
		</li>
		<li class="<!-- IF !banned -->hide<!-- ENDIF !banned -->">
			<a class="dropdown-item" component="account/unban" href="#">[[user:unban-account]]</a>
		</li>
		{{{ end }}}
		{{{ if canMute }}}
		<li class="<!-- IF muted -->hide<!-- ENDIF muted -->">
			<a class="dropdown-item" component="account/mute" href="#">[[user:mute-account]]</a>
		</li>
		<li class="<!-- IF !muted -->hide<!-- ENDIF !muted -->">
			<a class="dropdown-item" component="account/unmute" href="#">[[user:unmute-account]]</a>
		</li>
		{{{ end }}}
		<!-- IF isAdmin -->
		<li>
			<a component="account/delete-account" href="#" class="dropdown-item">[[user:delete-account-as-admin]]</a>
			<a component="account/delete-content" href="#" class="dropdown-item">[[user:delete-content]]</a>
			<a component="account/delete-all" href="#" class="dropdown-item">[[user:delete-all]]</a>
		</li>
		<!-- ENDIF isAdmin -->
		<!-- ENDIF !isSelf -->

		<li role="separator" class="dropdown-divider"></li>
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/following">[[user:following]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.following}">{formattedNumber(counts.following)}</span></a></li>
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/followers">[[user:followers]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.followers}">{formattedNumber(counts.followers)}</span></a></li>
		<!-- IF canEdit -->
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/blocks">[[user:blocks]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.blocks}">{formattedNumber(counts.blocks)}</span></a></li>
		<!-- ENDIF canEdit -->
		<li role="separator" class="dropdown-divider"></li>
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/topics">[[global:topics]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.topics}">{formattedNumber(counts.topics)}</span></a></li>
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/posts">[[global:posts]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.posts}">{formattedNumber(counts.posts)}</span></a></li>
		<!-- IF !reputation:disabled -->
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/best">[[global:best]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.best}">{formattedNumber(counts.best)}</span></a></li>
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/controversial">[[global:controversial]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.controversial}">{formattedNumber(counts.controversial)}</span></a></li>
		<!-- ENDIF !reputation:disabled -->
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/groups">[[global:header.groups]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.groups}">{formattedNumber(counts.groups)}</span></a></li>

		<!-- IF canEdit -->
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/categories">[[user:watched-categories]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.categoriesWatched}">{formattedNumber(counts.categoriesWatched)}</span></a></li>
		{{{ if isSelf }}}
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/tags">
		[[user:watched-tags]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.tagsWatched}">{formattedNumber(counts.tagsWatched)}</span></a></li>
		{{{ end }}}
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/bookmarks">[[user:bookmarks]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.bookmarks}">{formattedNumber(counts.bookmarks)}</span></a></li>
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/watched">[[user:watched]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.watched}">{formattedNumber(counts.watched)}</span></a></li>
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/ignored">[[user:ignored]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.ignored}">{formattedNumber(counts.ignored)}</span></a></li>
		<!-- IF !reputation:disabled -->
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/upvoted">[[global:upvoted]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.upvoted}">{formattedNumber(counts.upvoted)}</span></a></li>
		<!-- IF !downvote:disabled -->
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/downvoted">[[global:downvoted]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.downvoted}">{formattedNumber(counts.downvoted)}</span></a></li>
		<!-- ENDIF !downvote:disabled -->
		<!-- ENDIF !reputation:disabled -->
		<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/uploads">[[global:uploads]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.uploaded}">{formattedNumber(counts.uploaded)}</span></a></li>
		<!-- ENDIF canEdit -->

		{{{each profile_links}}}
		<!-- IF @first -->
		<li role="separator" class="dropdown-divider"></li>
		<!-- ENDIF @first -->
		<li id="{profile_links.id}" class="plugin-link <!-- IF profile_links.public -->public<!-- ELSE -->private<!-- ENDIF profile_links.public -->"><a class="dropdown-item" href="{config.relative_path}/user/{userslug}/{profile_links.route}"><!-- IF ../icon --><i class="fa fa-fw {profile_links.icon}"></i> <!-- END -->{profile_links.name}</a></li>
		{{{end}}}
	</ul>
</div>


			<!-- IF allowCoverPicture -->
			<!-- IF canEdit -->
			<div class="controls">
				<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>
				<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>
				<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>
			</div>
			<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>
			<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>
			<!-- ENDIF canEdit -->
			<!-- ENDIF allowCoverPicture -->
		</div>
	</div>


<!-- IF sessions.length -->
<div class="row mb-3">
	<div class="col-12 col-md-12">
		<h4>[[global:sessions]]</h4>
		<ul class="list-group" component="user/sessions">
			{{{each sessions}}}
			<li class="list-group-item" data-uuid="{../uuid}">
				<div class="float-end">
					<!-- IF isSelfOrAdminOrGlobalModerator -->
					<!-- IF !../current -->
					<button class="btn btn-sm btn-outline-secondary" type="button" data-action="revokeSession">Revoke Session</button>
					<!-- ENDIF !../current -->
					<!-- ENDIF isSelfOrAdminOrGlobalModerator -->
					{function.userAgentIcons}
					<i class="fa fa-circle text-<!-- IF ../current -->success<!-- ELSE -->muted<!-- ENDIF ../current -->"></i>
				</div>
				{../browser} {../version} on {../platform}<br />
				<small class="timeago text-muted" title="{../datetimeISO}"></small>
				<ul>
					<li><strong>[[global:ip-address]]</strong>: {../ip}</li>
				</ul>
			</li>
			{{{end}}}
		</ul>
	</div>
</div>
<!-- ENDIF sessions.length -->

<div class="row">
	<div class="col-sm-6">
		<div class="card mb-3">
			<h5 class="card-header">
				[[global:recentips]]
			</h5>
			<div class="card-body">
				<ul>
					{{{each ips}}}
					<li>{@value}</li>
					{{{end}}}
				</ul>
			</div>
		</div>

		<div class="card mb-3">
			<h5 class="card-header">
				[[user:info.username-history]]
			</h5>
			<div class="card-body">
				<ul class="list-group">
					{{{each usernames}}}
					<li class="list-group-item">
						{../value}
						<small class="float-end"><span class="timeago" title="{../timestampISO}"></span></small>
					</li>
					{{{end}}}
				</ul>
			</div>
		</div>

		<div class="card">
			<h5 class="card-header">
				[[user:info.email-history]]
			</h5>
			<div class="card-body">
				<ul class="list-group">
					{{{each emails}}}
					<li class="list-group-item">
						{../value}
						<small class="float-end"><span class="timeago" title="{../timestampISO}"></span></small>
					</li>
					{{{end}}}
				</ul>
			</div>
		</div>
	</div>
	<div class="col-sm-6">
		<div class="card mb-3">
			<h5 class="card-header">
				[[user:info.latest-flags]]
			</h5>
			<div class="card-body">
				<!-- IF history.flags.length -->
				<ul class="recent-flags list-unstyled">
					{{{each history.flags}}}
					<li>
						<p>
							{{{ if history.flags.targetPurged }}}
							<div>[[flags:target-purged]]</div>
							{{{ else }}}
							<a class="title" href="{config.relative_path}/post/{../pid}">{../title}</a><br />
							{{{ end }}}
							<span class="timestamp">[[flags:flagged-timeago-readable, {../timestampISO}, {../timestampReadable}]]</span>
						</p>
					</li>
					{{{end}}}
				</ul>
				<!-- ELSE -->
				<div class="alert alert-success">[[user:info.no-flags]]</div>
				<!-- ENDIF history.flags.length -->
			</div>
		</div>

		<div class="card mb-3">
			<h5 class="card-header">
				[[user:info.ban-history]]

				<!-- IF !banned -->
				<!-- IF !isSelf -->
				<button class="btn btn-sm float-end btn-danger" component="account/ban">[[user:ban-account]]</button>
				<!-- ENDIF !isSelf -->
				<!-- ELSE -->
				<!-- IF !isSelf -->
				<button class="btn btn-sm float-end btn-success" component="account/unban">[[user:unban-account]]</button>
				<!-- ENDIF !isSelf -->
				<!-- ENDIF !banned -->
			</h5>
			<div class="card-body">
				<!-- IF history.bans.length -->
				<ul class="ban-history list-unstyled">
					{{{each history.bans}}}
					<li>
						<p>
							<a href="{config.relative_path}/user/{history.bans.user.userslug}">{buildAvatar(history.bans.user, "24px", true)}</a>
							<strong>
								<a href="<!-- IF history.bans.user.userslug -->{config.relative_path}/user/{history.bans.user.userslug}<!-- ELSE -->#<!-- ENDIF history.bans.user.userslug -->" itemprop="author" data-username="{history.bans.user.username}" data-uid="{history.bans.user.uid}">{history.bans.user.username}</a>
							</strong>
							<span class="timestamp timeago" title="{../timestampISO}"></span> &mdash; {../timestampReadable}<br />
							<!-- IF ../until -->
							<span class="expiry">[[user:info.banned-until, {../untilReadable}]]</span><br />
							<!-- ELSE -->
							<span class="expiry">[[user:info.banned-permanently]]</span><br />
							<!-- ENDIF ../until -->
							<span class="reason"><strong>[[user:info.banned-reason-label]]</strong>: {../reason}</span>
						</p>
					</li>
					{{{end}}}
				</ul>
				<!-- ELSE -->
				<div class="alert alert-success">[[user:info.no-ban-history]]</div>
				<!-- ENDIF history.bans.length -->
			</div>
		</div>

		<div class="card mb-3">
			<h5 class="card-header">
				[[user:info.mute-history]]

				{{{ if !muted }}}
				{{{ if !isSelf }}}
				<button class="btn btn-sm float-end btn-danger" component="account/mute">[[user:mute-account]]</button>
				{{{ end }}}
				{{{ else }}}
				{{{ if !isSelf }}}
				<button class="btn btn-sm float-end btn-success" component="account/unmute">[[user:unmute-account]]</button>
				{{{ end }}}
				{{{ end }}}
			</h5>
			<div class="card-body">
				{{{ if history.mutes.length }}}
				<ul class="ban-history list-unstyled">
					{{{ each history.mutes }}}
					<li>
						<p>
							<a href="{config.relative_path}/user/{history.mutes.user.userslug}">{buildAvatar(history.mutes.user, "24px", true)}</a>
							<strong>
								<a href="<!-- IF history.mutes.user.userslug -->{config.relative_path}/user/{history.mutes.user.userslug}<!-- ELSE -->#<!-- ENDIF history.mutes.user.userslug -->" itemprop="author" data-username="{history.mutes.user.username}" data-uid="{history.mutes.user.uid}">{history.mutes.user.username}</a>
							</strong>
							<span class="timestamp timeago" title="{../timestampISO}"></span> &mdash; {../timestampReadable}<br />
							{{{ if ../until }}}
							<span class="expiry">[[user:info.muted-until, {../untilReadable}]]</span><br />
							{{{ end }}}

							<span class="reason"><strong>[[user:info.banned-reason-label]]</strong>: {../reason}</span>
						</p>
					</li>
					{{{end}}}
				</ul>
				{{{ else }}}
				<div class="alert alert-success">[[user:info.no-mute-history]]</div>
				{{{ end }}}
			</div>
		</div>

		<!-- IF isAdminOrGlobalModerator -->
		<div class="card">
			<h5 class="card-header">
				[[user:info.moderation-note]]
			</h5>
			<div class="card-body">
				<textarea component="account/moderation-note" class="form-control"></textarea>
				<br/>
				<button class="btn btn-sm float-end btn-success" component="account/save-moderation-note">[[user:info.moderation-note.add]]</button>
				<br/>
				<div component="account/moderation-note/list">
					{{{each moderationNotes}}}
					<hr/>

					<div class="clearfix">
						<div class="float-start">
							<a href="<!-- IF moderationNotes.user.userslug -->{config.relative_path}/user/{moderationNotes.user.userslug}<!-- ELSE -->#<!-- ENDIF moderationNotes.user.userslug -->">{buildAvatar(moderationNotes.user, "24px", true)}</a>
							<strong>
								<a href="<!-- IF moderationNotes.user.userslug -->{config.relative_path}/user/{moderationNotes.user.userslug}<!-- ELSE -->#<!-- ENDIF moderationNotes.user.userslug -->" itemprop="author" data-username="{moderationNotes.user.username}" data-uid="{moderationNotes.user.uid}">{moderationNotes.user.username}</a>
							</strong>

							<div class="visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block">
								<span class="timeago" title="{moderationNotes.timestampISO}"></span>
							</div>
							<br />

							<div class="content">
								{moderationNotes.note}
							</div>
						</div>
					</div>
					{{{end}}}
				</div>
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
			</div>
		</div>
		<!-- ENDIF isAdminOrGlobalModerator -->
	</div>
</div>

</div>