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
