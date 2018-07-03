/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dom = undefined;
exports.isMobile = isMobile;

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Store and cache re-usable DOM elements.
 *
 * @since 1.0.0
 *
 * @var {Object}
 */
var dom = exports.dom = {
  $window: (0, _jquery2.default)(window),
  $document: (0, _jquery2.default)(document),
  $body: (0, _jquery2.default)('body')
};

/**
 * Checks if website is being loaded from a mobile
 * device.
 *
 * @since 1.0.0
 *
 * @param  {Boolean} viewportCheck Whether to let viewport size help determine.
 * @return {Boolean} Whether we're on a mobile device.
 */
function isMobile(viewportCheck) {
  var $body = dom.$body;


  if ($body.hasClass('mobile')) {
    return true;
  }

  var agentCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (agentCheck) {
    return true;
  }

  if (viewportCheck) {
    var $window = (0, _jquery2.default)(window);

    if ($window.width() < 992 || $window.height() < 500) {
      return true;
    }
  }

  return false;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This file binds preset instances of OwlCarousel,
 * allowing for those to be configured through the
 * HTML markup.
 *
 * OwlCarousel is an open source carousel/slider
 * script by David Deutsch.
 *
 * @link https://owlcarousel2.github.io/OwlCarousel2/
 *
 * @summary  Sliders
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   modal.js
 * @requires owl-carousel.js
 */

exports.default = function ($) {
  if (!$.fn.owlCarousel) {
    return;
  }

  var $window = _utils.dom.$window,
      $body = _utils.dom.$body;


  $window.on('load', function () {
    $('.fs-simple-slider, .fs-gallery-slider, .fs-block-slider').each(function () {
      var $wrap = $(this),
          $slider = $wrap.find('.fs-slider'),
          items = parseInt($wrap.data('items')) ? parseInt($wrap.data('items')) : 4,
          speed = parseInt($wrap.data('speed')) ? parseInt($wrap.data('speed')) : 500,
          autoplayTimeout = parseInt($wrap.data('autoplay')) ? parseInt($wrap.data('autoplay')) : 0,
          margin = parseInt($wrap.data('margin')) ? parseInt($wrap.data('margin')) : 1,
          autoplay = autoplayTimeout ? true : false,
          pause = 'true' == $wrap.data('pause') || $wrap.data('pause') == '1' ? true : false,
          loop = 'false' == $wrap.data('loop') || $wrap.data('loop') == '0' ? false : true,
          animate = 'true' == $wrap.data('fade') || $wrap.data('fade') == '1' ? 'fadeOut' : false,
          autoWidth = $wrap.hasClass('fs-gallery-slider') ? true : false,
          center = $wrap.hasClass('fs-gallery-slider') ? true : false,
          $nav = $wrap.find('.fs-slider-nav, .fs-slider-thumbs'),
          $arrows = $wrap.find('.fs-slider-arrows'),
          navCounter = 0,
          timeout = null;

      // Toggle "hovered" class on/off for any CSS hover effects.
      $wrap.on('mouseenter', function () {
        $(this).addClass('hovered');
      }).on('mouseleave', function () {
        $(this).removeClass('hovered');
      });

      // Add slide-to data to each nav item.
      $nav.find('li').each(function () {
        $(this).data('slide-to', navCounter);
        navCounter++;
      });

      if ($wrap.hasClass('fs-simple-slider')) {
        margin = 0;
        items = 1;
      } else if ($wrap.hasClass('fs-gallery-slider')) {
        items = 1;
      }

      $slider.owlCarousel({
        items: items,
        nav: false,
        dots: true, // Must be enabled for e.page.index to work.
        loop: loop,
        smartSpeed: speed,
        autoplay: autoplay,
        autoplayTimeout: autoplayTimeout,
        autoplayHoverPause: pause,
        animateOut: animate,
        autoWidth: autoWidth,
        margin: margin,
        center: center,
        rtl: $body.hasClass('rtl') ? true : false,
        onInitialized: function onInitialized(e) {
          $nav.find('li:first-child').addClass('active');
          $wrap.removeClass('loading').addClass('loaded');
          if (!loop) $arrows.find('li').addClass('fade');
          $wrap.find('.fs-loader').fadeOut();
        },
        onChanged: function onChanged(e) {
          /*
           * Make sure next and prev buttons don't show
           * when at start and end of cycle, if there's
           * no looping.
           */
          if (!loop) {
            var index = $wrap.hasClass('fs-block-slider') ? e.item.index : e.page.index;

            if (index == 0 || index == -1) {
              $arrows.find('li.prev').removeClass('in');
              $arrows.find('li.next').addClass('in');
            } else if (e.page.index + 1 == e.page.count) {
              $arrows.find('li.next').removeClass('in');
              $arrows.find('li.prev').addClass('in');
            } else {
              $arrows.find('li').addClass('in');
            }
          }

          // Standard navigation dots.
          $nav.find('li').removeClass('active');
          $nav.find('li:nth-child( ' + (e.page.index + 1) + ' )').addClass('active');
        }
      });

      // Bind standard slider nav and thumb nav.
      $nav.find('li').on('click', function () {
        var $current = $(this);

        $slider.trigger('to.owl.carousel', $current.data('slide-to'));

        $current.closest('ul, ol').find('li').removeClass('active');

        $current.addClass('active');
      });

      // Bind slider arrow next/prev nav.
      $arrows.find('li').on('click', function () {
        // $slider.trigger( 'stop.owl.autoplay' ); // Doesn't work right as of v2.2.1.
        if ($(this).hasClass('next')) {
          $slider.trigger('next.owl.carousel');
        } else {
          $slider.trigger('prev.owl.carousel');
        }
      });
    }); // End .each()
  }); // End .on( 'load' )
}(_jquery2.default);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * @requires magnific-popup.js
 */
exports.default = function ($) {
  if (!$.fn.magnificPopup) {
    return;
  }

  var $document = _utils.dom.$document;


  $document.ready(function ($) {
    var mainClass = 'fs-modal';
    var removalDelay = 0;

    var config = {
      animation: 'fade',
      mobile: 0,
      mobileIframe: 768,
      mobileGallery: 0,
      error: 'The modal media could not be loaded.',
      close: 'Close',
      loading: 'Loading...',
      counter: '%curr% of %total%',
      next: 'Next',
      previous: 'Previous',
      closeMarkup: '<button type="button" class="mfp-close fs-close close-light close-md">%title%</button>'
    };

    if (typeof window.fsModal !== 'undefined') {
      config = $.extend({}, config, window.fsModal); // An optional configuration object you could declare.
    }

    if (config.animation && config.animation !== 'none') {
      mainClass = mainClass + ' fs-modal-' + config['animation'];
      removalDelay = 150;
    }

    $.extend(true, $.magnificPopup.defaults, {
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
    });

    $('.fs-modal-close').on('click', function (event) {
      event.preventDefault();
      $.magnificPopup.close();
      return false;
    });

    $('.fs-content-modal-link').magnificPopup({
      type: 'inline',
      mainClass: mainClass,
      alignTop: true,
      showCloseBtn: false,
      removalDelay: removalDelay,
      callbacks: {
        open: function open() {
          $('.mfp-wrap .fs-modal').attr('aria-hidden', false);
        },
        beforeClose: function beforeClose() {
          $('.mfp-wrap .fs-modal').attr('aria-hidden', true);
        }
      }
    });

    $('.fs-search-modal-link').magnificPopup({
      type: 'inline',
      mainClass: mainClass + ' mfp-search',
      closeBtnInside: false,
      closeMarkup: config.closeMarkup,
      removalDelay: removalDelay,
      callbacks: {
        open: function open() {
          $('.mfp-wrap .fs-search-modal').attr('aria-hidden', false);
          $.magnificPopup.instance.wrap[0].addEventListener('focus', function (e) {
            $('.mfp-search .fs-search-modal input[type="search"]').focus();
          });
        },
        beforeClose: function beforeClose() {
          $('.mfp-wrap .fs-search-modal').attr('aria-hidden', true);
        }
      }
    });

    $('.fs-modal-gallery, .themeblvd-gallery').each(function () {
      var $gallery = $(this);
      var classes = ['themeblvd-lightbox', 'fs-content-modal-link', 'fs-image-modal-link', 'fs-iframe-modal-link'];
      var selector = '.' + classes.join(', .');

      $gallery.find(selector).each(function () {
        var $link = $(this);
        var linkClass = '';

        if ($link.hasClass('fs-content-modal-link')) {
          linkClass = 'mfp-inline';
        } else if ($link.hasClass('fs-image-modal-link')) {
          linkClass = 'mfp-image';
        } else if ($link.hasClass('fs-iframe-modal-link')) {
          linkClass = 'mfp-iframe';
        }

        linkClass = 'fs-gallery-modal-link ' + linkClass;

        $link.removeClass(classes.join(' ')).addClass(linkClass);
      });

      $gallery.magnificPopup({
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
          markup: '<div class="mfp-iframe-scaler">\n              <div class="mfp-close"></div>\n              <iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>\n              <div class="mfp-bottom-bar">\n                <div class="mfp-title"></div>\n                <div class="mfp-counter"></div>\n              </div>\n            </div>'
        },
        callbacks: {
          markupParse: function markupParse(template, values, item) {
            values.title = item.el.attr('title');
          }
        }
      });
    });

    $('.fs-image-modal-link').magnificPopup({
      type: 'image',
      mainClass: mainClass,
      closeMarkup: config.closeMarkup,
      removalDelay: removalDelay,
      disableOn: config.mobile,
      image: {
        cursor: null
      }
    });

    $('.fs-iframe-modal-link').magnificPopup({
      type: 'iframe',
      mainClass: mainClass,
      closeMarkup: config.closeMarkup,
      removalDelay: removalDelay,
      disableOn: config.mobileIframe,
      iframe: {
        // Add bottom bar for iframes
        markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</div>'
      },
      callbacks: {
        markupParse: function markupParse(template, values, item) {
          values.title = item.el.attr('title');
        }
      }
    });
  });
}(_jquery2.default);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Tooltip = function () {
  /**
   * Initialize the `tooltip` component on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Component options.
   */
  function Tooltip(element, options) {
    _classCallCheck(this, Tooltip);

    this.settings = null;
    this.enabled = null;
    this.timeout = null;
    this.hoverState = null;
    this.$element = null;
    this.inState = null;
    this.enabled = true;
    this.$element = (0, _jquery2.default)(element);
    this.settings = _jquery2.default.extend({}, this.defaults, this.$element.data(), options);
    this.$viewport = this.settings.viewport && (0, _jquery2.default)(_jquery2.default.isFunction(this.settings.viewport) ? this.settings.viewport.call(this, this.$element) : this.settings.viewport.selector || this.settings.viewport);
    this.inState = { click: false, hover: false, focus: false };

    this.$element.on('mouseenter.tooltip', false, _jquery2.default.proxy(this.enter, this));
    this.$element.on('mouseleave.tooltip', false, _jquery2.default.proxy(this.leave, this));

    this.$element.on('focusin.tooltip', false, _jquery2.default.proxy(this.enter, this));
    this.$element.on('focusout.tooltip', false, _jquery2.default.proxy(this.leave, this));

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


  _createClass(Tooltip, [{
    key: 'getDelegateSettings',
    value: function getDelegateSettings() {
      var settings = {};

      this._settings && _jquery2.default.each(this._settings, function (key, value) {
        if (value != this.defaults[key]) {
          settings[key] = value;
        }
      });

      return settings;
    }
  }, {
    key: 'enter',
    value: function enter(obj) {
      var self = obj instanceof this.constructor ? obj : (0, _jquery2.default)(obj.currentTarget).data('fs.tooltip');

      if (!self) {
        self = new this.constructor(obj.currentTarget, this.getDelegateSettings());
        (0, _jquery2.default)(obj.currentTarget).data('fs.tooltip', self);
      }

      if (obj instanceof _jquery2.default.Event) {
        self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
      }

      if (self.tip().hasClass('in') || self.hoverState == 'in') {
        self.hoverState = 'in';
        return;
      }

      self.hoverState = 'in';

      return self.show();
    }
  }, {
    key: 'isInStateTrue',
    value: function isInStateTrue() {
      for (var key in this.inState) {
        if (this.inState[key]) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: 'leave',
    value: function leave(obj) {
      var self = obj instanceof this.constructor ? obj : (0, _jquery2.default)(obj.currentTarget).data('fs.tooltip');

      if (!self) {
        self = new this.constructor(obj.currentTarget, this.getDelegateSettings());
        (0, _jquery2.default)(obj.currentTarget).data('fs.tooltip', self);
      }

      if (obj instanceof _jquery2.default.Event) {
        self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
      }

      if (self.isInStateTrue()) {
        return;
      }

      self.hoverState = 'out';

      return self.hide();
    }
  }, {
    key: 'show',
    value: function show() {
      var e = _jquery2.default.Event('show.fs.tooltip');

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);

        var inDom = _jquery2.default.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);

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

        $tip.detach().css({ top: 0, left: 0, display: 'block' }).addClass(placement).data('fs.tooltip', this);

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

        var complete = function complete() {
          var prevHoverState = that.hoverState;

          that.$element.trigger('shown.fs.tooltip');
          that.hoverState = null;

          if ('out' == prevHoverState) {
            that.leave(that);
          }
        };
      }
    }
  }, {
    key: 'applyPlacement',
    value: function applyPlacement(offset, placement) {
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
      _jquery2.default.offset.setOffset($tip[0], _jquery2.default.extend({
        using: function using(props) {
          $tip.css({
            top: Math.round(props.top),
            left: Math.round(props.left)
          });
        }
      }, offset), 0);

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
  }, {
    key: 'setContent',
    value: function setContent() {
      var $tip = this.tip(),
          title = this.getTitle();

      $tip.find('.tooltip-inner')['text'](title);

      $tip.removeClass('fade in top bottom');
    }
  }, {
    key: 'hide',
    value: function hide(callback) {
      var that = this,
          $tip = (0, _jquery2.default)(this.$tip),
          event = _jquery2.default.Event('hide.fs.tooltip');

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
  }, {
    key: 'hasContent',
    value: function hasContent() {
      return this.getTitle();
    }
  }, {
    key: 'getPosition',
    value: function getPosition($element) {
      if (!$element) {
        $element = this.$element;
      }

      var el = $element[0],
          isBody = el.tagName == 'BODY',
          elRect = el.getBoundingClientRect();

      if (elRect.width == null) {
        elRect = _jquery2.default.extend({}, elRect, {
          width: elRect.right - elRect.left,
          height: elRect.bottom - elRect.top
        });
      }

      var isSvg = window.SVGElement && el instanceof window.SVGElement,
          elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset(),
          scroll = {
        scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
      },
          outerDims = isBody ? { width: (0, _jquery2.default)(window).width(), height: (0, _jquery2.default)(window).height() } : null;

      return _jquery2.default.extend({}, elRect, scroll, outerDims, elOffset);
    }
  }, {
    key: 'getCalculatedOffset',
    value: function getCalculatedOffset(placement, pos, actualWidth, actualHeight) {
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
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = this.settings.title;

      if (!title) {
        var $el = this.$element;
        title = $el.attr('title');
      }

      return title;
    }
  }, {
    key: 'getUID',
    value: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * 1000000);
      } while (document.getElementById(prefix));

      return prefix;
    }
  }, {
    key: 'tip',
    value: function tip() {
      if (!this.$tip) {
        this.$tip = (0, _jquery2.default)(this.settings.template);

        if (this.$tip.length != 1) {
          throw new Error('tooltip `template` option must consist of exactly 1 top-level element!');
        }
      }

      return this.$tip;
    }
  }, {
    key: 'arrow',
    value: function arrow() {
      return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.enabled = true;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.enabled = false;
    }
  }, {
    key: 'toggleEnabled',
    value: function toggleEnabled() {
      this.enabled = !this.enabled;
    }
  }, {
    key: 'toggle',
    value: function toggle(event) {
      var self = this;

      if (event) {
        self = (0, _jquery2.default)(event.currentTarget).data('fs.tooltip');

        if (!self) {
          self = new this.constructor(event.currentTarget, this.getDelegateSettings());
          (0, _jquery2.default)(event.currentTarget).data('fs.tooltip', self);
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
  }, {
    key: 'destroy',
    value: function destroy() {
      var that = this;

      clearTimeout(this.timeout);

      this.hide(function () {
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
  }, {
    key: 'defaults',
    get: function get() {
      return {
        placement: 'top',
        template: '<div class="fs-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: '',
        container: false,
        viewport: {
          selector: 'body',
          padding: 0
        }
      };
    }
  }]);

  return Tooltip;
}();

exports.default = Tooltip;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Adds toggles component functionality, which allows
 * toggle display of content.
 *
 * @summary  Toggle
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   toggle.js
 */
var Toggle = function () {
  /**
   * Initialize the `tabs` component on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Component options.
   */
  function Toggle(element, options) {
    _classCallCheck(this, Toggle);

    var $toggle = (0, _jquery2.default)(element);
    var settings = _jquery2.default.extend({}, this.defaults, options);
    var open = this.open,
        close = this.close;


    var $group = null;

    if ($toggle.parents('.toggle-group').length > 0) {
      $group = $toggle.closest('.toggle-group');
    }

    if ($group && $group.hasClass('toggle-accordion')) {
      settings.accordion = true;
    }

    // Set up accessiblity.
    $toggle.find('.toggle-content').attr('aria-expanded', false);

    // Open initially if has class `toggle-expanded`.
    if ($toggle.hasClass('toggle-expanded')) {
      open($toggle, settings.speed);
    }

    // Set up toggle click.
    $toggle.find('.toggle-title').on('click', function (event) {
      event.preventDefault();

      (0, _jquery2.default)(this).blur();

      if ($toggle.hasClass('toggle-expanded')) {
        // Toggle is open; so close it.
        close($toggle, settings.speed);
      } else {
        if ($group && settings.accordion) {
          $group.find('.fs-toggle').each(function () {
            close((0, _jquery2.default)(this), settings.speed);
          });
        }

        // Toggle is closed; so open it.
        open($toggle, settings.speed);
      }
    });
  }

  /**
   * Default toggle options.
   *
   * @since 1.0.0
   *
   * @return {Object}
   */


  _createClass(Toggle, [{
    key: 'open',


    /**
     * Open a toggle.
     *
     * @since 1.0.0
     *
     * @param {Object} $toggle The binded jQuery DOM element.
     * @param {Number} speed   Animation speed in milliseconds.
     */
    value: function open($toggle, speed) {
      $toggle.addClass('toggle-expanded').find('.toggle-content').stop(true, true).attr('aria-expanded', true).slideDown(speed);
    }

    /**
     * Close a toggle.
     *
     * @since 1.0.0
     *
     * @param {Object} $toggle The binded jQuery DOM element.
     * @param {Number} speed   Animation speed in milliseconds.
     */

  }, {
    key: 'close',
    value: function close($toggle, speed) {
      $toggle.removeClass('toggle-expanded').find('.toggle-content').stop(true, true).attr('aria-expanded', false).slideUp(speed);
    }
  }, {
    key: 'defaults',
    get: function get() {
      return {
        speed: 200,
        accordion: false
      };
    }
  }]);

  return Toggle;
}();

exports.default = Toggle;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
 */
var Tabs = function () {
  /**
   * Initialize the `tabs` component on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Component options (currently not used).
   */
  function Tabs(element, options) {
    _classCallCheck(this, Tabs);

    var $tabs = (0, _jquery2.default)(element);
    var settings = _jquery2.default.extend({}, this.defaults, options);
    var $window = _utils.dom.$window;


    this.deepLink = this.deepLink.bind(this);

    var show = this.show,
        matchHeight = this.matchHeight,
        deepLink = this.deepLink;

    /*
    * The following classes being added to the tabs element
    * can override the height and deepLink options.
    */

    if ($tabs.hasClass('tabs-fixed-height')) {
      settings.height = true;
    }

    if ($tabs.hasClass('tabs-deep-link')) {
      settings.deepLink = true;
    }

    // Setup accessiblity.
    $tabs.find('.tab-pane').each(function () {
      var $pane = (0, _jquery2.default)(this);

      if ($pane.hasClass('active')) {
        $pane.attr('aria-expanded', true);
      } else {
        $pane.attr('aria-expanded', false);
      }
    });

    // Toggle tab content.
    $tabs.find(settings.navSelector).find('a').on('click', function (event) {
      event.preventDefault();
      show($tabs, (0, _jquery2.default)(this), settings);
    });

    // Setup fixed height and/or deep-linking.
    if (settings.height || settings.deepLink) {
      $window.on('load', function () {
        // Match height of all tabs to tallest.
        if (settings.height) {
          matchHeight($tabs);
        }

        // Watch for deep-linking.
        if (settings.deepLink) {
          deepLink($tabs, settings);
        }
      });
    }
  }

  /**
   * Default tabs options.
   *
   * @since 1.0.0
   *
   * @return {Object}
   */


  _createClass(Tabs, [{
    key: 'show',


    /**
     * Show a tab.
     *
     * @since 1.0.0
     *
     * @param {Object} $tabs    The binded jQuery DOM element.
     * @param {Object} $trigger Link (tab) which is triggering new content.
     * @param {Object} settings Component settings.
     */
    value: function show($tabs, $trigger, settings) {
      var $nav = $trigger.closest(settings.navSelector);
      var target = $trigger.attr('href').split('#')[1];

      $nav.find('li').removeClass('active');

      $trigger.closest('li').addClass('active');

      $tabs.find('.tab-pane').attr('aria-expanded', false).removeClass('in').hide().removeClass('fade');

      $tabs.find('#' + target).attr('aria-expanded', true).addClass('fade').show(0, function () {
        (0, _jquery2.default)(this).addClass('in');
      });
    }

    /**
     * Set all tab content panes to have equal height, to
     * the tallest one.
     *
     * @since 1.0.0
     *
     * @param {Object} $tabs The binded jQuery DOM element.
     */

  }, {
    key: 'matchHeight',
    value: function matchHeight($tabs) {
      var tallest = 0;

      $tabs.find('.tab-pane').each(function () {
        var $pane = (0, _jquery2.default)(this);
        var currentHeight = $pane.show().outerHeight();

        if (!$pane.hasClass('active')) {
          $pane.hide();
        }

        if (currentHeight > tallest) {
          tallest = currentHeight;
        }
      });

      $tabs.find('.tab-pane').height(tallest);
    }

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
     * @param {Object} $tabs    The binded jQuery DOM element.
     * @param {Object} settings Component settings.
     */

  }, {
    key: 'deepLink',
    value: function deepLink($tabs, settings) {
      var hash = document.location.hash;

      if (hash && -1 != hash.indexOf('tab_')) {
        hash = hash.replace('tab_', '');

        this.show($tabs, $tabs.find('a[href="' + hash + '"] '), settings);

        (0, _jquery2.default)('html, body').animate({
          scrollTop: $tabs.offset().top - 20
        }, 800);
      }
    }
  }, {
    key: 'defaults',
    get: function get() {
      return {
        navSelector: '.menu-bar, .submenu-bar, .submenu-tabs, .submenu-pills',
        height: false,
        deepLink: false
      };
    }
  }]);

  return Tabs;
}();

exports.default = Tabs;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Adds submenu navigation to mobile menus.
 *
 * @summary  Mobile Menus
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   mobile-menu.js
 */
var MobileMenu = function () {
  /**
   * Initialize the `mobile-menu` component on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Component options (currently not used).
   */
  function MobileMenu(element, options) {
    _classCallCheck(this, MobileMenu);

    var $menu = $(element);
    var $triggers = $menu.find('li').has('ul');
    var show = this.show,
        hide = this.hide;


    $triggers.addClass('menu-item-has-children').children('.menu-btn').on('click.fs.mobile-menu', function (event) {
      event.preventDefault();
      show($(this));
      return false;
    });

    $triggers.find('ul').prepend('<li><a href="#" class="menu-btn back"></a></li>').find('.back').on('click.fs.mobile-menu-back', function (event) {
      event.preventDefault();
      hide($(this));
      return false;
    });

    $menu.height($menu.prop('scrollHeight'));
  }

  /**
   * Show a submenu.
   *
   * @since 1.0.0
   *
   * @param {Object} $trigger Parent menu item triggering submenu.
   */


  _createClass(MobileMenu, [{
    key: 'show',
    value: function show($trigger) {
      $trigger.closest('li').children('ul').addClass('on');
    }

    /**
     * Hide a submenu.
     *
     * @since 1.0.0
     *
     * @param {Object} $trigger Parent menu item triggering submenu.
     */

  }, {
    key: 'hide',
    value: function hide($trigger) {
      $trigger.closest('ul').removeClass('on');
    }
  }]);

  return MobileMenu;
}();

exports.default = MobileMenu;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This file includes the functionality for dropdown
 * menus.
 *
 * By default all HTML elements with class `fs-menu`
 * are automatically binded.
 *
 * Also, menu items with class 'no-click' are setup to
 * prevent the default click behavior.
 *
 * @summary  Dropdown Menus
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   menu.js
 */
var Menu = function () {
  /**
   * Initialize the `menu` component on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Component options.
   */
  function Menu(element, options) {
    _classCallCheck(this, Menu);

    var $menu = (0, _jquery2.default)(element);

    this.settings = _jquery2.default.extend(this.defaults, options);

    if ($menu.data('delay') || 0 === $menu.data('delay')) {
      this.settings.delay = $menu.data('delay');
    }

    this.timer = {}; // Keep track of delayed transitions.
    this.flyout = this.flyout.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    var flyout = this.flyout,
        show = this.show,
        hide = this.hide;


    $menu.removeClass('no-js');

    /*
     * Triggers dropdown show and hide, upon mouseenter
     * and mouseleave.
     */
    $menu.find('li').has(this.settings.dropDownSelector).addClass('menu-item-has-children').on('mouseenter', function () {
      var $trigger = (0, _jquery2.default)(this);
      flyout($trigger); // Determine and adds class for flyout direction.
      show($trigger);
    }).on('mouseleave', function () {
      hide((0, _jquery2.default)(this));
    });

    // Adds CSS classes to each level of the menu, 1-3.
    $menu.children('li').each(function () {
      (0, _jquery2.default)(this).addClass('level-1').children('ul').children('li').each(function () {
        (0, _jquery2.default)(this).addClass('level-2').children('ul').children('li').each(function () {
          (0, _jquery2.default)(this).addClass('level-3');
        });
      });
    });

    // Add mobile touch support.
    if ((0, _utils.isMobile)()) {
      // Tap anywhere on iOS to unfocus a submenu.
      (0, _jquery2.default)('html').css('cursor', 'pointer').on('click', _jquery2.default.noop);
    }
  }

  /**
   * Default menu options.
   *
   * @since 1.0.0
   *
   * @return {Object}
   */


  _createClass(Menu, [{
    key: 'flyout',


    /**
     * Determines the direction the dropdown menu should
     * flyout towards.
     *
     * @since 1.0.0
     *
     * @param {Object} $trigger The parent menu item, for which the dropdown belongs to.
     */
    value: function flyout($trigger) {
      if (!$trigger.hasClass('level-1')) {
        return;
      }

      var dropDownSelector = this.settings.dropDownSelector;
      var $body = _utils.dom.$body;

      var $flyout = $trigger.children(dropDownSelector);
      var location = $trigger.offset();
      var space = 200;

      if ($body.hasClass('rtl')) {
        location = location['right'];
      } else {
        location = location['left'];
      }

      if ($flyout.find('.level-3').length > 0) {
        space += space; // Space doubles for level 3.
      }

      // Can't used cached window here.
      if ((0, _jquery2.default)(window).width() - location <= space) {
        $flyout.addClass('reverse');
      } else {
        $flyout.removeClass('reverse');
      }
    }

    /**
     * Shows a dropdown menu.
     *
     * @since 1.0.0
     *
     * @param {Object} $trigger The parent menu item, for which the dropdown belongs to.
     */

  }, {
    key: 'show',
    value: function show($trigger) {
      var dropDownSelector = this.settings.dropDownSelector;

      var level = this.getLevel($trigger);
      var $siblings = $trigger.siblings().find(dropDownSelector);
      var $target = $trigger.children(dropDownSelector);

      clearTimeout(this.timer[level]);

      $siblings.removeClass('in');

      $target.addClass('show fade');

      this.timer[level] = setTimeout(function () {
        $siblings.removeClass('show fade');
        $target.addClass('in');
      }, 200);
    }

    /**
     * Hides a dropdown menu.
     *
     * @since 1.0.0
     *
     * @param {Object} $trigger The parent menu item, for which the dropdown belongs to.
     */

  }, {
    key: 'hide',
    value: function hide($trigger, settings) {
      var _settings = this.settings,
          dropDownSelector = _settings.dropDownSelector,
          delay = _settings.delay;

      var level = this.getLevel($trigger);
      var $flyout = $trigger.children(dropDownSelector);

      clearTimeout(this.timer[level]);

      this.timer[level] = setTimeout(function () {
        $flyout.removeClass('in');

        setTimeout(function () {
          $flyout.removeClass('show fade');
        }, 200);
      }, delay);
    }

    /**
     * Determines the current level of the dropdown parent
     * item being triggered.
     *
     * @since 1.0.0
     *
     * @param  {Object} $trigger The parent menu item, for which the dropdown belongs to.
     * @return {String} Current menu level, `level-1`, `level-2` or `level-3`.
     */

  }, {
    key: 'getLevel',
    value: function getLevel($trigger) {
      if ($trigger.hasClass('level-3')) {
        return 'level-3';
      } else if ($trigger.hasClass('level-2')) {
        return 'level-2';
      }
      return 'level-1';
    }
  }, {
    key: 'defaults',
    get: function get() {
      return {
        delay: 500,
        dropDownSelector: 'ul:not(.mega-sub-menu), .fs-mega'
      };
    }
  }]);

  return Menu;
}();

exports.default = Menu;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
 */
var Background = function () {
  /**
   * Initialize the `background` component on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Component options.
   */
  function Background(element, options) {
    _classCallCheck(this, Background);

    var $element = (0, _jquery2.default)(element);
    var settings = _jquery2.default.extend({}, this.defaults, options);
    var $section = $element.closest(settings.section);

    this.slider = this.slider.bind(this);
    this.parallax = this.parallax.bind(this);
    this.parallaxCalc = this.parallaxCalc.bind(this);

    switch (settings.type) {
      case 'slider':
        this.slider($element, $section, settings);
        break;
      case 'parallax':
      default:
        this.parallax($element, $section, settings);
    }
  }

  /**
   * Default background options.
   *
   * @since 1.0.0
   *
   * @return {Object}
   */


  _createClass(Background, [{
    key: 'slider',


    /**
     * Setup a background slider.
     *
     * @since 1.0.0
     *
     * @param {Object} $element The background slider element.
     * @param {Object} $section Section containing element.
     * @param {Object} settings Current settings.
     */
    value: function slider($slider, $section, settings) {
      var autoplay = settings.autoplay;


      if ($slider.data('autoplay') && $slider.data('autoplay') >= 1000) {
        autoplay = $slider.data('autoplay');
      }

      /*
       * Reverse order of images so the top of stack
       * will be the first image.
       */
      $slider.find('img').each(function () {
        var $img = (0, _jquery2.default)(this);
        $img.addClass('fade in');
        $slider.prepend($img);
      });

      $slider.addClass('in');

      $section.find('.fs-loader').fadeOut();

      setInterval(function () {
        var $lastImg = $slider.find('img:last-child');

        $lastImg.removeClass('in');

        setTimeout(function () {
          $lastImg.prependTo($slider).addClass('in');
        }, autoplay);
      }, autoplay);
    }

    /**
     * Setup a background image parallax effect.
     *
     * @since 1.0.0
     *
     * @param {Object} $element The background element.
     * @param {Object} $section Section containing element.
     * @param {Object} settings Current settings.
     */

  }, {
    key: 'parallax',
    value: function parallax($figure, $section, settings) {
      var $window = _utils.dom.$window;
      var parallaxCalc = this.parallaxCalc;

      var $img = $figure.find('img, .img');
      var parallax = null;

      /*
       * Will only calculate if all are true:
       *
       * 1. Not a true mobile device (looking at user agent).
       * 2. Window is taller than 500px.
       * 3. Window is wider than 992px.
       */
      if (!(0, _utils.isMobile)(true)) {
        // Passing `true` denotes checking viewport size.
        parallax = parallaxCalc($figure, $img);

        if (parallax) {
          $img.css('transform', 'translate3D(-50%,' + parallax + 'px, 0)');
        }
      }

      $figure.addClass('in');

      $section.find('.fs-loader').fadeOut();

      // Adjust parallax positioning if window is resized.
      $window.on('scroll resize', function () {
        /*
         * Will only calculate if all are true:
         *
         * 1. Not a true mobile device (looking at user agent).
         * 2. Window is taller than 500px.
         * 3. Window is wider than 992px.
         *
         * @see isMobile() function in init.js
         */
        if (!(0, _utils.isMobile)(true)) {
          // Passing `true` denotes checking viewport size.
          parallax = parallaxCalc($figure, $img);

          if (parallax) {
            $img.css('transform', 'translate3D(-50%,' + parallax + 'px, 0)');
          }
        }
      });
    }

    /**
     * Calculate parallax position of element.
     *
     * @since 1.0.0
     *
     * @param {Object} $figure The background element.
     * @param {Object} $img    Image to position within element.
     */

  }, {
    key: 'parallaxCalc',
    value: function parallaxCalc($figure, $img) {
      var $window = _utils.dom.$window;


      var imgHeight = $img.height(),
          containerHeight = $figure.height() > 0 ? $figure.height() : 500,
          parallaxDist = imgHeight - containerHeight,
          bottom = $figure.offset().top + containerHeight,
          top = $figure.offset().top,
          scrollTop = $window.scrollTop(),
          windowHeight = window.innerHeight,
          // Using `window`, NOT `$window`; we need a fresh calculation here.
      windowBottom = scrollTop + windowHeight,
          percentScrolled = (windowBottom - top) / (containerHeight + windowHeight);

      if (bottom > scrollTop && top < scrollTop + windowHeight) {
        return Math.round(parallaxDist * percentScrolled);
      }

      return null;
    }
  }, {
    key: 'defaults',
    get: function get() {
      return {
        type: 'parallax',
        autoplay: 4000,
        section: '.fs-section, .has-bg-slider, .has-bg-parallax, .has-bg-video'
      };
    }
  }]);

  return Background;
}();

exports.default = Background;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _utils = __webpack_require__(1);

var _background = __webpack_require__(9);

var _background2 = _interopRequireDefault(_background);

var _menu = __webpack_require__(8);

var _menu2 = _interopRequireDefault(_menu);

var _mobileMenu = __webpack_require__(7);

var _mobileMenu2 = _interopRequireDefault(_mobileMenu);

var _tabs = __webpack_require__(6);

var _tabs2 = _interopRequireDefault(_tabs);

var _toggle = __webpack_require__(5);

var _toggle2 = _interopRequireDefault(_toggle);

var _tooltip = __webpack_require__(4);

var _tooltip2 = _interopRequireDefault(_tooltip);

__webpack_require__(3);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adds all components as one item to the jQuery
 * namespace.
 *
 * @since 1.0.0
 *
 * @param {String} component Framework component ID.
 * @param {Object} options   Options for component.
 */
_jquery2.default.fn.frontstreet = function (component, options) {
  return this.each(function () {
    switch (component) {
      case 'background':
        return new _background2.default(this, options);
      case 'mobile-menu':
        return new _mobileMenu2.default(this, options);
      case 'menu':
        return new _menu2.default(this, options);
      case 'tabs':
        return new _tabs2.default(this, options);
      case 'toggle':
        return new _toggle2.default(this, options);
      case 'tooltip':
        return new _tooltip2.default(this, options);
    }
  });
};

var $document = _utils.dom.$document,
    $window = _utils.dom.$window;


$document.ready(function ($) {
  /**
   * Binds the default `menu` component.
   *
   * @since 1.0.0
   */
  $('.fs-menu').frontstreet('menu');

  /**
   * Adds no-click functionaltiy to any link by
   * adding class "no-click".
   *
   * @since 1.0.0
   *
   * @param {Event} event Event interface.
   */
  $('a.no-click').on('click', function (event) {
    event.preventDefault();
  });

  /**
   * Adds no-click functionaltiy to any link directly
   * within an li with class `no-click`.
   *
   * Note: This is mainly here to accmodate interfaces
   * like WordPress which allow building menus, but only
   * allow adding CSS classes to the menu list items.
   *
   * @since 1.0.0
   *
   * @param {Event} event Event interface.
   */
  $('li.no-click').find('a:first').on('click', function (event) {
    event.preventDefault();
  });

  /**
   * Binds the default `tabs` component.
   *
   * @since 1.0.0
   */
  $('.fs-tabs').frontstreet('tabs');

  /**
   * Binds the default `toggle` component.
   *
   * @since 1.0.0
   */
  $('.fs-toggle').frontstreet('toggle');

  /**
   * Binds the default `tooltip` component.
   *
   * @since 1.0.0
   */
  $('.fs-tooltip-trigger').frontstreet('tooltip');
});

$window.on('load', function () {
  /**
   * Self-invokes the background slider of the
   * `background` component.
   *
   * @since 1.0.0
   */
  (0, _jquery2.default)('.fs-bg-slider').frontstreet('background', { type: 'slider' });

  /**
   * Self-invokes the parallax effect of the
   * `background` component.
   *
   * @since 1.0.0
   */
  (0, _jquery2.default)('.fs-bg-parallax').frontstreet('background', { type: 'parallax' });
});

/***/ })
/******/ ]);