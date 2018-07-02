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
