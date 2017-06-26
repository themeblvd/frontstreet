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

		if ( typeof FrontStreetConfig[component] !== 'undefined' && ( FrontStreetConfig[component] === false || FrontStreetConfig[component] === 'false' ) ) {
			return false;
		}

		return true;
	}
};

+function ($) {

	'use strict';

	var version = $.fn.jquery.split(' ')[0].split('.');

	if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
		throw new Error('Front Street\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4.');
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

		Menu.TIMER[ $this.options.id ] = [];

		$menu.removeClass('no-js');

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
		delay: 500
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

	};

	Menu.prototype.show = function($trigger, options) {

		var level = Menu.prototype.getLevel($trigger),
			$siblings = $trigger.siblings().find(options.dropdown_selector),
			$target = $trigger.children(options.dropdown_selector);

		clearTimeout( Menu.TIMER[ options.id ][ level ] );

		$siblings.removeClass('in');

		$target.addClass('show fade');

		Menu.TIMER[ options.id ][ level ] = setTimeout(function() {

			$siblings.removeClass('show fade');

			$target.addClass('in');

		}, 200);

	};

	Menu.prototype.hide = function($trigger, options) {

		var level = Menu.prototype.getLevel($trigger),
			$flyout = $trigger.children(options.dropdown_selector);

		clearTimeout( Menu.TIMER[ options.id ][ level ] );

		Menu.TIMER[ options.id ][ level ] = setTimeout(function() {

			$flyout.removeClass('in');

			setTimeout(function() {

				$flyout.removeClass('show fade');

			}, 200);

		}, options.delay);

	};

	Menu.prototype.getLevel = function($trigger) {

		var level = 'level-1';

		if ( $trigger.hasClass('level-2') ) {
			level = 'level-2';
		} else if ( $trigger.hasClass('level-3') ) {
			level = 'level-3';
		}

		return level;

	};

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
 * Front Street: modal.js v1.0.0
 * ========================================================================
 * Copyright 2017 Theme Blvd
 * Licensed under MIT
 * ======================================================================== */

+function ($) {

	'use strict';

	if ( ! FrontStreet.doComponent('modal') ) {
		return;
	}

	if ( ! $.fn.magnificPopup ) {
		return;
	}

	// SELF-INVOKING
	// =============

	$(document).ready(function() {

		var mainClass = 'fs-modal',
			removalDelay = 0;

		var config = {
			'animation'			: 'fade',
			'mobile'			: 0,
			'mobileIframe'		: 768,
			'mobileGallery'		: 0,
			'error'				: 'The modal media could not be loaded.',
			'close'				: 'Close',
			'loading'			: 'Loading...',
			'counter'			: '%curr% of %total%',
			'next'				: 'Next',
			'previous'			: 'Previous',
			'closeMarkup'		: '<button type="button" class="mfp-close fs-close close-light close-md">%title%</button>'
		};

		if ( typeof FrontStreetModalConfig !== 'undefined' ) {
			config = $.extend({}, config, FrontStreetModalConfig);
		}

		if ( config['animation'] && config['animation'] !== 'none' ) {
			mainClass = mainClass + ' fs-modal-' + config['animation'];
			removalDelay = 150;
		}

		$.extend( true, $.magnificPopup.defaults, {
			tClose: config.close,
			tLoading: config.loading,
			gallery: {
				tPrev: config.previous,
				tNext: config.next,
				tCounter: config.counter
			},
			image: {
				tError: config.error
			},
			ajax: {
				tError: config.error
			}
		});

		$('.fs-modal-close').on('click', function() {
			$.magnificPopup.close();
			return false;
		});

		$('.fs-content-modal-link').magnificPopup({
			type: 'inline',
			mainClass: mainClass,
			alignTop: true,
			showCloseBtn: false,
			removalDelay: removalDelay,
			callbacks: {
				open: function() {
					$('.mfp-wrap .fs-modal').attr('aria-hidden', false);
				},
				beforeClose: function() {
					$('.mfp-wrap .fs-modal').attr('aria-hidden', true);
				}
			}
		});

		$('.fs-search-modal-link').magnificPopup({
			type: 'inline',
			mainClass: mainClass + ' mfp-search',
			closeBtnInside: false,
			closeMarkup: config.closeMarkup,
			removalDelay: removalDelay,
			callbacks: {
				open: function() {

					$('.mfp-wrap .fs-search-modal').attr('aria-hidden', false);

					$.magnificPopup.instance.wrap[0].addEventListener('focus', function (e) {

						$('.mfp-search .fs-search-modal input[type="search"]').focus();

					});

				},
				beforeClose: function() {
					$('.mfp-wrap .fs-search-modal').attr('aria-hidden', true);
				}
			}
		});

		$('.fs-modal-gallery, .themeblvd-gallery').each(function() {

			var $gallery = $(this),
				selector = '',
				classes = [
					'themeblvd-lightbox',
					'fs-content-modal-link',
					'fs-image-modal-link',
					'fs-iframe-modal-link'
				];

			for ( var i = 0; i < classes.length; i++ ) {

				selector += '.' + classes[i];

				if ( i != classes.length - 1 ) {
					selector += ', ';
				}
			}

			$gallery.find(selector).each(function() {

				var $link = $(this),
					linkClass = '';

				if ( $link.hasClass('fs-content-modal-link') ) {

					linkClass = 'mfp-inline';

				} else if ( $link.hasClass('fs-image-modal-link') ) {

					linkClass = 'mfp-image';

				} else if ( $link.hasClass('fs-iframe-modal-link') ) {

					linkClass = 'mfp-iframe';

				}

				linkClass = 'fs-gallery-modal-link ' + linkClass;

				$link
					.removeClass( classes.join(' ') )
					.addClass(linkClass);

			});

			$gallery.magnificPopup({
				mainClass: mainClass,
				closeMarkup: config.closeMarkup,
				removalDelay: removalDelay,
				disableOn: config.mobileGallery,
				gallery: {
					enabled: true
				},
				image: {
					cursor: null
				},
				delegate: 'a.fs-gallery-modal-link',
				iframe: {
					// Add bottom bar for iframes
					markup: '<div class="mfp-iframe-scaler">' +
								'<div class="mfp-close"></div>' +
								'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
								'<div class="mfp-bottom-bar">' +
								  '<div class="mfp-title"></div>' +
								  '<div class="mfp-counter"></div>' +
								'</div>' +
							  '</div>'
				},
				callbacks: {
					markupParse: function(template, values, item) {
						values.title = item.el.attr('title');
					}
  				}
			});

		});

		$('.fs-image-modal-link').magnificPopup({
			type: 'image',
			mainClass: mainClass,
			closeMarkup: config.closeMarkup,
			removalDelay: removalDelay,
			disableOn: config.mobile,
			image: {
				cursor: null
			}
		});

		$('.fs-iframe-modal-link').magnificPopup({
			type: 'iframe',
			mainClass: mainClass,
			closeMarkup: config.closeMarkup,
			removalDelay: removalDelay,
			disableOn: config.mobileIframe,
			iframe: {
				// Add bottom bar for iframes
				markup: '<div class="mfp-iframe-scaler">' +
							'<div class="mfp-close"></div>' +
							'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
							'<div class="mfp-bottom-bar">' +
							  '<div class="mfp-title"></div>' +
							  '<div class="mfp-counter"></div>' +
							'</div>' +
						  '</div>'
			},
			callbacks: {
				markupParse: function(template, values, item) {
					values.title = item.el.attr('title');
				}
			}
		});

	});

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

		// Setup accessiblity.

		$element
			.find('.tab-pane')
			.each(function() {

				var $pane = $(this);

				if ( $pane.hasClass('active') ) {
					$pane.attr('aria-expanded', true);
				} else {
					$pane.attr('aria-expanded', false);
				}

			});

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

	};

	Tabs.DEFAULTS = {
		nav			: '.menu-bar, .submenu-bar, .submenu-tabs, .submenu-pills',
		height		: false,
		deepLink	: false
	};

	Tabs.prototype.show = function($element, $btn, options) {

		var $nav = $btn.closest(options.nav),
			target = $btn.attr('href').split('#')[1];

		$nav.find('li').removeClass('active');
		$btn.closest('li').addClass('active');

		$element
			.find('.tab-pane')
			.attr('aria-expanded', false)
			.removeClass('in')
			.hide()
			.removeClass('fade');

		$element
			.find('#' + target)
			.attr('aria-expanded', true)
			.addClass('fade')
			.show(0, function() {
				$(this).addClass('in');
			});

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

/* ========================================================================
 * Front Street: toggles.js v1.0.0
 * ========================================================================
 * Copyright 2017 Theme Blvd
 * Licensed under MIT
 * ======================================================================== */

+function ($) {

	'use strict';

	if ( ! FrontStreet.doComponent('toggles') ) {
		return;
	}

	// TOGGLES CLASS DEFINITION
	// ============================

	var Toggles = function(element, options) {

		var $this = this,
			$toggle = $(element),
			$group = null;

		$this.options = $.extend({}, Toggles.DEFAULTS, options);

		if ( $toggle.parents('.toggle-group').length > 0 ) {
			$group = $toggle.closest('.toggle-group');
		}

		if ( $group && $group.hasClass('toggle-accordion') ) {
			$this.options.accordion = true;
		}

		// Setup accessiblity.

		$toggle
			.find('.toggle-content')
			.attr('aria-expanded', false);

		// Open initially if has class "toggle-expanded".

		if ( $toggle.hasClass('toggle-expanded') ) {
			$this.open( $toggle, $this.options.speed );
		}

		// Setup toggle click.

		$toggle
			.find('.toggle-title')
			.on('click.fs.toggle', function(e) {
				e.preventDefault();
				$(this).blur();
				$this.toggle( $this, $toggle, $group );
				return false;
			});

	};

	Toggles.DEFAULTS = {
		speed 		: 200,
		accordion 	: false
	};

	Toggles.prototype.toggle = function($this, $toggle, $group) {

		if ( $toggle.hasClass('toggle-expanded') ) {

			// Toggle is open; so close it.

			$this.close( $toggle, $this.options.speed );

		} else {

			// Toggle is closed; so open it.

			if ( $group && $this.options.accordion ) {
				$group.find('.fs-toggle').each(function() {
					$this.close( $(this), $this.options.speed );
				});
			}

			$this.open( $toggle, $this.options.speed );

		}

	};

	Toggles.prototype.open = function($toggle, speed) {

		$toggle
			.addClass('toggle-expanded')
			.find('.toggle-content')
			.stop(true, true)
			.attr('aria-expanded', true)
			.slideDown(speed);

	};

	Toggles.prototype.close = function($toggle, speed) {

		$toggle
			.removeClass('toggle-expanded')
			.find('.toggle-content')
			.stop(true, true)
			.attr('aria-expanded', false)
			.slideUp(speed);

	};

	// TOGGLES PLUGIN DEFINITION
	// =============================

	function Plugin(option) {
		return this.each(function () {

			var $this 	= $(this),
				data  	= $this.data('fs.toggle'),
				options = $.extend({}, Toggles.DEFAULTS, $this.data(), typeof option == 'object' && option);

			if ( ! data ) {
				$this.data('fs.toggle', (data = new Toggles(this, options)));
			}

			if ( typeof option == 'string' ) {
				data[option].call($this);
			}

		})
	}

	var old = $.fn.FrontStreetToggles;

	$.fn.FrontStreetToggles = Plugin;
	$.fn.FrontStreetToggles.Constructor = Toggles;

	// TOGGLES NO CONFLICT
	// =======================

	$.fn.FrontStreetToggles.noConflict = function () {
		$.fn.FrontStreetToggles = old;
		return this;
	}

	// SELF-INVOKING
	// =============

	$(document).ready(function() {

		$('.fs-toggle').FrontStreetToggles();

	});

}(jQuery);
