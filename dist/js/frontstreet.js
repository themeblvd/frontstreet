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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/frontstreet.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blocks/background.js":
/*!*************************************!*\
  !*** ./src/js/blocks/background.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
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

/***/ "./src/js/blocks/menu.js":
/*!*******************************!*\
  !*** ./src/js/blocks/menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
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
    });

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

/***/ "./src/js/blocks/mobile-menu.js":
/*!**************************************!*\
  !*** ./src/js/blocks/mobile-menu.js ***!
  \**************************************/
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

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./src/js/blocks/modal.js":
/*!********************************!*\
  !*** ./src/js/blocks/modal.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");



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

/***/ "./src/js/blocks/slider.js":
/*!*********************************!*\
  !*** ./src/js/blocks/slider.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");



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

/***/ "./src/js/blocks/tabs.js":
/*!*******************************!*\
  !*** ./src/js/blocks/tabs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
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

/***/ "./src/js/blocks/toggle.js":
/*!*********************************!*\
  !*** ./src/js/blocks/toggle.js ***!
  \*********************************/
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

/***/ "./src/js/blocks/tooltip.js":
/*!**********************************!*\
  !*** ./src/js/blocks/tooltip.js ***!
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

/***/ "./src/js/frontstreet.js":
/*!*******************************!*\
  !*** ./src/js/frontstreet.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _blocks_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/background */ "./src/js/blocks/background.js");
/* harmony import */ var _blocks_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/menu */ "./src/js/blocks/menu.js");
/* harmony import */ var _blocks_mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/mobile-menu */ "./src/js/blocks/mobile-menu.js");
/* harmony import */ var _blocks_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/tabs */ "./src/js/blocks/tabs.js");
/* harmony import */ var _blocks_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/toggle */ "./src/js/blocks/toggle.js");
/* harmony import */ var _blocks_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/tooltip */ "./src/js/blocks/tooltip.js");
/* harmony import */ var _blocks_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/modal */ "./src/js/blocks/modal.js");
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/slider */ "./src/js/blocks/slider.js");











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

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3MvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmxvY2tzL21vYmlsZS1tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3MvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy90YWJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3MvdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3MvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZnJvbnRzdHJlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJlbGVtZW50Iiwib3B0aW9ucyIsIiRlbGVtZW50IiwiJCIsInNldHRpbmdzIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCIkc2VjdGlvbiIsImNsb3Nlc3QiLCJzZWN0aW9uIiwic2xpZGVyIiwiYmluZCIsInBhcmFsbGF4IiwicGFyYWxsYXhDYWxjIiwidHlwZSIsIiRzbGlkZXIiLCJhdXRvcGxheSIsImRhdGEiLCJmaW5kIiwiZWFjaCIsIiRpbWciLCJhZGRDbGFzcyIsInByZXBlbmQiLCJmYWRlT3V0Iiwic2V0SW50ZXJ2YWwiLCIkbGFzdEltZyIsInJlbW92ZUNsYXNzIiwic2V0VGltZW91dCIsInByZXBlbmRUbyIsIiRmaWd1cmUiLCIkd2luZG93IiwiaXNNb2JpbGUiLCJjc3MiLCJvbiIsImltZ0hlaWdodCIsImhlaWdodCIsImNvbnRhaW5lckhlaWdodCIsInBhcmFsbGF4RGlzdCIsImJvdHRvbSIsIm9mZnNldCIsInRvcCIsInNjcm9sbFRvcCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2luZG93Qm90dG9tIiwicGVyY2VudFNjcm9sbGVkIiwiTWF0aCIsInJvdW5kIiwiTWVudSIsIiRtZW51IiwiZGVsYXkiLCJ0aW1lciIsImZseW91dCIsInNob3ciLCJoaWRlIiwiaGFzIiwiZHJvcERvd25TZWxlY3RvciIsIiR0cmlnZ2VyIiwiY2hpbGRyZW4iLCJub29wIiwiaGFzQ2xhc3MiLCIkYm9keSIsIiRmbHlvdXQiLCJsb2NhdGlvbiIsInNwYWNlIiwibGVuZ3RoIiwid2lkdGgiLCJsZXZlbCIsImdldExldmVsIiwiJHNpYmxpbmdzIiwic2libGluZ3MiLCIkdGFyZ2V0IiwiY2xlYXJUaW1lb3V0IiwiTW9iaWxlTWVudSIsIiR0cmlnZ2VycyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wIiwiZm4iLCJtYWduaWZpY1BvcHVwIiwiJGRvY3VtZW50IiwicmVhZHkiLCJtYWluQ2xhc3MiLCJyZW1vdmFsRGVsYXkiLCJjb25maWciLCJhbmltYXRpb24iLCJtb2JpbGUiLCJtb2JpbGVJZnJhbWUiLCJtb2JpbGVHYWxsZXJ5IiwiZXJyb3IiLCJjbG9zZSIsImxvYWRpbmciLCJjb3VudGVyIiwibmV4dCIsInByZXZpb3VzIiwiY2xvc2VNYXJrdXAiLCJmc01vZGFsIiwidENsb3NlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwidFByZXYiLCJ0TmV4dCIsInRDb3VudGVyIiwiaW1hZ2UiLCJ0RXJyb3IiLCJhamF4IiwiYWxpZ25Ub3AiLCJzaG93Q2xvc2VCdG4iLCJjYWxsYmFja3MiLCJvcGVuIiwiYXR0ciIsImJlZm9yZUNsb3NlIiwiY2xvc2VCdG5JbnNpZGUiLCJpbnN0YW5jZSIsIndyYXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImZvY3VzIiwiJGdhbGxlcnkiLCJjbGFzc2VzIiwic2VsZWN0b3IiLCJqb2luIiwiJGxpbmsiLCJsaW5rQ2xhc3MiLCJkaXNhYmxlT24iLCJlbmFibGVkIiwiY3Vyc29yIiwiZGVsZWdhdGUiLCJpZnJhbWUiLCJtYXJrdXAiLCJtYXJrdXBQYXJzZSIsInRlbXBsYXRlIiwidmFsdWVzIiwiaXRlbSIsInRpdGxlIiwiZWwiLCJvd2xDYXJvdXNlbCIsIiR3cmFwIiwiaXRlbXMiLCJwYXJzZUludCIsInNwZWVkIiwiYXV0b3BsYXlUaW1lb3V0IiwibWFyZ2luIiwicGF1c2UiLCJsb29wIiwiYW5pbWF0ZSIsImF1dG9XaWR0aCIsImNlbnRlciIsIiRuYXYiLCIkYXJyb3dzIiwibmF2Q291bnRlciIsInRpbWVvdXQiLCJuYXYiLCJkb3RzIiwic21hcnRTcGVlZCIsImF1dG9wbGF5SG92ZXJQYXVzZSIsImFuaW1hdGVPdXQiLCJydGwiLCJvbkluaXRpYWxpemVkIiwib25DaGFuZ2VkIiwiaW5kZXgiLCJwYWdlIiwiY291bnQiLCIkY3VycmVudCIsInRyaWdnZXIiLCJUYWJzIiwiJHRhYnMiLCJkZWVwTGluayIsIm1hdGNoSGVpZ2h0IiwiJHBhbmUiLCJuYXZTZWxlY3RvciIsInRhcmdldCIsInNwbGl0IiwidGFsbGVzdCIsImN1cnJlbnRIZWlnaHQiLCJvdXRlckhlaWdodCIsImhhc2giLCJkb2N1bWVudCIsImluZGV4T2YiLCJyZXBsYWNlIiwiVG9nZ2xlIiwiJHRvZ2dsZSIsIiRncm91cCIsInBhcmVudHMiLCJhY2NvcmRpb24iLCJibHVyIiwic3RvcCIsInNsaWRlRG93biIsInNsaWRlVXAiLCJUb29sdGlwIiwiaG92ZXJTdGF0ZSIsImluU3RhdGUiLCIkdmlld3BvcnQiLCJ2aWV3cG9ydCIsImlzRnVuY3Rpb24iLCJjYWxsIiwiY2xpY2siLCJob3ZlciIsInByb3h5IiwiZW50ZXIiLCJsZWF2ZSIsImdldERlbGVnYXRlU2V0dGluZ3MiLCJpc0luU3RhdGVUcnVlIiwiYXBwbHlQbGFjZW1lbnQiLCJzZXRDb250ZW50IiwiaGFzQ29udGVudCIsImdldFBvc2l0aW9uIiwiZ2V0Q2FsY3VsYXRlZE9mZnNldCIsImdldFRpdGxlIiwiZ2V0VUlEIiwidGlwIiwiYXJyb3ciLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsInRvZ2dsZSIsImRlc3Ryb3kiLCJfc2V0dGluZ3MiLCJrZXkiLCJ2YWx1ZSIsIm9iaiIsInNlbGYiLCJjb25zdHJ1Y3RvciIsImN1cnJlbnRUYXJnZXQiLCJFdmVudCIsImluRG9tIiwiY29udGFpbnMiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiaXNEZWZhdWx0UHJldmVudGVkIiwidGhhdCIsIiR0aXAiLCJ0aXBJZCIsInBsYWNlbWVudCIsImF1dG9Ub2tlbiIsImF1dG9QbGFjZSIsInRlc3QiLCJkZXRhY2giLCJsZWZ0IiwiZGlzcGxheSIsImNvbnRhaW5lciIsImFwcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJwb3MiLCJhY3R1YWxXaWR0aCIsIm9mZnNldFdpZHRoIiwiYWN0dWFsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3JnUGxhY2VtZW50Iiwidmlld3BvcnREaW0iLCJjYWxjdWxhdGVkT2Zmc2V0IiwiY29tcGxldGUiLCJwcmV2SG92ZXJTdGF0ZSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJzZXRPZmZzZXQiLCJ1c2luZyIsInByb3BzIiwiY2FsbGJhY2siLCJyZW1vdmVBdHRyIiwiaXNCb2R5IiwidGFnTmFtZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpZ2h0IiwiaXNTdmciLCJTVkdFbGVtZW50IiwiZWxPZmZzZXQiLCJzY3JvbGwiLCJib2R5Iiwib3V0ZXJEaW1zIiwiJGVsIiwicHJlZml4IiwicmFuZG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJFcnJvciIsIiRhcnJvdyIsIm9mZiIsInJlbW92ZURhdGEiLCJwYWRkaW5nIiwiZnJvbnRzdHJlZXQiLCJibG9jayIsImRvbSIsInZpZXdwb3J0Q2hlY2siLCJhZ2VudENoZWNrIiwibmF2aWdhdG9yIiwidXNlckFnZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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UixFQUE3Qzs7QUFFQTs7Ozs7O0FBTUFYLEVBQUEsNkNBQUFBLENBQUUsaUJBQUYsRUFBcUJzUixXQUFyQixDQUFpQyxZQUFqQyxFQUErQyxFQUFFM1EsTUFBTSxVQUFSLEVBQS9DO0FBQ0QsQ0FoQkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7O0FBRUE7Ozs7Ozs7QUFPTyxJQUFNNlEsTUFBTTtBQUNqQjdQLFdBQVMsNkNBQUEzQixDQUFFd0MsTUFBRixDQURRO0FBRWpCc0MsYUFBVyw2Q0FBQTlFLENBQUUrSyxRQUFGLENBRk07QUFHakJwSCxTQUFPLDZDQUFBM0QsQ0FBRSxNQUFGO0FBSFUsQ0FBWjs7QUFNUDs7Ozs7Ozs7O0FBU08sU0FBUzRCLFFBQVQsQ0FBa0I2UCxhQUFsQixFQUFpQztBQUFBLE1BQzlCOU4sS0FEOEIsR0FDcEI2TixHQURvQixDQUM5QjdOLEtBRDhCOzs7QUFHdEMsTUFBSUEsTUFBTUQsUUFBTixDQUFlLFFBQWYsQ0FBSixFQUE4QjtBQUM1QixXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJZ08sYUFBYSxpRUFBaUVoRCxJQUFqRSxDQUNmaUQsVUFBVUMsU0FESyxDQUFqQjs7QUFJQSxNQUFJRixVQUFKLEVBQWdCO0FBQ2QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSUQsYUFBSixFQUFtQjtBQUNqQixRQUFJOVAsVUFBVSw2Q0FBQTNCLENBQUV3QyxNQUFGLENBQWQ7O0FBRUEsUUFBSWIsUUFBUXFDLEtBQVIsS0FBa0IsR0FBbEIsSUFBeUJyQyxRQUFRSyxNQUFSLEtBQW1CLEdBQWhELEVBQXFEO0FBQ25ELGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNoREQsd0IiLCJmaWxlIjoiLi9qcy9mcm9udHN0cmVldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2Zyb250c3RyZWV0LmpzXCIpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGlzTW9iaWxlLCBkb20gfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBzZWN0aW9uXG4gKiBwYXJhbGxheCBiYWNrZ3JvdW5kIGltYWdlIGVmZmVjdHMgYW5kIGJhY2tncm91bmRcbiAqIHNsaWRlcnMuXG4gKlxuICogQnkgZGVmYXVsdCBhbGwgSFRNTCBlbGVtZW50cyB3aXRoIGNsYXNzIGBmcy1iZy1zbGlkZXJgXG4gKiBhbmQgYGZzLWJnLXBhcmFsbGF4YCBhcmUgYXV0b21hdGljYWxseSBiaW5kZWRcbiAqIHdpdGggdGhlaXIgcmVzcGVjdGl2ZSBlZmZlY3RzLlxuICpcbiAqIEBzdW1tYXJ5ICBCYWNrZ3JvdW5kIEVmZmVjdHNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBiYWNrZ3JvdW5kLmpzXG4gKi9cbmNsYXNzIEJhY2tncm91bmQge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYGJhY2tncm91bmRgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICBjb25zdCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBjb25zdCAkc2VjdGlvbiA9ICRlbGVtZW50LmNsb3Nlc3Qoc2V0dGluZ3Muc2VjdGlvbik7XG5cbiAgICB0aGlzLnNsaWRlciA9IHRoaXMuc2xpZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJhbGxheCA9IHRoaXMucGFyYWxsYXguYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhcmFsbGF4Q2FsYyA9IHRoaXMucGFyYWxsYXhDYWxjLmJpbmQodGhpcyk7XG5cbiAgICBzd2l0Y2ggKHNldHRpbmdzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NsaWRlcic6XG4gICAgICAgIHRoaXMuc2xpZGVyKCRlbGVtZW50LCAkc2VjdGlvbiwgc2V0dGluZ3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BhcmFsbGF4JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMucGFyYWxsYXgoJGVsZW1lbnQsICRzZWN0aW9uLCBzZXR0aW5ncyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgYmFja2dyb3VuZCBvcHRpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAncGFyYWxsYXgnLFxuICAgICAgYXV0b3BsYXk6IDQwMDAsXG4gICAgICBzZWN0aW9uOiAnLmZzLXNlY3Rpb24sIC5oYXMtYmctc2xpZGVyLCAuaGFzLWJnLXBhcmFsbGF4LCAuaGFzLWJnLXZpZGVvJ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgYSBiYWNrZ3JvdW5kIHNsaWRlci5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWxlbWVudCBUaGUgYmFja2dyb3VuZCBzbGlkZXIgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9ICRzZWN0aW9uIFNlY3Rpb24gY29udGFpbmluZyBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3MgQ3VycmVudCBzZXR0aW5ncy5cbiAgICovXG4gIHNsaWRlcigkc2xpZGVyLCAkc2VjdGlvbiwgc2V0dGluZ3MpIHtcbiAgICB2YXIgeyBhdXRvcGxheSB9ID0gc2V0dGluZ3M7XG5cbiAgICBpZiAoJHNsaWRlci5kYXRhKCdhdXRvcGxheScpICYmICRzbGlkZXIuZGF0YSgnYXV0b3BsYXknKSA+PSAxMDAwKSB7XG4gICAgICBhdXRvcGxheSA9ICRzbGlkZXIuZGF0YSgnYXV0b3BsYXknKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJldmVyc2Ugb3JkZXIgb2YgaW1hZ2VzIHNvIHRoZSB0b3Agb2Ygc3RhY2tcbiAgICAgKiB3aWxsIGJlIHRoZSBmaXJzdCBpbWFnZS5cbiAgICAgKi9cbiAgICAkc2xpZGVyLmZpbmQoJ2ltZycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkaW1nID0gJCh0aGlzKTtcbiAgICAgICRpbWcuYWRkQ2xhc3MoJ2ZhZGUgaW4nKTtcbiAgICAgICRzbGlkZXIucHJlcGVuZCgkaW1nKTtcbiAgICB9KTtcblxuICAgICRzbGlkZXIuYWRkQ2xhc3MoJ2luJyk7XG5cbiAgICAkc2VjdGlvbi5maW5kKCcuZnMtbG9hZGVyJykuZmFkZU91dCgpO1xuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkbGFzdEltZyA9ICRzbGlkZXIuZmluZCgnaW1nOmxhc3QtY2hpbGQnKTtcblxuICAgICAgJGxhc3RJbWcucmVtb3ZlQ2xhc3MoJ2luJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICRsYXN0SW1nLnByZXBlbmRUbygkc2xpZGVyKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgIH0sIGF1dG9wbGF5KTtcbiAgICB9LCBhdXRvcGxheSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgYSBiYWNrZ3JvdW5kIGltYWdlIHBhcmFsbGF4IGVmZmVjdC5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWxlbWVudCBUaGUgYmFja2dyb3VuZCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHNlY3Rpb24gU2VjdGlvbiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5ncyBDdXJyZW50IHNldHRpbmdzLlxuICAgKi9cbiAgcGFyYWxsYXgoJGZpZ3VyZSwgJHNlY3Rpb24sIHNldHRpbmdzKSB7XG4gICAgY29uc3QgeyAkd2luZG93IH0gPSBkb207XG4gICAgY29uc3QgeyBwYXJhbGxheENhbGMgfSA9IHRoaXM7XG4gICAgY29uc3QgJGltZyA9ICRmaWd1cmUuZmluZCgnaW1nLCAuaW1nJyk7XG4gICAgdmFyIHBhcmFsbGF4ID0gbnVsbDtcblxuICAgIC8qXG4gICAgICogV2lsbCBvbmx5IGNhbGN1bGF0ZSBpZiBhbGwgYXJlIHRydWU6XG4gICAgICpcbiAgICAgKiAxLiBOb3QgYSB0cnVlIG1vYmlsZSBkZXZpY2UgKGxvb2tpbmcgYXQgdXNlciBhZ2VudCkuXG4gICAgICogMi4gV2luZG93IGlzIHRhbGxlciB0aGFuIDUwMHB4LlxuICAgICAqIDMuIFdpbmRvdyBpcyB3aWRlciB0aGFuIDk5MnB4LlxuICAgICAqL1xuICAgIGlmICghaXNNb2JpbGUodHJ1ZSkpIHtcbiAgICAgIC8vIFBhc3NpbmcgYHRydWVgIGRlbm90ZXMgY2hlY2tpbmcgdmlld3BvcnQgc2l6ZS5cbiAgICAgIHBhcmFsbGF4ID0gcGFyYWxsYXhDYWxjKCRmaWd1cmUsICRpbWcpO1xuXG4gICAgICBpZiAocGFyYWxsYXgpIHtcbiAgICAgICAgJGltZy5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzRCgtNTAlLCcgKyBwYXJhbGxheCArICdweCwgMCknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkZmlndXJlLmFkZENsYXNzKCdpbicpO1xuXG4gICAgJHNlY3Rpb24uZmluZCgnLmZzLWxvYWRlcicpLmZhZGVPdXQoKTtcblxuICAgIC8vIEFkanVzdCBwYXJhbGxheCBwb3NpdGlvbmluZyBpZiB3aW5kb3cgaXMgcmVzaXplZC5cbiAgICAkd2luZG93Lm9uKCdzY3JvbGwgcmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAvKlxuICAgICAgICogV2lsbCBvbmx5IGNhbGN1bGF0ZSBpZiBhbGwgYXJlIHRydWU6XG4gICAgICAgKlxuICAgICAgICogMS4gTm90IGEgdHJ1ZSBtb2JpbGUgZGV2aWNlIChsb29raW5nIGF0IHVzZXIgYWdlbnQpLlxuICAgICAgICogMi4gV2luZG93IGlzIHRhbGxlciB0aGFuIDUwMHB4LlxuICAgICAgICogMy4gV2luZG93IGlzIHdpZGVyIHRoYW4gOTkycHguXG4gICAgICAgKlxuICAgICAgICogQHNlZSBpc01vYmlsZSgpIGZ1bmN0aW9uIGluIGluaXQuanNcbiAgICAgICAqL1xuICAgICAgaWYgKCFpc01vYmlsZSh0cnVlKSkge1xuICAgICAgICAvLyBQYXNzaW5nIGB0cnVlYCBkZW5vdGVzIGNoZWNraW5nIHZpZXdwb3J0IHNpemUuXG4gICAgICAgIHBhcmFsbGF4ID0gcGFyYWxsYXhDYWxjKCRmaWd1cmUsICRpbWcpO1xuXG4gICAgICAgIGlmIChwYXJhbGxheCkge1xuICAgICAgICAgICRpbWcuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM0QoLTUwJSwnICsgcGFyYWxsYXggKyAncHgsIDApJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgcGFyYWxsYXggcG9zaXRpb24gb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZmlndXJlIFRoZSBiYWNrZ3JvdW5kIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkaW1nICAgIEltYWdlIHRvIHBvc2l0aW9uIHdpdGhpbiBlbGVtZW50LlxuICAgKi9cbiAgcGFyYWxsYXhDYWxjKCRmaWd1cmUsICRpbWcpIHtcbiAgICBjb25zdCB7ICR3aW5kb3cgfSA9IGRvbTtcblxuICAgIHZhciBpbWdIZWlnaHQgPSAkaW1nLmhlaWdodCgpLFxuICAgICAgY29udGFpbmVySGVpZ2h0ID0gJGZpZ3VyZS5oZWlnaHQoKSA+IDAgPyAkZmlndXJlLmhlaWdodCgpIDogNTAwLFxuICAgICAgcGFyYWxsYXhEaXN0ID0gaW1nSGVpZ2h0IC0gY29udGFpbmVySGVpZ2h0LFxuICAgICAgYm90dG9tID0gJGZpZ3VyZS5vZmZzZXQoKS50b3AgKyBjb250YWluZXJIZWlnaHQsXG4gICAgICB0b3AgPSAkZmlndXJlLm9mZnNldCgpLnRvcCxcbiAgICAgIHNjcm9sbFRvcCA9ICR3aW5kb3cuc2Nyb2xsVG9wKCksXG4gICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQsIC8vIFVzaW5nIGB3aW5kb3dgLCBOT1QgYCR3aW5kb3dgOyB3ZSBuZWVkIGEgZnJlc2ggY2FsY3VsYXRpb24gaGVyZS5cbiAgICAgIHdpbmRvd0JvdHRvbSA9IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodCxcbiAgICAgIHBlcmNlbnRTY3JvbGxlZCA9ICh3aW5kb3dCb3R0b20gLSB0b3ApIC8gKGNvbnRhaW5lckhlaWdodCArIHdpbmRvd0hlaWdodCk7XG5cbiAgICBpZiAoYm90dG9tID4gc2Nyb2xsVG9wICYmIHRvcCA8IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQocGFyYWxsYXhEaXN0ICogcGVyY2VudFNjcm9sbGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvbSwgaXNNb2JpbGUgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBkcm9wZG93blxuICogbWVudXMuXG4gKlxuICogQnkgZGVmYXVsdCBhbGwgSFRNTCBlbGVtZW50cyB3aXRoIGNsYXNzIGBmcy1tZW51YFxuICogYXJlIGF1dG9tYXRpY2FsbHkgYmluZGVkLlxuICpcbiAqIEFsc28sIG1lbnUgaXRlbXMgd2l0aCBjbGFzcyAnbm8tY2xpY2snIGFyZSBzZXR1cCB0b1xuICogcHJldmVudCB0aGUgZGVmYXVsdCBjbGljayBiZWhhdmlvci5cbiAqXG4gKiBAc3VtbWFyeSAgRHJvcGRvd24gTWVudXNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBtZW51LmpzXG4gKi9cbmNsYXNzIE1lbnUge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYG1lbnVgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRtZW51ID0gJChlbGVtZW50KTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmICgkbWVudS5kYXRhKCdkZWxheScpIHx8IDAgPT09ICRtZW51LmRhdGEoJ2RlbGF5JykpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MuZGVsYXkgPSAkbWVudS5kYXRhKCdkZWxheScpO1xuICAgIH1cblxuICAgIHRoaXMudGltZXIgPSB7fTsgLy8gS2VlcCB0cmFjayBvZiBkZWxheWVkIHRyYW5zaXRpb25zLlxuICAgIHRoaXMuZmx5b3V0ID0gdGhpcy5mbHlvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3cgPSB0aGlzLnNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGUgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTtcblxuICAgIGNvbnN0IHsgZmx5b3V0LCBzaG93LCBoaWRlIH0gPSB0aGlzO1xuXG4gICAgJG1lbnUucmVtb3ZlQ2xhc3MoJ25vLWpzJyk7XG5cbiAgICAvKlxuICAgICAqIFRyaWdnZXJzIGRyb3Bkb3duIHNob3cgYW5kIGhpZGUsIHVwb24gbW91c2VlbnRlclxuICAgICAqIGFuZCBtb3VzZWxlYXZlLlxuICAgICAqL1xuICAgICRtZW51XG4gICAgICAuZmluZCgnbGknKVxuICAgICAgLmhhcyh0aGlzLnNldHRpbmdzLmRyb3BEb3duU2VsZWN0b3IpXG4gICAgICAuYWRkQ2xhc3MoJ21lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKVxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICR0cmlnZ2VyID0gJCh0aGlzKTtcbiAgICAgICAgZmx5b3V0KCR0cmlnZ2VyKTsgLy8gRGV0ZXJtaW5lIGFuZCBhZGRzIGNsYXNzIGZvciBmbHlvdXQgZGlyZWN0aW9uLlxuICAgICAgICBzaG93KCR0cmlnZ2VyKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaGlkZSgkKHRoaXMpKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gQWRkcyBDU1MgY2xhc3NlcyB0byBlYWNoIGxldmVsIG9mIHRoZSBtZW51LCAxLTMuXG4gICAgJG1lbnUuY2hpbGRyZW4oJ2xpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcylcbiAgICAgICAgLmFkZENsYXNzKCdsZXZlbC0xJylcbiAgICAgICAgLmNoaWxkcmVuKCd1bCcpXG4gICAgICAgIC5jaGlsZHJlbignbGknKVxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2xldmVsLTInKVxuICAgICAgICAgICAgLmNoaWxkcmVuKCd1bCcpXG4gICAgICAgICAgICAuY2hpbGRyZW4oJ2xpJylcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsZXZlbC0zJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgbW9iaWxlIHRvdWNoIHN1cHBvcnQuXG4gICAgaWYgKGlzTW9iaWxlKCkpIHtcbiAgICAgIC8vIFRhcCBhbnl3aGVyZSBvbiBpT1MgdG8gdW5mb2N1cyBhIHN1Ym1lbnUuXG4gICAgICAkKCdodG1sJylcbiAgICAgICAgLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgICAgICAub24oJ2NsaWNrJywgJC5ub29wKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCBtZW51IG9wdGlvbnMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGF5OiA1MDAsXG4gICAgICBkcm9wRG93blNlbGVjdG9yOiAndWw6bm90KC5tZWdhLXN1Yi1tZW51KSwgLmZzLW1lZ2EnXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBkaXJlY3Rpb24gdGhlIGRyb3Bkb3duIG1lbnUgc2hvdWxkXG4gICAqIGZseW91dCB0b3dhcmRzLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0cmlnZ2VyIFRoZSBwYXJlbnQgbWVudSBpdGVtLCBmb3Igd2hpY2ggdGhlIGRyb3Bkb3duIGJlbG9uZ3MgdG8uXG4gICAqL1xuICBmbHlvdXQoJHRyaWdnZXIpIHtcbiAgICBpZiAoISR0cmlnZ2VyLmhhc0NsYXNzKCdsZXZlbC0xJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRyb3BEb3duU2VsZWN0b3IgfSA9IHRoaXMuc2V0dGluZ3M7XG4gICAgY29uc3QgeyAkYm9keSB9ID0gZG9tO1xuICAgIGNvbnN0ICRmbHlvdXQgPSAkdHJpZ2dlci5jaGlsZHJlbihkcm9wRG93blNlbGVjdG9yKTtcbiAgICB2YXIgbG9jYXRpb24gPSAkdHJpZ2dlci5vZmZzZXQoKTtcbiAgICB2YXIgc3BhY2UgPSAyMDA7XG5cbiAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ3J0bCcpKSB7XG4gICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uWydyaWdodCddO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uWydsZWZ0J107XG4gICAgfVxuXG4gICAgaWYgKCRmbHlvdXQuZmluZCgnLmxldmVsLTMnKS5sZW5ndGggPiAwKSB7XG4gICAgICBzcGFjZSArPSBzcGFjZTsgLy8gU3BhY2UgZG91YmxlcyBmb3IgbGV2ZWwgMy5cbiAgICB9XG5cbiAgICAvLyBDYW4ndCB1c2VkIGNhY2hlZCB3aW5kb3cgaGVyZS5cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgLSBsb2NhdGlvbiA8PSBzcGFjZSkge1xuICAgICAgJGZseW91dC5hZGRDbGFzcygncmV2ZXJzZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZmx5b3V0LnJlbW92ZUNsYXNzKCdyZXZlcnNlJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGEgZHJvcGRvd24gbWVudS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBUaGUgcGFyZW50IG1lbnUgaXRlbSwgZm9yIHdoaWNoIHRoZSBkcm9wZG93biBiZWxvbmdzIHRvLlxuICAgKi9cbiAgc2hvdygkdHJpZ2dlcikge1xuICAgIGNvbnN0IHsgZHJvcERvd25TZWxlY3RvciB9ID0gdGhpcy5zZXR0aW5ncztcbiAgICBjb25zdCBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoJHRyaWdnZXIpO1xuICAgIGNvbnN0ICRzaWJsaW5ncyA9ICR0cmlnZ2VyLnNpYmxpbmdzKCkuZmluZChkcm9wRG93blNlbGVjdG9yKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJHRyaWdnZXIuY2hpbGRyZW4oZHJvcERvd25TZWxlY3Rvcik7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcltsZXZlbF0pO1xuXG4gICAgJHNpYmxpbmdzLnJlbW92ZUNsYXNzKCdpbicpO1xuXG4gICAgJHRhcmdldC5hZGRDbGFzcygnc2hvdyBmYWRlJyk7XG5cbiAgICB0aGlzLnRpbWVyW2xldmVsXSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkc2libGluZ3MucmVtb3ZlQ2xhc3MoJ3Nob3cgZmFkZScpO1xuICAgICAgJHRhcmdldC5hZGRDbGFzcygnaW4nKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGEgZHJvcGRvd24gbWVudS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBUaGUgcGFyZW50IG1lbnUgaXRlbSwgZm9yIHdoaWNoIHRoZSBkcm9wZG93biBiZWxvbmdzIHRvLlxuICAgKi9cbiAgaGlkZSgkdHJpZ2dlciwgc2V0dGluZ3MpIHtcbiAgICBjb25zdCB7IGRyb3BEb3duU2VsZWN0b3IsIGRlbGF5IH0gPSB0aGlzLnNldHRpbmdzO1xuICAgIGNvbnN0IGxldmVsID0gdGhpcy5nZXRMZXZlbCgkdHJpZ2dlcik7XG4gICAgY29uc3QgJGZseW91dCA9ICR0cmlnZ2VyLmNoaWxkcmVuKGRyb3BEb3duU2VsZWN0b3IpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJbbGV2ZWxdKTtcblxuICAgIHRoaXMudGltZXJbbGV2ZWxdID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRmbHlvdXQucmVtb3ZlQ2xhc3MoJ2luJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICRmbHlvdXQucmVtb3ZlQ2xhc3MoJ3Nob3cgZmFkZScpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgY3VycmVudCBsZXZlbCBvZiB0aGUgZHJvcGRvd24gcGFyZW50XG4gICAqIGl0ZW0gYmVpbmcgdHJpZ2dlcmVkLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAkdHJpZ2dlciBUaGUgcGFyZW50IG1lbnUgaXRlbSwgZm9yIHdoaWNoIHRoZSBkcm9wZG93biBiZWxvbmdzIHRvLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IEN1cnJlbnQgbWVudSBsZXZlbCwgYGxldmVsLTFgLCBgbGV2ZWwtMmAgb3IgYGxldmVsLTNgLlxuICAgKi9cbiAgZ2V0TGV2ZWwoJHRyaWdnZXIpIHtcbiAgICBpZiAoJHRyaWdnZXIuaGFzQ2xhc3MoJ2xldmVsLTMnKSkge1xuICAgICAgcmV0dXJuICdsZXZlbC0zJztcbiAgICB9IGVsc2UgaWYgKCR0cmlnZ2VyLmhhc0NsYXNzKCdsZXZlbC0yJykpIHtcbiAgICAgIHJldHVybiAnbGV2ZWwtMic7XG4gICAgfVxuICAgIHJldHVybiAnbGV2ZWwtMSc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiIsIi8qKlxuICogQWRkcyBzdWJtZW51IG5hdmlnYXRpb24gdG8gbW9iaWxlIG1lbnVzLlxuICpcbiAqIEBzdW1tYXJ5ICBNb2JpbGUgTWVudXNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBtb2JpbGUtbWVudS5qc1xuICovXG5jbGFzcyBNb2JpbGVNZW51IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGBtb2JpbGUtbWVudWAgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMgKGN1cnJlbnRseSBub3QgdXNlZCkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJG1lbnUgPSAkKGVsZW1lbnQpO1xuICAgIGNvbnN0ICR0cmlnZ2VycyA9ICRtZW51LmZpbmQoJ2xpJykuaGFzKCd1bCcpO1xuICAgIGNvbnN0IHsgc2hvdywgaGlkZSB9ID0gdGhpcztcblxuICAgICR0cmlnZ2Vyc1xuICAgICAgLmFkZENsYXNzKCdtZW51LWl0ZW0taGFzLWNoaWxkcmVuJylcbiAgICAgIC5jaGlsZHJlbignLm1lbnUtYnRuJylcbiAgICAgIC5vbignY2xpY2suZnMubW9iaWxlLW1lbnUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzaG93KCQodGhpcykpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICR0cmlnZ2Vyc1xuICAgICAgLmZpbmQoJ3VsJylcbiAgICAgIC5wcmVwZW5kKCc8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1lbnUtYnRuIGJhY2tcIj48L2E+PC9saT4nKVxuICAgICAgLmZpbmQoJy5iYWNrJylcbiAgICAgIC5vbignY2xpY2suZnMubW9iaWxlLW1lbnUtYmFjaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhpZGUoJCh0aGlzKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgJG1lbnUuaGVpZ2h0KCRtZW51LnByb3AoJ3Njcm9sbEhlaWdodCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGEgc3VibWVudS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBQYXJlbnQgbWVudSBpdGVtIHRyaWdnZXJpbmcgc3VibWVudS5cbiAgICovXG4gIHNob3coJHRyaWdnZXIpIHtcbiAgICAkdHJpZ2dlclxuICAgICAgLmNsb3Nlc3QoJ2xpJylcbiAgICAgIC5jaGlsZHJlbigndWwnKVxuICAgICAgLmFkZENsYXNzKCdvbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgYSBzdWJtZW51LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0cmlnZ2VyIFBhcmVudCBtZW51IGl0ZW0gdHJpZ2dlcmluZyBzdWJtZW51LlxuICAgKi9cbiAgaGlkZSgkdHJpZ2dlcikge1xuICAgICR0cmlnZ2VyLmNsb3Nlc3QoJ3VsJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBkb20gfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGJpbmRzIHByZXNldCBpbnN0YW5jZXMgb2YgTWFnbmlmaWMgUG9wdXAuXG4gKlxuICogTWFnbmlmaWMgUG9wdXAgaXMgYW4gb3BlbiBzb3VyY2UgbGlnaHRib3ggc2NyaXB0XG4gKiBieSBEbWl0cnkgU2VtZW5vdi5cbiAqXG4gKiBAbGluayBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9cbiAqXG4gKiBAc3VtbWFyeSAgTW9kYWxzXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgbW9kYWwuanNcbiAqIEByZXF1aXJlcyBtYWduaWZpYy1wb3B1cC5qc1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oJCkge1xuICBpZiAoISQuZm4ubWFnbmlmaWNQb3B1cCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgJGRvY3VtZW50IH0gPSBkb207XG5cbiAgJGRvY3VtZW50LnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgICB2YXIgbWFpbkNsYXNzID0gJ2ZzLW1vZGFsJztcbiAgICB2YXIgcmVtb3ZhbERlbGF5ID0gMDtcblxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBhbmltYXRpb246ICdmYWRlJyxcbiAgICAgIG1vYmlsZTogMCxcbiAgICAgIG1vYmlsZUlmcmFtZTogNzY4LFxuICAgICAgbW9iaWxlR2FsbGVyeTogMCxcbiAgICAgIGVycm9yOiAnVGhlIG1vZGFsIG1lZGlhIGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcbiAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuICAgICAgY291bnRlcjogJyVjdXJyJSBvZiAldG90YWwlJyxcbiAgICAgIG5leHQ6ICdOZXh0JyxcbiAgICAgIHByZXZpb3VzOiAnUHJldmlvdXMnLFxuICAgICAgY2xvc2VNYXJrdXA6XG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1jbG9zZSBmcy1jbG9zZSBjbG9zZS1saWdodCBjbG9zZS1tZFwiPiV0aXRsZSU8L2J1dHRvbj4nXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93LmZzTW9kYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgY29uZmlnLCB3aW5kb3cuZnNNb2RhbCk7IC8vIEFuIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHlvdSBjb3VsZCBkZWNsYXJlLlxuICAgIH1cblxuICAgIGlmIChjb25maWcuYW5pbWF0aW9uICYmIGNvbmZpZy5hbmltYXRpb24gIT09ICdub25lJykge1xuICAgICAgbWFpbkNsYXNzID0gYCR7bWFpbkNsYXNzfSBmcy1tb2RhbC0ke2NvbmZpZ1snYW5pbWF0aW9uJ119YDtcbiAgICAgIHJlbW92YWxEZWxheSA9IDE1MDtcbiAgICB9XG5cbiAgICAkLmV4dGVuZCh0cnVlLCAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMsIHtcbiAgICAgIHRDbG9zZTogY29uZmlnLmNsb3NlLFxuICAgICAgdExvYWRpbmc6IGA8ZGl2IGNsYXNzPVwiZnMtbG9hZGVyXCI+PHNwYW4+JHtjb25maWcubG9hZGluZ308L3NwYW4+PC9kaXY+YCxcbiAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgdFByZXY6IGNvbmZpZy5wcmV2aW91cyxcbiAgICAgICAgdE5leHQ6IGNvbmZpZy5uZXh0LFxuICAgICAgICB0Q291bnRlcjogY29uZmlnLmNvdW50ZXJcbiAgICAgIH0sXG4gICAgICBpbWFnZToge1xuICAgICAgICB0RXJyb3I6IGNvbmZpZy5lcnJvclxuICAgICAgfSxcbiAgICAgIGFqYXg6IHtcbiAgICAgICAgdEVycm9yOiBjb25maWcuZXJyb3JcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5mcy1tb2RhbC1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtY29udGVudC1tb2RhbC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIG1haW5DbGFzczogbWFpbkNsYXNzLFxuICAgICAgYWxpZ25Ub3A6IHRydWUsXG4gICAgICBzaG93Q2xvc2VCdG46IGZhbHNlLFxuICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLm1mcC13cmFwIC5mcy1tb2RhbCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVDbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLm1mcC13cmFwIC5mcy1tb2RhbCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5mcy1zZWFyY2gtbW9kYWwtbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICBtYWluQ2xhc3M6IG1haW5DbGFzcyArICcgbWZwLXNlYXJjaCcsXG4gICAgICBjbG9zZUJ0bkluc2lkZTogZmFsc2UsXG4gICAgICBjbG9zZU1hcmt1cDogY29uZmlnLmNsb3NlTWFya3VwLFxuICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLm1mcC13cmFwIC5mcy1zZWFyY2gtbW9kYWwnKS5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2Uud3JhcFswXS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQoJy5tZnAtc2VhcmNoIC5mcy1zZWFyY2gtbW9kYWwgaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpLmZvY3VzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcubWZwLXdyYXAgLmZzLXNlYXJjaC1tb2RhbCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5mcy1tb2RhbC1nYWxsZXJ5LCAudGhlbWVibHZkLWdhbGxlcnknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJGdhbGxlcnkgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgJ3RoZW1lYmx2ZC1saWdodGJveCcsXG4gICAgICAgICdmcy1jb250ZW50LW1vZGFsLWxpbmsnLFxuICAgICAgICAnZnMtaW1hZ2UtbW9kYWwtbGluaycsXG4gICAgICAgICdmcy1pZnJhbWUtbW9kYWwtbGluaydcbiAgICAgIF07XG4gICAgICBjb25zdCBzZWxlY3RvciA9ICcuJyArIGNsYXNzZXMuam9pbignLCAuJyk7XG5cbiAgICAgICRnYWxsZXJ5LmZpbmQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGxpbmtDbGFzcyA9ICcnO1xuXG4gICAgICAgIGlmICgkbGluay5oYXNDbGFzcygnZnMtY29udGVudC1tb2RhbC1saW5rJykpIHtcbiAgICAgICAgICBsaW5rQ2xhc3MgPSAnbWZwLWlubGluZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoJGxpbmsuaGFzQ2xhc3MoJ2ZzLWltYWdlLW1vZGFsLWxpbmsnKSkge1xuICAgICAgICAgIGxpbmtDbGFzcyA9ICdtZnAtaW1hZ2UnO1xuICAgICAgICB9IGVsc2UgaWYgKCRsaW5rLmhhc0NsYXNzKCdmcy1pZnJhbWUtbW9kYWwtbGluaycpKSB7XG4gICAgICAgICAgbGlua0NsYXNzID0gJ21mcC1pZnJhbWUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlua0NsYXNzID0gYGZzLWdhbGxlcnktbW9kYWwtbGluayAke2xpbmtDbGFzc31gO1xuXG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKGNsYXNzZXMuam9pbignICcpKS5hZGRDbGFzcyhsaW5rQ2xhc3MpO1xuICAgICAgfSk7XG5cbiAgICAgICRnYWxsZXJ5Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICBtYWluQ2xhc3M6IG1haW5DbGFzcyxcbiAgICAgICAgY2xvc2VNYXJrdXA6IGNvbmZpZy5jbG9zZU1hcmt1cCxcbiAgICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICAgIGRpc2FibGVPbjogY29uZmlnLm1vYmlsZUdhbGxlcnksXG4gICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgY3Vyc29yOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGVnYXRlOiAnYS5mcy1nYWxsZXJ5LW1vZGFsLWxpbmsnLFxuICAgICAgICBpZnJhbWU6IHtcbiAgICAgICAgICAvLyBBZGQgYm90dG9tIGJhciBmb3IgaWZyYW1lc1xuICAgICAgICAgIG1hcmt1cDogYDxkaXYgY2xhc3M9XCJtZnAtaWZyYW1lLXNjYWxlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWZwLWNsb3NlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWZwLWJvdHRvbS1iYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWZwLXRpdGxlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICB9LFxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBtYXJrdXBQYXJzZTogZnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuICAgICAgICAgICAgdmFsdWVzLnRpdGxlID0gaXRlbS5lbC5hdHRyKCd0aXRsZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtaW1hZ2UtbW9kYWwtbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIG1haW5DbGFzczogbWFpbkNsYXNzLFxuICAgICAgY2xvc2VNYXJrdXA6IGNvbmZpZy5jbG9zZU1hcmt1cCxcbiAgICAgIHJlbW92YWxEZWxheTogcmVtb3ZhbERlbGF5LFxuICAgICAgZGlzYWJsZU9uOiBjb25maWcubW9iaWxlLFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgY3Vyc29yOiBudWxsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtaWZyYW1lLW1vZGFsLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgbWFpbkNsYXNzOiBtYWluQ2xhc3MsXG4gICAgICBjbG9zZU1hcmt1cDogY29uZmlnLmNsb3NlTWFya3VwLFxuICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICBkaXNhYmxlT246IGNvbmZpZy5tb2JpbGVJZnJhbWUsXG4gICAgICBpZnJhbWU6IHtcbiAgICAgICAgLy8gQWRkIGJvdHRvbSBiYXIgZm9yIGlmcmFtZXNcbiAgICAgICAgbWFya3VwOlxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLWlmcmFtZS1zY2FsZXJcIj4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicgK1xuICAgICAgICAgICc8aWZyYW1lIGNsYXNzPVwibWZwLWlmcmFtZVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1ib3R0b20tYmFyXCI+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtdGl0bGVcIj48L2Rpdj4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICc8L2Rpdj4nXG4gICAgICB9LFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG1hcmt1cFBhcnNlOiBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtKSB7XG4gICAgICAgICAgdmFsdWVzLnRpdGxlID0gaXRlbS5lbC5hdHRyKCd0aXRsZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSkoJCk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIFRoaXMgZmlsZSBiaW5kcyBwcmVzZXQgaW5zdGFuY2VzIG9mIE93bENhcm91c2VsLFxuICogYWxsb3dpbmcgZm9yIHRob3NlIHRvIGJlIGNvbmZpZ3VyZWQgdGhyb3VnaCB0aGVcbiAqIEhUTUwgbWFya3VwLlxuICpcbiAqIE93bENhcm91c2VsIGlzIGFuIG9wZW4gc291cmNlIGNhcm91c2VsL3NsaWRlclxuICogc2NyaXB0IGJ5IERhdmlkIERldXRzY2guXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9vd2xjYXJvdXNlbDIuZ2l0aHViLmlvL093bENhcm91c2VsMi9cbiAqXG4gKiBAc3VtbWFyeSAgU2xpZGVyc1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIG1vZGFsLmpzXG4gKiBAcmVxdWlyZXMgb3dsLWNhcm91c2VsLmpzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCQpIHtcbiAgaWYgKCEkLmZuLm93bENhcm91c2VsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyAkd2luZG93LCAkYm9keSB9ID0gZG9tO1xuXG4gICR3aW5kb3cub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuZnMtc2ltcGxlLXNsaWRlciwgLmZzLWdhbGxlcnktc2xpZGVyLCAuZnMtYmxvY2stc2xpZGVyJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkd3JhcCA9ICQodGhpcyksXG4gICAgICAgICRzbGlkZXIgPSAkd3JhcC5maW5kKCcuZnMtc2xpZGVyJyksXG4gICAgICAgIGl0ZW1zID0gcGFyc2VJbnQoJHdyYXAuZGF0YSgnaXRlbXMnKSkgPyBwYXJzZUludCgkd3JhcC5kYXRhKCdpdGVtcycpKSA6IDQsXG4gICAgICAgIHNwZWVkID0gcGFyc2VJbnQoJHdyYXAuZGF0YSgnc3BlZWQnKSkgPyBwYXJzZUludCgkd3JhcC5kYXRhKCdzcGVlZCcpKSA6IDUwMCxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0ID0gcGFyc2VJbnQoJHdyYXAuZGF0YSgnYXV0b3BsYXknKSkgPyBwYXJzZUludCgkd3JhcC5kYXRhKCdhdXRvcGxheScpKSA6IDAsXG4gICAgICAgIG1hcmdpbiA9IHBhcnNlSW50KCR3cmFwLmRhdGEoJ21hcmdpbicpKSA/IHBhcnNlSW50KCR3cmFwLmRhdGEoJ21hcmdpbicpKSA6IDEsXG4gICAgICAgIGF1dG9wbGF5ID0gYXV0b3BsYXlUaW1lb3V0ID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBwYXVzZSA9ICd0cnVlJyA9PSAkd3JhcC5kYXRhKCdwYXVzZScpIHx8ICR3cmFwLmRhdGEoJ3BhdXNlJykgPT0gJzEnID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBsb29wID0gJ2ZhbHNlJyA9PSAkd3JhcC5kYXRhKCdsb29wJykgfHwgJHdyYXAuZGF0YSgnbG9vcCcpID09ICcwJyA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgICAgYW5pbWF0ZSA9ICd0cnVlJyA9PSAkd3JhcC5kYXRhKCdmYWRlJykgfHwgJHdyYXAuZGF0YSgnZmFkZScpID09ICcxJyA/ICdmYWRlT3V0JyA6IGZhbHNlLFxuICAgICAgICBhdXRvV2lkdGggPSAkd3JhcC5oYXNDbGFzcygnZnMtZ2FsbGVyeS1zbGlkZXInKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgY2VudGVyID0gJHdyYXAuaGFzQ2xhc3MoJ2ZzLWdhbGxlcnktc2xpZGVyJykgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICRuYXYgPSAkd3JhcC5maW5kKCcuZnMtc2xpZGVyLW5hdiwgLmZzLXNsaWRlci10aHVtYnMnKSxcbiAgICAgICAgJGFycm93cyA9ICR3cmFwLmZpbmQoJy5mcy1zbGlkZXItYXJyb3dzJyksXG4gICAgICAgIG5hdkNvdW50ZXIgPSAwLFxuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcblxuICAgICAgLy8gVG9nZ2xlIFwiaG92ZXJlZFwiIGNsYXNzIG9uL29mZiBmb3IgYW55IENTUyBob3ZlciBlZmZlY3RzLlxuICAgICAgJHdyYXBcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaG92ZXJlZCcpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdob3ZlcmVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgc2xpZGUtdG8gZGF0YSB0byBlYWNoIG5hdiBpdGVtLlxuICAgICAgJG5hdi5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuZGF0YSgnc2xpZGUtdG8nLCBuYXZDb3VudGVyKTtcbiAgICAgICAgbmF2Q291bnRlcisrO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICgkd3JhcC5oYXNDbGFzcygnZnMtc2ltcGxlLXNsaWRlcicpKSB7XG4gICAgICAgIG1hcmdpbiA9IDA7XG4gICAgICAgIGl0ZW1zID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoJHdyYXAuaGFzQ2xhc3MoJ2ZzLWdhbGxlcnktc2xpZGVyJykpIHtcbiAgICAgICAgaXRlbXMgPSAxO1xuICAgICAgfVxuXG4gICAgICAkc2xpZGVyLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBkb3RzOiB0cnVlLCAvLyBNdXN0IGJlIGVuYWJsZWQgZm9yIGUucGFnZS5pbmRleCB0byB3b3JrLlxuICAgICAgICBsb29wOiBsb29wLFxuICAgICAgICBzbWFydFNwZWVkOiBzcGVlZCxcbiAgICAgICAgYXV0b3BsYXk6IGF1dG9wbGF5LFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IGF1dG9wbGF5VGltZW91dCxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiBwYXVzZSxcbiAgICAgICAgYW5pbWF0ZU91dDogYW5pbWF0ZSxcbiAgICAgICAgYXV0b1dpZHRoOiBhdXRvV2lkdGgsXG4gICAgICAgIG1hcmdpbjogbWFyZ2luLFxuICAgICAgICBjZW50ZXI6IGNlbnRlcixcbiAgICAgICAgcnRsOiAkYm9keS5oYXNDbGFzcygncnRsJykgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIG9uSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAkbmF2LmZpbmQoJ2xpOmZpcnN0LWNoaWxkJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICR3cmFwLnJlbW92ZUNsYXNzKCdsb2FkaW5nJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAgICAgICAgIGlmICghbG9vcCkgJGFycm93cy5maW5kKCdsaScpLmFkZENsYXNzKCdmYWRlJyk7XG4gICAgICAgICAgJHdyYXAuZmluZCgnLmZzLWxvYWRlcicpLmZhZGVPdXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2VkOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBNYWtlIHN1cmUgbmV4dCBhbmQgcHJldiBidXR0b25zIGRvbid0IHNob3dcbiAgICAgICAgICAgKiB3aGVuIGF0IHN0YXJ0IGFuZCBlbmQgb2YgY3ljbGUsIGlmIHRoZXJlJ3NcbiAgICAgICAgICAgKiBubyBsb29waW5nLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICghbG9vcCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkd3JhcC5oYXNDbGFzcygnZnMtYmxvY2stc2xpZGVyJykgPyBlLml0ZW0uaW5kZXggOiBlLnBhZ2UuaW5kZXg7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwIHx8IGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICAgICRhcnJvd3MuZmluZCgnbGkucHJldicpLnJlbW92ZUNsYXNzKCdpbicpO1xuICAgICAgICAgICAgICAkYXJyb3dzLmZpbmQoJ2xpLm5leHQnKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5wYWdlLmluZGV4ICsgMSA9PSBlLnBhZ2UuY291bnQpIHtcbiAgICAgICAgICAgICAgJGFycm93cy5maW5kKCdsaS5uZXh0JykucmVtb3ZlQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICAgICRhcnJvd3MuZmluZCgnbGkucHJldicpLmFkZENsYXNzKCdpbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGFycm93cy5maW5kKCdsaScpLmFkZENsYXNzKCdpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN0YW5kYXJkIG5hdmlnYXRpb24gZG90cy5cbiAgICAgICAgICAkbmF2LmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICRuYXYuZmluZCgnbGk6bnRoLWNoaWxkKCAnICsgKGUucGFnZS5pbmRleCArIDEpICsgJyApJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQmluZCBzdGFuZGFyZCBzbGlkZXIgbmF2IGFuZCB0aHVtYiBuYXYuXG4gICAgICAkbmF2LmZpbmQoJ2xpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRjdXJyZW50ID0gJCh0aGlzKTtcblxuICAgICAgICAkc2xpZGVyLnRyaWdnZXIoJ3RvLm93bC5jYXJvdXNlbCcsICRjdXJyZW50LmRhdGEoJ3NsaWRlLXRvJykpO1xuXG4gICAgICAgICRjdXJyZW50XG4gICAgICAgICAgLmNsb3Nlc3QoJ3VsLCBvbCcpXG4gICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICRjdXJyZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBCaW5kIHNsaWRlciBhcnJvdyBuZXh0L3ByZXYgbmF2LlxuICAgICAgJGFycm93cy5maW5kKCdsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAkc2xpZGVyLnRyaWdnZXIoICdzdG9wLm93bC5hdXRvcGxheScgKTsgLy8gRG9lc24ndCB3b3JrIHJpZ2h0IGFzIG9mIHYyLjIuMS5cbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ25leHQnKSkge1xuICAgICAgICAgICRzbGlkZXIudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2xpZGVyLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pOyAvLyBFbmQgLmVhY2goKVxuICB9KTsgLy8gRW5kIC5vbiggJ2xvYWQnIClcbn0pKCQpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvbSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBBZGRzIHRhYnMgYmxvY2sgZnVuY3Rpb25hbGl0eSwgd2hpY2ggYWxsb3dzXG4gKiB0b2dnbGluZyBiZXR3ZWVuIHRhYiBjb250ZW50IHBhbmVzLlxuICpcbiAqIEBzdW1tYXJ5ICBUYWJzXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgdGFicy5qc1xuICovXG5jbGFzcyBUYWJzIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGB0YWJzYCBibG9jayBvbiBhIERPTSBlbGVtZW50LFxuICAgKiB3aGVuIGJpbmRlZCB0aHJvdWdoIGpRdWVyeS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQmxvY2sgb3B0aW9ucyAoY3VycmVudGx5IG5vdCB1c2VkKS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCAkdGFicyA9ICQoZWxlbWVudCk7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgY29uc3QgeyAkd2luZG93IH0gPSBkb207XG5cbiAgICB0aGlzLmRlZXBMaW5rID0gdGhpcy5kZWVwTGluay5iaW5kKHRoaXMpO1xuXG4gICAgY29uc3QgeyBzaG93LCBtYXRjaEhlaWdodCwgZGVlcExpbmsgfSA9IHRoaXM7XG5cbiAgICAvKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBiZWluZyBhZGRlZCB0byB0aGUgdGFicyBlbGVtZW50XG4gICAgICogY2FuIG92ZXJyaWRlIHRoZSBoZWlnaHQgYW5kIGRlZXBMaW5rIG9wdGlvbnMuXG4gICAgICovXG4gICAgaWYgKCR0YWJzLmhhc0NsYXNzKCd0YWJzLWZpeGVkLWhlaWdodCcpKSB7XG4gICAgICBzZXR0aW5ncy5oZWlnaHQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICgkdGFicy5oYXNDbGFzcygndGFicy1kZWVwLWxpbmsnKSkge1xuICAgICAgc2V0dGluZ3MuZGVlcExpbmsgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFNldHVwIGFjY2Vzc2libGl0eS5cbiAgICAkdGFicy5maW5kKCcudGFiLXBhbmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICRwYW5lID0gJCh0aGlzKTtcblxuICAgICAgaWYgKCRwYW5lLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAkcGFuZS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkcGFuZS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVG9nZ2xlIHRhYiBjb250ZW50LlxuICAgICR0YWJzXG4gICAgICAuZmluZChzZXR0aW5ncy5uYXZTZWxlY3RvcilcbiAgICAgIC5maW5kKCdhJylcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzaG93KCR0YWJzLCAkKHRoaXMpLCBzZXR0aW5ncyk7XG4gICAgICB9KTtcblxuICAgIC8vIFNldHVwIGZpeGVkIGhlaWdodCBhbmQvb3IgZGVlcC1saW5raW5nLlxuICAgIGlmIChzZXR0aW5ncy5oZWlnaHQgfHwgc2V0dGluZ3MuZGVlcExpbmspIHtcbiAgICAgICR3aW5kb3cub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTWF0Y2ggaGVpZ2h0IG9mIGFsbCB0YWJzIHRvIHRhbGxlc3QuXG4gICAgICAgIGlmIChzZXR0aW5ncy5oZWlnaHQpIHtcbiAgICAgICAgICBtYXRjaEhlaWdodCgkdGFicyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXYXRjaCBmb3IgZGVlcC1saW5raW5nLlxuICAgICAgICBpZiAoc2V0dGluZ3MuZGVlcExpbmspIHtcbiAgICAgICAgICBkZWVwTGluaygkdGFicywgc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB0YWJzIG9wdGlvbnMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hdlNlbGVjdG9yOiAnLm1lbnUtYmFyLCAuc3VibWVudS1iYXIsIC5zdWJtZW51LXRhYnMsIC5zdWJtZW51LXBpbGxzJyxcbiAgICAgIGhlaWdodDogZmFsc2UsXG4gICAgICBkZWVwTGluazogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYSB0YWIuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRhYnMgICAgVGhlIGJpbmRlZCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBMaW5rICh0YWIpIHdoaWNoIGlzIHRyaWdnZXJpbmcgbmV3IGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAgICovXG4gIHNob3coJHRhYnMsICR0cmlnZ2VyLCBzZXR0aW5ncykge1xuICAgIGNvbnN0ICRuYXYgPSAkdHJpZ2dlci5jbG9zZXN0KHNldHRpbmdzLm5hdlNlbGVjdG9yKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkdHJpZ2dlci5hdHRyKCdocmVmJykuc3BsaXQoJyMnKVsxXTtcblxuICAgICRuYXYuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAkdHJpZ2dlci5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICR0YWJzXG4gICAgICAuZmluZCgnLnRhYi1wYW5lJylcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2luJylcbiAgICAgIC5oaWRlKClcbiAgICAgIC5yZW1vdmVDbGFzcygnZmFkZScpO1xuXG4gICAgJHRhYnNcbiAgICAgIC5maW5kKCcjJyArIHRhcmdldClcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIC5hZGRDbGFzcygnZmFkZScpXG4gICAgICAuc2hvdygwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhbGwgdGFiIGNvbnRlbnQgcGFuZXMgdG8gaGF2ZSBlcXVhbCBoZWlnaHQsIHRvXG4gICAqIHRoZSB0YWxsZXN0IG9uZS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGFicyBUaGUgYmluZGVkIGpRdWVyeSBET00gZWxlbWVudC5cbiAgICovXG4gIG1hdGNoSGVpZ2h0KCR0YWJzKSB7XG4gICAgdmFyIHRhbGxlc3QgPSAwO1xuXG4gICAgJHRhYnMuZmluZCgnLnRhYi1wYW5lJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICRwYW5lID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSAkcGFuZS5zaG93KCkub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgaWYgKCEkcGFuZS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgJHBhbmUuaGlkZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudEhlaWdodCA+IHRhbGxlc3QpIHtcbiAgICAgICAgdGFsbGVzdCA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkdGFicy5maW5kKCcudGFiLXBhbmUnKS5oZWlnaHQodGFsbGVzdCk7XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggZm9yIHRhYiBkZWVwLWxpbmtpbmcuXG4gICAqXG4gICAqIFRhYiBkZWVwLWxpbmtpbmcgaXMgd2hlbiB0aGUgdXNlciBwYXNzZXMgYSB0YWIgSURcbiAgICogdGhyb3VnaCB0aGUgVVJMIG9mIHRoZSB3ZWJwYWdlIHRvIHRyaWdnZXIgb3BlbmluZ1xuICAgKiBhIHNwZWNpZmljIHRhYiBwYW5lLlxuICAgKlxuICAgKiBUbyBkZWVwIGxpbmsgdG8gYSB0YWIsIHlvdSBuZWVkIHRvIHByZWZpeFxuICAgKiB0aGUgSUQgb2YgdGhlIHRhYiB3aXRoIFwidGFiX1wiIGxpa2UgdGhpczpcbiAgICpcbiAgICogYGh0dHA6Ly95b3VyLXNpdGUuY29tL3BhZ2Utd2l0aC10YWJzLyN0YWJfaWRfb2ZfdGFiYFxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0YWJzICAgIFRoZSBiaW5kZWQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gICAqL1xuICBkZWVwTGluaygkdGFicywgc2V0dGluZ3MpIHtcbiAgICB2YXIgaGFzaCA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2g7XG5cbiAgICBpZiAoaGFzaCAmJiAtMSAhPSBoYXNoLmluZGV4T2YoJ3RhYl8nKSkge1xuICAgICAgaGFzaCA9IGhhc2gucmVwbGFjZSgndGFiXycsICcnKTtcblxuICAgICAgdGhpcy5zaG93KCR0YWJzLCAkdGFicy5maW5kKCdhW2hyZWY9XCInICsgaGFzaCArICdcIl0gJyksIHNldHRpbmdzKTtcblxuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICR0YWJzLm9mZnNldCgpLnRvcCAtIDIwXG4gICAgICAgIH0sXG4gICAgICAgIDgwMFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFicztcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogQWRkcyB0b2dnbGVzIGJsb2NrIGZ1bmN0aW9uYWxpdHksIHdoaWNoIGFsbG93c1xuICogdG9nZ2xlIGRpc3BsYXkgb2YgY29udGVudC5cbiAqXG4gKiBAc3VtbWFyeSAgVG9nZ2xlXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgdG9nZ2xlLmpzXG4gKi9cbmNsYXNzIFRvZ2dsZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgdGFic2AgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJHRvZ2dsZSA9ICQoZWxlbWVudCk7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgY29uc3QgeyBvcGVuLCBjbG9zZSB9ID0gdGhpcztcblxuICAgIHZhciAkZ3JvdXAgPSBudWxsO1xuXG4gICAgaWYgKCR0b2dnbGUucGFyZW50cygnLnRvZ2dsZS1ncm91cCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICRncm91cCA9ICR0b2dnbGUuY2xvc2VzdCgnLnRvZ2dsZS1ncm91cCcpO1xuICAgIH1cblxuICAgIGlmICgkZ3JvdXAgJiYgJGdyb3VwLmhhc0NsYXNzKCd0b2dnbGUtYWNjb3JkaW9uJykpIHtcbiAgICAgIHNldHRpbmdzLmFjY29yZGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGFjY2Vzc2libGl0eS5cbiAgICAkdG9nZ2xlLmZpbmQoJy50b2dnbGUtY29udGVudCcpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAvLyBPcGVuIGluaXRpYWxseSBpZiBoYXMgY2xhc3MgYHRvZ2dsZS1leHBhbmRlZGAuXG4gICAgaWYgKCR0b2dnbGUuaGFzQ2xhc3MoJ3RvZ2dsZS1leHBhbmRlZCcpKSB7XG4gICAgICBvcGVuKCR0b2dnbGUsIHNldHRpbmdzLnNwZWVkKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgdG9nZ2xlIGNsaWNrLlxuICAgICR0b2dnbGUuZmluZCgnLnRvZ2dsZS10aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAkKHRoaXMpLmJsdXIoKTtcblxuICAgICAgaWYgKCR0b2dnbGUuaGFzQ2xhc3MoJ3RvZ2dsZS1leHBhbmRlZCcpKSB7XG4gICAgICAgIC8vIFRvZ2dsZSBpcyBvcGVuOyBzbyBjbG9zZSBpdC5cbiAgICAgICAgY2xvc2UoJHRvZ2dsZSwgc2V0dGluZ3Muc3BlZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCRncm91cCAmJiBzZXR0aW5ncy5hY2NvcmRpb24pIHtcbiAgICAgICAgICAkZ3JvdXAuZmluZCgnLmZzLXRvZ2dsZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbG9zZSgkKHRoaXMpLCBzZXR0aW5ncy5zcGVlZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUb2dnbGUgaXMgY2xvc2VkOyBzbyBvcGVuIGl0LlxuICAgICAgICBvcGVuKCR0b2dnbGUsIHNldHRpbmdzLnNwZWVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHRvZ2dsZSBvcHRpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzcGVlZDogMjAwLFxuICAgICAgYWNjb3JkaW9uOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBhIHRvZ2dsZS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdG9nZ2xlIFRoZSBiaW5kZWQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWQgICBBbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxuICAgKi9cbiAgb3BlbigkdG9nZ2xlLCBzcGVlZCkge1xuICAgICR0b2dnbGVcbiAgICAgIC5hZGRDbGFzcygndG9nZ2xlLWV4cGFuZGVkJylcbiAgICAgIC5maW5kKCcudG9nZ2xlLWNvbnRlbnQnKVxuICAgICAgLnN0b3AodHJ1ZSwgdHJ1ZSlcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIC5zbGlkZURvd24oc3BlZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIGEgdG9nZ2xlLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0b2dnbGUgVGhlIGJpbmRlZCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZCAgIEFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXG4gICAqL1xuICBjbG9zZSgkdG9nZ2xlLCBzcGVlZCkge1xuICAgICR0b2dnbGVcbiAgICAgIC5yZW1vdmVDbGFzcygndG9nZ2xlLWV4cGFuZGVkJylcbiAgICAgIC5maW5kKCcudG9nZ2xlLWNvbnRlbnQnKVxuICAgICAgLnN0b3AodHJ1ZSwgdHJ1ZSlcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAuc2xpZGVVcChzcGVlZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBBZGRzIHRvb2x0aXAgYmxvY2sgZnVuY3Rpb25hbGl0eS5cbiAqXG4gKiBJbnNwaXJlZCBieSBCb290c3RyYXAgMydzIHRvb2x0aXBzLmpzLCB3aGljaCB3YXMgaW5zcGlyZWRcbiAqIGJ5IHRoZSBvcmlnaW5hbCBqUXVlcnkudGlwc3kgYnkgSmFzb24gRnJhbWUuXG4gKlxuICogQHN1bW1hcnkgIFRvb2x0aXBcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICB0b29sdGlwLmpzXG4gKi9cbmNsYXNzIFRvb2x0aXAge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYHRvb2x0aXBgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBudWxsO1xuICAgIHRoaXMuZW5hYmxlZCA9IG51bGw7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmhvdmVyU3RhdGUgPSBudWxsO1xuICAgIHRoaXMuJGVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuaW5TdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICB0aGlzLnNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcbiAgICB0aGlzLiR2aWV3cG9ydCA9XG4gICAgICB0aGlzLnNldHRpbmdzLnZpZXdwb3J0ICYmXG4gICAgICAkKFxuICAgICAgICAkLmlzRnVuY3Rpb24odGhpcy5zZXR0aW5ncy52aWV3cG9ydClcbiAgICAgICAgICA/IHRoaXMuc2V0dGluZ3Mudmlld3BvcnQuY2FsbCh0aGlzLCB0aGlzLiRlbGVtZW50KVxuICAgICAgICAgIDogdGhpcy5zZXR0aW5ncy52aWV3cG9ydC5zZWxlY3RvciB8fCB0aGlzLnNldHRpbmdzLnZpZXdwb3J0XG4gICAgICApO1xuICAgIHRoaXMuaW5TdGF0ZSA9IHsgY2xpY2s6IGZhbHNlLCBob3ZlcjogZmFsc2UsIGZvY3VzOiBmYWxzZSB9O1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignbW91c2VlbnRlci50b29sdGlwJywgZmFsc2UsICQucHJveHkodGhpcy5lbnRlciwgdGhpcykpO1xuICAgIHRoaXMuJGVsZW1lbnQub24oJ21vdXNlbGVhdmUudG9vbHRpcCcsIGZhbHNlLCAkLnByb3h5KHRoaXMubGVhdmUsIHRoaXMpKTtcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2ZvY3VzaW4udG9vbHRpcCcsIGZhbHNlLCAkLnByb3h5KHRoaXMuZW50ZXIsIHRoaXMpKTtcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdmb2N1c291dC50b29sdGlwJywgZmFsc2UsICQucHJveHkodGhpcy5sZWF2ZSwgdGhpcykpO1xuXG4gICAgdGhpcy5nZXREZWxlZ2F0ZVNldHRpbmdzID0gdGhpcy5nZXREZWxlZ2F0ZVNldHRpbmdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbnRlciA9IHRoaXMuZW50ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlzSW5TdGF0ZVRydWUgPSB0aGlzLmlzSW5TdGF0ZVRydWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxlYXZlID0gdGhpcy5sZWF2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2hvdyA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXBwbHlQbGFjZW1lbnQgPSB0aGlzLmFwcGx5UGxhY2VtZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oaWRlID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYXNDb250ZW50ID0gdGhpcy5oYXNDb250ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQgPSB0aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFRpdGxlID0gdGhpcy5nZXRUaXRsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VUlEID0gdGhpcy5nZXRVSUQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRpcCA9IHRoaXMudGlwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hcnJvdyA9IHRoaXMuYXJyb3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVuYWJsZSA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVFbmFibGVkID0gdGhpcy50b2dnbGVFbmFibGVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdG9vbHRpcCBvcHRpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgdGVtcGxhdGU6XG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZnMtdG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBjb250YWluZXI6IGZhbHNlLFxuICAgICAgdmlld3BvcnQ6IHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgcGFkZGluZzogMFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBnZXREZWxlZ2F0ZVNldHRpbmdzKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge307XG5cbiAgICB0aGlzLl9zZXR0aW5ncyAmJlxuICAgICAgJC5lYWNoKHRoaXMuX3NldHRpbmdzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLmRlZmF1bHRzW2tleV0pIHtcbiAgICAgICAgICBzZXR0aW5nc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHNldHRpbmdzO1xuICB9XG5cbiAgZW50ZXIob2JqKSB7XG4gICAgdmFyIHNlbGYgPSBvYmogaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yID8gb2JqIDogJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcpO1xuXG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICBzZWxmID0gbmV3IHRoaXMuY29uc3RydWN0b3Iob2JqLmN1cnJlbnRUYXJnZXQsIHRoaXMuZ2V0RGVsZWdhdGVTZXR0aW5ncygpKTtcbiAgICAgICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnLCBzZWxmKTtcbiAgICB9XG5cbiAgICBpZiAob2JqIGluc3RhbmNlb2YgJC5FdmVudCkge1xuICAgICAgc2VsZi5pblN0YXRlW29iai50eXBlID09ICdmb2N1c2luJyA/ICdmb2N1cycgOiAnaG92ZXInXSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudGlwKCkuaGFzQ2xhc3MoJ2luJykgfHwgc2VsZi5ob3ZlclN0YXRlID09ICdpbicpIHtcbiAgICAgIHNlbGYuaG92ZXJTdGF0ZSA9ICdpbic7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5ob3ZlclN0YXRlID0gJ2luJztcblxuICAgIHJldHVybiBzZWxmLnNob3coKTtcbiAgfVxuXG4gIGlzSW5TdGF0ZVRydWUoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuaW5TdGF0ZSkge1xuICAgICAgaWYgKHRoaXMuaW5TdGF0ZVtrZXldKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxlYXZlKG9iaikge1xuICAgIHZhciBzZWxmID0gb2JqIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3RvciA/IG9iaiA6ICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnKTtcblxuICAgIGlmICghc2VsZikge1xuICAgICAgc2VsZiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG9iai5jdXJyZW50VGFyZ2V0LCB0aGlzLmdldERlbGVnYXRlU2V0dGluZ3MoKSk7XG4gICAgICAkKG9iai5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJywgc2VsZik7XG4gICAgfVxuXG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mICQuRXZlbnQpIHtcbiAgICAgIHNlbGYuaW5TdGF0ZVtvYmoudHlwZSA9PSAnZm9jdXNvdXQnID8gJ2ZvY3VzJyA6ICdob3ZlciddID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYuaXNJblN0YXRlVHJ1ZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5ob3ZlclN0YXRlID0gJ291dCc7XG5cbiAgICByZXR1cm4gc2VsZi5oaWRlKCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHZhciBlID0gJC5FdmVudCgnc2hvdy5mcy50b29sdGlwJyk7XG5cbiAgICBpZiAodGhpcy5oYXNDb250ZW50KCkgJiYgdGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSk7XG5cbiAgICAgIHZhciBpbkRvbSA9ICQuY29udGFpbnModGhpcy4kZWxlbWVudFswXS5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy4kZWxlbWVudFswXSk7XG5cbiAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8ICFpbkRvbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgJHRpcCA9IHRoaXMudGlwKCksXG4gICAgICAgIHRpcElkID0gdGhpcy5nZXRVSUQoJ3Rvb2x0aXAnKTtcblxuICAgICAgdGhpcy5zZXRDb250ZW50KCk7XG4gICAgICAkdGlwLmF0dHIoJ2lkJywgdGlwSWQpO1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpO1xuXG4gICAgICAkdGlwLmFkZENsYXNzKCdmYWRlJyk7XG5cbiAgICAgIHZhciBwbGFjZW1lbnQgPSB0aGlzLnNldHRpbmdzLnBsYWNlbWVudCxcbiAgICAgICAgYXV0b1Rva2VuID0gL1xccz9hdXRvP1xccz8vaSxcbiAgICAgICAgYXV0b1BsYWNlID0gYXV0b1Rva2VuLnRlc3QocGxhY2VtZW50KTtcblxuICAgICAgaWYgKGF1dG9QbGFjZSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQucmVwbGFjZShhdXRvVG9rZW4sICcnKSB8fCAndG9wJztcbiAgICAgIH1cblxuICAgICAgJHRpcFxuICAgICAgICAuZGV0YWNoKClcbiAgICAgICAgLmNzcyh7IHRvcDogMCwgbGVmdDogMCwgZGlzcGxheTogJ2Jsb2NrJyB9KVxuICAgICAgICAuYWRkQ2xhc3MocGxhY2VtZW50KVxuICAgICAgICAuZGF0YSgnZnMudG9vbHRpcCcsIHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5jb250YWluZXIpIHtcbiAgICAgICAgJHRpcC5hcHBlbmRUbyh0aGlzLnNldHRpbmdzLmNvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkdGlwLmluc2VydEFmdGVyKHRoaXMuJGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2luc2VydGVkLmZzLnRvb2x0aXAnKTtcblxuICAgICAgdmFyIHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgYWN0dWFsV2lkdGggPSAkdGlwWzBdLm9mZnNldFdpZHRoLFxuICAgICAgICBhY3R1YWxIZWlnaHQgPSAkdGlwWzBdLm9mZnNldEhlaWdodDtcblxuICAgICAgaWYgKGF1dG9QbGFjZSkge1xuICAgICAgICB2YXIgb3JnUGxhY2VtZW50ID0gcGxhY2VtZW50LFxuICAgICAgICAgIHZpZXdwb3J0RGltID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLiR2aWV3cG9ydCk7XG5cbiAgICAgICAgaWYgKCdib3R0b20nID09IHBsYWNlbWVudCAmJiBwb3MuYm90dG9tICsgYWN0dWFsSGVpZ2h0ID4gdmlld3BvcnREaW0uYm90dG9tKSB7XG4gICAgICAgICAgcGxhY2VtZW50ID0gJ3RvcCc7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3RvcCcgPT0gcGxhY2VtZW50ICYmIHBvcy50b3AgLSBhY3R1YWxIZWlnaHQgPCB2aWV3cG9ydERpbS50b3ApIHtcbiAgICAgICAgICBwbGFjZW1lbnQgPSAnYm90dG9tJztcbiAgICAgICAgfVxuXG4gICAgICAgICR0aXAucmVtb3ZlQ2xhc3Mob3JnUGxhY2VtZW50KS5hZGRDbGFzcyhwbGFjZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FsY3VsYXRlZE9mZnNldCA9IHRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldChwbGFjZW1lbnQsIHBvcywgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodCk7XG5cbiAgICAgIHRoaXMuYXBwbHlQbGFjZW1lbnQoY2FsY3VsYXRlZE9mZnNldCwgcGxhY2VtZW50KTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmV2SG92ZXJTdGF0ZSA9IHRoYXQuaG92ZXJTdGF0ZTtcblxuICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ3Nob3duLmZzLnRvb2x0aXAnKTtcbiAgICAgICAgdGhhdC5ob3ZlclN0YXRlID0gbnVsbDtcblxuICAgICAgICBpZiAoJ291dCcgPT0gcHJldkhvdmVyU3RhdGUpIHtcbiAgICAgICAgICB0aGF0LmxlYXZlKHRoYXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5UGxhY2VtZW50KG9mZnNldCwgcGxhY2VtZW50KSB7XG4gICAgdmFyICR0aXAgPSB0aGlzLnRpcCgpLFxuICAgICAgd2lkdGggPSAkdGlwWzBdLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHQsXG4gICAgICBtYXJnaW5Ub3AgPSBwYXJzZUludCgkdGlwLmNzcygnbWFyZ2luLXRvcCcpLCAxMCksXG4gICAgICBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoJHRpcC5jc3MoJ21hcmdpbi1sZWZ0JyksIDEwKTtcblxuICAgIG9mZnNldC50b3AgKz0gbWFyZ2luVG9wO1xuICAgIG9mZnNldC5sZWZ0ICs9IG1hcmdpbkxlZnQ7XG5cbiAgICAvKlxuXHRcdCAqICQuZm4ub2Zmc2V0IGRvZXNuJ3Qgcm91bmQgcGl4ZWwgdmFsdWVzOyBzbyB3ZSB1c2Vcblx0XHQgKiBzZXRPZmZzZXQgZGlyZWN0bHkgd2l0aCBvdXIgb3duIGZ1bmN0aW9uIEItMC5cblx0XHQgKi9cbiAgICAkLm9mZnNldC5zZXRPZmZzZXQoXG4gICAgICAkdGlwWzBdLFxuICAgICAgJC5leHRlbmQoXG4gICAgICAgIHtcbiAgICAgICAgICB1c2luZzogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICR0aXAuY3NzKHtcbiAgICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHByb3BzLnRvcCksXG4gICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQocHJvcHMubGVmdClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb2Zmc2V0XG4gICAgICApLFxuICAgICAgMFxuICAgICk7XG5cbiAgICAkdGlwLmFkZENsYXNzKCdpbicpO1xuXG4gICAgLypcblx0XHQgKiBDaGVjayB0byBzZWUgaWYgcGxhY2luZyB0aXAgaW4gbmV3IG9mZnNldCBjYXVzZWQgdGhlXG5cdFx0ICogdGlwIHRvIHJlc2l6ZSBpdHNlbGYuXG5cdFx0ICovXG4gICAgdmFyIGFjdHVhbFdpZHRoID0gJHRpcFswXS5vZmZzZXRXaWR0aCxcbiAgICAgIGFjdHVhbEhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKCd0b3AnID09IHBsYWNlbWVudCAmJiBhY3R1YWxIZWlnaHQgIT0gaGVpZ2h0KSB7XG4gICAgICBvZmZzZXQudG9wID0gb2Zmc2V0LnRvcCArIGhlaWdodCAtIGFjdHVhbEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIHZhciAkdGlwID0gdGhpcy50aXAoKSxcbiAgICAgIHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpO1xuXG4gICAgJHRpcC5maW5kKCcudG9vbHRpcC1pbm5lcicpWyd0ZXh0J10odGl0bGUpO1xuXG4gICAgJHRpcC5yZW1vdmVDbGFzcygnZmFkZSBpbiB0b3AgYm90dG9tJyk7XG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgJHRpcCA9ICQodGhpcy4kdGlwKSxcbiAgICAgIGV2ZW50ID0gJC5FdmVudCgnaGlkZS5mcy50b29sdGlwJyk7XG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIGlmICgnaW4nICE9IHRoYXQuaG92ZXJTdGF0ZSkge1xuICAgICAgICAkdGlwLmRldGFjaCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhhdC4kZWxlbWVudCkge1xuICAgICAgICB0aGF0LiRlbGVtZW50LnJlbW92ZUF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknKS50cmlnZ2VyKCdoaWRkZW4uZnMudG9vbHRpcCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZXZlbnQpO1xuXG4gICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJHRpcC5yZW1vdmVDbGFzcygnaW4nKTtcblxuICAgIHRoaXMuaG92ZXJTdGF0ZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhhc0NvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCRlbGVtZW50KSB7XG4gICAgaWYgKCEkZWxlbWVudCkge1xuICAgICAgJGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50O1xuICAgIH1cblxuICAgIHZhciBlbCA9ICRlbGVtZW50WzBdLFxuICAgICAgaXNCb2R5ID0gZWwudGFnTmFtZSA9PSAnQk9EWScsXG4gICAgICBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChlbFJlY3Qud2lkdGggPT0gbnVsbCkge1xuICAgICAgZWxSZWN0ID0gJC5leHRlbmQoe30sIGVsUmVjdCwge1xuICAgICAgICB3aWR0aDogZWxSZWN0LnJpZ2h0IC0gZWxSZWN0LmxlZnQsXG4gICAgICAgIGhlaWdodDogZWxSZWN0LmJvdHRvbSAtIGVsUmVjdC50b3BcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBpc1N2ZyA9IHdpbmRvdy5TVkdFbGVtZW50ICYmIGVsIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQsXG4gICAgICBlbE9mZnNldCA9IGlzQm9keSA/IHsgdG9wOiAwLCBsZWZ0OiAwIH0gOiBpc1N2ZyA/IG51bGwgOiAkZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgIHNjcm9sbCA9IHtcbiAgICAgICAgc2Nyb2xsOiBpc0JvZHlcbiAgICAgICAgICA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgICAgICA6ICRlbGVtZW50LnNjcm9sbFRvcCgpXG4gICAgICB9LFxuICAgICAgb3V0ZXJEaW1zID0gaXNCb2R5ID8geyB3aWR0aDogJCh3aW5kb3cpLndpZHRoKCksIGhlaWdodDogJCh3aW5kb3cpLmhlaWdodCgpIH0gOiBudWxsO1xuXG4gICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBlbFJlY3QsIHNjcm9sbCwgb3V0ZXJEaW1zLCBlbE9mZnNldCk7XG4gIH1cblxuICBnZXRDYWxjdWxhdGVkT2Zmc2V0KHBsYWNlbWVudCwgcG9zLCBhY3R1YWxXaWR0aCwgYWN0dWFsSGVpZ2h0KSB7XG4gICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgaWYgKCdib3R0b20nID09IHBsYWNlbWVudCkge1xuICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICB0b3A6IHBvcy50b3AgKyBwb3MuaGVpZ2h0LFxuICAgICAgICBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aCAvIDIgLSBhY3R1YWxXaWR0aCAvIDJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldCA9IHtcbiAgICAgICAgdG9wOiBwb3MudG9wIC0gYWN0dWFsSGVpZ2h0LFxuICAgICAgICBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aCAvIDIgLSBhY3R1YWxXaWR0aCAvIDJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHZhciB0aXRsZSA9IHRoaXMuc2V0dGluZ3MudGl0bGU7XG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB2YXIgJGVsID0gdGhpcy4kZWxlbWVudDtcbiAgICAgIHRpdGxlID0gJGVsLmF0dHIoJ3RpdGxlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgZ2V0VUlEKHByZWZpeCkge1xuICAgIGRvIHtcbiAgICAgIHByZWZpeCArPSB+fihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSk7XG5cbiAgICByZXR1cm4gcHJlZml4O1xuICB9XG5cbiAgdGlwKCkge1xuICAgIGlmICghdGhpcy4kdGlwKSB7XG4gICAgICB0aGlzLiR0aXAgPSAkKHRoaXMuc2V0dGluZ3MudGVtcGxhdGUpO1xuXG4gICAgICBpZiAodGhpcy4kdGlwLmxlbmd0aCAhPSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndG9vbHRpcCBgdGVtcGxhdGVgIG9wdGlvbiBtdXN0IGNvbnNpc3Qgb2YgZXhhY3RseSAxIHRvcC1sZXZlbCBlbGVtZW50IScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLiR0aXA7XG4gIH1cblxuICBhcnJvdygpIHtcbiAgICByZXR1cm4gKHRoaXMuJGFycm93ID0gdGhpcy4kYXJyb3cgfHwgdGhpcy50aXAoKS5maW5kKCcudG9vbHRpcC1hcnJvdycpKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gIXRoaXMuZW5hYmxlZDtcbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmIChldmVudCkge1xuICAgICAgc2VsZiA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcpO1xuXG4gICAgICBpZiAoIXNlbGYpIHtcbiAgICAgICAgc2VsZiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuZ2V0RGVsZWdhdGVTZXR0aW5ncygpKTtcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJywgc2VsZik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBzZWxmLmluU3RhdGUuY2xpY2sgPSAhc2VsZi5pblN0YXRlLmNsaWNrO1xuXG4gICAgICBpZiAoc2VsZi5pc0luU3RhdGVUcnVlKCkpIHtcbiAgICAgICAgc2VsZi5lbnRlcihzZWxmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubGVhdmUoc2VsZik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzZWxmLnRpcCgpLmhhc0NsYXNzKCdpbicpKSB7XG4gICAgICAgIHNlbGYubGVhdmUoc2VsZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmVudGVyKHNlbGYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICB0aGlzLmhpZGUoZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0LiRlbGVtZW50Lm9mZignLnRvb2x0aXAnKS5yZW1vdmVEYXRhKCdmcy50b29sdGlwJyk7XG5cbiAgICAgIGlmICh0aGF0LiR0aXApIHtcbiAgICAgICAgdGhhdC4kdGlwLmRldGFjaCgpO1xuICAgICAgfVxuXG4gICAgICB0aGF0LiR0aXAgPSBudWxsO1xuICAgICAgdGhhdC4kYXJyb3cgPSBudWxsO1xuICAgICAgdGhhdC4kdmlld3BvcnQgPSBudWxsO1xuICAgICAgdGhhdC4kZWxlbWVudCA9IG51bGw7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBkb20gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vYmxvY2tzL2JhY2tncm91bmQnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9ibG9ja3MvbWVudSc7XG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuL2Jsb2Nrcy9tb2JpbGUtbWVudSc7XG5pbXBvcnQgVGFicyBmcm9tICcuL2Jsb2Nrcy90YWJzJztcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi9ibG9ja3MvdG9nZ2xlJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vYmxvY2tzL3Rvb2x0aXAnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9tb2RhbCc7XG5pbXBvcnQgJy4vYmxvY2tzL3NsaWRlcic7XG5cbi8qKlxuICogQWRkIGJsb2NrcyB0byB0aGUgalF1ZXJ5IG5hbWVzcGFjZS5cbiAqXG4gKiBOb3RlOiBUaGlzIGRvZXNuJ3QgaW5jbHVkZSBibG9ja3MgbWVhbnQgdG9cbiAqIGltcGxlbWVudCBvcHRpb25hbCB0aGlyZC1wYXJ0eSBwbHVnaW5zLCBPd2xcbiAqIENhcm91c2VsIGFuZCBNYWduaWZpYyBQb3B1cC5cbiAqXG4gKiBAc2luY2UgMS4wLjBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmxvY2sgICBGcmFtZXdvcmsgYmxvY2sgSUQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIGZvciBibG9jay5cbiAqL1xuJC5mbi5mcm9udHN0cmVldCA9IGZ1bmN0aW9uKGJsb2NrLCBvcHRpb25zKSB7XG4gIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoIChibG9jaykge1xuICAgICAgY2FzZSAnYmFja2dyb3VuZCc6XG4gICAgICAgIHJldHVybiBuZXcgQmFja2dyb3VuZCh0aGlzLCBvcHRpb25zKTtcbiAgICAgIGNhc2UgJ21vYmlsZS1tZW51JzpcbiAgICAgICAgcmV0dXJuIG5ldyBNb2JpbGVNZW51KHRoaXMsIG9wdGlvbnMpO1xuICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgIHJldHVybiBuZXcgTWVudSh0aGlzLCBvcHRpb25zKTtcbiAgICAgIGNhc2UgJ3RhYnMnOlxuICAgICAgICByZXR1cm4gbmV3IFRhYnModGhpcywgb3B0aW9ucyk7XG4gICAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgICByZXR1cm4gbmV3IFRvZ2dsZSh0aGlzLCBvcHRpb25zKTtcbiAgICAgIGNhc2UgJ3Rvb2x0aXAnOlxuICAgICAgICByZXR1cm4gbmV3IFRvb2x0aXAodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHsgJGRvY3VtZW50LCAkd2luZG93IH0gPSBkb207XG5cbiRkb2N1bWVudC5yZWFkeShmdW5jdGlvbigkKSB7XG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgZGVmYXVsdCBgbWVudWAgYmxvY2suXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgJCgnLmZzLW1lbnUnKS5mcm9udHN0cmVldCgnbWVudScpO1xuXG4gIC8qKlxuICAgKiBBZGRzIG5vLWNsaWNrIGZ1bmN0aW9uYWx0aXkgdG8gYW55IGxpbmsgYnlcbiAgICogYWRkaW5nIGNsYXNzIFwibm8tY2xpY2tcIi5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IGludGVyZmFjZS5cbiAgICovXG4gICQoJ2Eubm8tY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBZGRzIG5vLWNsaWNrIGZ1bmN0aW9uYWx0aXkgdG8gYW55IGxpbmsgZGlyZWN0bHlcbiAgICogd2l0aGluIGFuIGxpIHdpdGggY2xhc3MgYG5vLWNsaWNrYC5cbiAgICpcbiAgICogTm90ZTogVGhpcyBpcyBtYWlubHkgaGVyZSB0byBhY2Ntb2RhdGUgaW50ZXJmYWNlc1xuICAgKiBsaWtlIFdvcmRQcmVzcyB3aGljaCBhbGxvdyBidWlsZGluZyBtZW51cywgYnV0IG9ubHlcbiAgICogYWxsb3cgYWRkaW5nIENTUyBjbGFzc2VzIHRvIHRoZSBtZW51IGxpc3QgaXRlbXMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBpbnRlcmZhY2UuXG4gICAqL1xuICAkKCdsaS5uby1jbGljaycpXG4gICAgLmZpbmQoJ2E6Zmlyc3QnKVxuICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAvKipcbiAgICogQmluZHMgdGhlIGRlZmF1bHQgYHRhYnNgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy10YWJzJykuZnJvbnRzdHJlZXQoJ3RhYnMnKTtcblxuICAvKipcbiAgICogQmluZHMgdGhlIGRlZmF1bHQgYHRvZ2dsZWAgYmxvY2suXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgJCgnLmZzLXRvZ2dsZScpLmZyb250c3RyZWV0KCd0b2dnbGUnKTtcblxuICAvKipcbiAgICogQmluZHMgdGhlIGRlZmF1bHQgYHRvb2x0aXBgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy10b29sdGlwLXRyaWdnZXInKS5mcm9udHN0cmVldCgndG9vbHRpcCcpO1xufSk7XG5cbiR3aW5kb3cub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgLyoqXG4gICAqIFNlbGYtaW52b2tlcyB0aGUgYmFja2dyb3VuZCBzbGlkZXIgb2YgdGhlXG4gICAqIGBiYWNrZ3JvdW5kYCBibG9jay5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICAkKCcuZnMtYmctc2xpZGVyJykuZnJvbnRzdHJlZXQoJ2JhY2tncm91bmQnLCB7IHR5cGU6ICdzbGlkZXInIH0pO1xuXG4gIC8qKlxuICAgKiBTZWxmLWludm9rZXMgdGhlIHBhcmFsbGF4IGVmZmVjdCBvZiB0aGVcbiAgICogYGJhY2tncm91bmRgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy1iZy1wYXJhbGxheCcpLmZyb250c3RyZWV0KCdiYWNrZ3JvdW5kJywgeyB0eXBlOiAncGFyYWxsYXgnIH0pO1xufSk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIFN0b3JlIGFuZCBjYWNoZSByZS11c2FibGUgRE9NIGVsZW1lbnRzLlxuICpcbiAqIEBzaW5jZSAxLjAuMFxuICpcbiAqIEB2YXIge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGRvbSA9IHtcbiAgJHdpbmRvdzogJCh3aW5kb3cpLFxuICAkZG9jdW1lbnQ6ICQoZG9jdW1lbnQpLFxuICAkYm9keTogJCgnYm9keScpXG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiB3ZWJzaXRlIGlzIGJlaW5nIGxvYWRlZCBmcm9tIGEgbW9iaWxlXG4gKiBkZXZpY2UuXG4gKlxuICogQHNpbmNlIDEuMC4wXG4gKlxuICogQHBhcmFtICB7Qm9vbGVhbn0gdmlld3BvcnRDaGVjayBXaGV0aGVyIHRvIGxldCB2aWV3cG9ydCBzaXplIGhlbHAgZGV0ZXJtaW5lLlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB3ZSdyZSBvbiBhIG1vYmlsZSBkZXZpY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSh2aWV3cG9ydENoZWNrKSB7XG4gIGNvbnN0IHsgJGJvZHkgfSA9IGRvbTtcblxuICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ21vYmlsZScpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgYWdlbnRDaGVjayA9IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICBuYXZpZ2F0b3IudXNlckFnZW50XG4gICk7XG5cbiAgaWYgKGFnZW50Q2hlY2spIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh2aWV3cG9ydENoZWNrKSB7XG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XG5cbiAgICBpZiAoJHdpbmRvdy53aWR0aCgpIDwgOTkyIHx8ICR3aW5kb3cuaGVpZ2h0KCkgPCA1MDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=