{{{ if children.length }}}
<div class="subcategory">
	{{{ if hasMoreSubCategories }}}
	<div class="mb-2"><div component="category-selector" class="btn-group dropdown-left category-dropdown-container bottom-sheet">
	<button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
    <span component="category-selector-selected">
        {{{ if (selectedCategory && !showCategorySelectLabel) }}}
        <span class="category-item">
            {buildCategoryIcon(selectedCategory, "24px", "rounded-circle")}
            {selectedCategory.name}
        </span>
        {{{ else }}}
    <span class="visible-sm-inline visible-md-inline visible-lg-inline">{{{ if selectCategoryLabel }}}{selectCategoryLabel}{{{ else }}}[[topic:thread-tools.select-category]]{{{ end }}}</span><span class="visible-xs-inline"><i class="fa fa-fw {{{ if selectCategoryIcon }}}{selectCategoryIcon}{{{ else }}}fa-list{{{ end }}}"></i></span>
    {{{ end }}}</span> <span class="caret"></span>
</button>
<div component="category-selector-search" class="hidden position-absolute">
    <input type="text" class="form-control" placeholder="[[search:type-to-search]]" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
    <li component="category/no-matches" role="presentation" class="category hidden">
        <a class="dropdown-item" role="menu-item">[[search:no-matches]]</a>
    </li>
    {{{each categoryItems}}}
    <li role="presentation" class="category {{{ if ../disabledClass }}}disabled {{{ end }}}" data-cid="{../cid}" data-name="{../name}" data-parent-cid="{../parentCid}">
        <a class="dropdown-item {{{ if ./disabledClass }}}disabled {{{ end }}}" role="menu-item" href="#">{../level}
            <span component="category-markup" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">
                <div class="category-item d-inline-block">
                    {{{ if ./icon }}}
                    {buildCategoryIcon(@value, "24px", "rounded-circle")}
                    {{{ end }}}
                    {./name}
                </div>
            </span>
        </a>
    </li>
    {{{ end }}}
</ul>
</div></div>
	{{{ else }}}
	<p>[[category:subcategories]]</p>
	{{{ end }}}

	<ul component="category/subcategory/container" class="categories list-unstyled" itemscope itemtype="http://www.schema.org/ItemList">
		{{{each children}}}
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
	{{{ if hasMoreSubCategories}}}
	<button class="btn btn-outline-secondary mb-2" component="category/load-more-subcategories">[[category:x-more-categories, {subCategoriesLeft}]]</button>
	{{{ end }}}
</div>
{{{ end }}}