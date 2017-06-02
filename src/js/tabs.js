/* ========================================================================
 * Front Street: tabs.js v1.0.0
 * ========================================================================
 * Copyright 2017 Theme Blvd
 * Licensed under MIT
 * ======================================================================== */

+function ($) {

	'use strict';

	if ( ! FrontStreet.doComponent('tabs') ) {
		return;
	}

	// TABS CLASS DEFINITION
	// ============================

	var Tabs = function(element, options) {

		var $this = this,
			$element = $(element);

		$this.options = $.extend({}, Tabs.DEFAULTS, options);

		if ( $element.hasClass('tabs-fixed-height') ) { // Override option when CSS class exists.
			$this.options.height = true;
		}

		if ( $element.hasClass('tabs-deep-link') ) { // Override option when CSS class exists.
			$this.options.deepLink = true;
		}

		// Toggle tab content.

		$element
			.find($this.options.nav)
			.find('a')
			.on('click.fs.tabs', function() {
				$this.show( $element, $(this), $this.options );
				return false;
			});

		if ( $this.options.height || $this.options.deepLink ) {

			$(window).on('load', function() {

				// Match height of all tabs to tallest.

				if ( $this.options.height ) {
					$this.height($element);
				}

				// Watch for deep-linking.

				if ( $this.options.deepLink ) {
					$this.deepLink($this, $element, options);
				}

			});

		}

	}

	Tabs.DEFAULTS = {
		speed 		: 200,
		nav			: '.menu-bar, .submenu-bar, .submenu-tabs, .submenu-pills',
		height		: false,
		deepLink	: false
	}

	Tabs.prototype.show = function($element, $btn, options) {

		var $nav = $btn.closest(options.nav),
			target = $btn.attr('href').split('#')[1];

		$nav.find('li').removeClass('active');
		$btn.closest('li').addClass('active');

		$element.find('.tab-pane').hide();
		$element.find('#' + target).fadeIn(options.speed);

	};

	Tabs.prototype.height = function($element) {

		var tallest = 0;

		$element.find('.tab-pane').each(function() {

			var $pane = $(this),
				currentHeight = $pane.show().outerHeight();

			if ( ! $pane.hasClass('active') ) {
				$pane.hide();
			}

			if ( currentHeight > tallest ) {
				tallest = currentHeight;
			}

		});

		$element.find('.tab-pane').height(tallest);

	};

	Tabs.prototype.deepLink = function($this, $element, options) {

		// Note: To deep link to a tab, you need to prefix
		// the ID of the tab with "tab_" like this:
		// http://your-site.com/page-with-tabs/#tab_id_of_tab

		var hash = document.location.hash;

		if ( hash && hash.indexOf('tab_') != -1 ) {

			hash = hash.replace('tab_', '');

			$this.show( $element, $element.find('a[href="' + hash + '"]'), options );

			$('html, body').animate({
				scrollTop: $element.offset().top - 20
			}, 800);

		}

	};

	// TABS PLUGIN DEFINITION
	// =============================

	function Plugin(option) {
		return this.each(function () {

			var $this 	= $(this),
				data  	= $this.data('fs.tabs'),
				options = $.extend({}, Tabs.DEFAULTS, $this.data(), typeof option == 'object' && option);

			if ( ! data ) {
				$this.data('fs.tabs', (data = new Tabs(this, options)));
			}

			if ( typeof option == 'string' ) {
				data[option].call($this);
			}

		})
	}

	var old = $.fn.FrontStreetTabs;

	$.fn.FrontStreetTabs = Plugin;
	$.fn.FrontStreetTabs.Constructor = Tabs;

	// TABS NO CONFLICT
	// =======================

	$.fn.FrontStreetTabs.noConflict = function () {
		$.fn.FrontStreetTabs = old;
		return this;
	}

	// SELF-INVOKING
	// =============

	$(document).ready(function() {

		$('.fs-tabs').FrontStreetTabs();

	});

}(jQuery);
