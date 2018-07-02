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
+(function($, frontStreet) {
  'use strict';

  if ('undefined' === typeof frontStreet) {
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
    template:
      '<div class="fs-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
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
  frontStreet.tooltip.init = function(element, options) {
    var data = new Tooltip(element, options);
  };

  $document.ready(function($) {
    /**
     * Self-invokes the `tooltip` component.
     *
     * @since 1.0.0
     */
    $('.fs-tooltip-trigger').frontStreet('tooltip');
  });

  /**
   * Tooltip class definition.
   *
   * @since 1.0.0
   */
  var Tooltip = function(element, options) {
    this.options = null;
    this.enabled = null;
    this.timeout = null;
    this.hoverState = null;
    this.$element = null;
    this.inState = null;

    this.init(element, options);
  };

  Tooltip.prototype.init = function(element, options) {
    this.enabled = true;
    this.$element = $(element);
    this.options = this.getOptions(options);
    this.$viewport =
      this.options.viewport &&
      $(
        $.isFunction(this.options.viewport)
          ? this.options.viewport.call(this, this.$element)
          : this.options.viewport.selector || this.options.viewport
      );
    this.inState = { click: false, hover: false, focus: false };

    this.$element.on('mouseenter.tooltip', false, $.proxy(this.enter, this));
    this.$element.on('mouseleave.tooltip', false, $.proxy(this.leave, this));

    this.$element.on('focusin.tooltip', false, $.proxy(this.enter, this));
    this.$element.on('focusout.tooltip', false, $.proxy(this.leave, this));
  };

  Tooltip.prototype.getDefaults = function() {
    return frontStreet.tooltip.defaults;
  };

  Tooltip.prototype.getOptions = function(options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options);
    return options;
  };

  Tooltip.prototype.getDelegateOptions = function() {
    var options = {},
      defaults = this.getDefaults();

    this._options &&
      $.each(this._options, function(key, value) {
        if (value != defaults[key]) {
          options[key] = value;
        }
      });

    return options;
  };

  Tooltip.prototype.enter = function(obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('fs.tooltip');

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('fs.tooltip', self);
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
  };

  Tooltip.prototype.isInStateTrue = function() {
    for (var key in this.inState) {
      if (this.inState[key]) {
        return true;
      }
    }

    return false;
  };

  Tooltip.prototype.leave = function(obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('fs.tooltip');

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('fs.tooltip', self);
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
    }

    if (self.isInStateTrue()) {
      return;
    }

    self.hoverState = 'out';

    return self.hide();
  };

  Tooltip.prototype.show = function() {
    var e = $.Event('show.fs.tooltip');

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);

      if (e.isDefaultPrevented() || !inDom) {
        return;
      }

      var that = this,
        $tip = this.tip(),
        tipId = this.getUID('tooltip');

      this.setContent();
      $tip.attr('id', tipId);
      this.$element.attr('aria-describedby', tipId);

      $tip.addClass('fade');

      var placement = this.options.placement,
        autoToken = /\s?auto?\s?/i,
        autoPlace = autoToken.test(placement);

      if (autoPlace) {
        placement = placement.replace(autoToken, '') || 'top';
      }

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('fs.tooltip', this);

      if (this.options.container) {
        $tip.appendTo(this.options.container);
      } else {
        $tip.insertAfter(this.$element);
      }

      this.$element.trigger('inserted.fs.tooltip');

      var pos = this.getPosition(),
        actualWidth = $tip[0].offsetWidth,
        actualHeight = $tip[0].offsetHeight;

      if (autoPlace) {
        var orgPlacement = placement,
          viewportDim = this.getPosition(this.$viewport);

        if ('bottom' == placement && pos.bottom + actualHeight > viewportDim.bottom) {
          placement = 'top';
        } else if ('top' == placement && pos.top - actualHeight < viewportDim.top) {
          placement = 'bottom';
        }

        $tip.removeClass(orgPlacement).addClass(placement);
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

      this.applyPlacement(calculatedOffset, placement);

      var complete = function() {
        var prevHoverState = that.hoverState;

        that.$element.trigger('shown.fs.tooltip');
        that.hoverState = null;

        if ('out' == prevHoverState) {
          that.leave(that);
        }
      };
    }
  };

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var $tip = this.tip(),
      width = $tip[0].offsetWidth,
      height = $tip[0].offsetHeight,
      marginTop = parseInt($tip.css('margin-top'), 10),
      marginLeft = parseInt($tip.css('margin-left'), 10);

    offset.top += marginTop;
    offset.left += marginLeft;

    /*
		 * $.fn.offset doesn't round pixel values; so we use
		 * setOffset directly with our own function B-0.
		 */
    $.offset.setOffset(
      $tip[0],
      $.extend(
        {
          using: function(props) {
            $tip.css({
              top: Math.round(props.top),
              left: Math.round(props.left)
            });
          }
        },
        offset
      ),
      0
    );

    $tip.addClass('in');

    /*
		 * Check to see if placing tip in new offset caused the
		 * tip to resize itself.
		 */
    var actualWidth = $tip[0].offsetWidth,
      actualHeight = $tip[0].offsetHeight;

    if ('top' == placement && actualHeight != height) {
      offset.top = offset.top + height - actualHeight;
    }
  };

  Tooltip.prototype.setContent = function() {
    var $tip = this.tip(),
      title = this.getTitle();

    $tip.find('.tooltip-inner')['text'](title);

    $tip.removeClass('fade in top bottom');
  };

  Tooltip.prototype.hide = function(callback) {
    var that = this,
      $tip = $(this.$tip),
      event = $.Event('hide.fs.tooltip');

    function complete() {
      if ('in' != that.hoverState) {
        $tip.detach();
      }

      if (that.$element) {
        that.$element.removeAttr('aria-describedby').trigger('hidden.fs.tooltip');
      }

      if (callback) {
        callback();
      }
    }

    this.$element.trigger(event);

    if (event.isDefaultPrevented()) {
      return;
    }

    $tip.removeClass('in');

    this.hoverState = null;

    return this;
  };

  Tooltip.prototype.hasContent = function() {
    return this.getTitle();
  };

  Tooltip.prototype.getPosition = function($element) {
    if (!$element) {
      $element = this.$element;
    }

    var el = $element[0],
      isBody = el.tagName == 'BODY',
      elRect = el.getBoundingClientRect();

    if (elRect.width == null) {
      elRect = $.extend({}, elRect, {
        width: elRect.right - elRect.left,
        height: elRect.bottom - elRect.top
      });
    }

    var isSvg = window.SVGElement && el instanceof window.SVGElement,
      elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset(),
      scroll = {
        scroll: isBody
          ? document.documentElement.scrollTop || document.body.scrollTop
          : $element.scrollTop()
      },
      outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

    return $.extend({}, elRect, scroll, outerDims, elOffset);
  };

  Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
    var offset = {};

    if ('bottom' == placement) {
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

    if (!title) {
      var $el = this.$element;
      title = $el.attr('title');
    }

    return title;
  };

  Tooltip.prototype.getUID = function(prefix) {
    do {
      prefix += ~~(Math.random() * 1000000);
    } while (document.getElementById(prefix));

    return prefix;
  };

  Tooltip.prototype.tip = function() {
    if (!this.$tip) {
      this.$tip = $(this.options.template);

      if (this.$tip.length != 1) {
        throw new Error('tooltip `template` option must consist of exactly 1 top-level element!');
      }
    }

    return this.$tip;
  };

  Tooltip.prototype.arrow = function() {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'));
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

  Tooltip.prototype.toggle = function(event) {
    var self = this;

    if (event) {
      self = $(event.currentTarget).data('fs.tooltip');

      if (!self) {
        self = new this.constructor(event.currentTarget, this.getDelegateOptions());
        $(event.currentTarget).data('fs.tooltip', self);
      }
    }

    if (event) {
      self.inState.click = !self.inState.click;

      if (self.isInStateTrue()) {
        self.enter(self);
      } else {
        self.leave(self);
      }
    } else {
      if (self.tip().hasClass('in')) {
        self.leave(self);
      } else {
        self.enter(self);
      }
    }
  };

  Tooltip.prototype.destroy = function() {
    var that = this;

    clearTimeout(this.timeout);

    this.hide(function() {
      that.$element.off('.tooltip').removeData('fs.tooltip');

      if (that.$tip) {
        that.$tip.detach();
      }

      that.$tip = null;
      that.$arrow = null;
      that.$viewport = null;
      that.$element = null;
    });
  };
})(jQuery, window.frontStreet);
