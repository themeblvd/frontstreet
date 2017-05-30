/* ========================================================================
 * Front Street: menu.js v1.0.0
 * ========================================================================
 * Copyright 2017 Theme Blvd
 * Licensed under MIT
 * ======================================================================== */

+function ($) {

	'use strict';

	if ( ! FrontStreet.doComponent('menu') ) {
		return;
	}

	// MENU CLASS DEFINITION
	// ======================

	var Menu = function(element, options) {

		var $this = this,
			$menu = $(element);

		$this.options = $.extend({}, Menu.DEFAULTS, options);

		$this.options.id = Menu.COUNT++;

		$this.options.dropdown_selector = 'ul:not(.mega-sub-menu), .fs-mega';

		$menu.find($this.options.dropdown_selector).css('display', 'none');

		$menu.find('li').has($this.options.dropdown_selector)
			.addClass('menu-item-has-children')
			.on('mouseenter.fs.menu', function() {
				var $el = $(this);
				$this.flyout( $el, $this.options ); // Determine flyout direction.
				$this.show( $el, $this.options );
			})
			.on('mouseleave.fs.menu', function() {
				$this.hide( $(this), $this.options );
			});

		$menu.children('li').each(function() {
			$(this).addClass('level-1').children('ul').children('li').each(function() {
				$(this).addClass('level-2').children('ul').children('li').each(function() {
					$(this).addClass('level-3');
				});
			});
		});

		// Touch support
		var ios = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);

		if ( ios ) {
			// tap anywhere on iOS to unfocus a submenu
			$('html').css('cursor', 'pointer').on('click', $.noop);
		}

	}

	Menu.DEFAULTS = {
		delay	: 500,
		speed	: 200
	}

	Menu.COUNT = 0; // Assign a unique ID to each menu.

	Menu.TIMER = []; // Help with delayed effects between handlers.

	Menu.prototype.flyout = function($trigger, options) {

		if ( ! $trigger.hasClass('level-1') ) {
			return;
		}

		var $flyout = $trigger.children(options.dropdown_selector),
			location = $trigger.offset(),
			space = 200;

		if ( $('body').hasClass('rtl') ) {
			location = location['right'];
		} else {
			location = location['left'];
		}

		if ( $flyout.find('.level-3').length > 0 ) {
			space += space;
		}

		if ( ( $(window).width() - location ) <= space ) {
			$flyout.addClass('reverse');
		} else {
			$flyout.removeClass('reverse');
		}

	}

	Menu.prototype.show = function($trigger, options) {

		clearTimeout( Menu.TIMER[ options.id ] );

		$trigger.siblings().find(options.dropdown_selector).fadeOut(options.speed);

		$trigger.children(options.dropdown_selector).stop(true, true).fadeIn(options.speed);

	}

	Menu.prototype.hide = function($trigger, options) {

		var $flyout = $trigger.children(options.dropdown_selector);

		$flyout.stop(true, true).css('display', 'block');

		Menu.TIMER[ options.id ] = setTimeout(function() {
			$flyout.fadeOut(options.speed);
		}, options.delay);

	}

	// MENU PLUGIN DEFINITION
	// =======================

	function Plugin(option) {
		return this.each(function () {

			var $this 	= $(this),
				data  	= $this.data('fs.menu'),
				options = $.extend({}, Menu.DEFAULTS, $this.data(), typeof option == 'object' && option);

			if (!data) {
				$this.data('fs.menu', (data = new Menu(this, options)));
			}

			if (typeof option == 'string') {
				data[option].call($this);
			}

		})
	}

	var old = $.fn.FrontStreetMenu;

	$.fn.FrontStreetMenu = Plugin;
	$.fn.FrontStreetMenu.Constructor = Menu;

	// MENU NO CONFLICT
	// =================

	$.fn.FrontStreetMenu.noConflict = function () {
		$.fn.FrontStreetMenu = old;
		return this;
	}

	// SELF-INVOKING
	// =============

	$(document).ready(function(){

		$('.fs-menu').FrontStreetMenu();

		$('a.no-click').on('click', function() {
			return false;
		});

		$('li.no-click').find('a:first').on('click', function(){
			return false;
		});

	});

}(jQuery);
