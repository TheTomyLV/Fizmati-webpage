		</div><!-- /.container#content -->
	</main>
	<div style="background-image: url(uploads/system/grid2.svg);
			background-repeat-y: no-repeat;
			height: 300px;
			width: 100%;
			background-position: bottom;
			z-index: -1;"></div>
	{{{ if !isSpider }}}
	<div component="toaster/tray" class="alert-window">
		<!-- IMPORT partials/reconnect-alert.tpl -->
	</div>
	{{{ end }}}
	<!-- IMPORT modules/taskbar.tpl -->
	<!-- IMPORT partials/footer/js.tpl -->
</body>
</html>
