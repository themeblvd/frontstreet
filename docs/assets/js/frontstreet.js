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

/***/ "../src/js/blocks/tabbed.js":
/*!**********************************!*\
  !*** ../src/js/blocks/tabbed.js ***!
  \**********************************/
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
 * @module   tabbed.js
 */

var Tabbed = function () {
  /**
   * Initialize the `tabs` block on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Block options (currently not used).
   */
  function Tabbed(element, options) {
    _classCallCheck(this, Tabbed);

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


  _createClass(Tabbed, [{
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

  return Tabbed;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tabbed);

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
/* harmony import */ var _blocks_tabbed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/tabbed */ "../src/js/blocks/tabbed.js");
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
      case 'tabbed':
        return new _blocks_tabbed__WEBPACK_IMPORTED_MODULE_5__["default"](this, options);
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
  $('.fs-tabbed').frontstreet('tabbed');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3MvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy9tZW51LmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL21vYmlsZS1tZW51LmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL21vZGFsLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy90YWJiZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3MvdG9nZ2xlLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9mcm9udHN0cmVldC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJlbGVtZW50Iiwib3B0aW9ucyIsIiRlbGVtZW50IiwiJCIsInNldHRpbmdzIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCIkc2VjdGlvbiIsImNsb3Nlc3QiLCJzZWN0aW9uIiwic2xpZGVyIiwiYmluZCIsInBhcmFsbGF4IiwicGFyYWxsYXhDYWxjIiwidHlwZSIsIiRzbGlkZXIiLCJhdXRvcGxheSIsImRhdGEiLCJmaW5kIiwiZWFjaCIsIiRpbWciLCJhZGRDbGFzcyIsInByZXBlbmQiLCJmYWRlT3V0Iiwic2V0SW50ZXJ2YWwiLCIkbGFzdEltZyIsInJlbW92ZUNsYXNzIiwic2V0VGltZW91dCIsInByZXBlbmRUbyIsIiRmaWd1cmUiLCIkd2luZG93IiwiaXNNb2JpbGUiLCJjc3MiLCJvbiIsImltZ0hlaWdodCIsImhlaWdodCIsImNvbnRhaW5lckhlaWdodCIsInBhcmFsbGF4RGlzdCIsImJvdHRvbSIsIm9mZnNldCIsInRvcCIsInNjcm9sbFRvcCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2luZG93Qm90dG9tIiwicGVyY2VudFNjcm9sbGVkIiwiTWF0aCIsInJvdW5kIiwiTWVudSIsIiRtZW51IiwiZGVsYXkiLCJ0aW1lciIsImZseW91dCIsInNob3ciLCJoaWRlIiwiaGFzIiwiZHJvcERvd25TZWxlY3RvciIsIiR0cmlnZ2VyIiwiYXBwZW5kIiwiY2hpbGRyZW4iLCJub29wIiwiaGFzQ2xhc3MiLCIkYm9keSIsIiRmbHlvdXQiLCJsb2NhdGlvbiIsInNwYWNlIiwibGVuZ3RoIiwid2lkdGgiLCJsZXZlbCIsImdldExldmVsIiwiJHNpYmxpbmdzIiwic2libGluZ3MiLCIkdGFyZ2V0IiwiY2xlYXJUaW1lb3V0IiwiTW9iaWxlTWVudSIsIiR0cmlnZ2VycyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wIiwiZm4iLCJtYWduaWZpY1BvcHVwIiwiJGRvY3VtZW50IiwicmVhZHkiLCJtYWluQ2xhc3MiLCJyZW1vdmFsRGVsYXkiLCJjb25maWciLCJhbmltYXRpb24iLCJtb2JpbGUiLCJtb2JpbGVJZnJhbWUiLCJtb2JpbGVHYWxsZXJ5IiwiZXJyb3IiLCJjbG9zZSIsImxvYWRpbmciLCJjb3VudGVyIiwibmV4dCIsInByZXZpb3VzIiwiY2xvc2VNYXJrdXAiLCJmc01vZGFsIiwidENsb3NlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwidFByZXYiLCJ0TmV4dCIsInRDb3VudGVyIiwiaW1hZ2UiLCJ0RXJyb3IiLCJhamF4IiwiYWxpZ25Ub3AiLCJzaG93Q2xvc2VCdG4iLCJjYWxsYmFja3MiLCJvcGVuIiwiYXR0ciIsImJlZm9yZUNsb3NlIiwiY2xvc2VCdG5JbnNpZGUiLCJpbnN0YW5jZSIsIndyYXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImZvY3VzIiwiJGdhbGxlcnkiLCJjbGFzc2VzIiwic2VsZWN0b3IiLCJqb2luIiwiJGxpbmsiLCJsaW5rQ2xhc3MiLCJkaXNhYmxlT24iLCJlbmFibGVkIiwiY3Vyc29yIiwiZGVsZWdhdGUiLCJpZnJhbWUiLCJtYXJrdXAiLCJtYXJrdXBQYXJzZSIsInRlbXBsYXRlIiwidmFsdWVzIiwiaXRlbSIsInRpdGxlIiwiZWwiLCJvd2xDYXJvdXNlbCIsIiR3cmFwIiwiaXRlbXMiLCJwYXJzZUludCIsInNwZWVkIiwiYXV0b3BsYXlUaW1lb3V0IiwibWFyZ2luIiwicGF1c2UiLCJsb29wIiwiYW5pbWF0ZSIsImF1dG9XaWR0aCIsImNlbnRlciIsIiRuYXYiLCIkYXJyb3dzIiwibmF2Q291bnRlciIsInRpbWVvdXQiLCJuYXYiLCJkb3RzIiwic21hcnRTcGVlZCIsImF1dG9wbGF5SG92ZXJQYXVzZSIsImFuaW1hdGVPdXQiLCJydGwiLCJvbkluaXRpYWxpemVkIiwib25DaGFuZ2VkIiwiaW5kZXgiLCJwYWdlIiwiY291bnQiLCIkY3VycmVudCIsInRyaWdnZXIiLCJUYWJiZWQiLCIkdGFicyIsImRlZXBMaW5rIiwibWF0Y2hIZWlnaHQiLCIkcGFuZSIsIm5hdlNlbGVjdG9yIiwidGFyZ2V0Iiwic3BsaXQiLCJ0YWxsZXN0IiwiY3VycmVudEhlaWdodCIsIm91dGVySGVpZ2h0IiwiaGFzaCIsImRvY3VtZW50IiwiaW5kZXhPZiIsInJlcGxhY2UiLCJUb2dnbGUiLCIkdG9nZ2xlIiwiJGdyb3VwIiwicGFyZW50cyIsImFjY29yZGlvbiIsImJsdXIiLCJzdG9wIiwic2xpZGVEb3duIiwic2xpZGVVcCIsIlRvb2x0aXAiLCJob3ZlclN0YXRlIiwiaW5TdGF0ZSIsIiR2aWV3cG9ydCIsInZpZXdwb3J0IiwiaXNGdW5jdGlvbiIsImNhbGwiLCJjbGljayIsImhvdmVyIiwicHJveHkiLCJlbnRlciIsImxlYXZlIiwiZ2V0RGVsZWdhdGVTZXR0aW5ncyIsImlzSW5TdGF0ZVRydWUiLCJhcHBseVBsYWNlbWVudCIsInNldENvbnRlbnQiLCJoYXNDb250ZW50IiwiZ2V0UG9zaXRpb24iLCJnZXRDYWxjdWxhdGVkT2Zmc2V0IiwiZ2V0VGl0bGUiLCJnZXRVSUQiLCJ0aXAiLCJhcnJvdyIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwidG9nZ2xlIiwiZGVzdHJveSIsIl9zZXR0aW5ncyIsImtleSIsInZhbHVlIiwib2JqIiwic2VsZiIsImNvbnN0cnVjdG9yIiwiY3VycmVudFRhcmdldCIsIkV2ZW50IiwiaW5Eb20iLCJjb250YWlucyIsIm93bmVyRG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJ0aGF0IiwiJHRpcCIsInRpcElkIiwicGxhY2VtZW50IiwiYXV0b1Rva2VuIiwiYXV0b1BsYWNlIiwidGVzdCIsImRldGFjaCIsImxlZnQiLCJkaXNwbGF5IiwiY29udGFpbmVyIiwiYXBwZW5kVG8iLCJpbnNlcnRBZnRlciIsInBvcyIsImFjdHVhbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJhY3R1YWxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvcmdQbGFjZW1lbnQiLCJ2aWV3cG9ydERpbSIsImNhbGN1bGF0ZWRPZmZzZXQiLCJjb21wbGV0ZSIsInByZXZIb3ZlclN0YXRlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsInNldE9mZnNldCIsInVzaW5nIiwicHJvcHMiLCJjYWxsYmFjayIsInJlbW92ZUF0dHIiLCJpc0JvZHkiLCJ0YWdOYW1lIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlnaHQiLCJpc1N2ZyIsIlNWR0VsZW1lbnQiLCJlbE9mZnNldCIsInNjcm9sbCIsImJvZHkiLCJvdXRlckRpbXMiLCIkZWwiLCJwcmVmaXgiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsIkVycm9yIiwiJGFycm93Iiwib2ZmIiwicmVtb3ZlRGF0YSIsInBhZGRpbmciLCJmcm9udHN0cmVldCIsImJsb2NrIiwiZG9tIiwidmlld3BvcnRDaGVjayIsImFnZW50Q2hlY2siLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9zcmMvanMvZnJvbnRzdHJlZXQuanNcIik7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgaXNNb2JpbGUsIGRvbSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBUaGlzIGZpbGUgaW5jbHVkZXMgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHNlY3Rpb25cbiAqIHBhcmFsbGF4IGJhY2tncm91bmQgaW1hZ2UgZWZmZWN0cyBhbmQgYmFja2dyb3VuZFxuICogc2xpZGVycy5cbiAqXG4gKiBCeSBkZWZhdWx0IGFsbCBIVE1MIGVsZW1lbnRzIHdpdGggY2xhc3MgYGZzLWJnLXNsaWRlcmBcbiAqIGFuZCBgZnMtYmctcGFyYWxsYXhgIGFyZSBhdXRvbWF0aWNhbGx5IGJpbmRlZFxuICogd2l0aCB0aGVpciByZXNwZWN0aXZlIGVmZmVjdHMuXG4gKlxuICogQHN1bW1hcnkgIEJhY2tncm91bmQgRWZmZWN0c1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIGJhY2tncm91bmQuanNcbiAqL1xuY2xhc3MgQmFja2dyb3VuZCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgYmFja2dyb3VuZGAgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGNvbnN0ICRzZWN0aW9uID0gJGVsZW1lbnQuY2xvc2VzdChzZXR0aW5ncy5zZWN0aW9uKTtcblxuICAgIHRoaXMuc2xpZGVyID0gdGhpcy5zbGlkZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhcmFsbGF4ID0gdGhpcy5wYXJhbGxheC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFyYWxsYXhDYWxjID0gdGhpcy5wYXJhbGxheENhbGMuYmluZCh0aGlzKTtcblxuICAgIHN3aXRjaCAoc2V0dGluZ3MudHlwZSkge1xuICAgICAgY2FzZSAnc2xpZGVyJzpcbiAgICAgICAgdGhpcy5zbGlkZXIoJGVsZW1lbnQsICRzZWN0aW9uLCBzZXR0aW5ncyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFyYWxsYXgnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5wYXJhbGxheCgkZWxlbWVudCwgJHNlY3Rpb24sIHNldHRpbmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCBiYWNrZ3JvdW5kIG9wdGlvbnMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdwYXJhbGxheCcsXG4gICAgICBhdXRvcGxheTogNDAwMCxcbiAgICAgIHNlY3Rpb246ICcuZnMtc2VjdGlvbiwgLmhhcy1iZy1zbGlkZXIsIC5oYXMtYmctcGFyYWxsYXgsIC5oYXMtYmctdmlkZW8nXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBhIGJhY2tncm91bmQgc2xpZGVyLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbGVtZW50IFRoZSBiYWNrZ3JvdW5kIHNsaWRlciBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHNlY3Rpb24gU2VjdGlvbiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5ncyBDdXJyZW50IHNldHRpbmdzLlxuICAgKi9cbiAgc2xpZGVyKCRzbGlkZXIsICRzZWN0aW9uLCBzZXR0aW5ncykge1xuICAgIHZhciB7IGF1dG9wbGF5IH0gPSBzZXR0aW5ncztcblxuICAgIGlmICgkc2xpZGVyLmRhdGEoJ2F1dG9wbGF5JykgJiYgJHNsaWRlci5kYXRhKCdhdXRvcGxheScpID49IDEwMDApIHtcbiAgICAgIGF1dG9wbGF5ID0gJHNsaWRlci5kYXRhKCdhdXRvcGxheScpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmV2ZXJzZSBvcmRlciBvZiBpbWFnZXMgc28gdGhlIHRvcCBvZiBzdGFja1xuICAgICAqIHdpbGwgYmUgdGhlIGZpcnN0IGltYWdlLlxuICAgICAqL1xuICAgICRzbGlkZXIuZmluZCgnaW1nJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICRpbWcgPSAkKHRoaXMpO1xuICAgICAgJGltZy5hZGRDbGFzcygnZmFkZSBpbicpO1xuICAgICAgJHNsaWRlci5wcmVwZW5kKCRpbWcpO1xuICAgIH0pO1xuXG4gICAgJHNsaWRlci5hZGRDbGFzcygnaW4nKTtcblxuICAgICRzZWN0aW9uLmZpbmQoJy5mcy1sb2FkZXInKS5mYWRlT3V0KCk7XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICRsYXN0SW1nID0gJHNsaWRlci5maW5kKCdpbWc6bGFzdC1jaGlsZCcpO1xuXG4gICAgICAkbGFzdEltZy5yZW1vdmVDbGFzcygnaW4nKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJGxhc3RJbWcucHJlcGVuZFRvKCRzbGlkZXIpLmFkZENsYXNzKCdpbicpO1xuICAgICAgfSwgYXV0b3BsYXkpO1xuICAgIH0sIGF1dG9wbGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBhIGJhY2tncm91bmQgaW1hZ2UgcGFyYWxsYXggZWZmZWN0LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbGVtZW50IFRoZSBiYWNrZ3JvdW5kIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkc2VjdGlvbiBTZWN0aW9uIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmdzIEN1cnJlbnQgc2V0dGluZ3MuXG4gICAqL1xuICBwYXJhbGxheCgkZmlndXJlLCAkc2VjdGlvbiwgc2V0dGluZ3MpIHtcbiAgICBjb25zdCB7ICR3aW5kb3cgfSA9IGRvbTtcbiAgICBjb25zdCB7IHBhcmFsbGF4Q2FsYyB9ID0gdGhpcztcbiAgICBjb25zdCAkaW1nID0gJGZpZ3VyZS5maW5kKCdpbWcsIC5pbWcnKTtcbiAgICB2YXIgcGFyYWxsYXggPSBudWxsO1xuXG4gICAgLypcbiAgICAgKiBXaWxsIG9ubHkgY2FsY3VsYXRlIGlmIGFsbCBhcmUgdHJ1ZTpcbiAgICAgKlxuICAgICAqIDEuIE5vdCBhIHRydWUgbW9iaWxlIGRldmljZSAobG9va2luZyBhdCB1c2VyIGFnZW50KS5cbiAgICAgKiAyLiBXaW5kb3cgaXMgdGFsbGVyIHRoYW4gNTAwcHguXG4gICAgICogMy4gV2luZG93IGlzIHdpZGVyIHRoYW4gOTkycHguXG4gICAgICovXG4gICAgaWYgKCFpc01vYmlsZSh0cnVlKSkge1xuICAgICAgLy8gUGFzc2luZyBgdHJ1ZWAgZGVub3RlcyBjaGVja2luZyB2aWV3cG9ydCBzaXplLlxuICAgICAgcGFyYWxsYXggPSBwYXJhbGxheENhbGMoJGZpZ3VyZSwgJGltZyk7XG5cbiAgICAgIGlmIChwYXJhbGxheCkge1xuICAgICAgICAkaW1nLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNEKC01MCUsJyArIHBhcmFsbGF4ICsgJ3B4LCAwKScpO1xuICAgICAgfVxuICAgIH1cblxuICAgICRmaWd1cmUuYWRkQ2xhc3MoJ2luJyk7XG5cbiAgICAkc2VjdGlvbi5maW5kKCcuZnMtbG9hZGVyJykuZmFkZU91dCgpO1xuXG4gICAgLy8gQWRqdXN0IHBhcmFsbGF4IHBvc2l0aW9uaW5nIGlmIHdpbmRvdyBpcyByZXNpemVkLlxuICAgICR3aW5kb3cub24oJ3Njcm9sbCByZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgIC8qXG4gICAgICAgKiBXaWxsIG9ubHkgY2FsY3VsYXRlIGlmIGFsbCBhcmUgdHJ1ZTpcbiAgICAgICAqXG4gICAgICAgKiAxLiBOb3QgYSB0cnVlIG1vYmlsZSBkZXZpY2UgKGxvb2tpbmcgYXQgdXNlciBhZ2VudCkuXG4gICAgICAgKiAyLiBXaW5kb3cgaXMgdGFsbGVyIHRoYW4gNTAwcHguXG4gICAgICAgKiAzLiBXaW5kb3cgaXMgd2lkZXIgdGhhbiA5OTJweC5cbiAgICAgICAqXG4gICAgICAgKiBAc2VlIGlzTW9iaWxlKCkgZnVuY3Rpb24gaW4gaW5pdC5qc1xuICAgICAgICovXG4gICAgICBpZiAoIWlzTW9iaWxlKHRydWUpKSB7XG4gICAgICAgIC8vIFBhc3NpbmcgYHRydWVgIGRlbm90ZXMgY2hlY2tpbmcgdmlld3BvcnQgc2l6ZS5cbiAgICAgICAgcGFyYWxsYXggPSBwYXJhbGxheENhbGMoJGZpZ3VyZSwgJGltZyk7XG5cbiAgICAgICAgaWYgKHBhcmFsbGF4KSB7XG4gICAgICAgICAgJGltZy5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzRCgtNTAlLCcgKyBwYXJhbGxheCArICdweCwgMCknKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBwYXJhbGxheCBwb3NpdGlvbiBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRmaWd1cmUgVGhlIGJhY2tncm91bmQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9ICRpbWcgICAgSW1hZ2UgdG8gcG9zaXRpb24gd2l0aGluIGVsZW1lbnQuXG4gICAqL1xuICBwYXJhbGxheENhbGMoJGZpZ3VyZSwgJGltZykge1xuICAgIGNvbnN0IHsgJHdpbmRvdyB9ID0gZG9tO1xuXG4gICAgdmFyIGltZ0hlaWdodCA9ICRpbWcuaGVpZ2h0KCksXG4gICAgICBjb250YWluZXJIZWlnaHQgPSAkZmlndXJlLmhlaWdodCgpID4gMCA/ICRmaWd1cmUuaGVpZ2h0KCkgOiA1MDAsXG4gICAgICBwYXJhbGxheERpc3QgPSBpbWdIZWlnaHQgLSBjb250YWluZXJIZWlnaHQsXG4gICAgICBib3R0b20gPSAkZmlndXJlLm9mZnNldCgpLnRvcCArIGNvbnRhaW5lckhlaWdodCxcbiAgICAgIHRvcCA9ICRmaWd1cmUub2Zmc2V0KCkudG9wLFxuICAgICAgc2Nyb2xsVG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKSxcbiAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCwgLy8gVXNpbmcgYHdpbmRvd2AsIE5PVCBgJHdpbmRvd2A7IHdlIG5lZWQgYSBmcmVzaCBjYWxjdWxhdGlvbiBoZXJlLlxuICAgICAgd2luZG93Qm90dG9tID0gc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0LFxuICAgICAgcGVyY2VudFNjcm9sbGVkID0gKHdpbmRvd0JvdHRvbSAtIHRvcCkgLyAoY29udGFpbmVySGVpZ2h0ICsgd2luZG93SGVpZ2h0KTtcblxuICAgIGlmIChib3R0b20gPiBzY3JvbGxUb3AgJiYgdG9wIDwgc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0KSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwYXJhbGxheERpc3QgKiBwZXJjZW50U2Nyb2xsZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tLCBpc01vYmlsZSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBUaGlzIGZpbGUgaW5jbHVkZXMgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIGRyb3Bkb3duXG4gKiBtZW51cy5cbiAqXG4gKiBCeSBkZWZhdWx0IGFsbCBIVE1MIGVsZW1lbnRzIHdpdGggY2xhc3MgYGZzLW1lbnVgXG4gKiBhcmUgYXV0b21hdGljYWxseSBiaW5kZWQuXG4gKlxuICogQWxzbywgbWVudSBpdGVtcyB3aXRoIGNsYXNzICduby1jbGljaycgYXJlIHNldHVwIHRvXG4gKiBwcmV2ZW50IHRoZSBkZWZhdWx0IGNsaWNrIGJlaGF2aW9yLlxuICpcbiAqIEBzdW1tYXJ5ICBEcm9wZG93biBNZW51c1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIG1lbnUuanNcbiAqL1xuY2xhc3MgTWVudSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgbWVudWAgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJG1lbnUgPSAkKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCRtZW51LmRhdGEoJ2RlbGF5JykgfHwgMCA9PT0gJG1lbnUuZGF0YSgnZGVsYXknKSkge1xuICAgICAgdGhpcy5zZXR0aW5ncy5kZWxheSA9ICRtZW51LmRhdGEoJ2RlbGF5Jyk7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lciA9IHt9OyAvLyBLZWVwIHRyYWNrIG9mIGRlbGF5ZWQgdHJhbnNpdGlvbnMuXG4gICAgdGhpcy5mbHlvdXQgPSB0aGlzLmZseW91dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2hvdyA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpO1xuXG4gICAgY29uc3QgeyBmbHlvdXQsIHNob3csIGhpZGUgfSA9IHRoaXM7XG5cbiAgICAkbWVudS5yZW1vdmVDbGFzcygnbm8tanMnKTtcblxuICAgIC8qXG4gICAgICogVHJpZ2dlcnMgZHJvcGRvd24gc2hvdyBhbmQgaGlkZSwgdXBvbiBtb3VzZWVudGVyXG4gICAgICogYW5kIG1vdXNlbGVhdmUuXG4gICAgICovXG4gICAgJG1lbnVcbiAgICAgIC5maW5kKCdsaScpXG4gICAgICAuaGFzKHRoaXMuc2V0dGluZ3MuZHJvcERvd25TZWxlY3RvcilcbiAgICAgIC5hZGRDbGFzcygnbWVudS1pdGVtLWhhcy1jaGlsZHJlbicpXG4gICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHRyaWdnZXIgPSAkKHRoaXMpO1xuICAgICAgICBmbHlvdXQoJHRyaWdnZXIpOyAvLyBEZXRlcm1pbmUgYW5kIGFkZHMgY2xhc3MgZm9yIGZseW91dCBkaXJlY3Rpb24uXG4gICAgICAgIHNob3coJHRyaWdnZXIpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBoaWRlKCQodGhpcykpO1xuICAgICAgfSlcbiAgICAgIC5maW5kKCc+IGEnKVxuICAgICAgLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJzdWItaW5kaWNhdG9yXCI+PC9zcGFuPicpO1xuXG4gICAgLy8gQWRkcyBDU1MgY2xhc3NlcyB0byBlYWNoIGxldmVsIG9mIHRoZSBtZW51LCAxLTMuXG4gICAgJG1lbnUuY2hpbGRyZW4oJ2xpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcylcbiAgICAgICAgLmFkZENsYXNzKCdsZXZlbC0xJylcbiAgICAgICAgLmNoaWxkcmVuKCd1bCcpXG4gICAgICAgIC5jaGlsZHJlbignbGknKVxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2xldmVsLTInKVxuICAgICAgICAgICAgLmNoaWxkcmVuKCd1bCcpXG4gICAgICAgICAgICAuY2hpbGRyZW4oJ2xpJylcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsZXZlbC0zJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgbW9iaWxlIHRvdWNoIHN1cHBvcnQuXG4gICAgaWYgKGlzTW9iaWxlKCkpIHtcbiAgICAgIC8vIFRhcCBhbnl3aGVyZSBvbiBpT1MgdG8gdW5mb2N1cyBhIHN1Ym1lbnUuXG4gICAgICAkKCdodG1sJylcbiAgICAgICAgLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgICAgICAub24oJ2NsaWNrJywgJC5ub29wKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCBtZW51IG9wdGlvbnMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGF5OiA1MDAsXG4gICAgICBkcm9wRG93blNlbGVjdG9yOiAndWw6bm90KC5tZWdhLXN1Yi1tZW51KSwgLmZzLW1lZ2EnXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBkaXJlY3Rpb24gdGhlIGRyb3Bkb3duIG1lbnUgc2hvdWxkXG4gICAqIGZseW91dCB0b3dhcmRzLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0cmlnZ2VyIFRoZSBwYXJlbnQgbWVudSBpdGVtLCBmb3Igd2hpY2ggdGhlIGRyb3Bkb3duIGJlbG9uZ3MgdG8uXG4gICAqL1xuICBmbHlvdXQoJHRyaWdnZXIpIHtcbiAgICBpZiAoISR0cmlnZ2VyLmhhc0NsYXNzKCdsZXZlbC0xJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRyb3BEb3duU2VsZWN0b3IgfSA9IHRoaXMuc2V0dGluZ3M7XG4gICAgY29uc3QgeyAkYm9keSB9ID0gZG9tO1xuICAgIGNvbnN0ICRmbHlvdXQgPSAkdHJpZ2dlci5jaGlsZHJlbihkcm9wRG93blNlbGVjdG9yKTtcbiAgICB2YXIgbG9jYXRpb24gPSAkdHJpZ2dlci5vZmZzZXQoKTtcbiAgICB2YXIgc3BhY2UgPSAyMDA7XG5cbiAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ3J0bCcpKSB7XG4gICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uWydyaWdodCddO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uWydsZWZ0J107XG4gICAgfVxuXG4gICAgaWYgKCRmbHlvdXQuZmluZCgnLmxldmVsLTMnKS5sZW5ndGggPiAwKSB7XG4gICAgICBzcGFjZSArPSBzcGFjZTsgLy8gU3BhY2UgZG91YmxlcyBmb3IgbGV2ZWwgMy5cbiAgICB9XG5cbiAgICAvLyBDYW4ndCB1c2VkIGNhY2hlZCB3aW5kb3cgaGVyZS5cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgLSBsb2NhdGlvbiA8PSBzcGFjZSkge1xuICAgICAgJGZseW91dC5hZGRDbGFzcygncmV2ZXJzZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZmx5b3V0LnJlbW92ZUNsYXNzKCdyZXZlcnNlJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGEgZHJvcGRvd24gbWVudS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBUaGUgcGFyZW50IG1lbnUgaXRlbSwgZm9yIHdoaWNoIHRoZSBkcm9wZG93biBiZWxvbmdzIHRvLlxuICAgKi9cbiAgc2hvdygkdHJpZ2dlcikge1xuICAgIGNvbnN0IHsgZHJvcERvd25TZWxlY3RvciB9ID0gdGhpcy5zZXR0aW5ncztcbiAgICBjb25zdCBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoJHRyaWdnZXIpO1xuICAgIGNvbnN0ICRzaWJsaW5ncyA9ICR0cmlnZ2VyLnNpYmxpbmdzKCkuZmluZChkcm9wRG93blNlbGVjdG9yKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJHRyaWdnZXIuY2hpbGRyZW4oZHJvcERvd25TZWxlY3Rvcik7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcltsZXZlbF0pO1xuXG4gICAgJHNpYmxpbmdzLnJlbW92ZUNsYXNzKCdpbicpO1xuXG4gICAgJHRhcmdldC5hZGRDbGFzcygnc2hvdyBmYWRlJyk7XG5cbiAgICB0aGlzLnRpbWVyW2xldmVsXSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkc2libGluZ3MucmVtb3ZlQ2xhc3MoJ3Nob3cgZmFkZScpO1xuICAgICAgJHRhcmdldC5hZGRDbGFzcygnaW4nKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGEgZHJvcGRvd24gbWVudS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBUaGUgcGFyZW50IG1lbnUgaXRlbSwgZm9yIHdoaWNoIHRoZSBkcm9wZG93biBiZWxvbmdzIHRvLlxuICAgKi9cbiAgaGlkZSgkdHJpZ2dlciwgc2V0dGluZ3MpIHtcbiAgICBjb25zdCB7IGRyb3BEb3duU2VsZWN0b3IsIGRlbGF5IH0gPSB0aGlzLnNldHRpbmdzO1xuICAgIGNvbnN0IGxldmVsID0gdGhpcy5nZXRMZXZlbCgkdHJpZ2dlcik7XG4gICAgY29uc3QgJGZseW91dCA9ICR0cmlnZ2VyLmNoaWxkcmVuKGRyb3BEb3duU2VsZWN0b3IpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJbbGV2ZWxdKTtcblxuICAgIHRoaXMudGltZXJbbGV2ZWxdID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRmbHlvdXQucmVtb3ZlQ2xhc3MoJ2luJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICRmbHlvdXQucmVtb3ZlQ2xhc3MoJ3Nob3cgZmFkZScpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgY3VycmVudCBsZXZlbCBvZiB0aGUgZHJvcGRvd24gcGFyZW50XG4gICAqIGl0ZW0gYmVpbmcgdHJpZ2dlcmVkLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAkdHJpZ2dlciBUaGUgcGFyZW50IG1lbnUgaXRlbSwgZm9yIHdoaWNoIHRoZSBkcm9wZG93biBiZWxvbmdzIHRvLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IEN1cnJlbnQgbWVudSBsZXZlbCwgYGxldmVsLTFgLCBgbGV2ZWwtMmAgb3IgYGxldmVsLTNgLlxuICAgKi9cbiAgZ2V0TGV2ZWwoJHRyaWdnZXIpIHtcbiAgICBpZiAoJHRyaWdnZXIuaGFzQ2xhc3MoJ2xldmVsLTMnKSkge1xuICAgICAgcmV0dXJuICdsZXZlbC0zJztcbiAgICB9IGVsc2UgaWYgKCR0cmlnZ2VyLmhhc0NsYXNzKCdsZXZlbC0yJykpIHtcbiAgICAgIHJldHVybiAnbGV2ZWwtMic7XG4gICAgfVxuICAgIHJldHVybiAnbGV2ZWwtMSc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiIsIi8qKlxuICogQWRkcyBzdWJtZW51IG5hdmlnYXRpb24gdG8gbW9iaWxlIG1lbnVzLlxuICpcbiAqIEBzdW1tYXJ5ICBNb2JpbGUgTWVudXNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBtb2JpbGUtbWVudS5qc1xuICovXG5jbGFzcyBNb2JpbGVNZW51IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGBtb2JpbGUtbWVudWAgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMgKGN1cnJlbnRseSBub3QgdXNlZCkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJG1lbnUgPSAkKGVsZW1lbnQpO1xuICAgIGNvbnN0ICR0cmlnZ2VycyA9ICRtZW51LmZpbmQoJ2xpJykuaGFzKCd1bCcpO1xuICAgIGNvbnN0IHsgc2hvdywgaGlkZSB9ID0gdGhpcztcblxuICAgICR0cmlnZ2Vyc1xuICAgICAgLmFkZENsYXNzKCdtZW51LWl0ZW0taGFzLWNoaWxkcmVuJylcbiAgICAgIC5jaGlsZHJlbignLm1lbnUtYnRuJylcbiAgICAgIC5vbignY2xpY2suZnMubW9iaWxlLW1lbnUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzaG93KCQodGhpcykpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJzdWItaW5kaWNhdG9yXCI+PC9zcGFuPicpO1xuXG4gICAgJHRyaWdnZXJzXG4gICAgICAuZmluZCgndWwnKVxuICAgICAgLnByZXBlbmQoJzxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwibWVudS1idG4gYmFja1wiPjxzcGFuIGNsYXNzPVwic3ViLWluZGljYXRvclwiPjwvc3Bhbj48L2E+PC9saT4nKVxuICAgICAgLmZpbmQoJy5iYWNrJylcbiAgICAgIC5vbignY2xpY2suZnMubW9iaWxlLW1lbnUtYmFjaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhpZGUoJCh0aGlzKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgJG1lbnUuaGVpZ2h0KCRtZW51LnByb3AoJ3Njcm9sbEhlaWdodCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGEgc3VibWVudS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBQYXJlbnQgbWVudSBpdGVtIHRyaWdnZXJpbmcgc3VibWVudS5cbiAgICovXG4gIHNob3coJHRyaWdnZXIpIHtcbiAgICAkdHJpZ2dlclxuICAgICAgLmNsb3Nlc3QoJ2xpJylcbiAgICAgIC5jaGlsZHJlbigndWwnKVxuICAgICAgLmFkZENsYXNzKCdvbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgYSBzdWJtZW51LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0cmlnZ2VyIFBhcmVudCBtZW51IGl0ZW0gdHJpZ2dlcmluZyBzdWJtZW51LlxuICAgKi9cbiAgaGlkZSgkdHJpZ2dlcikge1xuICAgICR0cmlnZ2VyLmNsb3Nlc3QoJ3VsJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBkb20gfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGJpbmRzIHByZXNldCBpbnN0YW5jZXMgb2YgTWFnbmlmaWMgUG9wdXAuXG4gKlxuICogTWFnbmlmaWMgUG9wdXAgaXMgYW4gb3BlbiBzb3VyY2UgbGlnaHRib3ggc2NyaXB0XG4gKiBieSBEbWl0cnkgU2VtZW5vdi5cbiAqXG4gKiBAbGluayBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9cbiAqXG4gKiBAc3VtbWFyeSAgTW9kYWxzXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgbW9kYWwuanNcbiAqIEByZXF1aXJlcyBtYWduaWZpYy1wb3B1cC5qc1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oJCkge1xuICBpZiAoISQuZm4ubWFnbmlmaWNQb3B1cCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgJGRvY3VtZW50IH0gPSBkb207XG5cbiAgJGRvY3VtZW50LnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgICB2YXIgbWFpbkNsYXNzID0gJ2ZzLW1vZGFsJztcbiAgICB2YXIgcmVtb3ZhbERlbGF5ID0gMDtcblxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBhbmltYXRpb246ICdmYWRlJyxcbiAgICAgIG1vYmlsZTogMCxcbiAgICAgIG1vYmlsZUlmcmFtZTogNzY4LFxuICAgICAgbW9iaWxlR2FsbGVyeTogMCxcbiAgICAgIGVycm9yOiAnVGhlIG1vZGFsIG1lZGlhIGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcbiAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuICAgICAgY291bnRlcjogJyVjdXJyJSBvZiAldG90YWwlJyxcbiAgICAgIG5leHQ6ICdOZXh0JyxcbiAgICAgIHByZXZpb3VzOiAnUHJldmlvdXMnLFxuICAgICAgY2xvc2VNYXJrdXA6XG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1jbG9zZSBmcy1jbG9zZSBjbG9zZS1saWdodCBjbG9zZS1tZFwiPiV0aXRsZSU8L2J1dHRvbj4nXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93LmZzTW9kYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgY29uZmlnLCB3aW5kb3cuZnNNb2RhbCk7IC8vIEFuIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHlvdSBjb3VsZCBkZWNsYXJlLlxuICAgIH1cblxuICAgIGlmIChjb25maWcuYW5pbWF0aW9uICYmIGNvbmZpZy5hbmltYXRpb24gIT09ICdub25lJykge1xuICAgICAgbWFpbkNsYXNzID0gYCR7bWFpbkNsYXNzfSBmcy1tb2RhbC0ke2NvbmZpZ1snYW5pbWF0aW9uJ119YDtcbiAgICAgIHJlbW92YWxEZWxheSA9IDE1MDtcbiAgICB9XG5cbiAgICAkLmV4dGVuZCh0cnVlLCAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMsIHtcbiAgICAgIHRDbG9zZTogY29uZmlnLmNsb3NlLFxuICAgICAgdExvYWRpbmc6IGA8ZGl2IGNsYXNzPVwiZnMtbG9hZGVyXCI+PHNwYW4+JHtjb25maWcubG9hZGluZ308L3NwYW4+PC9kaXY+YCxcbiAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgdFByZXY6IGNvbmZpZy5wcmV2aW91cyxcbiAgICAgICAgdE5leHQ6IGNvbmZpZy5uZXh0LFxuICAgICAgICB0Q291bnRlcjogY29uZmlnLmNvdW50ZXJcbiAgICAgIH0sXG4gICAgICBpbWFnZToge1xuICAgICAgICB0RXJyb3I6IGNvbmZpZy5lcnJvclxuICAgICAgfSxcbiAgICAgIGFqYXg6IHtcbiAgICAgICAgdEVycm9yOiBjb25maWcuZXJyb3JcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5mcy1tb2RhbC1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtY29udGVudC1tb2RhbC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIG1haW5DbGFzczogbWFpbkNsYXNzLFxuICAgICAgYWxpZ25Ub3A6IHRydWUsXG4gICAgICBzaG93Q2xvc2VCdG46IGZhbHNlLFxuICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLm1mcC13cmFwIC5mcy1tb2RhbCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVDbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLm1mcC13cmFwIC5mcy1tb2RhbCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5mcy1zZWFyY2gtbW9kYWwtbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICBtYWluQ2xhc3M6IG1haW5DbGFzcyArICcgbWZwLXNlYXJjaCcsXG4gICAgICBjbG9zZUJ0bkluc2lkZTogZmFsc2UsXG4gICAgICBjbG9zZU1hcmt1cDogY29uZmlnLmNsb3NlTWFya3VwLFxuICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLm1mcC13cmFwIC5mcy1zZWFyY2gtbW9kYWwnKS5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2Uud3JhcFswXS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQoJy5tZnAtc2VhcmNoIC5mcy1zZWFyY2gtbW9kYWwgaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpLmZvY3VzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcubWZwLXdyYXAgLmZzLXNlYXJjaC1tb2RhbCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5mcy1tb2RhbC1nYWxsZXJ5LCAudGhlbWVibHZkLWdhbGxlcnknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJGdhbGxlcnkgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgJ3RoZW1lYmx2ZC1saWdodGJveCcsXG4gICAgICAgICdmcy1jb250ZW50LW1vZGFsLWxpbmsnLFxuICAgICAgICAnZnMtaW1hZ2UtbW9kYWwtbGluaycsXG4gICAgICAgICdmcy1pZnJhbWUtbW9kYWwtbGluaydcbiAgICAgIF07XG4gICAgICBjb25zdCBzZWxlY3RvciA9ICcuJyArIGNsYXNzZXMuam9pbignLCAuJyk7XG5cbiAgICAgICRnYWxsZXJ5LmZpbmQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGxpbmtDbGFzcyA9ICcnO1xuXG4gICAgICAgIGlmICgkbGluay5oYXNDbGFzcygnZnMtY29udGVudC1tb2RhbC1saW5rJykpIHtcbiAgICAgICAgICBsaW5rQ2xhc3MgPSAnbWZwLWlubGluZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoJGxpbmsuaGFzQ2xhc3MoJ2ZzLWltYWdlLW1vZGFsLWxpbmsnKSkge1xuICAgICAgICAgIGxpbmtDbGFzcyA9ICdtZnAtaW1hZ2UnO1xuICAgICAgICB9IGVsc2UgaWYgKCRsaW5rLmhhc0NsYXNzKCdmcy1pZnJhbWUtbW9kYWwtbGluaycpKSB7XG4gICAgICAgICAgbGlua0NsYXNzID0gJ21mcC1pZnJhbWUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlua0NsYXNzID0gYGZzLWdhbGxlcnktbW9kYWwtbGluayAke2xpbmtDbGFzc31gO1xuXG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKGNsYXNzZXMuam9pbignICcpKS5hZGRDbGFzcyhsaW5rQ2xhc3MpO1xuICAgICAgfSk7XG5cbiAgICAgICRnYWxsZXJ5Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICBtYWluQ2xhc3M6IG1haW5DbGFzcyxcbiAgICAgICAgY2xvc2VNYXJrdXA6IGNvbmZpZy5jbG9zZU1hcmt1cCxcbiAgICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICAgIGRpc2FibGVPbjogY29uZmlnLm1vYmlsZUdhbGxlcnksXG4gICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgY3Vyc29yOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGVnYXRlOiAnYS5mcy1nYWxsZXJ5LW1vZGFsLWxpbmsnLFxuICAgICAgICBpZnJhbWU6IHtcbiAgICAgICAgICAvLyBBZGQgYm90dG9tIGJhciBmb3IgaWZyYW1lc1xuICAgICAgICAgIG1hcmt1cDogYDxkaXYgY2xhc3M9XCJtZnAtaWZyYW1lLXNjYWxlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWZwLWNsb3NlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWZwLWJvdHRvbS1iYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWZwLXRpdGxlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICB9LFxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBtYXJrdXBQYXJzZTogZnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuICAgICAgICAgICAgdmFsdWVzLnRpdGxlID0gaXRlbS5lbC5hdHRyKCd0aXRsZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtaW1hZ2UtbW9kYWwtbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIG1haW5DbGFzczogbWFpbkNsYXNzLFxuICAgICAgY2xvc2VNYXJrdXA6IGNvbmZpZy5jbG9zZU1hcmt1cCxcbiAgICAgIHJlbW92YWxEZWxheTogcmVtb3ZhbERlbGF5LFxuICAgICAgZGlzYWJsZU9uOiBjb25maWcubW9iaWxlLFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgY3Vyc29yOiBudWxsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtaWZyYW1lLW1vZGFsLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgbWFpbkNsYXNzOiBtYWluQ2xhc3MsXG4gICAgICBjbG9zZU1hcmt1cDogY29uZmlnLmNsb3NlTWFya3VwLFxuICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICBkaXNhYmxlT246IGNvbmZpZy5tb2JpbGVJZnJhbWUsXG4gICAgICBpZnJhbWU6IHtcbiAgICAgICAgLy8gQWRkIGJvdHRvbSBiYXIgZm9yIGlmcmFtZXNcbiAgICAgICAgbWFya3VwOlxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLWlmcmFtZS1zY2FsZXJcIj4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicgK1xuICAgICAgICAgICc8aWZyYW1lIGNsYXNzPVwibWZwLWlmcmFtZVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1ib3R0b20tYmFyXCI+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtdGl0bGVcIj48L2Rpdj4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICc8L2Rpdj4nXG4gICAgICB9LFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG1hcmt1cFBhcnNlOiBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtKSB7XG4gICAgICAgICAgdmFsdWVzLnRpdGxlID0gaXRlbS5lbC5hdHRyKCd0aXRsZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSkoJCk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIFRoaXMgZmlsZSBiaW5kcyBwcmVzZXQgaW5zdGFuY2VzIG9mIE93bENhcm91c2VsLFxuICogYWxsb3dpbmcgZm9yIHRob3NlIHRvIGJlIGNvbmZpZ3VyZWQgdGhyb3VnaCB0aGVcbiAqIEhUTUwgbWFya3VwLlxuICpcbiAqIE93bENhcm91c2VsIGlzIGFuIG9wZW4gc291cmNlIGNhcm91c2VsL3NsaWRlclxuICogc2NyaXB0IGJ5IERhdmlkIERldXRzY2guXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9vd2xjYXJvdXNlbDIuZ2l0aHViLmlvL093bENhcm91c2VsMi9cbiAqXG4gKiBAc3VtbWFyeSAgU2xpZGVyc1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIG1vZGFsLmpzXG4gKiBAcmVxdWlyZXMgb3dsLWNhcm91c2VsLmpzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCQpIHtcbiAgaWYgKCEkLmZuLm93bENhcm91c2VsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyAkd2luZG93LCAkYm9keSB9ID0gZG9tO1xuXG4gICR3aW5kb3cub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuZnMtc2ltcGxlLXNsaWRlciwgLmZzLWdhbGxlcnktc2xpZGVyLCAuZnMtYmxvY2stc2xpZGVyJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkd3JhcCA9ICQodGhpcyksXG4gICAgICAgICRzbGlkZXIgPSAkd3JhcC5maW5kKCcuZnMtc2xpZGVyJyksXG4gICAgICAgIGl0ZW1zID0gcGFyc2VJbnQoJHdyYXAuZGF0YSgnaXRlbXMnKSkgPyBwYXJzZUludCgkd3JhcC5kYXRhKCdpdGVtcycpKSA6IDQsXG4gICAgICAgIHNwZWVkID0gcGFyc2VJbnQoJHdyYXAuZGF0YSgnc3BlZWQnKSkgPyBwYXJzZUludCgkd3JhcC5kYXRhKCdzcGVlZCcpKSA6IDUwMCxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0ID0gcGFyc2VJbnQoJHdyYXAuZGF0YSgnYXV0b3BsYXknKSkgPyBwYXJzZUludCgkd3JhcC5kYXRhKCdhdXRvcGxheScpKSA6IDAsXG4gICAgICAgIG1hcmdpbiA9IHBhcnNlSW50KCR3cmFwLmRhdGEoJ21hcmdpbicpKSA/IHBhcnNlSW50KCR3cmFwLmRhdGEoJ21hcmdpbicpKSA6IDEsXG4gICAgICAgIGF1dG9wbGF5ID0gYXV0b3BsYXlUaW1lb3V0ID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBwYXVzZSA9ICd0cnVlJyA9PSAkd3JhcC5kYXRhKCdwYXVzZScpIHx8ICR3cmFwLmRhdGEoJ3BhdXNlJykgPT0gJzEnID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBsb29wID0gJ2ZhbHNlJyA9PSAkd3JhcC5kYXRhKCdsb29wJykgfHwgJHdyYXAuZGF0YSgnbG9vcCcpID09ICcwJyA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgICAgYW5pbWF0ZSA9ICd0cnVlJyA9PSAkd3JhcC5kYXRhKCdmYWRlJykgfHwgJHdyYXAuZGF0YSgnZmFkZScpID09ICcxJyA/ICdmYWRlT3V0JyA6IGZhbHNlLFxuICAgICAgICBhdXRvV2lkdGggPSAkd3JhcC5oYXNDbGFzcygnZnMtZ2FsbGVyeS1zbGlkZXInKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgY2VudGVyID0gJHdyYXAuaGFzQ2xhc3MoJ2ZzLWdhbGxlcnktc2xpZGVyJykgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICRuYXYgPSAkd3JhcC5maW5kKCcuZnMtc2xpZGVyLW5hdiwgLmZzLXNsaWRlci10aHVtYnMnKSxcbiAgICAgICAgJGFycm93cyA9ICR3cmFwLmZpbmQoJy5mcy1zbGlkZXItYXJyb3dzJyksXG4gICAgICAgIG5hdkNvdW50ZXIgPSAwLFxuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcblxuICAgICAgLy8gVG9nZ2xlIFwiaG92ZXJlZFwiIGNsYXNzIG9uL29mZiBmb3IgYW55IENTUyBob3ZlciBlZmZlY3RzLlxuICAgICAgJHdyYXBcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaG92ZXJlZCcpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdob3ZlcmVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgc2xpZGUtdG8gZGF0YSB0byBlYWNoIG5hdiBpdGVtLlxuICAgICAgJG5hdi5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuZGF0YSgnc2xpZGUtdG8nLCBuYXZDb3VudGVyKTtcbiAgICAgICAgbmF2Q291bnRlcisrO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICgkd3JhcC5oYXNDbGFzcygnZnMtc2ltcGxlLXNsaWRlcicpKSB7XG4gICAgICAgIG1hcmdpbiA9IDA7XG4gICAgICAgIGl0ZW1zID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoJHdyYXAuaGFzQ2xhc3MoJ2ZzLWdhbGxlcnktc2xpZGVyJykpIHtcbiAgICAgICAgaXRlbXMgPSAxO1xuICAgICAgfVxuXG4gICAgICAkc2xpZGVyLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBkb3RzOiB0cnVlLCAvLyBNdXN0IGJlIGVuYWJsZWQgZm9yIGUucGFnZS5pbmRleCB0byB3b3JrLlxuICAgICAgICBsb29wOiBsb29wLFxuICAgICAgICBzbWFydFNwZWVkOiBzcGVlZCxcbiAgICAgICAgYXV0b3BsYXk6IGF1dG9wbGF5LFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IGF1dG9wbGF5VGltZW91dCxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiBwYXVzZSxcbiAgICAgICAgYW5pbWF0ZU91dDogYW5pbWF0ZSxcbiAgICAgICAgYXV0b1dpZHRoOiBhdXRvV2lkdGgsXG4gICAgICAgIG1hcmdpbjogbWFyZ2luLFxuICAgICAgICBjZW50ZXI6IGNlbnRlcixcbiAgICAgICAgcnRsOiAkYm9keS5oYXNDbGFzcygncnRsJykgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIG9uSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAkbmF2LmZpbmQoJ2xpOmZpcnN0LWNoaWxkJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICR3cmFwLnJlbW92ZUNsYXNzKCdsb2FkaW5nJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAgICAgICAgIGlmICghbG9vcCkgJGFycm93cy5maW5kKCdsaScpLmFkZENsYXNzKCdmYWRlJyk7XG4gICAgICAgICAgJHdyYXAuZmluZCgnLmZzLWxvYWRlcicpLmZhZGVPdXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2VkOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBNYWtlIHN1cmUgbmV4dCBhbmQgcHJldiBidXR0b25zIGRvbid0IHNob3dcbiAgICAgICAgICAgKiB3aGVuIGF0IHN0YXJ0IGFuZCBlbmQgb2YgY3ljbGUsIGlmIHRoZXJlJ3NcbiAgICAgICAgICAgKiBubyBsb29waW5nLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICghbG9vcCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkd3JhcC5oYXNDbGFzcygnZnMtYmxvY2stc2xpZGVyJykgPyBlLml0ZW0uaW5kZXggOiBlLnBhZ2UuaW5kZXg7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwIHx8IGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICAgICRhcnJvd3MuZmluZCgnbGkucHJldicpLnJlbW92ZUNsYXNzKCdpbicpO1xuICAgICAgICAgICAgICAkYXJyb3dzLmZpbmQoJ2xpLm5leHQnKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5wYWdlLmluZGV4ICsgMSA9PSBlLnBhZ2UuY291bnQpIHtcbiAgICAgICAgICAgICAgJGFycm93cy5maW5kKCdsaS5uZXh0JykucmVtb3ZlQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICAgICRhcnJvd3MuZmluZCgnbGkucHJldicpLmFkZENsYXNzKCdpbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGFycm93cy5maW5kKCdsaScpLmFkZENsYXNzKCdpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN0YW5kYXJkIG5hdmlnYXRpb24gZG90cy5cbiAgICAgICAgICAkbmF2LmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICRuYXYuZmluZCgnbGk6bnRoLWNoaWxkKCAnICsgKGUucGFnZS5pbmRleCArIDEpICsgJyApJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQmluZCBzdGFuZGFyZCBzbGlkZXIgbmF2IGFuZCB0aHVtYiBuYXYuXG4gICAgICAkbmF2LmZpbmQoJ2xpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRjdXJyZW50ID0gJCh0aGlzKTtcblxuICAgICAgICAkc2xpZGVyLnRyaWdnZXIoJ3RvLm93bC5jYXJvdXNlbCcsICRjdXJyZW50LmRhdGEoJ3NsaWRlLXRvJykpO1xuXG4gICAgICAgICRjdXJyZW50XG4gICAgICAgICAgLmNsb3Nlc3QoJ3VsLCBvbCcpXG4gICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICRjdXJyZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBCaW5kIHNsaWRlciBhcnJvdyBuZXh0L3ByZXYgbmF2LlxuICAgICAgJGFycm93cy5maW5kKCdsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAkc2xpZGVyLnRyaWdnZXIoICdzdG9wLm93bC5hdXRvcGxheScgKTsgLy8gRG9lc24ndCB3b3JrIHJpZ2h0IGFzIG9mIHYyLjIuMS5cbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ25leHQnKSkge1xuICAgICAgICAgICRzbGlkZXIudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2xpZGVyLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pOyAvLyBFbmQgLmVhY2goKVxuICB9KTsgLy8gRW5kIC5vbiggJ2xvYWQnIClcbn0pKCQpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvbSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBBZGRzIHRhYnMgYmxvY2sgZnVuY3Rpb25hbGl0eSwgd2hpY2ggYWxsb3dzXG4gKiB0b2dnbGluZyBiZXR3ZWVuIHRhYiBjb250ZW50IHBhbmVzLlxuICpcbiAqIEBzdW1tYXJ5ICBUYWJzXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgdGFiYmVkLmpzXG4gKi9cbmNsYXNzIFRhYmJlZCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgdGFic2AgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMgKGN1cnJlbnRseSBub3QgdXNlZCkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJHRhYnMgPSAkKGVsZW1lbnQpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHsgJHdpbmRvdyB9ID0gZG9tO1xuXG4gICAgdGhpcy5kZWVwTGluayA9IHRoaXMuZGVlcExpbmsuYmluZCh0aGlzKTtcblxuICAgIGNvbnN0IHsgc2hvdywgbWF0Y2hIZWlnaHQsIGRlZXBMaW5rIH0gPSB0aGlzO1xuXG4gICAgLypcbiAgICAgKiBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYmVpbmcgYWRkZWQgdG8gdGhlIHRhYnMgZWxlbWVudFxuICAgICAqIGNhbiBvdmVycmlkZSB0aGUgaGVpZ2h0IGFuZCBkZWVwTGluayBvcHRpb25zLlxuICAgICAqL1xuICAgIGlmICgkdGFicy5oYXNDbGFzcygndGFicy1maXhlZC1oZWlnaHQnKSkge1xuICAgICAgc2V0dGluZ3MuaGVpZ2h0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoJHRhYnMuaGFzQ2xhc3MoJ3RhYnMtZGVlcC1saW5rJykpIHtcbiAgICAgIHNldHRpbmdzLmRlZXBMaW5rID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCBhY2Nlc3NpYmxpdHkuXG4gICAgJHRhYnMuZmluZCgnLnRhYi1wYW5lJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkcGFuZSA9ICQodGhpcyk7XG5cbiAgICAgIGlmICgkcGFuZS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgJHBhbmUuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHBhbmUuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRvZ2dsZSB0YWIgY29udGVudC5cbiAgICAkdGFic1xuICAgICAgLmZpbmQoc2V0dGluZ3MubmF2U2VsZWN0b3IpXG4gICAgICAuZmluZCgnYScpXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2hvdygkdGFicywgJCh0aGlzKSwgc2V0dGluZ3MpO1xuICAgICAgfSk7XG5cbiAgICAvLyBTZXR1cCBmaXhlZCBoZWlnaHQgYW5kL29yIGRlZXAtbGlua2luZy5cbiAgICBpZiAoc2V0dGluZ3MuaGVpZ2h0IHx8IHNldHRpbmdzLmRlZXBMaW5rKSB7XG4gICAgICAkd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIE1hdGNoIGhlaWdodCBvZiBhbGwgdGFicyB0byB0YWxsZXN0LlxuICAgICAgICBpZiAoc2V0dGluZ3MuaGVpZ2h0KSB7XG4gICAgICAgICAgbWF0Y2hIZWlnaHQoJHRhYnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yIGRlZXAtbGlua2luZy5cbiAgICAgICAgaWYgKHNldHRpbmdzLmRlZXBMaW5rKSB7XG4gICAgICAgICAgZGVlcExpbmsoJHRhYnMsIHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdGFicyBvcHRpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYXZTZWxlY3RvcjogJy5tZW51LWJhciwgLnN1Ym1lbnUtYmFyLCAuc3VibWVudS10YWJzLCAuc3VibWVudS1waWxscycsXG4gICAgICBoZWlnaHQ6IGZhbHNlLFxuICAgICAgZGVlcExpbms6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGEgdGFiLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0YWJzICAgIFRoZSBiaW5kZWQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRyaWdnZXIgTGluayAodGFiKSB3aGljaCBpcyB0cmlnZ2VyaW5nIG5ldyBjb250ZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gICAqL1xuICBzaG93KCR0YWJzLCAkdHJpZ2dlciwgc2V0dGluZ3MpIHtcbiAgICBjb25zdCAkbmF2ID0gJHRyaWdnZXIuY2xvc2VzdChzZXR0aW5ncy5uYXZTZWxlY3Rvcik7XG4gICAgY29uc3QgdGFyZ2V0ID0gJHRyaWdnZXIuYXR0cignaHJlZicpLnNwbGl0KCcjJylbMV07XG5cbiAgICAkbmF2LmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgJHRyaWdnZXIuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAkdGFic1xuICAgICAgLmZpbmQoJy50YWItcGFuZScpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgLnJlbW92ZUNsYXNzKCdpbicpXG4gICAgICAuaGlkZSgpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2ZhZGUnKTtcblxuICAgICR0YWJzXG4gICAgICAuZmluZCgnIycgKyB0YXJnZXQpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICAuYWRkQ2xhc3MoJ2ZhZGUnKVxuICAgICAgLnNob3coMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2luJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYWxsIHRhYiBjb250ZW50IHBhbmVzIHRvIGhhdmUgZXF1YWwgaGVpZ2h0LCB0b1xuICAgKiB0aGUgdGFsbGVzdCBvbmUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRhYnMgVGhlIGJpbmRlZCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqL1xuICBtYXRjaEhlaWdodCgkdGFicykge1xuICAgIHZhciB0YWxsZXN0ID0gMDtcblxuICAgICR0YWJzLmZpbmQoJy50YWItcGFuZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkcGFuZSA9ICQodGhpcyk7XG4gICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gJHBhbmUuc2hvdygpLm91dGVySGVpZ2h0KCk7XG5cbiAgICAgIGlmICghJHBhbmUuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICRwYW5lLmhpZGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgPiB0YWxsZXN0KSB7XG4gICAgICAgIHRhbGxlc3QgPSBjdXJyZW50SGVpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHRhYnMuZmluZCgnLnRhYi1wYW5lJykuaGVpZ2h0KHRhbGxlc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIGZvciB0YWIgZGVlcC1saW5raW5nLlxuICAgKlxuICAgKiBUYWIgZGVlcC1saW5raW5nIGlzIHdoZW4gdGhlIHVzZXIgcGFzc2VzIGEgdGFiIElEXG4gICAqIHRocm91Z2ggdGhlIFVSTCBvZiB0aGUgd2VicGFnZSB0byB0cmlnZ2VyIG9wZW5pbmdcbiAgICogYSBzcGVjaWZpYyB0YWIgcGFuZS5cbiAgICpcbiAgICogVG8gZGVlcCBsaW5rIHRvIGEgdGFiLCB5b3UgbmVlZCB0byBwcmVmaXhcbiAgICogdGhlIElEIG9mIHRoZSB0YWIgd2l0aCBcInRhYl9cIiBsaWtlIHRoaXM6XG4gICAqXG4gICAqIGBodHRwOi8veW91ci1zaXRlLmNvbS9wYWdlLXdpdGgtdGFicy8jdGFiX2lkX29mX3RhYmBcbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGFicyAgICBUaGUgYmluZGVkIGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICAgKi9cbiAgZGVlcExpbmsoJHRhYnMsIHNldHRpbmdzKSB7XG4gICAgdmFyIGhhc2ggPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoO1xuXG4gICAgaWYgKGhhc2ggJiYgLTEgIT0gaGFzaC5pbmRleE9mKCd0YWJfJykpIHtcbiAgICAgIGhhc2ggPSBoYXNoLnJlcGxhY2UoJ3RhYl8nLCAnJyk7XG5cbiAgICAgIHRoaXMuc2hvdygkdGFicywgJHRhYnMuZmluZCgnYVtocmVmPVwiJyArIGhhc2ggKyAnXCJdICcpLCBzZXR0aW5ncyk7XG5cbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkdGFicy5vZmZzZXQoKS50b3AgLSAyMFxuICAgICAgICB9LFxuICAgICAgICA4MDBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmJlZDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogQWRkcyB0b2dnbGVzIGJsb2NrIGZ1bmN0aW9uYWxpdHksIHdoaWNoIGFsbG93c1xuICogdG9nZ2xlIGRpc3BsYXkgb2YgY29udGVudC5cbiAqXG4gKiBAc3VtbWFyeSAgVG9nZ2xlXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgdG9nZ2xlLmpzXG4gKi9cbmNsYXNzIFRvZ2dsZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgdGFic2AgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJHRvZ2dsZSA9ICQoZWxlbWVudCk7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgY29uc3QgeyBvcGVuLCBjbG9zZSB9ID0gdGhpcztcblxuICAgIHZhciAkZ3JvdXAgPSBudWxsO1xuXG4gICAgaWYgKCR0b2dnbGUucGFyZW50cygnLnRvZ2dsZS1ncm91cCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICRncm91cCA9ICR0b2dnbGUuY2xvc2VzdCgnLnRvZ2dsZS1ncm91cCcpO1xuICAgIH1cblxuICAgIGlmICgkZ3JvdXAgJiYgJGdyb3VwLmhhc0NsYXNzKCd0b2dnbGUtYWNjb3JkaW9uJykpIHtcbiAgICAgIHNldHRpbmdzLmFjY29yZGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGFjY2Vzc2libGl0eS5cbiAgICAkdG9nZ2xlLmZpbmQoJy50b2dnbGUtY29udGVudCcpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAvLyBPcGVuIGluaXRpYWxseSBpZiBoYXMgY2xhc3MgYHRvZ2dsZS1leHBhbmRlZGAuXG4gICAgaWYgKCR0b2dnbGUuaGFzQ2xhc3MoJ3RvZ2dsZS1leHBhbmRlZCcpKSB7XG4gICAgICBvcGVuKCR0b2dnbGUsIHNldHRpbmdzLnNwZWVkKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgdG9nZ2xlIGNsaWNrLlxuICAgICR0b2dnbGUuZmluZCgnLnRvZ2dsZS10aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAkKHRoaXMpLmJsdXIoKTtcblxuICAgICAgaWYgKCR0b2dnbGUuaGFzQ2xhc3MoJ3RvZ2dsZS1leHBhbmRlZCcpKSB7XG4gICAgICAgIC8vIFRvZ2dsZSBpcyBvcGVuOyBzbyBjbG9zZSBpdC5cbiAgICAgICAgY2xvc2UoJHRvZ2dsZSwgc2V0dGluZ3Muc3BlZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCRncm91cCAmJiBzZXR0aW5ncy5hY2NvcmRpb24pIHtcbiAgICAgICAgICAkZ3JvdXAuZmluZCgnLmZzLXRvZ2dsZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbG9zZSgkKHRoaXMpLCBzZXR0aW5ncy5zcGVlZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUb2dnbGUgaXMgY2xvc2VkOyBzbyBvcGVuIGl0LlxuICAgICAgICBvcGVuKCR0b2dnbGUsIHNldHRpbmdzLnNwZWVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHRvZ2dsZSBvcHRpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzcGVlZDogMjAwLFxuICAgICAgYWNjb3JkaW9uOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBhIHRvZ2dsZS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdG9nZ2xlIFRoZSBiaW5kZWQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWQgICBBbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxuICAgKi9cbiAgb3BlbigkdG9nZ2xlLCBzcGVlZCkge1xuICAgICR0b2dnbGVcbiAgICAgIC5hZGRDbGFzcygndG9nZ2xlLWV4cGFuZGVkJylcbiAgICAgIC5maW5kKCcudG9nZ2xlLWNvbnRlbnQnKVxuICAgICAgLnN0b3AodHJ1ZSwgdHJ1ZSlcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIC5zbGlkZURvd24oc3BlZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIGEgdG9nZ2xlLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0b2dnbGUgVGhlIGJpbmRlZCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZCAgIEFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXG4gICAqL1xuICBjbG9zZSgkdG9nZ2xlLCBzcGVlZCkge1xuICAgICR0b2dnbGVcbiAgICAgIC5yZW1vdmVDbGFzcygndG9nZ2xlLWV4cGFuZGVkJylcbiAgICAgIC5maW5kKCcudG9nZ2xlLWNvbnRlbnQnKVxuICAgICAgLnN0b3AodHJ1ZSwgdHJ1ZSlcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAuc2xpZGVVcChzcGVlZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBBZGRzIHRvb2x0aXAgYmxvY2sgZnVuY3Rpb25hbGl0eS5cbiAqXG4gKiBJbnNwaXJlZCBieSBCb290c3RyYXAgMydzIHRvb2x0aXBzLmpzLCB3aGljaCB3YXMgaW5zcGlyZWRcbiAqIGJ5IHRoZSBvcmlnaW5hbCBqUXVlcnkudGlwc3kgYnkgSmFzb24gRnJhbWUuXG4gKlxuICogQHN1bW1hcnkgIFRvb2x0aXBcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICB0b29sdGlwLmpzXG4gKi9cbmNsYXNzIFRvb2x0aXAge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYHRvb2x0aXBgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBudWxsO1xuICAgIHRoaXMuZW5hYmxlZCA9IG51bGw7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmhvdmVyU3RhdGUgPSBudWxsO1xuICAgIHRoaXMuJGVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuaW5TdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICB0aGlzLnNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcbiAgICB0aGlzLiR2aWV3cG9ydCA9XG4gICAgICB0aGlzLnNldHRpbmdzLnZpZXdwb3J0ICYmXG4gICAgICAkKFxuICAgICAgICAkLmlzRnVuY3Rpb24odGhpcy5zZXR0aW5ncy52aWV3cG9ydClcbiAgICAgICAgICA/IHRoaXMuc2V0dGluZ3Mudmlld3BvcnQuY2FsbCh0aGlzLCB0aGlzLiRlbGVtZW50KVxuICAgICAgICAgIDogdGhpcy5zZXR0aW5ncy52aWV3cG9ydC5zZWxlY3RvciB8fCB0aGlzLnNldHRpbmdzLnZpZXdwb3J0XG4gICAgICApO1xuICAgIHRoaXMuaW5TdGF0ZSA9IHsgY2xpY2s6IGZhbHNlLCBob3ZlcjogZmFsc2UsIGZvY3VzOiBmYWxzZSB9O1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignbW91c2VlbnRlci50b29sdGlwJywgZmFsc2UsICQucHJveHkodGhpcy5lbnRlciwgdGhpcykpO1xuICAgIHRoaXMuJGVsZW1lbnQub24oJ21vdXNlbGVhdmUudG9vbHRpcCcsIGZhbHNlLCAkLnByb3h5KHRoaXMubGVhdmUsIHRoaXMpKTtcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2ZvY3VzaW4udG9vbHRpcCcsIGZhbHNlLCAkLnByb3h5KHRoaXMuZW50ZXIsIHRoaXMpKTtcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdmb2N1c291dC50b29sdGlwJywgZmFsc2UsICQucHJveHkodGhpcy5sZWF2ZSwgdGhpcykpO1xuXG4gICAgdGhpcy5nZXREZWxlZ2F0ZVNldHRpbmdzID0gdGhpcy5nZXREZWxlZ2F0ZVNldHRpbmdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbnRlciA9IHRoaXMuZW50ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlzSW5TdGF0ZVRydWUgPSB0aGlzLmlzSW5TdGF0ZVRydWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxlYXZlID0gdGhpcy5sZWF2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2hvdyA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXBwbHlQbGFjZW1lbnQgPSB0aGlzLmFwcGx5UGxhY2VtZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oaWRlID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYXNDb250ZW50ID0gdGhpcy5oYXNDb250ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQgPSB0aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFRpdGxlID0gdGhpcy5nZXRUaXRsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VUlEID0gdGhpcy5nZXRVSUQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRpcCA9IHRoaXMudGlwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hcnJvdyA9IHRoaXMuYXJyb3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVuYWJsZSA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVFbmFibGVkID0gdGhpcy50b2dnbGVFbmFibGVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdG9vbHRpcCBvcHRpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgdGVtcGxhdGU6XG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZnMtdG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBjb250YWluZXI6IGZhbHNlLFxuICAgICAgdmlld3BvcnQ6IHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgcGFkZGluZzogMFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBnZXREZWxlZ2F0ZVNldHRpbmdzKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge307XG5cbiAgICB0aGlzLl9zZXR0aW5ncyAmJlxuICAgICAgJC5lYWNoKHRoaXMuX3NldHRpbmdzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLmRlZmF1bHRzW2tleV0pIHtcbiAgICAgICAgICBzZXR0aW5nc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHNldHRpbmdzO1xuICB9XG5cbiAgZW50ZXIob2JqKSB7XG4gICAgdmFyIHNlbGYgPSBvYmogaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yID8gb2JqIDogJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcpO1xuXG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICBzZWxmID0gbmV3IHRoaXMuY29uc3RydWN0b3Iob2JqLmN1cnJlbnRUYXJnZXQsIHRoaXMuZ2V0RGVsZWdhdGVTZXR0aW5ncygpKTtcbiAgICAgICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnLCBzZWxmKTtcbiAgICB9XG5cbiAgICBpZiAob2JqIGluc3RhbmNlb2YgJC5FdmVudCkge1xuICAgICAgc2VsZi5pblN0YXRlW29iai50eXBlID09ICdmb2N1c2luJyA/ICdmb2N1cycgOiAnaG92ZXInXSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudGlwKCkuaGFzQ2xhc3MoJ2luJykgfHwgc2VsZi5ob3ZlclN0YXRlID09ICdpbicpIHtcbiAgICAgIHNlbGYuaG92ZXJTdGF0ZSA9ICdpbic7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5ob3ZlclN0YXRlID0gJ2luJztcblxuICAgIHJldHVybiBzZWxmLnNob3coKTtcbiAgfVxuXG4gIGlzSW5TdGF0ZVRydWUoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuaW5TdGF0ZSkge1xuICAgICAgaWYgKHRoaXMuaW5TdGF0ZVtrZXldKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxlYXZlKG9iaikge1xuICAgIHZhciBzZWxmID0gb2JqIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3RvciA/IG9iaiA6ICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnKTtcblxuICAgIGlmICghc2VsZikge1xuICAgICAgc2VsZiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG9iai5jdXJyZW50VGFyZ2V0LCB0aGlzLmdldERlbGVnYXRlU2V0dGluZ3MoKSk7XG4gICAgICAkKG9iai5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJywgc2VsZik7XG4gICAgfVxuXG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mICQuRXZlbnQpIHtcbiAgICAgIHNlbGYuaW5TdGF0ZVtvYmoudHlwZSA9PSAnZm9jdXNvdXQnID8gJ2ZvY3VzJyA6ICdob3ZlciddID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYuaXNJblN0YXRlVHJ1ZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5ob3ZlclN0YXRlID0gJ291dCc7XG5cbiAgICByZXR1cm4gc2VsZi5oaWRlKCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHZhciBlID0gJC5FdmVudCgnc2hvdy5mcy50b29sdGlwJyk7XG5cbiAgICBpZiAodGhpcy5oYXNDb250ZW50KCkgJiYgdGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSk7XG5cbiAgICAgIHZhciBpbkRvbSA9ICQuY29udGFpbnModGhpcy4kZWxlbWVudFswXS5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy4kZWxlbWVudFswXSk7XG5cbiAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8ICFpbkRvbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgJHRpcCA9IHRoaXMudGlwKCksXG4gICAgICAgIHRpcElkID0gdGhpcy5nZXRVSUQoJ3Rvb2x0aXAnKTtcblxuICAgICAgdGhpcy5zZXRDb250ZW50KCk7XG4gICAgICAkdGlwLmF0dHIoJ2lkJywgdGlwSWQpO1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpO1xuXG4gICAgICAkdGlwLmFkZENsYXNzKCdmYWRlJyk7XG5cbiAgICAgIHZhciBwbGFjZW1lbnQgPSB0aGlzLnNldHRpbmdzLnBsYWNlbWVudCxcbiAgICAgICAgYXV0b1Rva2VuID0gL1xccz9hdXRvP1xccz8vaSxcbiAgICAgICAgYXV0b1BsYWNlID0gYXV0b1Rva2VuLnRlc3QocGxhY2VtZW50KTtcblxuICAgICAgaWYgKGF1dG9QbGFjZSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQucmVwbGFjZShhdXRvVG9rZW4sICcnKSB8fCAndG9wJztcbiAgICAgIH1cblxuICAgICAgJHRpcFxuICAgICAgICAuZGV0YWNoKClcbiAgICAgICAgLmNzcyh7IHRvcDogMCwgbGVmdDogMCwgZGlzcGxheTogJ2Jsb2NrJyB9KVxuICAgICAgICAuYWRkQ2xhc3MocGxhY2VtZW50KVxuICAgICAgICAuZGF0YSgnZnMudG9vbHRpcCcsIHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5jb250YWluZXIpIHtcbiAgICAgICAgJHRpcC5hcHBlbmRUbyh0aGlzLnNldHRpbmdzLmNvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkdGlwLmluc2VydEFmdGVyKHRoaXMuJGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2luc2VydGVkLmZzLnRvb2x0aXAnKTtcblxuICAgICAgdmFyIHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgYWN0dWFsV2lkdGggPSAkdGlwWzBdLm9mZnNldFdpZHRoLFxuICAgICAgICBhY3R1YWxIZWlnaHQgPSAkdGlwWzBdLm9mZnNldEhlaWdodDtcblxuICAgICAgaWYgKGF1dG9QbGFjZSkge1xuICAgICAgICB2YXIgb3JnUGxhY2VtZW50ID0gcGxhY2VtZW50LFxuICAgICAgICAgIHZpZXdwb3J0RGltID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLiR2aWV3cG9ydCk7XG5cbiAgICAgICAgaWYgKCdib3R0b20nID09IHBsYWNlbWVudCAmJiBwb3MuYm90dG9tICsgYWN0dWFsSGVpZ2h0ID4gdmlld3BvcnREaW0uYm90dG9tKSB7XG4gICAgICAgICAgcGxhY2VtZW50ID0gJ3RvcCc7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3RvcCcgPT0gcGxhY2VtZW50ICYmIHBvcy50b3AgLSBhY3R1YWxIZWlnaHQgPCB2aWV3cG9ydERpbS50b3ApIHtcbiAgICAgICAgICBwbGFjZW1lbnQgPSAnYm90dG9tJztcbiAgICAgICAgfVxuXG4gICAgICAgICR0aXAucmVtb3ZlQ2xhc3Mob3JnUGxhY2VtZW50KS5hZGRDbGFzcyhwbGFjZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FsY3VsYXRlZE9mZnNldCA9IHRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldChwbGFjZW1lbnQsIHBvcywgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodCk7XG5cbiAgICAgIHRoaXMuYXBwbHlQbGFjZW1lbnQoY2FsY3VsYXRlZE9mZnNldCwgcGxhY2VtZW50KTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmV2SG92ZXJTdGF0ZSA9IHRoYXQuaG92ZXJTdGF0ZTtcblxuICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ3Nob3duLmZzLnRvb2x0aXAnKTtcbiAgICAgICAgdGhhdC5ob3ZlclN0YXRlID0gbnVsbDtcblxuICAgICAgICBpZiAoJ291dCcgPT0gcHJldkhvdmVyU3RhdGUpIHtcbiAgICAgICAgICB0aGF0LmxlYXZlKHRoYXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5UGxhY2VtZW50KG9mZnNldCwgcGxhY2VtZW50KSB7XG4gICAgdmFyICR0aXAgPSB0aGlzLnRpcCgpLFxuICAgICAgd2lkdGggPSAkdGlwWzBdLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHQsXG4gICAgICBtYXJnaW5Ub3AgPSBwYXJzZUludCgkdGlwLmNzcygnbWFyZ2luLXRvcCcpLCAxMCksXG4gICAgICBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoJHRpcC5jc3MoJ21hcmdpbi1sZWZ0JyksIDEwKTtcblxuICAgIG9mZnNldC50b3AgKz0gbWFyZ2luVG9wO1xuICAgIG9mZnNldC5sZWZ0ICs9IG1hcmdpbkxlZnQ7XG5cbiAgICAvKlxuXHRcdCAqICQuZm4ub2Zmc2V0IGRvZXNuJ3Qgcm91bmQgcGl4ZWwgdmFsdWVzOyBzbyB3ZSB1c2Vcblx0XHQgKiBzZXRPZmZzZXQgZGlyZWN0bHkgd2l0aCBvdXIgb3duIGZ1bmN0aW9uIEItMC5cblx0XHQgKi9cbiAgICAkLm9mZnNldC5zZXRPZmZzZXQoXG4gICAgICAkdGlwWzBdLFxuICAgICAgJC5leHRlbmQoXG4gICAgICAgIHtcbiAgICAgICAgICB1c2luZzogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICR0aXAuY3NzKHtcbiAgICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHByb3BzLnRvcCksXG4gICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQocHJvcHMubGVmdClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb2Zmc2V0XG4gICAgICApLFxuICAgICAgMFxuICAgICk7XG5cbiAgICAkdGlwLmFkZENsYXNzKCdpbicpO1xuXG4gICAgLypcblx0XHQgKiBDaGVjayB0byBzZWUgaWYgcGxhY2luZyB0aXAgaW4gbmV3IG9mZnNldCBjYXVzZWQgdGhlXG5cdFx0ICogdGlwIHRvIHJlc2l6ZSBpdHNlbGYuXG5cdFx0ICovXG4gICAgdmFyIGFjdHVhbFdpZHRoID0gJHRpcFswXS5vZmZzZXRXaWR0aCxcbiAgICAgIGFjdHVhbEhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKCd0b3AnID09IHBsYWNlbWVudCAmJiBhY3R1YWxIZWlnaHQgIT0gaGVpZ2h0KSB7XG4gICAgICBvZmZzZXQudG9wID0gb2Zmc2V0LnRvcCArIGhlaWdodCAtIGFjdHVhbEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIHZhciAkdGlwID0gdGhpcy50aXAoKSxcbiAgICAgIHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpO1xuXG4gICAgJHRpcC5maW5kKCcudG9vbHRpcC1pbm5lcicpWyd0ZXh0J10odGl0bGUpO1xuXG4gICAgJHRpcC5yZW1vdmVDbGFzcygnZmFkZSBpbiB0b3AgYm90dG9tJyk7XG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgJHRpcCA9ICQodGhpcy4kdGlwKSxcbiAgICAgIGV2ZW50ID0gJC5FdmVudCgnaGlkZS5mcy50b29sdGlwJyk7XG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIGlmICgnaW4nICE9IHRoYXQuaG92ZXJTdGF0ZSkge1xuICAgICAgICAkdGlwLmRldGFjaCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhhdC4kZWxlbWVudCkge1xuICAgICAgICB0aGF0LiRlbGVtZW50LnJlbW92ZUF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknKS50cmlnZ2VyKCdoaWRkZW4uZnMudG9vbHRpcCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZXZlbnQpO1xuXG4gICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJHRpcC5yZW1vdmVDbGFzcygnaW4nKTtcblxuICAgIHRoaXMuaG92ZXJTdGF0ZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhhc0NvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCRlbGVtZW50KSB7XG4gICAgaWYgKCEkZWxlbWVudCkge1xuICAgICAgJGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50O1xuICAgIH1cblxuICAgIHZhciBlbCA9ICRlbGVtZW50WzBdLFxuICAgICAgaXNCb2R5ID0gZWwudGFnTmFtZSA9PSAnQk9EWScsXG4gICAgICBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChlbFJlY3Qud2lkdGggPT0gbnVsbCkge1xuICAgICAgZWxSZWN0ID0gJC5leHRlbmQoe30sIGVsUmVjdCwge1xuICAgICAgICB3aWR0aDogZWxSZWN0LnJpZ2h0IC0gZWxSZWN0LmxlZnQsXG4gICAgICAgIGhlaWdodDogZWxSZWN0LmJvdHRvbSAtIGVsUmVjdC50b3BcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBpc1N2ZyA9IHdpbmRvdy5TVkdFbGVtZW50ICYmIGVsIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQsXG4gICAgICBlbE9mZnNldCA9IGlzQm9keSA/IHsgdG9wOiAwLCBsZWZ0OiAwIH0gOiBpc1N2ZyA/IG51bGwgOiAkZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgIHNjcm9sbCA9IHtcbiAgICAgICAgc2Nyb2xsOiBpc0JvZHlcbiAgICAgICAgICA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgICAgICA6ICRlbGVtZW50LnNjcm9sbFRvcCgpXG4gICAgICB9LFxuICAgICAgb3V0ZXJEaW1zID0gaXNCb2R5ID8geyB3aWR0aDogJCh3aW5kb3cpLndpZHRoKCksIGhlaWdodDogJCh3aW5kb3cpLmhlaWdodCgpIH0gOiBudWxsO1xuXG4gICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBlbFJlY3QsIHNjcm9sbCwgb3V0ZXJEaW1zLCBlbE9mZnNldCk7XG4gIH1cblxuICBnZXRDYWxjdWxhdGVkT2Zmc2V0KHBsYWNlbWVudCwgcG9zLCBhY3R1YWxXaWR0aCwgYWN0dWFsSGVpZ2h0KSB7XG4gICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgaWYgKCdib3R0b20nID09IHBsYWNlbWVudCkge1xuICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICB0b3A6IHBvcy50b3AgKyBwb3MuaGVpZ2h0LFxuICAgICAgICBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aCAvIDIgLSBhY3R1YWxXaWR0aCAvIDJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldCA9IHtcbiAgICAgICAgdG9wOiBwb3MudG9wIC0gYWN0dWFsSGVpZ2h0LFxuICAgICAgICBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aCAvIDIgLSBhY3R1YWxXaWR0aCAvIDJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHZhciB0aXRsZSA9IHRoaXMuc2V0dGluZ3MudGl0bGU7XG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB2YXIgJGVsID0gdGhpcy4kZWxlbWVudDtcbiAgICAgIHRpdGxlID0gJGVsLmF0dHIoJ3RpdGxlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgZ2V0VUlEKHByZWZpeCkge1xuICAgIGRvIHtcbiAgICAgIHByZWZpeCArPSB+fihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSk7XG5cbiAgICByZXR1cm4gcHJlZml4O1xuICB9XG5cbiAgdGlwKCkge1xuICAgIGlmICghdGhpcy4kdGlwKSB7XG4gICAgICB0aGlzLiR0aXAgPSAkKHRoaXMuc2V0dGluZ3MudGVtcGxhdGUpO1xuXG4gICAgICBpZiAodGhpcy4kdGlwLmxlbmd0aCAhPSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndG9vbHRpcCBgdGVtcGxhdGVgIG9wdGlvbiBtdXN0IGNvbnNpc3Qgb2YgZXhhY3RseSAxIHRvcC1sZXZlbCBlbGVtZW50IScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLiR0aXA7XG4gIH1cblxuICBhcnJvdygpIHtcbiAgICByZXR1cm4gKHRoaXMuJGFycm93ID0gdGhpcy4kYXJyb3cgfHwgdGhpcy50aXAoKS5maW5kKCcudG9vbHRpcC1hcnJvdycpKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gIXRoaXMuZW5hYmxlZDtcbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmIChldmVudCkge1xuICAgICAgc2VsZiA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcpO1xuXG4gICAgICBpZiAoIXNlbGYpIHtcbiAgICAgICAgc2VsZiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuZ2V0RGVsZWdhdGVTZXR0aW5ncygpKTtcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJywgc2VsZik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBzZWxmLmluU3RhdGUuY2xpY2sgPSAhc2VsZi5pblN0YXRlLmNsaWNrO1xuXG4gICAgICBpZiAoc2VsZi5pc0luU3RhdGVUcnVlKCkpIHtcbiAgICAgICAgc2VsZi5lbnRlcihzZWxmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubGVhdmUoc2VsZik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzZWxmLnRpcCgpLmhhc0NsYXNzKCdpbicpKSB7XG4gICAgICAgIHNlbGYubGVhdmUoc2VsZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmVudGVyKHNlbGYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICB0aGlzLmhpZGUoZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0LiRlbGVtZW50Lm9mZignLnRvb2x0aXAnKS5yZW1vdmVEYXRhKCdmcy50b29sdGlwJyk7XG5cbiAgICAgIGlmICh0aGF0LiR0aXApIHtcbiAgICAgICAgdGhhdC4kdGlwLmRldGFjaCgpO1xuICAgICAgfVxuXG4gICAgICB0aGF0LiR0aXAgPSBudWxsO1xuICAgICAgdGhhdC4kYXJyb3cgPSBudWxsO1xuICAgICAgdGhhdC4kdmlld3BvcnQgPSBudWxsO1xuICAgICAgdGhhdC4kZWxlbWVudCA9IG51bGw7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBkb20gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vYmxvY2tzL2JhY2tncm91bmQnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9ibG9ja3MvbWVudSc7XG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuL2Jsb2Nrcy9tb2JpbGUtbWVudSc7XG5pbXBvcnQgVGFiYmVkIGZyb20gJy4vYmxvY2tzL3RhYmJlZCc7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4vYmxvY2tzL3RvZ2dsZSc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL2Jsb2Nrcy90b29sdGlwJztcbmltcG9ydCAnLi9ibG9ja3MvbW9kYWwnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9zbGlkZXInO1xuXG4vKipcbiAqIEFkZCBibG9ja3MgdG8gdGhlIGpRdWVyeSBuYW1lc3BhY2UuXG4gKlxuICogTm90ZTogVGhpcyBkb2Vzbid0IGluY2x1ZGUgYmxvY2tzIG1lYW50IHRvXG4gKiBpbXBsZW1lbnQgb3B0aW9uYWwgdGhpcmQtcGFydHkgcGx1Z2lucywgT3dsXG4gKiBDYXJvdXNlbCBhbmQgTWFnbmlmaWMgUG9wdXAuXG4gKlxuICogQHNpbmNlIDEuMC4wXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJsb2NrICAgRnJhbWV3b3JrIGJsb2NrIElELlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBmb3IgYmxvY2suXG4gKi9cbiQuZm4uZnJvbnRzdHJlZXQgPSBmdW5jdGlvbihibG9jaywgb3B0aW9ucykge1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAoYmxvY2spIHtcbiAgICAgIGNhc2UgJ2JhY2tncm91bmQnOlxuICAgICAgICByZXR1cm4gbmV3IEJhY2tncm91bmQodGhpcywgb3B0aW9ucyk7XG4gICAgICBjYXNlICdtb2JpbGUtbWVudSc6XG4gICAgICAgIHJldHVybiBuZXcgTW9iaWxlTWVudSh0aGlzLCBvcHRpb25zKTtcbiAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICByZXR1cm4gbmV3IE1lbnUodGhpcywgb3B0aW9ucyk7XG4gICAgICBjYXNlICd0YWJiZWQnOlxuICAgICAgICByZXR1cm4gbmV3IFRhYmJlZCh0aGlzLCBvcHRpb25zKTtcbiAgICAgIGNhc2UgJ3RvZ2dsZSc6XG4gICAgICAgIHJldHVybiBuZXcgVG9nZ2xlKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgY2FzZSAndG9vbHRpcCc6XG4gICAgICAgIHJldHVybiBuZXcgVG9vbHRpcCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgeyAkZG9jdW1lbnQsICR3aW5kb3cgfSA9IGRvbTtcblxuJGRvY3VtZW50LnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgLyoqXG4gICAqIEJpbmRzIHRoZSBkZWZhdWx0IGBtZW51YCBibG9jay5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICAkKCcuZnMtbWVudScpLmZyb250c3RyZWV0KCdtZW51Jyk7XG5cbiAgLyoqXG4gICAqIEFkZHMgbm8tY2xpY2sgZnVuY3Rpb25hbHRpeSB0byBhbnkgbGluayBieVxuICAgKiBhZGRpbmcgY2xhc3MgXCJuby1jbGlja1wiLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgaW50ZXJmYWNlLlxuICAgKi9cbiAgJCgnYS5uby1jbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEFkZHMgbm8tY2xpY2sgZnVuY3Rpb25hbHRpeSB0byBhbnkgbGluayBkaXJlY3RseVxuICAgKiB3aXRoaW4gYW4gbGkgd2l0aCBjbGFzcyBgbm8tY2xpY2tgLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIGlzIG1haW5seSBoZXJlIHRvIGFjY21vZGF0ZSBpbnRlcmZhY2VzXG4gICAqIGxpa2UgV29yZFByZXNzIHdoaWNoIGFsbG93IGJ1aWxkaW5nIG1lbnVzLCBidXQgb25seVxuICAgKiBhbGxvdyBhZGRpbmcgQ1NTIGNsYXNzZXMgdG8gdGhlIG1lbnUgbGlzdCBpdGVtcy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IGludGVyZmFjZS5cbiAgICovXG4gICQoJ2xpLm5vLWNsaWNrJylcbiAgICAuZmluZCgnYTpmaXJzdCcpXG4gICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgZGVmYXVsdCBgdGFic2AgYmxvY2suXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgJCgnLmZzLXRhYmJlZCcpLmZyb250c3RyZWV0KCd0YWJiZWQnKTtcblxuICAvKipcbiAgICogQmluZHMgdGhlIGRlZmF1bHQgYHRvZ2dsZWAgYmxvY2suXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgJCgnLmZzLXRvZ2dsZScpLmZyb250c3RyZWV0KCd0b2dnbGUnKTtcblxuICAvKipcbiAgICogQmluZHMgdGhlIGRlZmF1bHQgYHRvb2x0aXBgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy10b29sdGlwLXRyaWdnZXInKS5mcm9udHN0cmVldCgndG9vbHRpcCcpO1xufSk7XG5cbiR3aW5kb3cub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgLyoqXG4gICAqIFNlbGYtaW52b2tlcyB0aGUgYmFja2dyb3VuZCBzbGlkZXIgb2YgdGhlXG4gICAqIGBiYWNrZ3JvdW5kYCBibG9jay5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICAkKCcuZnMtYmctc2xpZGVyJykuZnJvbnRzdHJlZXQoJ2JhY2tncm91bmQnLCB7IHR5cGU6ICdzbGlkZXInIH0pO1xuXG4gIC8qKlxuICAgKiBTZWxmLWludm9rZXMgdGhlIHBhcmFsbGF4IGVmZmVjdCBvZiB0aGVcbiAgICogYGJhY2tncm91bmRgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy1iZy1wYXJhbGxheCcpLmZyb250c3RyZWV0KCdiYWNrZ3JvdW5kJywgeyB0eXBlOiAncGFyYWxsYXgnIH0pO1xufSk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIFN0b3JlIGFuZCBjYWNoZSByZS11c2FibGUgRE9NIGVsZW1lbnRzLlxuICpcbiAqIEBzaW5jZSAxLjAuMFxuICpcbiAqIEB2YXIge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGRvbSA9IHtcbiAgJHdpbmRvdzogJCh3aW5kb3cpLFxuICAkZG9jdW1lbnQ6ICQoZG9jdW1lbnQpLFxuICAkYm9keTogJCgnYm9keScpXG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiB3ZWJzaXRlIGlzIGJlaW5nIGxvYWRlZCBmcm9tIGEgbW9iaWxlXG4gKiBkZXZpY2UuXG4gKlxuICogQHNpbmNlIDEuMC4wXG4gKlxuICogQHBhcmFtICB7Qm9vbGVhbn0gdmlld3BvcnRDaGVjayBXaGV0aGVyIHRvIGxldCB2aWV3cG9ydCBzaXplIGhlbHAgZGV0ZXJtaW5lLlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB3ZSdyZSBvbiBhIG1vYmlsZSBkZXZpY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSh2aWV3cG9ydENoZWNrKSB7XG4gIGNvbnN0IHsgJGJvZHkgfSA9IGRvbTtcblxuICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ21vYmlsZScpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgYWdlbnRDaGVjayA9IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICBuYXZpZ2F0b3IudXNlckFnZW50XG4gICk7XG5cbiAgaWYgKGFnZW50Q2hlY2spIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh2aWV3cG9ydENoZWNrKSB7XG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XG5cbiAgICBpZiAoJHdpbmRvdy53aWR0aCgpIDwgOTkyIHx8ICR3aW5kb3cuaGVpZ2h0KCkgPCA1MDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=