/**
 * Front Street
 *
 * A frontend web development framework.
 *
 * @version   1.0.0
 *
 * @author    Jason Bobich, Theme Blvd
 * @link      http://frontstreet.io
 * @link      http://themeblvd.com
 * @copyright 2009-2017 Theme Blvd
 * @license   GPL-2.0+
 */

/**
 * This file initializes all Front Street JavaScript.
 * A global window.frontStreet object is stored that
 * holds all variables and methods, which is passed around.
 *
 * We also add `frontStreet` to the jQuery namespace
 * here. All components can be binded like:
 *
 * $( '.foo' ).frontStreet( 'component-name', options );
 *
 * @summary  Front Street JavaScript setup.
 *
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   menu.js
 */

/**
 * Global Front Street object.
 *
 * @since 1.0.0
 *
 * @var {object}
 */
window.frontStreet = {};

+function( $, frontStreet ) {

	'use strict';

	// Verify that jQuery exists.
	if ( 'undefined' === typeof jQuery ) {
		throw new Error( 'Front Street\'s JavaScript requires jQuery' );
	}

	// Verity jQuery version.
	var version = $.fn.jquery.split( ' ' )[ 0 ].split( '.' );

	if ( ( version[0] < 2 && version[1] < 9 ) || ( version[0] == 1 && version[1] == 9 && version[2] < 1) || ( version[0] > 3 )) {
		throw new Error( 'Front Street\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4.' );
	}

	/**
	 * Global Front Street configuration.
	 *
	 * This configuration can be overridden by
	 * creating an fsConfig object before we
	 * get to this point in the loading process.
	 *
	 * @since 1.0.0
	 *
	 * @var {object}
	 */
	frontStreet.config = 'undefined' !== typeof fsConfig ? fsConfig : {};

	/**
	 * Store and cache re-usable DOM elements.
	 *
	 * @since 1.0.0
	 *
	 * @var {object}
	 */
	frontStreet.dom = {
		window: $( window ),
		document: $( document ),
		body: $( 'body' )
	};

	/**
	 * Checks if a framework component should be loaded.
	 *
	 * @since 1.0.0
	 *
	 * @param  {string} component Framework component ID.
	 * @return {bool}             Whether to include component.
	 */
	frontStreet.doComponent = function( component ) {

		if ( 'undefined' === typeof frontStreet.config[ component ] ) {
			return true; // All components are true by default.
		}

		if ( false === frontStreet.config[ component ] ) {
			return false;
		}

		if ( 'false' === frontStreet.config[ component ] ) {
			return false;
		}

		return true;

	};

	/**
	 * Checks if website is being loaded from a mobile
	 * device.
	 *
	 * @since 1.0.0
	 *
	 * @param  {bool} viewportCheck Whether to let viewport size help determine.
	 * @return {bool}               Whether we're on a mobile device.
	 */
	frontStreet.isMobile = function( viewportCheck ) {

		var $body = frontStreet.dom.body;

		if ( $body.hasClass( 'mobile' ) ) {
			return true;
		}

		var agentCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent );

		if ( agentCheck ) {
			return true;
		}

		if ( viewportCheck ) {

			var $window = $( window );

			if ( $window.width() < 992 || $window.height() < 500 ) {
				return true;
			}
		}

		return false;

	};

	/**
	 * Adds all components as one item to the jQuery
	 * namespace.
	 *
	 * @since 1.0.0
	 *
	 * @param {string} component Framework component ID.
	 * @param {object} options   Options for component.
	 */
	$.fn.frontStreet = function( component, options ) {

		/*
		 * To get object name, convert component name to
		 * camel case, i.e. `my-string` to `myString`.
		 */
		var name = component.replace( /-([a-z])/g, function( g ) {
			return g[1].toUpperCase();
		} );

		return this.each( function() {

			if ( 'undefined' !== typeof frontStreet[ name ] ) {
				frontStreet[ name ].init( this, options );
			} else {
				console.log( 'Front Street component "' + component + '" is missing.' );
			}

		} );

	};

}( jQuery, window.frontStreet );

/**
 * This file includes the functionality for section
 * parallax background image effects and background
 * sliders.
 *
 * By default all HTML elements with class `fs-bg-slider`
 * and `fs-bg-parallax` are automatically binded
 * with their respective effects.
 *
 * @summary  Background Effects
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   background.js
 * @requires init.js
 */
+function( $, frontStreet ) {

	'use strict';

	if ( 'undefined' === typeof frontStreet ) {
		return;
	}

	if ( 'undefined' === typeof frontStreet.doComponent ) {
		return;
	}

	if ( ! frontStreet.doComponent( 'background' ) ) {
		return;
	}

	var $window = frontStreet.dom.window;

	frontStreet.background = {};

	/**
	 * Default background options.
	 *
	 * @since 1.0.0
	 *
	 * @var {object}
	 */
	frontStreet.background.defaults = {
		type: 'parallax',
		autoplay: 4000,
		section: '.fs-section, .has-bg-slider, .has-bg-parallax, .has-bg-video'
	};

	/**
	 * Initialize the `background` component on a DOM element,
	 * when binded through jQuery.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} element this
	 * @param {object} options Component options.
	 */
	frontStreet.background.init = function( element, options ) {

		var $element = $( element ),
			settings = $.extend( {}, frontStreet.background.defaults, options ),
			$section = $element.closest( settings.section );

		switch ( settings.type ) {

			case 'slider' :
				frontStreet.background.slider( $element, $section, settings );
				break;

			case 'parallax' :
				frontStreet.background.parallax( $element, $section, settings );

		}

	};

	/**
	 * Setup a background slider.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $element The background slider element.
	 * @param {object} $section Section containing element.
	 * @param {object} settings Current settings.
	 */
	frontStreet.background.slider = function( $slider, $section, settings ) {

		var autoplay = settings.autoplay;

		if ( $slider.data( 'autoplay' ) && $slider.data( 'autoplay' ) >= 1000 ) {
			autoplay = $slider.data( 'autoplay' );
		}

		/*
		 * Reverse order of images so the top of stack
		 * will be the first image.
		 */
		$slider.find( 'img' ).each( function() {

			var $img = $(this);

			$img.addClass( 'fade in' );

			$slider.prepend( $img );

		} );

		$slider.addClass( 'in' );

		$section.find( '.fs-loader' ).fadeOut();

		setInterval( function() {

			var $lastImg = $slider.find( 'img:last-child' );

			$lastImg.removeClass( 'in' );

			setTimeout(function() {

				$lastImg.prependTo( $slider ).addClass( 'in' );

			}, autoplay );

		}, autoplay );


	};

	/**
	 * Setup a background image parallax effect.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $element The background element.
	 * @param {object} $section Section containing element.
	 * @param {object} settings Current settings.
	 */
	frontStreet.background.parallax = function( $figure, $section, settings ) {

		var $img     = $figure.find( 'img, .img' ),
			parallax = null;

		/*
		 * Will only calculate if all are true:
		 *
		 * 1. Not a true mobile device (looking at user agent).
		 * 2. Window is taller than 500px.
		 * 3. Window is wider than 992px.
		 *
		 * @see isMobile() function in init.js
		 */
		if ( ! frontStreet.isMobile( true ) ) { // Passing `true` denotes checking viewport size.

			parallax = frontStreet.background.parallaxCalc( $figure, $img );

			if ( parallax ) {
				$img.css( 'transform', "translate3D(-50%," + parallax + "px, 0)" );
			}
		}

		$figure.addClass( 'in' );

		$section.find( '.fs-loader' ).fadeOut();

		// Adjust parallax positioning if window is resized.
		$window.on( 'scroll resize', function() {

			/*
			 * Will only calculate if all are true:
			 *
			 * 1. Not a true mobile device (looking at user agent).
			 * 2. Window is taller than 500px.
			 * 3. Window is wider than 992px.
			 *
			 * @see isMobile() function in init.js
			 */
			if ( ! frontStreet.isMobile( true ) ) { // Passing `true` denotes checking viewport size.

				parallax = frontStreet.background.parallaxCalc($figure, $img);

				if ( parallax ) {
					$img.css( 'transform', "translate3D(-50%," + parallax + "px, 0)" );
				}
			}

		} );

	};

	/**
	 * Calculate parallax position of element.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $figure The background element.
	 * @param {object} $img    Image to position within element.
	 */
	frontStreet.background.parallaxCalc = function( $figure, $img ) {

		var imgHeight		= $img.height(),
			containerHeight	= $figure.height() > 0 ? $figure.height() : 500,
			parallaxDist	= imgHeight - containerHeight,
			bottom			= $figure.offset().top + containerHeight,
			top				= $figure.offset().top,
			scrollTop		= $window.scrollTop(),
			windowHeight	= window.innerHeight, // Using `window`, NOT `$window`; we need a fresh calculation here.
			windowBottom	= scrollTop + windowHeight,
			percentScrolled	= ( windowBottom - top ) / ( containerHeight + windowHeight );

		if ( ( bottom > scrollTop ) && ( top < ( scrollTop + windowHeight ) ) ) {
			return Math.round( ( parallaxDist * percentScrolled ) );
		}

		return null;

	};

	/**
	 * Wait until .on('load') to bind our background objects
	 * because we need images to be fully loaded before making
	 * calculations with them.
	 */
	$window.on( 'load', function() {

		/**
		 * Self-invokes the background slider of the
		 * `background` component.
		 *
		 * @since 1.0.0
		 */
		$( '.fs-bg-slider' ).frontStreet( 'background', { type: 'slider' } );

		/**
		 * Self-invokes the parallax effect of the
		 * `background` component.
		 *
		 * @since 1.0.0
		 */
		$( '.fs-bg-parallax' ).frontStreet( 'background', { type: 'parallax' } );

	} );

}( jQuery, window.frontStreet );

/**
 * Adds "jump menu" functionality; if a URL is selected
 * from a <select> menu, the user will be redirected
 * to that webpage.
 *
 * By default all select menus with class `fs-jump-menu`
 * and `tb-jump-menu` (Theme Blvd WordPress backwards
 * compatibility) are automatically binded.
 *
 * @summary  Jump Menus
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   jump-menu.js
 * @requires init.js
 */
+function( $, frontStreet ) {

	'use strict';

	if ( 'undefined' === typeof frontStreet ) {
		return;
	}

	if ( 'undefined' === typeof frontStreet.doComponent ) {
		return;
	}

	if ( ! frontStreet.doComponent( 'jump-menu' ) ) {
		return;
	}

	var $document = frontStreet.dom.document;

	frontStreet.jumpMenu = {};

	/**
	 * Initialize the `jump-menu` component on a DOM element,
	 * when binded through jQuery.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} element this
	 * @param {object} options Component options (currently not used).
	 */
	frontStreet.jumpMenu.init = function( element, options ) {

		var $menu = $( element );

		$menu.on( 'change', function() {

			var href = $menu.val();

			if ( href ) {
				window.location.href = href;
			}

		} );

	};

	$document.ready( function( $ ) {

		/**
		 * Self-invokes the `jump-menu` component.
		 *
		 * @since 1.0.0
		 */
		$( 'select.fs-jump-menu, select.tb-jump-menu' ).frontStreet( 'jump-menu' );

	} );

}( jQuery, window.frontStreet );

/**
 * This file includes the functionality for dropdown
 * menus.
 *
 * By default all HTML elements with class `fs-menu`
 * are automatically binded.
 *
 * Also, menu items with class 'no-click' are setup to
 * prevent the default click behavior.
 *
 * @summary  Dropdown Menus
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   menu.js
 * @requires init.js
 */
+function( $, frontStreet ) {

	'use strict';

	if ( 'undefined' === typeof frontStreet ) {
		return;
	}

	if ( 'undefined' === typeof frontStreet.doComponent ) {
		return;
	}

	if ( ! frontStreet.doComponent( 'menu' ) ) {
		return;
	}

	var $body     = frontStreet.dom.body,
		$document = frontStreet.dom.document;

	frontStreet.menu = {};

	/**
	 * Default menu options.
	 *
	 * @since 1.0.0
	 *
	 * @var {object}
	 */
	frontStreet.menu.defaults = {
		delay: 500,
		dropDownSelector: 'ul:not(.mega-sub-menu), .fs-mega'
	};

	/**
	 * Assign a unique ID to each menu.
	 *
	 * @since 1.0.0
	 *
	 * @var {number}
	 */
	frontStreet.menu.count = 0;

	/**
	 * Help with delayed effects between handlers.
	 *
	 * @since 1.0.0
	 *
	 * @var {Array}
	 */
	frontStreet.menu.timer = [];

	/**
	 * Initialize the `menu` component on a DOM element,
	 * when binded through jQuery.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} element this
	 * @param {object} options Component options.
	 */
	frontStreet.menu.init = function( element, options ) {

		var $menu    = $( element ),
			settings = $.extend( {
				menuID: frontStreet.menu.count++
			}, frontStreet.menu.defaults, options );

		if ( $menu.data( 'delay' ) || 0 ===  $menu.data( 'delay' ) ) {
			settings.delay = $menu.data( 'delay' );
		}

		frontStreet.menu.timer[ settings.menuID ] = [];

		$menu.removeClass( 'no-js' );

		/*
		 * Triggers dropdown show and hide, upon mouseenter
		 * and mouseleave.
		 */
		$menu
			.find('li')
			.has( settings.dropDownSelector )
			.addClass( 'menu-item-has-children' )
			.on('mouseenter', function() {
				var $trigger = $(this);
				frontStreet.menu.flyout( $trigger, settings ); // Determine flyout direction.
				frontStreet.menu.show( $trigger, settings );
			} )
			.on('mouseleave', function() {
				frontStreet.menu.hide( $( this ), settings );
			} );

		// Adds CSS classes to each level of the menu, 1-3.
		$menu
			.children( 'li' )
			.each( function() {
				$(this).addClass( 'level-1' ).children( 'ul' ).children( 'li' ).each( function() {
					$(this).addClass( 'level-2' ).children( 'ul' ).children( 'li' ).each( function() {
						$(this).addClass( 'level-3' );
					} );
				} );
			} );

		// Add mobile touch support.
		if ( frontStreet.isMobile() ) {

			// Tap anywhere on iOS to unfocus a submenu.
			$( 'html' ).css( 'cursor', 'pointer' ).on( 'click', $.noop );

		}

	};

	/**
	 * Determines the direction the dropdown menu should
	 * flyout towards.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $trigger The parent menu item, for which the dropdown belongs to.
	 * @param {object} settings Current settings.
	 */
	frontStreet.menu.flyout = function( $trigger, settings ) {

		if ( ! $trigger.hasClass( 'level-1' ) ) {
			return;
		}

		var $flyout  = $trigger.children( settings.dropDownSelector ),
			location = $trigger.offset(),
			space    = 200;

		if ( $body.hasClass( 'rtl' ) ) {
			location = location[ 'right' ];
		} else {
			location = location[ 'left' ];
		}

		if ( $flyout.find( '.level-3' ).length > 0 ) {
			space += space; // Space doubles for level 3.
		}

		if ( ( $( window ).width() - location ) <= space ) {
			$flyout.addClass( 'reverse' );
		} else {
			$flyout.removeClass( 'reverse' );
		}

	};

	/**
	 * Shows a dropdown menu.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $trigger The parent menu item, for which the dropdown belongs to.
	 * @param {object} settings Current settings.
	 */
	frontStreet.menu.show = function( $trigger, settings ) {

		var level     = frontStreet.menu.getLevel( $trigger ),
			$siblings = $trigger.siblings().find( settings.dropDownSelector ),
			$target   = $trigger.children( settings.dropDownSelector );

		clearTimeout( frontStreet.menu.timer[ settings.menuID ][ level ] );

		$siblings.removeClass( 'in' );

		$target.addClass( 'show fade' );

		frontStreet.menu.timer[ settings.menuID ][ level ] = setTimeout(function() {

			$siblings.removeClass( 'show fade' );

			$target.addClass( 'in' );

		}, 200 );

	};

	/**
	 * Hides a dropdown menu.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $trigger The parent menu item, for which the dropdown belongs to.
	 * @param {object} settings Current settings.
	 */
	frontStreet.menu.hide = function( $trigger, settings ) {

		var level   = frontStreet.menu.getLevel( $trigger ),
			$flyout = $trigger.children( settings.dropDownSelector );

		clearTimeout( frontStreet.menu.timer[ settings.menuID ][ level ] );

		frontStreet.menu.timer[ settings.menuID ][ level ] = setTimeout(function() {

			$flyout.removeClass( 'in' );

			setTimeout( function() {

				$flyout.removeClass( 'show fade' );

			}, 200 );

		}, settings.delay );

	};

	/**
	 * Determines the current level of the dropdown parent
	 * item being triggered.
	 *
	 * @since 1.0.0
	 *
	 * @param  {object} $trigger The parent menu item, for which the dropdown belongs to.
	 * @return {string} level    Current menu level, `level-1`, `level-2` or `level-3`.
	 */
	frontStreet.menu.getLevel = function( $trigger ) {

		var level = 'level-1';

		if ( $trigger.hasClass('level-2') ) {
			level = 'level-2';
		} else if ( $trigger.hasClass('level-3') ) {
			level = 'level-3';
		}

		return level;

	};

	$document.ready( function( $ ) {

		/**
		 * Self-invokes the `menu` component.
		 *
		 * @since 1.0.0
		 */
		$( '.fs-menu' ).frontStreet( 'menu' );

		/**
		 * Adds no-click functionaltiy to any link by
		 * adding class "no-click".
		 *
		 * @since 1.0.0
		 *
		 * @param {Event} event Event interface.
		 */
		$( 'a.no-click' ).on( 'click', function( event ) {

			event.preventDefault();

		} );

		/**
		 * Adds no-click functionaltiy to any link directly
		 * within an li with class "no-click".
		 *
		 * Note: This is mainly here to accmodate interfaces
		 * like WordPress which allow building menus, but only
		 * allow adding CSS classes to the menu list items.
		 *
		 * @since 1.0.0
		 *
		 * @param {Event} event Event interface.
		 */
		$( 'li.no-click' ).find( 'a:first' ).on( 'click', function( event ) {

			event.preventDefault();

		} );

	} );

}( jQuery, window.frontStreet );

/**
 * Adds submenu navigation to mobile menus.
 *
 * @summary  Mobile Menus
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   mobile-menu.js
 * @requires init.js
 */
+function( $, frontStreet ) {

	'use strict';

	if ( 'undefined' === typeof frontStreet ) {
		return;
	}

	if ( 'undefined' === typeof frontStreet.doComponent ) {
		return;
	}

	if ( ! frontStreet.doComponent( 'mobile-menu' ) ) {
		return;
	}

	frontStreet.mobileMenu = {};

	/**
	 * Initialize the `mobile-menu` component on a DOM element,
	 * when binded through jQuery.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} element this
	 * @param {object} options Component options (currently not used).
	 */
	frontStreet.mobileMenu.init = function( element, options ) {

		var $menu     = $( element ),
			$triggers = $menu.find( 'li' ).has( 'ul' );

		$triggers
			.addClass( 'menu-item-has-children' )
			.children( '.menu-btn' ).on( 'click.fs.mobile-menu', function() {
				frontStreet.mobileMenu.show( $(this) );
				return false;
			} );

		$triggers
			.find( 'ul' )
			.prepend( '<li><a href="#" class="menu-btn back"></a></li>' )
			.find( '.back' ).on('click.fs.mobile-menu-back', function() {
				frontStreet.mobileMenu.hide( $( this ) );
				return false;
			} );

		$menu.height( $menu.prop( 'scrollHeight' ) );

	};

	/**
	 * Show a submenu.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $trigger Parent menu item triggering submenu.
	 */
	frontStreet.mobileMenu.show = function( $trigger ) {

		$trigger.closest( 'li' ).children( 'ul' ).addClass( 'on' );

	};

	/**
	 * Hide a submenu.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $trigger Parent menu item triggering submenu.
	 */
	frontStreet.mobileMenu.hide = function( $trigger ) {

		$trigger.closest( 'ul' ).removeClass( 'on' );

	};

}( jQuery, window.frontStreet );

/**
 * This file binds preset instances of Magnific Popup.
 *
 * Magnific Popup is an open source lightbox script
 * by Dmitry Semenov.
 *
 * @link http://dimsemenov.com/plugins/magnific-popup/
 *
 * @summary  Modals
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   modal.js
 * @requires magnific-popup.js, init.js
 */
+function( $, frontStreet ) {

	'use strict';

	if ( 'undefined' === typeof frontStreet ) {
		return;
	}

	if ( 'undefined' === typeof frontStreet.doComponent ) {
		return;
	}

	if ( ! frontStreet.doComponent( 'modal' ) ) {
		return;
	}

	if ( ! $.fn.magnificPopup ) {
		return;
	}

	var $document = frontStreet.dom.document;

	$document.ready( function( $ ) {

		var mainClass    = 'fs-modal',
			removalDelay = 0;

		var config = {
			'animation'     : 'fade',
			'mobile'        : 0,
			'mobileIframe'  : 768,
			'mobileGallery' : 0,
			'error'         : 'The modal media could not be loaded.',
			'close'         : 'Close',
			'loading'       : 'Loading...',
			'counter'       : '%curr% of %total%',
			'next'          : 'Next',
			'previous'      : 'Previous',
			'closeMarkup'   : '<button type="button" class="mfp-close fs-close close-light close-md">%title%</button>'
		};

		if ( 'undefined' !== typeof fsModal ) {
			config = $.extend( {}, config, fsModal );
		}

		if ( config.animation && 'none' !== config.animation ) {
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
		} );

		$( '.fs-modal-close' ).on( 'click', function() {

			$.magnificPopup.close();

			return false;

		} );

		$( '.fs-content-modal-link' ).magnificPopup( {
			type: 'inline',
			mainClass: mainClass,
			alignTop: true,
			showCloseBtn: false,
			removalDelay: removalDelay,
			callbacks: {
				open: function() {
					$( '.mfp-wrap .fs-modal' ).attr( 'aria-hidden', false );
				},
				beforeClose: function() {
					$( '.mfp-wrap .fs-modal' ).attr( 'aria-hidden', true );
				}
			}
		} );

		$( '.fs-search-modal-link' ).magnificPopup( {
			type: 'inline',
			mainClass: mainClass + ' mfp-search',
			closeBtnInside: false,
			closeMarkup: config.closeMarkup,
			removalDelay: removalDelay,
			callbacks: {
				open: function() {

					$( '.mfp-wrap .fs-search-modal' ).attr( 'aria-hidden', false);

					$.magnificPopup.instance.wrap[0].addEventListener( 'focus', function (e) {

						$( '.mfp-search .fs-search-modal input[type="search"]' ).focus();

					} );

				},
				beforeClose: function() {
					$( '.mfp-wrap .fs-search-modal' ).attr( 'aria-hidden', true);
				}
			}
		} );

		$( '.fs-modal-gallery, .themeblvd-gallery' ).each( function() {

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

			$gallery.find(selector).each( function() {

				var $link = $(this),
					linkClass = '';

				if ( $link.hasClass( 'fs-content-modal-link' ) ) {
					linkClass = 'mfp-inline';
				} else if ( $link.hasClass( 'fs-image-modal-link' ) ) {
					linkClass = 'mfp-image';
				} else if ( $link.hasClass( 'fs-iframe-modal-link' ) ) {
					linkClass = 'mfp-iframe';
				}

				linkClass = 'fs-gallery-modal-link ' + linkClass;

				$link
					.removeClass( classes.join( ' ' ) )
					.addClass(linkClass);

			} );

			$gallery.magnificPopup( {
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
						values.title = item.el.attr( 'title' );
					}
  				}
			} );

		} );

		$( '.fs-image-modal-link' ).magnificPopup( {
			type: 'image',
			mainClass: mainClass,
			closeMarkup: config.closeMarkup,
			removalDelay: removalDelay,
			disableOn: config.mobile,
			image: {
				cursor: null
			}
		} );

		$( '.fs-iframe-modal-link' ).magnificPopup( {
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
					values.title = item.el.attr( 'title' );
				}
			}
		} );

	} );

}( jQuery, window.frontStreet );

/**
 * This file binds preset instances of OwlCarousel,
 * allowing for those to be configured through the
 * HTML markup.
 *
 * OwlCarousel is an open source carousel/slider
 * script by David Deutsch.
 *
 * @link https://owlcarousel2.github.io/OwlCarousel2/
 *
 * @summary  Sliders
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   modal.js
 * @requires owl-carousel.js, init.js
 */
+function( $, frontStreet ) {

	'use strict';

	if ( 'undefined' === typeof frontStreet ) {
		return;
	}

	if ( 'undefined' === typeof frontStreet.doComponent ) {
		return;
	}

	if ( ! frontStreet.doComponent( 'slider' ) ) {
		return;
	}

	if ( ! $.fn.owlCarousel ) {
		return;
	}

	var $window = frontStreet.dom.window,
		$body   = frontStreet.dom.body;

	$window.on( 'load', function() {

		$( '.fs-simple-slider, .fs-gallery-slider, .fs-block-slider' ).each(function() {

			var $wrap 			= $(this),
				$slider 		= $wrap.find( '.fs-slider' ),
				items			= parseInt( $wrap.data( 'items' ) ) ? parseInt($wrap.data( 'items' ) ) : 4,
				speed 			= parseInt( $wrap.data( 'speed' ) ) ? parseInt($wrap.data( 'speed' ) ) : 500,
				autoplayTimeout = parseInt( $wrap.data( 'autoplay' ) ) ? parseInt($wrap.data( 'autoplay' ) ) : 0,
				margin			= parseInt( $wrap.data( 'margin' ) ) ? parseInt($wrap.data( 'margin' ) ) : 1,
				autoplay		= autoplayTimeout ? true : false,
				pause			= ( 'true' == $wrap.data( 'pause' ) || $wrap.data( 'pause' ) == '1' ) ? true : false,
				loop			= ( 'false' == $wrap.data( 'loop' ) || $wrap.data( 'loop' ) == '0' ) ? false : true,
				animate			= ( 'true' == $wrap.data( 'fade' ) || $wrap.data( 'fade' ) == '1' ) ? 'fadeOut' : false,
				autoWidth		= $wrap.hasClass( 'fs-gallery-slider' ) ? true : false,
				center			= $wrap.hasClass( 'fs-gallery-slider' ) ? true : false,
				$nav 			= $wrap.find( '.fs-slider-nav, .fs-slider-thumbs' ),
				$arrows 		= $wrap.find( '.fs-slider-arrows' ),
				navCounter		= 0,
				timeout			= null;

			// Toggle "hovered" class on/off for any CSS hover effects.
			$wrap
				.on( 'mouseenter', function() {
					$( this ).addClass( 'hovered' );
				})
				.on( 'mouseleave', function() {
					$( this ).removeClass( 'hovered' );
				} );

			// Add slide-to data to each nav item.
			$nav.find( 'li' ).each(function() {
				$(this).data( 'slide-to', navCounter);
				navCounter++;
			} );

			if ( $wrap.hasClass( 'fs-simple-slider' ) ) {
				margin = 0;
				items = 1;
			} else if ( $wrap.hasClass( 'fs-gallery-slider' ) ) {
				items = 1;
			}

			$slider.owlCarousel( {
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
				rtl: $body.hasClass( 'rtl' ) ? true : false,
				onInitialized: function(e) {

					$nav.find( 'li:first-child' ).addClass( 'active' );
					$wrap.removeClass( 'loading' ).addClass( 'loaded' );

					if ( ! loop ) {
						$arrows.find( 'li' ).addClass( 'fade' );
					}

					$wrap.find( '.fs-loader' ).fadeOut();

				},
				onChanged: function(e) {

					/*
					 * Make sure next and prev buttons don't show
					 * when at start and end of cycle, if there's
					 * no looping.
					 */
					if ( ! loop ) {

						var index = $wrap.hasClass( 'fs-block-slider' ) ? e.item.index : e.page.index;

						if ( index == 0 || index == -1 ) {
							$arrows.find( 'li.prev' ).removeClass( 'in' );
							$arrows.find( 'li.next' ).addClass( 'in' );
						} else if ( e.page.index + 1 == e.page.count ) {
							$arrows.find( 'li.next' ).removeClass( 'in' );
							$arrows.find( 'li.prev' ).addClass( 'in' );
						} else {
							$arrows.find( 'li' ).addClass( 'in' );
						}

					}

					// Standard navigation dots.
					$nav.find( 'li' ).removeClass( 'active' );
					$nav.find( 'li:nth-child( ' + (e.page.index + 1) + ' )' ).addClass( 'active' );

				}
			} );

			// Bind standard slider nav and thumb nav.
			$nav.find( 'li' ).on( 'click', function() {

				var $current = $(this);

				$slider
					// .trigger( 'stop.owl.autoplay' ) // Doesn't work right as of v2.2.1 OwlCarousel.
					.trigger( 'to.owl.carousel', $current.data( 'slide-to' ) );

				$current.closest( 'ul, ol' ).find( 'li' ).removeClass( 'active' );
				$current.addClass( 'active' );

			} );

			// Bind slider arrow next/prev nav.
			$arrows.find( 'li' ).on( 'click', function() {

				// $slider.trigger( 'stop.owl.autoplay' ); // Doesn't work right as of v2.2.1.

				if ( $(this).hasClass( 'next' ) ) {
					$slider.trigger( 'next.owl.carousel' );
				} else {
					$slider.trigger( 'prev.owl.carousel' );
				}

			} );

		} ); // End .each()

	} ); // End .on( 'load' )

}( jQuery, window.frontStreet );

/**
 * Adds tabs component functionality, which allows
 * toggling between tab content panes.
 *
 * @summary  Tabs
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   tabs.js
 * @requires init.js
 */
+function( $, frontStreet ) {

	'use strict';

	if ( 'undefined' === typeof frontStreet ) {
		return;
	}

	if ( 'undefined' === typeof frontStreet.doComponent ) {
		return;
	}

	if ( ! frontStreet.doComponent( 'tabs' ) ) {
		return;
	}

	var $window   = frontStreet.dom.window,
		$document = frontStreet.dom.document;

	frontStreet.tabs = {};

	/**
	 * Default tabs options.
	 *
	 * @since 1.0.0
	 *
	 * @var {object}
	 */
	frontStreet.tabs.defaults = {
		navSelector: '.menu-bar, .submenu-bar, .submenu-tabs, .submenu-pills',
		height: false,
		deepLink: false
	};

	/**
	 * Initialize the `tabs` component on a DOM element,
	 * when binded through jQuery.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} element this
	 * @param {object} options Component options (currently not used).
	 */
	frontStreet.tabs.init = function( element, options ) {

		var $tabs    = $( element ),
			settings = $.extend( {}, frontStreet.tabs.defaults, options );

		/*
		 * The following classes being added to the tabs element
		 * can override the height and deepLink options.
		 */
		if ( $tabs.hasClass( 'tabs-fixed-height' ) ) {
			settings.height = true;
		}

		if ( $tabs.hasClass( 'tabs-deep-link' ) ) {
			settings.deepLink = true;
		}

		// Setup accessiblity.
		$tabs.find( '.tab-pane' ).each( function() {

			var $pane = $( this );

			if ( $pane.hasClass( 'active' ) ) {
				$pane.attr( 'aria-expanded', true );
			} else {
				$pane.attr( 'aria-expanded', false );
			}

		} );

		// Toggle tab content.
		$tabs
			.find( settings.navSelector )
			.find( 'a' )
			.on( 'click', function( event ) {
				event.preventDefault();
				frontStreet.tabs.show( $tabs, $(this), settings );
			} );

		// Setup fixed height and/or deep-linking.
		if ( settings.height || settings.deepLink ) {

			$window.on( 'load', function() {

				// Match height of all tabs to tallest.
				if ( settings.height ) {
					frontStreet.tabs.matchHeight( $tabs );
				}

				// Watch for deep-linking.
				if ( settings.deepLink ) {
					frontStreet.tabs.deepLink( $tabs, settings );
				}

			} );

		}

	};

	/**
	 * Show a tab.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $tabs    The binded jQuery DOM element.
	 * @param {object} $trigger Link (tab) which is triggering new content.
	 * @param {object} settings Component settings.
	 */
	frontStreet.tabs.show = function( $tabs, $trigger, settings ) {

		var $nav   = $trigger.closest( settings.navSelector ),
			target = $trigger.attr( 'href' ).split( '#' )[1];

		$nav.find( 'li' ).removeClass( 'active' );

		$trigger.closest( 'li' ).addClass( 'active' );

		$tabs
			.find( '.tab-pane' )
			.attr( 'aria-expanded', false )
			.removeClass( 'in' )
			.hide()
			.removeClass( 'fade' );

		$tabs
			.find( '#' + target )
			.attr( 'aria-expanded', true )
			.addClass( 'fade' )
			.show( 0, function() {
				$( this ).addClass( 'in' );
			} );

	};

	/**
	 * Set all tab content panes to have equal height, to
	 * the tallest one.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $tabs The binded jQuery DOM element.
	 */
	frontStreet.tabs.matchHeight = function( $tabs ) {

		var tallest = 0;

		$tabs.find( '.tab-pane' ).each(function() {

			var $pane         = $( this ),
				currentHeight = $pane.show().outerHeight();

			if ( ! $pane.hasClass( 'active' ) ) {
				$pane.hide();
			}

			if ( currentHeight > tallest ) {
				tallest = currentHeight;
			}

		} );

		$tabs.find( '.tab-pane' ).height( tallest );

	};

	/**
	 * Watch for tab deep-linking.
	 *
	 * Tab deep-linking is when the user passes a tab ID
	 * through the URL of the webpage to trigger opening
	 * a specific tab pane.
	 *
	 * To deep link to a tab, you need to prefix
	 * the ID of the tab with "tab_" like this:
	 *
	 * `http://your-site.com/page-with-tabs/#tab_id_of_tab`
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $tabs    The binded jQuery DOM element.
	 * @param {object} settings Component settings.
	 */
	frontStreet.tabs.deepLink = function( $tabs, settings ) {

		var hash = document.location.hash;

		if ( hash && -1 != hash.indexOf( 'tab_' ) ) {

			hash = hash.replace( 'tab_', '' );

			frontStreet.tabs.show( $tabs, $tabs.find( 'a[href="' + hash + '"] '), settings );

			$( 'html, body' ).animate({
				scrollTop: $tabs.offset().top - 20
			}, 800 );

		}

	};

	$document.ready( function( $ ) {

		/**
		 * Self-invokes the `tabs` component.
		 *
		 * @since 1.0.0
		 */
		$( '.fs-tabs' ).frontStreet( 'tabs' );

	} );

}( jQuery, window.frontStreet );

/**
 * Adds toggles component functionality, which allows
 * toggle display of content.
 *
 * @summary  Toggle
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   toggles.js
 * @requires init.js
 */
+function( $, frontStreet ) {

	'use strict';

	if ( 'undefined' === typeof frontStreet ) {
		return;
	}

	if ( 'undefined' === typeof frontStreet.doComponent ) {
		return;
	}

	if ( ! frontStreet.doComponent( 'toggle' ) ) {
		return;
	}

	var $document = frontStreet.dom.document;

	frontStreet.toggle = {};

	/**
	 * Default toggle options.
	 *
	 * @since 1.0.0
	 *
	 * @var {object}
	 */
	frontStreet.toggle.defaults = {
		speed: 200,
		accordion: false
	};

	/**
	 * Initialize the `tabs` component on a DOM element,
	 * when binded through jQuery.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} element this
	 * @param {object} options Component options.
	 */
	frontStreet.toggle.init = function( element, options ) {

		var $toggle  = $( element ),
			settings = $.extend( {}, frontStreet.toggle.defaults, options ),
			$group   = null;

		if ( $toggle.parents( '.toggle-group').length > 0 ) {
			$group = $toggle.closest( '.toggle-group' );
		}

		if ( $group && $group.hasClass( 'toggle-accordion' ) ) {
			settings.accordion = true;
		}

		// Setup accessiblity.
		$toggle
			.find( '.toggle-content' )
			.attr( 'aria-expanded', false );

		// Open initially if has class `toggle-expanded`.
		if ( $toggle.hasClass( 'toggle-expanded' ) ) {
			frontStreet.toggle.open( $toggle, settings.speed );
		}

		// Setup toggle click.
		$toggle
			.find( '.toggle-title' )
			.on( 'click', function( event ) {

				event.preventDefault();

				$( this ).blur();

				if ( $toggle.hasClass( 'toggle-expanded' ) ) {

					// Toggle is open; so close it.
					frontStreet.toggle.close( $toggle, settings.speed );

				} else {

					if ( $group && settings.accordion ) {
						$group.find( '.fs-toggle' ).each( function() {
							frontStreet.toggle.close( $( this ), settings.speed );
						} );
					}

					// Toggle is closed; so open it.
					frontStreet.toggle.open( $toggle, settings.speed );

				}

			} );

	};

	/**
	 * Open a toggle.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $toggle The binded jQuery DOM element.
	 * @param {number} speed   Animation speed in milliseconds.
	 */
	frontStreet.toggle.open = function( $toggle, speed ) {

		$toggle
			.addClass( 'toggle-expanded' )
			.find( '.toggle-content' )
			.stop( true, true )
			.attr( 'aria-expanded', true )
			.slideDown( speed );

	};

	/**
	 * Close a toggle.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} $toggle The binded jQuery DOM element.
	 * @param {number} speed   Animation speed in milliseconds.
	 */
	frontStreet.toggle.close = function( $toggle, speed ) {

		$toggle
			.removeClass( 'toggle-expanded' )
			.find( '.toggle-content' )
			.stop( true, true )
			.attr( 'aria-expanded', false )
			.slideUp( speed );

	};

	$document.ready( function( $ ) {

		/**
		 * Self-invokes the `toggle` component.
		 *
		 * @since 1.0.0
		 */
		$( '.fs-toggle' ).frontStreet( 'toggle' );

	} );

}( jQuery, window.frontStreet );

/**
 * Adds tooltip component functionality.
 *
 * Inspired by Bootstrap 3's tooltips.js, which was inspired
 * by the original jQuery.tipsy by Jason Frame.
 *
 * @summary  Tooltip
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   toggles.js
 * @requires init.js
 */
+function( $, frontStreet ) {

	'use strict';

	if ( 'undefined' === typeof frontStreet ) {
		return;
	}

	if ( 'undefined' === typeof frontStreet.doComponent ) {
		return;
	}

	if ( ! frontStreet.doComponent( 'tooltip' ) ) {
		return;
	}

	var $document = frontStreet.dom.document;

	frontStreet.tooltip = {};

	/**
	 * Default tooltip options.
	 *
	 * @since 1.0.0
	 *
	 * @var {object}
	 */
	frontStreet.tooltip.defaults = {
		placement: 'top',
		template: '<div class="fs-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		title: '',
		container: false,
		viewport: {
			selector: 'body',
			padding: 0
		}
	};

	/**
	 * Initialize the `tooltip` component.
	 *
	 * @since 1.0.0
	 *
	 * @param {object} element this
	 * @param {object} options Component options.
	 */
	frontStreet.tooltip.init = function( element, options ) {

		var data = new Tooltip( element, options );

	};

	$document.ready( function( $ ) {

		/**
		 * Self-invokes the `tooltip` component.
		 *
		 * @since 1.0.0
		 */
		$( '.fs-tooltip-trigger' ).frontStreet( 'tooltip' );

	} );

	/**
	 * Tooltip class definition.
	 *
	 * @since 1.0.0
	 */
	var Tooltip = function( element, options ) {

		this.options    = null;
		this.enabled    = null;
		this.timeout    = null;
		this.hoverState = null;
		this.$element   = null;
		this.inState    = null;

		this.init( element, options );

	};

	Tooltip.prototype.init = function( element, options ) {

		this.enabled   = true;
		this.$element  = $(element);
		this.options   = this.getOptions(options);
		this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport));
		this.inState   = { click: false, hover: false, focus: false };

		this.$element.on( 'mouseenter.tooltip', false, $.proxy( this.enter, this ) );
		this.$element.on( 'mouseleave.tooltip', false, $.proxy( this.leave, this ) );

		this.$element.on( 'focusin.tooltip', false, $.proxy( this.enter, this ) );
		this.$element.on( 'focusout.tooltip', false, $.proxy( this.leave, this ) );

	};

	Tooltip.prototype.getDefaults = function() {
		return frontStreet.tooltip.defaults;
	};

	Tooltip.prototype.getOptions = function( options ) {
		options = $.extend( {}, this.getDefaults(), this.$element.data(), options );
		return options;
	};

	Tooltip.prototype.getDelegateOptions = function() {

		var options	 = {},
			defaults = this.getDefaults();

		this._options && $.each(this._options, function( key, value ) {
			if ( value != defaults[ key ] ) {
				options[ key ] = value;
			}
		} );

		return options;

	};

	Tooltip.prototype.enter = function( obj ) {

		var self = obj instanceof this.constructor ? obj : $( obj.currentTarget ).data( 'fs.tooltip' );

		if ( ! self ) {
			self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
			$( obj.currentTarget ).data( 'fs.tooltip', self );
		}

		if ( obj instanceof $.Event ) {
			self.inState[ obj.type == 'focusin' ? 'focus' : 'hover' ] = true;
		}

		if ( self.tip().hasClass('in') || self.hoverState == 'in' ) {
			self.hoverState = 'in';
			return;
		}

		self.hoverState = 'in';

		return self.show();

	};

	Tooltip.prototype.isInStateTrue = function() {

		for( var key in this.inState ) {
			if ( this.inState[ key ] ) {
				return true;
			}
		}

		return false;

	};

	Tooltip.prototype.leave = function( obj ) {

		var self = obj instanceof this.constructor ? obj : $( obj.currentTarget ).data( 'fs.tooltip' );

		if ( ! self ) {
			self = new this.constructor( obj.currentTarget, this.getDelegateOptions() );
			$( obj.currentTarget ).data( 'fs.tooltip', self );
		}

		if (obj instanceof $.Event) {
			self.inState[ obj.type == 'focusout' ? 'focus' : 'hover' ] = false;
		}

		if ( self.isInStateTrue() ) {
			return;
		}

		self.hoverState = 'out';

		return self.hide();

	};

	Tooltip.prototype.show = function() {

		var e = $.Event( 'show.fs.tooltip' );

		if ( this.hasContent() && this.enabled ) {

			this.$element.trigger(e);

			var inDom = $.contains( this.$element[0].ownerDocument.documentElement, this.$element[0] );

			if (e.isDefaultPrevented() || !inDom) {
				return;
			}

			var that  = this,
				$tip  = this.tip(),
				tipId = this.getUID( 'tooltip' );

			this.setContent();
			$tip.attr('id', tipId);
			this.$element.attr( 'aria-describedby', tipId );

			$tip.addClass( 'fade' );

			var placement = this.options.placement,
				autoToken = /\s?auto?\s?/i,
				autoPlace = autoToken.test( placement );

			if ( autoPlace ) {
				placement = placement.replace( autoToken, '' ) || 'top';
			}

			$tip
				.detach()
				.css( { top: 0, left: 0, display: 'block' } )
				.addClass( placement )
				.data( 'fs.tooltip', this );

			if( this.options.container ) {
				$tip.appendTo( this.options.container );
			} else {
				$tip.insertAfter( this.$element );
			}

			this.$element.trigger( 'inserted.fs.tooltip' );

			var pos          = this.getPosition(),
				actualWidth	 = $tip[0].offsetWidth,
				actualHeight = $tip[0].offsetHeight;

			if ( autoPlace ) {

				var orgPlacement = placement,
					viewportDim  = this.getPosition(this.$viewport);

				if ( 'bottom' == placement && pos.bottom + actualHeight > viewportDim.bottom ) {
					placement = 'top';
				} else if ( 'top' == placement && pos.top - actualHeight < viewportDim.top ) {
					placement = 'bottom';
				}

				$tip.removeClass( orgPlacement ).addClass( placement );

			}

			var calculatedOffset = this.getCalculatedOffset( placement, pos, actualWidth, actualHeight );

			this.applyPlacement( calculatedOffset, placement );

			var complete = function() {

				var prevHoverState = that.hoverState;

				that.$element.trigger( 'shown.fs.tooltip' );
				that.hoverState = null;

				if ('out' == prevHoverState ) {
					that.leave( that );
				}
			}
		}
	};

	Tooltip.prototype.applyPlacement = function( offset, placement ) {

		var $tip       = this.tip(),
			width      = $tip[0].offsetWidth,
			height     = $tip[0].offsetHeight,
			marginTop  = parseInt( $tip.css( 'margin-top' ), 10 ),
			marginLeft = parseInt( $tip.css( 'margin-left' ), 10 );

		offset.top	+= marginTop;
		offset.left += marginLeft;

		/*
		 * $.fn.offset doesn't round pixel values; so we use
		 * setOffset directly with our own function B-0.
		 */
		$.offset.setOffset($tip[0], $.extend({
			using: function( props ) {
				$tip.css({
					top: Math.round( props.top ),
					left: Math.round( props.left )
				} );
			}
		}, offset ), 0 );

		$tip.addClass( 'in' );

		/*
		 * Check to see if placing tip in new offset caused the
		 * tip to resize itself.
		 */
		var actualWidth	 = $tip[0].offsetWidth,
			actualHeight = $tip[0].offsetHeight;

		if ( 'top' == placement && actualHeight != height ) {
			offset.top = offset.top + height - actualHeight;
		}

	};

	Tooltip.prototype.setContent = function() {

		var $tip = this.tip(),
			title = this.getTitle();

		$tip.find( '.tooltip-inner' )[ 'text' ]( title );

		$tip.removeClass( 'fade in top bottom' );

	};

	Tooltip.prototype.hide = function( callback ) {

		var that  = this,
			$tip  = $( this.$tip ),
			event = $.Event( 'hide.fs.tooltip' );

		function complete() {

			if ( 'in' != that.hoverState ) {
				$tip.detach();
			}

			if ( that.$element ) {
				that.$element
					.removeAttr( 'aria-describedby')
					.trigger( 'hidden.fs.tooltip');
			}

			if ( callback ) {
				callback();
			}
		}

		this.$element.trigger( event );

		if ( event.isDefaultPrevented() ) {
			return;
		}

		$tip.removeClass( 'in' );

		this.hoverState = null;

		return this;

	};

	Tooltip.prototype.hasContent = function() {
		return this.getTitle();
	};

	Tooltip.prototype.getPosition = function( $element ) {

		if ( ! $element ) {
			$element = this.$element;
		}

		var el     = $element[0],
			isBody = el.tagName == 'BODY',
			elRect = el.getBoundingClientRect();

		if ( elRect.width == null ) {
			elRect = $.extend({}, elRect, {
				width: elRect.right - elRect.left,
				height: elRect.bottom - elRect.top
			} );
		}

		var isSvg = window.SVGElement && el instanceof window.SVGElement,
			elOffset = isBody ? { top: 0, left: 0 } : ( isSvg ? null : $element.offset() ),
			scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() },
			outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

		return $.extend( {}, elRect, scroll, outerDims, elOffset );

	};

	Tooltip.prototype.getCalculatedOffset = function( placement, pos, actualWidth, actualHeight ) {

		var offset = {};

		if ( 'bottom' == placement ) {

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

	};

	Tooltip.prototype.getTitle = function() {

		var title = this.options.title;

		if ( ! title ) {
			var $el = this.$element;
			title = $el.attr( 'title' );
		}

		return title;

	};

	Tooltip.prototype.getUID = function( prefix ) {

		do {
			prefix += ~~(Math.random() * 1000000);
		} while ( document.getElementById( prefix ) );

		return prefix;

	};

	Tooltip.prototype.tip = function() {

		if ( ! this.$tip ) {

			this.$tip = $( this.options.template );

			if (this.$tip.length != 1) {
				throw new Error('tooltip `template` option must consist of exactly 1 top-level element!');
			}
		}

		return this.$tip;

	};

	Tooltip.prototype.arrow = function() {
		return (this.$arrow = this.$arrow || this.tip().find( '.tooltip-arrow' ) );
	};

	Tooltip.prototype.enable = function() {
		this.enabled = true;
	};

	Tooltip.prototype.disable = function() {
		this.enabled = false;
	};

	Tooltip.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled;
	};

	Tooltip.prototype.toggle = function( event ) {

		var self = this;

		if ( event ) {

			self = $( event.currentTarget ).data( 'fs.tooltip' );

			if ( ! self ) {
				self = new this.constructor( event.currentTarget, this.getDelegateOptions() );
				$( event.currentTarget ).data( 'fs.tooltip', self );
			}
		}

		if ( event ) {

			self.inState.click = !self.inState.click;

			if ( self.isInStateTrue() ) {
				self.enter( self );
			} else {
				self.leave( self );
			}

		} else {

			if ( self.tip().hasClass('in') ) {
				self.leave( self );
			} else {
				self.enter( self );
			}
		}
	};

	Tooltip.prototype.destroy = function() {

		var that = this;

		clearTimeout( this.timeout );

		this.hide( function() {

			that.$element.off( '.tooltip' ).removeData( 'fs.tooltip' );

			if ( that.$tip ) {
				that.$tip.detach();
			}

			that.$tip      = null;
			that.$arrow    = null;
			that.$viewport = null;
			that.$element  = null;

		} );
	};

}( jQuery, window.frontStreet );
