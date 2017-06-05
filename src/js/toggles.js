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
			.on('click.fs.toggle', function() {
				$this.toggle( $this, $(this), $toggle, $group );
				return false;
			});

	};

	Toggles.DEFAULTS = {
		speed 		: 200,
		accordion 	: false
	};

	Toggles.prototype.toggle = function($this, $title, $toggle, $group) {

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
