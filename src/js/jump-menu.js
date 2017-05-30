/* ========================================================================
 * Front Street: jump-menu.js v1.0.0
 * ========================================================================
 * Copyright 2017 Theme Blvd
 * Licensed under MIT
 * ======================================================================== */

+function ($) {

	'use strict';

	if ( ! FrontStreet.doComponent('jump-menu') ) {
		return;
	}

	// SELF-INVOKING
	// =============

	$(document).ready(function(){

		$("select.fs-jump-menu, select.tb-jump-menu").on('change', function() {

			var href = $(this).val();

			if ( href ) {
				window.location.href = href;
			}

		});

	});

}(jQuery);
