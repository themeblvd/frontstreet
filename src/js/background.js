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
