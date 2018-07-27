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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/js/FrontStreet.js":
/*!********************************!*\
  !*** ../src/js/FrontStreet.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Front Street API
 *
 * This class provides an API for managing which
 * block types get added to the $.fn.frontstreet
 * namespace of jQuery.
 *
 * @summary  Front Street API
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   FrontStreet.js
 */

var FrontStreet = function () {
  /**
   * Class constructor.
   *
   * @since 1.0.0
   */
  function FrontStreet() {
    _classCallCheck(this, FrontStreet);

    this.blocks = {};
    this.add = this.add.bind(this);
    this.init = this.init.bind(this);
  }

  /**
   * Add a registered block type.
   *
   * @since 1.0.0
   */


  _createClass(FrontStreet, [{
    key: 'add',
    value: function add(type, module) {
      this.blocks[type] = module;
    }

    /**
     * Apply all registered block types to
     * jQuery namespace.
     *
     * @since 1.0.0
     */

  }, {
    key: 'init',
    value: function init() {
      var blocks = this.blocks;

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
          if (blocks[block]) {
            return new blocks[block](this, options);
          }
        });
      };
    }
  }]);

  return FrontStreet;
}();

/* harmony default export */ __webpack_exports__["default"] = (FrontStreet);

/***/ }),

/***/ "../src/js/blocks/Background.js":
/*!**************************************!*\
  !*** ../src/js/blocks/Background.js ***!
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
 * @module   Background.js
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

      var imgHeight = $img.height();
      var containerHeight = $figure.height() > 0 ? $figure.height() : 500;
      var parallaxDist = imgHeight - containerHeight;
      var bottom = $figure.offset().top + containerHeight;
      var top = $figure.offset().top;
      var scrollTop = $window.scrollTop();
      var windowHeight = window.innerHeight; // Using `window`, NOT `$window`; we need a fresh calculation here.
      var windowBottom = scrollTop + windowHeight;
      var percentScrolled = (windowBottom - top) / (containerHeight + windowHeight);

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

/***/ "../src/js/blocks/Menu.js":
/*!********************************!*\
  !*** ../src/js/blocks/Menu.js ***!
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
 * @module   Menu.js
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

/***/ "../src/js/blocks/MobileMenu.js":
/*!**************************************!*\
  !*** ../src/js/blocks/MobileMenu.js ***!
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

/***/ "../src/js/blocks/Tabbed.js":
/*!**********************************!*\
  !*** ../src/js/blocks/Tabbed.js ***!
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
 * @module   Tabbed.js
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

    // Set up accessiblity.
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

/***/ "../src/js/blocks/Toggle.js":
/*!**********************************!*\
  !*** ../src/js/blocks/Toggle.js ***!
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
 * @module   Toggle.js
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

/***/ "../src/js/blocks/Tooltip.js":
/*!***********************************!*\
  !*** ../src/js/blocks/Tooltip.js ***!
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
 * @module   Tooltip.js
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

        var that = this;
        var $tip = this.tip();
        var tipId = this.getUID('tooltip');

        this.setContent();
        $tip.attr('id', tipId);
        this.$element.attr('aria-describedby', tipId);

        $tip.addClass('fade');

        var placement = this.settings.placement;
        var autoToken = /\s?auto?\s?/i;
        var autoPlace = autoToken.test(placement);

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

        var pos = this.getPosition();
        var actualWidth = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;

        if (autoPlace) {
          var orgPlacement = placement;
          var viewportDim = this.getPosition(this.$viewport);

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
      var $tip = this.tip();
      var width = $tip[0].offsetWidth;
      var height = $tip[0].offsetHeight;
      var marginTop = parseInt($tip.css('margin-top'), 10);
      var marginLeft = parseInt($tip.css('margin-left'), 10);

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
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;

      if ('top' == placement && actualHeight != height) {
        offset.top = offset.top + height - actualHeight;
      }
    }
  }, {
    key: 'setContent',
    value: function setContent() {
      var $tip = this.tip();
      $tip.find('.tooltip-inner')['text'](this.getTitle());
      $tip.removeClass('fade in top bottom');
    }
  }, {
    key: 'hide',
    value: function hide(callback) {
      var that = this;
      var $tip = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$tip);
      var event = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('hide.fs.tooltip');

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

      var el = $element[0];
      var isBody = el.tagName == 'BODY';

      var elRect = el.getBoundingClientRect();

      if (elRect.width == null) {
        elRect = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, elRect, {
          width: elRect.right - elRect.left,
          height: elRect.bottom - elRect.top
        });
      }

      var isSvg = window.SVGElement && el instanceof window.SVGElement;
      var elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset();
      var scroll = {
        scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
      };
      var outerDims = isBody ? { width: jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width(), height: jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() } : null;

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
        title = this.$element.attr('title');
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
      var $wrap = $(this);
      var $slider = $wrap.find('.fs-slider');
      var speed = parseInt($wrap.data('speed')) ? parseInt($wrap.data('speed')) : 500;
      var autoplayTimeout = parseInt($wrap.data('autoplay')) ? parseInt($wrap.data('autoplay')) : 0;
      var autoplay = autoplayTimeout ? true : false;
      var pause = 'true' == $wrap.data('pause') || $wrap.data('pause') == '1' ? true : false;
      var loop = 'false' == $wrap.data('loop') || $wrap.data('loop') == '0' ? false : true;
      var animate = 'true' == $wrap.data('fade') || $wrap.data('fade') == '1' ? 'fadeOut' : false;
      var autoWidth = $wrap.hasClass('fs-gallery-slider') ? true : false;
      var center = $wrap.hasClass('fs-gallery-slider') ? true : false;
      var $nav = $wrap.find('.fs-slider-nav, .fs-slider-thumbs');
      var $arrows = $wrap.find('.fs-slider-arrows');

      var items = parseInt($wrap.data('items')) ? parseInt($wrap.data('items')) : 4;
      var margin = parseInt($wrap.data('margin')) ? parseInt($wrap.data('margin')) : 1;
      var navCounter = 0;

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

/***/ "../src/js/index.js":
/*!**************************!*\
  !*** ../src/js/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../src/js/utils.js");
/* harmony import */ var _FrontStreet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FrontStreet */ "../src/js/FrontStreet.js");
/* harmony import */ var _blocks_Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/Background */ "../src/js/blocks/Background.js");
/* harmony import */ var _blocks_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/Menu */ "../src/js/blocks/Menu.js");
/* harmony import */ var _blocks_MobileMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/MobileMenu */ "../src/js/blocks/MobileMenu.js");
/* harmony import */ var _blocks_Tabbed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/Tabbed */ "../src/js/blocks/Tabbed.js");
/* harmony import */ var _blocks_Toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/Toggle */ "../src/js/blocks/Toggle.js");
/* harmony import */ var _blocks_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/Tooltip */ "../src/js/blocks/Tooltip.js");
/* harmony import */ var _blocks_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/modal */ "../src/js/blocks/modal.js");
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/slider */ "../src/js/blocks/slider.js");












var $document = _utils__WEBPACK_IMPORTED_MODULE_1__["dom"].$document,
    $window = _utils__WEBPACK_IMPORTED_MODULE_1__["dom"].$window;

var frontstreet = new _FrontStreet__WEBPACK_IMPORTED_MODULE_2__["default"]();

// Register all default blocks.
frontstreet.add('background', _blocks_Background__WEBPACK_IMPORTED_MODULE_3__["default"]);
frontstreet.add('menu', _blocks_Menu__WEBPACK_IMPORTED_MODULE_4__["default"]);
frontstreet.add('mobile-menu', _blocks_MobileMenu__WEBPACK_IMPORTED_MODULE_5__["default"]);
frontstreet.add('tabbed', _blocks_Tabbed__WEBPACK_IMPORTED_MODULE_6__["default"]);
frontstreet.add('toggle', _blocks_Toggle__WEBPACK_IMPORTED_MODULE_7__["default"]);
frontstreet.add('tooltip', _blocks_Tooltip__WEBPACK_IMPORTED_MODULE_8__["default"]);

// Add registered blocks to jQuery namespace.
frontstreet.init();

/**
 * Bind blocks default classes with jQuery.
 *
 * @since 1.0.0
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9Gcm9udFN0cmVldC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy9CYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3MvTW9iaWxlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy9UYWJiZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3MvVG9nZ2xlLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3MvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3Mvc2xpZGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJGcm9udFN0cmVldCIsImJsb2NrcyIsImFkZCIsImJpbmQiLCJpbml0IiwidHlwZSIsIm1vZHVsZSIsIiQiLCJmbiIsImZyb250c3RyZWV0IiwiYmxvY2siLCJvcHRpb25zIiwiZWFjaCIsIkJhY2tncm91bmQiLCJlbGVtZW50IiwiJGVsZW1lbnQiLCJzZXR0aW5ncyIsImV4dGVuZCIsImRlZmF1bHRzIiwiJHNlY3Rpb24iLCJjbG9zZXN0Iiwic2VjdGlvbiIsInNsaWRlciIsInBhcmFsbGF4IiwicGFyYWxsYXhDYWxjIiwiJHNsaWRlciIsImF1dG9wbGF5IiwiZGF0YSIsImZpbmQiLCIkaW1nIiwiYWRkQ2xhc3MiLCJwcmVwZW5kIiwiZmFkZU91dCIsInNldEludGVydmFsIiwiJGxhc3RJbWciLCJyZW1vdmVDbGFzcyIsInNldFRpbWVvdXQiLCJwcmVwZW5kVG8iLCIkZmlndXJlIiwiJHdpbmRvdyIsImlzTW9iaWxlIiwiY3NzIiwib24iLCJpbWdIZWlnaHQiLCJoZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJwYXJhbGxheERpc3QiLCJib3R0b20iLCJvZmZzZXQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpbmRvd0JvdHRvbSIsInBlcmNlbnRTY3JvbGxlZCIsIk1hdGgiLCJyb3VuZCIsIk1lbnUiLCIkbWVudSIsImRlbGF5IiwidGltZXIiLCJmbHlvdXQiLCJzaG93IiwiaGlkZSIsImhhcyIsImRyb3BEb3duU2VsZWN0b3IiLCIkdHJpZ2dlciIsImFwcGVuZCIsImNoaWxkcmVuIiwibm9vcCIsImhhc0NsYXNzIiwiJGJvZHkiLCIkZmx5b3V0IiwibG9jYXRpb24iLCJzcGFjZSIsImxlbmd0aCIsIndpZHRoIiwibGV2ZWwiLCJnZXRMZXZlbCIsIiRzaWJsaW5ncyIsInNpYmxpbmdzIiwiJHRhcmdldCIsImNsZWFyVGltZW91dCIsIk1vYmlsZU1lbnUiLCIkdHJpZ2dlcnMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcCIsIlRhYmJlZCIsIiR0YWJzIiwiZGVlcExpbmsiLCJtYXRjaEhlaWdodCIsIiRwYW5lIiwiYXR0ciIsIm5hdlNlbGVjdG9yIiwiJG5hdiIsInRhcmdldCIsInNwbGl0IiwidGFsbGVzdCIsImN1cnJlbnRIZWlnaHQiLCJvdXRlckhlaWdodCIsImhhc2giLCJkb2N1bWVudCIsImluZGV4T2YiLCJyZXBsYWNlIiwiYW5pbWF0ZSIsIlRvZ2dsZSIsIiR0b2dnbGUiLCJvcGVuIiwiY2xvc2UiLCIkZ3JvdXAiLCJwYXJlbnRzIiwiYWNjb3JkaW9uIiwic3BlZWQiLCJibHVyIiwic3RvcCIsInNsaWRlRG93biIsInNsaWRlVXAiLCJUb29sdGlwIiwiZW5hYmxlZCIsInRpbWVvdXQiLCJob3ZlclN0YXRlIiwiaW5TdGF0ZSIsIiR2aWV3cG9ydCIsInZpZXdwb3J0IiwiaXNGdW5jdGlvbiIsImNhbGwiLCJzZWxlY3RvciIsImNsaWNrIiwiaG92ZXIiLCJmb2N1cyIsInByb3h5IiwiZW50ZXIiLCJsZWF2ZSIsImdldERlbGVnYXRlU2V0dGluZ3MiLCJpc0luU3RhdGVUcnVlIiwiYXBwbHlQbGFjZW1lbnQiLCJzZXRDb250ZW50IiwiaGFzQ29udGVudCIsImdldFBvc2l0aW9uIiwiZ2V0Q2FsY3VsYXRlZE9mZnNldCIsImdldFRpdGxlIiwiZ2V0VUlEIiwidGlwIiwiYXJyb3ciLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsInRvZ2dsZSIsImRlc3Ryb3kiLCJfc2V0dGluZ3MiLCJrZXkiLCJ2YWx1ZSIsIm9iaiIsInNlbGYiLCJjb25zdHJ1Y3RvciIsImN1cnJlbnRUYXJnZXQiLCJFdmVudCIsImUiLCJ0cmlnZ2VyIiwiaW5Eb20iLCJjb250YWlucyIsIm93bmVyRG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJ0aGF0IiwiJHRpcCIsInRpcElkIiwicGxhY2VtZW50IiwiYXV0b1Rva2VuIiwiYXV0b1BsYWNlIiwidGVzdCIsImRldGFjaCIsImxlZnQiLCJkaXNwbGF5IiwiY29udGFpbmVyIiwiYXBwZW5kVG8iLCJpbnNlcnRBZnRlciIsInBvcyIsImFjdHVhbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJhY3R1YWxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvcmdQbGFjZW1lbnQiLCJ2aWV3cG9ydERpbSIsImNhbGN1bGF0ZWRPZmZzZXQiLCJjb21wbGV0ZSIsInByZXZIb3ZlclN0YXRlIiwibWFyZ2luVG9wIiwicGFyc2VJbnQiLCJtYXJnaW5MZWZ0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwcm9wcyIsImNhbGxiYWNrIiwicmVtb3ZlQXR0ciIsImVsIiwiaXNCb2R5IiwidGFnTmFtZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpZ2h0IiwiaXNTdmciLCJTVkdFbGVtZW50IiwiZWxPZmZzZXQiLCJzY3JvbGwiLCJib2R5Iiwib3V0ZXJEaW1zIiwidGl0bGUiLCJwcmVmaXgiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsInRlbXBsYXRlIiwiRXJyb3IiLCIkYXJyb3ciLCJvZmYiLCJyZW1vdmVEYXRhIiwicGFkZGluZyIsIm1hZ25pZmljUG9wdXAiLCIkZG9jdW1lbnQiLCJyZWFkeSIsIm1haW5DbGFzcyIsInJlbW92YWxEZWxheSIsImNvbmZpZyIsImFuaW1hdGlvbiIsIm1vYmlsZSIsIm1vYmlsZUlmcmFtZSIsIm1vYmlsZUdhbGxlcnkiLCJlcnJvciIsImxvYWRpbmciLCJjb3VudGVyIiwibmV4dCIsInByZXZpb3VzIiwiY2xvc2VNYXJrdXAiLCJmc01vZGFsIiwidENsb3NlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwidFByZXYiLCJ0TmV4dCIsInRDb3VudGVyIiwiaW1hZ2UiLCJ0RXJyb3IiLCJhamF4IiwiYWxpZ25Ub3AiLCJzaG93Q2xvc2VCdG4iLCJjYWxsYmFja3MiLCJiZWZvcmVDbG9zZSIsImNsb3NlQnRuSW5zaWRlIiwiaW5zdGFuY2UiLCJ3cmFwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIiRnYWxsZXJ5IiwiY2xhc3NlcyIsImpvaW4iLCIkbGluayIsImxpbmtDbGFzcyIsImRpc2FibGVPbiIsImN1cnNvciIsImRlbGVnYXRlIiwiaWZyYW1lIiwibWFya3VwIiwibWFya3VwUGFyc2UiLCJ2YWx1ZXMiLCJpdGVtIiwib3dsQ2Fyb3VzZWwiLCIkd3JhcCIsImF1dG9wbGF5VGltZW91dCIsInBhdXNlIiwibG9vcCIsImF1dG9XaWR0aCIsImNlbnRlciIsIiRhcnJvd3MiLCJpdGVtcyIsIm1hcmdpbiIsIm5hdkNvdW50ZXIiLCJuYXYiLCJkb3RzIiwic21hcnRTcGVlZCIsImF1dG9wbGF5SG92ZXJQYXVzZSIsImFuaW1hdGVPdXQiLCJydGwiLCJvbkluaXRpYWxpemVkIiwib25DaGFuZ2VkIiwiaW5kZXgiLCJwYWdlIiwiY291bnQiLCIkY3VycmVudCIsImRvbSIsInZpZXdwb3J0Q2hlY2siLCJh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QUd0QyxNQUFJQSxNQUFNRCxRQUFOLENBQWUsUUFBZixDQUFKLEVBQThCO0FBQzVCLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQUk0TixhQUFhLGlFQUFpRXZILElBQWpFLENBQ2Z3SCxVQUFVQyxTQURLLENBQWpCOztBQUlBLE1BQUlGLFVBQUosRUFBZ0I7QUFDZCxXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJRCxhQUFKLEVBQW1CO0FBQ2pCLFFBQUkzUCxVQUFVLDZDQUFBaEMsQ0FBRTZDLE1BQUYsQ0FBZDs7QUFFQSxRQUFJYixRQUFRc0MsS0FBUixLQUFrQixHQUFsQixJQUF5QnRDLFFBQVFLLE1BQVIsS0FBbUIsR0FBaEQsRUFBcUQ7QUFDbkQsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ2hERCx3QiIsImZpbGUiOiIuL2pzL2Zyb250c3RyZWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBGcm9udCBTdHJlZXQgQVBJXG4gKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBhbiBBUEkgZm9yIG1hbmFnaW5nIHdoaWNoXG4gKiBibG9jayB0eXBlcyBnZXQgYWRkZWQgdG8gdGhlICQuZm4uZnJvbnRzdHJlZXRcbiAqIG5hbWVzcGFjZSBvZiBqUXVlcnkuXG4gKlxuICogQHN1bW1hcnkgIEZyb250IFN0cmVldCBBUElcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBGcm9udFN0cmVldC5qc1xuICovXG5jbGFzcyBGcm9udFN0cmVldCB7XG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJsb2NrcyA9IHt9O1xuICAgIHRoaXMuYWRkID0gdGhpcy5hZGQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluaXQgPSB0aGlzLmluaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWdpc3RlcmVkIGJsb2NrIHR5cGUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgYWRkKHR5cGUsIG1vZHVsZSkge1xuICAgIHRoaXMuYmxvY2tzW3R5cGVdID0gbW9kdWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGFsbCByZWdpc3RlcmVkIGJsb2NrIHR5cGVzIHRvXG4gICAqIGpRdWVyeSBuYW1lc3BhY2UuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgaW5pdCgpIHtcbiAgICBjb25zdCB7IGJsb2NrcyB9ID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEFkZCBibG9ja3MgdG8gdGhlIGpRdWVyeSBuYW1lc3BhY2UuXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIGRvZXNuJ3QgaW5jbHVkZSBibG9ja3MgbWVhbnQgdG9cbiAgICAgKiBpbXBsZW1lbnQgb3B0aW9uYWwgdGhpcmQtcGFydHkgcGx1Z2lucywgT3dsXG4gICAgICogQ2Fyb3VzZWwgYW5kIE1hZ25pZmljIFBvcHVwLlxuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmxvY2sgICBGcmFtZXdvcmsgYmxvY2sgSUQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBmb3IgYmxvY2suXG4gICAgICovXG4gICAgJC5mbi5mcm9udHN0cmVldCA9IGZ1bmN0aW9uKGJsb2NrLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoYmxvY2tzW2Jsb2NrXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgYmxvY2tzW2Jsb2NrXSh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9udFN0cmVldDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBpc01vYmlsZSwgZG9tIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIFRoaXMgZmlsZSBpbmNsdWRlcyB0aGUgZnVuY3Rpb25hbGl0eSBmb3Igc2VjdGlvblxuICogcGFyYWxsYXggYmFja2dyb3VuZCBpbWFnZSBlZmZlY3RzIGFuZCBiYWNrZ3JvdW5kXG4gKiBzbGlkZXJzLlxuICpcbiAqIEJ5IGRlZmF1bHQgYWxsIEhUTUwgZWxlbWVudHMgd2l0aCBjbGFzcyBgZnMtYmctc2xpZGVyYFxuICogYW5kIGBmcy1iZy1wYXJhbGxheGAgYXJlIGF1dG9tYXRpY2FsbHkgYmluZGVkXG4gKiB3aXRoIHRoZWlyIHJlc3BlY3RpdmUgZWZmZWN0cy5cbiAqXG4gKiBAc3VtbWFyeSAgQmFja2dyb3VuZCBFZmZlY3RzXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgQmFja2dyb3VuZC5qc1xuICovXG5jbGFzcyBCYWNrZ3JvdW5kIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGBiYWNrZ3JvdW5kYCBibG9jayBvbiBhIERPTSBlbGVtZW50LFxuICAgKiB3aGVuIGJpbmRlZCB0aHJvdWdoIGpRdWVyeS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQmxvY2sgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgY29uc3QgJHNlY3Rpb24gPSAkZWxlbWVudC5jbG9zZXN0KHNldHRpbmdzLnNlY3Rpb24pO1xuXG4gICAgdGhpcy5zbGlkZXIgPSB0aGlzLnNsaWRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFyYWxsYXggPSB0aGlzLnBhcmFsbGF4LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJhbGxheENhbGMgPSB0aGlzLnBhcmFsbGF4Q2FsYy5iaW5kKHRoaXMpO1xuXG4gICAgc3dpdGNoIChzZXR0aW5ncy50eXBlKSB7XG4gICAgICBjYXNlICdzbGlkZXInOlxuICAgICAgICB0aGlzLnNsaWRlcigkZWxlbWVudCwgJHNlY3Rpb24sIHNldHRpbmdzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYXJhbGxheCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnBhcmFsbGF4KCRlbGVtZW50LCAkc2VjdGlvbiwgc2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGJhY2tncm91bmQgb3B0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3BhcmFsbGF4JyxcbiAgICAgIGF1dG9wbGF5OiA0MDAwLFxuICAgICAgc2VjdGlvbjogJy5mcy1zZWN0aW9uLCAuaGFzLWJnLXNsaWRlciwgLmhhcy1iZy1wYXJhbGxheCwgLmhhcy1iZy12aWRlbydcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIGEgYmFja2dyb3VuZCBzbGlkZXIuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGVsZW1lbnQgVGhlIGJhY2tncm91bmQgc2xpZGVyIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkc2VjdGlvbiBTZWN0aW9uIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmdzIEN1cnJlbnQgc2V0dGluZ3MuXG4gICAqL1xuICBzbGlkZXIoJHNsaWRlciwgJHNlY3Rpb24sIHNldHRpbmdzKSB7XG4gICAgbGV0IHsgYXV0b3BsYXkgfSA9IHNldHRpbmdzO1xuXG4gICAgaWYgKCRzbGlkZXIuZGF0YSgnYXV0b3BsYXknKSAmJiAkc2xpZGVyLmRhdGEoJ2F1dG9wbGF5JykgPj0gMTAwMCkge1xuICAgICAgYXV0b3BsYXkgPSAkc2xpZGVyLmRhdGEoJ2F1dG9wbGF5Jyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZXZlcnNlIG9yZGVyIG9mIGltYWdlcyBzbyB0aGUgdG9wIG9mIHN0YWNrXG4gICAgICogd2lsbCBiZSB0aGUgZmlyc3QgaW1hZ2UuXG4gICAgICovXG4gICAgJHNsaWRlci5maW5kKCdpbWcnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJGltZyA9ICQodGhpcyk7XG4gICAgICAkaW1nLmFkZENsYXNzKCdmYWRlIGluJyk7XG4gICAgICAkc2xpZGVyLnByZXBlbmQoJGltZyk7XG4gICAgfSk7XG5cbiAgICAkc2xpZGVyLmFkZENsYXNzKCdpbicpO1xuXG4gICAgJHNlY3Rpb24uZmluZCgnLmZzLWxvYWRlcicpLmZhZGVPdXQoKTtcblxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJGxhc3RJbWcgPSAkc2xpZGVyLmZpbmQoJ2ltZzpsYXN0LWNoaWxkJyk7XG5cbiAgICAgICRsYXN0SW1nLnJlbW92ZUNsYXNzKCdpbicpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkbGFzdEltZy5wcmVwZW5kVG8oJHNsaWRlcikuYWRkQ2xhc3MoJ2luJyk7XG4gICAgICB9LCBhdXRvcGxheSk7XG4gICAgfSwgYXV0b3BsYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIGEgYmFja2dyb3VuZCBpbWFnZSBwYXJhbGxheCBlZmZlY3QuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGVsZW1lbnQgVGhlIGJhY2tncm91bmQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9ICRzZWN0aW9uIFNlY3Rpb24gY29udGFpbmluZyBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3MgQ3VycmVudCBzZXR0aW5ncy5cbiAgICovXG4gIHBhcmFsbGF4KCRmaWd1cmUsICRzZWN0aW9uLCBzZXR0aW5ncykge1xuICAgIGNvbnN0IHsgJHdpbmRvdyB9ID0gZG9tO1xuICAgIGNvbnN0IHsgcGFyYWxsYXhDYWxjIH0gPSB0aGlzO1xuICAgIGNvbnN0ICRpbWcgPSAkZmlndXJlLmZpbmQoJ2ltZywgLmltZycpO1xuICAgIGxldCBwYXJhbGxheCA9IG51bGw7XG5cbiAgICAvKlxuICAgICAqIFdpbGwgb25seSBjYWxjdWxhdGUgaWYgYWxsIGFyZSB0cnVlOlxuICAgICAqXG4gICAgICogMS4gTm90IGEgdHJ1ZSBtb2JpbGUgZGV2aWNlIChsb29raW5nIGF0IHVzZXIgYWdlbnQpLlxuICAgICAqIDIuIFdpbmRvdyBpcyB0YWxsZXIgdGhhbiA1MDBweC5cbiAgICAgKiAzLiBXaW5kb3cgaXMgd2lkZXIgdGhhbiA5OTJweC5cbiAgICAgKi9cbiAgICBpZiAoIWlzTW9iaWxlKHRydWUpKSB7XG4gICAgICAvLyBQYXNzaW5nIGB0cnVlYCBkZW5vdGVzIGNoZWNraW5nIHZpZXdwb3J0IHNpemUuXG4gICAgICBwYXJhbGxheCA9IHBhcmFsbGF4Q2FsYygkZmlndXJlLCAkaW1nKTtcblxuICAgICAgaWYgKHBhcmFsbGF4KSB7XG4gICAgICAgICRpbWcuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM0QoLTUwJSwnICsgcGFyYWxsYXggKyAncHgsIDApJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJGZpZ3VyZS5hZGRDbGFzcygnaW4nKTtcblxuICAgICRzZWN0aW9uLmZpbmQoJy5mcy1sb2FkZXInKS5mYWRlT3V0KCk7XG5cbiAgICAvLyBBZGp1c3QgcGFyYWxsYXggcG9zaXRpb25pbmcgaWYgd2luZG93IGlzIHJlc2l6ZWQuXG4gICAgJHdpbmRvdy5vbignc2Nyb2xsIHJlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgLypcbiAgICAgICAqIFdpbGwgb25seSBjYWxjdWxhdGUgaWYgYWxsIGFyZSB0cnVlOlxuICAgICAgICpcbiAgICAgICAqIDEuIE5vdCBhIHRydWUgbW9iaWxlIGRldmljZSAobG9va2luZyBhdCB1c2VyIGFnZW50KS5cbiAgICAgICAqIDIuIFdpbmRvdyBpcyB0YWxsZXIgdGhhbiA1MDBweC5cbiAgICAgICAqIDMuIFdpbmRvdyBpcyB3aWRlciB0aGFuIDk5MnB4LlxuICAgICAgICpcbiAgICAgICAqIEBzZWUgaXNNb2JpbGUoKSBmdW5jdGlvbiBpbiBpbml0LmpzXG4gICAgICAgKi9cbiAgICAgIGlmICghaXNNb2JpbGUodHJ1ZSkpIHtcbiAgICAgICAgLy8gUGFzc2luZyBgdHJ1ZWAgZGVub3RlcyBjaGVja2luZyB2aWV3cG9ydCBzaXplLlxuICAgICAgICBwYXJhbGxheCA9IHBhcmFsbGF4Q2FsYygkZmlndXJlLCAkaW1nKTtcblxuICAgICAgICBpZiAocGFyYWxsYXgpIHtcbiAgICAgICAgICAkaW1nLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNEKC01MCUsJyArIHBhcmFsbGF4ICsgJ3B4LCAwKScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHBhcmFsbGF4IHBvc2l0aW9uIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGZpZ3VyZSBUaGUgYmFja2dyb3VuZCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGltZyAgICBJbWFnZSB0byBwb3NpdGlvbiB3aXRoaW4gZWxlbWVudC5cbiAgICovXG4gIHBhcmFsbGF4Q2FsYygkZmlndXJlLCAkaW1nKSB7XG4gICAgY29uc3QgeyAkd2luZG93IH0gPSBkb207XG4gICAgY29uc3QgaW1nSGVpZ2h0ID0gJGltZy5oZWlnaHQoKTtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSAkZmlndXJlLmhlaWdodCgpID4gMCA/ICRmaWd1cmUuaGVpZ2h0KCkgOiA1MDA7XG4gICAgY29uc3QgcGFyYWxsYXhEaXN0ID0gaW1nSGVpZ2h0IC0gY29udGFpbmVySGVpZ2h0O1xuICAgIGNvbnN0IGJvdHRvbSA9ICRmaWd1cmUub2Zmc2V0KCkudG9wICsgY29udGFpbmVySGVpZ2h0O1xuICAgIGNvbnN0IHRvcCA9ICRmaWd1cmUub2Zmc2V0KCkudG9wO1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OyAvLyBVc2luZyBgd2luZG93YCwgTk9UIGAkd2luZG93YDsgd2UgbmVlZCBhIGZyZXNoIGNhbGN1bGF0aW9uIGhlcmUuXG4gICAgY29uc3Qgd2luZG93Qm90dG9tID0gc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0O1xuICAgIGNvbnN0IHBlcmNlbnRTY3JvbGxlZCA9ICh3aW5kb3dCb3R0b20gLSB0b3ApIC8gKGNvbnRhaW5lckhlaWdodCArIHdpbmRvd0hlaWdodCk7XG5cbiAgICBpZiAoYm90dG9tID4gc2Nyb2xsVG9wICYmIHRvcCA8IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQocGFyYWxsYXhEaXN0ICogcGVyY2VudFNjcm9sbGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvbSwgaXNNb2JpbGUgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBkcm9wZG93blxuICogbWVudXMuXG4gKlxuICogQnkgZGVmYXVsdCBhbGwgSFRNTCBlbGVtZW50cyB3aXRoIGNsYXNzIGBmcy1tZW51YFxuICogYXJlIGF1dG9tYXRpY2FsbHkgYmluZGVkLlxuICpcbiAqIEFsc28sIG1lbnUgaXRlbXMgd2l0aCBjbGFzcyAnbm8tY2xpY2snIGFyZSBzZXR1cCB0b1xuICogcHJldmVudCB0aGUgZGVmYXVsdCBjbGljayBiZWhhdmlvci5cbiAqXG4gKiBAc3VtbWFyeSAgRHJvcGRvd24gTWVudXNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBNZW51LmpzXG4gKi9cbmNsYXNzIE1lbnUge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYG1lbnVgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRtZW51ID0gJChlbGVtZW50KTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmICgkbWVudS5kYXRhKCdkZWxheScpIHx8IDAgPT09ICRtZW51LmRhdGEoJ2RlbGF5JykpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MuZGVsYXkgPSAkbWVudS5kYXRhKCdkZWxheScpO1xuICAgIH1cblxuICAgIHRoaXMudGltZXIgPSB7fTsgLy8gS2VlcCB0cmFjayBvZiBkZWxheWVkIHRyYW5zaXRpb25zLlxuICAgIHRoaXMuZmx5b3V0ID0gdGhpcy5mbHlvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3cgPSB0aGlzLnNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGUgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTtcblxuICAgIGNvbnN0IHsgZmx5b3V0LCBzaG93LCBoaWRlIH0gPSB0aGlzO1xuXG4gICAgJG1lbnUucmVtb3ZlQ2xhc3MoJ25vLWpzJyk7XG5cbiAgICAvKlxuICAgICAqIFRyaWdnZXJzIGRyb3Bkb3duIHNob3cgYW5kIGhpZGUsIHVwb24gbW91c2VlbnRlclxuICAgICAqIGFuZCBtb3VzZWxlYXZlLlxuICAgICAqL1xuICAgICRtZW51XG4gICAgICAuZmluZCgnbGknKVxuICAgICAgLmhhcyh0aGlzLnNldHRpbmdzLmRyb3BEb3duU2VsZWN0b3IpXG4gICAgICAuYWRkQ2xhc3MoJ21lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKVxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICR0cmlnZ2VyID0gJCh0aGlzKTtcbiAgICAgICAgZmx5b3V0KCR0cmlnZ2VyKTsgLy8gRGV0ZXJtaW5lIGFuZCBhZGRzIGNsYXNzIGZvciBmbHlvdXQgZGlyZWN0aW9uLlxuICAgICAgICBzaG93KCR0cmlnZ2VyKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaGlkZSgkKHRoaXMpKTtcbiAgICAgIH0pXG4gICAgICAuZmluZCgnPiBhJylcbiAgICAgIC5hcHBlbmQoJzxzcGFuIGNsYXNzPVwic3ViLWluZGljYXRvclwiPjwvc3Bhbj4nKTtcblxuICAgIC8vIEFkZHMgQ1NTIGNsYXNzZXMgdG8gZWFjaCBsZXZlbCBvZiB0aGUgbWVudSwgMS0zLlxuICAgICRtZW51LmNoaWxkcmVuKCdsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5hZGRDbGFzcygnbGV2ZWwtMScpXG4gICAgICAgIC5jaGlsZHJlbigndWwnKVxuICAgICAgICAuY2hpbGRyZW4oJ2xpJylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdsZXZlbC0yJylcbiAgICAgICAgICAgIC5jaGlsZHJlbigndWwnKVxuICAgICAgICAgICAgLmNoaWxkcmVuKCdsaScpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGV2ZWwtMycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIG1vYmlsZSB0b3VjaCBzdXBwb3J0LlxuICAgIGlmIChpc01vYmlsZSgpKSB7XG4gICAgICAvLyBUYXAgYW55d2hlcmUgb24gaU9TIHRvIHVuZm9jdXMgYSBzdWJtZW51LlxuICAgICAgJCgnaHRtbCcpXG4gICAgICAgIC5jc3MoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgICAgLm9uKCdjbGljaycsICQubm9vcCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbWVudSBvcHRpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWxheTogNTAwLFxuICAgICAgZHJvcERvd25TZWxlY3RvcjogJ3VsOm5vdCgubWVnYS1zdWItbWVudSksIC5mcy1tZWdhJ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgZGlyZWN0aW9uIHRoZSBkcm9wZG93biBtZW51IHNob3VsZFxuICAgKiBmbHlvdXQgdG93YXJkcy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBUaGUgcGFyZW50IG1lbnUgaXRlbSwgZm9yIHdoaWNoIHRoZSBkcm9wZG93biBiZWxvbmdzIHRvLlxuICAgKi9cbiAgZmx5b3V0KCR0cmlnZ2VyKSB7XG4gICAgaWYgKCEkdHJpZ2dlci5oYXNDbGFzcygnbGV2ZWwtMScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBkcm9wRG93blNlbGVjdG9yIH0gPSB0aGlzLnNldHRpbmdzO1xuICAgIGNvbnN0IHsgJGJvZHkgfSA9IGRvbTtcbiAgICBjb25zdCAkZmx5b3V0ID0gJHRyaWdnZXIuY2hpbGRyZW4oZHJvcERvd25TZWxlY3Rvcik7XG4gICAgbGV0IGxvY2F0aW9uID0gJHRyaWdnZXIub2Zmc2V0KCk7XG4gICAgbGV0IHNwYWNlID0gMjAwO1xuXG4gICAgaWYgKCRib2R5Lmhhc0NsYXNzKCdydGwnKSkge1xuICAgICAgbG9jYXRpb24gPSBsb2NhdGlvblsncmlnaHQnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24gPSBsb2NhdGlvblsnbGVmdCddO1xuICAgIH1cblxuICAgIGlmICgkZmx5b3V0LmZpbmQoJy5sZXZlbC0zJykubGVuZ3RoID4gMCkge1xuICAgICAgc3BhY2UgKz0gc3BhY2U7IC8vIFNwYWNlIGRvdWJsZXMgZm9yIGxldmVsIDMuXG4gICAgfVxuXG4gICAgLy8gQ2FuJ3QgdXNlZCBjYWNoZWQgd2luZG93IGhlcmUuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIC0gbG9jYXRpb24gPD0gc3BhY2UpIHtcbiAgICAgICRmbHlvdXQuYWRkQ2xhc3MoJ3JldmVyc2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGZseW91dC5yZW1vdmVDbGFzcygncmV2ZXJzZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBhIGRyb3Bkb3duIG1lbnUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRyaWdnZXIgVGhlIHBhcmVudCBtZW51IGl0ZW0sIGZvciB3aGljaCB0aGUgZHJvcGRvd24gYmVsb25ncyB0by5cbiAgICovXG4gIHNob3coJHRyaWdnZXIpIHtcbiAgICBjb25zdCB7IGRyb3BEb3duU2VsZWN0b3IgfSA9IHRoaXMuc2V0dGluZ3M7XG4gICAgY29uc3QgbGV2ZWwgPSB0aGlzLmdldExldmVsKCR0cmlnZ2VyKTtcbiAgICBjb25zdCAkc2libGluZ3MgPSAkdHJpZ2dlci5zaWJsaW5ncygpLmZpbmQoZHJvcERvd25TZWxlY3Rvcik7XG4gICAgY29uc3QgJHRhcmdldCA9ICR0cmlnZ2VyLmNoaWxkcmVuKGRyb3BEb3duU2VsZWN0b3IpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJbbGV2ZWxdKTtcblxuICAgICRzaWJsaW5ncy5yZW1vdmVDbGFzcygnaW4nKTtcblxuICAgICR0YXJnZXQuYWRkQ2xhc3MoJ3Nob3cgZmFkZScpO1xuXG4gICAgdGhpcy50aW1lcltsZXZlbF0gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJHNpYmxpbmdzLnJlbW92ZUNsYXNzKCdzaG93IGZhZGUnKTtcbiAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2luJyk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBhIGRyb3Bkb3duIG1lbnUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRyaWdnZXIgVGhlIHBhcmVudCBtZW51IGl0ZW0sIGZvciB3aGljaCB0aGUgZHJvcGRvd24gYmVsb25ncyB0by5cbiAgICovXG4gIGhpZGUoJHRyaWdnZXIsIHNldHRpbmdzKSB7XG4gICAgY29uc3QgeyBkcm9wRG93blNlbGVjdG9yLCBkZWxheSB9ID0gdGhpcy5zZXR0aW5ncztcbiAgICBjb25zdCBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoJHRyaWdnZXIpO1xuICAgIGNvbnN0ICRmbHlvdXQgPSAkdHJpZ2dlci5jaGlsZHJlbihkcm9wRG93blNlbGVjdG9yKTtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyW2xldmVsXSk7XG5cbiAgICB0aGlzLnRpbWVyW2xldmVsXSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkZmx5b3V0LnJlbW92ZUNsYXNzKCdpbicpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkZmx5b3V0LnJlbW92ZUNsYXNzKCdzaG93IGZhZGUnKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSwgZGVsYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIGN1cnJlbnQgbGV2ZWwgb2YgdGhlIGRyb3Bkb3duIHBhcmVudFxuICAgKiBpdGVtIGJlaW5nIHRyaWdnZXJlZC5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gJHRyaWdnZXIgVGhlIHBhcmVudCBtZW51IGl0ZW0sIGZvciB3aGljaCB0aGUgZHJvcGRvd24gYmVsb25ncyB0by5cbiAgICogQHJldHVybiB7c3RyaW5nfSBDdXJyZW50IG1lbnUgbGV2ZWwsIGBsZXZlbC0xYCwgYGxldmVsLTJgIG9yIGBsZXZlbC0zYC5cbiAgICovXG4gIGdldExldmVsKCR0cmlnZ2VyKSB7XG4gICAgaWYgKCR0cmlnZ2VyLmhhc0NsYXNzKCdsZXZlbC0zJykpIHtcbiAgICAgIHJldHVybiAnbGV2ZWwtMyc7XG4gICAgfSBlbHNlIGlmICgkdHJpZ2dlci5oYXNDbGFzcygnbGV2ZWwtMicpKSB7XG4gICAgICByZXR1cm4gJ2xldmVsLTInO1xuICAgIH1cbiAgICByZXR1cm4gJ2xldmVsLTEnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCIvKipcbiAqIEFkZHMgc3VibWVudSBuYXZpZ2F0aW9uIHRvIG1vYmlsZSBtZW51cy5cbiAqXG4gKiBAc3VtbWFyeSAgTW9iaWxlIE1lbnVzXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgbW9iaWxlLW1lbnUuanNcbiAqL1xuY2xhc3MgTW9iaWxlTWVudSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgbW9iaWxlLW1lbnVgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zIChjdXJyZW50bHkgbm90IHVzZWQpLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICRtZW51ID0gJChlbGVtZW50KTtcbiAgICBjb25zdCAkdHJpZ2dlcnMgPSAkbWVudS5maW5kKCdsaScpLmhhcygndWwnKTtcbiAgICBjb25zdCB7IHNob3csIGhpZGUgfSA9IHRoaXM7XG5cbiAgICAkdHJpZ2dlcnNcbiAgICAgIC5hZGRDbGFzcygnbWVudS1pdGVtLWhhcy1jaGlsZHJlbicpXG4gICAgICAuY2hpbGRyZW4oJy5tZW51LWJ0bicpXG4gICAgICAub24oJ2NsaWNrLmZzLm1vYmlsZS1tZW51JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2hvdygkKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5hcHBlbmQoJzxzcGFuIGNsYXNzPVwic3ViLWluZGljYXRvclwiPjwvc3Bhbj4nKTtcblxuICAgICR0cmlnZ2Vyc1xuICAgICAgLmZpbmQoJ3VsJylcbiAgICAgIC5wcmVwZW5kKCc8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1lbnUtYnRuIGJhY2tcIj48c3BhbiBjbGFzcz1cInN1Yi1pbmRpY2F0b3JcIj48L3NwYW4+PC9hPjwvbGk+JylcbiAgICAgIC5maW5kKCcuYmFjaycpXG4gICAgICAub24oJ2NsaWNrLmZzLm1vYmlsZS1tZW51LWJhY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoaWRlKCQodGhpcykpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICRtZW51LmhlaWdodCgkbWVudS5wcm9wKCdzY3JvbGxIZWlnaHQnKSk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhIHN1Ym1lbnUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRyaWdnZXIgUGFyZW50IG1lbnUgaXRlbSB0cmlnZ2VyaW5nIHN1Ym1lbnUuXG4gICAqL1xuICBzaG93KCR0cmlnZ2VyKSB7XG4gICAgJHRyaWdnZXJcbiAgICAgIC5jbG9zZXN0KCdsaScpXG4gICAgICAuY2hpbGRyZW4oJ3VsJylcbiAgICAgIC5hZGRDbGFzcygnb24nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIGEgc3VibWVudS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBQYXJlbnQgbWVudSBpdGVtIHRyaWdnZXJpbmcgc3VibWVudS5cbiAgICovXG4gIGhpZGUoJHRyaWdnZXIpIHtcbiAgICAkdHJpZ2dlci5jbG9zZXN0KCd1bCcpLnJlbW92ZUNsYXNzKCdvbicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEFkZHMgdGFicyBibG9jayBmdW5jdGlvbmFsaXR5LCB3aGljaCBhbGxvd3NcbiAqIHRvZ2dsaW5nIGJldHdlZW4gdGFiIGNvbnRlbnQgcGFuZXMuXG4gKlxuICogQHN1bW1hcnkgIFRhYnNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBUYWJiZWQuanNcbiAqL1xuY2xhc3MgVGFiYmVkIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGB0YWJzYCBibG9jayBvbiBhIERPTSBlbGVtZW50LFxuICAgKiB3aGVuIGJpbmRlZCB0aHJvdWdoIGpRdWVyeS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQmxvY2sgb3B0aW9ucyAoY3VycmVudGx5IG5vdCB1c2VkKS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCAkdGFicyA9ICQoZWxlbWVudCk7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgY29uc3QgeyAkd2luZG93IH0gPSBkb207XG5cbiAgICB0aGlzLmRlZXBMaW5rID0gdGhpcy5kZWVwTGluay5iaW5kKHRoaXMpO1xuXG4gICAgY29uc3QgeyBzaG93LCBtYXRjaEhlaWdodCwgZGVlcExpbmsgfSA9IHRoaXM7XG5cbiAgICAvKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBiZWluZyBhZGRlZCB0byB0aGUgdGFicyBlbGVtZW50XG4gICAgICogY2FuIG92ZXJyaWRlIHRoZSBoZWlnaHQgYW5kIGRlZXBMaW5rIG9wdGlvbnMuXG4gICAgICovXG4gICAgaWYgKCR0YWJzLmhhc0NsYXNzKCd0YWJzLWZpeGVkLWhlaWdodCcpKSB7XG4gICAgICBzZXR0aW5ncy5oZWlnaHQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICgkdGFicy5oYXNDbGFzcygndGFicy1kZWVwLWxpbmsnKSkge1xuICAgICAgc2V0dGluZ3MuZGVlcExpbmsgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBhY2Nlc3NpYmxpdHkuXG4gICAgJHRhYnMuZmluZCgnLnRhYi1wYW5lJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICRwYW5lID0gJCh0aGlzKTtcblxuICAgICAgaWYgKCRwYW5lLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAkcGFuZS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkcGFuZS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVG9nZ2xlIHRhYiBjb250ZW50LlxuICAgICR0YWJzXG4gICAgICAuZmluZChzZXR0aW5ncy5uYXZTZWxlY3RvcilcbiAgICAgIC5maW5kKCdhJylcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzaG93KCR0YWJzLCAkKHRoaXMpLCBzZXR0aW5ncyk7XG4gICAgICB9KTtcblxuICAgIC8vIFNldHVwIGZpeGVkIGhlaWdodCBhbmQvb3IgZGVlcC1saW5raW5nLlxuICAgIGlmIChzZXR0aW5ncy5oZWlnaHQgfHwgc2V0dGluZ3MuZGVlcExpbmspIHtcbiAgICAgICR3aW5kb3cub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTWF0Y2ggaGVpZ2h0IG9mIGFsbCB0YWJzIHRvIHRhbGxlc3QuXG4gICAgICAgIGlmIChzZXR0aW5ncy5oZWlnaHQpIHtcbiAgICAgICAgICBtYXRjaEhlaWdodCgkdGFicyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXYXRjaCBmb3IgZGVlcC1saW5raW5nLlxuICAgICAgICBpZiAoc2V0dGluZ3MuZGVlcExpbmspIHtcbiAgICAgICAgICBkZWVwTGluaygkdGFicywgc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB0YWJzIG9wdGlvbnMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hdlNlbGVjdG9yOiAnLm1lbnUtYmFyLCAuc3VibWVudS1iYXIsIC5zdWJtZW51LXRhYnMsIC5zdWJtZW51LXBpbGxzJyxcbiAgICAgIGhlaWdodDogZmFsc2UsXG4gICAgICBkZWVwTGluazogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYSB0YWIuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRhYnMgICAgVGhlIGJpbmRlZCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBMaW5rICh0YWIpIHdoaWNoIGlzIHRyaWdnZXJpbmcgbmV3IGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAgICovXG4gIHNob3coJHRhYnMsICR0cmlnZ2VyLCBzZXR0aW5ncykge1xuICAgIGNvbnN0ICRuYXYgPSAkdHJpZ2dlci5jbG9zZXN0KHNldHRpbmdzLm5hdlNlbGVjdG9yKTtcbiAgICBjb25zdCB0YXJnZXQgPSAkdHJpZ2dlci5hdHRyKCdocmVmJykuc3BsaXQoJyMnKVsxXTtcblxuICAgICRuYXYuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAkdHJpZ2dlci5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICR0YWJzXG4gICAgICAuZmluZCgnLnRhYi1wYW5lJylcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2luJylcbiAgICAgIC5oaWRlKClcbiAgICAgIC5yZW1vdmVDbGFzcygnZmFkZScpO1xuXG4gICAgJHRhYnNcbiAgICAgIC5maW5kKCcjJyArIHRhcmdldClcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIC5hZGRDbGFzcygnZmFkZScpXG4gICAgICAuc2hvdygwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhbGwgdGFiIGNvbnRlbnQgcGFuZXMgdG8gaGF2ZSBlcXVhbCBoZWlnaHQsIHRvXG4gICAqIHRoZSB0YWxsZXN0IG9uZS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGFicyBUaGUgYmluZGVkIGpRdWVyeSBET00gZWxlbWVudC5cbiAgICovXG4gIG1hdGNoSGVpZ2h0KCR0YWJzKSB7XG4gICAgbGV0IHRhbGxlc3QgPSAwO1xuXG4gICAgJHRhYnMuZmluZCgnLnRhYi1wYW5lJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICRwYW5lID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSAkcGFuZS5zaG93KCkub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgaWYgKCEkcGFuZS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgJHBhbmUuaGlkZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudEhlaWdodCA+IHRhbGxlc3QpIHtcbiAgICAgICAgdGFsbGVzdCA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkdGFicy5maW5kKCcudGFiLXBhbmUnKS5oZWlnaHQodGFsbGVzdCk7XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggZm9yIHRhYiBkZWVwLWxpbmtpbmcuXG4gICAqXG4gICAqIFRhYiBkZWVwLWxpbmtpbmcgaXMgd2hlbiB0aGUgdXNlciBwYXNzZXMgYSB0YWIgSURcbiAgICogdGhyb3VnaCB0aGUgVVJMIG9mIHRoZSB3ZWJwYWdlIHRvIHRyaWdnZXIgb3BlbmluZ1xuICAgKiBhIHNwZWNpZmljIHRhYiBwYW5lLlxuICAgKlxuICAgKiBUbyBkZWVwIGxpbmsgdG8gYSB0YWIsIHlvdSBuZWVkIHRvIHByZWZpeFxuICAgKiB0aGUgSUQgb2YgdGhlIHRhYiB3aXRoIFwidGFiX1wiIGxpa2UgdGhpczpcbiAgICpcbiAgICogYGh0dHA6Ly95b3VyLXNpdGUuY29tL3BhZ2Utd2l0aC10YWJzLyN0YWJfaWRfb2ZfdGFiYFxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0YWJzICAgIFRoZSBiaW5kZWQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gICAqL1xuICBkZWVwTGluaygkdGFicywgc2V0dGluZ3MpIHtcbiAgICBsZXQgaGFzaCA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2g7XG5cbiAgICBpZiAoaGFzaCAmJiAtMSAhPSBoYXNoLmluZGV4T2YoJ3RhYl8nKSkge1xuICAgICAgaGFzaCA9IGhhc2gucmVwbGFjZSgndGFiXycsICcnKTtcblxuICAgICAgdGhpcy5zaG93KCR0YWJzLCAkdGFicy5maW5kKCdhW2hyZWY9XCInICsgaGFzaCArICdcIl0gJyksIHNldHRpbmdzKTtcblxuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICR0YWJzLm9mZnNldCgpLnRvcCAtIDIwXG4gICAgICAgIH0sXG4gICAgICAgIDgwMFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiYmVkO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBBZGRzIHRvZ2dsZXMgYmxvY2sgZnVuY3Rpb25hbGl0eSwgd2hpY2ggYWxsb3dzXG4gKiB0b2dnbGUgZGlzcGxheSBvZiBjb250ZW50LlxuICpcbiAqIEBzdW1tYXJ5ICBUb2dnbGVcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBUb2dnbGUuanNcbiAqL1xuY2xhc3MgVG9nZ2xlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGB0YWJzYCBibG9jayBvbiBhIERPTSBlbGVtZW50LFxuICAgKiB3aGVuIGJpbmRlZCB0aHJvdWdoIGpRdWVyeS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQmxvY2sgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCAkdG9nZ2xlID0gJChlbGVtZW50KTtcbiAgICBjb25zdCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBjb25zdCB7IG9wZW4sIGNsb3NlIH0gPSB0aGlzO1xuXG4gICAgbGV0ICRncm91cCA9IG51bGw7XG5cbiAgICBpZiAoJHRvZ2dsZS5wYXJlbnRzKCcudG9nZ2xlLWdyb3VwJykubGVuZ3RoID4gMCkge1xuICAgICAgJGdyb3VwID0gJHRvZ2dsZS5jbG9zZXN0KCcudG9nZ2xlLWdyb3VwJyk7XG4gICAgfVxuXG4gICAgaWYgKCRncm91cCAmJiAkZ3JvdXAuaGFzQ2xhc3MoJ3RvZ2dsZS1hY2NvcmRpb24nKSkge1xuICAgICAgc2V0dGluZ3MuYWNjb3JkaW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgYWNjZXNzaWJsaXR5LlxuICAgICR0b2dnbGUuZmluZCgnLnRvZ2dsZS1jb250ZW50JykuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgIC8vIE9wZW4gaW5pdGlhbGx5IGlmIGhhcyBjbGFzcyBgdG9nZ2xlLWV4cGFuZGVkYC5cbiAgICBpZiAoJHRvZ2dsZS5oYXNDbGFzcygndG9nZ2xlLWV4cGFuZGVkJykpIHtcbiAgICAgIG9wZW4oJHRvZ2dsZSwgc2V0dGluZ3Muc3BlZWQpO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCB0b2dnbGUgY2xpY2suXG4gICAgJHRvZ2dsZS5maW5kKCcudG9nZ2xlLXRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICQodGhpcykuYmx1cigpO1xuXG4gICAgICBpZiAoJHRvZ2dsZS5oYXNDbGFzcygndG9nZ2xlLWV4cGFuZGVkJykpIHtcbiAgICAgICAgLy8gVG9nZ2xlIGlzIG9wZW47IHNvIGNsb3NlIGl0LlxuICAgICAgICBjbG9zZSgkdG9nZ2xlLCBzZXR0aW5ncy5zcGVlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoJGdyb3VwICYmIHNldHRpbmdzLmFjY29yZGlvbikge1xuICAgICAgICAgICRncm91cC5maW5kKCcuZnMtdG9nZ2xlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNsb3NlKCQodGhpcyksIHNldHRpbmdzLnNwZWVkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvZ2dsZSBpcyBjbG9zZWQ7IHNvIG9wZW4gaXQuXG4gICAgICAgIG9wZW4oJHRvZ2dsZSwgc2V0dGluZ3Muc3BlZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdG9nZ2xlIG9wdGlvbnMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNwZWVkOiAyMDAsXG4gICAgICBhY2NvcmRpb246IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGEgdG9nZ2xlLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0b2dnbGUgVGhlIGJpbmRlZCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZCAgIEFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXG4gICAqL1xuICBvcGVuKCR0b2dnbGUsIHNwZWVkKSB7XG4gICAgJHRvZ2dsZVxuICAgICAgLmFkZENsYXNzKCd0b2dnbGUtZXhwYW5kZWQnKVxuICAgICAgLmZpbmQoJy50b2dnbGUtY29udGVudCcpXG4gICAgICAuc3RvcCh0cnVlLCB0cnVlKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgLnNsaWRlRG93bihzcGVlZCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYSB0b2dnbGUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRvZ2dsZSBUaGUgYmluZGVkIGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkICAgQW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIGNsb3NlKCR0b2dnbGUsIHNwZWVkKSB7XG4gICAgJHRvZ2dsZVxuICAgICAgLnJlbW92ZUNsYXNzKCd0b2dnbGUtZXhwYW5kZWQnKVxuICAgICAgLmZpbmQoJy50b2dnbGUtY29udGVudCcpXG4gICAgICAuc3RvcCh0cnVlLCB0cnVlKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgIC5zbGlkZVVwKHNwZWVkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIEFkZHMgdG9vbHRpcCBibG9jayBmdW5jdGlvbmFsaXR5LlxuICpcbiAqIEluc3BpcmVkIGJ5IEJvb3RzdHJhcCAzJ3MgdG9vbHRpcHMuanMsIHdoaWNoIHdhcyBpbnNwaXJlZFxuICogYnkgdGhlIG9yaWdpbmFsIGpRdWVyeS50aXBzeSBieSBKYXNvbiBGcmFtZS5cbiAqXG4gKiBAc3VtbWFyeSAgVG9vbHRpcFxuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIFRvb2x0aXAuanNcbiAqL1xuY2xhc3MgVG9vbHRpcCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgdG9vbHRpcGAgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IG51bGw7XG4gICAgdGhpcy5lbmFibGVkID0gbnVsbDtcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuaG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgdGhpcy4kZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5pblN0YXRlID0gbnVsbDtcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgIHRoaXMuJHZpZXdwb3J0ID1cbiAgICAgIHRoaXMuc2V0dGluZ3Mudmlld3BvcnQgJiZcbiAgICAgICQoXG4gICAgICAgICQuaXNGdW5jdGlvbih0aGlzLnNldHRpbmdzLnZpZXdwb3J0KVxuICAgICAgICAgID8gdGhpcy5zZXR0aW5ncy52aWV3cG9ydC5jYWxsKHRoaXMsIHRoaXMuJGVsZW1lbnQpXG4gICAgICAgICAgOiB0aGlzLnNldHRpbmdzLnZpZXdwb3J0LnNlbGVjdG9yIHx8IHRoaXMuc2V0dGluZ3Mudmlld3BvcnRcbiAgICAgICk7XG4gICAgdGhpcy5pblN0YXRlID0geyBjbGljazogZmFsc2UsIGhvdmVyOiBmYWxzZSwgZm9jdXM6IGZhbHNlIH07XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWVudGVyLnRvb2x0aXAnLCBmYWxzZSwgJC5wcm94eSh0aGlzLmVudGVyLCB0aGlzKSk7XG4gICAgdGhpcy4kZWxlbWVudC5vbignbW91c2VsZWF2ZS50b29sdGlwJywgZmFsc2UsICQucHJveHkodGhpcy5sZWF2ZSwgdGhpcykpO1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignZm9jdXNpbi50b29sdGlwJywgZmFsc2UsICQucHJveHkodGhpcy5lbnRlciwgdGhpcykpO1xuICAgIHRoaXMuJGVsZW1lbnQub24oJ2ZvY3Vzb3V0LnRvb2x0aXAnLCBmYWxzZSwgJC5wcm94eSh0aGlzLmxlYXZlLCB0aGlzKSk7XG5cbiAgICB0aGlzLmdldERlbGVnYXRlU2V0dGluZ3MgPSB0aGlzLmdldERlbGVnYXRlU2V0dGluZ3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVudGVyID0gdGhpcy5lbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaXNJblN0YXRlVHJ1ZSA9IHRoaXMuaXNJblN0YXRlVHJ1ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGVhdmUgPSB0aGlzLmxlYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG93ID0gdGhpcy5zaG93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5hcHBseVBsYWNlbWVudCA9IHRoaXMuYXBwbHlQbGFjZW1lbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldENvbnRlbnQgPSB0aGlzLnNldENvbnRlbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGUgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhc0NvbnRlbnQgPSB0aGlzLmhhc0NvbnRlbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldCA9IHRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VGl0bGUgPSB0aGlzLmdldFRpdGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRVSUQgPSB0aGlzLmdldFVJRC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGlwID0gdGhpcy50aXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFycm93ID0gdGhpcy5hcnJvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZW5hYmxlID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRpc2FibGUgPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUVuYWJsZWQgPSB0aGlzLnRvZ2dsZUVuYWJsZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXN0cm95ID0gdGhpcy5kZXN0cm95LmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB0b29sdGlwIG9wdGlvbnMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICB0ZW1wbGF0ZTpcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJmcy10b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICB2aWV3cG9ydDoge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBwYWRkaW5nOiAwXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdldERlbGVnYXRlU2V0dGluZ3MoKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcblxuICAgIHRoaXMuX3NldHRpbmdzICYmXG4gICAgICAkLmVhY2godGhpcy5fc2V0dGluZ3MsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMuZGVmYXVsdHNba2V5XSkge1xuICAgICAgICAgIHNldHRpbmdzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2V0dGluZ3M7XG4gIH1cblxuICBlbnRlcihvYmopIHtcbiAgICBsZXQgc2VsZiA9IG9iaiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IgPyBvYmogOiAkKG9iai5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJyk7XG5cbiAgICBpZiAoIXNlbGYpIHtcbiAgICAgIHNlbGYgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihvYmouY3VycmVudFRhcmdldCwgdGhpcy5nZXREZWxlZ2F0ZVNldHRpbmdzKCkpO1xuICAgICAgJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcsIHNlbGYpO1xuICAgIH1cblxuICAgIGlmIChvYmogaW5zdGFuY2VvZiAkLkV2ZW50KSB7XG4gICAgICBzZWxmLmluU3RhdGVbb2JqLnR5cGUgPT0gJ2ZvY3VzaW4nID8gJ2ZvY3VzJyA6ICdob3ZlciddID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50aXAoKS5oYXNDbGFzcygnaW4nKSB8fCBzZWxmLmhvdmVyU3RhdGUgPT0gJ2luJykge1xuICAgICAgc2VsZi5ob3ZlclN0YXRlID0gJ2luJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLmhvdmVyU3RhdGUgPSAnaW4nO1xuXG4gICAgcmV0dXJuIHNlbGYuc2hvdygpO1xuICB9XG5cbiAgaXNJblN0YXRlVHJ1ZSgpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5pblN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5pblN0YXRlW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGVhdmUob2JqKSB7XG4gICAgbGV0IHNlbGYgPSBvYmogaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yID8gb2JqIDogJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcpO1xuXG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICBzZWxmID0gbmV3IHRoaXMuY29uc3RydWN0b3Iob2JqLmN1cnJlbnRUYXJnZXQsIHRoaXMuZ2V0RGVsZWdhdGVTZXR0aW5ncygpKTtcbiAgICAgICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnLCBzZWxmKTtcbiAgICB9XG5cbiAgICBpZiAob2JqIGluc3RhbmNlb2YgJC5FdmVudCkge1xuICAgICAgc2VsZi5pblN0YXRlW29iai50eXBlID09ICdmb2N1c291dCcgPyAnZm9jdXMnIDogJ2hvdmVyJ10gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5pc0luU3RhdGVUcnVlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLmhvdmVyU3RhdGUgPSAnb3V0JztcblxuICAgIHJldHVybiBzZWxmLmhpZGUoKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgbGV0IGUgPSAkLkV2ZW50KCdzaG93LmZzLnRvb2x0aXAnKTtcblxuICAgIGlmICh0aGlzLmhhc0NvbnRlbnQoKSAmJiB0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKTtcblxuICAgICAgbGV0IGluRG9tID0gJC5jb250YWlucyh0aGlzLiRlbGVtZW50WzBdLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLiRlbGVtZW50WzBdKTtcblxuICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWluRG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgbGV0ICR0aXAgPSB0aGlzLnRpcCgpO1xuICAgICAgbGV0IHRpcElkID0gdGhpcy5nZXRVSUQoJ3Rvb2x0aXAnKTtcblxuICAgICAgdGhpcy5zZXRDb250ZW50KCk7XG4gICAgICAkdGlwLmF0dHIoJ2lkJywgdGlwSWQpO1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpO1xuXG4gICAgICAkdGlwLmFkZENsYXNzKCdmYWRlJyk7XG5cbiAgICAgIGxldCBwbGFjZW1lbnQgPSB0aGlzLnNldHRpbmdzLnBsYWNlbWVudDtcbiAgICAgIGxldCBhdXRvVG9rZW4gPSAvXFxzP2F1dG8/XFxzPy9pO1xuICAgICAgbGV0IGF1dG9QbGFjZSA9IGF1dG9Ub2tlbi50ZXN0KHBsYWNlbWVudCk7XG5cbiAgICAgIGlmIChhdXRvUGxhY2UpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnJlcGxhY2UoYXV0b1Rva2VuLCAnJykgfHwgJ3RvcCc7XG4gICAgICB9XG5cbiAgICAgICR0aXBcbiAgICAgICAgLmRldGFjaCgpXG4gICAgICAgIC5jc3MoeyB0b3A6IDAsIGxlZnQ6IDAsIGRpc3BsYXk6ICdibG9jaycgfSlcbiAgICAgICAgLmFkZENsYXNzKHBsYWNlbWVudClcbiAgICAgICAgLmRhdGEoJ2ZzLnRvb2x0aXAnLCB0aGlzKTtcblxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY29udGFpbmVyKSB7XG4gICAgICAgICR0aXAuYXBwZW5kVG8odGhpcy5zZXR0aW5ncy5jb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHRpcC5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnNlcnRlZC5mcy50b29sdGlwJyk7XG5cbiAgICAgIGxldCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgICBsZXQgYWN0dWFsV2lkdGggPSAkdGlwWzBdLm9mZnNldFdpZHRoO1xuICAgICAgbGV0IGFjdHVhbEhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBpZiAoYXV0b1BsYWNlKSB7XG4gICAgICAgIGxldCBvcmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICAgIGxldCB2aWV3cG9ydERpbSA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy4kdmlld3BvcnQpO1xuXG4gICAgICAgIGlmICgnYm90dG9tJyA9PSBwbGFjZW1lbnQgJiYgcG9zLmJvdHRvbSArIGFjdHVhbEhlaWdodCA+IHZpZXdwb3J0RGltLmJvdHRvbSkge1xuICAgICAgICAgIHBsYWNlbWVudCA9ICd0b3AnO1xuICAgICAgICB9IGVsc2UgaWYgKCd0b3AnID09IHBsYWNlbWVudCAmJiBwb3MudG9wIC0gYWN0dWFsSGVpZ2h0IDwgdmlld3BvcnREaW0udG9wKSB7XG4gICAgICAgICAgcGxhY2VtZW50ID0gJ2JvdHRvbSc7XG4gICAgICAgIH1cblxuICAgICAgICAkdGlwLnJlbW92ZUNsYXNzKG9yZ1BsYWNlbWVudCkuYWRkQ2xhc3MocGxhY2VtZW50KTtcbiAgICAgIH1cblxuICAgICAgbGV0IGNhbGN1bGF0ZWRPZmZzZXQgPSB0aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQocGxhY2VtZW50LCBwb3MsIGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQpO1xuXG4gICAgICB0aGlzLmFwcGx5UGxhY2VtZW50KGNhbGN1bGF0ZWRPZmZzZXQsIHBsYWNlbWVudCk7XG5cbiAgICAgIGxldCBjb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcHJldkhvdmVyU3RhdGUgPSB0aGF0LmhvdmVyU3RhdGU7XG5cbiAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdzaG93bi5mcy50b29sdGlwJyk7XG4gICAgICAgIHRoYXQuaG92ZXJTdGF0ZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKCdvdXQnID09IHByZXZIb3ZlclN0YXRlKSB7XG4gICAgICAgICAgdGhhdC5sZWF2ZSh0aGF0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBhcHBseVBsYWNlbWVudChvZmZzZXQsIHBsYWNlbWVudCkge1xuICAgIGNvbnN0ICR0aXAgPSB0aGlzLnRpcCgpO1xuICAgIGNvbnN0IHdpZHRoID0gJHRpcFswXS5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSAkdGlwWzBdLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSBwYXJzZUludCgkdGlwLmNzcygnbWFyZ2luLXRvcCcpLCAxMCk7XG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IHBhcnNlSW50KCR0aXAuY3NzKCdtYXJnaW4tbGVmdCcpLCAxMCk7XG5cbiAgICBvZmZzZXQudG9wICs9IG1hcmdpblRvcDtcbiAgICBvZmZzZXQubGVmdCArPSBtYXJnaW5MZWZ0O1xuXG4gICAgLypcbiAgICAgKiAkLmZuLm9mZnNldCBkb2Vzbid0IHJvdW5kIHBpeGVsIHZhbHVlczsgc28gd2UgdXNlXG4gICAgICogc2V0T2Zmc2V0IGRpcmVjdGx5IHdpdGggb3VyIG93biBmdW5jdGlvbiBCLTAuXG4gICAgICovXG4gICAgJC5vZmZzZXQuc2V0T2Zmc2V0KFxuICAgICAgJHRpcFswXSxcbiAgICAgICQuZXh0ZW5kKFxuICAgICAgICB7XG4gICAgICAgICAgdXNpbmc6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAkdGlwLmNzcyh7XG4gICAgICAgICAgICAgIHRvcDogTWF0aC5yb3VuZChwcm9wcy50b3ApLFxuICAgICAgICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKHByb3BzLmxlZnQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9mZnNldFxuICAgICAgKSxcbiAgICAgIDBcbiAgICApO1xuXG4gICAgJHRpcC5hZGRDbGFzcygnaW4nKTtcblxuICAgIC8qXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHBsYWNpbmcgdGlwIGluIG5ldyBvZmZzZXQgY2F1c2VkIHRoZVxuICAgICAqIHRpcCB0byByZXNpemUgaXRzZWxmLlxuICAgICAqL1xuICAgIGNvbnN0IGFjdHVhbFdpZHRoID0gJHRpcFswXS5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBhY3R1YWxIZWlnaHQgPSAkdGlwWzBdLm9mZnNldEhlaWdodDtcblxuICAgIGlmICgndG9wJyA9PSBwbGFjZW1lbnQgJiYgYWN0dWFsSGVpZ2h0ICE9IGhlaWdodCkge1xuICAgICAgb2Zmc2V0LnRvcCA9IG9mZnNldC50b3AgKyBoZWlnaHQgLSBhY3R1YWxIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCAkdGlwID0gdGhpcy50aXAoKTtcbiAgICAkdGlwLmZpbmQoJy50b29sdGlwLWlubmVyJylbJ3RleHQnXSh0aGlzLmdldFRpdGxlKCkpO1xuICAgICR0aXAucmVtb3ZlQ2xhc3MoJ2ZhZGUgaW4gdG9wIGJvdHRvbScpO1xuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0ICR0aXAgPSAkKHRoaXMuJHRpcCk7XG4gICAgY29uc3QgZXZlbnQgPSAkLkV2ZW50KCdoaWRlLmZzLnRvb2x0aXAnKTtcblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgaWYgKCdpbicgIT0gdGhhdC5ob3ZlclN0YXRlKSB7XG4gICAgICAgICR0aXAuZGV0YWNoKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGF0LiRlbGVtZW50KSB7XG4gICAgICAgIHRoYXQuJGVsZW1lbnQucmVtb3ZlQXR0cignYXJpYS1kZXNjcmliZWRieScpLnRyaWdnZXIoJ2hpZGRlbi5mcy50b29sdGlwJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihldmVudCk7XG5cbiAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkdGlwLnJlbW92ZUNsYXNzKCdpbicpO1xuXG4gICAgdGhpcy5ob3ZlclN0YXRlID0gbnVsbDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGFzQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oJGVsZW1lbnQpIHtcbiAgICBpZiAoISRlbGVtZW50KSB7XG4gICAgICAkZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZWwgPSAkZWxlbWVudFswXTtcbiAgICBjb25zdCBpc0JvZHkgPSBlbC50YWdOYW1lID09ICdCT0RZJztcblxuICAgIGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChlbFJlY3Qud2lkdGggPT0gbnVsbCkge1xuICAgICAgZWxSZWN0ID0gJC5leHRlbmQoe30sIGVsUmVjdCwge1xuICAgICAgICB3aWR0aDogZWxSZWN0LnJpZ2h0IC0gZWxSZWN0LmxlZnQsXG4gICAgICAgIGhlaWdodDogZWxSZWN0LmJvdHRvbSAtIGVsUmVjdC50b3BcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3ZnID0gd2luZG93LlNWR0VsZW1lbnQgJiYgZWwgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudDtcbiAgICBjb25zdCBlbE9mZnNldCA9IGlzQm9keSA/IHsgdG9wOiAwLCBsZWZ0OiAwIH0gOiBpc1N2ZyA/IG51bGwgOiAkZWxlbWVudC5vZmZzZXQoKTtcbiAgICBjb25zdCBzY3JvbGwgPSB7XG4gICAgICBzY3JvbGw6IGlzQm9keVxuICAgICAgICA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgICAgOiAkZWxlbWVudC5zY3JvbGxUb3AoKVxuICAgIH07XG4gICAgY29uc3Qgb3V0ZXJEaW1zID0gaXNCb2R5ID8geyB3aWR0aDogJCh3aW5kb3cpLndpZHRoKCksIGhlaWdodDogJCh3aW5kb3cpLmhlaWdodCgpIH0gOiBudWxsO1xuXG4gICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBlbFJlY3QsIHNjcm9sbCwgb3V0ZXJEaW1zLCBlbE9mZnNldCk7XG4gIH1cblxuICBnZXRDYWxjdWxhdGVkT2Zmc2V0KHBsYWNlbWVudCwgcG9zLCBhY3R1YWxXaWR0aCwgYWN0dWFsSGVpZ2h0KSB7XG4gICAgbGV0IG9mZnNldCA9IHt9O1xuXG4gICAgaWYgKCdib3R0b20nID09IHBsYWNlbWVudCkge1xuICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICB0b3A6IHBvcy50b3AgKyBwb3MuaGVpZ2h0LFxuICAgICAgICBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aCAvIDIgLSBhY3R1YWxXaWR0aCAvIDJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldCA9IHtcbiAgICAgICAgdG9wOiBwb3MudG9wIC0gYWN0dWFsSGVpZ2h0LFxuICAgICAgICBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aCAvIDIgLSBhY3R1YWxXaWR0aCAvIDJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGxldCB0aXRsZSA9IHRoaXMuc2V0dGluZ3MudGl0bGU7XG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHRoaXMuJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBnZXRVSUQocHJlZml4KSB7XG4gICAgZG8ge1xuICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcbiAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKTtcblxuICAgIHJldHVybiBwcmVmaXg7XG4gIH1cblxuICB0aXAoKSB7XG4gICAgaWYgKCF0aGlzLiR0aXApIHtcbiAgICAgIHRoaXMuJHRpcCA9ICQodGhpcy5zZXR0aW5ncy50ZW1wbGF0ZSk7XG5cbiAgICAgIGlmICh0aGlzLiR0aXAubGVuZ3RoICE9IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b29sdGlwIGB0ZW1wbGF0ZWAgb3B0aW9uIG11c3QgY29uc2lzdCBvZiBleGFjdGx5IDEgdG9wLWxldmVsIGVsZW1lbnQhJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuJHRpcDtcbiAgfVxuXG4gIGFycm93KCkge1xuICAgIHJldHVybiAodGhpcy4kYXJyb3cgPSB0aGlzLiRhcnJvdyB8fCB0aGlzLnRpcCgpLmZpbmQoJy50b29sdGlwLWFycm93JykpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSAhdGhpcy5lbmFibGVkO1xuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBzZWxmID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJyk7XG5cbiAgICAgIGlmICghc2VsZikge1xuICAgICAgICBzZWxmID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5nZXREZWxlZ2F0ZVNldHRpbmdzKCkpO1xuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnLCBzZWxmKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHNlbGYuaW5TdGF0ZS5jbGljayA9ICFzZWxmLmluU3RhdGUuY2xpY2s7XG5cbiAgICAgIGlmIChzZWxmLmlzSW5TdGF0ZVRydWUoKSkge1xuICAgICAgICBzZWxmLmVudGVyKHNlbGYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5sZWF2ZShzZWxmKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNlbGYudGlwKCkuaGFzQ2xhc3MoJ2luJykpIHtcbiAgICAgICAgc2VsZi5sZWF2ZShzZWxmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuZW50ZXIoc2VsZik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgdGhpcy5oaWRlKGZ1bmN0aW9uKCkge1xuICAgICAgdGhhdC4kZWxlbWVudC5vZmYoJy50b29sdGlwJykucmVtb3ZlRGF0YSgnZnMudG9vbHRpcCcpO1xuXG4gICAgICBpZiAodGhhdC4kdGlwKSB7XG4gICAgICAgIHRoYXQuJHRpcC5kZXRhY2goKTtcbiAgICAgIH1cblxuICAgICAgdGhhdC4kdGlwID0gbnVsbDtcbiAgICAgIHRoYXQuJGFycm93ID0gbnVsbDtcbiAgICAgIHRoYXQuJHZpZXdwb3J0ID0gbnVsbDtcbiAgICAgIHRoYXQuJGVsZW1lbnQgPSBudWxsO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIFRoaXMgZmlsZSBiaW5kcyBwcmVzZXQgaW5zdGFuY2VzIG9mIE1hZ25pZmljIFBvcHVwLlxuICpcbiAqIE1hZ25pZmljIFBvcHVwIGlzIGFuIG9wZW4gc291cmNlIGxpZ2h0Ym94IHNjcmlwdFxuICogYnkgRG1pdHJ5IFNlbWVub3YuXG4gKlxuICogQGxpbmsgaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvXG4gKlxuICogQHN1bW1hcnkgIE1vZGFsc1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIG1vZGFsLmpzXG4gKiBAcmVxdWlyZXMgbWFnbmlmaWMtcG9wdXAuanNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCQpIHtcbiAgaWYgKCEkLmZuLm1hZ25pZmljUG9wdXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7ICRkb2N1bWVudCB9ID0gZG9tO1xuXG4gICRkb2N1bWVudC5yZWFkeShmdW5jdGlvbigkKSB7XG4gICAgbGV0IG1haW5DbGFzcyA9ICdmcy1tb2RhbCc7XG4gICAgbGV0IHJlbW92YWxEZWxheSA9IDA7XG5cbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgYW5pbWF0aW9uOiAnZmFkZScsXG4gICAgICBtb2JpbGU6IDAsXG4gICAgICBtb2JpbGVJZnJhbWU6IDc2OCxcbiAgICAgIG1vYmlsZUdhbGxlcnk6IDAsXG4gICAgICBlcnJvcjogJ1RoZSBtb2RhbCBtZWRpYSBjb3VsZCBub3QgYmUgbG9hZGVkLicsXG4gICAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJyxcbiAgICAgIGNvdW50ZXI6ICclY3VyciUgb2YgJXRvdGFsJScsXG4gICAgICBuZXh0OiAnTmV4dCcsXG4gICAgICBwcmV2aW91czogJ1ByZXZpb3VzJyxcbiAgICAgIGNsb3NlTWFya3VwOlxuICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtZnAtY2xvc2UgZnMtY2xvc2UgY2xvc2UtbGlnaHQgY2xvc2UtbWRcIj4ldGl0bGUlPC9idXR0b24+J1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5mc01vZGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnID0gJC5leHRlbmQoe30sIGNvbmZpZywgd2luZG93LmZzTW9kYWwpOyAvLyBBbiBvcHRpb25hbCBjb25maWd1cmF0aW9uIG9iamVjdCB5b3UgY291bGQgZGVjbGFyZS5cbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmFuaW1hdGlvbiAmJiBjb25maWcuYW5pbWF0aW9uICE9PSAnbm9uZScpIHtcbiAgICAgIG1haW5DbGFzcyA9IGAke21haW5DbGFzc30gZnMtbW9kYWwtJHtjb25maWdbJ2FuaW1hdGlvbiddfWA7XG4gICAgICByZW1vdmFsRGVsYXkgPSAxNTA7XG4gICAgfVxuXG4gICAgJC5leHRlbmQodHJ1ZSwgJC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLCB7XG4gICAgICB0Q2xvc2U6IGNvbmZpZy5jbG9zZSxcbiAgICAgIHRMb2FkaW5nOiBgPGRpdiBjbGFzcz1cImZzLWxvYWRlclwiPjxzcGFuPiR7Y29uZmlnLmxvYWRpbmd9PC9zcGFuPjwvZGl2PmAsXG4gICAgICBnYWxsZXJ5OiB7XG4gICAgICAgIHRQcmV2OiBjb25maWcucHJldmlvdXMsXG4gICAgICAgIHROZXh0OiBjb25maWcubmV4dCxcbiAgICAgICAgdENvdW50ZXI6IGNvbmZpZy5jb3VudGVyXG4gICAgICB9LFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgdEVycm9yOiBjb25maWcuZXJyb3JcbiAgICAgIH0sXG4gICAgICBhamF4OiB7XG4gICAgICAgIHRFcnJvcjogY29uZmlnLmVycm9yXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtbW9kYWwtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgJCgnLmZzLWNvbnRlbnQtbW9kYWwtbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICBtYWluQ2xhc3M6IG1haW5DbGFzcyxcbiAgICAgIGFsaWduVG9wOiB0cnVlLFxuICAgICAgc2hvd0Nsb3NlQnRuOiBmYWxzZSxcbiAgICAgIHJlbW92YWxEZWxheTogcmVtb3ZhbERlbGF5LFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJy5tZnAtd3JhcCAuZnMtbW9kYWwnKS5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJy5tZnAtd3JhcCAuZnMtbW9kYWwnKS5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtc2VhcmNoLW1vZGFsLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgbWFpbkNsYXNzOiBtYWluQ2xhc3MgKyAnIG1mcC1zZWFyY2gnLFxuICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgY2xvc2VNYXJrdXA6IGNvbmZpZy5jbG9zZU1hcmt1cCxcbiAgICAgIHJlbW92YWxEZWxheTogcmVtb3ZhbERlbGF5LFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJy5tZnAtd3JhcCAuZnMtc2VhcmNoLW1vZGFsJykuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlLndyYXBbMF0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKCcubWZwLXNlYXJjaCAuZnMtc2VhcmNoLW1vZGFsIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0nKS5mb2N1cygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVDbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLm1mcC13cmFwIC5mcy1zZWFyY2gtbW9kYWwnKS5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtbW9kYWwtZ2FsbGVyeSwgLnRoZW1lYmx2ZC1nYWxsZXJ5JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICRnYWxsZXJ5ID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICd0aGVtZWJsdmQtbGlnaHRib3gnLFxuICAgICAgICAnZnMtY29udGVudC1tb2RhbC1saW5rJyxcbiAgICAgICAgJ2ZzLWltYWdlLW1vZGFsLWxpbmsnLFxuICAgICAgICAnZnMtaWZyYW1lLW1vZGFsLWxpbmsnXG4gICAgICBdO1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSAnLicgKyBjbGFzc2VzLmpvaW4oJywgLicpO1xuXG4gICAgICAkZ2FsbGVyeS5maW5kKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQodGhpcyk7XG4gICAgICAgIGxldCBsaW5rQ2xhc3MgPSAnJztcblxuICAgICAgICBpZiAoJGxpbmsuaGFzQ2xhc3MoJ2ZzLWNvbnRlbnQtbW9kYWwtbGluaycpKSB7XG4gICAgICAgICAgbGlua0NsYXNzID0gJ21mcC1pbmxpbmUnO1xuICAgICAgICB9IGVsc2UgaWYgKCRsaW5rLmhhc0NsYXNzKCdmcy1pbWFnZS1tb2RhbC1saW5rJykpIHtcbiAgICAgICAgICBsaW5rQ2xhc3MgPSAnbWZwLWltYWdlJztcbiAgICAgICAgfSBlbHNlIGlmICgkbGluay5oYXNDbGFzcygnZnMtaWZyYW1lLW1vZGFsLWxpbmsnKSkge1xuICAgICAgICAgIGxpbmtDbGFzcyA9ICdtZnAtaWZyYW1lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtDbGFzcyA9IGBmcy1nYWxsZXJ5LW1vZGFsLWxpbmsgJHtsaW5rQ2xhc3N9YDtcblxuICAgICAgICAkbGluay5yZW1vdmVDbGFzcyhjbGFzc2VzLmpvaW4oJyAnKSkuYWRkQ2xhc3MobGlua0NsYXNzKTtcbiAgICAgIH0pO1xuXG4gICAgICAkZ2FsbGVyeS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgbWFpbkNsYXNzOiBtYWluQ2xhc3MsXG4gICAgICAgIGNsb3NlTWFya3VwOiBjb25maWcuY2xvc2VNYXJrdXAsXG4gICAgICAgIHJlbW92YWxEZWxheTogcmVtb3ZhbERlbGF5LFxuICAgICAgICBkaXNhYmxlT246IGNvbmZpZy5tb2JpbGVHYWxsZXJ5LFxuICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIGN1cnNvcjogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBkZWxlZ2F0ZTogJ2EuZnMtZ2FsbGVyeS1tb2RhbC1saW5rJyxcbiAgICAgICAgaWZyYW1lOiB7XG4gICAgICAgICAgLy8gQWRkIGJvdHRvbSBiYXIgZm9yIGlmcmFtZXNcbiAgICAgICAgICBtYXJrdXA6IGA8ZGl2IGNsYXNzPVwibWZwLWlmcmFtZS1zY2FsZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8aWZyYW1lIGNsYXNzPVwibWZwLWlmcmFtZVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1mcC1ib3R0b20tYmFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1mcC10aXRsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZnAtY291bnRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgfSxcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgbWFya3VwUGFyc2U6IGZ1bmN0aW9uKHRlbXBsYXRlLCB2YWx1ZXMsIGl0ZW0pIHtcbiAgICAgICAgICAgIHZhbHVlcy50aXRsZSA9IGl0ZW0uZWwuYXR0cigndGl0bGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnLmZzLWltYWdlLW1vZGFsLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICBtYWluQ2xhc3M6IG1haW5DbGFzcyxcbiAgICAgIGNsb3NlTWFya3VwOiBjb25maWcuY2xvc2VNYXJrdXAsXG4gICAgICByZW1vdmFsRGVsYXk6IHJlbW92YWxEZWxheSxcbiAgICAgIGRpc2FibGVPbjogY29uZmlnLm1vYmlsZSxcbiAgICAgIGltYWdlOiB7XG4gICAgICAgIGN1cnNvcjogbnVsbFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmZzLWlmcmFtZS1tb2RhbC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgIG1haW5DbGFzczogbWFpbkNsYXNzLFxuICAgICAgY2xvc2VNYXJrdXA6IGNvbmZpZy5jbG9zZU1hcmt1cCxcbiAgICAgIHJlbW92YWxEZWxheTogcmVtb3ZhbERlbGF5LFxuICAgICAgZGlzYWJsZU9uOiBjb25maWcubW9iaWxlSWZyYW1lLFxuICAgICAgaWZyYW1lOiB7XG4gICAgICAgIC8vIEFkZCBib3R0b20gYmFyIGZvciBpZnJhbWVzXG4gICAgICAgIG1hcmt1cDpcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1pZnJhbWUtc2NhbGVyXCI+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj4nICtcbiAgICAgICAgICAnPGlmcmFtZSBjbGFzcz1cIm1mcC1pZnJhbWVcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtYm90dG9tLWJhclwiPicgK1xuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLXRpdGxlXCI+PC9kaXY+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtY291bnRlclwiPjwvZGl2PicgK1xuICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAnPC9kaXY+J1xuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBtYXJrdXBQYXJzZTogZnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuICAgICAgICAgIHZhbHVlcy50aXRsZSA9IGl0ZW0uZWwuYXR0cigndGl0bGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pKCQpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvbSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBUaGlzIGZpbGUgYmluZHMgcHJlc2V0IGluc3RhbmNlcyBvZiBPd2xDYXJvdXNlbCxcbiAqIGFsbG93aW5nIGZvciB0aG9zZSB0byBiZSBjb25maWd1cmVkIHRocm91Z2ggdGhlXG4gKiBIVE1MIG1hcmt1cC5cbiAqXG4gKiBPd2xDYXJvdXNlbCBpcyBhbiBvcGVuIHNvdXJjZSBjYXJvdXNlbC9zbGlkZXJcbiAqIHNjcmlwdCBieSBEYXZpZCBEZXV0c2NoLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vb3dsY2Fyb3VzZWwyLmdpdGh1Yi5pby9Pd2xDYXJvdXNlbDIvXG4gKlxuICogQHN1bW1hcnkgIFNsaWRlcnNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBtb2RhbC5qc1xuICogQHJlcXVpcmVzIG93bC1jYXJvdXNlbC5qc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigkKSB7XG4gIGlmICghJC5mbi5vd2xDYXJvdXNlbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgJHdpbmRvdywgJGJvZHkgfSA9IGRvbTtcblxuICAkd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLmZzLXNpbXBsZS1zbGlkZXIsIC5mcy1nYWxsZXJ5LXNsaWRlciwgLmZzLWJsb2NrLXNsaWRlcicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkd3JhcCA9ICQodGhpcyk7XG4gICAgICBjb25zdCAkc2xpZGVyID0gJHdyYXAuZmluZCgnLmZzLXNsaWRlcicpO1xuICAgICAgY29uc3Qgc3BlZWQgPSBwYXJzZUludCgkd3JhcC5kYXRhKCdzcGVlZCcpKSA/IHBhcnNlSW50KCR3cmFwLmRhdGEoJ3NwZWVkJykpIDogNTAwO1xuICAgICAgY29uc3QgYXV0b3BsYXlUaW1lb3V0ID0gcGFyc2VJbnQoJHdyYXAuZGF0YSgnYXV0b3BsYXknKSlcbiAgICAgICAgPyBwYXJzZUludCgkd3JhcC5kYXRhKCdhdXRvcGxheScpKVxuICAgICAgICA6IDA7XG4gICAgICBjb25zdCBhdXRvcGxheSA9IGF1dG9wbGF5VGltZW91dCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIGNvbnN0IHBhdXNlID0gJ3RydWUnID09ICR3cmFwLmRhdGEoJ3BhdXNlJykgfHwgJHdyYXAuZGF0YSgncGF1c2UnKSA9PSAnMScgPyB0cnVlIDogZmFsc2U7XG4gICAgICBjb25zdCBsb29wID0gJ2ZhbHNlJyA9PSAkd3JhcC5kYXRhKCdsb29wJykgfHwgJHdyYXAuZGF0YSgnbG9vcCcpID09ICcwJyA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgIGNvbnN0IGFuaW1hdGUgPSAndHJ1ZScgPT0gJHdyYXAuZGF0YSgnZmFkZScpIHx8ICR3cmFwLmRhdGEoJ2ZhZGUnKSA9PSAnMScgPyAnZmFkZU91dCcgOiBmYWxzZTtcbiAgICAgIGNvbnN0IGF1dG9XaWR0aCA9ICR3cmFwLmhhc0NsYXNzKCdmcy1nYWxsZXJ5LXNsaWRlcicpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgY29uc3QgY2VudGVyID0gJHdyYXAuaGFzQ2xhc3MoJ2ZzLWdhbGxlcnktc2xpZGVyJykgPyB0cnVlIDogZmFsc2U7XG4gICAgICBjb25zdCAkbmF2ID0gJHdyYXAuZmluZCgnLmZzLXNsaWRlci1uYXYsIC5mcy1zbGlkZXItdGh1bWJzJyk7XG4gICAgICBjb25zdCAkYXJyb3dzID0gJHdyYXAuZmluZCgnLmZzLXNsaWRlci1hcnJvd3MnKTtcblxuICAgICAgbGV0IGl0ZW1zID0gcGFyc2VJbnQoJHdyYXAuZGF0YSgnaXRlbXMnKSkgPyBwYXJzZUludCgkd3JhcC5kYXRhKCdpdGVtcycpKSA6IDQ7XG4gICAgICBsZXQgbWFyZ2luID0gcGFyc2VJbnQoJHdyYXAuZGF0YSgnbWFyZ2luJykpID8gcGFyc2VJbnQoJHdyYXAuZGF0YSgnbWFyZ2luJykpIDogMTtcbiAgICAgIGxldCBuYXZDb3VudGVyID0gMDtcblxuICAgICAgLy8gVG9nZ2xlIFwiaG92ZXJlZFwiIGNsYXNzIG9uL29mZiBmb3IgYW55IENTUyBob3ZlciBlZmZlY3RzLlxuICAgICAgJHdyYXBcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaG92ZXJlZCcpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdob3ZlcmVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgc2xpZGUtdG8gZGF0YSB0byBlYWNoIG5hdiBpdGVtLlxuICAgICAgJG5hdi5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuZGF0YSgnc2xpZGUtdG8nLCBuYXZDb3VudGVyKTtcbiAgICAgICAgbmF2Q291bnRlcisrO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICgkd3JhcC5oYXNDbGFzcygnZnMtc2ltcGxlLXNsaWRlcicpKSB7XG4gICAgICAgIG1hcmdpbiA9IDA7XG4gICAgICAgIGl0ZW1zID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoJHdyYXAuaGFzQ2xhc3MoJ2ZzLWdhbGxlcnktc2xpZGVyJykpIHtcbiAgICAgICAgaXRlbXMgPSAxO1xuICAgICAgfVxuXG4gICAgICAkc2xpZGVyLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBkb3RzOiB0cnVlLCAvLyBNdXN0IGJlIGVuYWJsZWQgZm9yIGUucGFnZS5pbmRleCB0byB3b3JrLlxuICAgICAgICBsb29wOiBsb29wLFxuICAgICAgICBzbWFydFNwZWVkOiBzcGVlZCxcbiAgICAgICAgYXV0b3BsYXk6IGF1dG9wbGF5LFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IGF1dG9wbGF5VGltZW91dCxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiBwYXVzZSxcbiAgICAgICAgYW5pbWF0ZU91dDogYW5pbWF0ZSxcbiAgICAgICAgYXV0b1dpZHRoOiBhdXRvV2lkdGgsXG4gICAgICAgIG1hcmdpbjogbWFyZ2luLFxuICAgICAgICBjZW50ZXI6IGNlbnRlcixcbiAgICAgICAgcnRsOiAkYm9keS5oYXNDbGFzcygncnRsJykgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIG9uSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAkbmF2LmZpbmQoJ2xpOmZpcnN0LWNoaWxkJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICR3cmFwLnJlbW92ZUNsYXNzKCdsb2FkaW5nJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAgICAgICAgIGlmICghbG9vcCkgJGFycm93cy5maW5kKCdsaScpLmFkZENsYXNzKCdmYWRlJyk7XG4gICAgICAgICAgJHdyYXAuZmluZCgnLmZzLWxvYWRlcicpLmZhZGVPdXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2VkOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBNYWtlIHN1cmUgbmV4dCBhbmQgcHJldiBidXR0b25zIGRvbid0IHNob3dcbiAgICAgICAgICAgKiB3aGVuIGF0IHN0YXJ0IGFuZCBlbmQgb2YgY3ljbGUsIGlmIHRoZXJlJ3NcbiAgICAgICAgICAgKiBubyBsb29waW5nLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICghbG9vcCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkd3JhcC5oYXNDbGFzcygnZnMtYmxvY2stc2xpZGVyJykgPyBlLml0ZW0uaW5kZXggOiBlLnBhZ2UuaW5kZXg7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwIHx8IGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICAgICRhcnJvd3MuZmluZCgnbGkucHJldicpLnJlbW92ZUNsYXNzKCdpbicpO1xuICAgICAgICAgICAgICAkYXJyb3dzLmZpbmQoJ2xpLm5leHQnKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5wYWdlLmluZGV4ICsgMSA9PSBlLnBhZ2UuY291bnQpIHtcbiAgICAgICAgICAgICAgJGFycm93cy5maW5kKCdsaS5uZXh0JykucmVtb3ZlQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICAgICRhcnJvd3MuZmluZCgnbGkucHJldicpLmFkZENsYXNzKCdpbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGFycm93cy5maW5kKCdsaScpLmFkZENsYXNzKCdpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN0YW5kYXJkIG5hdmlnYXRpb24gZG90cy5cbiAgICAgICAgICAkbmF2LmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICRuYXYuZmluZCgnbGk6bnRoLWNoaWxkKCAnICsgKGUucGFnZS5pbmRleCArIDEpICsgJyApJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQmluZCBzdGFuZGFyZCBzbGlkZXIgbmF2IGFuZCB0aHVtYiBuYXYuXG4gICAgICAkbmF2LmZpbmQoJ2xpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRjdXJyZW50ID0gJCh0aGlzKTtcblxuICAgICAgICAkc2xpZGVyLnRyaWdnZXIoJ3RvLm93bC5jYXJvdXNlbCcsICRjdXJyZW50LmRhdGEoJ3NsaWRlLXRvJykpO1xuXG4gICAgICAgICRjdXJyZW50XG4gICAgICAgICAgLmNsb3Nlc3QoJ3VsLCBvbCcpXG4gICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICRjdXJyZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBCaW5kIHNsaWRlciBhcnJvdyBuZXh0L3ByZXYgbmF2LlxuICAgICAgJGFycm93cy5maW5kKCdsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAkc2xpZGVyLnRyaWdnZXIoICdzdG9wLm93bC5hdXRvcGxheScgKTsgLy8gRG9lc24ndCB3b3JrIHJpZ2h0IGFzIG9mIHYyLjIuMS5cbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ25leHQnKSkge1xuICAgICAgICAgICRzbGlkZXIudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2xpZGVyLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pOyAvLyBFbmQgLmVhY2goKVxuICB9KTsgLy8gRW5kIC5vbiggJ2xvYWQnIClcbn0pKCQpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGRvbSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEZyb250U3RyZWV0IGZyb20gJy4vRnJvbnRTdHJlZXQnO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9ibG9ja3MvQmFja2dyb3VuZCc7XG5pbXBvcnQgTWVudSBmcm9tICcuL2Jsb2Nrcy9NZW51JztcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vYmxvY2tzL01vYmlsZU1lbnUnO1xuaW1wb3J0IFRhYmJlZCBmcm9tICcuL2Jsb2Nrcy9UYWJiZWQnO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICcuL2Jsb2Nrcy9Ub2dnbGUnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9ibG9ja3MvVG9vbHRpcCc7XG5pbXBvcnQgJy4vYmxvY2tzL21vZGFsJztcbmltcG9ydCAnLi9ibG9ja3Mvc2xpZGVyJztcblxuY29uc3QgeyAkZG9jdW1lbnQsICR3aW5kb3cgfSA9IGRvbTtcbmNvbnN0IGZyb250c3RyZWV0ID0gbmV3IEZyb250U3RyZWV0KCk7XG5cbi8vIFJlZ2lzdGVyIGFsbCBkZWZhdWx0IGJsb2Nrcy5cbmZyb250c3RyZWV0LmFkZCgnYmFja2dyb3VuZCcsIEJhY2tncm91bmQpO1xuZnJvbnRzdHJlZXQuYWRkKCdtZW51JywgTWVudSk7XG5mcm9udHN0cmVldC5hZGQoJ21vYmlsZS1tZW51JywgTW9iaWxlTWVudSk7XG5mcm9udHN0cmVldC5hZGQoJ3RhYmJlZCcsIFRhYmJlZCk7XG5mcm9udHN0cmVldC5hZGQoJ3RvZ2dsZScsIFRvZ2dsZSk7XG5mcm9udHN0cmVldC5hZGQoJ3Rvb2x0aXAnLCBUb29sdGlwKTtcblxuLy8gQWRkIHJlZ2lzdGVyZWQgYmxvY2tzIHRvIGpRdWVyeSBuYW1lc3BhY2UuXG5mcm9udHN0cmVldC5pbml0KCk7XG5cbi8qKlxuICogQmluZCBibG9ja3MgZGVmYXVsdCBjbGFzc2VzIHdpdGggalF1ZXJ5LlxuICpcbiAqIEBzaW5jZSAxLjAuMFxuICovXG4kZG9jdW1lbnQucmVhZHkoZnVuY3Rpb24oJCkge1xuICAvKipcbiAgICogQmluZHMgdGhlIGRlZmF1bHQgYG1lbnVgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy1tZW51JykuZnJvbnRzdHJlZXQoJ21lbnUnKTtcblxuICAvKipcbiAgICogQWRkcyBuby1jbGljayBmdW5jdGlvbmFsdGl5IHRvIGFueSBsaW5rIGJ5XG4gICAqIGFkZGluZyBjbGFzcyBcIm5vLWNsaWNrXCIuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBpbnRlcmZhY2UuXG4gICAqL1xuICAkKCdhLm5vLWNsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICAvKipcbiAgICogQWRkcyBuby1jbGljayBmdW5jdGlvbmFsdGl5IHRvIGFueSBsaW5rIGRpcmVjdGx5XG4gICAqIHdpdGhpbiBhbiBsaSB3aXRoIGNsYXNzIGBuby1jbGlja2AuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgaXMgbWFpbmx5IGhlcmUgdG8gYWNjbW9kYXRlIGludGVyZmFjZXNcbiAgICogbGlrZSBXb3JkUHJlc3Mgd2hpY2ggYWxsb3cgYnVpbGRpbmcgbWVudXMsIGJ1dCBvbmx5XG4gICAqIGFsbG93IGFkZGluZyBDU1MgY2xhc3NlcyB0byB0aGUgbWVudSBsaXN0IGl0ZW1zLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgaW50ZXJmYWNlLlxuICAgKi9cbiAgJCgnbGkubm8tY2xpY2snKVxuICAgIC5maW5kKCdhOmZpcnN0JylcbiAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIHRoZSBkZWZhdWx0IGB0YWJzYCBibG9jay5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICAkKCcuZnMtdGFiYmVkJykuZnJvbnRzdHJlZXQoJ3RhYmJlZCcpO1xuXG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgZGVmYXVsdCBgdG9nZ2xlYCBibG9jay5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICAkKCcuZnMtdG9nZ2xlJykuZnJvbnRzdHJlZXQoJ3RvZ2dsZScpO1xuXG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgZGVmYXVsdCBgdG9vbHRpcGAgYmxvY2suXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgJCgnLmZzLXRvb2x0aXAtdHJpZ2dlcicpLmZyb250c3RyZWV0KCd0b29sdGlwJyk7XG59KTtcblxuJHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAvKipcbiAgICogU2VsZi1pbnZva2VzIHRoZSBiYWNrZ3JvdW5kIHNsaWRlciBvZiB0aGVcbiAgICogYGJhY2tncm91bmRgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy1iZy1zbGlkZXInKS5mcm9udHN0cmVldCgnYmFja2dyb3VuZCcsIHsgdHlwZTogJ3NsaWRlcicgfSk7XG5cbiAgLyoqXG4gICAqIFNlbGYtaW52b2tlcyB0aGUgcGFyYWxsYXggZWZmZWN0IG9mIHRoZVxuICAgKiBgYmFja2dyb3VuZGAgYmxvY2suXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgJCgnLmZzLWJnLXBhcmFsbGF4JykuZnJvbnRzdHJlZXQoJ2JhY2tncm91bmQnLCB7IHR5cGU6ICdwYXJhbGxheCcgfSk7XG59KTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogU3RvcmUgYW5kIGNhY2hlIHJlLXVzYWJsZSBET00gZWxlbWVudHMuXG4gKlxuICogQHNpbmNlIDEuMC4wXG4gKlxuICogQHZhciB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZG9tID0ge1xuICAkd2luZG93OiAkKHdpbmRvdyksXG4gICRkb2N1bWVudDogJChkb2N1bWVudCksXG4gICRib2R5OiAkKCdib2R5Jylcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHdlYnNpdGUgaXMgYmVpbmcgbG9hZGVkIGZyb20gYSBtb2JpbGVcbiAqIGRldmljZS5cbiAqXG4gKiBAc2luY2UgMS4wLjBcbiAqXG4gKiBAcGFyYW0gIHtCb29sZWFufSB2aWV3cG9ydENoZWNrIFdoZXRoZXIgdG8gbGV0IHZpZXdwb3J0IHNpemUgaGVscCBkZXRlcm1pbmUuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHdlJ3JlIG9uIGEgbW9iaWxlIGRldmljZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKHZpZXdwb3J0Q2hlY2spIHtcbiAgY29uc3QgeyAkYm9keSB9ID0gZG9tO1xuXG4gIGlmICgkYm9keS5oYXNDbGFzcygnbW9iaWxlJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBhZ2VudENoZWNrID0gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgIG5hdmlnYXRvci51c2VyQWdlbnRcbiAgKTtcblxuICBpZiAoYWdlbnRDaGVjaykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHZpZXdwb3J0Q2hlY2spIHtcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcblxuICAgIGlmICgkd2luZG93LndpZHRoKCkgPCA5OTIgfHwgJHdpbmRvdy5oZWlnaHQoKSA8IDUwMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==