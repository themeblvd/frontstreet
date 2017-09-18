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
