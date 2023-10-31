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
<div class="recent">
	<div class="topic-list-header sticky-top btn-toolbar justify-content-between py-2 mb-2 gap-1">
		<div class="d-flex gap-1 align-items-stretch">
			{{{ if canPost }}}
			<noscript><div class="dropdown" component="category-selector"></noscript>
<button component="category/post" for="category-dropdown-check" class="btn btn-primary text-nowrap" id="new_topic" role="button">
	[[category:new-topic-button]]
</button>
<noscript>
	<input type="checkbox" class="hidden" id="category-dropdown-check" aria-hidden="true">
	<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
		{{{each categories}}}
		<li role="presentation" class="category {{{if categories.disabledClass}}}disabled{{{end}}}">
			<a role="menu-item" href="{config.relative_path}/compose?cid={categories.cid}">{categories.level}
				<span component="category-markup">
					<div class="category-item d-inline-block">
						{buildCategoryIcon(@value, "24px", "rounded-circle")}
						{categories.name}
					</div>
				</span>
			</a>
		</li>
		{{{end}}}
	</ul>
</div>
</noscript>

			{{{ else }}}
			<a component="category/post/guest" href="{config.relative_path}/login" class="btn btn-primary">[[category:guest-login-post]]</a>
			{{{ end }}}
			<a href="{config.relative_path}/{selectedFilter.url}{querystring}" class="d-inline-block">
				<div class="alert alert-warning h-100 m-0 px-2 py-1 d-flex gap-1 align-items-center hide" id="new-topics-alert"><i class="fa fa-fw fa-rotate-right"></i>[[recent:load-new-posts]]</div>
			</a>
		</div>
		<div class="d-flex gap-1 align-items-stretch">
		<div class="btn-group bottom-sheet{{{ if !filters.length }}} hidden{{{ end }}}">
	<button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
		<span class="visible-sm-inline visible-md-inline visible-lg-inline">{selectedFilter.name}</span><span class="visible-xs-inline"><i class="fa fa-fw {selectedFilter.icon}"></i></span> <span class="caret"></span>
	</button>
	<ul class="dropdown-menu dropdown-menu-end" role="menu">
		{{{each filters}}}
		<li role="presentation" class="category {{{if filters.selected}}}selected{{{end}}}">
			<a class="dropdown-item" role="menu-item" href="{config.relative_path}/{filters.url}"><i class="fa fa-fw {{{ if filters.selected }}}fa-check{{{ end }}}"></i>{filters.name}</a>
		</li>
		{{{end}}}
	</ul>
</div>
		<div component="category/dropdown" class="btn-group dropdown-right category-dropdown-container bottom-sheet">
	<button type="button" class="btn btn-outline-secondary d-flex gap-2 align-items-baseline dropdown-toggle" data-bs-toggle="dropdown">
    {{{ if selectedCategory }}}
    <span class="category-item">
        {buildCategoryIcon(selectedCategory, "20px", "rounded-circle")}
        <span class="visible-md-inline visible-lg-inline">{selectedCategory.name}</span>
    </span>
    {{{ else }}}
    <i class="fa fa-fw fa-list"></i>
    <span class="visible-md-inline visible-lg-inline">[[unread:all-categories]]</span>{{{ end }}}
</button>
<div component="category-selector-search" class="hidden position-absolute">
    <input type="text" class="form-control" placeholder="[[search:type-to-search]]" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
    <li role="presentation" class="category" data-cid="all">
        <a class="dropdown-item" role="menu-item" href="{{{ if allCategoriesUrl }}}{config.relative_path}/{allCategoriesUrl}{{{ else }}}#{{{ end }}}"><i component="category/select/icon" class="fa fa-fw fa-check {{{if selectedCategory}}}invisible{{{end}}}"></i> [[unread:all-categories]]</a>
    </li>
    {{{each categoryItems}}}
    <li role="presentation" class="category {{{ if ../disabledClass }}}disabled{{{ end }}}" data-cid="{../cid}" data-parent-cid="{../parentCid}" data-name="{../name}">
        <a class="dropdown-item" role="menu-item" href="#">{../level}<i component="category/select/icon" class="fa fa-fw fa-check {{{ if !../selected }}}invisible{{{ end }}}"></i>
            <span component="category-markup" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">
                <div class="category-item d-inline-block">
                    {{{ if ./icon}}}
                    {buildCategoryIcon(@value, "24px", "rounded-circle")}
                    {{{ end }}}
                    {./name}
                </div>
            </span>
        </a>
    </li>
    {{{end}}}
</ul>
 </div>
		<!-- IF showTopicTools -->
<div class="btn-group thread-tools bottom-sheet">
	<button class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">
		<span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:thread-tools.title]]</span>
		<span class="visible-xs-inline"><i class="fa fa-fw fa-gear"></i></span>
		<span class="caret"></span>
	</button>
	<ul class="dropdown-menu dropdown-menu-end">
		<li>
			<a component="topic/mark-unread-for-all" href="#" class="dropdown-item">
				<i class="fa fa-fw fa-inbox"></i> [[topic:thread-tools.markAsUnreadForAll]]
			</a>
		</li>
		<li>
			<a component="topic/pin" href="#" class="dropdown-item">
				<i class="fa fa-fw fa-thumb-tack"></i> [[topic:thread-tools.pin]]
			</a>
		</li>
		<li>
			<a component="topic/unpin" href="#" class="hidden dropdown-item">
				<i class="fa fa-fw fa-thumb-tack fa-rotate-90"></i> [[topic:thread-tools.unpin]]
			</a>
		</li>

		<li>
			<a component="topic/lock" href="#" class="dropdown-item">
				<i class="fa fa-fw fa-lock"></i> [[topic:thread-tools.lock]]
			</a>
		</li>
		<li>
			<a component="topic/unlock" href="#" class="hidden dropdown-item" >
				<i class="fa fa-fw fa-unlock"></i> [[topic:thread-tools.unlock]]
			</a>
		</li>

		<li class="dropdown-divider"></li>

		<li>
			<a component="topic/move" href="#" class="dropdown-item">
				<i class="fa fa-fw fa-arrows"></i> [[topic:thread-tools.move]]
			</a>
		</li>
		{{{if template.category}}}
		<li>
			<a component="topic/move-all" href="#" class="dropdown-item">
				<i class="fa fa-fw fa-arrows"></i> [[topic:thread-tools.move-all]]
			</a>
		</li>
		{{{end}}}
		<li>
			<a component="topic/merge" href="#" class="dropdown-item">
				<i class="fa fa-fw fa-code-fork"></i> [[topic:thread-tools.merge]]
			</a>
		</li>

		<li>
			<a component="topic/tag" href="#" class="dropdown-item">
				<i class="fa fa-fw fa-tag"></i> [[topic:thread-tools.tag]]
			</a>
		</li>

		<li class="dropdown-divider"></li>

		<li>
			<a component="topic/delete" href="#" class="dropdown-item">
				<i class="fa fa-fw fa-trash-o"></i> [[topic:thread-tools.delete]]
			</a>
		</li>
		<li>
			<a component="topic/restore" href="#" class="hidden dropdown-item">
				<i class="fa fa-fw fa-history"></i> [[topic:thread-tools.restore]]
			</a>
		</li>
		<li>
			<a component="topic/purge" href="#" class="hidden dropdown-item">
				<i class="fa fa-fw fa-eraser"></i> [[topic:thread-tools.purge]]
			</a>
		</li>

		{{{each thread_tools}}}
		<li>
			<a href="#" class="dropdown-item {thread_tools.class}"><i class="fa fa-fw {thread_tools.icon}"></i> {thread_tools.title}</a>
		</li>
		{{{end}}}
	</ul>
</div>
<!-- ENDIF showTopicTools -->
		</div>
	</div>

	<div class="category">
		<!-- IF !topics.length -->
		<div class="alert alert-warning" id="category-no-topics">[[recent:no-recent-topics]]</div>
		<!-- ENDIF !topics.length -->

		<ul component="category" class="topic-list" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="{nextStart}" data-set="{set}">
	{{{each topics}}}
	<li component="category/topic" class="row clearfix category-item {function.generateTopicClass} border-bottom" data-tid="{topics.tid}" data-index="{topics.index}" data-cid="{topics.cid}" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
		<link itemprop="url" content="{config.relative_path}/topic/{../slug}" />
		<meta itemprop="name" content="{function.stripTags, ../title}" />
		<meta itemprop="itemListOrder" content="descending" />
		<meta itemprop="position" content="{../index}" />
		<a id="{../index}" data-index="{../index}" component="topic/anchor"></a>

		<div class="col-md-12 col-sm-9 col-10 content">
			{{{ if ./thumbs.length }}}
				<img src="{./thumbs.0.url}" class="user-img not-responsive" />
			{{{ end }}}
			<h2 component="topic/header" class="title mb-1">
				<i component="topic/scheduled" class="fa fa-clock-o {{{ if !topics.scheduled }}}hidden{{{ end }}}" title="[[topic:scheduled]]"></i>
				<i component="topic/pinned" class="fa fa-thumb-tack {{{ if (topics.scheduled || !topics.pinned) }}}hidden{{{ end }}}" title="{{{ if !../pinExpiry }}}[[topic:pinned]]{{{ else }}}[[topic:pinned-with-expiry, {../pinExpiryISO}]]{{{ end }}}"></i>
				<i component="topic/locked" class="fa fa-lock {{{ if !topics.locked }}}hidden{{{ end }}}" title="[[topic:locked]]"></i>
				<i component="topic/moved" class="fa fa-arrow-circle-right {{{ if !topics.oldCid }}}hidden{{{ end }}}" title="[[topic:moved]]"></i>
				{{{each topics.icons}}}{@value}{{{end}}}

				{{{ if topics.noAnchor }}}
				<span>{./title}</span>
				{{{ else }}}
				<a href="{config.relative_path}/topic/{./slug}{{{ if ./bookmark }}}/{./bookmark}{{{ end }}}">{./title}</a>
				{{{ end }}}
			</h2>
			<div class="text-content">
				<p>{./postSummary}</p>
				
			</div>
			

			<div class="info">
				<a href="{config.relative_path}/topic/{./slug}{{{ if ./bookmark }}}/{./bookmark}{{{ end }}}">Lasīt vairāk</a>
				<!-- IF !template.category -->
				<div class="category-item d-inline-block">
					{buildCategoryIcon(./category, "24px", "rounded-circle")}
					<a class="text-muted" href="{config.relative_path}/category/{topics.category.slug}">{topics.category.name}</a>
				</div>
				&bull;
				<!-- ENDIF !template.category -->


				<span data-tid="{./tid}" component="topic/tags" class="tag-list hidden-xs {{{ if !./tags.length }}}hidden{{{ end}}}">
					{{{ each ./tags }}}
					<a href="{config.relative_path}/tags/{./valueEncoded}"><span class="tag tag-item fw-bold tag-class-{./class}" data-tag="{./value}">{./valueEscaped}</span></a>
					{{{ end }}}
					&bull;
				</span>

				<span class="hidden-xs"><span class="timeago text-muted" title="{./timestampISO}"></span> &bull; <a class="text-muted" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}">{./user.displayname}</a></span>

				<span class="visible-xs-inline timeago text-muted" title="{{{ if ./teaser.timestampISO }}}{./teaser.timestampISO}{{{ else }}}{./timestampISO}{{{ end }}}"></span>
			</div>
		</div>
	</li>
	{{{end}}}
</ul>


		<!-- IF config.usePagination -->
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
		<!-- ENDIF config.usePagination -->
	</div>
</div>
