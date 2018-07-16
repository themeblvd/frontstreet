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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3MvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy9tZW51LmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL21vYmlsZS1tZW51LmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL21vZGFsLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy90YWJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy90b29sdGlwLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvZnJvbnRzdHJlZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiZWxlbWVudCIsIm9wdGlvbnMiLCIkZWxlbWVudCIsIiQiLCJzZXR0aW5ncyIsImV4dGVuZCIsImRlZmF1bHRzIiwiJHNlY3Rpb24iLCJjbG9zZXN0Iiwic2VjdGlvbiIsInNsaWRlciIsImJpbmQiLCJwYXJhbGxheCIsInBhcmFsbGF4Q2FsYyIsInR5cGUiLCIkc2xpZGVyIiwiYXV0b3BsYXkiLCJkYXRhIiwiZmluZCIsImVhY2giLCIkaW1nIiwiYWRkQ2xhc3MiLCJwcmVwZW5kIiwiZmFkZU91dCIsInNldEludGVydmFsIiwiJGxhc3RJbWciLCJyZW1vdmVDbGFzcyIsInNldFRpbWVvdXQiLCJwcmVwZW5kVG8iLCIkZmlndXJlIiwiJHdpbmRvdyIsImlzTW9iaWxlIiwiY3NzIiwib24iLCJpbWdIZWlnaHQiLCJoZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJwYXJhbGxheERpc3QiLCJib3R0b20iLCJvZmZzZXQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpbmRvd0JvdHRvbSIsInBlcmNlbnRTY3JvbGxlZCIsIk1hdGgiLCJyb3VuZCIsIk1lbnUiLCIkbWVudSIsImRlbGF5IiwidGltZXIiLCJmbHlvdXQiLCJzaG93IiwiaGlkZSIsImhhcyIsImRyb3BEb3duU2VsZWN0b3IiLCIkdHJpZ2dlciIsImNoaWxkcmVuIiwibm9vcCIsImhhc0NsYXNzIiwiJGJvZHkiLCIkZmx5b3V0IiwibG9jYXRpb24iLCJzcGFjZSIsImxlbmd0aCIsIndpZHRoIiwibGV2ZWwiLCJnZXRMZXZlbCIsIiRzaWJsaW5ncyIsInNpYmxpbmdzIiwiJHRhcmdldCIsImNsZWFyVGltZW91dCIsIk1vYmlsZU1lbnUiLCIkdHJpZ2dlcnMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcCIsImZuIiwibWFnbmlmaWNQb3B1cCIsIiRkb2N1bWVudCIsInJlYWR5IiwibWFpbkNsYXNzIiwicmVtb3ZhbERlbGF5IiwiY29uZmlnIiwiYW5pbWF0aW9uIiwibW9iaWxlIiwibW9iaWxlSWZyYW1lIiwibW9iaWxlR2FsbGVyeSIsImVycm9yIiwiY2xvc2UiLCJsb2FkaW5nIiwiY291bnRlciIsIm5leHQiLCJwcmV2aW91cyIsImNsb3NlTWFya3VwIiwiZnNNb2RhbCIsInRDbG9zZSIsInRMb2FkaW5nIiwiZ2FsbGVyeSIsInRQcmV2IiwidE5leHQiLCJ0Q291bnRlciIsImltYWdlIiwidEVycm9yIiwiYWpheCIsImFsaWduVG9wIiwic2hvd0Nsb3NlQnRuIiwiY2FsbGJhY2tzIiwib3BlbiIsImF0dHIiLCJiZWZvcmVDbG9zZSIsImNsb3NlQnRuSW5zaWRlIiwiaW5zdGFuY2UiLCJ3cmFwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmb2N1cyIsIiRnYWxsZXJ5IiwiY2xhc3NlcyIsInNlbGVjdG9yIiwiam9pbiIsIiRsaW5rIiwibGlua0NsYXNzIiwiZGlzYWJsZU9uIiwiZW5hYmxlZCIsImN1cnNvciIsImRlbGVnYXRlIiwiaWZyYW1lIiwibWFya3VwIiwibWFya3VwUGFyc2UiLCJ0ZW1wbGF0ZSIsInZhbHVlcyIsIml0ZW0iLCJ0aXRsZSIsImVsIiwib3dsQ2Fyb3VzZWwiLCIkd3JhcCIsIml0ZW1zIiwicGFyc2VJbnQiLCJzcGVlZCIsImF1dG9wbGF5VGltZW91dCIsIm1hcmdpbiIsInBhdXNlIiwibG9vcCIsImFuaW1hdGUiLCJhdXRvV2lkdGgiLCJjZW50ZXIiLCIkbmF2IiwiJGFycm93cyIsIm5hdkNvdW50ZXIiLCJ0aW1lb3V0IiwibmF2IiwiZG90cyIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJhbmltYXRlT3V0IiwicnRsIiwib25Jbml0aWFsaXplZCIsIm9uQ2hhbmdlZCIsImluZGV4IiwicGFnZSIsImNvdW50IiwiJGN1cnJlbnQiLCJ0cmlnZ2VyIiwiVGFicyIsIiR0YWJzIiwiZGVlcExpbmsiLCJtYXRjaEhlaWdodCIsIiRwYW5lIiwibmF2U2VsZWN0b3IiLCJ0YXJnZXQiLCJzcGxpdCIsInRhbGxlc3QiLCJjdXJyZW50SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJoYXNoIiwiZG9jdW1lbnQiLCJpbmRleE9mIiwicmVwbGFjZSIsIlRvZ2dsZSIsIiR0b2dnbGUiLCIkZ3JvdXAiLCJwYXJlbnRzIiwiYWNjb3JkaW9uIiwiYmx1ciIsInN0b3AiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwiVG9vbHRpcCIsImhvdmVyU3RhdGUiLCJpblN0YXRlIiwiJHZpZXdwb3J0Iiwidmlld3BvcnQiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImNsaWNrIiwiaG92ZXIiLCJwcm94eSIsImVudGVyIiwibGVhdmUiLCJnZXREZWxlZ2F0ZVNldHRpbmdzIiwiaXNJblN0YXRlVHJ1ZSIsImFwcGx5UGxhY2VtZW50Iiwic2V0Q29udGVudCIsImhhc0NvbnRlbnQiLCJnZXRQb3NpdGlvbiIsImdldENhbGN1bGF0ZWRPZmZzZXQiLCJnZXRUaXRsZSIsImdldFVJRCIsInRpcCIsImFycm93IiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJ0b2dnbGUiLCJkZXN0cm95IiwiX3NldHRpbmdzIiwia2V5IiwidmFsdWUiLCJvYmoiLCJzZWxmIiwiY29uc3RydWN0b3IiLCJjdXJyZW50VGFyZ2V0IiwiRXZlbnQiLCJpbkRvbSIsImNvbnRhaW5zIiwib3duZXJEb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImlzRGVmYXVsdFByZXZlbnRlZCIsInRoYXQiLCIkdGlwIiwidGlwSWQiLCJwbGFjZW1lbnQiLCJhdXRvVG9rZW4iLCJhdXRvUGxhY2UiLCJ0ZXN0IiwiZGV0YWNoIiwibGVmdCIsImRpc3BsYXkiLCJjb250YWluZXIiLCJhcHBlbmRUbyIsImluc2VydEFmdGVyIiwicG9zIiwiYWN0dWFsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImFjdHVhbEhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9yZ1BsYWNlbWVudCIsInZpZXdwb3J0RGltIiwiY2FsY3VsYXRlZE9mZnNldCIsImNvbXBsZXRlIiwicHJldkhvdmVyU3RhdGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwcm9wcyIsImNhbGxiYWNrIiwicmVtb3ZlQXR0ciIsImlzQm9keSIsInRhZ05hbWUiLCJlbFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyaWdodCIsImlzU3ZnIiwiU1ZHRWxlbWVudCIsImVsT2Zmc2V0Iiwic2Nyb2xsIiwiYm9keSIsIm91dGVyRGltcyIsIiRlbCIsInByZWZpeCIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiRXJyb3IiLCIkYXJyb3ciLCJvZmYiLCJyZW1vdmVEYXRhIiwicGFkZGluZyIsImZyb250c3RyZWV0IiwiYmxvY2siLCJkb20iLCJ2aWV3cG9ydENoZWNrIiwiYWdlbnRDaGVjayIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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USxNQUFNLFFBQVIsRUFBN0M7O0FBRUE7Ozs7OztBQU1BWCxFQUFBLDZDQUFBQSxDQUFFLGlCQUFGLEVBQXFCc1IsV0FBckIsQ0FBaUMsWUFBakMsRUFBK0MsRUFBRTNRLE1BQU0sVUFBUixFQUEvQztBQUNELENBaEJELEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBOztBQUVBOzs7Ozs7O0FBT08sSUFBTTZRLE1BQU07QUFDakI3UCxXQUFTLDZDQUFBM0IsQ0FBRXdDLE1BQUYsQ0FEUTtBQUVqQnNDLGFBQVcsNkNBQUE5RSxDQUFFK0ssUUFBRixDQUZNO0FBR2pCcEgsU0FBTyw2Q0FBQTNELENBQUUsTUFBRjtBQUhVLENBQVo7O0FBTVA7Ozs7Ozs7OztBQVNPLFNBQVM0QixRQUFULENBQWtCNlAsYUFBbEIsRUFBaUM7QUFBQSxNQUM5QjlOLEtBRDhCLEdBQ3BCNk4sR0FEb0IsQ0FDOUI3TixLQUQ4Qjs7O0FBR3RDLE1BQUlBLE1BQU1ELFFBQU4sQ0FBZSxRQUFmLENBQUosRUFBOEI7QUFDNUIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSWdPLGFBQWEsaUVBQWlFaEQsSUFBakUsQ0FDZmlELFVBQVVDLFNBREssQ0FBakI7O0FBSUEsTUFBSUYsVUFBSixFQUFnQjtBQUNkLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQUlELGFBQUosRUFBbUI7QUFDakIsUUFBSTlQLFVBQVUsNkNBQUEzQixDQUFFd0MsTUFBRixDQUFkOztBQUVBLFFBQUliLFFBQVFxQyxLQUFSLEtBQWtCLEdBQWxCLElBQXlCckMsUUFBUUssTUFBUixLQUFtQixHQUFoRCxFQUFxRDtBQUNuRCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDaERELHdCIiwiZmlsZSI6Ii4vanMvZnJvbnRzdHJlZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9zcmMvanMvZnJvbnRzdHJlZXQuanNcIik7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgaXNNb2JpbGUsIGRvbSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBUaGlzIGZpbGUgaW5jbHVkZXMgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHNlY3Rpb25cbiAqIHBhcmFsbGF4IGJhY2tncm91bmQgaW1hZ2UgZWZmZWN0cyBhbmQgYmFja2dyb3VuZFxuICogc2xpZGVycy5cbiAqXG4gKiBCeSBkZWZhdWx0IGFsbCBIVE1MIGVsZW1lbnRzIHdpdGggY2xhc3MgYGZzLWJnLXNsaWRlcmBcbiAqIGFuZCBgZnMtYmctcGFyYWxsYXhgIGFyZSBhdXRvbWF0aWNhbGx5IGJpbmRlZFxuICogd2l0aCB0aGVpciByZXNwZWN0aXZlIGVmZmVjdHMuXG4gKlxuICogQHN1bW1hcnkgIEJhY2tncm91bmQgRWZmZWN0c1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIGJhY2tncm91bmQuanNcbiAqL1xuY2xhc3MgQmFja2dyb3VuZCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgYmFja2dyb3VuZGAgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGNvbnN0ICRzZWN0aW9uID0gJGVsZW1lbnQuY2xvc2VzdChzZXR0aW5ncy5zZWN0aW9uKTtcblxuICAgIHRoaXMuc2xpZGVyID0gdGhpcy5zbGlkZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhcmFsbGF4ID0gdGhpcy5wYXJhbGxheC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFyYWxsYXhDYWxjID0gdGhpcy5wYXJhbGxheENhbGMuYmluZCh0aGlzKTtcblxuICAgIHN3aXRjaCAoc2V0dGluZ3MudHlwZSkge1xuICAgICAgY2FzZSAnc2xpZGVyJzpcbiAgICAgICAgdGhpcy5zbGlkZXIoJGVsZW1lbnQsICRzZWN0aW9uLCBzZXR0aW5ncyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFyYWxsYXgnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5wYXJhbGxheCgkZWxlbWVudCwgJHNlY3Rpb24sIHNldHRpbmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCBiYWNrZ3JvdW5kIG9wdGlvbnMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdwYXJhbGxheCcsXG4gICAgICBhdXRvcGxheTogNDAwMCxcbiAgICAgIHNlY3Rpb246ICcuZnMtc2VjdGlvbiwgLmhhcy1iZy1zbGlkZXIsIC5oYXMtYmctcGFyYWxsYXgsIC5oYXMtYmctdmlkZW8nXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBhIGJhY2tncm91bmQgc2xpZGVyLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbGVtZW50IFRoZSBiYWNrZ3JvdW5kIHNsaWRlciBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHNlY3Rpb24gU2VjdGlvbiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5ncyBDdXJyZW50IHNldHRpbmdzLlxuICAgKi9cbiAgc2xpZGVyKCRzbGlkZXIsICRzZWN0aW9uLCBzZXR0aW5ncykge1xuICAgIHZhciB7IGF1dG9wbGF5IH0gPSBzZXR0aW5ncztcblxuICAgIGlmICgkc2xpZGVyLmRhdGEoJ2F1dG9wbGF5JykgJiYgJHNsaWRlci5kYXRhKCdhdXRvcGxheScpID49IDEwMDApIHtcbiAgICAgIGF1dG9wbGF5ID0gJHNsaWRlci5kYXRhKCdhdXRvcGxheScpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmV2ZXJzZSBvcmRlciBvZiBpbWFnZXMgc28gdGhlIHRvcCBvZiBzdGFja1xuICAgICAqIHdpbGwgYmUgdGhlIGZpcnN0IGltYWdlLlxuICAgICAqL1xuICAgICRzbGlkZXIuZmluZCgnaW1nJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICRpbWcgPSAkKHRoaXMpO1xuICAgICAgJGltZy5hZGRDbGFzcygnZmFkZSBpbicpO1xuICAgICAgJHNsaWRlci5wcmVwZW5kKCRpbWcpO1xuICAgIH0pO1xuXG4gICAgJHNsaWRlci5hZGRDbGFzcygnaW4nKTtcblxuICAgICRzZWN0aW9uLmZpbmQoJy5mcy1sb2FkZXInKS5mYWRlT3V0KCk7XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICRsYXN0SW1nID0gJHNsaWRlci5maW5kKCdpbWc6bGFzdC1jaGlsZCcpO1xuXG4gICAgICAkbGFzdEltZy5yZW1vdmVDbGFzcygnaW4nKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJGxhc3RJbWcucHJlcGVuZFRvKCRzbGlkZXIpLmFkZENsYXNzKCdpbicpO1xuICAgICAgfSwgYXV0b3BsYXkpO1xuICAgIH0sIGF1dG9wbGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBhIGJhY2tncm91bmQgaW1hZ2UgcGFyYWxsYXggZWZmZWN0LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbGVtZW50IFRoZSBiYWNrZ3JvdW5kIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkc2VjdGlvbiBTZWN0aW9uIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmdzIEN1cnJlbnQgc2V0dGluZ3MuXG4gICAqL1xuICBwYXJhbGxheCgkZmlndXJlLCAkc2VjdGlvbiwgc2V0dGluZ3MpIHtcbiAgICBjb25zdCB7ICR3aW5kb3cgfSA9IGRvbTtcbiAgICBjb25zdCB7IHBhcmFsbGF4Q2FsYyB9ID0gdGhpcztcbiAgICBjb25zdCAkaW1nID0gJGZpZ3VyZS5maW5kKCdpbWcsIC5pbWcnKTtcbiAgICB2YXIgcGFyYWxsYXggPSBudWxsO1xuXG4gICAgLypcbiAgICAgKiBXaWxsIG9ubHkgY2FsY3VsYXRlIGlmIGFsbCBhcmUgdHJ1ZTpcbiAgICAgKlxuICAgICAqIDEuIE5vdCBhIHRydWUgbW9iaWxlIGRldmljZSAobG9va2luZyBhdCB1c2VyIGFnZW50KS5cbiAgICAgKiAyLiBXaW5kb3cgaXMgdGFsbGVyIHRoYW4gNTAwcHguXG4gICAgICogMy4gV2luZG93IGlzIHdpZGVyIHRoYW4gOTkycHguXG4gICAgICovXG4gICAgaWYgKCFpc01vYmlsZSh0cnVlKSkge1xuICAgICAgLy8gUGFzc2luZyBgdHJ1ZWAgZGVub3RlcyBjaGVja2luZyB2aWV3cG9ydCBzaXplLlxuICAgICAgcGFyYWxsYXggPSBwYXJhbGxheENhbGMoJGZpZ3VyZSwgJGltZyk7XG5cbiAgICAgIGlmIChwYXJhbGxheCkge1xuICAgICAgICAkaW1nLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNEKC01MCUsJyArIHBhcmFsbGF4ICsgJ3B4LCAwKScpO1xuICAgICAgfVxuICAgIH1cblxuICAgICRmaWd1cmUuYWRkQ2xhc3MoJ2luJyk7XG5cbiAgICAkc2VjdGlvbi5maW5kKCcuZnMtbG9hZGVyJykuZmFkZU91dCgpO1xuXG4gICAgLy8gQWRqdXN0IHBhcmFsbGF4IHBvc2l0aW9uaW5nIGlmIHdpbmRvdyBpcyByZXNpemVkLlxuICAgICR3aW5kb3cub24oJ3Njcm9sbCByZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgIC8qXG4gICAgICAgKiBXaWxsIG9ubHkgY2FsY3VsYXRlIGlmIGFsbCBhcmUgdHJ1ZTpcbiAgICAgICAqXG4gICAgICAgKiAxLiBOb3QgYSB0cnVlIG1vYmlsZSBkZXZpY2UgKGxvb2tpbmcgYXQgdXNlciBhZ2VudCkuXG4gICAgICAgKiAyLiBXaW5kb3cgaXMgdGFsbGVyIHRoYW4gNTAwcHguXG4gICAgICAgKiAzLiBXaW5kb3cgaXMgd2lkZXIgdGhhbiA5OTJweC5cbiAgICAgICAqXG4gICAgICAgKiBAc2VlIGlzTW9iaWxlKCkgZnVuY3Rpb24gaW4gaW5pdC5qc1xuICAgICAgICovXG4gICAgICBpZiAoIWlzTW9iaWxlKHRydWUpKSB7XG4gICAgICAgIC8vIFBhc3NpbmcgYHRydWVgIGRlbm90ZXMgY2hlY2tpbmcgdmlld3BvcnQgc2l6ZS5cbiAgICAgICAgcGFyYWxsYXggPSBwYXJhbGxheENhbGMoJGZpZ3VyZSwgJGltZyk7XG5cbiAgICAgICAgaWYgKHBhcmFsbGF4KSB7XG4gICAgICAgICAgJGltZy5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzRCgtNTAlLCcgKyBwYXJhbGxheCArICdweCwgMCknKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBwYXJhbGxheCBwb3NpdGlvbiBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRmaWd1cmUgVGhlIGJhY2tncm91bmQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9ICRpbWcgICAgSW1hZ2UgdG8gcG9zaXRpb24gd2l0aGluIGVsZW1lbnQuXG4gICAqL1xuICBwYXJhbGxheENhbGMoJGZpZ3VyZSwgJGltZykge1xuICAgIGNvbnN0IHsgJHdpbmRvdyB9ID0gZG9tO1xuXG4gICAgdmFyIGltZ0hlaWdodCA9ICRpbWcuaGVpZ2h0KCksXG4gICAgICBjb250YWluZXJIZWlnaHQgPSAkZmlndXJlLmhlaWdodCgpID4gMCA/ICRmaWd1cmUuaGVpZ2h0KCkgOiA1MDAsXG4gICAgICBwYXJhbGxheERpc3QgPSBpbWdIZWlnaHQgLSBjb250YWluZXJIZWlnaHQsXG4gICAgICBib3R0b20gPSAkZmlndXJlLm9mZnNldCgpLnRvcCArIGNvbnRhaW5lckhlaWdodCxcbiAgICAgIHRvcCA9ICRmaWd1cmUub2Zmc2V0KCkudG9wLFxuICAgICAgc2Nyb2xsVG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKSxcbiAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCwgLy8gVXNpbmcgYHdpbmRvd2AsIE5PVCBgJHdpbmRvd2A7IHdlIG5lZWQgYSBmcmVzaCBjYWxjdWxhdGlvbiBoZXJlLlxuICAgICAgd2luZG93Qm90dG9tID0gc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0LFxuICAgICAgcGVyY2VudFNjcm9sbGVkID0gKHdpbmRvd0JvdHRvbSAtIHRvcCkgLyAoY29udGFpbmVySGVpZ2h0ICsgd2luZG93SGVpZ2h0KTtcblxuICAgIGlmIChib3R0b20gPiBzY3JvbGxUb3AgJiYgdG9wIDwgc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0KSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwYXJhbGxheERpc3QgKiBwZXJjZW50U2Nyb2xsZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tLCBpc01vYmlsZSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBUaGlzIGZpbGUgaW5jbHVkZXMgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIGRyb3Bkb3duXG4gKiBtZW51cy5cbiAqXG4gKiBCeSBkZWZhdWx0IGFsbCBIVE1MIGVsZW1lbnRzIHdpdGggY2xhc3MgYGZzLW1lbnVgXG4gKiBhcmUgYXV0b21hdGljYWxseSBiaW5kZWQuXG4gKlxuICogQWxzbywgbWVudSBpdGVtcyB3aXRoIGNsYXNzICduby1jbGljaycgYXJlIHNldHVwIHRvXG4gKiBwcmV2ZW50IHRoZSBkZWZhdWx0IGNsaWNrIGJlaGF2aW9yLlxuICpcbiAqIEBzdW1tYXJ5ICBEcm9wZG93biBNZW51c1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIG1lbnUuanNcbiAqL1xuY2xhc3MgTWVudSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgbWVudWAgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJG1lbnUgPSAkKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCRtZW51LmRhdGEoJ2RlbGF5JykgfHwgMCA9PT0gJG1lbnUuZGF0YSgnZGVsYXknKSkge1xuICAgICAgdGhpcy5zZXR0aW5ncy5kZWxheSA9ICRtZW51LmRhdGEoJ2RlbGF5Jyk7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lciA9IHt9OyAvLyBLZWVwIHRyYWNrIG9mIGRlbGF5ZWQgdHJhbnNpdGlvbnMuXG4gICAgdGhpcy5mbHlvdXQgPSB0aGlzLmZseW91dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2hvdyA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpO1xuXG4gICAgY29uc3QgeyBmbHlvdXQsIHNob3csIGhpZGUgfSA9IHRoaXM7XG5cbiAgICAkbWVudS5yZW1vdmVDbGFzcygnbm8tanMnKTtcblxuICAgIC8qXG4gICAgICogVHJpZ2dlcnMgZHJvcGRvd24gc2hvdyBhbmQgaGlkZSwgdXBvbiBtb3VzZWVudGVyXG4gICAgICogYW5kIG1vdXNlbGVhdmUuXG4gICAgICovXG4gICAgJG1lbnVcbiAgICAgIC5maW5kKCdsaScpXG4gICAgICAuaGFzKHRoaXMuc2V0dGluZ3MuZHJvcERvd25TZWxlY3RvcilcbiAgICAgIC5hZGRDbGFzcygnbWVudS1pdGVtLWhhcy1jaGlsZHJlbicpXG4gICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHRyaWdnZXIgPSAkKHRoaXMpO1xuICAgICAgICBmbHlvdXQoJHRyaWdnZXIpOyAvLyBEZXRlcm1pbmUgYW5kIGFkZHMgY2xhc3MgZm9yIGZseW91dCBkaXJlY3Rpb24uXG4gICAgICAgIHNob3coJHRyaWdnZXIpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBoaWRlKCQodGhpcykpO1xuICAgICAgfSk7XG5cbiAgICAvLyBBZGRzIENTUyBjbGFzc2VzIHRvIGVhY2ggbGV2ZWwgb2YgdGhlIG1lbnUsIDEtMy5cbiAgICAkbWVudS5jaGlsZHJlbignbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKVxuICAgICAgICAuYWRkQ2xhc3MoJ2xldmVsLTEnKVxuICAgICAgICAuY2hpbGRyZW4oJ3VsJylcbiAgICAgICAgLmNoaWxkcmVuKCdsaScpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnbGV2ZWwtMicpXG4gICAgICAgICAgICAuY2hpbGRyZW4oJ3VsJylcbiAgICAgICAgICAgIC5jaGlsZHJlbignbGknKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xldmVsLTMnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBtb2JpbGUgdG91Y2ggc3VwcG9ydC5cbiAgICBpZiAoaXNNb2JpbGUoKSkge1xuICAgICAgLy8gVGFwIGFueXdoZXJlIG9uIGlPUyB0byB1bmZvY3VzIGEgc3VibWVudS5cbiAgICAgICQoJ2h0bWwnKVxuICAgICAgICAuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgICAgIC5vbignY2xpY2snLCAkLm5vb3ApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG1lbnUgb3B0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVsYXk6IDUwMCxcbiAgICAgIGRyb3BEb3duU2VsZWN0b3I6ICd1bDpub3QoLm1lZ2Etc3ViLW1lbnUpLCAuZnMtbWVnYSdcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIGRpcmVjdGlvbiB0aGUgZHJvcGRvd24gbWVudSBzaG91bGRcbiAgICogZmx5b3V0IHRvd2FyZHMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRyaWdnZXIgVGhlIHBhcmVudCBtZW51IGl0ZW0sIGZvciB3aGljaCB0aGUgZHJvcGRvd24gYmVsb25ncyB0by5cbiAgICovXG4gIGZseW91dCgkdHJpZ2dlcikge1xuICAgIGlmICghJHRyaWdnZXIuaGFzQ2xhc3MoJ2xldmVsLTEnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZHJvcERvd25TZWxlY3RvciB9ID0gdGhpcy5zZXR0aW5ncztcbiAgICBjb25zdCB7ICRib2R5IH0gPSBkb207XG4gICAgY29uc3QgJGZseW91dCA9ICR0cmlnZ2VyLmNoaWxkcmVuKGRyb3BEb3duU2VsZWN0b3IpO1xuICAgIHZhciBsb2NhdGlvbiA9ICR0cmlnZ2VyLm9mZnNldCgpO1xuICAgIHZhciBzcGFjZSA9IDIwMDtcblxuICAgIGlmICgkYm9keS5oYXNDbGFzcygncnRsJykpIHtcbiAgICAgIGxvY2F0aW9uID0gbG9jYXRpb25bJ3JpZ2h0J107XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gbG9jYXRpb25bJ2xlZnQnXTtcbiAgICB9XG5cbiAgICBpZiAoJGZseW91dC5maW5kKCcubGV2ZWwtMycpLmxlbmd0aCA+IDApIHtcbiAgICAgIHNwYWNlICs9IHNwYWNlOyAvLyBTcGFjZSBkb3VibGVzIGZvciBsZXZlbCAzLlxuICAgIH1cblxuICAgIC8vIENhbid0IHVzZWQgY2FjaGVkIHdpbmRvdyBoZXJlLlxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAtIGxvY2F0aW9uIDw9IHNwYWNlKSB7XG4gICAgICAkZmx5b3V0LmFkZENsYXNzKCdyZXZlcnNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRmbHlvdXQucmVtb3ZlQ2xhc3MoJ3JldmVyc2UnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgYSBkcm9wZG93biBtZW51LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0cmlnZ2VyIFRoZSBwYXJlbnQgbWVudSBpdGVtLCBmb3Igd2hpY2ggdGhlIGRyb3Bkb3duIGJlbG9uZ3MgdG8uXG4gICAqL1xuICBzaG93KCR0cmlnZ2VyKSB7XG4gICAgY29uc3QgeyBkcm9wRG93blNlbGVjdG9yIH0gPSB0aGlzLnNldHRpbmdzO1xuICAgIGNvbnN0IGxldmVsID0gdGhpcy5nZXRMZXZlbCgkdHJpZ2dlcik7XG4gICAgY29uc3QgJHNpYmxpbmdzID0gJHRyaWdnZXIuc2libGluZ3MoKS5maW5kKGRyb3BEb3duU2VsZWN0b3IpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkdHJpZ2dlci5jaGlsZHJlbihkcm9wRG93blNlbGVjdG9yKTtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyW2xldmVsXSk7XG5cbiAgICAkc2libGluZ3MucmVtb3ZlQ2xhc3MoJ2luJyk7XG5cbiAgICAkdGFyZ2V0LmFkZENsYXNzKCdzaG93IGZhZGUnKTtcblxuICAgIHRoaXMudGltZXJbbGV2ZWxdID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRzaWJsaW5ncy5yZW1vdmVDbGFzcygnc2hvdyBmYWRlJyk7XG4gICAgICAkdGFyZ2V0LmFkZENsYXNzKCdpbicpO1xuICAgIH0sIDIwMCk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgYSBkcm9wZG93biBtZW51LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0cmlnZ2VyIFRoZSBwYXJlbnQgbWVudSBpdGVtLCBmb3Igd2hpY2ggdGhlIGRyb3Bkb3duIGJlbG9uZ3MgdG8uXG4gICAqL1xuICBoaWRlKCR0cmlnZ2VyLCBzZXR0aW5ncykge1xuICAgIGNvbnN0IHsgZHJvcERvd25TZWxlY3RvciwgZGVsYXkgfSA9IHRoaXMuc2V0dGluZ3M7XG4gICAgY29uc3QgbGV2ZWwgPSB0aGlzLmdldExldmVsKCR0cmlnZ2VyKTtcbiAgICBjb25zdCAkZmx5b3V0ID0gJHRyaWdnZXIuY2hpbGRyZW4oZHJvcERvd25TZWxlY3Rvcik7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcltsZXZlbF0pO1xuXG4gICAgdGhpcy50aW1lcltsZXZlbF0gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJGZseW91dC5yZW1vdmVDbGFzcygnaW4nKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJGZseW91dC5yZW1vdmVDbGFzcygnc2hvdyBmYWRlJyk7XG4gICAgICB9LCAyMDApO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBjdXJyZW50IGxldmVsIG9mIHRoZSBkcm9wZG93biBwYXJlbnRcbiAgICogaXRlbSBiZWluZyB0cmlnZ2VyZWQuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICR0cmlnZ2VyIFRoZSBwYXJlbnQgbWVudSBpdGVtLCBmb3Igd2hpY2ggdGhlIGRyb3Bkb3duIGJlbG9uZ3MgdG8uXG4gICAqIEByZXR1cm4ge3N0cmluZ30gQ3VycmVudCBtZW51IGxldmVsLCBgbGV2ZWwtMWAsIGBsZXZlbC0yYCBvciBgbGV2ZWwtM2AuXG4gICAqL1xuICBnZXRMZXZlbCgkdHJpZ2dlcikge1xuICAgIGlmICgkdHJpZ2dlci5oYXNDbGFzcygnbGV2ZWwtMycpKSB7XG4gICAgICByZXR1cm4gJ2xldmVsLTMnO1xuICAgIH0gZWxzZSBpZiAoJHRyaWdnZXIuaGFzQ2xhc3MoJ2xldmVsLTInKSkge1xuICAgICAgcmV0dXJuICdsZXZlbC0yJztcbiAgICB9XG4gICAgcmV0dXJuICdsZXZlbC0xJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiLyoqXG4gKiBBZGRzIHN1Ym1lbnUgbmF2aWdhdGlvbiB0byBtb2JpbGUgbWVudXMuXG4gKlxuICogQHN1bW1hcnkgIE1vYmlsZSBNZW51c1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIG1vYmlsZS1tZW51LmpzXG4gKi9cbmNsYXNzIE1vYmlsZU1lbnUge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYG1vYmlsZS1tZW51YCBibG9jayBvbiBhIERPTSBlbGVtZW50LFxuICAgKiB3aGVuIGJpbmRlZCB0aHJvdWdoIGpRdWVyeS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQmxvY2sgb3B0aW9ucyAoY3VycmVudGx5IG5vdCB1c2VkKS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCAkbWVudSA9ICQoZWxlbWVudCk7XG4gICAgY29uc3QgJHRyaWdnZXJzID0gJG1lbnUuZmluZCgnbGknKS5oYXMoJ3VsJyk7XG4gICAgY29uc3QgeyBzaG93LCBoaWRlIH0gPSB0aGlzO1xuXG4gICAgJHRyaWdnZXJzXG4gICAgICAuYWRkQ2xhc3MoJ21lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKVxuICAgICAgLmNoaWxkcmVuKCcubWVudS1idG4nKVxuICAgICAgLm9uKCdjbGljay5mcy5tb2JpbGUtbWVudScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNob3coJCh0aGlzKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgJHRyaWdnZXJzXG4gICAgICAuZmluZCgndWwnKVxuICAgICAgLnByZXBlbmQoJzxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwibWVudS1idG4gYmFja1wiPjwvYT48L2xpPicpXG4gICAgICAuZmluZCgnLmJhY2snKVxuICAgICAgLm9uKCdjbGljay5mcy5tb2JpbGUtbWVudS1iYWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGlkZSgkKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAkbWVudS5oZWlnaHQoJG1lbnUucHJvcCgnc2Nyb2xsSGVpZ2h0JykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYSBzdWJtZW51LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0cmlnZ2VyIFBhcmVudCBtZW51IGl0ZW0gdHJpZ2dlcmluZyBzdWJtZW51LlxuICAgKi9cbiAgc2hvdygkdHJpZ2dlcikge1xuICAgICR0cmlnZ2VyXG4gICAgICAuY2xvc2VzdCgnbGknKVxuICAgICAgLmNoaWxkcmVuKCd1bCcpXG4gICAgICAuYWRkQ2xhc3MoJ29uJyk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZSBhIHN1Ym1lbnUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRyaWdnZXIgUGFyZW50IG1lbnUgaXRlbSB0cmlnZ2VyaW5nIHN1Ym1lbnUuXG4gICAqL1xuICBoaWRlKCR0cmlnZ2VyKSB7XG4gICAgJHRyaWdnZXIuY2xvc2VzdCgndWwnKS5yZW1vdmVDbGFzcygnb24nKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51O1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvbSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBUaGlzIGZpbGUgYmluZHMgcHJlc2V0IGluc3RhbmNlcyBvZiBNYWduaWZpYyBQb3B1cC5cbiAqXG4gKiBNYWduaWZpYyBQb3B1cCBpcyBhbiBvcGVuIHNvdXJjZSBsaWdodGJveCBzY3JpcHRcbiAqIGJ5IERtaXRyeSBTZW1lbm92LlxuICpcbiAqIEBsaW5rIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL1xuICpcbiAqIEBzdW1tYXJ5ICBNb2RhbHNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBtb2RhbC5qc1xuICogQHJlcXVpcmVzIG1hZ25pZmljLXBvcHVwLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigkKSB7XG4gIGlmICghJC5mbi5tYWduaWZpY1BvcHVwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyAkZG9jdW1lbnQgfSA9IGRvbTtcblxuICAkZG9jdW1lbnQucmVhZHkoZnVuY3Rpb24oJCkge1xuICAgIHZhciBtYWluQ2xhc3MgPSAnZnMtbW9kYWwnO1xuICAgIHZhciByZW1vdmFsRGVsYXkgPSAwO1xuXG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIGFuaW1hdGlvbjogJ2ZhZGUnLFxuICAgICAgbW9iaWxlOiAwLFxuICAgICAgbW9iaWxlSWZyYW1lOiA3NjgsXG4gICAgICBtb2JpbGVHYWxsZXJ5OiAwLFxuICAgICAgZXJyb3I6ICdUaGUgbW9kYWwgbWVkaWEgY291bGQgbm90IGJlIGxvYWRlZC4nLFxuICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICBsb2FkaW5nOiAnTG9hZGluZy4uLicsXG4gICAgICBjb3VudGVyOiAnJWN1cnIlIG9mICV0b3RhbCUnLFxuICAgICAgbmV4dDogJ05leHQnLFxuICAgICAgcHJldmlvdXM6ICdQcmV2aW91cycsXG4gICAgICBjbG9zZU1hcmt1cDpcbiAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWNsb3NlIGZzLWNsb3NlIGNsb3NlLWxpZ2h0IGNsb3NlLW1kXCI+JXRpdGxlJTwvYnV0dG9uPidcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZnNNb2RhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZyA9ICQuZXh0ZW5kKHt9LCBjb25maWcsIHdpbmRvdy5mc01vZGFsKTsgLy8gQW4gb3B0aW9uYWwgY29uZmlndXJhdGlvbiBvYmplY3QgeW91IGNvdWxkIGRlY2xhcmUuXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5hbmltYXRpb24gJiYgY29uZmlnLmFuaW1hdGlvbiAhPT0gJ25vbmUnKSB7XG4gICAgICBtYWluQ2xhc3MgPSBgJHttYWluQ2xhc3N9IGZzLW1vZGFsLSR7Y29uZmlnWydhbmltYXRpb24nXX1gO1xuICAgICAgcmVtb3ZhbERlbGF5ID0gMTUwO1xuICAgIH1cblxuICAgICQuZXh0ZW5kKHRydWUsICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cywge1xuICAgICAgdENsb3NlOiBjb25maWcuY2xvc2UsXG4gICAgICB0TG9hZGluZzogYDxkaXYgY2xhc3M9XCJmcy1sb2FkZXJcIj48c3Bhbj4ke2NvbmZpZy5sb2FkaW5nfTwvc3Bhbj48L2Rpdj5gLFxuICAgICAgZ2FsbGVyeToge1xuICAgICAgICB0UHJldjogY29uZmlnLnByZXZpb3VzLFxuICAgICAgICB0TmV4dDogY29uZmlnLm5leHQsXG4gICAgICAgIHRDb3VudGVyOiBjb25maWcuY291bnRlclxuICAgICAgfSxcbiAgICAgIGltYWdlOiB7XG4gICAgICAgIHRFcnJvcjogY29uZmlnLmVycm9yXG4gICAgICB9LFxuICAgICAgYWpheDoge1xuICAgICAgICB0RXJyb3I6IGNvbmZpZy5lcnJvclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmZzLW1vZGFsLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgICQoJy5mcy1jb250ZW50LW1vZGFsLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgbWFpbkNsYXNzOiBtYWluQ2xhc3MsXG4gICAgICBhbGlnblRvcDogdHJ1ZSxcbiAgICAgIHNob3dDbG9zZUJ0bjogZmFsc2UsXG4gICAgICByZW1vdmFsRGVsYXk6IHJlbW92YWxEZWxheSxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcubWZwLXdyYXAgLmZzLW1vZGFsJykuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcubWZwLXdyYXAgLmZzLW1vZGFsJykuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmZzLXNlYXJjaC1tb2RhbC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIG1haW5DbGFzczogbWFpbkNsYXNzICsgJyBtZnAtc2VhcmNoJyxcbiAgICAgIGNsb3NlQnRuSW5zaWRlOiBmYWxzZSxcbiAgICAgIGNsb3NlTWFya3VwOiBjb25maWcuY2xvc2VNYXJrdXAsXG4gICAgICByZW1vdmFsRGVsYXk6IHJlbW92YWxEZWxheSxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcubWZwLXdyYXAgLmZzLXNlYXJjaC1tb2RhbCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZS53cmFwWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJCgnLm1mcC1zZWFyY2ggLmZzLXNlYXJjaC1tb2RhbCBpbnB1dFt0eXBlPVwic2VhcmNoXCJdJykuZm9jdXMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJy5tZnAtd3JhcCAuZnMtc2VhcmNoLW1vZGFsJykuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmZzLW1vZGFsLWdhbGxlcnksIC50aGVtZWJsdmQtZ2FsbGVyeScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkZ2FsbGVyeSA9ICQodGhpcyk7XG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAndGhlbWVibHZkLWxpZ2h0Ym94JyxcbiAgICAgICAgJ2ZzLWNvbnRlbnQtbW9kYWwtbGluaycsXG4gICAgICAgICdmcy1pbWFnZS1tb2RhbC1saW5rJyxcbiAgICAgICAgJ2ZzLWlmcmFtZS1tb2RhbC1saW5rJ1xuICAgICAgXTtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gJy4nICsgY2xhc3Nlcy5qb2luKCcsIC4nKTtcblxuICAgICAgJGdhbGxlcnkuZmluZChzZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgbGlua0NsYXNzID0gJyc7XG5cbiAgICAgICAgaWYgKCRsaW5rLmhhc0NsYXNzKCdmcy1jb250ZW50LW1vZGFsLWxpbmsnKSkge1xuICAgICAgICAgIGxpbmtDbGFzcyA9ICdtZnAtaW5saW5lJztcbiAgICAgICAgfSBlbHNlIGlmICgkbGluay5oYXNDbGFzcygnZnMtaW1hZ2UtbW9kYWwtbGluaycpKSB7XG4gICAgICAgICAgbGlua0NsYXNzID0gJ21mcC1pbWFnZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoJGxpbmsuaGFzQ2xhc3MoJ2ZzLWlmcmFtZS1tb2RhbC1saW5rJykpIHtcbiAgICAgICAgICBsaW5rQ2xhc3MgPSAnbWZwLWlmcmFtZSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaW5rQ2xhc3MgPSBgZnMtZ2FsbGVyeS1tb2RhbC1saW5rICR7bGlua0NsYXNzfWA7XG5cbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoY2xhc3Nlcy5qb2luKCcgJykpLmFkZENsYXNzKGxpbmtDbGFzcyk7XG4gICAgICB9KTtcblxuICAgICAgJGdhbGxlcnkubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIG1haW5DbGFzczogbWFpbkNsYXNzLFxuICAgICAgICBjbG9zZU1hcmt1cDogY29uZmlnLmNsb3NlTWFya3VwLFxuICAgICAgICByZW1vdmFsRGVsYXk6IHJlbW92YWxEZWxheSxcbiAgICAgICAgZGlzYWJsZU9uOiBjb25maWcubW9iaWxlR2FsbGVyeSxcbiAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICBjdXJzb3I6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZWdhdGU6ICdhLmZzLWdhbGxlcnktbW9kYWwtbGluaycsXG4gICAgICAgIGlmcmFtZToge1xuICAgICAgICAgIC8vIEFkZCBib3R0b20gYmFyIGZvciBpZnJhbWVzXG4gICAgICAgICAgbWFya3VwOiBgPGRpdiBjbGFzcz1cIm1mcC1pZnJhbWUtc2NhbGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGlmcmFtZSBjbGFzcz1cIm1mcC1pZnJhbWVcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZnAtYm90dG9tLWJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZnAtdGl0bGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWZwLWNvdW50ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIG1hcmt1cFBhcnNlOiBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtKSB7XG4gICAgICAgICAgICB2YWx1ZXMudGl0bGUgPSBpdGVtLmVsLmF0dHIoJ3RpdGxlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJy5mcy1pbWFnZS1tb2RhbC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgbWFpbkNsYXNzOiBtYWluQ2xhc3MsXG4gICAgICBjbG9zZU1hcmt1cDogY29uZmlnLmNsb3NlTWFya3VwLFxuICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICBkaXNhYmxlT246IGNvbmZpZy5tb2JpbGUsXG4gICAgICBpbWFnZToge1xuICAgICAgICBjdXJzb3I6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5mcy1pZnJhbWUtbW9kYWwtbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2lmcmFtZScsXG4gICAgICBtYWluQ2xhc3M6IG1haW5DbGFzcyxcbiAgICAgIGNsb3NlTWFya3VwOiBjb25maWcuY2xvc2VNYXJrdXAsXG4gICAgICByZW1vdmFsRGVsYXk6IHJlbW92YWxEZWxheSxcbiAgICAgIGRpc2FibGVPbjogY29uZmlnLm1vYmlsZUlmcmFtZSxcbiAgICAgIGlmcmFtZToge1xuICAgICAgICAvLyBBZGQgYm90dG9tIGJhciBmb3IgaWZyYW1lc1xuICAgICAgICBtYXJrdXA6XG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtaWZyYW1lLXNjYWxlclwiPicgK1xuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLWNsb3NlXCI+PC9kaXY+JyArXG4gICAgICAgICAgJzxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicgK1xuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLWJvdHRvbS1iYXJcIj4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC10aXRsZVwiPjwvZGl2PicgK1xuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLWNvdW50ZXJcIj48L2Rpdj4nICtcbiAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgJzwvZGl2PidcbiAgICAgIH0sXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgbWFya3VwUGFyc2U6IGZ1bmN0aW9uKHRlbXBsYXRlLCB2YWx1ZXMsIGl0ZW0pIHtcbiAgICAgICAgICB2YWx1ZXMudGl0bGUgPSBpdGVtLmVsLmF0dHIoJ3RpdGxlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KSgkKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBkb20gfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGJpbmRzIHByZXNldCBpbnN0YW5jZXMgb2YgT3dsQ2Fyb3VzZWwsXG4gKiBhbGxvd2luZyBmb3IgdGhvc2UgdG8gYmUgY29uZmlndXJlZCB0aHJvdWdoIHRoZVxuICogSFRNTCBtYXJrdXAuXG4gKlxuICogT3dsQ2Fyb3VzZWwgaXMgYW4gb3BlbiBzb3VyY2UgY2Fyb3VzZWwvc2xpZGVyXG4gKiBzY3JpcHQgYnkgRGF2aWQgRGV1dHNjaC5cbiAqXG4gKiBAbGluayBodHRwczovL293bGNhcm91c2VsMi5naXRodWIuaW8vT3dsQ2Fyb3VzZWwyL1xuICpcbiAqIEBzdW1tYXJ5ICBTbGlkZXJzXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgbW9kYWwuanNcbiAqIEByZXF1aXJlcyBvd2wtY2Fyb3VzZWwuanNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oJCkge1xuICBpZiAoISQuZm4ub3dsQ2Fyb3VzZWwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7ICR3aW5kb3csICRib2R5IH0gPSBkb207XG5cbiAgJHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5mcy1zaW1wbGUtc2xpZGVyLCAuZnMtZ2FsbGVyeS1zbGlkZXIsIC5mcy1ibG9jay1zbGlkZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICR3cmFwID0gJCh0aGlzKSxcbiAgICAgICAgJHNsaWRlciA9ICR3cmFwLmZpbmQoJy5mcy1zbGlkZXInKSxcbiAgICAgICAgaXRlbXMgPSBwYXJzZUludCgkd3JhcC5kYXRhKCdpdGVtcycpKSA/IHBhcnNlSW50KCR3cmFwLmRhdGEoJ2l0ZW1zJykpIDogNCxcbiAgICAgICAgc3BlZWQgPSBwYXJzZUludCgkd3JhcC5kYXRhKCdzcGVlZCcpKSA/IHBhcnNlSW50KCR3cmFwLmRhdGEoJ3NwZWVkJykpIDogNTAwLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQgPSBwYXJzZUludCgkd3JhcC5kYXRhKCdhdXRvcGxheScpKSA/IHBhcnNlSW50KCR3cmFwLmRhdGEoJ2F1dG9wbGF5JykpIDogMCxcbiAgICAgICAgbWFyZ2luID0gcGFyc2VJbnQoJHdyYXAuZGF0YSgnbWFyZ2luJykpID8gcGFyc2VJbnQoJHdyYXAuZGF0YSgnbWFyZ2luJykpIDogMSxcbiAgICAgICAgYXV0b3BsYXkgPSBhdXRvcGxheVRpbWVvdXQgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIHBhdXNlID0gJ3RydWUnID09ICR3cmFwLmRhdGEoJ3BhdXNlJykgfHwgJHdyYXAuZGF0YSgncGF1c2UnKSA9PSAnMScgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIGxvb3AgPSAnZmFsc2UnID09ICR3cmFwLmRhdGEoJ2xvb3AnKSB8fCAkd3JhcC5kYXRhKCdsb29wJykgPT0gJzAnID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICBhbmltYXRlID0gJ3RydWUnID09ICR3cmFwLmRhdGEoJ2ZhZGUnKSB8fCAkd3JhcC5kYXRhKCdmYWRlJykgPT0gJzEnID8gJ2ZhZGVPdXQnIDogZmFsc2UsXG4gICAgICAgIGF1dG9XaWR0aCA9ICR3cmFwLmhhc0NsYXNzKCdmcy1nYWxsZXJ5LXNsaWRlcicpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBjZW50ZXIgPSAkd3JhcC5oYXNDbGFzcygnZnMtZ2FsbGVyeS1zbGlkZXInKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgJG5hdiA9ICR3cmFwLmZpbmQoJy5mcy1zbGlkZXItbmF2LCAuZnMtc2xpZGVyLXRodW1icycpLFxuICAgICAgICAkYXJyb3dzID0gJHdyYXAuZmluZCgnLmZzLXNsaWRlci1hcnJvd3MnKSxcbiAgICAgICAgbmF2Q291bnRlciA9IDAsXG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAvLyBUb2dnbGUgXCJob3ZlcmVkXCIgY2xhc3Mgb24vb2ZmIGZvciBhbnkgQ1NTIGhvdmVyIGVmZmVjdHMuXG4gICAgICAkd3JhcFxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdob3ZlcmVkJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvdmVyZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBzbGlkZS10byBkYXRhIHRvIGVhY2ggbmF2IGl0ZW0uXG4gICAgICAkbmF2LmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5kYXRhKCdzbGlkZS10bycsIG5hdkNvdW50ZXIpO1xuICAgICAgICBuYXZDb3VudGVyKys7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCR3cmFwLmhhc0NsYXNzKCdmcy1zaW1wbGUtc2xpZGVyJykpIHtcbiAgICAgICAgbWFyZ2luID0gMDtcbiAgICAgICAgaXRlbXMgPSAxO1xuICAgICAgfSBlbHNlIGlmICgkd3JhcC5oYXNDbGFzcygnZnMtZ2FsbGVyeS1zbGlkZXInKSkge1xuICAgICAgICBpdGVtcyA9IDE7XG4gICAgICB9XG5cbiAgICAgICRzbGlkZXIub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGRvdHM6IHRydWUsIC8vIE11c3QgYmUgZW5hYmxlZCBmb3IgZS5wYWdlLmluZGV4IHRvIHdvcmsuXG4gICAgICAgIGxvb3A6IGxvb3AsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IHNwZWVkLFxuICAgICAgICBhdXRvcGxheTogYXV0b3BsYXksXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogYXV0b3BsYXlUaW1lb3V0LFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHBhdXNlLFxuICAgICAgICBhbmltYXRlT3V0OiBhbmltYXRlLFxuICAgICAgICBhdXRvV2lkdGg6IGF1dG9XaWR0aCxcbiAgICAgICAgbWFyZ2luOiBtYXJnaW4sXG4gICAgICAgIGNlbnRlcjogY2VudGVyLFxuICAgICAgICBydGw6ICRib2R5Lmhhc0NsYXNzKCdydGwnKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgb25Jbml0aWFsaXplZDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICRuYXYuZmluZCgnbGk6Zmlyc3QtY2hpbGQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgJHdyYXAucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICAgICAgICAgaWYgKCFsb29wKSAkYXJyb3dzLmZpbmQoJ2xpJykuYWRkQ2xhc3MoJ2ZhZGUnKTtcbiAgICAgICAgICAkd3JhcC5maW5kKCcuZnMtbG9hZGVyJykuZmFkZU91dCgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZWQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIE1ha2Ugc3VyZSBuZXh0IGFuZCBwcmV2IGJ1dHRvbnMgZG9uJ3Qgc2hvd1xuICAgICAgICAgICAqIHdoZW4gYXQgc3RhcnQgYW5kIGVuZCBvZiBjeWNsZSwgaWYgdGhlcmUnc1xuICAgICAgICAgICAqIG5vIGxvb3BpbmcuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKCFsb29wKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICR3cmFwLmhhc0NsYXNzKCdmcy1ibG9jay1zbGlkZXInKSA/IGUuaXRlbS5pbmRleCA6IGUucGFnZS5pbmRleDtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09IDAgfHwgaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgICAgJGFycm93cy5maW5kKCdsaS5wcmV2JykucmVtb3ZlQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICAgICRhcnJvd3MuZmluZCgnbGkubmV4dCcpLmFkZENsYXNzKCdpbicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnBhZ2UuaW5kZXggKyAxID09IGUucGFnZS5jb3VudCkge1xuICAgICAgICAgICAgICAkYXJyb3dzLmZpbmQoJ2xpLm5leHQnKS5yZW1vdmVDbGFzcygnaW4nKTtcbiAgICAgICAgICAgICAgJGFycm93cy5maW5kKCdsaS5wcmV2JykuYWRkQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkYXJyb3dzLmZpbmQoJ2xpJykuYWRkQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3RhbmRhcmQgbmF2aWdhdGlvbiBkb3RzLlxuICAgICAgICAgICRuYXYuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgJG5hdi5maW5kKCdsaTpudGgtY2hpbGQoICcgKyAoZS5wYWdlLmluZGV4ICsgMSkgKyAnICknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBCaW5kIHN0YW5kYXJkIHNsaWRlciBuYXYgYW5kIHRodW1iIG5hdi5cbiAgICAgICRuYXYuZmluZCgnbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJGN1cnJlbnQgPSAkKHRoaXMpO1xuXG4gICAgICAgICRzbGlkZXIudHJpZ2dlcigndG8ub3dsLmNhcm91c2VsJywgJGN1cnJlbnQuZGF0YSgnc2xpZGUtdG8nKSk7XG5cbiAgICAgICAgJGN1cnJlbnRcbiAgICAgICAgICAuY2xvc2VzdCgndWwsIG9sJylcbiAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgJGN1cnJlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEJpbmQgc2xpZGVyIGFycm93IG5leHQvcHJldiBuYXYuXG4gICAgICAkYXJyb3dzLmZpbmQoJ2xpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICRzbGlkZXIudHJpZ2dlciggJ3N0b3Aub3dsLmF1dG9wbGF5JyApOyAvLyBEb2Vzbid0IHdvcmsgcmlnaHQgYXMgb2YgdjIuMi4xLlxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbmV4dCcpKSB7XG4gICAgICAgICAgJHNsaWRlci50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzbGlkZXIudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7IC8vIEVuZCAuZWFjaCgpXG4gIH0pOyAvLyBFbmQgLm9uKCAnbG9hZCcgKVxufSkoJCk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEFkZHMgdGFicyBibG9jayBmdW5jdGlvbmFsaXR5LCB3aGljaCBhbGxvd3NcbiAqIHRvZ2dsaW5nIGJldHdlZW4gdGFiIGNvbnRlbnQgcGFuZXMuXG4gKlxuICogQHN1bW1hcnkgIFRhYnNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICB0YWJzLmpzXG4gKi9cbmNsYXNzIFRhYnMge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYHRhYnNgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zIChjdXJyZW50bHkgbm90IHVzZWQpLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICR0YWJzID0gJChlbGVtZW50KTtcbiAgICBjb25zdCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBjb25zdCB7ICR3aW5kb3cgfSA9IGRvbTtcblxuICAgIHRoaXMuZGVlcExpbmsgPSB0aGlzLmRlZXBMaW5rLmJpbmQodGhpcyk7XG5cbiAgICBjb25zdCB7IHNob3csIG1hdGNoSGVpZ2h0LCBkZWVwTGluayB9ID0gdGhpcztcblxuICAgIC8qXG4gICAgICogVGhlIGZvbGxvd2luZyBjbGFzc2VzIGJlaW5nIGFkZGVkIHRvIHRoZSB0YWJzIGVsZW1lbnRcbiAgICAgKiBjYW4gb3ZlcnJpZGUgdGhlIGhlaWdodCBhbmQgZGVlcExpbmsgb3B0aW9ucy5cbiAgICAgKi9cbiAgICBpZiAoJHRhYnMuaGFzQ2xhc3MoJ3RhYnMtZml4ZWQtaGVpZ2h0JykpIHtcbiAgICAgIHNldHRpbmdzLmhlaWdodCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCR0YWJzLmhhc0NsYXNzKCd0YWJzLWRlZXAtbGluaycpKSB7XG4gICAgICBzZXR0aW5ncy5kZWVwTGluayA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gU2V0dXAgYWNjZXNzaWJsaXR5LlxuICAgICR0YWJzLmZpbmQoJy50YWItcGFuZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJHBhbmUgPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoJHBhbmUuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICRwYW5lLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRwYW5lLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUb2dnbGUgdGFiIGNvbnRlbnQuXG4gICAgJHRhYnNcbiAgICAgIC5maW5kKHNldHRpbmdzLm5hdlNlbGVjdG9yKVxuICAgICAgLmZpbmQoJ2EnKVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNob3coJHRhYnMsICQodGhpcyksIHNldHRpbmdzKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gU2V0dXAgZml4ZWQgaGVpZ2h0IGFuZC9vciBkZWVwLWxpbmtpbmcuXG4gICAgaWYgKHNldHRpbmdzLmhlaWdodCB8fCBzZXR0aW5ncy5kZWVwTGluaykge1xuICAgICAgJHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBNYXRjaCBoZWlnaHQgb2YgYWxsIHRhYnMgdG8gdGFsbGVzdC5cbiAgICAgICAgaWYgKHNldHRpbmdzLmhlaWdodCkge1xuICAgICAgICAgIG1hdGNoSGVpZ2h0KCR0YWJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdhdGNoIGZvciBkZWVwLWxpbmtpbmcuXG4gICAgICAgIGlmIChzZXR0aW5ncy5kZWVwTGluaykge1xuICAgICAgICAgIGRlZXBMaW5rKCR0YWJzLCBzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHRhYnMgb3B0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2U2VsZWN0b3I6ICcubWVudS1iYXIsIC5zdWJtZW51LWJhciwgLnN1Ym1lbnUtdGFicywgLnN1Ym1lbnUtcGlsbHMnLFxuICAgICAgaGVpZ2h0OiBmYWxzZSxcbiAgICAgIGRlZXBMaW5rOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhIHRhYi5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGFicyAgICBUaGUgYmluZGVkIGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9ICR0cmlnZ2VyIExpbmsgKHRhYikgd2hpY2ggaXMgdHJpZ2dlcmluZyBuZXcgY29udGVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICAgKi9cbiAgc2hvdygkdGFicywgJHRyaWdnZXIsIHNldHRpbmdzKSB7XG4gICAgY29uc3QgJG5hdiA9ICR0cmlnZ2VyLmNsb3Nlc3Qoc2V0dGluZ3MubmF2U2VsZWN0b3IpO1xuICAgIGNvbnN0IHRhcmdldCA9ICR0cmlnZ2VyLmF0dHIoJ2hyZWYnKS5zcGxpdCgnIycpWzFdO1xuXG4gICAgJG5hdi5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICR0cmlnZ2VyLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgJHRhYnNcbiAgICAgIC5maW5kKCcudGFiLXBhbmUnKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgIC5yZW1vdmVDbGFzcygnaW4nKVxuICAgICAgLmhpZGUoKVxuICAgICAgLnJlbW92ZUNsYXNzKCdmYWRlJyk7XG5cbiAgICAkdGFic1xuICAgICAgLmZpbmQoJyMnICsgdGFyZ2V0KVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgLmFkZENsYXNzKCdmYWRlJylcbiAgICAgIC5zaG93KDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbicpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGFsbCB0YWIgY29udGVudCBwYW5lcyB0byBoYXZlIGVxdWFsIGhlaWdodCwgdG9cbiAgICogdGhlIHRhbGxlc3Qgb25lLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0YWJzIFRoZSBiaW5kZWQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKi9cbiAgbWF0Y2hIZWlnaHQoJHRhYnMpIHtcbiAgICB2YXIgdGFsbGVzdCA9IDA7XG5cbiAgICAkdGFicy5maW5kKCcudGFiLXBhbmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHBhbmUgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgY3VycmVudEhlaWdodCA9ICRwYW5lLnNob3coKS5vdXRlckhlaWdodCgpO1xuXG4gICAgICBpZiAoISRwYW5lLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAkcGFuZS5oaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gdGFsbGVzdCkge1xuICAgICAgICB0YWxsZXN0ID0gY3VycmVudEhlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICR0YWJzLmZpbmQoJy50YWItcGFuZScpLmhlaWdodCh0YWxsZXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCBmb3IgdGFiIGRlZXAtbGlua2luZy5cbiAgICpcbiAgICogVGFiIGRlZXAtbGlua2luZyBpcyB3aGVuIHRoZSB1c2VyIHBhc3NlcyBhIHRhYiBJRFxuICAgKiB0aHJvdWdoIHRoZSBVUkwgb2YgdGhlIHdlYnBhZ2UgdG8gdHJpZ2dlciBvcGVuaW5nXG4gICAqIGEgc3BlY2lmaWMgdGFiIHBhbmUuXG4gICAqXG4gICAqIFRvIGRlZXAgbGluayB0byBhIHRhYiwgeW91IG5lZWQgdG8gcHJlZml4XG4gICAqIHRoZSBJRCBvZiB0aGUgdGFiIHdpdGggXCJ0YWJfXCIgbGlrZSB0aGlzOlxuICAgKlxuICAgKiBgaHR0cDovL3lvdXItc2l0ZS5jb20vcGFnZS13aXRoLXRhYnMvI3RhYl9pZF9vZl90YWJgXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRhYnMgICAgVGhlIGJpbmRlZCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAgICovXG4gIGRlZXBMaW5rKCR0YWJzLCBzZXR0aW5ncykge1xuICAgIHZhciBoYXNoID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaDtcblxuICAgIGlmIChoYXNoICYmIC0xICE9IGhhc2guaW5kZXhPZigndGFiXycpKSB7XG4gICAgICBoYXNoID0gaGFzaC5yZXBsYWNlKCd0YWJfJywgJycpO1xuXG4gICAgICB0aGlzLnNob3coJHRhYnMsICR0YWJzLmZpbmQoJ2FbaHJlZj1cIicgKyBoYXNoICsgJ1wiXSAnKSwgc2V0dGluZ3MpO1xuXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHNjcm9sbFRvcDogJHRhYnMub2Zmc2V0KCkudG9wIC0gMjBcbiAgICAgICAgfSxcbiAgICAgICAgODAwXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBBZGRzIHRvZ2dsZXMgYmxvY2sgZnVuY3Rpb25hbGl0eSwgd2hpY2ggYWxsb3dzXG4gKiB0b2dnbGUgZGlzcGxheSBvZiBjb250ZW50LlxuICpcbiAqIEBzdW1tYXJ5ICBUb2dnbGVcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICB0b2dnbGUuanNcbiAqL1xuY2xhc3MgVG9nZ2xlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGB0YWJzYCBibG9jayBvbiBhIERPTSBlbGVtZW50LFxuICAgKiB3aGVuIGJpbmRlZCB0aHJvdWdoIGpRdWVyeS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQmxvY2sgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCAkdG9nZ2xlID0gJChlbGVtZW50KTtcbiAgICBjb25zdCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBjb25zdCB7IG9wZW4sIGNsb3NlIH0gPSB0aGlzO1xuXG4gICAgdmFyICRncm91cCA9IG51bGw7XG5cbiAgICBpZiAoJHRvZ2dsZS5wYXJlbnRzKCcudG9nZ2xlLWdyb3VwJykubGVuZ3RoID4gMCkge1xuICAgICAgJGdyb3VwID0gJHRvZ2dsZS5jbG9zZXN0KCcudG9nZ2xlLWdyb3VwJyk7XG4gICAgfVxuXG4gICAgaWYgKCRncm91cCAmJiAkZ3JvdXAuaGFzQ2xhc3MoJ3RvZ2dsZS1hY2NvcmRpb24nKSkge1xuICAgICAgc2V0dGluZ3MuYWNjb3JkaW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgYWNjZXNzaWJsaXR5LlxuICAgICR0b2dnbGUuZmluZCgnLnRvZ2dsZS1jb250ZW50JykuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgIC8vIE9wZW4gaW5pdGlhbGx5IGlmIGhhcyBjbGFzcyBgdG9nZ2xlLWV4cGFuZGVkYC5cbiAgICBpZiAoJHRvZ2dsZS5oYXNDbGFzcygndG9nZ2xlLWV4cGFuZGVkJykpIHtcbiAgICAgIG9wZW4oJHRvZ2dsZSwgc2V0dGluZ3Muc3BlZWQpO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCB0b2dnbGUgY2xpY2suXG4gICAgJHRvZ2dsZS5maW5kKCcudG9nZ2xlLXRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICQodGhpcykuYmx1cigpO1xuXG4gICAgICBpZiAoJHRvZ2dsZS5oYXNDbGFzcygndG9nZ2xlLWV4cGFuZGVkJykpIHtcbiAgICAgICAgLy8gVG9nZ2xlIGlzIG9wZW47IHNvIGNsb3NlIGl0LlxuICAgICAgICBjbG9zZSgkdG9nZ2xlLCBzZXR0aW5ncy5zcGVlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoJGdyb3VwICYmIHNldHRpbmdzLmFjY29yZGlvbikge1xuICAgICAgICAgICRncm91cC5maW5kKCcuZnMtdG9nZ2xlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNsb3NlKCQodGhpcyksIHNldHRpbmdzLnNwZWVkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvZ2dsZSBpcyBjbG9zZWQ7IHNvIG9wZW4gaXQuXG4gICAgICAgIG9wZW4oJHRvZ2dsZSwgc2V0dGluZ3Muc3BlZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdG9nZ2xlIG9wdGlvbnMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNwZWVkOiAyMDAsXG4gICAgICBhY2NvcmRpb246IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGEgdG9nZ2xlLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0b2dnbGUgVGhlIGJpbmRlZCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZCAgIEFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXG4gICAqL1xuICBvcGVuKCR0b2dnbGUsIHNwZWVkKSB7XG4gICAgJHRvZ2dsZVxuICAgICAgLmFkZENsYXNzKCd0b2dnbGUtZXhwYW5kZWQnKVxuICAgICAgLmZpbmQoJy50b2dnbGUtY29udGVudCcpXG4gICAgICAuc3RvcCh0cnVlLCB0cnVlKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgLnNsaWRlRG93bihzcGVlZCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYSB0b2dnbGUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRvZ2dsZSBUaGUgYmluZGVkIGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkICAgQW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIGNsb3NlKCR0b2dnbGUsIHNwZWVkKSB7XG4gICAgJHRvZ2dsZVxuICAgICAgLnJlbW92ZUNsYXNzKCd0b2dnbGUtZXhwYW5kZWQnKVxuICAgICAgLmZpbmQoJy50b2dnbGUtY29udGVudCcpXG4gICAgICAuc3RvcCh0cnVlLCB0cnVlKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgIC5zbGlkZVVwKHNwZWVkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIEFkZHMgdG9vbHRpcCBibG9jayBmdW5jdGlvbmFsaXR5LlxuICpcbiAqIEluc3BpcmVkIGJ5IEJvb3RzdHJhcCAzJ3MgdG9vbHRpcHMuanMsIHdoaWNoIHdhcyBpbnNwaXJlZFxuICogYnkgdGhlIG9yaWdpbmFsIGpRdWVyeS50aXBzeSBieSBKYXNvbiBGcmFtZS5cbiAqXG4gKiBAc3VtbWFyeSAgVG9vbHRpcFxuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIHRvb2x0aXAuanNcbiAqL1xuY2xhc3MgVG9vbHRpcCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgdG9vbHRpcGAgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IG51bGw7XG4gICAgdGhpcy5lbmFibGVkID0gbnVsbDtcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuaG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgdGhpcy4kZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5pblN0YXRlID0gbnVsbDtcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgIHRoaXMuJHZpZXdwb3J0ID1cbiAgICAgIHRoaXMuc2V0dGluZ3Mudmlld3BvcnQgJiZcbiAgICAgICQoXG4gICAgICAgICQuaXNGdW5jdGlvbih0aGlzLnNldHRpbmdzLnZpZXdwb3J0KVxuICAgICAgICAgID8gdGhpcy5zZXR0aW5ncy52aWV3cG9ydC5jYWxsKHRoaXMsIHRoaXMuJGVsZW1lbnQpXG4gICAgICAgICAgOiB0aGlzLnNldHRpbmdzLnZpZXdwb3J0LnNlbGVjdG9yIHx8IHRoaXMuc2V0dGluZ3Mudmlld3BvcnRcbiAgICAgICk7XG4gICAgdGhpcy5pblN0YXRlID0geyBjbGljazogZmFsc2UsIGhvdmVyOiBmYWxzZSwgZm9jdXM6IGZhbHNlIH07XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWVudGVyLnRvb2x0aXAnLCBmYWxzZSwgJC5wcm94eSh0aGlzLmVudGVyLCB0aGlzKSk7XG4gICAgdGhpcy4kZWxlbWVudC5vbignbW91c2VsZWF2ZS50b29sdGlwJywgZmFsc2UsICQucHJveHkodGhpcy5sZWF2ZSwgdGhpcykpO1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignZm9jdXNpbi50b29sdGlwJywgZmFsc2UsICQucHJveHkodGhpcy5lbnRlciwgdGhpcykpO1xuICAgIHRoaXMuJGVsZW1lbnQub24oJ2ZvY3Vzb3V0LnRvb2x0aXAnLCBmYWxzZSwgJC5wcm94eSh0aGlzLmxlYXZlLCB0aGlzKSk7XG5cbiAgICB0aGlzLmdldERlbGVnYXRlU2V0dGluZ3MgPSB0aGlzLmdldERlbGVnYXRlU2V0dGluZ3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVudGVyID0gdGhpcy5lbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaXNJblN0YXRlVHJ1ZSA9IHRoaXMuaXNJblN0YXRlVHJ1ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGVhdmUgPSB0aGlzLmxlYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG93ID0gdGhpcy5zaG93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5hcHBseVBsYWNlbWVudCA9IHRoaXMuYXBwbHlQbGFjZW1lbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldENvbnRlbnQgPSB0aGlzLnNldENvbnRlbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGUgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhc0NvbnRlbnQgPSB0aGlzLmhhc0NvbnRlbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldCA9IHRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VGl0bGUgPSB0aGlzLmdldFRpdGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRVSUQgPSB0aGlzLmdldFVJRC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGlwID0gdGhpcy50aXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFycm93ID0gdGhpcy5hcnJvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZW5hYmxlID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRpc2FibGUgPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUVuYWJsZWQgPSB0aGlzLnRvZ2dsZUVuYWJsZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXN0cm95ID0gdGhpcy5kZXN0cm95LmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB0b29sdGlwIG9wdGlvbnMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICB0ZW1wbGF0ZTpcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJmcy10b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICB2aWV3cG9ydDoge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBwYWRkaW5nOiAwXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdldERlbGVnYXRlU2V0dGluZ3MoKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcblxuICAgIHRoaXMuX3NldHRpbmdzICYmXG4gICAgICAkLmVhY2godGhpcy5fc2V0dGluZ3MsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMuZGVmYXVsdHNba2V5XSkge1xuICAgICAgICAgIHNldHRpbmdzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2V0dGluZ3M7XG4gIH1cblxuICBlbnRlcihvYmopIHtcbiAgICB2YXIgc2VsZiA9IG9iaiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IgPyBvYmogOiAkKG9iai5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJyk7XG5cbiAgICBpZiAoIXNlbGYpIHtcbiAgICAgIHNlbGYgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihvYmouY3VycmVudFRhcmdldCwgdGhpcy5nZXREZWxlZ2F0ZVNldHRpbmdzKCkpO1xuICAgICAgJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcsIHNlbGYpO1xuICAgIH1cblxuICAgIGlmIChvYmogaW5zdGFuY2VvZiAkLkV2ZW50KSB7XG4gICAgICBzZWxmLmluU3RhdGVbb2JqLnR5cGUgPT0gJ2ZvY3VzaW4nID8gJ2ZvY3VzJyA6ICdob3ZlciddID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50aXAoKS5oYXNDbGFzcygnaW4nKSB8fCBzZWxmLmhvdmVyU3RhdGUgPT0gJ2luJykge1xuICAgICAgc2VsZi5ob3ZlclN0YXRlID0gJ2luJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLmhvdmVyU3RhdGUgPSAnaW4nO1xuXG4gICAgcmV0dXJuIHNlbGYuc2hvdygpO1xuICB9XG5cbiAgaXNJblN0YXRlVHJ1ZSgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5pblN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5pblN0YXRlW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGVhdmUob2JqKSB7XG4gICAgdmFyIHNlbGYgPSBvYmogaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yID8gb2JqIDogJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcpO1xuXG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICBzZWxmID0gbmV3IHRoaXMuY29uc3RydWN0b3Iob2JqLmN1cnJlbnRUYXJnZXQsIHRoaXMuZ2V0RGVsZWdhdGVTZXR0aW5ncygpKTtcbiAgICAgICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnLCBzZWxmKTtcbiAgICB9XG5cbiAgICBpZiAob2JqIGluc3RhbmNlb2YgJC5FdmVudCkge1xuICAgICAgc2VsZi5pblN0YXRlW29iai50eXBlID09ICdmb2N1c291dCcgPyAnZm9jdXMnIDogJ2hvdmVyJ10gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5pc0luU3RhdGVUcnVlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLmhvdmVyU3RhdGUgPSAnb3V0JztcblxuICAgIHJldHVybiBzZWxmLmhpZGUoKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdmFyIGUgPSAkLkV2ZW50KCdzaG93LmZzLnRvb2x0aXAnKTtcblxuICAgIGlmICh0aGlzLmhhc0NvbnRlbnQoKSAmJiB0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKTtcblxuICAgICAgdmFyIGluRG9tID0gJC5jb250YWlucyh0aGlzLiRlbGVtZW50WzBdLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLiRlbGVtZW50WzBdKTtcblxuICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWluRG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAkdGlwID0gdGhpcy50aXAoKSxcbiAgICAgICAgdGlwSWQgPSB0aGlzLmdldFVJRCgndG9vbHRpcCcpO1xuXG4gICAgICB0aGlzLnNldENvbnRlbnQoKTtcbiAgICAgICR0aXAuYXR0cignaWQnLCB0aXBJZCk7XG4gICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZCk7XG5cbiAgICAgICR0aXAuYWRkQ2xhc3MoJ2ZhZGUnKTtcblxuICAgICAgdmFyIHBsYWNlbWVudCA9IHRoaXMuc2V0dGluZ3MucGxhY2VtZW50LFxuICAgICAgICBhdXRvVG9rZW4gPSAvXFxzP2F1dG8/XFxzPy9pLFxuICAgICAgICBhdXRvUGxhY2UgPSBhdXRvVG9rZW4udGVzdChwbGFjZW1lbnQpO1xuXG4gICAgICBpZiAoYXV0b1BsYWNlKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IHBsYWNlbWVudC5yZXBsYWNlKGF1dG9Ub2tlbiwgJycpIHx8ICd0b3AnO1xuICAgICAgfVxuXG4gICAgICAkdGlwXG4gICAgICAgIC5kZXRhY2goKVxuICAgICAgICAuY3NzKHsgdG9wOiAwLCBsZWZ0OiAwLCBkaXNwbGF5OiAnYmxvY2snIH0pXG4gICAgICAgIC5hZGRDbGFzcyhwbGFjZW1lbnQpXG4gICAgICAgIC5kYXRhKCdmcy50b29sdGlwJywgdGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNvbnRhaW5lcikge1xuICAgICAgICAkdGlwLmFwcGVuZFRvKHRoaXMuc2V0dGluZ3MuY29udGFpbmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR0aXAuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaW5zZXJ0ZWQuZnMudG9vbHRpcCcpO1xuXG4gICAgICB2YXIgcG9zID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICBhY3R1YWxXaWR0aCA9ICR0aXBbMF0ub2Zmc2V0V2lkdGgsXG4gICAgICAgIGFjdHVhbEhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBpZiAoYXV0b1BsYWNlKSB7XG4gICAgICAgIHZhciBvcmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQsXG4gICAgICAgICAgdmlld3BvcnREaW0gPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMuJHZpZXdwb3J0KTtcblxuICAgICAgICBpZiAoJ2JvdHRvbScgPT0gcGxhY2VtZW50ICYmIHBvcy5ib3R0b20gKyBhY3R1YWxIZWlnaHQgPiB2aWV3cG9ydERpbS5ib3R0b20pIHtcbiAgICAgICAgICBwbGFjZW1lbnQgPSAndG9wJztcbiAgICAgICAgfSBlbHNlIGlmICgndG9wJyA9PSBwbGFjZW1lbnQgJiYgcG9zLnRvcCAtIGFjdHVhbEhlaWdodCA8IHZpZXdwb3J0RGltLnRvcCkge1xuICAgICAgICAgIHBsYWNlbWVudCA9ICdib3R0b20nO1xuICAgICAgICB9XG5cbiAgICAgICAgJHRpcC5yZW1vdmVDbGFzcyhvcmdQbGFjZW1lbnQpLmFkZENsYXNzKHBsYWNlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjYWxjdWxhdGVkT2Zmc2V0ID0gdGhpcy5nZXRDYWxjdWxhdGVkT2Zmc2V0KHBsYWNlbWVudCwgcG9zLCBhY3R1YWxXaWR0aCwgYWN0dWFsSGVpZ2h0KTtcblxuICAgICAgdGhpcy5hcHBseVBsYWNlbWVudChjYWxjdWxhdGVkT2Zmc2V0LCBwbGFjZW1lbnQpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByZXZIb3ZlclN0YXRlID0gdGhhdC5ob3ZlclN0YXRlO1xuXG4gICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignc2hvd24uZnMudG9vbHRpcCcpO1xuICAgICAgICB0aGF0LmhvdmVyU3RhdGUgPSBudWxsO1xuXG4gICAgICAgIGlmICgnb3V0JyA9PSBwcmV2SG92ZXJTdGF0ZSkge1xuICAgICAgICAgIHRoYXQubGVhdmUodGhhdCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgYXBwbHlQbGFjZW1lbnQob2Zmc2V0LCBwbGFjZW1lbnQpIHtcbiAgICB2YXIgJHRpcCA9IHRoaXMudGlwKCksXG4gICAgICB3aWR0aCA9ICR0aXBbMF0ub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQgPSAkdGlwWzBdLm9mZnNldEhlaWdodCxcbiAgICAgIG1hcmdpblRvcCA9IHBhcnNlSW50KCR0aXAuY3NzKCdtYXJnaW4tdG9wJyksIDEwKSxcbiAgICAgIG1hcmdpbkxlZnQgPSBwYXJzZUludCgkdGlwLmNzcygnbWFyZ2luLWxlZnQnKSwgMTApO1xuXG4gICAgb2Zmc2V0LnRvcCArPSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0LmxlZnQgKz0gbWFyZ2luTGVmdDtcblxuICAgIC8qXG5cdFx0ICogJC5mbi5vZmZzZXQgZG9lc24ndCByb3VuZCBwaXhlbCB2YWx1ZXM7IHNvIHdlIHVzZVxuXHRcdCAqIHNldE9mZnNldCBkaXJlY3RseSB3aXRoIG91ciBvd24gZnVuY3Rpb24gQi0wLlxuXHRcdCAqL1xuICAgICQub2Zmc2V0LnNldE9mZnNldChcbiAgICAgICR0aXBbMF0sXG4gICAgICAkLmV4dGVuZChcbiAgICAgICAge1xuICAgICAgICAgIHVzaW5nOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgJHRpcC5jc3Moe1xuICAgICAgICAgICAgICB0b3A6IE1hdGgucm91bmQocHJvcHMudG9wKSxcbiAgICAgICAgICAgICAgbGVmdDogTWF0aC5yb3VuZChwcm9wcy5sZWZ0KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvZmZzZXRcbiAgICAgICksXG4gICAgICAwXG4gICAgKTtcblxuICAgICR0aXAuYWRkQ2xhc3MoJ2luJyk7XG5cbiAgICAvKlxuXHRcdCAqIENoZWNrIHRvIHNlZSBpZiBwbGFjaW5nIHRpcCBpbiBuZXcgb2Zmc2V0IGNhdXNlZCB0aGVcblx0XHQgKiB0aXAgdG8gcmVzaXplIGl0c2VsZi5cblx0XHQgKi9cbiAgICB2YXIgYWN0dWFsV2lkdGggPSAkdGlwWzBdLm9mZnNldFdpZHRoLFxuICAgICAgYWN0dWFsSGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpZiAoJ3RvcCcgPT0gcGxhY2VtZW50ICYmIGFjdHVhbEhlaWdodCAhPSBoZWlnaHQpIHtcbiAgICAgIG9mZnNldC50b3AgPSBvZmZzZXQudG9wICsgaGVpZ2h0IC0gYWN0dWFsSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgdmFyICR0aXAgPSB0aGlzLnRpcCgpLFxuICAgICAgdGl0bGUgPSB0aGlzLmdldFRpdGxlKCk7XG5cbiAgICAkdGlwLmZpbmQoJy50b29sdGlwLWlubmVyJylbJ3RleHQnXSh0aXRsZSk7XG5cbiAgICAkdGlwLnJlbW92ZUNsYXNzKCdmYWRlIGluIHRvcCBib3R0b20nKTtcbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAkdGlwID0gJCh0aGlzLiR0aXApLFxuICAgICAgZXZlbnQgPSAkLkV2ZW50KCdoaWRlLmZzLnRvb2x0aXAnKTtcblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgaWYgKCdpbicgIT0gdGhhdC5ob3ZlclN0YXRlKSB7XG4gICAgICAgICR0aXAuZGV0YWNoKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGF0LiRlbGVtZW50KSB7XG4gICAgICAgIHRoYXQuJGVsZW1lbnQucmVtb3ZlQXR0cignYXJpYS1kZXNjcmliZWRieScpLnRyaWdnZXIoJ2hpZGRlbi5mcy50b29sdGlwJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihldmVudCk7XG5cbiAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkdGlwLnJlbW92ZUNsYXNzKCdpbicpO1xuXG4gICAgdGhpcy5ob3ZlclN0YXRlID0gbnVsbDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGFzQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oJGVsZW1lbnQpIHtcbiAgICBpZiAoISRlbGVtZW50KSB7XG4gICAgICAkZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIGVsID0gJGVsZW1lbnRbMF0sXG4gICAgICBpc0JvZHkgPSBlbC50YWdOYW1lID09ICdCT0RZJyxcbiAgICAgIGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKGVsUmVjdC53aWR0aCA9PSBudWxsKSB7XG4gICAgICBlbFJlY3QgPSAkLmV4dGVuZCh7fSwgZWxSZWN0LCB7XG4gICAgICAgIHdpZHRoOiBlbFJlY3QucmlnaHQgLSBlbFJlY3QubGVmdCxcbiAgICAgICAgaGVpZ2h0OiBlbFJlY3QuYm90dG9tIC0gZWxSZWN0LnRvcFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3ZnID0gd2luZG93LlNWR0VsZW1lbnQgJiYgZWwgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCxcbiAgICAgIGVsT2Zmc2V0ID0gaXNCb2R5ID8geyB0b3A6IDAsIGxlZnQ6IDAgfSA6IGlzU3ZnID8gbnVsbCA6ICRlbGVtZW50Lm9mZnNldCgpLFxuICAgICAgc2Nyb2xsID0ge1xuICAgICAgICBzY3JvbGw6IGlzQm9keVxuICAgICAgICAgID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgICAgIDogJGVsZW1lbnQuc2Nyb2xsVG9wKClcbiAgICAgIH0sXG4gICAgICBvdXRlckRpbXMgPSBpc0JvZHkgPyB7IHdpZHRoOiAkKHdpbmRvdykud2lkdGgoKSwgaGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCkgfSA6IG51bGw7XG5cbiAgICByZXR1cm4gJC5leHRlbmQoe30sIGVsUmVjdCwgc2Nyb2xsLCBvdXRlckRpbXMsIGVsT2Zmc2V0KTtcbiAgfVxuXG4gIGdldENhbGN1bGF0ZWRPZmZzZXQocGxhY2VtZW50LCBwb3MsIGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQpIHtcbiAgICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgICBpZiAoJ2JvdHRvbScgPT0gcGxhY2VtZW50KSB7XG4gICAgICBvZmZzZXQgPSB7XG4gICAgICAgIHRvcDogcG9zLnRvcCArIHBvcy5oZWlnaHQsXG4gICAgICAgIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMlxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICB0b3A6IHBvcy50b3AgLSBhY3R1YWxIZWlnaHQsXG4gICAgICAgIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMlxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgdmFyIHRpdGxlID0gdGhpcy5zZXR0aW5ncy50aXRsZTtcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHZhciAkZWwgPSB0aGlzLiRlbGVtZW50O1xuICAgICAgdGl0bGUgPSAkZWwuYXR0cigndGl0bGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBnZXRVSUQocHJlZml4KSB7XG4gICAgZG8ge1xuICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcbiAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKTtcblxuICAgIHJldHVybiBwcmVmaXg7XG4gIH1cblxuICB0aXAoKSB7XG4gICAgaWYgKCF0aGlzLiR0aXApIHtcbiAgICAgIHRoaXMuJHRpcCA9ICQodGhpcy5zZXR0aW5ncy50ZW1wbGF0ZSk7XG5cbiAgICAgIGlmICh0aGlzLiR0aXAubGVuZ3RoICE9IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b29sdGlwIGB0ZW1wbGF0ZWAgb3B0aW9uIG11c3QgY29uc2lzdCBvZiBleGFjdGx5IDEgdG9wLWxldmVsIGVsZW1lbnQhJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuJHRpcDtcbiAgfVxuXG4gIGFycm93KCkge1xuICAgIHJldHVybiAodGhpcy4kYXJyb3cgPSB0aGlzLiRhcnJvdyB8fCB0aGlzLnRpcCgpLmZpbmQoJy50b29sdGlwLWFycm93JykpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSAhdGhpcy5lbmFibGVkO1xuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBzZWxmID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJyk7XG5cbiAgICAgIGlmICghc2VsZikge1xuICAgICAgICBzZWxmID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5nZXREZWxlZ2F0ZVNldHRpbmdzKCkpO1xuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnLCBzZWxmKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHNlbGYuaW5TdGF0ZS5jbGljayA9ICFzZWxmLmluU3RhdGUuY2xpY2s7XG5cbiAgICAgIGlmIChzZWxmLmlzSW5TdGF0ZVRydWUoKSkge1xuICAgICAgICBzZWxmLmVudGVyKHNlbGYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5sZWF2ZShzZWxmKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNlbGYudGlwKCkuaGFzQ2xhc3MoJ2luJykpIHtcbiAgICAgICAgc2VsZi5sZWF2ZShzZWxmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuZW50ZXIoc2VsZik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgIHRoaXMuaGlkZShmdW5jdGlvbigpIHtcbiAgICAgIHRoYXQuJGVsZW1lbnQub2ZmKCcudG9vbHRpcCcpLnJlbW92ZURhdGEoJ2ZzLnRvb2x0aXAnKTtcblxuICAgICAgaWYgKHRoYXQuJHRpcCkge1xuICAgICAgICB0aGF0LiR0aXAuZGV0YWNoKCk7XG4gICAgICB9XG5cbiAgICAgIHRoYXQuJHRpcCA9IG51bGw7XG4gICAgICB0aGF0LiRhcnJvdyA9IG51bGw7XG4gICAgICB0aGF0LiR2aWV3cG9ydCA9IG51bGw7XG4gICAgICB0aGF0LiRlbGVtZW50ID0gbnVsbDtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvbSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9ibG9ja3MvYmFja2dyb3VuZCc7XG5pbXBvcnQgTWVudSBmcm9tICcuL2Jsb2Nrcy9tZW51JztcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vYmxvY2tzL21vYmlsZS1tZW51JztcbmltcG9ydCBUYWJzIGZyb20gJy4vYmxvY2tzL3RhYnMnO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICcuL2Jsb2Nrcy90b2dnbGUnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9ibG9ja3MvdG9vbHRpcCc7XG5pbXBvcnQgJy4vYmxvY2tzL21vZGFsJztcbmltcG9ydCAnLi9ibG9ja3Mvc2xpZGVyJztcblxuLyoqXG4gKiBBZGQgYmxvY2tzIHRvIHRoZSBqUXVlcnkgbmFtZXNwYWNlLlxuICpcbiAqIE5vdGU6IFRoaXMgZG9lc24ndCBpbmNsdWRlIGJsb2NrcyBtZWFudCB0b1xuICogaW1wbGVtZW50IG9wdGlvbmFsIHRoaXJkLXBhcnR5IHBsdWdpbnMsIE93bFxuICogQ2Fyb3VzZWwgYW5kIE1hZ25pZmljIFBvcHVwLlxuICpcbiAqIEBzaW5jZSAxLjAuMFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBibG9jayAgIEZyYW1ld29yayBibG9jayBJRC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgZm9yIGJsb2NrLlxuICovXG4kLmZuLmZyb250c3RyZWV0ID0gZnVuY3Rpb24oYmxvY2ssIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKGJsb2NrKSB7XG4gICAgICBjYXNlICdiYWNrZ3JvdW5kJzpcbiAgICAgICAgcmV0dXJuIG5ldyBCYWNrZ3JvdW5kKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgY2FzZSAnbW9iaWxlLW1lbnUnOlxuICAgICAgICByZXR1cm4gbmV3IE1vYmlsZU1lbnUodGhpcywgb3B0aW9ucyk7XG4gICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgcmV0dXJuIG5ldyBNZW51KHRoaXMsIG9wdGlvbnMpO1xuICAgICAgY2FzZSAndGFicyc6XG4gICAgICAgIHJldHVybiBuZXcgVGFicyh0aGlzLCBvcHRpb25zKTtcbiAgICAgIGNhc2UgJ3RvZ2dsZSc6XG4gICAgICAgIHJldHVybiBuZXcgVG9nZ2xlKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgY2FzZSAndG9vbHRpcCc6XG4gICAgICAgIHJldHVybiBuZXcgVG9vbHRpcCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgeyAkZG9jdW1lbnQsICR3aW5kb3cgfSA9IGRvbTtcblxuJGRvY3VtZW50LnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgLyoqXG4gICAqIEJpbmRzIHRoZSBkZWZhdWx0IGBtZW51YCBibG9jay5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICAkKCcuZnMtbWVudScpLmZyb250c3RyZWV0KCdtZW51Jyk7XG5cbiAgLyoqXG4gICAqIEFkZHMgbm8tY2xpY2sgZnVuY3Rpb25hbHRpeSB0byBhbnkgbGluayBieVxuICAgKiBhZGRpbmcgY2xhc3MgXCJuby1jbGlja1wiLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgaW50ZXJmYWNlLlxuICAgKi9cbiAgJCgnYS5uby1jbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEFkZHMgbm8tY2xpY2sgZnVuY3Rpb25hbHRpeSB0byBhbnkgbGluayBkaXJlY3RseVxuICAgKiB3aXRoaW4gYW4gbGkgd2l0aCBjbGFzcyBgbm8tY2xpY2tgLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIGlzIG1haW5seSBoZXJlIHRvIGFjY21vZGF0ZSBpbnRlcmZhY2VzXG4gICAqIGxpa2UgV29yZFByZXNzIHdoaWNoIGFsbG93IGJ1aWxkaW5nIG1lbnVzLCBidXQgb25seVxuICAgKiBhbGxvdyBhZGRpbmcgQ1NTIGNsYXNzZXMgdG8gdGhlIG1lbnUgbGlzdCBpdGVtcy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IGludGVyZmFjZS5cbiAgICovXG4gICQoJ2xpLm5vLWNsaWNrJylcbiAgICAuZmluZCgnYTpmaXJzdCcpXG4gICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgZGVmYXVsdCBgdGFic2AgYmxvY2suXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgJCgnLmZzLXRhYnMnKS5mcm9udHN0cmVldCgndGFicycpO1xuXG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgZGVmYXVsdCBgdG9nZ2xlYCBibG9jay5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICAkKCcuZnMtdG9nZ2xlJykuZnJvbnRzdHJlZXQoJ3RvZ2dsZScpO1xuXG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgZGVmYXVsdCBgdG9vbHRpcGAgYmxvY2suXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgJCgnLmZzLXRvb2x0aXAtdHJpZ2dlcicpLmZyb250c3RyZWV0KCd0b29sdGlwJyk7XG59KTtcblxuJHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAvKipcbiAgICogU2VsZi1pbnZva2VzIHRoZSBiYWNrZ3JvdW5kIHNsaWRlciBvZiB0aGVcbiAgICogYGJhY2tncm91bmRgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy1iZy1zbGlkZXInKS5mcm9udHN0cmVldCgnYmFja2dyb3VuZCcsIHsgdHlwZTogJ3NsaWRlcicgfSk7XG5cbiAgLyoqXG4gICAqIFNlbGYtaW52b2tlcyB0aGUgcGFyYWxsYXggZWZmZWN0IG9mIHRoZVxuICAgKiBgYmFja2dyb3VuZGAgYmxvY2suXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgJCgnLmZzLWJnLXBhcmFsbGF4JykuZnJvbnRzdHJlZXQoJ2JhY2tncm91bmQnLCB7IHR5cGU6ICdwYXJhbGxheCcgfSk7XG59KTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogU3RvcmUgYW5kIGNhY2hlIHJlLXVzYWJsZSBET00gZWxlbWVudHMuXG4gKlxuICogQHNpbmNlIDEuMC4wXG4gKlxuICogQHZhciB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZG9tID0ge1xuICAkd2luZG93OiAkKHdpbmRvdyksXG4gICRkb2N1bWVudDogJChkb2N1bWVudCksXG4gICRib2R5OiAkKCdib2R5Jylcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHdlYnNpdGUgaXMgYmVpbmcgbG9hZGVkIGZyb20gYSBtb2JpbGVcbiAqIGRldmljZS5cbiAqXG4gKiBAc2luY2UgMS4wLjBcbiAqXG4gKiBAcGFyYW0gIHtCb29sZWFufSB2aWV3cG9ydENoZWNrIFdoZXRoZXIgdG8gbGV0IHZpZXdwb3J0IHNpemUgaGVscCBkZXRlcm1pbmUuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHdlJ3JlIG9uIGEgbW9iaWxlIGRldmljZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKHZpZXdwb3J0Q2hlY2spIHtcbiAgY29uc3QgeyAkYm9keSB9ID0gZG9tO1xuXG4gIGlmICgkYm9keS5oYXNDbGFzcygnbW9iaWxlJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBhZ2VudENoZWNrID0gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgIG5hdmlnYXRvci51c2VyQWdlbnRcbiAgKTtcblxuICBpZiAoYWdlbnRDaGVjaykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHZpZXdwb3J0Q2hlY2spIHtcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcblxuICAgIGlmICgkd2luZG93LndpZHRoKCkgPCA5OTIgfHwgJHdpbmRvdy5oZWlnaHQoKSA8IDUwMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==