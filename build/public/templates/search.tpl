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

<div class="search">
	<div id="advanced-search" class="d-flex flex-column flex-md-row">
		<!-- sidebar -->
		<div class="flex-0 pe-2 border-end-md text-sm mb-3" style="flex-basis: 240px!important;">
			<form action="{config.relative_path}/search" method="get" class="nav sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-3 pe-md-3" style="top: 1rem; z-index: 1;">
				<h2 class="fw-semibold tracking-tight mb-0">[[global:search]]</h2>

				<input id="search-input" name="term" type="text" class="form-control fw-semibold py-2 ps-2 pe-3" id="search-input" placeholder="[[search:type-to-search]]">

				<select id="search-in" name="in" class="form-select text-sm py-2 ps-2 pe-3">
					<option value="titlesposts">[[search:in-titles-posts]]</option>
					<option value="titles">[[search:in-titles]]</option>
					<option value="posts">[[search:in-posts]]</option>
					<option value="categories">[[search:in-categories]]</option>
					{{{if privileges.search:users}}}
					<option value="users">[[search:in-users]]</option>
					{{{end}}}
					{{{if privileges.search:tags}}}
					<option value="tags">[[search:in-tags]]</option>
					{{{end}}}
				</select>

				<select id="match-words-filter" name="matchWords" class="post-search-item form-select text-sm py-2 ps-2 pe-3">
					<option value="all">[[search:match-all-words]]</option>
					<option value="any">[[search:match-any-word]]</option>
				</select>

				<select id="show-results-as" name="showAs" class="post-search-item form-select text-sm py-2 ps-2 pe-3">
					<option value="posts" selected>[[search:show-results-as-posts]]</option>
					<option value="topics">[[search:show-results-as-topics]]</option>
				</select>

				<button type="submit" class="btn btn-primary fw-semibold form-control py-2 px-3">[[global:search]]</button>
			</form>
		</div>

		<!-- filters and search results -->
		<div class="flex-1 ps-md-2 ps-lg-5" style="min-width:0;">
			<div class="d-flex flex-column gap-3">
				<div class="d-flex flex-wrap gap-2 align-items-center" component="search/filters">
	<!-- category filter -->
	<div class="post-search-item">
		<div component="category/filter" class="dropdown" data-filter-name="category">
			<a component="category/filter/button" class="filter-btn btn btn-light btn-sm border {{{ if filters.categories.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
				<span class="filter-label">{{{ if filters.categories.active }}}{filters.categories.label}{{{ else }}}[[search:categories]]{{{ end }}}</span>
				<span class="caret"></span>
			</a>

			<ul class="dropdown-menu p-1 text-sm">
				<li class="px-3 py-1 mb-2 d-flex flex-column gap-2">
					<div component="category-selector-search">
						<input type="text" class="form-control" component="category/filter/search" placeholder="[[search:type-a-category]]">
					</div>
				</li>
				<div component="category/list" class="overflow-auto" style="max-height: 350px;"></div>
				<div class="px-3 py-1">
					<div class="form-check">
						<input id="search-children" class="form-check-input" type="checkbox"/>
						<label class="form-check-label" for="search-children">[[search:search-child-categories]]</label>
					</div>
				</div>
			</ul>
		</div>
	</div>


	<!-- tag filter -->
	<div class="post-search-item">
		<div component="tag/filter" class="dropdown" data-filter-name="tag">
			<a component="tag/filter/button" class="filter-btn btn btn-light btn-sm border {{{ if filters.tags.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
				<span class="filter-label">{{{ if filters.tags.active }}}{filters.tags.label}{{{ else }}}[[search:tags]]{{{ end }}}</span>
				<span class="caret"></span>
			</a>

			<ul class="dropdown-menu p-1 text-sm" style="width: 350px;">
				<li class="px-3 py-1 d-flex flex-column gap-2">
					<input type="text" class="form-control" component="tag/filter/search" placeholder="[[search:type-a-tag]]">
					<div component="tag/filter/selected" class="d-flex flex-wrap gap-2">
						{{{ each tagFilterSelected }}}
						<div class="d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm">
							<div>{./valueEscaped}</div>
							<button component="tag/filter/delete" data-tag="{./valueEscaped}" class="btn btn-primary btn-sm py-0"><i class="fa fa-times fa-xs"></i></button>
						</div>
						{{{ end }}}
					</div>
					<hr/>
					<div component="tag/filter/results" class="d-flex flex-wrap gap-2">
						{{{ each tagFilterResults }}}
						<button class="btn btn-light btn-sm border" data-tag="{./valueEscaped}">{./valueEscaped}</button>
						{{{ end }}}
					</div>
				</li>
			</ul>
		</div>
	</div>

	<!-- user name filter -->
	<div class="post-search-item">
		<div component="user/filter" class="dropdown" data-filter-name="user">
			<a component="user/filter/button" class="filter-btn btn btn-light btn-sm border {{{ if filters.users.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
				<span class="filter-label">{{{ if filters.users.active }}}{filters.users.label}{{{ else }}}[[search:posted-by]]{{{ end }}}</span>
				<span class="caret"></span>
			</a>

			<ul class="dropdown-menu p-1 text-sm" style="width: 350px;">
				<li class="px-3 py-1 d-flex flex-column gap-2">
					<input type="text" class="form-control" component="user/filter/search" placeholder="[[search:type-a-username]]">
					<div component="user/filter/selected" class="d-flex flex-wrap gap-2">
						{{{ each userFilterSelected }}}
						<div class="d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm">
							{buildAvatar(@value, "16px", true)} {./username}
							<button component="user/filter/delete" data-uid="{./uid}" class="btn btn-primary btn-sm py-0"><i class="fa fa-times fa-xs"></i></button>
						</div>
						{{{ end }}}
					</div>
					<hr/>
					<div component="user/filter/results" class="d-flex flex-wrap gap-2">
						{{{ each userFilterResults }}}
						<button class="btn btn-light btn-sm border" data-uid="{./uid}" data-username="{./username}">{buildAvatar(@value, "16px", true)} {./username}</button>
						{{{ end }}}
					</div>
				</li>
			</ul>
		</div>
	</div>


	<!-- reply count filter -->
	<div class="post-search-item">
		<div class="dropdown" data-filter-name="replies">
			<a id="reply-count-button" class="filter-btn btn btn-light btn-sm border {{{ if filters.replies.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				<span class="filter-label">{{{ if filters.replies.active }}}{filters.replies.label}{{{ else }}}[[search:replies]]{{{ end }}}</span>
				<span class="caret"></span>
			</a>

			<ul class="dropdown-menu p-1 text-sm" style="width: 300px;">
				<li class="px-3 py-1 d-flex flex-nowrap gap-2">
					<select id="reply-count-filter" class="form-select py-2 ps-2 pe-3">
						<option value="atleast">[[search:at-least]]</option>
						<option value="atmost">[[search:at-most]]</option>
					</select>
					<input id="reply-count" type="number" min="0" class="form-control py-2 ps-2 pe-3" />
				</li>
			</ul>
		</div>
	</div>

	<!-- time filter -->
	<div class="post-search-item">
		<div class="dropdown" data-filter-name="time">
			<a id="post-time-button" class="filter-btn btn btn-light btn-sm border {{{ if filters.time.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				<span class="filter-label">{{{ if filters.time.active }}}{filters.time.label}{{{ else }}}[[search:time]]{{{ end }}}</span>
				<span class="caret"></span>
			</a>

			<ul class="dropdown-menu p-1 text-sm" style="width: 350px;">
				<li class="px-3 py-1 d-flex flex-nowrap gap-2">
					<select id="post-time-filter" class="form-select py-2 ps-2 pe-3">
						<option value="newer">[[search:newer-than]]</option>
						<option value="older">[[search:older-than]]</option>
					</select>
					<select id="post-time-range" class="form-select py-2 ps-2 pe-3">
						<option value="">[[search:any-date]]</option>
						<option value="86400">[[search:yesterday]]</option>
						<option value="604800">[[search:one-week]]</option>
						<option value="1209600">[[search:two-weeks]]</option>
						<option value="2592000">[[search:one-month]]</option>
						<option value="7776000">[[search:three-months]]</option>
						<option value="15552000">[[search:six-months]]</option>
						<option value="31104000">[[search:one-year]]</option>
					</select>
				</li>
			</ul>
		</div>
	</div>

	<!-- sort filter -->
	<div class="post-search-item">
		<div class="dropdown" data-filter-name="sort">
			<a id="sort-by-button" class="filter-btn btn btn-light btn-sm border {{{ if filters.sort.active }}}active-filter{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				<span class="filter-label">{{{ if filters.sort.active }}}{filters.sort.label}{{{ else }}}[[search:sort]]{{{ end }}}</span>
				<span class="caret"></span>
			</a>

			<ul class="dropdown-menu p-1 text-sm" style="width: 250px;">
				<li class="px-3 py-1 d-flex flex-column gap-2">
					<select id="post-sort-by" class="form-select py-2 ps-2 pe-3">
						<option value="relevance">[[search:relevance]]</option>
						<option value="timestamp">[[search:post-time]]</option>
						<option value="votes">[[search:votes]]</option>
						<option value="topic.lastposttime">[[search:last-reply-time]]</option>
						<option value="topic.title">[[search:topic-title]]</option>
						<option value="topic.postcount">[[search:number-of-replies]]</option>
						<option value="topic.viewcount">[[search:number-of-views]]</option>
						<option value="topic.votes">[[search:topic-votes]]</option>
						<option value="topic.timestamp">[[search:topic-start-date]]</option>
						<option value="user.username">[[search:username]]</option>
						<option value="category.name">[[search:category]]</option>
					</select>
					<select id="post-sort-direction" class="form-select py-2 ps-2 pe-3">
						<option value="desc">[[search:descending]]</option>
						<option value="asc">[[search:ascending]]</option>
					</select>
				</li>
			</ul>
		</div>
	</div>

	<!-- save & reset preferences -->
	<div class="post-search-item">
		<div class="dropdown">
			<a class="btn btn-light btn-sm border border-gray-300 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">[[search:save]] <span class="caret"></span>
			</a>

			<ul class="dropdown-menu p-1 text-sm" style="width: 300px;">
				<li class="px-3 py-1 d-flex flex-column gap-2">
					<button id="save-preferences" class="btn btn-primary">[[search:save-preferences]]</button>
					<button id="clear-preferences" class="btn-outline border">[[search:clear-preferences]]</button>
				</li>
			</ul>
		</div>
	</div>
</div>
				<div id="results" class="search-results col-md-12" data-search-query="{search_query}">
	{{{ if matchCount }}}
	<div class="alert alert-info">[[search:results-matching, {matchCount}, {search_query}, {time}]] </div>
	{{{ else }}}
	{{{ if search_query }}}
	<div class="alert alert-warning">[[search:no-matches]]</div>
	{{{ end }}}
	{{{ end }}}

	{{{each posts}}}
	<div class="topic-row card clearfix mb-3">
		<div class="card-body">
			<div>
				<a href="{config.relative_path}/user/{./user.userslug}">{buildAvatar(./user, "24px", true)}</a>
				<span class="search-result-text search-result-title"><a href="{config.relative_path}/post/{posts.pid}">{./topic.title}</a></span>
			</div>

			{{{ if showAsPosts }}}
			<div class="search-result-text">
				{./content}
				<p class="fade-out"></p>
			</div>
			{{{ end }}}

			<small class="post-info float-end">
				<a href="{config.relative_path}/category/{./category.slug}">
					<div class="category-item d-inline-block">
						{buildCategoryIcon(./category, "24px", "rounded-circle")}
						{./category.name}
					</div>
				</a> &bull;
				<span class="timeago" title="{./timestampISO}"></span>
			</small>
		</div>
	</div>
	{{{end}}}

	{{{ if users.length }}}
	<ul id="users-container" class="users-container list-unstyled d-flex flex-wrap gap-2">
{{{each users}}}
<li class="users-box registered-user text-center pb-3" data-uid="{users.uid}" style="width: 102px;">
	<a href="{config.relative_path}/user/{users.userslug}">{buildAvatar(users, "64px", true)}</a>

	<div class="user-info">
		<div class="text-nowrap text-truncate">
			<span>
				<i component="user/status" class="fa fa-circle status {users.status}" title="[[global:{users.status}]]"></i>
				<a  href="{config.relative_path}/user/{users.userslug}">{users.username}</a>
			</span>
		</div>
		<!-- IF section_online -->
		<div class="lastonline">
			<span class="timeago" title="{users.lastonlineISO}"></span>
		</div>
		<!-- ENDIF section_online -->

		<!-- IF section_joindate -->
		<div class="joindate">
			<span class="timeago" title="{users.joindateISO}"></span>
		</div>
		<!-- ENDIF section_joindate -->

		<!-- IF section_sort-reputation -->
		<div class="reputation">
			<i class="fa fa-star"></i>
			<span>{formattedNumber(users.reputation)}</span>
		</div>
		<!-- ENDIF section_sort-reputation -->

		<!-- IF section_sort-posts -->
		<div class="post-count">
			<i class="fa fa-pencil"></i>
			<span>{formattedNumber(users.postcount)}</span>
		</div>
		<!-- ENDIF section_sort-posts -->

		<!-- IF section_flagged -->
		<div class="flag-count">
			<i class="fa fa-flag"></i>
			<span><a href="{config.relative_path}/flags?targetUid={users.uid}">{users.flags}</a></span>
		</div>
		<!-- ENDIF section_flagged -->
	</div>
</li>
{{{end}}}
<!-- IF anonymousUserCount -->
<li class="users-box anon-user text-center pb-3" style="width: 102px;">
	<span class="avatar avatar-rounded text-bg-secondary" component="avatar/icon" style="--avatar-size: 64px;">G</span>
	<br/>
	<div class="user-info">
		<span id="online_anon_count">{anonymousUserCount}</span>
		<span>[[global:guests]]</span>
	</div>
</li>
<!-- ENDIF anonymousUserCount -->
</ul>
	{{{ end }}}

	{{{ if tags.length }}}
	{{{each tags}}}
<h5 class="float-start tag-container me-4 mb-4 fw-bold">
	<a href="{config.relative_path}/tags/{tags.valueEncoded}" data-tag="{tags.valueEscaped}"><span class="tag-item text-muted text-uppercase text-nowrap tag-class-{tags.class} me-2" data-tag="{tags.valueEscaped}">{tags.valueEscaped}</span><span class="tag-topic-count text-primary text-nowrap" title="{tags.score}">{formattedNumber(tags.score)}</span></a>
</h5>
{{{end}}}
	{{{ end }}}

	{{{ if categories.length }}}
	<ul class="categories">
		{{{each categories}}}
		<li component="categories/category" data-cid="{./cid}" data-numRecentReplies="1" class="row clearfix category-{./cid} {./unread-class}">
	<meta itemprop="name" content="{../name}">

	<div class="content col-12 <!-- IF config.hideCategoryLastPost -->col-md-10 col-sm-12<!-- ELSE -->col-md-7 col-sm-9<!-- ENDIF config.hideCategoryLastPost -->">
		<div class="float-start">
		{buildCategoryIcon(@value, "48px", "rounded-circle")}
		</div>
		<h2 class="title">
			<!-- IF ../isSection -->
{../name}
<!-- ELSE -->
<!-- IF ../link -->
<a href="{../link}" itemprop="url">
<!-- ELSE -->
<a href="{config.relative_path}/category/{../slug}" itemprop="url">
<!-- ENDIF ../link -->
{../name}
</a>
<!-- ENDIF ../isSection -->
		</h2>
		<div>
			<!-- IF ../descriptionParsed -->
			<div class="description text-muted">
				{../descriptionParsed}
			</div>
			<!-- ENDIF ../descriptionParsed -->
			<!-- IF !config.hideSubCategories -->
			{{{ if ../children.length }}}
			<div class="category-children">
				{{{ each ../children }}}
				{{{ if !../isSection }}}
				<span class="category-children-item">
					{buildCategoryIcon(@value, "24px", "rounded-circle")}
					{{{ if ../link }}}
					<a href="{../link}">{../name}</a>
					{{{ else }}}
					<a href="{config.relative_path}/category/{../slug}">{../name}</a>
					{{{ end }}}
				</span>
				{{{ end }}}
				{{{ end }}}
			</div>
			{{{ end }}}
			<!-- ENDIF !config.hideSubCategories -->
		</div>
		<span class="d-block d-sm-none float-end">
			<!-- IF ../teaser.timestampISO -->
			<a class="permalink" href="{../teaser.url}">
				<small class="timeago" title="{../teaser.timestampISO}"></small>
			</a>
			<!-- ENDIF ../teaser.timestampISO -->
		</span>
	</div>
</li>

		{{{end}}}
	</ul>
	{{{ end }}}

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
		</div>
	</div>
</div>
