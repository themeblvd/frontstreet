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
