/*!
 * Front Street v1.0.0 (http://getbootstrap.com)
 * Copyright 2017 Theme Blvd
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
	throw new Error('Front Street\'s JavaScript requires jQuery');
}

var FrontStreet = {
	doComponent: function(component) {

		if ( typeof frontstreet_config[component] !== 'undefined' && ( frontstreet_config[component] === false || frontstreet_config[component] === 'false' ) ) {
			return false;
		}

		return true;
	}
};

+function ($) {

	'use strict';

	var version = $.fn.jquery.split(' ')[0].split('.');

	if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
		throw new Error('Front Street\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4');
	}

}(jQuery);

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

	$(document).ready(function() {

		$("select.fs-jump-menu, select.tb-jump-menu").on('change', function() {

			var href = $(this).val();

			if ( href ) {
				window.location.href = href;
			}

		});

	});

}(jQuery);

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

	$(document).ready(function() {

		$('.fs-menu').FrontStreetMenu();

		$('a.no-click').on('click', function() {
			return false;
		});

		$('li.no-click').find('a:first').on('click', function(){
			return false;
		});

	});

}(jQuery);

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

	}

	MobileMenu.DEFAULTS = {
		direction : 'ltr',
	}

	MobileMenu.prototype.show = function($trigger, options) {

		$trigger.closest('li').children('ul').stop(true, true).addClass('on');

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
