/*!
 * Front Street v1.0.0 (http://frontstreet.io)
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
 * Front Street: background.js v1.0.0
 * ========================================================================
 * Copyright 2017 Theme Blvd
 * Licensed under MIT
 * ======================================================================== */

+function ($) {

	'use strict';

	if ( ! FrontStreet.doComponent('background') ) {
		return;
	}

	// BACKGROUND CLASS DEFINITION
	// ===========================

	var Background = function(element, options) {

		var $this = this,
			$element = $(element),
			$section;

		$this.options = $.extend({}, Background.DEFAULTS, options);

		$section = $element.closest($this.options.section);

		switch ( $this.options.type ) {

			case 'slider' :
				$this.slider($element, $section, $this.options);
				break;

			case 'parallax' :
				$this.parallax($element, $section, $this.options);

		}

	};

	Background.WINDOW = $(window);

	Background.MOBILEAGENT = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	Background.DEFAULTS = {
		type: 'parallax',
		autoplay : 4000,
		section: '.fs-section, .has-bg-slider, .has-bg-parallax, .has-bg-video'
	};

	Background.prototype.slider = function($slider, $section, options) {

		var $window = Background.WINDOW,
			autoplay = options.autoplay;

		if ( $slider.data('autoplay') && $slider.data('autoplay') >= 1000 ) {
			autoplay = $slider.data('autoplay');
		}

		// Reverse order of images so the top of stack
		// will be the first image.
		$slider.find('img').each(function() {
			var $img = $(this);
			$img.addClass('fade in');
			$slider.prepend($img);
		});

		$window.on('load', function() {

			$slider.addClass('in');
			$section.find('.fs-loader').fadeOut();

			setInterval(function(){

				var $lastImg = $slider.find('img:last-child');

				$lastImg.removeClass('in');

				setTimeout(function() {
					$lastImg.prependTo($slider).addClass('in');
				}, autoplay );

			}, autoplay );
		});


	};

	Background.prototype.parallax = function($figure, $section, options) {

		var $window = Background.WINDOW,
			isMobile = Background.prototype.isMobile,
			$img = $figure.find('img, .img'),
			parallax = null;

		$window.on('load', function() {

			if ( ! isMobile() ) {

				parallax = Background.prototype.parallaxCalc($figure, $img);

				if ( parallax ) {
					$img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
				}
			}

			$figure.addClass('in');
			$section.find('.fs-loader').fadeOut();

		});

		$window.on('scroll resize', function() {

			if ( ! isMobile() ) {

				parallax = Background.prototype.parallaxCalc($figure, $img);

				if ( parallax ) {
					$img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
				}
			}

		});

	};

	Background.prototype.parallaxSlider = function($slider, $section, options) {

	}

	Background.prototype.parallaxCalc = function($el, $img) {

		var imgHeight		= $img.height(),
			containerHeight	= ($el.height() > 0) ? $el.height() : 500,
			parallaxDist	= imgHeight - containerHeight,
			bottom			= $el.offset().top + containerHeight,
			top				= $el.offset().top,
			$window			= Background.WINDOW,
			scrollTop		= $window.scrollTop(),
			windowHeight	= window.innerHeight,
			windowBottom	= scrollTop + windowHeight,
			percentScrolled	= (windowBottom - top) / (containerHeight + windowHeight);

		if ( (bottom > scrollTop) && (top < (scrollTop + windowHeight)) ) {
			return Math.round((parallaxDist * percentScrolled));
		}

		return null;

	}

	Background.prototype.isMobile = function() {

		var $window = Background.WINDOW;

		if ( Background.MOBILEAGENT ) {
			return true;
		}

		if( $window.width() < 992 || $window.height() < 500 ) {
			return true;
		}

		if ( $('body').hasClass('mobile') ) {
			return true;
		}

		return false;

	};

	// BACKGROUND PLUGIN DEFINITION
	// ============================

	function Plugin(option) {
		return this.each(function () {

			var $this 	= $(this),
				data  	= $this.data('fs.background'),
				options = $.extend({}, Background.DEFAULTS, $this.data(), typeof option == 'object' && option);

			if ( ! data ) {
				$this.data('fs.background', (data = new Background(this, options)));
			}

		})
	}

	var old = $.fn.FrontStreetBackground;

	$.fn.FrontStreetBackground = Plugin;
	$.fn.FrontStreetBackground.Constructor = Background;

	// BACKGROUND NO CONFLICT
	// =======================

	$.fn.FrontStreetBackground.noConflict = function () {
		$.fn.FrontStreetBackground = old;
		return this;
	}

	// SELF-INVOKING
	// =============

	$(document).ready(function() {

		$('.fs-bg-slider').FrontStreetBackground({'type' : 'slider'});

		$('.fs-bg-parallax').FrontStreetBackground({'type' : 'parallax'});

	});

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
			tLoading: '<div class="fs-loader"><span>' + config.loading + '</span></div>',
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
 * Front Street: slider.js v1.0.0
 * ========================================================================
 * Copyright 2017 Theme Blvd
 * Licensed under MIT
 * ========================================================================
 * Our slider implementations rely on the OwlCarousel script.
 * @author David Deutsch
 * @link http://owlcarousel2.github.io/OwlCarousel2/
 * ======================================================================== */

+function ($) {

	'use strict';

	if ( ! FrontStreet.doComponent('slider') ) {
		return;
	}

	if ( ! $.fn.owlCarousel ) {
		return;
	}

	$(window).on('load', function() {

		$('.fs-simple-slider, .fs-gallery-slider, .fs-block-slider').each(function() {

			var $wrap 			= $(this),
				$slider 		= $wrap.find('.fs-slider'),
				items			= parseInt($wrap.data('items')) ? parseInt($wrap.data('items')) : 4,
				speed 			= parseInt($wrap.data('speed')) ? parseInt($wrap.data('speed')) : 500,
				autoplayTimeout = parseInt($wrap.data('autoplay')) ? parseInt($wrap.data('autoplay')) : 0,
				margin			= parseInt($wrap.data('margin')) ? parseInt($wrap.data('margin')) : 1,
				autoplay		= autoplayTimeout ? true : false,
				pause			= ($wrap.data('pause') == 'true' || $wrap.data('pause') == '1') ? true : false,
				loop			= ($wrap.data('loop') == 'false' || $wrap.data('loop') == '0') ? false : true,
				animate			= ($wrap.data('fade') == 'true' || $wrap.data('fade') == '1') ? 'fadeOut' : false,
				autoWidth		= $wrap.hasClass('fs-gallery-slider') ? true : false,
				center			= $wrap.hasClass('fs-gallery-slider') ? true : false,
				$nav 			= $wrap.find('.fs-slider-nav, .fs-slider-thumbs'),
				$arrows 		= $wrap.find('.fs-slider-arrows'),
				navCounter		= 0,
				timeout			= null;

			// Toggle "hovered" class on/off for any CSS
			// hover effects.
			$wrap
				.on('mouseenter', function() {
					$(this).addClass('hovered');
				})
				.on('mouseleave', function() {
					$(this).removeClass('hovered');
				});

			// Add slide-to data to each nav item.
			$nav.find('li').each(function() {
				$(this).data('slide-to', navCounter);
				navCounter++;
			});

			if ( $wrap.hasClass('fs-simple-slider') ) {
				margin = 0;
				items = 1;
			} else if ( $wrap.hasClass('fs-gallery-slider') ) {
				items = 1;
			}

			$slider.owlCarousel({
				items: items,
				nav: false,
				dots: true, // Must be enabled for e.page.index to work.
				loop: loop,
				smartSpeed: speed,
				autoplay: autoplay,
				autoplayTimeout: autoplayTimeout,
				autoplayHoverPause: pause,
				animateOut: animate,
				autoWidth: autoWidth,
				margin: margin,
				center: center,
				rtl: $('body').hasClass('rtl') ? true : false,
				onInitialized: function(e) {

					$nav.find('li:first-child').addClass('active');
					$wrap.removeClass('loading').addClass('loaded');

					if ( ! loop ) {
						$arrows.find('li').addClass('fade');
					}

					$wrap.find('.fs-loader').fadeOut();

				},
				onChanged: function(e) {

					// Make sure next and prev buttons don't show
					// when at start and end of cycle, if there's
					// no looping.

					if ( ! loop ) {

						var index = $wrap.hasClass('fs-block-slider') ? e.item.index : e.page.index;

						if ( index == 0 || index == -1 ) {
							$arrows.find('li.prev').removeClass('in');
							$arrows.find('li.next').addClass('in');
						} else if ( e.page.index + 1 == e.page.count ) {
							$arrows.find('li.next').removeClass('in');
							$arrows.find('li.prev').addClass('in');
						} else {
							$arrows.find('li').addClass('in');
						}

					}

					// Standard navigation dots.
					$nav.find('li').removeClass('active');
					$nav.find('li:nth-child(' + (e.page.index + 1) + ')').addClass('active');

				}
			});

			// Bind standard slider nav and thumb nav.
			$nav.find('li').on('click', function() {

				var $current = $(this);

				$slider
					// .trigger( 'stop.owl.autoplay' ) // Doesn't work right as of v2.2.1.
					.trigger( 'to.owl.carousel', $current.data('slide-to') );

				$current.closest('ul, ol').find('li').removeClass('active');
				$current.addClass('active');

			});

			// Bind slider arrow next/prev nav.
			$arrows.find('li').on('click', function() {

				// $slider.trigger('stop.owl.autoplay'); // Doesn't work right as of v2.2.1.

				if ( $(this).hasClass('next') ) {
					$slider.trigger('next.owl.carousel');
				} else {
					$slider.trigger('prev.owl.carousel');
				}

			});

		}); // End .each()

	}); // End .on('load')

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
 * Front Street: tooltip.js v1.0.0
 * Inspired by Bootstrap 3's tooltips.js, which was inspired
 * by the original jQuery.tipsy by Jason Frame.
 * ========================================================================
 * Copyright 2017 Theme Blvd
 * Licensed under MIT
 * ======================================================================== */

+function ($) {

	'use strict';

	if ( ! FrontStreet.doComponent('tooltip') ) {
		return;
	}

	// TOOLTIP PUBLIC CLASS DEFINITION
	// ===============================

	var Tooltip = function (element, options) {

		this.type = null;
		this.options = null;
		this.enabled = null;
		this.timeout = null;
		this.hoverState = null;
		this.$element = null;
		this.inState = null;

		this.init('tooltip', element, options);

	}

	Tooltip.TRANSITION_DURATION = 150

	Tooltip.DEFAULTS = {
		placement: 'top',
		template: '<div class="fs-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		title: '',
		container: false,
		viewport: {
			selector: 'body',
			padding: 0
		}
	}

	Tooltip.prototype.init = function (type, element, options) {

		this.enabled = true;
		this.type = type;
		this.$element = $(element);
		this.options = this.getOptions(options);
		this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport));
		this.inState = { click: false, hover: false, focus: false };

		this.$element.on('mouseenter'	+ '.' + this.type, false, $.proxy(this.enter, this));
		this.$element.on('mouseleave' + '.' + this.type, false, $.proxy(this.leave, this));

		this.$element.on('focusin'	+ '.' + this.type, false, $.proxy(this.enter, this));
		this.$element.on('focusout' + '.' + this.type, false, $.proxy(this.leave, this));

	}

	Tooltip.prototype.getDefaults = function () {
		return Tooltip.DEFAULTS;
	}

	Tooltip.prototype.getOptions = function (options) {
		options = $.extend({}, this.getDefaults(), this.$element.data(), options);
		return options;
	}

	Tooltip.prototype.getDelegateOptions = function () {

		var options	= {},
			defaults = this.getDefaults();

		this._options && $.each(this._options, function (key, value) {
			if (defaults[key] != value) {
				options[key] = value;
			}
		})

		return options;
	}

	Tooltip.prototype.enter = function (obj) {

		var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('fs.' + this.type);

		if (!self) {
			self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
			$(obj.currentTarget).data('fs.' + this.type, self);
		}

		if (obj instanceof $.Event) {
			self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
		}

		if (self.tip().hasClass('in') || self.hoverState == 'in') {
			self.hoverState = 'in';
			return;
		}

		self.hoverState = 'in';

		return self.show();
	}

	Tooltip.prototype.isInStateTrue = function () {

		for (var key in this.inState) {
			if (this.inState[key]) {
				return true;
			}
		}

		return false;
	}

	Tooltip.prototype.leave = function (obj) {

		var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('fs.' + this.type);

		if (!self) {
			self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
			$(obj.currentTarget).data('fs.' + this.type, self);
		}

		if (obj instanceof $.Event) {
			self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
		}

		if (self.isInStateTrue()) {
			return;
		}

		self.hoverState = 'out';

		return self.hide();

	}

	Tooltip.prototype.show = function () {

		var e = $.Event('show.fs.' + this.type);

		if (this.hasContent() && this.enabled) {

			this.$element.trigger(e);

			var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);

			if (e.isDefaultPrevented() || !inDom) {
				return;
			}

			var that = this;
			var $tip = this.tip();
			var tipId = this.getUID(this.type);

			this.setContent();
			$tip.attr('id', tipId);
			this.$element.attr('aria-describedby', tipId);

			$tip.addClass('fade');

			var placement = typeof this.options.placement == 'function' ?
				this.options.placement.call(this, $tip[0], this.$element[0]) :
				this.options.placement;

			var autoToken = /\s?auto?\s?/i;
			var autoPlace = autoToken.test(placement);

			if (autoPlace) {
				placement = placement.replace(autoToken, '') || 'top';
			}

			$tip
				.detach()
				.css({ top: 0, left: 0, display: 'block' })
				.addClass(placement)
				.data('fs.' + this.type, this);

			if( this.options.container ) {
				$tip.appendTo(this.options.container);
			} else {
				$tip.insertAfter(this.$element);
			}

			this.$element.trigger('inserted.fs.' + this.type);

			var pos = this.getPosition(),
				actualWidth	= $tip[0].offsetWidth,
				actualHeight = $tip[0].offsetHeight;

			if (autoPlace) {

				var orgPlacement = placement,
					viewportDim = this.getPosition(this.$viewport);

				if ( placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ) {
					placement = 'top';
				} else if ( placement == 'top' && pos.top - actualHeight < viewportDim.top ) {
					placement = 'bottom';
				}

				$tip.removeClass(orgPlacement).addClass(placement);
			}

			var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

			this.applyPlacement(calculatedOffset, placement);

			var complete = function () {

				var prevHoverState = that.hoverState;
				that.$element.trigger('shown.fs.' + that.type);
				that.hoverState = null;

				if (prevHoverState == 'out') {
					that.leave(that);
				}
			}
		}
	}

	Tooltip.prototype.applyPlacement = function (offset, placement) {

		var $tip = this.tip(),
			width = $tip[0].offsetWidth,
			height = $tip[0].offsetHeight,
			marginTop = parseInt($tip.css('margin-top'), 10),
			marginLeft = parseInt($tip.css('margin-left'), 10);

		offset.top	+= marginTop;
		offset.left += marginLeft;

		// $.fn.offset doesn't round pixel values
		// so we use setOffset directly with our own function B-0
		$.offset.setOffset($tip[0], $.extend({
			using: function (props) {
				$tip.css({
					top: Math.round(props.top),
					left: Math.round(props.left)
				});
			}
		}, offset), 0);

		$tip.addClass('in');

		// check to see if placing tip in new offset caused the tip to resize itself
		var actualWidth	= $tip[0].offsetWidth,
			actualHeight = $tip[0].offsetHeight;

		if (placement == 'top' && actualHeight != height) {
			offset.top = offset.top + height - actualHeight;
		}

	}

	Tooltip.prototype.setContent = function () {

		var $tip = this.tip(),
			title = this.getTitle();

		$tip.find('.tooltip-inner')['text'](title);
		$tip.removeClass('fade in top bottom');

	}

	Tooltip.prototype.hide = function (callback) {

		var that = this,
			$tip = $(this.$tip),
			e = $.Event('hide.fs.' + this.type);

		function complete() {

			if (that.hoverState != 'in') {
				$tip.detach();
			}

			if (that.$element) {
				that.$element
					.removeAttr('aria-describedby')
					.trigger('hidden.fs.' + that.type);
			}

			if (callback) {
				callback();
			}
		}

		this.$element.trigger(e);

		if (e.isDefaultPrevented()) {
			return;
		}

		$tip.removeClass('in');

		this.hoverState = null;

		return this;
	}

	Tooltip.prototype.hasContent = function () {
		return this.getTitle();
	}

	Tooltip.prototype.getPosition = function ($element) {

		if (!$element) {
			$element = this.$element;
		}

		var el = $element[0],
			isBody = el.tagName == 'BODY',
			elRect = el.getBoundingClientRect();

		if (elRect.width == null) {
			elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
		}

		var isSvg = window.SVGElement && el instanceof window.SVGElement,
			elOffset = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset()),
			scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() },
			outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

		return $.extend({}, elRect, scroll, outerDims, elOffset);

	}

	Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {

		var offset = {};

		if ( placement == 'bottom' ) {

			offset = {
				top: pos.top + pos.height,
				left: pos.left + pos.width / 2 - actualWidth / 2
			};

		} else {

			offset = {
				top: pos.top - actualHeight,
				left: pos.left + pos.width / 2 - actualWidth / 2
			};

		}

		return offset;
	}

	Tooltip.prototype.getTitle = function () {

		var title = this.options.title;

		if ( ! title ) {
			var $el = this.$element;
			title = $el.attr('title');
		}

		return title;
	}

	Tooltip.prototype.getUID = function (prefix) {
		do {
			prefix += ~~(Math.random() * 1000000);
		} while ( document.getElementById(prefix) );

		return prefix;
	}

	Tooltip.prototype.tip = function () {

		if (!this.$tip) {

			this.$tip = $(this.options.template);

			if (this.$tip.length != 1) {
				throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
			}
		}

		return this.$tip;
	}

	Tooltip.prototype.arrow = function () {
		return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'));
	}

	Tooltip.prototype.enable = function () {
		this.enabled = true;
	}

	Tooltip.prototype.disable = function () {
		this.enabled = false;
	}

	Tooltip.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled;
	}

	Tooltip.prototype.toggle = function (e) {

		var self = this;

		if (e) {

			self = $(e.currentTarget).data('fs.' + this.type);

			if (!self) {
				self = new this.constructor(e.currentTarget, this.getDelegateOptions());
				$(e.currentTarget).data('fs.' + this.type, self);
			}
		}

		if (e) {

			self.inState.click = !self.inState.click;

			if ( self.isInStateTrue() ) {
				self.enter(self);
			} else {
				self.leave(self);
			}

		} else {

			if ( self.tip().hasClass('in') ) {
				self.leave(self);
			} else {
				self.enter(self);
			}

		}
	}

	Tooltip.prototype.destroy = function () {

		var that = this;

		clearTimeout(this.timeout);

		this.hide(function () {

			that.$element.off('.' + that.type).removeData('fs.' + that.type);

			if (that.$tip) {
				that.$tip.detach();
			}

			that.$tip = null;
			that.$arrow = null;
			that.$viewport = null;
			that.$element = null;

		})
	}


	// TOOLTIP PLUGIN DEFINITION
	// =========================

	function Plugin(option) {
		return this.each(function () {

			var $this = $(this),
				data = $this.data('fs.tooltip'),
				options = typeof option == 'object' && option;

			if (!data && /destroy|hide/.test(option)) {
				return;
			}

			if (!data) {
				$this.data('fs.tooltip', (data = new Tooltip(this, options)));
			}

			if (typeof option == 'string') {
				data[option]();
			}
		})
	}

	var old = $.fn.FrontStreetTooltip;

	$.fn.FrontStreetTooltip = Plugin;
	$.fn.FrontStreetTooltip.Constructor = Tooltip;

	// TOOLTIP NO CONFLICT
	// ===================

	$.fn.FrontStreetTooltip.noConflict = function () {
		$.fn.FrontStreetTooltip = old;
		return this;
	}

	// SELF-INVOKING
	// =============

	$(document).ready(function() {
		$('.fs-tooltip-trigger').FrontStreetTooltip();
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
