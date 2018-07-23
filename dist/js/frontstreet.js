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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/js/frontstreet.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/js/blocks/background.js":
/*!**************************************!*\
  !*** ../src/js/blocks/background.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../src/js/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
   * Initialize the `background` block on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Block options.
   */
  function Background(element, options) {
    _classCallCheck(this, Background);

    var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var settings = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.defaults, options);
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
        var $img = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
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
      var $window = _utils__WEBPACK_IMPORTED_MODULE_1__["dom"].$window;
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
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isMobile"])(true)) {
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
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isMobile"])(true)) {
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
      var $window = _utils__WEBPACK_IMPORTED_MODULE_1__["dom"].$window;


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

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "../src/js/blocks/menu.js":
/*!********************************!*\
  !*** ../src/js/blocks/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../src/js/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
   * Initialize the `menu` block on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Block options.
   */
  function Menu(element, options) {
    _classCallCheck(this, Menu);

    var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);

    this.settings = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(this.defaults, options);

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
      var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      flyout($trigger); // Determine and adds class for flyout direction.
      show($trigger);
    }).on('mouseleave', function () {
      hide(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    }).find('> a').append('<span class="sub-indicator"></span>');

    // Adds CSS classes to each level of the menu, 1-3.
    $menu.children('li').each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('level-1').children('ul').children('li').each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('level-2').children('ul').children('li').each(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('level-3');
        });
      });
    });

    // Add mobile touch support.
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isMobile"])()) {
      // Tap anywhere on iOS to unfocus a submenu.
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').css('cursor', 'pointer').on('click', jquery__WEBPACK_IMPORTED_MODULE_0___default.a.noop);
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
      var $body = _utils__WEBPACK_IMPORTED_MODULE_1__["dom"].$body;

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
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() - location <= space) {
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
     * @return {string} Current menu level, `level-1`, `level-2` or `level-3`.
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

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "../src/js/blocks/mobile-menu.js":
/*!***************************************!*\
  !*** ../src/js/blocks/mobile-menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
   * Initialize the `mobile-menu` block on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Block options (currently not used).
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
    }).append('<span class="sub-indicator"></span>');

    $triggers.find('ul').prepend('<li><a href="#" class="menu-btn back"><span class="sub-indicator"></span></a></li>').find('.back').on('click.fs.mobile-menu-back', function (event) {
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

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "../src/js/blocks/modal.js":
/*!*********************************!*\
  !*** ../src/js/blocks/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../src/js/utils.js");



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
/* harmony default export */ __webpack_exports__["default"] = ((function ($) {
  if (!$.fn.magnificPopup) {
    return;
  }

  var $document = _utils__WEBPACK_IMPORTED_MODULE_1__["dom"].$document;


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
})(jquery__WEBPACK_IMPORTED_MODULE_0___default.a));

/***/ }),

/***/ "../src/js/blocks/slider.js":
/*!**********************************!*\
  !*** ../src/js/blocks/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../src/js/utils.js");



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

/* harmony default export */ __webpack_exports__["default"] = ((function ($) {
  if (!$.fn.owlCarousel) {
    return;
  }

  var $window = _utils__WEBPACK_IMPORTED_MODULE_1__["dom"].$window,
      $body = _utils__WEBPACK_IMPORTED_MODULE_1__["dom"].$body;


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
})(jquery__WEBPACK_IMPORTED_MODULE_0___default.a));

/***/ }),

/***/ "../src/js/blocks/tabs.js":
/*!********************************!*\
  !*** ../src/js/blocks/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../src/js/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/**
 * Adds tabs block functionality, which allows
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
   * Initialize the `tabs` block on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Block options (currently not used).
   */
  function Tabs(element, options) {
    _classCallCheck(this, Tabs);

    var $tabs = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var settings = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.defaults, options);
    var $window = _utils__WEBPACK_IMPORTED_MODULE_1__["dom"].$window;


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
      var $pane = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

      if ($pane.hasClass('active')) {
        $pane.attr('aria-expanded', true);
      } else {
        $pane.attr('aria-expanded', false);
      }
    });

    // Toggle tab content.
    $tabs.find(settings.navSelector).find('a').on('click', function (event) {
      event.preventDefault();
      show($tabs, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), settings);
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
     * @param {Object} settings Block settings.
     */
    value: function show($tabs, $trigger, settings) {
      var $nav = $trigger.closest(settings.navSelector);
      var target = $trigger.attr('href').split('#')[1];

      $nav.find('li').removeClass('active');

      $trigger.closest('li').addClass('active');

      $tabs.find('.tab-pane').attr('aria-expanded', false).removeClass('in').hide().removeClass('fade');

      $tabs.find('#' + target).attr('aria-expanded', true).addClass('fade').show(0, function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('in');
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
        var $pane = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
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
     * @param {Object} settings Block settings.
     */

  }, {
    key: 'deepLink',
    value: function deepLink($tabs, settings) {
      var hash = document.location.hash;

      if (hash && -1 != hash.indexOf('tab_')) {
        hash = hash.replace('tab_', '');

        this.show($tabs, $tabs.find('a[href="' + hash + '"] '), settings);

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
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

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "../src/js/blocks/toggle.js":
/*!**********************************!*\
  !*** ../src/js/blocks/toggle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Adds toggles block functionality, which allows
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
   * Initialize the `tabs` block on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Block options.
   */
  function Toggle(element, options) {
    _classCallCheck(this, Toggle);

    var $toggle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var settings = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.defaults, options);
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

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).blur();

      if ($toggle.hasClass('toggle-expanded')) {
        // Toggle is open; so close it.
        close($toggle, settings.speed);
      } else {
        if ($group && settings.accordion) {
          $group.find('.fs-toggle').each(function () {
            close(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), settings.speed);
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
     * @param {number} speed   Animation speed in milliseconds.
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
     * @param {number} speed   Animation speed in milliseconds.
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

/* harmony default export */ __webpack_exports__["default"] = (Toggle);

/***/ }),

/***/ "../src/js/blocks/tooltip.js":
/*!***********************************!*\
  !*** ../src/js/blocks/tooltip.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Adds tooltip block functionality.
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
   * Initialize the `tooltip` block on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Block options.
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
    this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    this.settings = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.defaults, this.$element.data(), options);
    this.$viewport = this.settings.viewport && jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(this.settings.viewport) ? this.settings.viewport.call(this, this.$element) : this.settings.viewport.selector || this.settings.viewport);
    this.inState = { click: false, hover: false, focus: false };

    this.$element.on('mouseenter.tooltip', false, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.proxy(this.enter, this));
    this.$element.on('mouseleave.tooltip', false, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.proxy(this.leave, this));

    this.$element.on('focusin.tooltip', false, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.proxy(this.enter, this));
    this.$element.on('focusout.tooltip', false, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.proxy(this.leave, this));

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

      this._settings && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this._settings, function (key, value) {
        if (value != this.defaults[key]) {
          settings[key] = value;
        }
      });

      return settings;
    }
  }, {
    key: 'enter',
    value: function enter(obj) {
      var self = obj instanceof this.constructor ? obj : jquery__WEBPACK_IMPORTED_MODULE_0___default()(obj.currentTarget).data('fs.tooltip');

      if (!self) {
        self = new this.constructor(obj.currentTarget, this.getDelegateSettings());
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(obj.currentTarget).data('fs.tooltip', self);
      }

      if (obj instanceof jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event) {
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
      var self = obj instanceof this.constructor ? obj : jquery__WEBPACK_IMPORTED_MODULE_0___default()(obj.currentTarget).data('fs.tooltip');

      if (!self) {
        self = new this.constructor(obj.currentTarget, this.getDelegateSettings());
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(obj.currentTarget).data('fs.tooltip', self);
      }

      if (obj instanceof jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event) {
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
      var e = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('show.fs.tooltip');

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);

        var inDom = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);

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
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.offset.setOffset($tip[0], jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
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
          $tip = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$tip),
          event = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('hide.fs.tooltip');

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
        elRect = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, elRect, {
          width: elRect.right - elRect.left,
          height: elRect.bottom - elRect.top
        });
      }

      var isSvg = window.SVGElement && el instanceof window.SVGElement,
          elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset(),
          scroll = {
        scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
      },
          outerDims = isBody ? { width: jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width(), height: jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() } : null;

      return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, elRect, scroll, outerDims, elOffset);
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
        this.$tip = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.settings.template);

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
        self = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).data('fs.tooltip');

        if (!self) {
          self = new this.constructor(event.currentTarget, this.getDelegateSettings());
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).data('fs.tooltip', self);
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

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "../src/js/frontstreet.js":
/*!********************************!*\
  !*** ../src/js/frontstreet.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../src/js/utils.js");
/* harmony import */ var _blocks_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/background */ "../src/js/blocks/background.js");
/* harmony import */ var _blocks_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/menu */ "../src/js/blocks/menu.js");
/* harmony import */ var _blocks_mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/mobile-menu */ "../src/js/blocks/mobile-menu.js");
/* harmony import */ var _blocks_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/tabs */ "../src/js/blocks/tabs.js");
/* harmony import */ var _blocks_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/toggle */ "../src/js/blocks/toggle.js");
/* harmony import */ var _blocks_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/tooltip */ "../src/js/blocks/tooltip.js");
/* harmony import */ var _blocks_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/modal */ "../src/js/blocks/modal.js");
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/slider */ "../src/js/blocks/slider.js");











/**
 * Add blocks to the jQuery namespace.
 *
 * Note: This doesn't include blocks meant to
 * implement optional third-party plugins, Owl
 * Carousel and Magnific Popup.
 *
 * @since 1.0.0
 *
 * @param {string} block   Framework block ID.
 * @param {Object} options Options for block.
 */
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.frontstreet = function (block, options) {
  return this.each(function () {
    switch (block) {
      case 'background':
        return new _blocks_background__WEBPACK_IMPORTED_MODULE_2__["default"](this, options);
      case 'mobile-menu':
        return new _blocks_mobile_menu__WEBPACK_IMPORTED_MODULE_4__["default"](this, options);
      case 'menu':
        return new _blocks_menu__WEBPACK_IMPORTED_MODULE_3__["default"](this, options);
      case 'tabs':
        return new _blocks_tabs__WEBPACK_IMPORTED_MODULE_5__["default"](this, options);
      case 'toggle':
        return new _blocks_toggle__WEBPACK_IMPORTED_MODULE_6__["default"](this, options);
      case 'tooltip':
        return new _blocks_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"](this, options);
    }
  });
};

var $document = _utils__WEBPACK_IMPORTED_MODULE_1__["dom"].$document,
    $window = _utils__WEBPACK_IMPORTED_MODULE_1__["dom"].$window;


$document.ready(function ($) {
  /**
   * Binds the default `menu` block.
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
   * Binds the default `tabs` block.
   *
   * @since 1.0.0
   */
  $('.fs-tabs').frontstreet('tabs');

  /**
   * Binds the default `toggle` block.
   *
   * @since 1.0.0
   */
  $('.fs-toggle').frontstreet('toggle');

  /**
   * Binds the default `tooltip` block.
   *
   * @since 1.0.0
   */
  $('.fs-tooltip-trigger').frontstreet('tooltip');
});

$window.on('load', function () {
  /**
   * Self-invokes the background slider of the
   * `background` block.
   *
   * @since 1.0.0
   */
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fs-bg-slider').frontstreet('background', { type: 'slider' });

  /**
   * Self-invokes the parallax effect of the
   * `background` block.
   *
   * @since 1.0.0
   */
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fs-bg-parallax').frontstreet('background', { type: 'parallax' });
});

/***/ }),

/***/ "../src/js/utils.js":
/*!**************************!*\
  !*** ../src/js/utils.js ***!
  \**************************/
/*! exports provided: dom, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Store and cache re-usable DOM elements.
 *
 * @since 1.0.0
 *
 * @var {Object}
 */
var dom = {
  $window: jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),
  $document: jquery__WEBPACK_IMPORTED_MODULE_0___default()(document),
  $body: jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
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
    var $window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);

    if ($window.width() < 992 || $window.height() < 500) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3MvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy9tZW51LmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL21vYmlsZS1tZW51LmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL21vZGFsLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy90YWJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy90b29sdGlwLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvZnJvbnRzdHJlZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiZWxlbWVudCIsIm9wdGlvbnMiLCIkZWxlbWVudCIsIiQiLCJzZXR0aW5ncyIsImV4dGVuZCIsImRlZmF1bHRzIiwiJHNlY3Rpb24iLCJjbG9zZXN0Iiwic2VjdGlvbiIsInNsaWRlciIsImJpbmQiLCJwYXJhbGxheCIsInBhcmFsbGF4Q2FsYyIsInR5cGUiLCIkc2xpZGVyIiwiYXV0b3BsYXkiLCJkYXRhIiwiZmluZCIsImVhY2giLCIkaW1nIiwiYWRkQ2xhc3MiLCJwcmVwZW5kIiwiZmFkZU91dCIsInNldEludGVydmFsIiwiJGxhc3RJbWciLCJyZW1vdmVDbGFzcyIsInNldFRpbWVvdXQiLCJwcmVwZW5kVG8iLCIkZmlndXJlIiwiJHdpbmRvdyIsImlzTW9iaWxlIiwiY3NzIiwib24iLCJpbWdIZWlnaHQiLCJoZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJwYXJhbGxheERpc3QiLCJib3R0b20iLCJvZmZzZXQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpbmRvd0JvdHRvbSIsInBlcmNlbnRTY3JvbGxlZCIsIk1hdGgiLCJyb3VuZCIsIk1lbnUiLCIkbWVudSIsImRlbGF5IiwidGltZXIiLCJmbHlvdXQiLCJzaG93IiwiaGlkZSIsImhhcyIsImRyb3BEb3duU2VsZWN0b3IiLCIkdHJpZ2dlciIsImFwcGVuZCIsImNoaWxkcmVuIiwibm9vcCIsImhhc0NsYXNzIiwiJGJvZHkiLCIkZmx5b3V0IiwibG9jYXRpb24iLCJzcGFjZSIsImxlbmd0aCIsIndpZHRoIiwibGV2ZWwiLCJnZXRMZXZlbCIsIiRzaWJsaW5ncyIsInNpYmxpbmdzIiwiJHRhcmdldCIsImNsZWFyVGltZW91dCIsIk1vYmlsZU1lbnUiLCIkdHJpZ2dlcnMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcCIsImZuIiwibWFnbmlmaWNQb3B1cCIsIiRkb2N1bWVudCIsInJlYWR5IiwibWFpbkNsYXNzIiwicmVtb3ZhbERlbGF5IiwiY29uZmlnIiwiYW5pbWF0aW9uIiwibW9iaWxlIiwibW9iaWxlSWZyYW1lIiwibW9iaWxlR2FsbGVyeSIsImVycm9yIiwiY2xvc2UiLCJsb2FkaW5nIiwiY291bnRlciIsIm5leHQiLCJwcmV2aW91cyIsImNsb3NlTWFya3VwIiwiZnNNb2RhbCIsInRDbG9zZSIsInRMb2FkaW5nIiwiZ2FsbGVyeSIsInRQcmV2IiwidE5leHQiLCJ0Q291bnRlciIsImltYWdlIiwidEVycm9yIiwiYWpheCIsImFsaWduVG9wIiwic2hvd0Nsb3NlQnRuIiwiY2FsbGJhY2tzIiwib3BlbiIsImF0dHIiLCJiZWZvcmVDbG9zZSIsImNsb3NlQnRuSW5zaWRlIiwiaW5zdGFuY2UiLCJ3cmFwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmb2N1cyIsIiRnYWxsZXJ5IiwiY2xhc3NlcyIsInNlbGVjdG9yIiwiam9pbiIsIiRsaW5rIiwibGlua0NsYXNzIiwiZGlzYWJsZU9uIiwiZW5hYmxlZCIsImN1cnNvciIsImRlbGVnYXRlIiwiaWZyYW1lIiwibWFya3VwIiwibWFya3VwUGFyc2UiLCJ0ZW1wbGF0ZSIsInZhbHVlcyIsIml0ZW0iLCJ0aXRsZSIsImVsIiwib3dsQ2Fyb3VzZWwiLCIkd3JhcCIsIml0ZW1zIiwicGFyc2VJbnQiLCJzcGVlZCIsImF1dG9wbGF5VGltZW91dCIsIm1hcmdpbiIsInBhdXNlIiwibG9vcCIsImFuaW1hdGUiLCJhdXRvV2lkdGgiLCJjZW50ZXIiLCIkbmF2IiwiJGFycm93cyIsIm5hdkNvdW50ZXIiLCJ0aW1lb3V0IiwibmF2IiwiZG90cyIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJhbmltYXRlT3V0IiwicnRsIiwib25Jbml0aWFsaXplZCIsIm9uQ2hhbmdlZCIsImluZGV4IiwicGFnZSIsImNvdW50IiwiJGN1cnJlbnQiLCJ0cmlnZ2VyIiwiVGFicyIsIiR0YWJzIiwiZGVlcExpbmsiLCJtYXRjaEhlaWdodCIsIiRwYW5lIiwibmF2U2VsZWN0b3IiLCJ0YXJnZXQiLCJzcGxpdCIsInRhbGxlc3QiLCJjdXJyZW50SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJoYXNoIiwiZG9jdW1lbnQiLCJpbmRleE9mIiwicmVwbGFjZSIsIlRvZ2dsZSIsIiR0b2dnbGUiLCIkZ3JvdXAiLCJwYXJlbnRzIiwiYWNjb3JkaW9uIiwiYmx1ciIsInN0b3AiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwiVG9vbHRpcCIsImhvdmVyU3RhdGUiLCJpblN0YXRlIiwiJHZpZXdwb3J0Iiwidmlld3BvcnQiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImNsaWNrIiwiaG92ZXIiLCJwcm94eSIsImVudGVyIiwibGVhdmUiLCJnZXREZWxlZ2F0ZVNldHRpbmdzIiwiaXNJblN0YXRlVHJ1ZSIsImFwcGx5UGxhY2VtZW50Iiwic2V0Q29udGVudCIsImhhc0NvbnRlbnQiLCJnZXRQb3NpdGlvbiIsImdldENhbGN1bGF0ZWRPZmZzZXQiLCJnZXRUaXRsZSIsImdldFVJRCIsInRpcCIsImFycm93IiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJ0b2dnbGUiLCJkZXN0cm95IiwiX3NldHRpbmdzIiwia2V5IiwidmFsdWUiLCJvYmoiLCJzZWxmIiwiY29uc3RydWN0b3IiLCJjdXJyZW50VGFyZ2V0IiwiRXZlbnQiLCJpbkRvbSIsImNvbnRhaW5zIiwib3duZXJEb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImlzRGVmYXVsdFByZXZlbnRlZCIsInRoYXQiLCIkdGlwIiwidGlwSWQiLCJwbGFjZW1lbnQiLCJhdXRvVG9rZW4iLCJhdXRvUGxhY2UiLCJ0ZXN0IiwiZGV0YWNoIiwibGVmdCIsImRpc3BsYXkiLCJjb250YWluZXIiLCJhcHBlbmRUbyIsImluc2VydEFmdGVyIiwicG9zIiwiYWN0dWFsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImFjdHVhbEhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9yZ1BsYWNlbWVudCIsInZpZXdwb3J0RGltIiwiY2FsY3VsYXRlZE9mZnNldCIsImNvbXBsZXRlIiwicHJldkhvdmVyU3RhdGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwcm9wcyIsImNhbGxiYWNrIiwicmVtb3ZlQXR0ciIsImlzQm9keSIsInRhZ05hbWUiLCJlbFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyaWdodCIsImlzU3ZnIiwiU1ZHRWxlbWVudCIsImVsT2Zmc2V0Iiwic2Nyb2xsIiwiYm9keSIsIm91dGVyRGltcyIsIiRlbCIsInByZWZpeCIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiRXJyb3IiLCIkYXJyb3ciLCJvZmYiLCJyZW1vdmVEYXRhIiwicGFkZGluZyIsImZyb250c3RyZWV0IiwiYmxvY2siLCJkb20iLCJ2aWV3cG9ydENoZWNrIiwiYWdlbnRDaGVjayIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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IG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vc3JjL2pzL2Zyb250c3RyZWV0LmpzXCIpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGlzTW9iaWxlLCBkb20gfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBzZWN0aW9uXG4gKiBwYXJhbGxheCBiYWNrZ3JvdW5kIGltYWdlIGVmZmVjdHMgYW5kIGJhY2tncm91bmRcbiAqIHNsaWRlcnMuXG4gKlxuICogQnkgZGVmYXVsdCBhbGwgSFRNTCBlbGVtZW50cyB3aXRoIGNsYXNzIGBmcy1iZy1zbGlkZXJgXG4gKiBhbmQgYGZzLWJnLXBhcmFsbGF4YCBhcmUgYXV0b21hdGljYWxseSBiaW5kZWRcbiAqIHdpdGggdGhlaXIgcmVzcGVjdGl2ZSBlZmZlY3RzLlxuICpcbiAqIEBzdW1tYXJ5ICBCYWNrZ3JvdW5kIEVmZmVjdHNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBiYWNrZ3JvdW5kLmpzXG4gKi9cbmNsYXNzIEJhY2tncm91bmQge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYGJhY2tncm91bmRgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICBjb25zdCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBjb25zdCAkc2VjdGlvbiA9ICRlbGVtZW50LmNsb3Nlc3Qoc2V0dGluZ3Muc2VjdGlvbik7XG5cbiAgICB0aGlzLnNsaWRlciA9IHRoaXMuc2xpZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJhbGxheCA9IHRoaXMucGFyYWxsYXguYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhcmFsbGF4Q2FsYyA9IHRoaXMucGFyYWxsYXhDYWxjLmJpbmQodGhpcyk7XG5cbiAgICBzd2l0Y2ggKHNldHRpbmdzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NsaWRlcic6XG4gICAgICAgIHRoaXMuc2xpZGVyKCRlbGVtZW50LCAkc2VjdGlvbiwgc2V0dGluZ3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BhcmFsbGF4JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMucGFyYWxsYXgoJGVsZW1lbnQsICRzZWN0aW9uLCBzZXR0aW5ncyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgYmFja2dyb3VuZCBvcHRpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAncGFyYWxsYXgnLFxuICAgICAgYXV0b3BsYXk6IDQwMDAsXG4gICAgICBzZWN0aW9uOiAnLmZzLXNlY3Rpb24sIC5oYXMtYmctc2xpZGVyLCAuaGFzLWJnLXBhcmFsbGF4LCAuaGFzLWJnLXZpZGVvJ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgYSBiYWNrZ3JvdW5kIHNsaWRlci5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWxlbWVudCBUaGUgYmFja2dyb3VuZCBzbGlkZXIgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9ICRzZWN0aW9uIFNlY3Rpb24gY29udGFpbmluZyBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3MgQ3VycmVudCBzZXR0aW5ncy5cbiAgICovXG4gIHNsaWRlcigkc2xpZGVyLCAkc2VjdGlvbiwgc2V0dGluZ3MpIHtcbiAgICB2YXIgeyBhdXRvcGxheSB9ID0gc2V0dGluZ3M7XG5cbiAgICBpZiAoJHNsaWRlci5kYXRhKCdhdXRvcGxheScpICYmICRzbGlkZXIuZGF0YSgnYXV0b3BsYXknKSA+PSAxMDAwKSB7XG4gICAgICBhdXRvcGxheSA9ICRzbGlkZXIuZGF0YSgnYXV0b3BsYXknKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJldmVyc2Ugb3JkZXIgb2YgaW1hZ2VzIHNvIHRoZSB0b3Agb2Ygc3RhY2tcbiAgICAgKiB3aWxsIGJlIHRoZSBmaXJzdCBpbWFnZS5cbiAgICAgKi9cbiAgICAkc2xpZGVyLmZpbmQoJ2ltZycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkaW1nID0gJCh0aGlzKTtcbiAgICAgICRpbWcuYWRkQ2xhc3MoJ2ZhZGUgaW4nKTtcbiAgICAgICRzbGlkZXIucHJlcGVuZCgkaW1nKTtcbiAgICB9KTtcblxuICAgICRzbGlkZXIuYWRkQ2xhc3MoJ2luJyk7XG5cbiAgICAkc2VjdGlvbi5maW5kKCcuZnMtbG9hZGVyJykuZmFkZU91dCgpO1xuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkbGFzdEltZyA9ICRzbGlkZXIuZmluZCgnaW1nOmxhc3QtY2hpbGQnKTtcblxuICAgICAgJGxhc3RJbWcucmVtb3ZlQ2xhc3MoJ2luJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICRsYXN0SW1nLnByZXBlbmRUbygkc2xpZGVyKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgIH0sIGF1dG9wbGF5KTtcbiAgICB9LCBhdXRvcGxheSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgYSBiYWNrZ3JvdW5kIGltYWdlIHBhcmFsbGF4IGVmZmVjdC5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWxlbWVudCBUaGUgYmFja2dyb3VuZCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHNlY3Rpb24gU2VjdGlvbiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5ncyBDdXJyZW50IHNldHRpbmdzLlxuICAgKi9cbiAgcGFyYWxsYXgoJGZpZ3VyZSwgJHNlY3Rpb24sIHNldHRpbmdzKSB7XG4gICAgY29uc3QgeyAkd2luZG93IH0gPSBkb207XG4gICAgY29uc3QgeyBwYXJhbGxheENhbGMgfSA9IHRoaXM7XG4gICAgY29uc3QgJGltZyA9ICRmaWd1cmUuZmluZCgnaW1nLCAuaW1nJyk7XG4gICAgdmFyIHBhcmFsbGF4ID0gbnVsbDtcblxuICAgIC8qXG4gICAgICogV2lsbCBvbmx5IGNhbGN1bGF0ZSBpZiBhbGwgYXJlIHRydWU6XG4gICAgICpcbiAgICAgKiAxLiBOb3QgYSB0cnVlIG1vYmlsZSBkZXZpY2UgKGxvb2tpbmcgYXQgdXNlciBhZ2VudCkuXG4gICAgICogMi4gV2luZG93IGlzIHRhbGxlciB0aGFuIDUwMHB4LlxuICAgICAqIDMuIFdpbmRvdyBpcyB3aWRlciB0aGFuIDk5MnB4LlxuICAgICAqL1xuICAgIGlmICghaXNNb2JpbGUodHJ1ZSkpIHtcbiAgICAgIC8vIFBhc3NpbmcgYHRydWVgIGRlbm90ZXMgY2hlY2tpbmcgdmlld3BvcnQgc2l6ZS5cbiAgICAgIHBhcmFsbGF4ID0gcGFyYWxsYXhDYWxjKCRmaWd1cmUsICRpbWcpO1xuXG4gICAgICBpZiAocGFyYWxsYXgpIHtcbiAgICAgICAgJGltZy5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzRCgtNTAlLCcgKyBwYXJhbGxheCArICdweCwgMCknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkZmlndXJlLmFkZENsYXNzKCdpbicpO1xuXG4gICAgJHNlY3Rpb24uZmluZCgnLmZzLWxvYWRlcicpLmZhZGVPdXQoKTtcblxuICAgIC8vIEFkanVzdCBwYXJhbGxheCBwb3NpdGlvbmluZyBpZiB3aW5kb3cgaXMgcmVzaXplZC5cbiAgICAkd2luZG93Lm9uKCdzY3JvbGwgcmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAvKlxuICAgICAgICogV2lsbCBvbmx5IGNhbGN1bGF0ZSBpZiBhbGwgYXJlIHRydWU6XG4gICAgICAgKlxuICAgICAgICogMS4gTm90IGEgdHJ1ZSBtb2JpbGUgZGV2aWNlIChsb29raW5nIGF0IHVzZXIgYWdlbnQpLlxuICAgICAgICogMi4gV2luZG93IGlzIHRhbGxlciB0aGFuIDUwMHB4LlxuICAgICAgICogMy4gV2luZG93IGlzIHdpZGVyIHRoYW4gOTkycHguXG4gICAgICAgKlxuICAgICAgICogQHNlZSBpc01vYmlsZSgpIGZ1bmN0aW9uIGluIGluaXQuanNcbiAgICAgICAqL1xuICAgICAgaWYgKCFpc01vYmlsZSh0cnVlKSkge1xuICAgICAgICAvLyBQYXNzaW5nIGB0cnVlYCBkZW5vdGVzIGNoZWNraW5nIHZpZXdwb3J0IHNpemUuXG4gICAgICAgIHBhcmFsbGF4ID0gcGFyYWxsYXhDYWxjKCRmaWd1cmUsICRpbWcpO1xuXG4gICAgICAgIGlmIChwYXJhbGxheCkge1xuICAgICAgICAgICRpbWcuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM0QoLTUwJSwnICsgcGFyYWxsYXggKyAncHgsIDApJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgcGFyYWxsYXggcG9zaXRpb24gb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZmlndXJlIFRoZSBiYWNrZ3JvdW5kIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkaW1nICAgIEltYWdlIHRvIHBvc2l0aW9uIHdpdGhpbiBlbGVtZW50LlxuICAgKi9cbiAgcGFyYWxsYXhDYWxjKCRmaWd1cmUsICRpbWcpIHtcbiAgICBjb25zdCB7ICR3aW5kb3cgfSA9IGRvbTtcblxuICAgIHZhciBpbWdIZWlnaHQgPSAkaW1nLmhlaWdodCgpLFxuICAgICAgY29udGFpbmVySGVpZ2h0ID0gJGZpZ3VyZS5oZWlnaHQoKSA+IDAgPyAkZmlndXJlLmhlaWdodCgpIDogNTAwLFxuICAgICAgcGFyYWxsYXhEaXN0ID0gaW1nSGVpZ2h0IC0gY29udGFpbmVySGVpZ2h0LFxuICAgICAgYm90dG9tID0gJGZpZ3VyZS5vZmZzZXQoKS50b3AgKyBjb250YWluZXJIZWlnaHQsXG4gICAgICB0b3AgPSAkZmlndXJlLm9mZnNldCgpLnRvcCxcbiAgICAgIHNjcm9sbFRvcCA9ICR3aW5kb3cuc2Nyb2xsVG9wKCksXG4gICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQsIC8vIFVzaW5nIGB3aW5kb3dgLCBOT1QgYCR3aW5kb3dgOyB3ZSBuZWVkIGEgZnJlc2ggY2FsY3VsYXRpb24gaGVyZS5cbiAgICAgIHdpbmRvd0JvdHRvbSA9IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodCxcbiAgICAgIHBlcmNlbnRTY3JvbGxlZCA9ICh3aW5kb3dCb3R0b20gLSB0b3ApIC8gKGNvbnRhaW5lckhlaWdodCArIHdpbmRvd0hlaWdodCk7XG5cbiAgICBpZiAoYm90dG9tID4gc2Nyb2xsVG9wICYmIHRvcCA8IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQocGFyYWxsYXhEaXN0ICogcGVyY2VudFNjcm9sbGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvbSwgaXNNb2JpbGUgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBkcm9wZG93blxuICogbWVudXMuXG4gKlxuICogQnkgZGVmYXVsdCBhbGwgSFRNTCBlbGVtZW50cyB3aXRoIGNsYXNzIGBmcy1tZW51YFxuICogYXJlIGF1dG9tYXRpY2FsbHkgYmluZGVkLlxuICpcbiAqIEFsc28sIG1lbnUgaXRlbXMgd2l0aCBjbGFzcyAnbm8tY2xpY2snIGFyZSBzZXR1cCB0b1xuICogcHJldmVudCB0aGUgZGVmYXVsdCBjbGljayBiZWhhdmlvci5cbiAqXG4gKiBAc3VtbWFyeSAgRHJvcGRvd24gTWVudXNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBtZW51LmpzXG4gKi9cbmNsYXNzIE1lbnUge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYG1lbnVgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRtZW51ID0gJChlbGVtZW50KTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmICgkbWVudS5kYXRhKCdkZWxheScpIHx8IDAgPT09ICRtZW51LmRhdGEoJ2RlbGF5JykpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MuZGVsYXkgPSAkbWVudS5kYXRhKCdkZWxheScpO1xuICAgIH1cblxuICAgIHRoaXMudGltZXIgPSB7fTsgLy8gS2VlcCB0cmFjayBvZiBkZWxheWVkIHRyYW5zaXRpb25zLlxuICAgIHRoaXMuZmx5b3V0ID0gdGhpcy5mbHlvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3cgPSB0aGlzLnNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGUgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTtcblxuICAgIGNvbnN0IHsgZmx5b3V0LCBzaG93LCBoaWRlIH0gPSB0aGlzO1xuXG4gICAgJG1lbnUucmVtb3ZlQ2xhc3MoJ25vLWpzJyk7XG5cbiAgICAvKlxuICAgICAqIFRyaWdnZXJzIGRyb3Bkb3duIHNob3cgYW5kIGhpZGUsIHVwb24gbW91c2VlbnRlclxuICAgICAqIGFuZCBtb3VzZWxlYXZlLlxuICAgICAqL1xuICAgICRtZW51XG4gICAgICAuZmluZCgnbGknKVxuICAgICAgLmhhcyh0aGlzLnNldHRpbmdzLmRyb3BEb3duU2VsZWN0b3IpXG4gICAgICAuYWRkQ2xhc3MoJ21lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKVxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICR0cmlnZ2VyID0gJCh0aGlzKTtcbiAgICAgICAgZmx5b3V0KCR0cmlnZ2VyKTsgLy8gRGV0ZXJtaW5lIGFuZCBhZGRzIGNsYXNzIGZvciBmbHlvdXQgZGlyZWN0aW9uLlxuICAgICAgICBzaG93KCR0cmlnZ2VyKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaGlkZSgkKHRoaXMpKTtcbiAgICAgIH0pXG4gICAgICAuZmluZCgnPiBhJylcbiAgICAgIC5hcHBlbmQoJzxzcGFuIGNsYXNzPVwic3ViLWluZGljYXRvclwiPjwvc3Bhbj4nKTtcblxuICAgIC8vIEFkZHMgQ1NTIGNsYXNzZXMgdG8gZWFjaCBsZXZlbCBvZiB0aGUgbWVudSwgMS0zLlxuICAgICRtZW51LmNoaWxkcmVuKCdsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5hZGRDbGFzcygnbGV2ZWwtMScpXG4gICAgICAgIC5jaGlsZHJlbigndWwnKVxuICAgICAgICAuY2hpbGRyZW4oJ2xpJylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdsZXZlbC0yJylcbiAgICAgICAgICAgIC5jaGlsZHJlbigndWwnKVxuICAgICAgICAgICAgLmNoaWxkcmVuKCdsaScpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGV2ZWwtMycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIG1vYmlsZSB0b3VjaCBzdXBwb3J0LlxuICAgIGlmIChpc01vYmlsZSgpKSB7XG4gICAgICAvLyBUYXAgYW55d2hlcmUgb24gaU9TIHRvIHVuZm9jdXMgYSBzdWJtZW51LlxuICAgICAgJCgnaHRtbCcpXG4gICAgICAgIC5jc3MoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgICAgLm9uKCdjbGljaycsICQubm9vcCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbWVudSBvcHRpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWxheTogNTAwLFxuICAgICAgZHJvcERvd25TZWxlY3RvcjogJ3VsOm5vdCgubWVnYS1zdWItbWVudSksIC5mcy1tZWdhJ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgZGlyZWN0aW9uIHRoZSBkcm9wZG93biBtZW51IHNob3VsZFxuICAgKiBmbHlvdXQgdG93YXJkcy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBUaGUgcGFyZW50IG1lbnUgaXRlbSwgZm9yIHdoaWNoIHRoZSBkcm9wZG93biBiZWxvbmdzIHRvLlxuICAgKi9cbiAgZmx5b3V0KCR0cmlnZ2VyKSB7XG4gICAgaWYgKCEkdHJpZ2dlci5oYXNDbGFzcygnbGV2ZWwtMScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBkcm9wRG93blNlbGVjdG9yIH0gPSB0aGlzLnNldHRpbmdzO1xuICAgIGNvbnN0IHsgJGJvZHkgfSA9IGRvbTtcbiAgICBjb25zdCAkZmx5b3V0ID0gJHRyaWdnZXIuY2hpbGRyZW4oZHJvcERvd25TZWxlY3Rvcik7XG4gICAgdmFyIGxvY2F0aW9uID0gJHRyaWdnZXIub2Zmc2V0KCk7XG4gICAgdmFyIHNwYWNlID0gMjAwO1xuXG4gICAgaWYgKCRib2R5Lmhhc0NsYXNzKCdydGwnKSkge1xuICAgICAgbG9jYXRpb24gPSBsb2NhdGlvblsncmlnaHQnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24gPSBsb2NhdGlvblsnbGVmdCddO1xuICAgIH1cblxuICAgIGlmICgkZmx5b3V0LmZpbmQoJy5sZXZlbC0zJykubGVuZ3RoID4gMCkge1xuICAgICAgc3BhY2UgKz0gc3BhY2U7IC8vIFNwYWNlIGRvdWJsZXMgZm9yIGxldmVsIDMuXG4gICAgfVxuXG4gICAgLy8gQ2FuJ3QgdXNlZCBjYWNoZWQgd2luZG93IGhlcmUuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIC0gbG9jYXRpb24gPD0gc3BhY2UpIHtcbiAgICAgICRmbHlvdXQuYWRkQ2xhc3MoJ3JldmVyc2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGZseW91dC5yZW1vdmVDbGFzcygncmV2ZXJzZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBhIGRyb3Bkb3duIG1lbnUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRyaWdnZXIgVGhlIHBhcmVudCBtZW51IGl0ZW0sIGZvciB3aGljaCB0aGUgZHJvcGRvd24gYmVsb25ncyB0by5cbiAgICovXG4gIHNob3coJHRyaWdnZXIpIHtcbiAgICBjb25zdCB7IGRyb3BEb3duU2VsZWN0b3IgfSA9IHRoaXMuc2V0dGluZ3M7XG4gICAgY29uc3QgbGV2ZWwgPSB0aGlzLmdldExldmVsKCR0cmlnZ2VyKTtcbiAgICBjb25zdCAkc2libGluZ3MgPSAkdHJpZ2dlci5zaWJsaW5ncygpLmZpbmQoZHJvcERvd25TZWxlY3Rvcik7XG4gICAgY29uc3QgJHRhcmdldCA9ICR0cmlnZ2VyLmNoaWxkcmVuKGRyb3BEb3duU2VsZWN0b3IpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJbbGV2ZWxdKTtcblxuICAgICRzaWJsaW5ncy5yZW1vdmVDbGFzcygnaW4nKTtcblxuICAgICR0YXJnZXQuYWRkQ2xhc3MoJ3Nob3cgZmFkZScpO1xuXG4gICAgdGhpcy50aW1lcltsZXZlbF0gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJHNpYmxpbmdzLnJlbW92ZUNsYXNzKCdzaG93IGZhZGUnKTtcbiAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2luJyk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBhIGRyb3Bkb3duIG1lbnUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRyaWdnZXIgVGhlIHBhcmVudCBtZW51IGl0ZW0sIGZvciB3aGljaCB0aGUgZHJvcGRvd24gYmVsb25ncyB0by5cbiAgICovXG4gIGhpZGUoJHRyaWdnZXIsIHNldHRpbmdzKSB7XG4gICAgY29uc3QgeyBkcm9wRG93blNlbGVjdG9yLCBkZWxheSB9ID0gdGhpcy5zZXR0aW5ncztcbiAgICBjb25zdCBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoJHRyaWdnZXIpO1xuICAgIGNvbnN0ICRmbHlvdXQgPSAkdHJpZ2dlci5jaGlsZHJlbihkcm9wRG93blNlbGVjdG9yKTtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyW2xldmVsXSk7XG5cbiAgICB0aGlzLnRpbWVyW2xldmVsXSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkZmx5b3V0LnJlbW92ZUNsYXNzKCdpbicpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkZmx5b3V0LnJlbW92ZUNsYXNzKCdzaG93IGZhZGUnKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSwgZGVsYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIGN1cnJlbnQgbGV2ZWwgb2YgdGhlIGRyb3Bkb3duIHBhcmVudFxuICAgKiBpdGVtIGJlaW5nIHRyaWdnZXJlZC5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gJHRyaWdnZXIgVGhlIHBhcmVudCBtZW51IGl0ZW0sIGZvciB3aGljaCB0aGUgZHJvcGRvd24gYmVsb25ncyB0by5cbiAgICogQHJldHVybiB7c3RyaW5nfSBDdXJyZW50IG1lbnUgbGV2ZWwsIGBsZXZlbC0xYCwgYGxldmVsLTJgIG9yIGBsZXZlbC0zYC5cbiAgICovXG4gIGdldExldmVsKCR0cmlnZ2VyKSB7XG4gICAgaWYgKCR0cmlnZ2VyLmhhc0NsYXNzKCdsZXZlbC0zJykpIHtcbiAgICAgIHJldHVybiAnbGV2ZWwtMyc7XG4gICAgfSBlbHNlIGlmICgkdHJpZ2dlci5oYXNDbGFzcygnbGV2ZWwtMicpKSB7XG4gICAgICByZXR1cm4gJ2xldmVsLTInO1xuICAgIH1cbiAgICByZXR1cm4gJ2xldmVsLTEnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCIvKipcbiAqIEFkZHMgc3VibWVudSBuYXZpZ2F0aW9uIHRvIG1vYmlsZSBtZW51cy5cbiAqXG4gKiBAc3VtbWFyeSAgTW9iaWxlIE1lbnVzXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgbW9iaWxlLW1lbnUuanNcbiAqL1xuY2xhc3MgTW9iaWxlTWVudSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgbW9iaWxlLW1lbnVgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zIChjdXJyZW50bHkgbm90IHVzZWQpLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRtZW51ID0gJChlbGVtZW50KTtcbiAgICBjb25zdCAkdHJpZ2dlcnMgPSAkbWVudS5maW5kKCdsaScpLmhhcygndWwnKTtcbiAgICBjb25zdCB7IHNob3csIGhpZGUgfSA9IHRoaXM7XG5cbiAgICAkdHJpZ2dlcnNcbiAgICAgIC5hZGRDbGFzcygnbWVudS1pdGVtLWhhcy1jaGlsZHJlbicpXG4gICAgICAuY2hpbGRyZW4oJy5tZW51LWJ0bicpXG4gICAgICAub24oJ2NsaWNrLmZzLm1vYmlsZS1tZW51JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2hvdygkKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5hcHBlbmQoJzxzcGFuIGNsYXNzPVwic3ViLWluZGljYXRvclwiPjwvc3Bhbj4nKTtcblxuICAgICR0cmlnZ2Vyc1xuICAgICAgLmZpbmQoJ3VsJylcbiAgICAgIC5wcmVwZW5kKCc8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1lbnUtYnRuIGJhY2tcIj48c3BhbiBjbGFzcz1cInN1Yi1pbmRpY2F0b3JcIj48L3NwYW4+PC9hPjwvbGk+JylcbiAgICAgIC5maW5kKCcuYmFjaycpXG4gICAgICAub24oJ2NsaWNrLmZzLm1vYmlsZS1tZW51LWJhY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoaWRlKCQodGhpcykpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICRtZW51LmhlaWdodCgkbWVudS5wcm9wKCdzY3JvbGxIZWlnaHQnKSk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhIHN1Ym1lbnUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRyaWdnZXIgUGFyZW50IG1lbnUgaXRlbSB0cmlnZ2VyaW5nIHN1Ym1lbnUuXG4gICAqL1xuICBzaG93KCR0cmlnZ2VyKSB7XG4gICAgJHRyaWdnZXJcbiAgICAgIC5jbG9zZXN0KCdsaScpXG4gICAgICAuY2hpbGRyZW4oJ3VsJylcbiAgICAgIC5hZGRDbGFzcygnb24nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIGEgc3VibWVudS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBQYXJlbnQgbWVudSBpdGVtIHRyaWdnZXJpbmcgc3VibWVudS5cbiAgICovXG4gIGhpZGUoJHRyaWdnZXIpIHtcbiAgICAkdHJpZ2dlci5jbG9zZXN0KCd1bCcpLnJlbW92ZUNsYXNzKCdvbicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIFRoaXMgZmlsZSBiaW5kcyBwcmVzZXQgaW5zdGFuY2VzIG9mIE1hZ25pZmljIFBvcHVwLlxuICpcbiAqIE1hZ25pZmljIFBvcHVwIGlzIGFuIG9wZW4gc291cmNlIGxpZ2h0Ym94IHNjcmlwdFxuICogYnkgRG1pdHJ5IFNlbWVub3YuXG4gKlxuICogQGxpbmsgaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvXG4gKlxuICogQHN1bW1hcnkgIE1vZGFsc1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIG1vZGFsLmpzXG4gKiBAcmVxdWlyZXMgbWFnbmlmaWMtcG9wdXAuanNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCQpIHtcbiAgaWYgKCEkLmZuLm1hZ25pZmljUG9wdXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7ICRkb2N1bWVudCB9ID0gZG9tO1xuXG4gICRkb2N1bWVudC5yZWFkeShmdW5jdGlvbigkKSB7XG4gICAgdmFyIG1haW5DbGFzcyA9ICdmcy1tb2RhbCc7XG4gICAgdmFyIHJlbW92YWxEZWxheSA9IDA7XG5cbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgYW5pbWF0aW9uOiAnZmFkZScsXG4gICAgICBtb2JpbGU6IDAsXG4gICAgICBtb2JpbGVJZnJhbWU6IDc2OCxcbiAgICAgIG1vYmlsZUdhbGxlcnk6IDAsXG4gICAgICBlcnJvcjogJ1RoZSBtb2RhbCBtZWRpYSBjb3VsZCBub3QgYmUgbG9hZGVkLicsXG4gICAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJyxcbiAgICAgIGNvdW50ZXI6ICclY3VyciUgb2YgJXRvdGFsJScsXG4gICAgICBuZXh0OiAnTmV4dCcsXG4gICAgICBwcmV2aW91czogJ1ByZXZpb3VzJyxcbiAgICAgIGNsb3NlTWFya3VwOlxuICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtZnAtY2xvc2UgZnMtY2xvc2UgY2xvc2UtbGlnaHQgY2xvc2UtbWRcIj4ldGl0bGUlPC9idXR0b24+J1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5mc01vZGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnID0gJC5leHRlbmQoe30sIGNvbmZpZywgd2luZG93LmZzTW9kYWwpOyAvLyBBbiBvcHRpb25hbCBjb25maWd1cmF0aW9uIG9iamVjdCB5b3UgY291bGQgZGVjbGFyZS5cbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmFuaW1hdGlvbiAmJiBjb25maWcuYW5pbWF0aW9uICE9PSAnbm9uZScpIHtcbiAgICAgIG1haW5DbGFzcyA9IGAke21haW5DbGFzc30gZnMtbW9kYWwtJHtjb25maWdbJ2FuaW1hdGlvbiddfWA7XG4gICAgICByZW1vdmFsRGVsYXkgPSAxNTA7XG4gICAgfVxuXG4gICAgJC5leHRlbmQodHJ1ZSwgJC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLCB7XG4gICAgICB0Q2xvc2U6IGNvbmZpZy5jbG9zZSxcbiAgICAgIHRMb2FkaW5nOiBgPGRpdiBjbGFzcz1cImZzLWxvYWRlclwiPjxzcGFuPiR7Y29uZmlnLmxvYWRpbmd9PC9zcGFuPjwvZGl2PmAsXG4gICAgICBnYWxsZXJ5OiB7XG4gICAgICAgIHRQcmV2OiBjb25maWcucHJldmlvdXMsXG4gICAgICAgIHROZXh0OiBjb25maWcubmV4dCxcbiAgICAgICAgdENvdW50ZXI6IGNvbmZpZy5jb3VudGVyXG4gICAgICB9LFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgdEVycm9yOiBjb25maWcuZXJyb3JcbiAgICAgIH0sXG4gICAgICBhamF4OiB7XG4gICAgICAgIHRFcnJvcjogY29uZmlnLmVycm9yXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtbW9kYWwtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgJCgnLmZzLWNvbnRlbnQtbW9kYWwtbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICBtYWluQ2xhc3M6IG1haW5DbGFzcyxcbiAgICAgIGFsaWduVG9wOiB0cnVlLFxuICAgICAgc2hvd0Nsb3NlQnRuOiBmYWxzZSxcbiAgICAgIHJlbW92YWxEZWxheTogcmVtb3ZhbERlbGF5LFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJy5tZnAtd3JhcCAuZnMtbW9kYWwnKS5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJy5tZnAtd3JhcCAuZnMtbW9kYWwnKS5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtc2VhcmNoLW1vZGFsLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgbWFpbkNsYXNzOiBtYWluQ2xhc3MgKyAnIG1mcC1zZWFyY2gnLFxuICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgY2xvc2VNYXJrdXA6IGNvbmZpZy5jbG9zZU1hcmt1cCxcbiAgICAgIHJlbW92YWxEZWxheTogcmVtb3ZhbERlbGF5LFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJy5tZnAtd3JhcCAuZnMtc2VhcmNoLW1vZGFsJykuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlLndyYXBbMF0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKCcubWZwLXNlYXJjaCAuZnMtc2VhcmNoLW1vZGFsIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0nKS5mb2N1cygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVDbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLm1mcC13cmFwIC5mcy1zZWFyY2gtbW9kYWwnKS5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtbW9kYWwtZ2FsbGVyeSwgLnRoZW1lYmx2ZC1nYWxsZXJ5JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICRnYWxsZXJ5ID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICd0aGVtZWJsdmQtbGlnaHRib3gnLFxuICAgICAgICAnZnMtY29udGVudC1tb2RhbC1saW5rJyxcbiAgICAgICAgJ2ZzLWltYWdlLW1vZGFsLWxpbmsnLFxuICAgICAgICAnZnMtaWZyYW1lLW1vZGFsLWxpbmsnXG4gICAgICBdO1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSAnLicgKyBjbGFzc2VzLmpvaW4oJywgLicpO1xuXG4gICAgICAkZ2FsbGVyeS5maW5kKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQodGhpcyk7XG4gICAgICAgIHZhciBsaW5rQ2xhc3MgPSAnJztcblxuICAgICAgICBpZiAoJGxpbmsuaGFzQ2xhc3MoJ2ZzLWNvbnRlbnQtbW9kYWwtbGluaycpKSB7XG4gICAgICAgICAgbGlua0NsYXNzID0gJ21mcC1pbmxpbmUnO1xuICAgICAgICB9IGVsc2UgaWYgKCRsaW5rLmhhc0NsYXNzKCdmcy1pbWFnZS1tb2RhbC1saW5rJykpIHtcbiAgICAgICAgICBsaW5rQ2xhc3MgPSAnbWZwLWltYWdlJztcbiAgICAgICAgfSBlbHNlIGlmICgkbGluay5oYXNDbGFzcygnZnMtaWZyYW1lLW1vZGFsLWxpbmsnKSkge1xuICAgICAgICAgIGxpbmtDbGFzcyA9ICdtZnAtaWZyYW1lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtDbGFzcyA9IGBmcy1nYWxsZXJ5LW1vZGFsLWxpbmsgJHtsaW5rQ2xhc3N9YDtcblxuICAgICAgICAkbGluay5yZW1vdmVDbGFzcyhjbGFzc2VzLmpvaW4oJyAnKSkuYWRkQ2xhc3MobGlua0NsYXNzKTtcbiAgICAgIH0pO1xuXG4gICAgICAkZ2FsbGVyeS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgbWFpbkNsYXNzOiBtYWluQ2xhc3MsXG4gICAgICAgIGNsb3NlTWFya3VwOiBjb25maWcuY2xvc2VNYXJrdXAsXG4gICAgICAgIHJlbW92YWxEZWxheTogcmVtb3ZhbERlbGF5LFxuICAgICAgICBkaXNhYmxlT246IGNvbmZpZy5tb2JpbGVHYWxsZXJ5LFxuICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIGN1cnNvcjogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBkZWxlZ2F0ZTogJ2EuZnMtZ2FsbGVyeS1tb2RhbC1saW5rJyxcbiAgICAgICAgaWZyYW1lOiB7XG4gICAgICAgICAgLy8gQWRkIGJvdHRvbSBiYXIgZm9yIGlmcmFtZXNcbiAgICAgICAgICBtYXJrdXA6IGA8ZGl2IGNsYXNzPVwibWZwLWlmcmFtZS1zY2FsZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8aWZyYW1lIGNsYXNzPVwibWZwLWlmcmFtZVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1mcC1ib3R0b20tYmFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1mcC10aXRsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZnAtY291bnRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgfSxcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgbWFya3VwUGFyc2U6IGZ1bmN0aW9uKHRlbXBsYXRlLCB2YWx1ZXMsIGl0ZW0pIHtcbiAgICAgICAgICAgIHZhbHVlcy50aXRsZSA9IGl0ZW0uZWwuYXR0cigndGl0bGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnLmZzLWltYWdlLW1vZGFsLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICBtYWluQ2xhc3M6IG1haW5DbGFzcyxcbiAgICAgIGNsb3NlTWFya3VwOiBjb25maWcuY2xvc2VNYXJrdXAsXG4gICAgICByZW1vdmFsRGVsYXk6IHJlbW92YWxEZWxheSxcbiAgICAgIGRpc2FibGVPbjogY29uZmlnLm1vYmlsZSxcbiAgICAgIGltYWdlOiB7XG4gICAgICAgIGN1cnNvcjogbnVsbFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmZzLWlmcmFtZS1tb2RhbC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgIG1haW5DbGFzczogbWFpbkNsYXNzLFxuICAgICAgY2xvc2VNYXJrdXA6IGNvbmZpZy5jbG9zZU1hcmt1cCxcbiAgICAgIHJlbW92YWxEZWxheTogcmVtb3ZhbERlbGF5LFxuICAgICAgZGlzYWJsZU9uOiBjb25maWcubW9iaWxlSWZyYW1lLFxuICAgICAgaWZyYW1lOiB7XG4gICAgICAgIC8vIEFkZCBib3R0b20gYmFyIGZvciBpZnJhbWVzXG4gICAgICAgIG1hcmt1cDpcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1pZnJhbWUtc2NhbGVyXCI+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj4nICtcbiAgICAgICAgICAnPGlmcmFtZSBjbGFzcz1cIm1mcC1pZnJhbWVcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtYm90dG9tLWJhclwiPicgK1xuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLXRpdGxlXCI+PC9kaXY+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtY291bnRlclwiPjwvZGl2PicgK1xuICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAnPC9kaXY+J1xuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBtYXJrdXBQYXJzZTogZnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuICAgICAgICAgIHZhbHVlcy50aXRsZSA9IGl0ZW0uZWwuYXR0cigndGl0bGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pKCQpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvbSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBUaGlzIGZpbGUgYmluZHMgcHJlc2V0IGluc3RhbmNlcyBvZiBPd2xDYXJvdXNlbCxcbiAqIGFsbG93aW5nIGZvciB0aG9zZSB0byBiZSBjb25maWd1cmVkIHRocm91Z2ggdGhlXG4gKiBIVE1MIG1hcmt1cC5cbiAqXG4gKiBPd2xDYXJvdXNlbCBpcyBhbiBvcGVuIHNvdXJjZSBjYXJvdXNlbC9zbGlkZXJcbiAqIHNjcmlwdCBieSBEYXZpZCBEZXV0c2NoLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vb3dsY2Fyb3VzZWwyLmdpdGh1Yi5pby9Pd2xDYXJvdXNlbDIvXG4gKlxuICogQHN1bW1hcnkgIFNsaWRlcnNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBtb2RhbC5qc1xuICogQHJlcXVpcmVzIG93bC1jYXJvdXNlbC5qc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigkKSB7XG4gIGlmICghJC5mbi5vd2xDYXJvdXNlbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgJHdpbmRvdywgJGJvZHkgfSA9IGRvbTtcblxuICAkd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLmZzLXNpbXBsZS1zbGlkZXIsIC5mcy1nYWxsZXJ5LXNsaWRlciwgLmZzLWJsb2NrLXNsaWRlcicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJHdyYXAgPSAkKHRoaXMpLFxuICAgICAgICAkc2xpZGVyID0gJHdyYXAuZmluZCgnLmZzLXNsaWRlcicpLFxuICAgICAgICBpdGVtcyA9IHBhcnNlSW50KCR3cmFwLmRhdGEoJ2l0ZW1zJykpID8gcGFyc2VJbnQoJHdyYXAuZGF0YSgnaXRlbXMnKSkgOiA0LFxuICAgICAgICBzcGVlZCA9IHBhcnNlSW50KCR3cmFwLmRhdGEoJ3NwZWVkJykpID8gcGFyc2VJbnQoJHdyYXAuZGF0YSgnc3BlZWQnKSkgOiA1MDAsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dCA9IHBhcnNlSW50KCR3cmFwLmRhdGEoJ2F1dG9wbGF5JykpID8gcGFyc2VJbnQoJHdyYXAuZGF0YSgnYXV0b3BsYXknKSkgOiAwLFxuICAgICAgICBtYXJnaW4gPSBwYXJzZUludCgkd3JhcC5kYXRhKCdtYXJnaW4nKSkgPyBwYXJzZUludCgkd3JhcC5kYXRhKCdtYXJnaW4nKSkgOiAxLFxuICAgICAgICBhdXRvcGxheSA9IGF1dG9wbGF5VGltZW91dCA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgcGF1c2UgPSAndHJ1ZScgPT0gJHdyYXAuZGF0YSgncGF1c2UnKSB8fCAkd3JhcC5kYXRhKCdwYXVzZScpID09ICcxJyA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgbG9vcCA9ICdmYWxzZScgPT0gJHdyYXAuZGF0YSgnbG9vcCcpIHx8ICR3cmFwLmRhdGEoJ2xvb3AnKSA9PSAnMCcgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgIGFuaW1hdGUgPSAndHJ1ZScgPT0gJHdyYXAuZGF0YSgnZmFkZScpIHx8ICR3cmFwLmRhdGEoJ2ZhZGUnKSA9PSAnMScgPyAnZmFkZU91dCcgOiBmYWxzZSxcbiAgICAgICAgYXV0b1dpZHRoID0gJHdyYXAuaGFzQ2xhc3MoJ2ZzLWdhbGxlcnktc2xpZGVyJykgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIGNlbnRlciA9ICR3cmFwLmhhc0NsYXNzKCdmcy1nYWxsZXJ5LXNsaWRlcicpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAkbmF2ID0gJHdyYXAuZmluZCgnLmZzLXNsaWRlci1uYXYsIC5mcy1zbGlkZXItdGh1bWJzJyksXG4gICAgICAgICRhcnJvd3MgPSAkd3JhcC5maW5kKCcuZnMtc2xpZGVyLWFycm93cycpLFxuICAgICAgICBuYXZDb3VudGVyID0gMCxcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG5cbiAgICAgIC8vIFRvZ2dsZSBcImhvdmVyZWRcIiBjbGFzcyBvbi9vZmYgZm9yIGFueSBDU1MgaG92ZXIgZWZmZWN0cy5cbiAgICAgICR3cmFwXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hvdmVyZWQnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG92ZXJlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gQWRkIHNsaWRlLXRvIGRhdGEgdG8gZWFjaCBuYXYgaXRlbS5cbiAgICAgICRuYXYuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmRhdGEoJ3NsaWRlLXRvJywgbmF2Q291bnRlcik7XG4gICAgICAgIG5hdkNvdW50ZXIrKztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoJHdyYXAuaGFzQ2xhc3MoJ2ZzLXNpbXBsZS1zbGlkZXInKSkge1xuICAgICAgICBtYXJnaW4gPSAwO1xuICAgICAgICBpdGVtcyA9IDE7XG4gICAgICB9IGVsc2UgaWYgKCR3cmFwLmhhc0NsYXNzKCdmcy1nYWxsZXJ5LXNsaWRlcicpKSB7XG4gICAgICAgIGl0ZW1zID0gMTtcbiAgICAgIH1cblxuICAgICAgJHNsaWRlci5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgZG90czogdHJ1ZSwgLy8gTXVzdCBiZSBlbmFibGVkIGZvciBlLnBhZ2UuaW5kZXggdG8gd29yay5cbiAgICAgICAgbG9vcDogbG9vcCxcbiAgICAgICAgc21hcnRTcGVlZDogc3BlZWQsXG4gICAgICAgIGF1dG9wbGF5OiBhdXRvcGxheSxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiBhdXRvcGxheVRpbWVvdXQsXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogcGF1c2UsXG4gICAgICAgIGFuaW1hdGVPdXQ6IGFuaW1hdGUsXG4gICAgICAgIGF1dG9XaWR0aDogYXV0b1dpZHRoLFxuICAgICAgICBtYXJnaW46IG1hcmdpbixcbiAgICAgICAgY2VudGVyOiBjZW50ZXIsXG4gICAgICAgIHJ0bDogJGJvZHkuaGFzQ2xhc3MoJ3J0bCcpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBvbkluaXRpYWxpemVkOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgJG5hdi5maW5kKCdsaTpmaXJzdC1jaGlsZCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAkd3JhcC5yZW1vdmVDbGFzcygnbG9hZGluZycpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgICAgICAgICBpZiAoIWxvb3ApICRhcnJvd3MuZmluZCgnbGknKS5hZGRDbGFzcygnZmFkZScpO1xuICAgICAgICAgICR3cmFwLmZpbmQoJy5mcy1sb2FkZXInKS5mYWRlT3V0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlZDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICogTWFrZSBzdXJlIG5leHQgYW5kIHByZXYgYnV0dG9ucyBkb24ndCBzaG93XG4gICAgICAgICAgICogd2hlbiBhdCBzdGFydCBhbmQgZW5kIG9mIGN5Y2xlLCBpZiB0aGVyZSdzXG4gICAgICAgICAgICogbm8gbG9vcGluZy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAoIWxvb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gJHdyYXAuaGFzQ2xhc3MoJ2ZzLWJsb2NrLXNsaWRlcicpID8gZS5pdGVtLmluZGV4IDogZS5wYWdlLmluZGV4O1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMCB8fCBpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgICAkYXJyb3dzLmZpbmQoJ2xpLnByZXYnKS5yZW1vdmVDbGFzcygnaW4nKTtcbiAgICAgICAgICAgICAgJGFycm93cy5maW5kKCdsaS5uZXh0JykuYWRkQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUucGFnZS5pbmRleCArIDEgPT0gZS5wYWdlLmNvdW50KSB7XG4gICAgICAgICAgICAgICRhcnJvd3MuZmluZCgnbGkubmV4dCcpLnJlbW92ZUNsYXNzKCdpbicpO1xuICAgICAgICAgICAgICAkYXJyb3dzLmZpbmQoJ2xpLnByZXYnKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRhcnJvd3MuZmluZCgnbGknKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdGFuZGFyZCBuYXZpZ2F0aW9uIGRvdHMuXG4gICAgICAgICAgJG5hdi5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAkbmF2LmZpbmQoJ2xpOm50aC1jaGlsZCggJyArIChlLnBhZ2UuaW5kZXggKyAxKSArICcgKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEJpbmQgc3RhbmRhcmQgc2xpZGVyIG5hdiBhbmQgdGh1bWIgbmF2LlxuICAgICAgJG5hdi5maW5kKCdsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkY3VycmVudCA9ICQodGhpcyk7XG5cbiAgICAgICAgJHNsaWRlci50cmlnZ2VyKCd0by5vd2wuY2Fyb3VzZWwnLCAkY3VycmVudC5kYXRhKCdzbGlkZS10bycpKTtcblxuICAgICAgICAkY3VycmVudFxuICAgICAgICAgIC5jbG9zZXN0KCd1bCwgb2wnKVxuICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAkY3VycmVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQmluZCBzbGlkZXIgYXJyb3cgbmV4dC9wcmV2IG5hdi5cbiAgICAgICRhcnJvd3MuZmluZCgnbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gJHNsaWRlci50cmlnZ2VyKCAnc3RvcC5vd2wuYXV0b3BsYXknICk7IC8vIERvZXNuJ3Qgd29yayByaWdodCBhcyBvZiB2Mi4yLjEuXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCduZXh0JykpIHtcbiAgICAgICAgICAkc2xpZGVyLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHNsaWRlci50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTsgLy8gRW5kIC5lYWNoKClcbiAgfSk7IC8vIEVuZCAub24oICdsb2FkJyApXG59KSgkKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBkb20gfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogQWRkcyB0YWJzIGJsb2NrIGZ1bmN0aW9uYWxpdHksIHdoaWNoIGFsbG93c1xuICogdG9nZ2xpbmcgYmV0d2VlbiB0YWIgY29udGVudCBwYW5lcy5cbiAqXG4gKiBAc3VtbWFyeSAgVGFic1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIHRhYnMuanNcbiAqL1xuY2xhc3MgVGFicyB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgdGFic2AgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMgKGN1cnJlbnRseSBub3QgdXNlZCkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJHRhYnMgPSAkKGVsZW1lbnQpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHsgJHdpbmRvdyB9ID0gZG9tO1xuXG4gICAgdGhpcy5kZWVwTGluayA9IHRoaXMuZGVlcExpbmsuYmluZCh0aGlzKTtcblxuICAgIGNvbnN0IHsgc2hvdywgbWF0Y2hIZWlnaHQsIGRlZXBMaW5rIH0gPSB0aGlzO1xuXG4gICAgLypcbiAgICAgKiBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYmVpbmcgYWRkZWQgdG8gdGhlIHRhYnMgZWxlbWVudFxuICAgICAqIGNhbiBvdmVycmlkZSB0aGUgaGVpZ2h0IGFuZCBkZWVwTGluayBvcHRpb25zLlxuICAgICAqL1xuICAgIGlmICgkdGFicy5oYXNDbGFzcygndGFicy1maXhlZC1oZWlnaHQnKSkge1xuICAgICAgc2V0dGluZ3MuaGVpZ2h0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoJHRhYnMuaGFzQ2xhc3MoJ3RhYnMtZGVlcC1saW5rJykpIHtcbiAgICAgIHNldHRpbmdzLmRlZXBMaW5rID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCBhY2Nlc3NpYmxpdHkuXG4gICAgJHRhYnMuZmluZCgnLnRhYi1wYW5lJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkcGFuZSA9ICQodGhpcyk7XG5cbiAgICAgIGlmICgkcGFuZS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgJHBhbmUuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHBhbmUuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRvZ2dsZSB0YWIgY29udGVudC5cbiAgICAkdGFic1xuICAgICAgLmZpbmQoc2V0dGluZ3MubmF2U2VsZWN0b3IpXG4gICAgICAuZmluZCgnYScpXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2hvdygkdGFicywgJCh0aGlzKSwgc2V0dGluZ3MpO1xuICAgICAgfSk7XG5cbiAgICAvLyBTZXR1cCBmaXhlZCBoZWlnaHQgYW5kL29yIGRlZXAtbGlua2luZy5cbiAgICBpZiAoc2V0dGluZ3MuaGVpZ2h0IHx8IHNldHRpbmdzLmRlZXBMaW5rKSB7XG4gICAgICAkd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIE1hdGNoIGhlaWdodCBvZiBhbGwgdGFicyB0byB0YWxsZXN0LlxuICAgICAgICBpZiAoc2V0dGluZ3MuaGVpZ2h0KSB7XG4gICAgICAgICAgbWF0Y2hIZWlnaHQoJHRhYnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yIGRlZXAtbGlua2luZy5cbiAgICAgICAgaWYgKHNldHRpbmdzLmRlZXBMaW5rKSB7XG4gICAgICAgICAgZGVlcExpbmsoJHRhYnMsIHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdGFicyBvcHRpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYXZTZWxlY3RvcjogJy5tZW51LWJhciwgLnN1Ym1lbnUtYmFyLCAuc3VibWVudS10YWJzLCAuc3VibWVudS1waWxscycsXG4gICAgICBoZWlnaHQ6IGZhbHNlLFxuICAgICAgZGVlcExpbms6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGEgdGFiLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0YWJzICAgIFRoZSBiaW5kZWQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRyaWdnZXIgTGluayAodGFiKSB3aGljaCBpcyB0cmlnZ2VyaW5nIG5ldyBjb250ZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gICAqL1xuICBzaG93KCR0YWJzLCAkdHJpZ2dlciwgc2V0dGluZ3MpIHtcbiAgICBjb25zdCAkbmF2ID0gJHRyaWdnZXIuY2xvc2VzdChzZXR0aW5ncy5uYXZTZWxlY3Rvcik7XG4gICAgY29uc3QgdGFyZ2V0ID0gJHRyaWdnZXIuYXR0cignaHJlZicpLnNwbGl0KCcjJylbMV07XG5cbiAgICAkbmF2LmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgJHRyaWdnZXIuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAkdGFic1xuICAgICAgLmZpbmQoJy50YWItcGFuZScpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgLnJlbW92ZUNsYXNzKCdpbicpXG4gICAgICAuaGlkZSgpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2ZhZGUnKTtcblxuICAgICR0YWJzXG4gICAgICAuZmluZCgnIycgKyB0YXJnZXQpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICAuYWRkQ2xhc3MoJ2ZhZGUnKVxuICAgICAgLnNob3coMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2luJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYWxsIHRhYiBjb250ZW50IHBhbmVzIHRvIGhhdmUgZXF1YWwgaGVpZ2h0LCB0b1xuICAgKiB0aGUgdGFsbGVzdCBvbmUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRhYnMgVGhlIGJpbmRlZCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqL1xuICBtYXRjaEhlaWdodCgkdGFicykge1xuICAgIHZhciB0YWxsZXN0ID0gMDtcblxuICAgICR0YWJzLmZpbmQoJy50YWItcGFuZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkcGFuZSA9ICQodGhpcyk7XG4gICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gJHBhbmUuc2hvdygpLm91dGVySGVpZ2h0KCk7XG5cbiAgICAgIGlmICghJHBhbmUuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICRwYW5lLmhpZGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgPiB0YWxsZXN0KSB7XG4gICAgICAgIHRhbGxlc3QgPSBjdXJyZW50SGVpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHRhYnMuZmluZCgnLnRhYi1wYW5lJykuaGVpZ2h0KHRhbGxlc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIGZvciB0YWIgZGVlcC1saW5raW5nLlxuICAgKlxuICAgKiBUYWIgZGVlcC1saW5raW5nIGlzIHdoZW4gdGhlIHVzZXIgcGFzc2VzIGEgdGFiIElEXG4gICAqIHRocm91Z2ggdGhlIFVSTCBvZiB0aGUgd2VicGFnZSB0byB0cmlnZ2VyIG9wZW5pbmdcbiAgICogYSBzcGVjaWZpYyB0YWIgcGFuZS5cbiAgICpcbiAgICogVG8gZGVlcCBsaW5rIHRvIGEgdGFiLCB5b3UgbmVlZCB0byBwcmVmaXhcbiAgICogdGhlIElEIG9mIHRoZSB0YWIgd2l0aCBcInRhYl9cIiBsaWtlIHRoaXM6XG4gICAqXG4gICAqIGBodHRwOi8veW91ci1zaXRlLmNvbS9wYWdlLXdpdGgtdGFicy8jdGFiX2lkX29mX3RhYmBcbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGFicyAgICBUaGUgYmluZGVkIGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICAgKi9cbiAgZGVlcExpbmsoJHRhYnMsIHNldHRpbmdzKSB7XG4gICAgdmFyIGhhc2ggPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoO1xuXG4gICAgaWYgKGhhc2ggJiYgLTEgIT0gaGFzaC5pbmRleE9mKCd0YWJfJykpIHtcbiAgICAgIGhhc2ggPSBoYXNoLnJlcGxhY2UoJ3RhYl8nLCAnJyk7XG5cbiAgICAgIHRoaXMuc2hvdygkdGFicywgJHRhYnMuZmluZCgnYVtocmVmPVwiJyArIGhhc2ggKyAnXCJdICcpLCBzZXR0aW5ncyk7XG5cbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkdGFicy5vZmZzZXQoKS50b3AgLSAyMFxuICAgICAgICB9LFxuICAgICAgICA4MDBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIEFkZHMgdG9nZ2xlcyBibG9jayBmdW5jdGlvbmFsaXR5LCB3aGljaCBhbGxvd3NcbiAqIHRvZ2dsZSBkaXNwbGF5IG9mIGNvbnRlbnQuXG4gKlxuICogQHN1bW1hcnkgIFRvZ2dsZVxuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIHRvZ2dsZS5qc1xuICovXG5jbGFzcyBUb2dnbGUge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYHRhYnNgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICR0b2dnbGUgPSAkKGVsZW1lbnQpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHsgb3BlbiwgY2xvc2UgfSA9IHRoaXM7XG5cbiAgICB2YXIgJGdyb3VwID0gbnVsbDtcblxuICAgIGlmICgkdG9nZ2xlLnBhcmVudHMoJy50b2dnbGUtZ3JvdXAnKS5sZW5ndGggPiAwKSB7XG4gICAgICAkZ3JvdXAgPSAkdG9nZ2xlLmNsb3Nlc3QoJy50b2dnbGUtZ3JvdXAnKTtcbiAgICB9XG5cbiAgICBpZiAoJGdyb3VwICYmICRncm91cC5oYXNDbGFzcygndG9nZ2xlLWFjY29yZGlvbicpKSB7XG4gICAgICBzZXR0aW5ncy5hY2NvcmRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBhY2Nlc3NpYmxpdHkuXG4gICAgJHRvZ2dsZS5maW5kKCcudG9nZ2xlLWNvbnRlbnQnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgLy8gT3BlbiBpbml0aWFsbHkgaWYgaGFzIGNsYXNzIGB0b2dnbGUtZXhwYW5kZWRgLlxuICAgIGlmICgkdG9nZ2xlLmhhc0NsYXNzKCd0b2dnbGUtZXhwYW5kZWQnKSkge1xuICAgICAgb3BlbigkdG9nZ2xlLCBzZXR0aW5ncy5zcGVlZCk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIHRvZ2dsZSBjbGljay5cbiAgICAkdG9nZ2xlLmZpbmQoJy50b2dnbGUtdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgJCh0aGlzKS5ibHVyKCk7XG5cbiAgICAgIGlmICgkdG9nZ2xlLmhhc0NsYXNzKCd0b2dnbGUtZXhwYW5kZWQnKSkge1xuICAgICAgICAvLyBUb2dnbGUgaXMgb3Blbjsgc28gY2xvc2UgaXQuXG4gICAgICAgIGNsb3NlKCR0b2dnbGUsIHNldHRpbmdzLnNwZWVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgkZ3JvdXAgJiYgc2V0dGluZ3MuYWNjb3JkaW9uKSB7XG4gICAgICAgICAgJGdyb3VwLmZpbmQoJy5mcy10b2dnbGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2xvc2UoJCh0aGlzKSwgc2V0dGluZ3Muc3BlZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG9nZ2xlIGlzIGNsb3NlZDsgc28gb3BlbiBpdC5cbiAgICAgICAgb3BlbigkdG9nZ2xlLCBzZXR0aW5ncy5zcGVlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB0b2dnbGUgb3B0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3BlZWQ6IDIwMCxcbiAgICAgIGFjY29yZGlvbjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gYSB0b2dnbGUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRvZ2dsZSBUaGUgYmluZGVkIGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkICAgQW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIG9wZW4oJHRvZ2dsZSwgc3BlZWQpIHtcbiAgICAkdG9nZ2xlXG4gICAgICAuYWRkQ2xhc3MoJ3RvZ2dsZS1leHBhbmRlZCcpXG4gICAgICAuZmluZCgnLnRvZ2dsZS1jb250ZW50JylcbiAgICAgIC5zdG9wKHRydWUsIHRydWUpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICAuc2xpZGVEb3duKHNwZWVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhIHRvZ2dsZS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdG9nZ2xlIFRoZSBiaW5kZWQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWQgICBBbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxuICAgKi9cbiAgY2xvc2UoJHRvZ2dsZSwgc3BlZWQpIHtcbiAgICAkdG9nZ2xlXG4gICAgICAucmVtb3ZlQ2xhc3MoJ3RvZ2dsZS1leHBhbmRlZCcpXG4gICAgICAuZmluZCgnLnRvZ2dsZS1jb250ZW50JylcbiAgICAgIC5zdG9wKHRydWUsIHRydWUpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgLnNsaWRlVXAoc3BlZWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogQWRkcyB0b29sdGlwIGJsb2NrIGZ1bmN0aW9uYWxpdHkuXG4gKlxuICogSW5zcGlyZWQgYnkgQm9vdHN0cmFwIDMncyB0b29sdGlwcy5qcywgd2hpY2ggd2FzIGluc3BpcmVkXG4gKiBieSB0aGUgb3JpZ2luYWwgalF1ZXJ5LnRpcHN5IGJ5IEphc29uIEZyYW1lLlxuICpcbiAqIEBzdW1tYXJ5ICBUb29sdGlwXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgdG9vbHRpcC5qc1xuICovXG5jbGFzcyBUb29sdGlwIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGB0b29sdGlwYCBibG9jayBvbiBhIERPTSBlbGVtZW50LFxuICAgKiB3aGVuIGJpbmRlZCB0aHJvdWdoIGpRdWVyeS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQmxvY2sgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gbnVsbDtcbiAgICB0aGlzLmVuYWJsZWQgPSBudWxsO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5ob3ZlclN0YXRlID0gbnVsbDtcbiAgICB0aGlzLiRlbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmluU3RhdGUgPSBudWxsO1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy4kdmlld3BvcnQgPVxuICAgICAgdGhpcy5zZXR0aW5ncy52aWV3cG9ydCAmJlxuICAgICAgJChcbiAgICAgICAgJC5pc0Z1bmN0aW9uKHRoaXMuc2V0dGluZ3Mudmlld3BvcnQpXG4gICAgICAgICAgPyB0aGlzLnNldHRpbmdzLnZpZXdwb3J0LmNhbGwodGhpcywgdGhpcy4kZWxlbWVudClcbiAgICAgICAgICA6IHRoaXMuc2V0dGluZ3Mudmlld3BvcnQuc2VsZWN0b3IgfHwgdGhpcy5zZXR0aW5ncy52aWV3cG9ydFxuICAgICAgKTtcbiAgICB0aGlzLmluU3RhdGUgPSB7IGNsaWNrOiBmYWxzZSwgaG92ZXI6IGZhbHNlLCBmb2N1czogZmFsc2UgfTtcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ21vdXNlZW50ZXIudG9vbHRpcCcsIGZhbHNlLCAkLnByb3h5KHRoaXMuZW50ZXIsIHRoaXMpKTtcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWxlYXZlLnRvb2x0aXAnLCBmYWxzZSwgJC5wcm94eSh0aGlzLmxlYXZlLCB0aGlzKSk7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdmb2N1c2luLnRvb2x0aXAnLCBmYWxzZSwgJC5wcm94eSh0aGlzLmVudGVyLCB0aGlzKSk7XG4gICAgdGhpcy4kZWxlbWVudC5vbignZm9jdXNvdXQudG9vbHRpcCcsIGZhbHNlLCAkLnByb3h5KHRoaXMubGVhdmUsIHRoaXMpKTtcblxuICAgIHRoaXMuZ2V0RGVsZWdhdGVTZXR0aW5ncyA9IHRoaXMuZ2V0RGVsZWdhdGVTZXR0aW5ncy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZW50ZXIgPSB0aGlzLmVudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pc0luU3RhdGVUcnVlID0gdGhpcy5pc0luU3RhdGVUcnVlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sZWF2ZSA9IHRoaXMubGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3cgPSB0aGlzLnNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFwcGx5UGxhY2VtZW50ID0gdGhpcy5hcHBseVBsYWNlbWVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Q29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFzQ29udGVudCA9IHRoaXMuaGFzQ29udGVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRDYWxjdWxhdGVkT2Zmc2V0ID0gdGhpcy5nZXRDYWxjdWxhdGVkT2Zmc2V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRUaXRsZSA9IHRoaXMuZ2V0VGl0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFVJRCA9IHRoaXMuZ2V0VUlELmJpbmQodGhpcyk7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXJyb3cgPSB0aGlzLmFycm93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbmFibGUgPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGlzYWJsZSA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlRW5hYmxlZCA9IHRoaXMudG9nZ2xlRW5hYmxlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHRvb2x0aXAgb3B0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgIHRlbXBsYXRlOlxuICAgICAgICAnPGRpdiBjbGFzcz1cImZzLXRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICAgIHZpZXdwb3J0OiB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIHBhZGRpbmc6IDBcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVsZWdhdGVTZXR0aW5ncygpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHt9O1xuXG4gICAgdGhpcy5fc2V0dGluZ3MgJiZcbiAgICAgICQuZWFjaCh0aGlzLl9zZXR0aW5ncywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT0gdGhpcy5kZWZhdWx0c1trZXldKSB7XG4gICAgICAgICAgc2V0dGluZ3Nba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHJldHVybiBzZXR0aW5ncztcbiAgfVxuXG4gIGVudGVyKG9iaikge1xuICAgIHZhciBzZWxmID0gb2JqIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3RvciA/IG9iaiA6ICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnKTtcblxuICAgIGlmICghc2VsZikge1xuICAgICAgc2VsZiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG9iai5jdXJyZW50VGFyZ2V0LCB0aGlzLmdldERlbGVnYXRlU2V0dGluZ3MoKSk7XG4gICAgICAkKG9iai5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJywgc2VsZik7XG4gICAgfVxuXG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mICQuRXZlbnQpIHtcbiAgICAgIHNlbGYuaW5TdGF0ZVtvYmoudHlwZSA9PSAnZm9jdXNpbicgPyAnZm9jdXMnIDogJ2hvdmVyJ10gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnRpcCgpLmhhc0NsYXNzKCdpbicpIHx8IHNlbGYuaG92ZXJTdGF0ZSA9PSAnaW4nKSB7XG4gICAgICBzZWxmLmhvdmVyU3RhdGUgPSAnaW4nO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuaG92ZXJTdGF0ZSA9ICdpbic7XG5cbiAgICByZXR1cm4gc2VsZi5zaG93KCk7XG4gIH1cblxuICBpc0luU3RhdGVUcnVlKCkge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmluU3RhdGUpIHtcbiAgICAgIGlmICh0aGlzLmluU3RhdGVba2V5XSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZWF2ZShvYmopIHtcbiAgICB2YXIgc2VsZiA9IG9iaiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IgPyBvYmogOiAkKG9iai5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJyk7XG5cbiAgICBpZiAoIXNlbGYpIHtcbiAgICAgIHNlbGYgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihvYmouY3VycmVudFRhcmdldCwgdGhpcy5nZXREZWxlZ2F0ZVNldHRpbmdzKCkpO1xuICAgICAgJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcsIHNlbGYpO1xuICAgIH1cblxuICAgIGlmIChvYmogaW5zdGFuY2VvZiAkLkV2ZW50KSB7XG4gICAgICBzZWxmLmluU3RhdGVbb2JqLnR5cGUgPT0gJ2ZvY3Vzb3V0JyA/ICdmb2N1cycgOiAnaG92ZXInXSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWxmLmlzSW5TdGF0ZVRydWUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuaG92ZXJTdGF0ZSA9ICdvdXQnO1xuXG4gICAgcmV0dXJuIHNlbGYuaGlkZSgpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB2YXIgZSA9ICQuRXZlbnQoJ3Nob3cuZnMudG9vbHRpcCcpO1xuXG4gICAgaWYgKHRoaXMuaGFzQ29udGVudCgpICYmIHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpO1xuXG4gICAgICB2YXIgaW5Eb20gPSAkLmNvbnRhaW5zKHRoaXMuJGVsZW1lbnRbMF0ub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuJGVsZW1lbnRbMF0pO1xuXG4gICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaW5Eb20pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgICR0aXAgPSB0aGlzLnRpcCgpLFxuICAgICAgICB0aXBJZCA9IHRoaXMuZ2V0VUlEKCd0b29sdGlwJyk7XG5cbiAgICAgIHRoaXMuc2V0Q29udGVudCgpO1xuICAgICAgJHRpcC5hdHRyKCdpZCcsIHRpcElkKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1kZXNjcmliZWRieScsIHRpcElkKTtcblxuICAgICAgJHRpcC5hZGRDbGFzcygnZmFkZScpO1xuXG4gICAgICB2YXIgcGxhY2VtZW50ID0gdGhpcy5zZXR0aW5ncy5wbGFjZW1lbnQsXG4gICAgICAgIGF1dG9Ub2tlbiA9IC9cXHM/YXV0bz9cXHM/L2ksXG4gICAgICAgIGF1dG9QbGFjZSA9IGF1dG9Ub2tlbi50ZXN0KHBsYWNlbWVudCk7XG5cbiAgICAgIGlmIChhdXRvUGxhY2UpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnJlcGxhY2UoYXV0b1Rva2VuLCAnJykgfHwgJ3RvcCc7XG4gICAgICB9XG5cbiAgICAgICR0aXBcbiAgICAgICAgLmRldGFjaCgpXG4gICAgICAgIC5jc3MoeyB0b3A6IDAsIGxlZnQ6IDAsIGRpc3BsYXk6ICdibG9jaycgfSlcbiAgICAgICAgLmFkZENsYXNzKHBsYWNlbWVudClcbiAgICAgICAgLmRhdGEoJ2ZzLnRvb2x0aXAnLCB0aGlzKTtcblxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY29udGFpbmVyKSB7XG4gICAgICAgICR0aXAuYXBwZW5kVG8odGhpcy5zZXR0aW5ncy5jb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHRpcC5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnNlcnRlZC5mcy50b29sdGlwJyk7XG5cbiAgICAgIHZhciBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGFjdHVhbFdpZHRoID0gJHRpcFswXS5vZmZzZXRXaWR0aCxcbiAgICAgICAgYWN0dWFsSGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIGlmIChhdXRvUGxhY2UpIHtcbiAgICAgICAgdmFyIG9yZ1BsYWNlbWVudCA9IHBsYWNlbWVudCxcbiAgICAgICAgICB2aWV3cG9ydERpbSA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy4kdmlld3BvcnQpO1xuXG4gICAgICAgIGlmICgnYm90dG9tJyA9PSBwbGFjZW1lbnQgJiYgcG9zLmJvdHRvbSArIGFjdHVhbEhlaWdodCA+IHZpZXdwb3J0RGltLmJvdHRvbSkge1xuICAgICAgICAgIHBsYWNlbWVudCA9ICd0b3AnO1xuICAgICAgICB9IGVsc2UgaWYgKCd0b3AnID09IHBsYWNlbWVudCAmJiBwb3MudG9wIC0gYWN0dWFsSGVpZ2h0IDwgdmlld3BvcnREaW0udG9wKSB7XG4gICAgICAgICAgcGxhY2VtZW50ID0gJ2JvdHRvbSc7XG4gICAgICAgIH1cblxuICAgICAgICAkdGlwLnJlbW92ZUNsYXNzKG9yZ1BsYWNlbWVudCkuYWRkQ2xhc3MocGxhY2VtZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbGN1bGF0ZWRPZmZzZXQgPSB0aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQocGxhY2VtZW50LCBwb3MsIGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQpO1xuXG4gICAgICB0aGlzLmFwcGx5UGxhY2VtZW50KGNhbGN1bGF0ZWRPZmZzZXQsIHBsYWNlbWVudCk7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJldkhvdmVyU3RhdGUgPSB0aGF0LmhvdmVyU3RhdGU7XG5cbiAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdzaG93bi5mcy50b29sdGlwJyk7XG4gICAgICAgIHRoYXQuaG92ZXJTdGF0ZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKCdvdXQnID09IHByZXZIb3ZlclN0YXRlKSB7XG4gICAgICAgICAgdGhhdC5sZWF2ZSh0aGF0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBhcHBseVBsYWNlbWVudChvZmZzZXQsIHBsYWNlbWVudCkge1xuICAgIHZhciAkdGlwID0gdGhpcy50aXAoKSxcbiAgICAgIHdpZHRoID0gJHRpcFswXS5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0LFxuICAgICAgbWFyZ2luVG9wID0gcGFyc2VJbnQoJHRpcC5jc3MoJ21hcmdpbi10b3AnKSwgMTApLFxuICAgICAgbWFyZ2luTGVmdCA9IHBhcnNlSW50KCR0aXAuY3NzKCdtYXJnaW4tbGVmdCcpLCAxMCk7XG5cbiAgICBvZmZzZXQudG9wICs9IG1hcmdpblRvcDtcbiAgICBvZmZzZXQubGVmdCArPSBtYXJnaW5MZWZ0O1xuXG4gICAgLypcblx0XHQgKiAkLmZuLm9mZnNldCBkb2Vzbid0IHJvdW5kIHBpeGVsIHZhbHVlczsgc28gd2UgdXNlXG5cdFx0ICogc2V0T2Zmc2V0IGRpcmVjdGx5IHdpdGggb3VyIG93biBmdW5jdGlvbiBCLTAuXG5cdFx0ICovXG4gICAgJC5vZmZzZXQuc2V0T2Zmc2V0KFxuICAgICAgJHRpcFswXSxcbiAgICAgICQuZXh0ZW5kKFxuICAgICAgICB7XG4gICAgICAgICAgdXNpbmc6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAkdGlwLmNzcyh7XG4gICAgICAgICAgICAgIHRvcDogTWF0aC5yb3VuZChwcm9wcy50b3ApLFxuICAgICAgICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKHByb3BzLmxlZnQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9mZnNldFxuICAgICAgKSxcbiAgICAgIDBcbiAgICApO1xuXG4gICAgJHRpcC5hZGRDbGFzcygnaW4nKTtcblxuICAgIC8qXG5cdFx0ICogQ2hlY2sgdG8gc2VlIGlmIHBsYWNpbmcgdGlwIGluIG5ldyBvZmZzZXQgY2F1c2VkIHRoZVxuXHRcdCAqIHRpcCB0byByZXNpemUgaXRzZWxmLlxuXHRcdCAqL1xuICAgIHZhciBhY3R1YWxXaWR0aCA9ICR0aXBbMF0ub2Zmc2V0V2lkdGgsXG4gICAgICBhY3R1YWxIZWlnaHQgPSAkdGlwWzBdLm9mZnNldEhlaWdodDtcblxuICAgIGlmICgndG9wJyA9PSBwbGFjZW1lbnQgJiYgYWN0dWFsSGVpZ2h0ICE9IGhlaWdodCkge1xuICAgICAgb2Zmc2V0LnRvcCA9IG9mZnNldC50b3AgKyBoZWlnaHQgLSBhY3R1YWxIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICB2YXIgJHRpcCA9IHRoaXMudGlwKCksXG4gICAgICB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKTtcblxuICAgICR0aXAuZmluZCgnLnRvb2x0aXAtaW5uZXInKVsndGV4dCddKHRpdGxlKTtcblxuICAgICR0aXAucmVtb3ZlQ2xhc3MoJ2ZhZGUgaW4gdG9wIGJvdHRvbScpO1xuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICR0aXAgPSAkKHRoaXMuJHRpcCksXG4gICAgICBldmVudCA9ICQuRXZlbnQoJ2hpZGUuZnMudG9vbHRpcCcpO1xuXG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBpZiAoJ2luJyAhPSB0aGF0LmhvdmVyU3RhdGUpIHtcbiAgICAgICAgJHRpcC5kZXRhY2goKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoYXQuJGVsZW1lbnQpIHtcbiAgICAgICAgdGhhdC4kZWxlbWVudC5yZW1vdmVBdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JykudHJpZ2dlcignaGlkZGVuLmZzLnRvb2x0aXAnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGV2ZW50KTtcblxuICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICR0aXAucmVtb3ZlQ2xhc3MoJ2luJyk7XG5cbiAgICB0aGlzLmhvdmVyU3RhdGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBoYXNDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCk7XG4gIH1cblxuICBnZXRQb3NpdGlvbigkZWxlbWVudCkge1xuICAgIGlmICghJGVsZW1lbnQpIHtcbiAgICAgICRlbGVtZW50ID0gdGhpcy4kZWxlbWVudDtcbiAgICB9XG5cbiAgICB2YXIgZWwgPSAkZWxlbWVudFswXSxcbiAgICAgIGlzQm9keSA9IGVsLnRhZ05hbWUgPT0gJ0JPRFknLFxuICAgICAgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAoZWxSZWN0LndpZHRoID09IG51bGwpIHtcbiAgICAgIGVsUmVjdCA9ICQuZXh0ZW5kKHt9LCBlbFJlY3QsIHtcbiAgICAgICAgd2lkdGg6IGVsUmVjdC5yaWdodCAtIGVsUmVjdC5sZWZ0LFxuICAgICAgICBoZWlnaHQ6IGVsUmVjdC5ib3R0b20gLSBlbFJlY3QudG9wXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdmcgPSB3aW5kb3cuU1ZHRWxlbWVudCAmJiBlbCBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50LFxuICAgICAgZWxPZmZzZXQgPSBpc0JvZHkgPyB7IHRvcDogMCwgbGVmdDogMCB9IDogaXNTdmcgPyBudWxsIDogJGVsZW1lbnQub2Zmc2V0KCksXG4gICAgICBzY3JvbGwgPSB7XG4gICAgICAgIHNjcm9sbDogaXNCb2R5XG4gICAgICAgICAgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICAgICAgOiAkZWxlbWVudC5zY3JvbGxUb3AoKVxuICAgICAgfSxcbiAgICAgIG91dGVyRGltcyA9IGlzQm9keSA/IHsgd2lkdGg6ICQod2luZG93KS53aWR0aCgpLCBoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKSB9IDogbnVsbDtcblxuICAgIHJldHVybiAkLmV4dGVuZCh7fSwgZWxSZWN0LCBzY3JvbGwsIG91dGVyRGltcywgZWxPZmZzZXQpO1xuICB9XG5cbiAgZ2V0Q2FsY3VsYXRlZE9mZnNldChwbGFjZW1lbnQsIHBvcywgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodCkge1xuICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgIGlmICgnYm90dG9tJyA9PSBwbGFjZW1lbnQpIHtcbiAgICAgIG9mZnNldCA9IHtcbiAgICAgICAgdG9wOiBwb3MudG9wICsgcG9zLmhlaWdodCxcbiAgICAgICAgbGVmdDogcG9zLmxlZnQgKyBwb3Mud2lkdGggLyAyIC0gYWN0dWFsV2lkdGggLyAyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQgPSB7XG4gICAgICAgIHRvcDogcG9zLnRvcCAtIGFjdHVhbEhlaWdodCxcbiAgICAgICAgbGVmdDogcG9zLmxlZnQgKyBwb3Mud2lkdGggLyAyIC0gYWN0dWFsV2lkdGggLyAyXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICB2YXIgdGl0bGUgPSB0aGlzLnNldHRpbmdzLnRpdGxlO1xuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgdmFyICRlbCA9IHRoaXMuJGVsZW1lbnQ7XG4gICAgICB0aXRsZSA9ICRlbC5hdHRyKCd0aXRsZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGdldFVJRChwcmVmaXgpIHtcbiAgICBkbyB7XG4gICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpO1xuXG4gICAgcmV0dXJuIHByZWZpeDtcbiAgfVxuXG4gIHRpcCgpIHtcbiAgICBpZiAoIXRoaXMuJHRpcCkge1xuICAgICAgdGhpcy4kdGlwID0gJCh0aGlzLnNldHRpbmdzLnRlbXBsYXRlKTtcblxuICAgICAgaWYgKHRoaXMuJHRpcC5sZW5ndGggIT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Rvb2x0aXAgYHRlbXBsYXRlYCBvcHRpb24gbXVzdCBjb25zaXN0IG9mIGV4YWN0bHkgMSB0b3AtbGV2ZWwgZWxlbWVudCEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy4kdGlwO1xuICB9XG5cbiAgYXJyb3coKSB7XG4gICAgcmV0dXJuICh0aGlzLiRhcnJvdyA9IHRoaXMuJGFycm93IHx8IHRoaXMudGlwKCkuZmluZCgnLnRvb2x0aXAtYXJyb3cnKSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9ICF0aGlzLmVuYWJsZWQ7XG4gIH1cblxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHNlbGYgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnKTtcblxuICAgICAgaWYgKCFzZWxmKSB7XG4gICAgICAgIHNlbGYgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLmdldERlbGVnYXRlU2V0dGluZ3MoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcsIHNlbGYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgc2VsZi5pblN0YXRlLmNsaWNrID0gIXNlbGYuaW5TdGF0ZS5jbGljaztcblxuICAgICAgaWYgKHNlbGYuaXNJblN0YXRlVHJ1ZSgpKSB7XG4gICAgICAgIHNlbGYuZW50ZXIoc2VsZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmxlYXZlKHNlbGYpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2VsZi50aXAoKS5oYXNDbGFzcygnaW4nKSkge1xuICAgICAgICBzZWxmLmxlYXZlKHNlbGYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5lbnRlcihzZWxmKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgdGhpcy5oaWRlKGZ1bmN0aW9uKCkge1xuICAgICAgdGhhdC4kZWxlbWVudC5vZmYoJy50b29sdGlwJykucmVtb3ZlRGF0YSgnZnMudG9vbHRpcCcpO1xuXG4gICAgICBpZiAodGhhdC4kdGlwKSB7XG4gICAgICAgIHRoYXQuJHRpcC5kZXRhY2goKTtcbiAgICAgIH1cblxuICAgICAgdGhhdC4kdGlwID0gbnVsbDtcbiAgICAgIHRoYXQuJGFycm93ID0gbnVsbDtcbiAgICAgIHRoYXQuJHZpZXdwb3J0ID0gbnVsbDtcbiAgICAgIHRoYXQuJGVsZW1lbnQgPSBudWxsO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2Jsb2Nrcy9iYWNrZ3JvdW5kJztcbmltcG9ydCBNZW51IGZyb20gJy4vYmxvY2tzL21lbnUnO1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9ibG9ja3MvbW9iaWxlLW1lbnUnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9ibG9ja3MvdGFicyc7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4vYmxvY2tzL3RvZ2dsZSc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL2Jsb2Nrcy90b29sdGlwJztcbmltcG9ydCAnLi9ibG9ja3MvbW9kYWwnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9zbGlkZXInO1xuXG4vKipcbiAqIEFkZCBibG9ja3MgdG8gdGhlIGpRdWVyeSBuYW1lc3BhY2UuXG4gKlxuICogTm90ZTogVGhpcyBkb2Vzbid0IGluY2x1ZGUgYmxvY2tzIG1lYW50IHRvXG4gKiBpbXBsZW1lbnQgb3B0aW9uYWwgdGhpcmQtcGFydHkgcGx1Z2lucywgT3dsXG4gKiBDYXJvdXNlbCBhbmQgTWFnbmlmaWMgUG9wdXAuXG4gKlxuICogQHNpbmNlIDEuMC4wXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJsb2NrICAgRnJhbWV3b3JrIGJsb2NrIElELlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBmb3IgYmxvY2suXG4gKi9cbiQuZm4uZnJvbnRzdHJlZXQgPSBmdW5jdGlvbihibG9jaywgb3B0aW9ucykge1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAoYmxvY2spIHtcbiAgICAgIGNhc2UgJ2JhY2tncm91bmQnOlxuICAgICAgICByZXR1cm4gbmV3IEJhY2tncm91bmQodGhpcywgb3B0aW9ucyk7XG4gICAgICBjYXNlICdtb2JpbGUtbWVudSc6XG4gICAgICAgIHJldHVybiBuZXcgTW9iaWxlTWVudSh0aGlzLCBvcHRpb25zKTtcbiAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICByZXR1cm4gbmV3IE1lbnUodGhpcywgb3B0aW9ucyk7XG4gICAgICBjYXNlICd0YWJzJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJzKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgY2FzZSAndG9nZ2xlJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUb2dnbGUodGhpcywgb3B0aW9ucyk7XG4gICAgICBjYXNlICd0b29sdGlwJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUb29sdGlwKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCB7ICRkb2N1bWVudCwgJHdpbmRvdyB9ID0gZG9tO1xuXG4kZG9jdW1lbnQucmVhZHkoZnVuY3Rpb24oJCkge1xuICAvKipcbiAgICogQmluZHMgdGhlIGRlZmF1bHQgYG1lbnVgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy1tZW51JykuZnJvbnRzdHJlZXQoJ21lbnUnKTtcblxuICAvKipcbiAgICogQWRkcyBuby1jbGljayBmdW5jdGlvbmFsdGl5IHRvIGFueSBsaW5rIGJ5XG4gICAqIGFkZGluZyBjbGFzcyBcIm5vLWNsaWNrXCIuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBpbnRlcmZhY2UuXG4gICAqL1xuICAkKCdhLm5vLWNsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICAvKipcbiAgICogQWRkcyBuby1jbGljayBmdW5jdGlvbmFsdGl5IHRvIGFueSBsaW5rIGRpcmVjdGx5XG4gICAqIHdpdGhpbiBhbiBsaSB3aXRoIGNsYXNzIGBuby1jbGlja2AuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgaXMgbWFpbmx5IGhlcmUgdG8gYWNjbW9kYXRlIGludGVyZmFjZXNcbiAgICogbGlrZSBXb3JkUHJlc3Mgd2hpY2ggYWxsb3cgYnVpbGRpbmcgbWVudXMsIGJ1dCBvbmx5XG4gICAqIGFsbG93IGFkZGluZyBDU1MgY2xhc3NlcyB0byB0aGUgbWVudSBsaXN0IGl0ZW1zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgaW50ZXJmYWNlLlxuICAgKi9cbiAgJCgnbGkubm8tY2xpY2snKVxuICAgIC5maW5kKCdhOmZpcnN0JylcbiAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIHRoZSBkZWZhdWx0IGB0YWJzYCBibG9jay5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICAkKCcuZnMtdGFicycpLmZyb250c3RyZWV0KCd0YWJzJyk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIHRoZSBkZWZhdWx0IGB0b2dnbGVgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy10b2dnbGUnKS5mcm9udHN0cmVldCgndG9nZ2xlJyk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIHRoZSBkZWZhdWx0IGB0b29sdGlwYCBibG9jay5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICAkKCcuZnMtdG9vbHRpcC10cmlnZ2VyJykuZnJvbnRzdHJlZXQoJ3Rvb2x0aXAnKTtcbn0pO1xuXG4kd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gIC8qKlxuICAgKiBTZWxmLWludm9rZXMgdGhlIGJhY2tncm91bmQgc2xpZGVyIG9mIHRoZVxuICAgKiBgYmFja2dyb3VuZGAgYmxvY2suXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgJCgnLmZzLWJnLXNsaWRlcicpLmZyb250c3RyZWV0KCdiYWNrZ3JvdW5kJywgeyB0eXBlOiAnc2xpZGVyJyB9KTtcblxuICAvKipcbiAgICogU2VsZi1pbnZva2VzIHRoZSBwYXJhbGxheCBlZmZlY3Qgb2YgdGhlXG4gICAqIGBiYWNrZ3JvdW5kYCBibG9jay5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICAkKCcuZnMtYmctcGFyYWxsYXgnKS5mcm9udHN0cmVldCgnYmFja2dyb3VuZCcsIHsgdHlwZTogJ3BhcmFsbGF4JyB9KTtcbn0pO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBTdG9yZSBhbmQgY2FjaGUgcmUtdXNhYmxlIERPTSBlbGVtZW50cy5cbiAqXG4gKiBAc2luY2UgMS4wLjBcbiAqXG4gKiBAdmFyIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBkb20gPSB7XG4gICR3aW5kb3c6ICQod2luZG93KSxcbiAgJGRvY3VtZW50OiAkKGRvY3VtZW50KSxcbiAgJGJvZHk6ICQoJ2JvZHknKVxufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgd2Vic2l0ZSBpcyBiZWluZyBsb2FkZWQgZnJvbSBhIG1vYmlsZVxuICogZGV2aWNlLlxuICpcbiAqIEBzaW5jZSAxLjAuMFxuICpcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHZpZXdwb3J0Q2hlY2sgV2hldGhlciB0byBsZXQgdmlld3BvcnQgc2l6ZSBoZWxwIGRldGVybWluZS5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgd2UncmUgb24gYSBtb2JpbGUgZGV2aWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUodmlld3BvcnRDaGVjaykge1xuICBjb25zdCB7ICRib2R5IH0gPSBkb207XG5cbiAgaWYgKCRib2R5Lmhhc0NsYXNzKCdtb2JpbGUnKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGFnZW50Q2hlY2sgPSAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXG4gICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxuICApO1xuXG4gIGlmIChhZ2VudENoZWNrKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodmlld3BvcnRDaGVjaykge1xuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xuXG4gICAgaWYgKCR3aW5kb3cud2lkdGgoKSA8IDk5MiB8fCAkd2luZG93LmhlaWdodCgpIDwgNTAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9