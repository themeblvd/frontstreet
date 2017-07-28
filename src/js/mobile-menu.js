/* ========================================================================
 * Front Street: mobile-menu.js v1.0.0
 * ========================================================================
 * Copyright 2017 Theme Blvd
 * Licensed under MIT
 * ======================================================================== */

+function ($) {

	'use strict';

	if ( ! FrontStreet.doComponent('mobile-menu') ) {
		return;
	}

	// MOBILE MENU CLASS DEFINITION
	// ============================

	var MobileMenu = function(element, options) {

		var $this = this,
			$menu = $(element),
			$triggers = $menu.find('li').has('ul');

		$this.options = $.extend({}, MobileMenu.DEFAULTS, options);

		$triggers
			.addClass('menu-item-has-children')
			.children('.menu-btn').on('click.fs.mobile-menu', function() {
				$this.show( $(this), $this.options );
				return false;
			});

		$triggers
			.find('ul')
			.prepend('<li><a href="#" class="menu-btn back"></a></li>')
			.find('.back').on('click.fs.mobile-menu-back', function() {
				$this.hide( $(this), $this.options );
				return false;
			});

		$menu.height( $menu.prop('scrollHeight') );

	}

	MobileMenu.DEFAULTS = {
		// direction : 'ltr'
	}

	MobileMenu.prototype.show = function($trigger, options) {

		$trigger.closest('li').children('ul').addClass('on');

	}

	MobileMenu.prototype.hide = function($trigger, options) {

		$trigger.closest('ul').removeClass('on');

	}

	// MOBILE MENU PLUGIN DEFINITION
	// =============================

	function Plugin(option) {
		return this.each(function () {

			var $this 	= $(this),
				data  	= $this.data('fs.mobile-menu'),
				options = $.extend({}, MobileMenu.DEFAULTS, $this.data(), typeof option == 'object' && option);

			if (!data) {
				$this.data('fs.mobile-menu', (data = new MobileMenu(this, options)));
			}

			if (typeof option == 'string') {
				data[option].call($this);
			}

		})
	}

	var old = $.fn.FrontStreetMobileMenu;

	$.fn.FrontStreetMobileMenu = Plugin;
	$.fn.FrontStreetMobileMenu.Constructor = MobileMenu;

	// MOBILE MENU NO CONFLICT
	// =======================

	$.fn.FrontStreetMobileMenu.noConflict = function () {
		$.fn.FrontStreetMobileMenu = old;
		return this;
	}

}(jQuery);
