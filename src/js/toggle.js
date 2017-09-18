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
		speed     : 200,
		accordion : false
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
