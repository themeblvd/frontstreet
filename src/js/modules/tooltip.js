import $ from 'jquery';

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
 * @module   tooltip.js
 */
class Tooltip {
  /**
   * Initialize the `tooltip` component on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Component options.
   */
  constructor(element, options) {
    this.settings = null;
    this.enabled = null;
    this.timeout = null;
    this.hoverState = null;
    this.$element = null;
    this.inState = null;
    this.enabled = true;
    this.$element = $(element);
    this.settings = $.extend({}, this.defaults, this.$element.data(), options);
    this.$viewport =
      this.settings.viewport &&
      $(
        $.isFunction(this.settings.viewport)
          ? this.settings.viewport.call(this, this.$element)
          : this.settings.viewport.selector || this.settings.viewport
      );
    this.inState = { click: false, hover: false, focus: false };

    this.$element.on('mouseenter.tooltip', false, $.proxy(this.enter, this));
    this.$element.on('mouseleave.tooltip', false, $.proxy(this.leave, this));

    this.$element.on('focusin.tooltip', false, $.proxy(this.enter, this));
    this.$element.on('focusout.tooltip', false, $.proxy(this.leave, this));

    this.getDelegateSettings = this.getDelegateSettings.bind(this);
    this.enter = this.enter.bind(this);
    this.isInStateTrue = this.isInStateTrue.bind(this);
    this.leave = this.leave.bind(this);
    this.show = this.show.bind(this);
    this.applyPlacement = this.applyPlacement.bind(this);
    this.setContent = this.setContent.bind(this);
    this.hide = this.hide.bind(this);
    this.hasContent = this.hasContent.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.getCalculatedOffset = this.getCalculatedOffset.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getUID = this.getUID.bind(this);
    this.tip = this.tip.bind(this);
    this.arrow = this.arrow.bind(this);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.toggleEnabled = this.toggleEnabled.bind(this);
    this.toggle = this.toggle.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  /**
   * Default tooltip options.
   *
   * @since 1.0.0
   *
   * @return {Object}
   */
  get defaults() {
    return {
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
  }

  getDelegateSettings() {
    const settings = {};

    this._settings &&
      $.each(this._settings, function(key, value) {
        if (value != this.defaults[key]) {
          settings[key] = value;
        }
      });

    return settings;
  }

  enter(obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('fs.tooltip');

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateSettings());
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
  }

  isInStateTrue() {
    for (var key in this.inState) {
      if (this.inState[key]) {
        return true;
      }
    }

    return false;
  }

  leave(obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('fs.tooltip');

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateSettings());
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
  }

  show() {
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

      var placement = this.settings.placement,
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

      if (this.settings.container) {
        $tip.appendTo(this.settings.container);
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
  }

  applyPlacement(offset, placement) {
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
  }

  setContent() {
    var $tip = this.tip(),
      title = this.getTitle();

    $tip.find('.tooltip-inner')['text'](title);

    $tip.removeClass('fade in top bottom');
  }

  hide(callback) {
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
  }

  hasContent() {
    return this.getTitle();
  }

  getPosition($element) {
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
  }

  getCalculatedOffset(placement, pos, actualWidth, actualHeight) {
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
  }

  getTitle() {
    var title = this.settings.title;

    if (!title) {
      var $el = this.$element;
      title = $el.attr('title');
    }

    return title;
  }

  getUID(prefix) {
    do {
      prefix += ~~(Math.random() * 1000000);
    } while (document.getElementById(prefix));

    return prefix;
  }

  tip() {
    if (!this.$tip) {
      this.$tip = $(this.settings.template);

      if (this.$tip.length != 1) {
        throw new Error('tooltip `template` option must consist of exactly 1 top-level element!');
      }
    }

    return this.$tip;
  }

  arrow() {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'));
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  toggleEnabled() {
    this.enabled = !this.enabled;
  }

  toggle(event) {
    var self = this;

    if (event) {
      self = $(event.currentTarget).data('fs.tooltip');

      if (!self) {
        self = new this.constructor(event.currentTarget, this.getDelegateSettings());
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
  }

  destroy() {
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
  }
}

export default Tooltip;
