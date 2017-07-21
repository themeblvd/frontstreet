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
