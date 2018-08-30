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
 * parallax background image effects.
 *
 * By default all HTML elements with class `fs-bg-parallax`
 * are automatically binded with the parallax effect.
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

    this.parallax = this.parallax.bind(this);
    this.parallaxCalc = this.parallaxCalc.bind(this);

    switch (settings.type) {
      // case 'video': @TODO
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
    key: 'parallax',


    /**
     * Setup a background image parallax effect.
     *
     * @since 1.0.0
     *
     * @param {Object} $element The background element.
     * @param {Object} $section Section containing element.
     * @param {Object} settings Current settings.
     */
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
        section: '.fs-section, .has-bg-parallax, .has-bg-video'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9Gcm9udFN0cmVldC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy9CYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3MvTW9iaWxlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2Jsb2Nrcy9UYWJiZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3MvVG9nZ2xlLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvYmxvY2tzL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3MvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3Mvc2xpZGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJGcm9udFN0cmVldCIsImJsb2NrcyIsImFkZCIsImJpbmQiLCJpbml0IiwidHlwZSIsIm1vZHVsZSIsIiQiLCJmbiIsImZyb250c3RyZWV0IiwiYmxvY2siLCJvcHRpb25zIiwiZWFjaCIsIkJhY2tncm91bmQiLCJlbGVtZW50IiwiJGVsZW1lbnQiLCJzZXR0aW5ncyIsImV4dGVuZCIsImRlZmF1bHRzIiwiJHNlY3Rpb24iLCJjbG9zZXN0Iiwic2VjdGlvbiIsInBhcmFsbGF4IiwicGFyYWxsYXhDYWxjIiwiJGZpZ3VyZSIsIiR3aW5kb3ciLCIkaW1nIiwiZmluZCIsImlzTW9iaWxlIiwiY3NzIiwiYWRkQ2xhc3MiLCJmYWRlT3V0Iiwib24iLCJpbWdIZWlnaHQiLCJoZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJwYXJhbGxheERpc3QiLCJib3R0b20iLCJvZmZzZXQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpbmRvd0JvdHRvbSIsInBlcmNlbnRTY3JvbGxlZCIsIk1hdGgiLCJyb3VuZCIsImF1dG9wbGF5IiwiTWVudSIsIiRtZW51IiwiZGF0YSIsImRlbGF5IiwidGltZXIiLCJmbHlvdXQiLCJzaG93IiwiaGlkZSIsInJlbW92ZUNsYXNzIiwiaGFzIiwiZHJvcERvd25TZWxlY3RvciIsIiR0cmlnZ2VyIiwiYXBwZW5kIiwiY2hpbGRyZW4iLCJub29wIiwiaGFzQ2xhc3MiLCIkYm9keSIsIiRmbHlvdXQiLCJsb2NhdGlvbiIsInNwYWNlIiwibGVuZ3RoIiwid2lkdGgiLCJsZXZlbCIsImdldExldmVsIiwiJHNpYmxpbmdzIiwic2libGluZ3MiLCIkdGFyZ2V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIk1vYmlsZU1lbnUiLCIkdHJpZ2dlcnMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJlcGVuZCIsInByb3AiLCJUYWJiZWQiLCIkdGFicyIsImRlZXBMaW5rIiwibWF0Y2hIZWlnaHQiLCIkcGFuZSIsImF0dHIiLCJuYXZTZWxlY3RvciIsIiRuYXYiLCJ0YXJnZXQiLCJzcGxpdCIsInRhbGxlc3QiLCJjdXJyZW50SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJoYXNoIiwiZG9jdW1lbnQiLCJpbmRleE9mIiwicmVwbGFjZSIsImFuaW1hdGUiLCJUb2dnbGUiLCIkdG9nZ2xlIiwib3BlbiIsImNsb3NlIiwiJGdyb3VwIiwicGFyZW50cyIsImFjY29yZGlvbiIsInNwZWVkIiwiYmx1ciIsInN0b3AiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwiVG9vbHRpcCIsImVuYWJsZWQiLCJ0aW1lb3V0IiwiaG92ZXJTdGF0ZSIsImluU3RhdGUiLCIkdmlld3BvcnQiLCJ2aWV3cG9ydCIsImlzRnVuY3Rpb24iLCJjYWxsIiwic2VsZWN0b3IiLCJjbGljayIsImhvdmVyIiwiZm9jdXMiLCJwcm94eSIsImVudGVyIiwibGVhdmUiLCJnZXREZWxlZ2F0ZVNldHRpbmdzIiwiaXNJblN0YXRlVHJ1ZSIsImFwcGx5UGxhY2VtZW50Iiwic2V0Q29udGVudCIsImhhc0NvbnRlbnQiLCJnZXRQb3NpdGlvbiIsImdldENhbGN1bGF0ZWRPZmZzZXQiLCJnZXRUaXRsZSIsImdldFVJRCIsInRpcCIsImFycm93IiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJ0b2dnbGUiLCJkZXN0cm95IiwiX3NldHRpbmdzIiwia2V5IiwidmFsdWUiLCJvYmoiLCJzZWxmIiwiY29uc3RydWN0b3IiLCJjdXJyZW50VGFyZ2V0IiwiRXZlbnQiLCJlIiwidHJpZ2dlciIsImluRG9tIiwiY29udGFpbnMiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiaXNEZWZhdWx0UHJldmVudGVkIiwidGhhdCIsIiR0aXAiLCJ0aXBJZCIsInBsYWNlbWVudCIsImF1dG9Ub2tlbiIsImF1dG9QbGFjZSIsInRlc3QiLCJkZXRhY2giLCJsZWZ0IiwiZGlzcGxheSIsImNvbnRhaW5lciIsImFwcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJwb3MiLCJhY3R1YWxXaWR0aCIsIm9mZnNldFdpZHRoIiwiYWN0dWFsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3JnUGxhY2VtZW50Iiwidmlld3BvcnREaW0iLCJjYWxjdWxhdGVkT2Zmc2V0IiwiY29tcGxldGUiLCJwcmV2SG92ZXJTdGF0ZSIsIm1hcmdpblRvcCIsInBhcnNlSW50IiwibWFyZ2luTGVmdCIsInNldE9mZnNldCIsInVzaW5nIiwicHJvcHMiLCJjYWxsYmFjayIsInJlbW92ZUF0dHIiLCJlbCIsImlzQm9keSIsInRhZ05hbWUiLCJlbFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyaWdodCIsImlzU3ZnIiwiU1ZHRWxlbWVudCIsImVsT2Zmc2V0Iiwic2Nyb2xsIiwiYm9keSIsIm91dGVyRGltcyIsInRpdGxlIiwicHJlZml4IiwicmFuZG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZW1wbGF0ZSIsIkVycm9yIiwiJGFycm93Iiwib2ZmIiwicmVtb3ZlRGF0YSIsInBhZGRpbmciLCJtYWduaWZpY1BvcHVwIiwiJGRvY3VtZW50IiwicmVhZHkiLCJtYWluQ2xhc3MiLCJyZW1vdmFsRGVsYXkiLCJjb25maWciLCJhbmltYXRpb24iLCJtb2JpbGUiLCJtb2JpbGVJZnJhbWUiLCJtb2JpbGVHYWxsZXJ5IiwiZXJyb3IiLCJsb2FkaW5nIiwiY291bnRlciIsIm5leHQiLCJwcmV2aW91cyIsImNsb3NlTWFya3VwIiwiZnNNb2RhbCIsInRDbG9zZSIsInRMb2FkaW5nIiwiZ2FsbGVyeSIsInRQcmV2IiwidE5leHQiLCJ0Q291bnRlciIsImltYWdlIiwidEVycm9yIiwiYWpheCIsImFsaWduVG9wIiwic2hvd0Nsb3NlQnRuIiwiY2FsbGJhY2tzIiwiYmVmb3JlQ2xvc2UiLCJjbG9zZUJ0bkluc2lkZSIsImluc3RhbmNlIiwid3JhcCIsImFkZEV2ZW50TGlzdGVuZXIiLCIkZ2FsbGVyeSIsImNsYXNzZXMiLCJqb2luIiwiJGxpbmsiLCJsaW5rQ2xhc3MiLCJkaXNhYmxlT24iLCJjdXJzb3IiLCJkZWxlZ2F0ZSIsImlmcmFtZSIsIm1hcmt1cCIsIm1hcmt1cFBhcnNlIiwidmFsdWVzIiwiaXRlbSIsIm93bENhcm91c2VsIiwiJHdyYXAiLCIkc2xpZGVyIiwiYXV0b3BsYXlUaW1lb3V0IiwicGF1c2UiLCJsb29wIiwiYXV0b1dpZHRoIiwiY2VudGVyIiwiJGFycm93cyIsIml0ZW1zIiwibWFyZ2luIiwibmF2Q291bnRlciIsIm5hdiIsImRvdHMiLCJzbWFydFNwZWVkIiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwiYW5pbWF0ZU91dCIsInJ0bCIsIm9uSW5pdGlhbGl6ZWQiLCJvbkNoYW5nZWQiLCJpbmRleCIsInBhZ2UiLCJjb3VudCIsIiRjdXJyZW50IiwiZG9tIiwidmlld3BvcnRDaGVjayIsImFnZW50Q2hlY2siLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiXSwibWFwcGluZ3Mi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QUFFRCxNQUFJK04sYUFBYSxpRUFBaUV4SCxJQUFqRSxDQUNmeUgsVUFBVUMsU0FESyxDQUFqQjs7QUFJQSxNQUFJRixVQUFKLEVBQWdCO0FBQ2QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSUQsYUFBSixFQUFtQjtBQUNqQixRQUFJclEsVUFBVSw2Q0FBQWxCLENBQUVtQyxNQUFGLENBQWQ7O0FBRUEsUUFBSWpCLFFBQVE2QyxLQUFSLEtBQWtCLEdBQWxCLElBQXlCN0MsUUFBUVMsTUFBUixLQUFtQixHQUFoRCxFQUFxRDtBQUNuRCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDaERELHdCIiwiZmlsZSI6Ii4vanMvZnJvbnRzdHJlZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIEZyb250IFN0cmVldCBBUElcbiAqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGFuIEFQSSBmb3IgbWFuYWdpbmcgd2hpY2hcbiAqIGJsb2NrIHR5cGVzIGdldCBhZGRlZCB0byB0aGUgJC5mbi5mcm9udHN0cmVldFxuICogbmFtZXNwYWNlIG9mIGpRdWVyeS5cbiAqXG4gKiBAc3VtbWFyeSAgRnJvbnQgU3RyZWV0IEFQSVxuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIEZyb250U3RyZWV0LmpzXG4gKi9cbmNsYXNzIEZyb250U3RyZWV0IHtcbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmxvY2tzID0ge307XG4gICAgdGhpcy5hZGQgPSB0aGlzLmFkZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5pdCA9IHRoaXMuaW5pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlZ2lzdGVyZWQgYmxvY2sgdHlwZS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICBhZGQodHlwZSwgbW9kdWxlKSB7XG4gICAgdGhpcy5ibG9ja3NbdHlwZV0gPSBtb2R1bGU7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgYWxsIHJlZ2lzdGVyZWQgYmxvY2sgdHlwZXMgdG9cbiAgICogalF1ZXJ5IG5hbWVzcGFjZS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICBpbml0KCkge1xuICAgIGNvbnN0IHsgYmxvY2tzIH0gPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogQWRkIGJsb2NrcyB0byB0aGUgalF1ZXJ5IG5hbWVzcGFjZS5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRoaXMgZG9lc24ndCBpbmNsdWRlIGJsb2NrcyBtZWFudCB0b1xuICAgICAqIGltcGxlbWVudCBvcHRpb25hbCB0aGlyZC1wYXJ0eSBwbHVnaW5zLCBPd2xcbiAgICAgKiBDYXJvdXNlbCBhbmQgTWFnbmlmaWMgUG9wdXAuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBibG9jayAgIEZyYW1ld29yayBibG9jayBJRC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIGZvciBibG9jay5cbiAgICAgKi9cbiAgICAkLmZuLmZyb250c3RyZWV0ID0gZnVuY3Rpb24oYmxvY2ssIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChibG9ja3NbYmxvY2tdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBibG9ja3NbYmxvY2tdKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250U3RyZWV0O1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGlzTW9iaWxlLCBkb20gfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBzZWN0aW9uXG4gKiBwYXJhbGxheCBiYWNrZ3JvdW5kIGltYWdlIGVmZmVjdHMuXG4gKlxuICogQnkgZGVmYXVsdCBhbGwgSFRNTCBlbGVtZW50cyB3aXRoIGNsYXNzIGBmcy1iZy1wYXJhbGxheGBcbiAqIGFyZSBhdXRvbWF0aWNhbGx5IGJpbmRlZCB3aXRoIHRoZSBwYXJhbGxheCBlZmZlY3QuXG4gKlxuICogQHN1bW1hcnkgIEJhY2tncm91bmQgRWZmZWN0c1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIEJhY2tncm91bmQuanNcbiAqL1xuY2xhc3MgQmFja2dyb3VuZCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgYmFja2dyb3VuZGAgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGNvbnN0ICRzZWN0aW9uID0gJGVsZW1lbnQuY2xvc2VzdChzZXR0aW5ncy5zZWN0aW9uKTtcblxuICAgIHRoaXMucGFyYWxsYXggPSB0aGlzLnBhcmFsbGF4LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJhbGxheENhbGMgPSB0aGlzLnBhcmFsbGF4Q2FsYy5iaW5kKHRoaXMpO1xuXG4gICAgc3dpdGNoIChzZXR0aW5ncy50eXBlKSB7XG4gICAgICAvLyBjYXNlICd2aWRlbyc6IEBUT0RPXG4gICAgICBjYXNlICdwYXJhbGxheCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnBhcmFsbGF4KCRlbGVtZW50LCAkc2VjdGlvbiwgc2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGJhY2tncm91bmQgb3B0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3BhcmFsbGF4JyxcbiAgICAgIGF1dG9wbGF5OiA0MDAwLFxuICAgICAgc2VjdGlvbjogJy5mcy1zZWN0aW9uLCAuaGFzLWJnLXBhcmFsbGF4LCAuaGFzLWJnLXZpZGVvJ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgYSBiYWNrZ3JvdW5kIGltYWdlIHBhcmFsbGF4IGVmZmVjdC5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWxlbWVudCBUaGUgYmFja2dyb3VuZCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHNlY3Rpb24gU2VjdGlvbiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5ncyBDdXJyZW50IHNldHRpbmdzLlxuICAgKi9cbiAgcGFyYWxsYXgoJGZpZ3VyZSwgJHNlY3Rpb24sIHNldHRpbmdzKSB7XG4gICAgY29uc3QgeyAkd2luZG93IH0gPSBkb207XG4gICAgY29uc3QgeyBwYXJhbGxheENhbGMgfSA9IHRoaXM7XG4gICAgY29uc3QgJGltZyA9ICRmaWd1cmUuZmluZCgnaW1nLCAuaW1nJyk7XG4gICAgbGV0IHBhcmFsbGF4ID0gbnVsbDtcblxuICAgIC8qXG4gICAgICogV2lsbCBvbmx5IGNhbGN1bGF0ZSBpZiBhbGwgYXJlIHRydWU6XG4gICAgICpcbiAgICAgKiAxLiBOb3QgYSB0cnVlIG1vYmlsZSBkZXZpY2UgKGxvb2tpbmcgYXQgdXNlciBhZ2VudCkuXG4gICAgICogMi4gV2luZG93IGlzIHRhbGxlciB0aGFuIDUwMHB4LlxuICAgICAqIDMuIFdpbmRvdyBpcyB3aWRlciB0aGFuIDk5MnB4LlxuICAgICAqL1xuICAgIGlmICghaXNNb2JpbGUodHJ1ZSkpIHtcbiAgICAgIC8vIFBhc3NpbmcgYHRydWVgIGRlbm90ZXMgY2hlY2tpbmcgdmlld3BvcnQgc2l6ZS5cbiAgICAgIHBhcmFsbGF4ID0gcGFyYWxsYXhDYWxjKCRmaWd1cmUsICRpbWcpO1xuXG4gICAgICBpZiAocGFyYWxsYXgpIHtcbiAgICAgICAgJGltZy5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzRCgtNTAlLCcgKyBwYXJhbGxheCArICdweCwgMCknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkZmlndXJlLmFkZENsYXNzKCdpbicpO1xuXG4gICAgJHNlY3Rpb24uZmluZCgnLmZzLWxvYWRlcicpLmZhZGVPdXQoKTtcblxuICAgIC8vIEFkanVzdCBwYXJhbGxheCBwb3NpdGlvbmluZyBpZiB3aW5kb3cgaXMgcmVzaXplZC5cbiAgICAkd2luZG93Lm9uKCdzY3JvbGwgcmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAvKlxuICAgICAgICogV2lsbCBvbmx5IGNhbGN1bGF0ZSBpZiBhbGwgYXJlIHRydWU6XG4gICAgICAgKlxuICAgICAgICogMS4gTm90IGEgdHJ1ZSBtb2JpbGUgZGV2aWNlIChsb29raW5nIGF0IHVzZXIgYWdlbnQpLlxuICAgICAgICogMi4gV2luZG93IGlzIHRhbGxlciB0aGFuIDUwMHB4LlxuICAgICAgICogMy4gV2luZG93IGlzIHdpZGVyIHRoYW4gOTkycHguXG4gICAgICAgKlxuICAgICAgICogQHNlZSBpc01vYmlsZSgpIGZ1bmN0aW9uIGluIGluaXQuanNcbiAgICAgICAqL1xuICAgICAgaWYgKCFpc01vYmlsZSh0cnVlKSkge1xuICAgICAgICAvLyBQYXNzaW5nIGB0cnVlYCBkZW5vdGVzIGNoZWNraW5nIHZpZXdwb3J0IHNpemUuXG4gICAgICAgIHBhcmFsbGF4ID0gcGFyYWxsYXhDYWxjKCRmaWd1cmUsICRpbWcpO1xuXG4gICAgICAgIGlmIChwYXJhbGxheCkge1xuICAgICAgICAgICRpbWcuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM0QoLTUwJSwnICsgcGFyYWxsYXggKyAncHgsIDApJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgcGFyYWxsYXggcG9zaXRpb24gb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZmlndXJlIFRoZSBiYWNrZ3JvdW5kIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkaW1nICAgIEltYWdlIHRvIHBvc2l0aW9uIHdpdGhpbiBlbGVtZW50LlxuICAgKi9cbiAgcGFyYWxsYXhDYWxjKCRmaWd1cmUsICRpbWcpIHtcbiAgICBjb25zdCB7ICR3aW5kb3cgfSA9IGRvbTtcbiAgICBjb25zdCBpbWdIZWlnaHQgPSAkaW1nLmhlaWdodCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICRmaWd1cmUuaGVpZ2h0KCkgPiAwID8gJGZpZ3VyZS5oZWlnaHQoKSA6IDUwMDtcbiAgICBjb25zdCBwYXJhbGxheERpc3QgPSBpbWdIZWlnaHQgLSBjb250YWluZXJIZWlnaHQ7XG4gICAgY29uc3QgYm90dG9tID0gJGZpZ3VyZS5vZmZzZXQoKS50b3AgKyBjb250YWluZXJIZWlnaHQ7XG4gICAgY29uc3QgdG9wID0gJGZpZ3VyZS5vZmZzZXQoKS50b3A7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IC8vIFVzaW5nIGB3aW5kb3dgLCBOT1QgYCR3aW5kb3dgOyB3ZSBuZWVkIGEgZnJlc2ggY2FsY3VsYXRpb24gaGVyZS5cbiAgICBjb25zdCB3aW5kb3dCb3R0b20gPSBzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQ7XG4gICAgY29uc3QgcGVyY2VudFNjcm9sbGVkID0gKHdpbmRvd0JvdHRvbSAtIHRvcCkgLyAoY29udGFpbmVySGVpZ2h0ICsgd2luZG93SGVpZ2h0KTtcblxuICAgIGlmIChib3R0b20gPiBzY3JvbGxUb3AgJiYgdG9wIDwgc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0KSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwYXJhbGxheERpc3QgKiBwZXJjZW50U2Nyb2xsZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tLCBpc01vYmlsZSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBUaGlzIGZpbGUgaW5jbHVkZXMgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIGRyb3Bkb3duXG4gKiBtZW51cy5cbiAqXG4gKiBCeSBkZWZhdWx0IGFsbCBIVE1MIGVsZW1lbnRzIHdpdGggY2xhc3MgYGZzLW1lbnVgXG4gKiBhcmUgYXV0b21hdGljYWxseSBiaW5kZWQuXG4gKlxuICogQWxzbywgbWVudSBpdGVtcyB3aXRoIGNsYXNzICduby1jbGljaycgYXJlIHNldHVwIHRvXG4gKiBwcmV2ZW50IHRoZSBkZWZhdWx0IGNsaWNrIGJlaGF2aW9yLlxuICpcbiAqIEBzdW1tYXJ5ICBEcm9wZG93biBNZW51c1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIE1lbnUuanNcbiAqL1xuY2xhc3MgTWVudSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBgbWVudWAgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJG1lbnUgPSAkKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCRtZW51LmRhdGEoJ2RlbGF5JykgfHwgMCA9PT0gJG1lbnUuZGF0YSgnZGVsYXknKSkge1xuICAgICAgdGhpcy5zZXR0aW5ncy5kZWxheSA9ICRtZW51LmRhdGEoJ2RlbGF5Jyk7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lciA9IHt9OyAvLyBLZWVwIHRyYWNrIG9mIGRlbGF5ZWQgdHJhbnNpdGlvbnMuXG4gICAgdGhpcy5mbHlvdXQgPSB0aGlzLmZseW91dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2hvdyA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpO1xuXG4gICAgY29uc3QgeyBmbHlvdXQsIHNob3csIGhpZGUgfSA9IHRoaXM7XG5cbiAgICAkbWVudS5yZW1vdmVDbGFzcygnbm8tanMnKTtcblxuICAgIC8qXG4gICAgICogVHJpZ2dlcnMgZHJvcGRvd24gc2hvdyBhbmQgaGlkZSwgdXBvbiBtb3VzZWVudGVyXG4gICAgICogYW5kIG1vdXNlbGVhdmUuXG4gICAgICovXG4gICAgJG1lbnVcbiAgICAgIC5maW5kKCdsaScpXG4gICAgICAuaGFzKHRoaXMuc2V0dGluZ3MuZHJvcERvd25TZWxlY3RvcilcbiAgICAgIC5hZGRDbGFzcygnbWVudS1pdGVtLWhhcy1jaGlsZHJlbicpXG4gICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHRyaWdnZXIgPSAkKHRoaXMpO1xuICAgICAgICBmbHlvdXQoJHRyaWdnZXIpOyAvLyBEZXRlcm1pbmUgYW5kIGFkZHMgY2xhc3MgZm9yIGZseW91dCBkaXJlY3Rpb24uXG4gICAgICAgIHNob3coJHRyaWdnZXIpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBoaWRlKCQodGhpcykpO1xuICAgICAgfSlcbiAgICAgIC5maW5kKCc+IGEnKVxuICAgICAgLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJzdWItaW5kaWNhdG9yXCI+PC9zcGFuPicpO1xuXG4gICAgLy8gQWRkcyBDU1MgY2xhc3NlcyB0byBlYWNoIGxldmVsIG9mIHRoZSBtZW51LCAxLTMuXG4gICAgJG1lbnUuY2hpbGRyZW4oJ2xpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcylcbiAgICAgICAgLmFkZENsYXNzKCdsZXZlbC0xJylcbiAgICAgICAgLmNoaWxkcmVuKCd1bCcpXG4gICAgICAgIC5jaGlsZHJlbignbGknKVxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2xldmVsLTInKVxuICAgICAgICAgICAgLmNoaWxkcmVuKCd1bCcpXG4gICAgICAgICAgICAuY2hpbGRyZW4oJ2xpJylcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsZXZlbC0zJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgbW9iaWxlIHRvdWNoIHN1cHBvcnQuXG4gICAgaWYgKGlzTW9iaWxlKCkpIHtcbiAgICAgIC8vIFRhcCBhbnl3aGVyZSBvbiBpT1MgdG8gdW5mb2N1cyBhIHN1Ym1lbnUuXG4gICAgICAkKCdodG1sJylcbiAgICAgICAgLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgICAgICAub24oJ2NsaWNrJywgJC5ub29wKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCBtZW51IG9wdGlvbnMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGF5OiA1MDAsXG4gICAgICBkcm9wRG93blNlbGVjdG9yOiAndWw6bm90KC5tZWdhLXN1Yi1tZW51KSwgLmZzLW1lZ2EnXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBkaXJlY3Rpb24gdGhlIGRyb3Bkb3duIG1lbnUgc2hvdWxkXG4gICAqIGZseW91dCB0b3dhcmRzLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0cmlnZ2VyIFRoZSBwYXJlbnQgbWVudSBpdGVtLCBmb3Igd2hpY2ggdGhlIGRyb3Bkb3duIGJlbG9uZ3MgdG8uXG4gICAqL1xuICBmbHlvdXQoJHRyaWdnZXIpIHtcbiAgICBpZiAoISR0cmlnZ2VyLmhhc0NsYXNzKCdsZXZlbC0xJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRyb3BEb3duU2VsZWN0b3IgfSA9IHRoaXMuc2V0dGluZ3M7XG4gICAgY29uc3QgeyAkYm9keSB9ID0gZG9tO1xuICAgIGNvbnN0ICRmbHlvdXQgPSAkdHJpZ2dlci5jaGlsZHJlbihkcm9wRG93blNlbGVjdG9yKTtcbiAgICBsZXQgbG9jYXRpb24gPSAkdHJpZ2dlci5vZmZzZXQoKTtcbiAgICBsZXQgc3BhY2UgPSAyMDA7XG5cbiAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ3J0bCcpKSB7XG4gICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uWydyaWdodCddO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uWydsZWZ0J107XG4gICAgfVxuXG4gICAgaWYgKCRmbHlvdXQuZmluZCgnLmxldmVsLTMnKS5sZW5ndGggPiAwKSB7XG4gICAgICBzcGFjZSArPSBzcGFjZTsgLy8gU3BhY2UgZG91YmxlcyBmb3IgbGV2ZWwgMy5cbiAgICB9XG5cbiAgICAvLyBDYW4ndCB1c2VkIGNhY2hlZCB3aW5kb3cgaGVyZS5cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgLSBsb2NhdGlvbiA8PSBzcGFjZSkge1xuICAgICAgJGZseW91dC5hZGRDbGFzcygncmV2ZXJzZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZmx5b3V0LnJlbW92ZUNsYXNzKCdyZXZlcnNlJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGEgZHJvcGRvd24gbWVudS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBUaGUgcGFyZW50IG1lbnUgaXRlbSwgZm9yIHdoaWNoIHRoZSBkcm9wZG93biBiZWxvbmdzIHRvLlxuICAgKi9cbiAgc2hvdygkdHJpZ2dlcikge1xuICAgIGNvbnN0IHsgZHJvcERvd25TZWxlY3RvciB9ID0gdGhpcy5zZXR0aW5ncztcbiAgICBjb25zdCBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoJHRyaWdnZXIpO1xuICAgIGNvbnN0ICRzaWJsaW5ncyA9ICR0cmlnZ2VyLnNpYmxpbmdzKCkuZmluZChkcm9wRG93blNlbGVjdG9yKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJHRyaWdnZXIuY2hpbGRyZW4oZHJvcERvd25TZWxlY3Rvcik7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcltsZXZlbF0pO1xuXG4gICAgJHNpYmxpbmdzLnJlbW92ZUNsYXNzKCdpbicpO1xuXG4gICAgJHRhcmdldC5hZGRDbGFzcygnc2hvdyBmYWRlJyk7XG5cbiAgICB0aGlzLnRpbWVyW2xldmVsXSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkc2libGluZ3MucmVtb3ZlQ2xhc3MoJ3Nob3cgZmFkZScpO1xuICAgICAgJHRhcmdldC5hZGRDbGFzcygnaW4nKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGEgZHJvcGRvd24gbWVudS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBUaGUgcGFyZW50IG1lbnUgaXRlbSwgZm9yIHdoaWNoIHRoZSBkcm9wZG93biBiZWxvbmdzIHRvLlxuICAgKi9cbiAgaGlkZSgkdHJpZ2dlciwgc2V0dGluZ3MpIHtcbiAgICBjb25zdCB7IGRyb3BEb3duU2VsZWN0b3IsIGRlbGF5IH0gPSB0aGlzLnNldHRpbmdzO1xuICAgIGNvbnN0IGxldmVsID0gdGhpcy5nZXRMZXZlbCgkdHJpZ2dlcik7XG4gICAgY29uc3QgJGZseW91dCA9ICR0cmlnZ2VyLmNoaWxkcmVuKGRyb3BEb3duU2VsZWN0b3IpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJbbGV2ZWxdKTtcblxuICAgIHRoaXMudGltZXJbbGV2ZWxdID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRmbHlvdXQucmVtb3ZlQ2xhc3MoJ2luJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICRmbHlvdXQucmVtb3ZlQ2xhc3MoJ3Nob3cgZmFkZScpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgY3VycmVudCBsZXZlbCBvZiB0aGUgZHJvcGRvd24gcGFyZW50XG4gICAqIGl0ZW0gYmVpbmcgdHJpZ2dlcmVkLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAkdHJpZ2dlciBUaGUgcGFyZW50IG1lbnUgaXRlbSwgZm9yIHdoaWNoIHRoZSBkcm9wZG93biBiZWxvbmdzIHRvLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IEN1cnJlbnQgbWVudSBsZXZlbCwgYGxldmVsLTFgLCBgbGV2ZWwtMmAgb3IgYGxldmVsLTNgLlxuICAgKi9cbiAgZ2V0TGV2ZWwoJHRyaWdnZXIpIHtcbiAgICBpZiAoJHRyaWdnZXIuaGFzQ2xhc3MoJ2xldmVsLTMnKSkge1xuICAgICAgcmV0dXJuICdsZXZlbC0zJztcbiAgICB9IGVsc2UgaWYgKCR0cmlnZ2VyLmhhc0NsYXNzKCdsZXZlbC0yJykpIHtcbiAgICAgIHJldHVybiAnbGV2ZWwtMic7XG4gICAgfVxuICAgIHJldHVybiAnbGV2ZWwtMSc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiIsIi8qKlxuICogQWRkcyBzdWJtZW51IG5hdmlnYXRpb24gdG8gbW9iaWxlIG1lbnVzLlxuICpcbiAqIEBzdW1tYXJ5ICBNb2JpbGUgTWVudXNcbiAqXG4gKiBAYXV0aG9yICAgSmFzb24gQm9iaWNoXG4gKiBAbGluayAgICAgaHR0cDovL2Zyb250c3RyZWV0LmlvXG4gKiBAc2luY2UgICAgMS4wLjBcbiAqIEBtb2R1bGUgICBtb2JpbGUtbWVudS5qc1xuICovXG5jbGFzcyBNb2JpbGVNZW51IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGBtb2JpbGUtbWVudWAgYmxvY2sgb24gYSBET00gZWxlbWVudCxcbiAgICogd2hlbiBiaW5kZWQgdGhyb3VnaCBqUXVlcnkuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEJsb2NrIG9wdGlvbnMgKGN1cnJlbnRseSBub3QgdXNlZCkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgJG1lbnUgPSAkKGVsZW1lbnQpO1xuICAgIGNvbnN0ICR0cmlnZ2VycyA9ICRtZW51LmZpbmQoJ2xpJykuaGFzKCd1bCcpO1xuICAgIGNvbnN0IHsgc2hvdywgaGlkZSB9ID0gdGhpcztcblxuICAgICR0cmlnZ2Vyc1xuICAgICAgLmFkZENsYXNzKCdtZW51LWl0ZW0taGFzLWNoaWxkcmVuJylcbiAgICAgIC5jaGlsZHJlbignLm1lbnUtYnRuJylcbiAgICAgIC5vbignY2xpY2suZnMubW9iaWxlLW1lbnUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzaG93KCQodGhpcykpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJzdWItaW5kaWNhdG9yXCI+PC9zcGFuPicpO1xuXG4gICAgJHRyaWdnZXJzXG4gICAgICAuZmluZCgndWwnKVxuICAgICAgLnByZXBlbmQoJzxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwibWVudS1idG4gYmFja1wiPjxzcGFuIGNsYXNzPVwic3ViLWluZGljYXRvclwiPjwvc3Bhbj48L2E+PC9saT4nKVxuICAgICAgLmZpbmQoJy5iYWNrJylcbiAgICAgIC5vbignY2xpY2suZnMubW9iaWxlLW1lbnUtYmFjaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhpZGUoJCh0aGlzKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgJG1lbnUuaGVpZ2h0KCRtZW51LnByb3AoJ3Njcm9sbEhlaWdodCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGEgc3VibWVudS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdHJpZ2dlciBQYXJlbnQgbWVudSBpdGVtIHRyaWdnZXJpbmcgc3VibWVudS5cbiAgICovXG4gIHNob3coJHRyaWdnZXIpIHtcbiAgICAkdHJpZ2dlclxuICAgICAgLmNsb3Nlc3QoJ2xpJylcbiAgICAgIC5jaGlsZHJlbigndWwnKVxuICAgICAgLmFkZENsYXNzKCdvbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgYSBzdWJtZW51LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0cmlnZ2VyIFBhcmVudCBtZW51IGl0ZW0gdHJpZ2dlcmluZyBzdWJtZW51LlxuICAgKi9cbiAgaGlkZSgkdHJpZ2dlcikge1xuICAgICR0cmlnZ2VyLmNsb3Nlc3QoJ3VsJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBkb20gfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogQWRkcyB0YWJzIGJsb2NrIGZ1bmN0aW9uYWxpdHksIHdoaWNoIGFsbG93c1xuICogdG9nZ2xpbmcgYmV0d2VlbiB0YWIgY29udGVudCBwYW5lcy5cbiAqXG4gKiBAc3VtbWFyeSAgVGFic1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIFRhYmJlZC5qc1xuICovXG5jbGFzcyBUYWJiZWQge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYHRhYnNgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zIChjdXJyZW50bHkgbm90IHVzZWQpLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICR0YWJzID0gJChlbGVtZW50KTtcbiAgICBjb25zdCBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBjb25zdCB7ICR3aW5kb3cgfSA9IGRvbTtcblxuICAgIHRoaXMuZGVlcExpbmsgPSB0aGlzLmRlZXBMaW5rLmJpbmQodGhpcyk7XG5cbiAgICBjb25zdCB7IHNob3csIG1hdGNoSGVpZ2h0LCBkZWVwTGluayB9ID0gdGhpcztcblxuICAgIC8qXG4gICAgICogVGhlIGZvbGxvd2luZyBjbGFzc2VzIGJlaW5nIGFkZGVkIHRvIHRoZSB0YWJzIGVsZW1lbnRcbiAgICAgKiBjYW4gb3ZlcnJpZGUgdGhlIGhlaWdodCBhbmQgZGVlcExpbmsgb3B0aW9ucy5cbiAgICAgKi9cbiAgICBpZiAoJHRhYnMuaGFzQ2xhc3MoJ3RhYnMtZml4ZWQtaGVpZ2h0JykpIHtcbiAgICAgIHNldHRpbmdzLmhlaWdodCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCR0YWJzLmhhc0NsYXNzKCd0YWJzLWRlZXAtbGluaycpKSB7XG4gICAgICBzZXR0aW5ncy5kZWVwTGluayA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGFjY2Vzc2libGl0eS5cbiAgICAkdGFicy5maW5kKCcudGFiLXBhbmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHBhbmUgPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoJHBhbmUuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICRwYW5lLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRwYW5lLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUb2dnbGUgdGFiIGNvbnRlbnQuXG4gICAgJHRhYnNcbiAgICAgIC5maW5kKHNldHRpbmdzLm5hdlNlbGVjdG9yKVxuICAgICAgLmZpbmQoJ2EnKVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNob3coJHRhYnMsICQodGhpcyksIHNldHRpbmdzKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gU2V0dXAgZml4ZWQgaGVpZ2h0IGFuZC9vciBkZWVwLWxpbmtpbmcuXG4gICAgaWYgKHNldHRpbmdzLmhlaWdodCB8fCBzZXR0aW5ncy5kZWVwTGluaykge1xuICAgICAgJHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBNYXRjaCBoZWlnaHQgb2YgYWxsIHRhYnMgdG8gdGFsbGVzdC5cbiAgICAgICAgaWYgKHNldHRpbmdzLmhlaWdodCkge1xuICAgICAgICAgIG1hdGNoSGVpZ2h0KCR0YWJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdhdGNoIGZvciBkZWVwLWxpbmtpbmcuXG4gICAgICAgIGlmIChzZXR0aW5ncy5kZWVwTGluaykge1xuICAgICAgICAgIGRlZXBMaW5rKCR0YWJzLCBzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHRhYnMgb3B0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2U2VsZWN0b3I6ICcubWVudS1iYXIsIC5zdWJtZW51LWJhciwgLnN1Ym1lbnUtdGFicywgLnN1Ym1lbnUtcGlsbHMnLFxuICAgICAgaGVpZ2h0OiBmYWxzZSxcbiAgICAgIGRlZXBMaW5rOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhIHRhYi5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGFicyAgICBUaGUgYmluZGVkIGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9ICR0cmlnZ2VyIExpbmsgKHRhYikgd2hpY2ggaXMgdHJpZ2dlcmluZyBuZXcgY29udGVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICAgKi9cbiAgc2hvdygkdGFicywgJHRyaWdnZXIsIHNldHRpbmdzKSB7XG4gICAgY29uc3QgJG5hdiA9ICR0cmlnZ2VyLmNsb3Nlc3Qoc2V0dGluZ3MubmF2U2VsZWN0b3IpO1xuICAgIGNvbnN0IHRhcmdldCA9ICR0cmlnZ2VyLmF0dHIoJ2hyZWYnKS5zcGxpdCgnIycpWzFdO1xuXG4gICAgJG5hdi5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICR0cmlnZ2VyLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgJHRhYnNcbiAgICAgIC5maW5kKCcudGFiLXBhbmUnKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgIC5yZW1vdmVDbGFzcygnaW4nKVxuICAgICAgLmhpZGUoKVxuICAgICAgLnJlbW92ZUNsYXNzKCdmYWRlJyk7XG5cbiAgICAkdGFic1xuICAgICAgLmZpbmQoJyMnICsgdGFyZ2V0KVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgLmFkZENsYXNzKCdmYWRlJylcbiAgICAgIC5zaG93KDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbicpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGFsbCB0YWIgY29udGVudCBwYW5lcyB0byBoYXZlIGVxdWFsIGhlaWdodCwgdG9cbiAgICogdGhlIHRhbGxlc3Qgb25lLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0YWJzIFRoZSBiaW5kZWQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKi9cbiAgbWF0Y2hIZWlnaHQoJHRhYnMpIHtcbiAgICBsZXQgdGFsbGVzdCA9IDA7XG5cbiAgICAkdGFicy5maW5kKCcudGFiLXBhbmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHBhbmUgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgY3VycmVudEhlaWdodCA9ICRwYW5lLnNob3coKS5vdXRlckhlaWdodCgpO1xuXG4gICAgICBpZiAoISRwYW5lLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAkcGFuZS5oaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gdGFsbGVzdCkge1xuICAgICAgICB0YWxsZXN0ID0gY3VycmVudEhlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICR0YWJzLmZpbmQoJy50YWItcGFuZScpLmhlaWdodCh0YWxsZXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCBmb3IgdGFiIGRlZXAtbGlua2luZy5cbiAgICpcbiAgICogVGFiIGRlZXAtbGlua2luZyBpcyB3aGVuIHRoZSB1c2VyIHBhc3NlcyBhIHRhYiBJRFxuICAgKiB0aHJvdWdoIHRoZSBVUkwgb2YgdGhlIHdlYnBhZ2UgdG8gdHJpZ2dlciBvcGVuaW5nXG4gICAqIGEgc3BlY2lmaWMgdGFiIHBhbmUuXG4gICAqXG4gICAqIFRvIGRlZXAgbGluayB0byBhIHRhYiwgeW91IG5lZWQgdG8gcHJlZml4XG4gICAqIHRoZSBJRCBvZiB0aGUgdGFiIHdpdGggXCJ0YWJfXCIgbGlrZSB0aGlzOlxuICAgKlxuICAgKiBgaHR0cDovL3lvdXItc2l0ZS5jb20vcGFnZS13aXRoLXRhYnMvI3RhYl9pZF9vZl90YWJgXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRhYnMgICAgVGhlIGJpbmRlZCBqUXVlcnkgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAgICovXG4gIGRlZXBMaW5rKCR0YWJzLCBzZXR0aW5ncykge1xuICAgIGxldCBoYXNoID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaDtcblxuICAgIGlmIChoYXNoICYmIC0xICE9IGhhc2guaW5kZXhPZigndGFiXycpKSB7XG4gICAgICBoYXNoID0gaGFzaC5yZXBsYWNlKCd0YWJfJywgJycpO1xuXG4gICAgICB0aGlzLnNob3coJHRhYnMsICR0YWJzLmZpbmQoJ2FbaHJlZj1cIicgKyBoYXNoICsgJ1wiXSAnKSwgc2V0dGluZ3MpO1xuXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHNjcm9sbFRvcDogJHRhYnMub2Zmc2V0KCkudG9wIC0gMjBcbiAgICAgICAgfSxcbiAgICAgICAgODAwXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJiZWQ7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIEFkZHMgdG9nZ2xlcyBibG9jayBmdW5jdGlvbmFsaXR5LCB3aGljaCBhbGxvd3NcbiAqIHRvZ2dsZSBkaXNwbGF5IG9mIGNvbnRlbnQuXG4gKlxuICogQHN1bW1hcnkgIFRvZ2dsZVxuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIFRvZ2dsZS5qc1xuICovXG5jbGFzcyBUb2dnbGUge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYHRhYnNgIGJsb2NrIG9uIGEgRE9NIGVsZW1lbnQsXG4gICAqIHdoZW4gYmluZGVkIHRocm91Z2ggalF1ZXJ5LlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBCbG9jayBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0ICR0b2dnbGUgPSAkKGVsZW1lbnQpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHsgb3BlbiwgY2xvc2UgfSA9IHRoaXM7XG5cbiAgICBsZXQgJGdyb3VwID0gbnVsbDtcblxuICAgIGlmICgkdG9nZ2xlLnBhcmVudHMoJy50b2dnbGUtZ3JvdXAnKS5sZW5ndGggPiAwKSB7XG4gICAgICAkZ3JvdXAgPSAkdG9nZ2xlLmNsb3Nlc3QoJy50b2dnbGUtZ3JvdXAnKTtcbiAgICB9XG5cbiAgICBpZiAoJGdyb3VwICYmICRncm91cC5oYXNDbGFzcygndG9nZ2xlLWFjY29yZGlvbicpKSB7XG4gICAgICBzZXR0aW5ncy5hY2NvcmRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBhY2Nlc3NpYmxpdHkuXG4gICAgJHRvZ2dsZS5maW5kKCcudG9nZ2xlLWNvbnRlbnQnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgLy8gT3BlbiBpbml0aWFsbHkgaWYgaGFzIGNsYXNzIGB0b2dnbGUtZXhwYW5kZWRgLlxuICAgIGlmICgkdG9nZ2xlLmhhc0NsYXNzKCd0b2dnbGUtZXhwYW5kZWQnKSkge1xuICAgICAgb3BlbigkdG9nZ2xlLCBzZXR0aW5ncy5zcGVlZCk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIHRvZ2dsZSBjbGljay5cbiAgICAkdG9nZ2xlLmZpbmQoJy50b2dnbGUtdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgJCh0aGlzKS5ibHVyKCk7XG5cbiAgICAgIGlmICgkdG9nZ2xlLmhhc0NsYXNzKCd0b2dnbGUtZXhwYW5kZWQnKSkge1xuICAgICAgICAvLyBUb2dnbGUgaXMgb3Blbjsgc28gY2xvc2UgaXQuXG4gICAgICAgIGNsb3NlKCR0b2dnbGUsIHNldHRpbmdzLnNwZWVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgkZ3JvdXAgJiYgc2V0dGluZ3MuYWNjb3JkaW9uKSB7XG4gICAgICAgICAgJGdyb3VwLmZpbmQoJy5mcy10b2dnbGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2xvc2UoJCh0aGlzKSwgc2V0dGluZ3Muc3BlZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG9nZ2xlIGlzIGNsb3NlZDsgc28gb3BlbiBpdC5cbiAgICAgICAgb3BlbigkdG9nZ2xlLCBzZXR0aW5ncy5zcGVlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB0b2dnbGUgb3B0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3BlZWQ6IDIwMCxcbiAgICAgIGFjY29yZGlvbjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gYSB0b2dnbGUuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRvZ2dsZSBUaGUgYmluZGVkIGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkICAgQW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIG9wZW4oJHRvZ2dsZSwgc3BlZWQpIHtcbiAgICAkdG9nZ2xlXG4gICAgICAuYWRkQ2xhc3MoJ3RvZ2dsZS1leHBhbmRlZCcpXG4gICAgICAuZmluZCgnLnRvZ2dsZS1jb250ZW50JylcbiAgICAgIC5zdG9wKHRydWUsIHRydWUpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICAuc2xpZGVEb3duKHNwZWVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhIHRvZ2dsZS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdG9nZ2xlIFRoZSBiaW5kZWQgalF1ZXJ5IERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWQgICBBbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxuICAgKi9cbiAgY2xvc2UoJHRvZ2dsZSwgc3BlZWQpIHtcbiAgICAkdG9nZ2xlXG4gICAgICAucmVtb3ZlQ2xhc3MoJ3RvZ2dsZS1leHBhbmRlZCcpXG4gICAgICAuZmluZCgnLnRvZ2dsZS1jb250ZW50JylcbiAgICAgIC5zdG9wKHRydWUsIHRydWUpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgLnNsaWRlVXAoc3BlZWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogQWRkcyB0b29sdGlwIGJsb2NrIGZ1bmN0aW9uYWxpdHkuXG4gKlxuICogSW5zcGlyZWQgYnkgQm9vdHN0cmFwIDMncyB0b29sdGlwcy5qcywgd2hpY2ggd2FzIGluc3BpcmVkXG4gKiBieSB0aGUgb3JpZ2luYWwgalF1ZXJ5LnRpcHN5IGJ5IEphc29uIEZyYW1lLlxuICpcbiAqIEBzdW1tYXJ5ICBUb29sdGlwXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgVG9vbHRpcC5qc1xuICovXG5jbGFzcyBUb29sdGlwIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGB0b29sdGlwYCBibG9jayBvbiBhIERPTSBlbGVtZW50LFxuICAgKiB3aGVuIGJpbmRlZCB0aHJvdWdoIGpRdWVyeS5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGpRdWVyeSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQmxvY2sgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gbnVsbDtcbiAgICB0aGlzLmVuYWJsZWQgPSBudWxsO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5ob3ZlclN0YXRlID0gbnVsbDtcbiAgICB0aGlzLiRlbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmluU3RhdGUgPSBudWxsO1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy4kdmlld3BvcnQgPVxuICAgICAgdGhpcy5zZXR0aW5ncy52aWV3cG9ydCAmJlxuICAgICAgJChcbiAgICAgICAgJC5pc0Z1bmN0aW9uKHRoaXMuc2V0dGluZ3Mudmlld3BvcnQpXG4gICAgICAgICAgPyB0aGlzLnNldHRpbmdzLnZpZXdwb3J0LmNhbGwodGhpcywgdGhpcy4kZWxlbWVudClcbiAgICAgICAgICA6IHRoaXMuc2V0dGluZ3Mudmlld3BvcnQuc2VsZWN0b3IgfHwgdGhpcy5zZXR0aW5ncy52aWV3cG9ydFxuICAgICAgKTtcbiAgICB0aGlzLmluU3RhdGUgPSB7IGNsaWNrOiBmYWxzZSwgaG92ZXI6IGZhbHNlLCBmb2N1czogZmFsc2UgfTtcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ21vdXNlZW50ZXIudG9vbHRpcCcsIGZhbHNlLCAkLnByb3h5KHRoaXMuZW50ZXIsIHRoaXMpKTtcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWxlYXZlLnRvb2x0aXAnLCBmYWxzZSwgJC5wcm94eSh0aGlzLmxlYXZlLCB0aGlzKSk7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdmb2N1c2luLnRvb2x0aXAnLCBmYWxzZSwgJC5wcm94eSh0aGlzLmVudGVyLCB0aGlzKSk7XG4gICAgdGhpcy4kZWxlbWVudC5vbignZm9jdXNvdXQudG9vbHRpcCcsIGZhbHNlLCAkLnByb3h5KHRoaXMubGVhdmUsIHRoaXMpKTtcblxuICAgIHRoaXMuZ2V0RGVsZWdhdGVTZXR0aW5ncyA9IHRoaXMuZ2V0RGVsZWdhdGVTZXR0aW5ncy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZW50ZXIgPSB0aGlzLmVudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pc0luU3RhdGVUcnVlID0gdGhpcy5pc0luU3RhdGVUcnVlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sZWF2ZSA9IHRoaXMubGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3cgPSB0aGlzLnNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFwcGx5UGxhY2VtZW50ID0gdGhpcy5hcHBseVBsYWNlbWVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Q29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFzQ29udGVudCA9IHRoaXMuaGFzQ29udGVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRDYWxjdWxhdGVkT2Zmc2V0ID0gdGhpcy5nZXRDYWxjdWxhdGVkT2Zmc2V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRUaXRsZSA9IHRoaXMuZ2V0VGl0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFVJRCA9IHRoaXMuZ2V0VUlELmJpbmQodGhpcyk7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXJyb3cgPSB0aGlzLmFycm93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbmFibGUgPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGlzYWJsZSA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlRW5hYmxlZCA9IHRoaXMudG9nZ2xlRW5hYmxlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHRvb2x0aXAgb3B0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgIHRlbXBsYXRlOlxuICAgICAgICAnPGRpdiBjbGFzcz1cImZzLXRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICAgIHZpZXdwb3J0OiB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIHBhZGRpbmc6IDBcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVsZWdhdGVTZXR0aW5ncygpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHt9O1xuXG4gICAgdGhpcy5fc2V0dGluZ3MgJiZcbiAgICAgICQuZWFjaCh0aGlzLl9zZXR0aW5ncywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT0gdGhpcy5kZWZhdWx0c1trZXldKSB7XG4gICAgICAgICAgc2V0dGluZ3Nba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHJldHVybiBzZXR0aW5ncztcbiAgfVxuXG4gIGVudGVyKG9iaikge1xuICAgIGxldCBzZWxmID0gb2JqIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3RvciA/IG9iaiA6ICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnKTtcblxuICAgIGlmICghc2VsZikge1xuICAgICAgc2VsZiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG9iai5jdXJyZW50VGFyZ2V0LCB0aGlzLmdldERlbGVnYXRlU2V0dGluZ3MoKSk7XG4gICAgICAkKG9iai5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJywgc2VsZik7XG4gICAgfVxuXG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mICQuRXZlbnQpIHtcbiAgICAgIHNlbGYuaW5TdGF0ZVtvYmoudHlwZSA9PSAnZm9jdXNpbicgPyAnZm9jdXMnIDogJ2hvdmVyJ10gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnRpcCgpLmhhc0NsYXNzKCdpbicpIHx8IHNlbGYuaG92ZXJTdGF0ZSA9PSAnaW4nKSB7XG4gICAgICBzZWxmLmhvdmVyU3RhdGUgPSAnaW4nO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuaG92ZXJTdGF0ZSA9ICdpbic7XG5cbiAgICByZXR1cm4gc2VsZi5zaG93KCk7XG4gIH1cblxuICBpc0luU3RhdGVUcnVlKCkge1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmluU3RhdGUpIHtcbiAgICAgIGlmICh0aGlzLmluU3RhdGVba2V5XSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZWF2ZShvYmopIHtcbiAgICBsZXQgc2VsZiA9IG9iaiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IgPyBvYmogOiAkKG9iai5jdXJyZW50VGFyZ2V0KS5kYXRhKCdmcy50b29sdGlwJyk7XG5cbiAgICBpZiAoIXNlbGYpIHtcbiAgICAgIHNlbGYgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihvYmouY3VycmVudFRhcmdldCwgdGhpcy5nZXREZWxlZ2F0ZVNldHRpbmdzKCkpO1xuICAgICAgJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcsIHNlbGYpO1xuICAgIH1cblxuICAgIGlmIChvYmogaW5zdGFuY2VvZiAkLkV2ZW50KSB7XG4gICAgICBzZWxmLmluU3RhdGVbb2JqLnR5cGUgPT0gJ2ZvY3Vzb3V0JyA/ICdmb2N1cycgOiAnaG92ZXInXSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWxmLmlzSW5TdGF0ZVRydWUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuaG92ZXJTdGF0ZSA9ICdvdXQnO1xuXG4gICAgcmV0dXJuIHNlbGYuaGlkZSgpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBsZXQgZSA9ICQuRXZlbnQoJ3Nob3cuZnMudG9vbHRpcCcpO1xuXG4gICAgaWYgKHRoaXMuaGFzQ29udGVudCgpICYmIHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpO1xuXG4gICAgICBsZXQgaW5Eb20gPSAkLmNvbnRhaW5zKHRoaXMuJGVsZW1lbnRbMF0ub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuJGVsZW1lbnRbMF0pO1xuXG4gICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaW5Eb20pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBsZXQgJHRpcCA9IHRoaXMudGlwKCk7XG4gICAgICBsZXQgdGlwSWQgPSB0aGlzLmdldFVJRCgndG9vbHRpcCcpO1xuXG4gICAgICB0aGlzLnNldENvbnRlbnQoKTtcbiAgICAgICR0aXAuYXR0cignaWQnLCB0aXBJZCk7XG4gICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZCk7XG5cbiAgICAgICR0aXAuYWRkQ2xhc3MoJ2ZhZGUnKTtcblxuICAgICAgbGV0IHBsYWNlbWVudCA9IHRoaXMuc2V0dGluZ3MucGxhY2VtZW50O1xuICAgICAgbGV0IGF1dG9Ub2tlbiA9IC9cXHM/YXV0bz9cXHM/L2k7XG4gICAgICBsZXQgYXV0b1BsYWNlID0gYXV0b1Rva2VuLnRlc3QocGxhY2VtZW50KTtcblxuICAgICAgaWYgKGF1dG9QbGFjZSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQucmVwbGFjZShhdXRvVG9rZW4sICcnKSB8fCAndG9wJztcbiAgICAgIH1cblxuICAgICAgJHRpcFxuICAgICAgICAuZGV0YWNoKClcbiAgICAgICAgLmNzcyh7IHRvcDogMCwgbGVmdDogMCwgZGlzcGxheTogJ2Jsb2NrJyB9KVxuICAgICAgICAuYWRkQ2xhc3MocGxhY2VtZW50KVxuICAgICAgICAuZGF0YSgnZnMudG9vbHRpcCcsIHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5jb250YWluZXIpIHtcbiAgICAgICAgJHRpcC5hcHBlbmRUbyh0aGlzLnNldHRpbmdzLmNvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkdGlwLmluc2VydEFmdGVyKHRoaXMuJGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2luc2VydGVkLmZzLnRvb2x0aXAnKTtcblxuICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICAgIGxldCBhY3R1YWxXaWR0aCA9ICR0aXBbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICBsZXQgYWN0dWFsSGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIGlmIChhdXRvUGxhY2UpIHtcbiAgICAgICAgbGV0IG9yZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgICAgbGV0IHZpZXdwb3J0RGltID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLiR2aWV3cG9ydCk7XG5cbiAgICAgICAgaWYgKCdib3R0b20nID09IHBsYWNlbWVudCAmJiBwb3MuYm90dG9tICsgYWN0dWFsSGVpZ2h0ID4gdmlld3BvcnREaW0uYm90dG9tKSB7XG4gICAgICAgICAgcGxhY2VtZW50ID0gJ3RvcCc7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3RvcCcgPT0gcGxhY2VtZW50ICYmIHBvcy50b3AgLSBhY3R1YWxIZWlnaHQgPCB2aWV3cG9ydERpbS50b3ApIHtcbiAgICAgICAgICBwbGFjZW1lbnQgPSAnYm90dG9tJztcbiAgICAgICAgfVxuXG4gICAgICAgICR0aXAucmVtb3ZlQ2xhc3Mob3JnUGxhY2VtZW50KS5hZGRDbGFzcyhwbGFjZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2FsY3VsYXRlZE9mZnNldCA9IHRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldChwbGFjZW1lbnQsIHBvcywgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodCk7XG5cbiAgICAgIHRoaXMuYXBwbHlQbGFjZW1lbnQoY2FsY3VsYXRlZE9mZnNldCwgcGxhY2VtZW50KTtcblxuICAgICAgbGV0IGNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBwcmV2SG92ZXJTdGF0ZSA9IHRoYXQuaG92ZXJTdGF0ZTtcblxuICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ3Nob3duLmZzLnRvb2x0aXAnKTtcbiAgICAgICAgdGhhdC5ob3ZlclN0YXRlID0gbnVsbDtcblxuICAgICAgICBpZiAoJ291dCcgPT0gcHJldkhvdmVyU3RhdGUpIHtcbiAgICAgICAgICB0aGF0LmxlYXZlKHRoYXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5UGxhY2VtZW50KG9mZnNldCwgcGxhY2VtZW50KSB7XG4gICAgY29uc3QgJHRpcCA9IHRoaXMudGlwKCk7XG4gICAgY29uc3Qgd2lkdGggPSAkdGlwWzBdLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IG1hcmdpblRvcCA9IHBhcnNlSW50KCR0aXAuY3NzKCdtYXJnaW4tdG9wJyksIDEwKTtcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoJHRpcC5jc3MoJ21hcmdpbi1sZWZ0JyksIDEwKTtcblxuICAgIG9mZnNldC50b3AgKz0gbWFyZ2luVG9wO1xuICAgIG9mZnNldC5sZWZ0ICs9IG1hcmdpbkxlZnQ7XG5cbiAgICAvKlxuICAgICAqICQuZm4ub2Zmc2V0IGRvZXNuJ3Qgcm91bmQgcGl4ZWwgdmFsdWVzOyBzbyB3ZSB1c2VcbiAgICAgKiBzZXRPZmZzZXQgZGlyZWN0bHkgd2l0aCBvdXIgb3duIGZ1bmN0aW9uIEItMC5cbiAgICAgKi9cbiAgICAkLm9mZnNldC5zZXRPZmZzZXQoXG4gICAgICAkdGlwWzBdLFxuICAgICAgJC5leHRlbmQoXG4gICAgICAgIHtcbiAgICAgICAgICB1c2luZzogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICR0aXAuY3NzKHtcbiAgICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHByb3BzLnRvcCksXG4gICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQocHJvcHMubGVmdClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb2Zmc2V0XG4gICAgICApLFxuICAgICAgMFxuICAgICk7XG5cbiAgICAkdGlwLmFkZENsYXNzKCdpbicpO1xuXG4gICAgLypcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgcGxhY2luZyB0aXAgaW4gbmV3IG9mZnNldCBjYXVzZWQgdGhlXG4gICAgICogdGlwIHRvIHJlc2l6ZSBpdHNlbGYuXG4gICAgICovXG4gICAgY29uc3QgYWN0dWFsV2lkdGggPSAkdGlwWzBdLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGFjdHVhbEhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKCd0b3AnID09IHBsYWNlbWVudCAmJiBhY3R1YWxIZWlnaHQgIT0gaGVpZ2h0KSB7XG4gICAgICBvZmZzZXQudG9wID0gb2Zmc2V0LnRvcCArIGhlaWdodCAtIGFjdHVhbEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0ICR0aXAgPSB0aGlzLnRpcCgpO1xuICAgICR0aXAuZmluZCgnLnRvb2x0aXAtaW5uZXInKVsndGV4dCddKHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgJHRpcC5yZW1vdmVDbGFzcygnZmFkZSBpbiB0b3AgYm90dG9tJyk7XG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgJHRpcCA9ICQodGhpcy4kdGlwKTtcbiAgICBjb25zdCBldmVudCA9ICQuRXZlbnQoJ2hpZGUuZnMudG9vbHRpcCcpO1xuXG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBpZiAoJ2luJyAhPSB0aGF0LmhvdmVyU3RhdGUpIHtcbiAgICAgICAgJHRpcC5kZXRhY2goKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoYXQuJGVsZW1lbnQpIHtcbiAgICAgICAgdGhhdC4kZWxlbWVudC5yZW1vdmVBdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JykudHJpZ2dlcignaGlkZGVuLmZzLnRvb2x0aXAnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGV2ZW50KTtcblxuICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICR0aXAucmVtb3ZlQ2xhc3MoJ2luJyk7XG5cbiAgICB0aGlzLmhvdmVyU3RhdGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBoYXNDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCk7XG4gIH1cblxuICBnZXRQb3NpdGlvbigkZWxlbWVudCkge1xuICAgIGlmICghJGVsZW1lbnQpIHtcbiAgICAgICRlbGVtZW50ID0gdGhpcy4kZWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBlbCA9ICRlbGVtZW50WzBdO1xuICAgIGNvbnN0IGlzQm9keSA9IGVsLnRhZ05hbWUgPT0gJ0JPRFknO1xuXG4gICAgbGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKGVsUmVjdC53aWR0aCA9PSBudWxsKSB7XG4gICAgICBlbFJlY3QgPSAkLmV4dGVuZCh7fSwgZWxSZWN0LCB7XG4gICAgICAgIHdpZHRoOiBlbFJlY3QucmlnaHQgLSBlbFJlY3QubGVmdCxcbiAgICAgICAgaGVpZ2h0OiBlbFJlY3QuYm90dG9tIC0gZWxSZWN0LnRvcFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNTdmcgPSB3aW5kb3cuU1ZHRWxlbWVudCAmJiBlbCBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50O1xuICAgIGNvbnN0IGVsT2Zmc2V0ID0gaXNCb2R5ID8geyB0b3A6IDAsIGxlZnQ6IDAgfSA6IGlzU3ZnID8gbnVsbCA6ICRlbGVtZW50Lm9mZnNldCgpO1xuICAgIGNvbnN0IHNjcm9sbCA9IHtcbiAgICAgIHNjcm9sbDogaXNCb2R5XG4gICAgICAgID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgICA6ICRlbGVtZW50LnNjcm9sbFRvcCgpXG4gICAgfTtcbiAgICBjb25zdCBvdXRlckRpbXMgPSBpc0JvZHkgPyB7IHdpZHRoOiAkKHdpbmRvdykud2lkdGgoKSwgaGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCkgfSA6IG51bGw7XG5cbiAgICByZXR1cm4gJC5leHRlbmQoe30sIGVsUmVjdCwgc2Nyb2xsLCBvdXRlckRpbXMsIGVsT2Zmc2V0KTtcbiAgfVxuXG4gIGdldENhbGN1bGF0ZWRPZmZzZXQocGxhY2VtZW50LCBwb3MsIGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQpIHtcbiAgICBsZXQgb2Zmc2V0ID0ge307XG5cbiAgICBpZiAoJ2JvdHRvbScgPT0gcGxhY2VtZW50KSB7XG4gICAgICBvZmZzZXQgPSB7XG4gICAgICAgIHRvcDogcG9zLnRvcCArIHBvcy5oZWlnaHQsXG4gICAgICAgIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMlxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICB0b3A6IHBvcy50b3AgLSBhY3R1YWxIZWlnaHQsXG4gICAgICAgIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMlxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgbGV0IHRpdGxlID0gdGhpcy5zZXR0aW5ncy50aXRsZTtcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHRpdGxlID0gdGhpcy4kZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGdldFVJRChwcmVmaXgpIHtcbiAgICBkbyB7XG4gICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpO1xuXG4gICAgcmV0dXJuIHByZWZpeDtcbiAgfVxuXG4gIHRpcCgpIHtcbiAgICBpZiAoIXRoaXMuJHRpcCkge1xuICAgICAgdGhpcy4kdGlwID0gJCh0aGlzLnNldHRpbmdzLnRlbXBsYXRlKTtcblxuICAgICAgaWYgKHRoaXMuJHRpcC5sZW5ndGggIT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Rvb2x0aXAgYHRlbXBsYXRlYCBvcHRpb24gbXVzdCBjb25zaXN0IG9mIGV4YWN0bHkgMSB0b3AtbGV2ZWwgZWxlbWVudCEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy4kdGlwO1xuICB9XG5cbiAgYXJyb3coKSB7XG4gICAgcmV0dXJuICh0aGlzLiRhcnJvdyA9IHRoaXMuJGFycm93IHx8IHRoaXMudGlwKCkuZmluZCgnLnRvb2x0aXAtYXJyb3cnKSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9ICF0aGlzLmVuYWJsZWQ7XG4gIH1cblxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHNlbGYgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2ZzLnRvb2x0aXAnKTtcblxuICAgICAgaWYgKCFzZWxmKSB7XG4gICAgICAgIHNlbGYgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLmdldERlbGVnYXRlU2V0dGluZ3MoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZnMudG9vbHRpcCcsIHNlbGYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgc2VsZi5pblN0YXRlLmNsaWNrID0gIXNlbGYuaW5TdGF0ZS5jbGljaztcblxuICAgICAgaWYgKHNlbGYuaXNJblN0YXRlVHJ1ZSgpKSB7XG4gICAgICAgIHNlbGYuZW50ZXIoc2VsZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmxlYXZlKHNlbGYpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2VsZi50aXAoKS5oYXNDbGFzcygnaW4nKSkge1xuICAgICAgICBzZWxmLmxlYXZlKHNlbGYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5lbnRlcihzZWxmKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICB0aGlzLmhpZGUoZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0LiRlbGVtZW50Lm9mZignLnRvb2x0aXAnKS5yZW1vdmVEYXRhKCdmcy50b29sdGlwJyk7XG5cbiAgICAgIGlmICh0aGF0LiR0aXApIHtcbiAgICAgICAgdGhhdC4kdGlwLmRldGFjaCgpO1xuICAgICAgfVxuXG4gICAgICB0aGF0LiR0aXAgPSBudWxsO1xuICAgICAgdGhhdC4kYXJyb3cgPSBudWxsO1xuICAgICAgdGhhdC4kdmlld3BvcnQgPSBudWxsO1xuICAgICAgdGhhdC4kZWxlbWVudCA9IG51bGw7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBkb20gfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGJpbmRzIHByZXNldCBpbnN0YW5jZXMgb2YgTWFnbmlmaWMgUG9wdXAuXG4gKlxuICogTWFnbmlmaWMgUG9wdXAgaXMgYW4gb3BlbiBzb3VyY2UgbGlnaHRib3ggc2NyaXB0XG4gKiBieSBEbWl0cnkgU2VtZW5vdi5cbiAqXG4gKiBAbGluayBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9cbiAqXG4gKiBAc3VtbWFyeSAgTW9kYWxzXG4gKlxuICogQGF1dGhvciAgIEphc29uIEJvYmljaFxuICogQGxpbmsgICAgIGh0dHA6Ly9mcm9udHN0cmVldC5pb1xuICogQHNpbmNlICAgIDEuMC4wXG4gKiBAbW9kdWxlICAgbW9kYWwuanNcbiAqIEByZXF1aXJlcyBtYWduaWZpYy1wb3B1cC5qc1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oJCkge1xuICBpZiAoISQuZm4ubWFnbmlmaWNQb3B1cCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgJGRvY3VtZW50IH0gPSBkb207XG5cbiAgJGRvY3VtZW50LnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgICBsZXQgbWFpbkNsYXNzID0gJ2ZzLW1vZGFsJztcbiAgICBsZXQgcmVtb3ZhbERlbGF5ID0gMDtcblxuICAgIGxldCBjb25maWcgPSB7XG4gICAgICBhbmltYXRpb246ICdmYWRlJyxcbiAgICAgIG1vYmlsZTogMCxcbiAgICAgIG1vYmlsZUlmcmFtZTogNzY4LFxuICAgICAgbW9iaWxlR2FsbGVyeTogMCxcbiAgICAgIGVycm9yOiAnVGhlIG1vZGFsIG1lZGlhIGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcbiAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuICAgICAgY291bnRlcjogJyVjdXJyJSBvZiAldG90YWwlJyxcbiAgICAgIG5leHQ6ICdOZXh0JyxcbiAgICAgIHByZXZpb3VzOiAnUHJldmlvdXMnLFxuICAgICAgY2xvc2VNYXJrdXA6XG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1jbG9zZSBmcy1jbG9zZSBjbG9zZS1saWdodCBjbG9zZS1tZFwiPiV0aXRsZSU8L2J1dHRvbj4nXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93LmZzTW9kYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgY29uZmlnLCB3aW5kb3cuZnNNb2RhbCk7IC8vIEFuIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHlvdSBjb3VsZCBkZWNsYXJlLlxuICAgIH1cblxuICAgIGlmIChjb25maWcuYW5pbWF0aW9uICYmIGNvbmZpZy5hbmltYXRpb24gIT09ICdub25lJykge1xuICAgICAgbWFpbkNsYXNzID0gYCR7bWFpbkNsYXNzfSBmcy1tb2RhbC0ke2NvbmZpZ1snYW5pbWF0aW9uJ119YDtcbiAgICAgIHJlbW92YWxEZWxheSA9IDE1MDtcbiAgICB9XG5cbiAgICAkLmV4dGVuZCh0cnVlLCAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMsIHtcbiAgICAgIHRDbG9zZTogY29uZmlnLmNsb3NlLFxuICAgICAgdExvYWRpbmc6IGA8ZGl2IGNsYXNzPVwiZnMtbG9hZGVyXCI+PHNwYW4+JHtjb25maWcubG9hZGluZ308L3NwYW4+PC9kaXY+YCxcbiAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgdFByZXY6IGNvbmZpZy5wcmV2aW91cyxcbiAgICAgICAgdE5leHQ6IGNvbmZpZy5uZXh0LFxuICAgICAgICB0Q291bnRlcjogY29uZmlnLmNvdW50ZXJcbiAgICAgIH0sXG4gICAgICBpbWFnZToge1xuICAgICAgICB0RXJyb3I6IGNvbmZpZy5lcnJvclxuICAgICAgfSxcbiAgICAgIGFqYXg6IHtcbiAgICAgICAgdEVycm9yOiBjb25maWcuZXJyb3JcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5mcy1tb2RhbC1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtY29udGVudC1tb2RhbC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIG1haW5DbGFzczogbWFpbkNsYXNzLFxuICAgICAgYWxpZ25Ub3A6IHRydWUsXG4gICAgICBzaG93Q2xvc2VCdG46IGZhbHNlLFxuICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLm1mcC13cmFwIC5mcy1tb2RhbCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVDbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLm1mcC13cmFwIC5mcy1tb2RhbCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5mcy1zZWFyY2gtbW9kYWwtbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICBtYWluQ2xhc3M6IG1haW5DbGFzcyArICcgbWZwLXNlYXJjaCcsXG4gICAgICBjbG9zZUJ0bkluc2lkZTogZmFsc2UsXG4gICAgICBjbG9zZU1hcmt1cDogY29uZmlnLmNsb3NlTWFya3VwLFxuICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLm1mcC13cmFwIC5mcy1zZWFyY2gtbW9kYWwnKS5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2Uud3JhcFswXS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQoJy5tZnAtc2VhcmNoIC5mcy1zZWFyY2gtbW9kYWwgaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpLmZvY3VzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcubWZwLXdyYXAgLmZzLXNlYXJjaC1tb2RhbCcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5mcy1tb2RhbC1nYWxsZXJ5LCAudGhlbWVibHZkLWdhbGxlcnknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJGdhbGxlcnkgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgJ3RoZW1lYmx2ZC1saWdodGJveCcsXG4gICAgICAgICdmcy1jb250ZW50LW1vZGFsLWxpbmsnLFxuICAgICAgICAnZnMtaW1hZ2UtbW9kYWwtbGluaycsXG4gICAgICAgICdmcy1pZnJhbWUtbW9kYWwtbGluaydcbiAgICAgIF07XG4gICAgICBjb25zdCBzZWxlY3RvciA9ICcuJyArIGNsYXNzZXMuam9pbignLCAuJyk7XG5cbiAgICAgICRnYWxsZXJ5LmZpbmQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJCh0aGlzKTtcbiAgICAgICAgbGV0IGxpbmtDbGFzcyA9ICcnO1xuXG4gICAgICAgIGlmICgkbGluay5oYXNDbGFzcygnZnMtY29udGVudC1tb2RhbC1saW5rJykpIHtcbiAgICAgICAgICBsaW5rQ2xhc3MgPSAnbWZwLWlubGluZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoJGxpbmsuaGFzQ2xhc3MoJ2ZzLWltYWdlLW1vZGFsLWxpbmsnKSkge1xuICAgICAgICAgIGxpbmtDbGFzcyA9ICdtZnAtaW1hZ2UnO1xuICAgICAgICB9IGVsc2UgaWYgKCRsaW5rLmhhc0NsYXNzKCdmcy1pZnJhbWUtbW9kYWwtbGluaycpKSB7XG4gICAgICAgICAgbGlua0NsYXNzID0gJ21mcC1pZnJhbWUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlua0NsYXNzID0gYGZzLWdhbGxlcnktbW9kYWwtbGluayAke2xpbmtDbGFzc31gO1xuXG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKGNsYXNzZXMuam9pbignICcpKS5hZGRDbGFzcyhsaW5rQ2xhc3MpO1xuICAgICAgfSk7XG5cbiAgICAgICRnYWxsZXJ5Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICBtYWluQ2xhc3M6IG1haW5DbGFzcyxcbiAgICAgICAgY2xvc2VNYXJrdXA6IGNvbmZpZy5jbG9zZU1hcmt1cCxcbiAgICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICAgIGRpc2FibGVPbjogY29uZmlnLm1vYmlsZUdhbGxlcnksXG4gICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgY3Vyc29yOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGVnYXRlOiAnYS5mcy1nYWxsZXJ5LW1vZGFsLWxpbmsnLFxuICAgICAgICBpZnJhbWU6IHtcbiAgICAgICAgICAvLyBBZGQgYm90dG9tIGJhciBmb3IgaWZyYW1lc1xuICAgICAgICAgIG1hcmt1cDogYDxkaXYgY2xhc3M9XCJtZnAtaWZyYW1lLXNjYWxlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWZwLWNsb3NlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWZwLWJvdHRvbS1iYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWZwLXRpdGxlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICB9LFxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBtYXJrdXBQYXJzZTogZnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuICAgICAgICAgICAgdmFsdWVzLnRpdGxlID0gaXRlbS5lbC5hdHRyKCd0aXRsZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtaW1hZ2UtbW9kYWwtbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIG1haW5DbGFzczogbWFpbkNsYXNzLFxuICAgICAgY2xvc2VNYXJrdXA6IGNvbmZpZy5jbG9zZU1hcmt1cCxcbiAgICAgIHJlbW92YWxEZWxheTogcmVtb3ZhbERlbGF5LFxuICAgICAgZGlzYWJsZU9uOiBjb25maWcubW9iaWxlLFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgY3Vyc29yOiBudWxsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZnMtaWZyYW1lLW1vZGFsLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgbWFpbkNsYXNzOiBtYWluQ2xhc3MsXG4gICAgICBjbG9zZU1hcmt1cDogY29uZmlnLmNsb3NlTWFya3VwLFxuICAgICAgcmVtb3ZhbERlbGF5OiByZW1vdmFsRGVsYXksXG4gICAgICBkaXNhYmxlT246IGNvbmZpZy5tb2JpbGVJZnJhbWUsXG4gICAgICBpZnJhbWU6IHtcbiAgICAgICAgLy8gQWRkIGJvdHRvbSBiYXIgZm9yIGlmcmFtZXNcbiAgICAgICAgbWFya3VwOlxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLWlmcmFtZS1zY2FsZXJcIj4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicgK1xuICAgICAgICAgICc8aWZyYW1lIGNsYXNzPVwibWZwLWlmcmFtZVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1ib3R0b20tYmFyXCI+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtdGl0bGVcIj48L2Rpdj4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICc8L2Rpdj4nXG4gICAgICB9LFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG1hcmt1cFBhcnNlOiBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtKSB7XG4gICAgICAgICAgdmFsdWVzLnRpdGxlID0gaXRlbS5lbC5hdHRyKCd0aXRsZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSkoJCk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIFRoaXMgZmlsZSBiaW5kcyBwcmVzZXQgaW5zdGFuY2VzIG9mIE93bENhcm91c2VsLFxuICogYWxsb3dpbmcgZm9yIHRob3NlIHRvIGJlIGNvbmZpZ3VyZWQgdGhyb3VnaCB0aGVcbiAqIEhUTUwgbWFya3VwLlxuICpcbiAqIE93bENhcm91c2VsIGlzIGFuIG9wZW4gc291cmNlIGNhcm91c2VsL3NsaWRlclxuICogc2NyaXB0IGJ5IERhdmlkIERldXRzY2guXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9vd2xjYXJvdXNlbDIuZ2l0aHViLmlvL093bENhcm91c2VsMi9cbiAqXG4gKiBAc3VtbWFyeSAgU2xpZGVyc1xuICpcbiAqIEBhdXRob3IgICBKYXNvbiBCb2JpY2hcbiAqIEBsaW5rICAgICBodHRwOi8vZnJvbnRzdHJlZXQuaW9cbiAqIEBzaW5jZSAgICAxLjAuMFxuICogQG1vZHVsZSAgIG1vZGFsLmpzXG4gKiBAcmVxdWlyZXMgb3dsLWNhcm91c2VsLmpzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCQpIHtcbiAgaWYgKCEkLmZuLm93bENhcm91c2VsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyAkd2luZG93LCAkYm9keSB9ID0gZG9tO1xuXG4gICR3aW5kb3cub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuZnMtc2ltcGxlLXNsaWRlciwgLmZzLWdhbGxlcnktc2xpZGVyLCAuZnMtYmxvY2stc2xpZGVyJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR3cmFwID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0ICRzbGlkZXIgPSAkd3JhcC5maW5kKCcuZnMtc2xpZGVyJyk7XG4gICAgICBjb25zdCBzcGVlZCA9IHBhcnNlSW50KCR3cmFwLmRhdGEoJ3NwZWVkJykpID8gcGFyc2VJbnQoJHdyYXAuZGF0YSgnc3BlZWQnKSkgOiA1MDA7XG4gICAgICBjb25zdCBhdXRvcGxheVRpbWVvdXQgPSBwYXJzZUludCgkd3JhcC5kYXRhKCdhdXRvcGxheScpKVxuICAgICAgICA/IHBhcnNlSW50KCR3cmFwLmRhdGEoJ2F1dG9wbGF5JykpXG4gICAgICAgIDogMDtcbiAgICAgIGNvbnN0IGF1dG9wbGF5ID0gYXV0b3BsYXlUaW1lb3V0ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgY29uc3QgcGF1c2UgPSAndHJ1ZScgPT0gJHdyYXAuZGF0YSgncGF1c2UnKSB8fCAkd3JhcC5kYXRhKCdwYXVzZScpID09ICcxJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgIGNvbnN0IGxvb3AgPSAnZmFsc2UnID09ICR3cmFwLmRhdGEoJ2xvb3AnKSB8fCAkd3JhcC5kYXRhKCdsb29wJykgPT0gJzAnID8gZmFsc2UgOiB0cnVlO1xuICAgICAgY29uc3QgYW5pbWF0ZSA9ICd0cnVlJyA9PSAkd3JhcC5kYXRhKCdmYWRlJykgfHwgJHdyYXAuZGF0YSgnZmFkZScpID09ICcxJyA/ICdmYWRlT3V0JyA6IGZhbHNlO1xuICAgICAgY29uc3QgYXV0b1dpZHRoID0gJHdyYXAuaGFzQ2xhc3MoJ2ZzLWdhbGxlcnktc2xpZGVyJykgPyB0cnVlIDogZmFsc2U7XG4gICAgICBjb25zdCBjZW50ZXIgPSAkd3JhcC5oYXNDbGFzcygnZnMtZ2FsbGVyeS1zbGlkZXInKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIGNvbnN0ICRuYXYgPSAkd3JhcC5maW5kKCcuZnMtc2xpZGVyLW5hdiwgLmZzLXNsaWRlci10aHVtYnMnKTtcbiAgICAgIGNvbnN0ICRhcnJvd3MgPSAkd3JhcC5maW5kKCcuZnMtc2xpZGVyLWFycm93cycpO1xuXG4gICAgICBsZXQgaXRlbXMgPSBwYXJzZUludCgkd3JhcC5kYXRhKCdpdGVtcycpKSA/IHBhcnNlSW50KCR3cmFwLmRhdGEoJ2l0ZW1zJykpIDogNDtcbiAgICAgIGxldCBtYXJnaW4gPSBwYXJzZUludCgkd3JhcC5kYXRhKCdtYXJnaW4nKSkgPyBwYXJzZUludCgkd3JhcC5kYXRhKCdtYXJnaW4nKSkgOiAxO1xuICAgICAgbGV0IG5hdkNvdW50ZXIgPSAwO1xuXG4gICAgICAvLyBUb2dnbGUgXCJob3ZlcmVkXCIgY2xhc3Mgb24vb2ZmIGZvciBhbnkgQ1NTIGhvdmVyIGVmZmVjdHMuXG4gICAgICAkd3JhcFxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdob3ZlcmVkJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvdmVyZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBzbGlkZS10byBkYXRhIHRvIGVhY2ggbmF2IGl0ZW0uXG4gICAgICAkbmF2LmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5kYXRhKCdzbGlkZS10bycsIG5hdkNvdW50ZXIpO1xuICAgICAgICBuYXZDb3VudGVyKys7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCR3cmFwLmhhc0NsYXNzKCdmcy1zaW1wbGUtc2xpZGVyJykpIHtcbiAgICAgICAgbWFyZ2luID0gMDtcbiAgICAgICAgaXRlbXMgPSAxO1xuICAgICAgfSBlbHNlIGlmICgkd3JhcC5oYXNDbGFzcygnZnMtZ2FsbGVyeS1zbGlkZXInKSkge1xuICAgICAgICBpdGVtcyA9IDE7XG4gICAgICB9XG5cbiAgICAgICRzbGlkZXIub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGRvdHM6IHRydWUsIC8vIE11c3QgYmUgZW5hYmxlZCBmb3IgZS5wYWdlLmluZGV4IHRvIHdvcmsuXG4gICAgICAgIGxvb3A6IGxvb3AsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IHNwZWVkLFxuICAgICAgICBhdXRvcGxheTogYXV0b3BsYXksXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogYXV0b3BsYXlUaW1lb3V0LFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHBhdXNlLFxuICAgICAgICBhbmltYXRlT3V0OiBhbmltYXRlLFxuICAgICAgICBhdXRvV2lkdGg6IGF1dG9XaWR0aCxcbiAgICAgICAgbWFyZ2luOiBtYXJnaW4sXG4gICAgICAgIGNlbnRlcjogY2VudGVyLFxuICAgICAgICBydGw6ICRib2R5Lmhhc0NsYXNzKCdydGwnKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgb25Jbml0aWFsaXplZDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICRuYXYuZmluZCgnbGk6Zmlyc3QtY2hpbGQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgJHdyYXAucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICAgICAgICAgaWYgKCFsb29wKSAkYXJyb3dzLmZpbmQoJ2xpJykuYWRkQ2xhc3MoJ2ZhZGUnKTtcbiAgICAgICAgICAkd3JhcC5maW5kKCcuZnMtbG9hZGVyJykuZmFkZU91dCgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZWQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIE1ha2Ugc3VyZSBuZXh0IGFuZCBwcmV2IGJ1dHRvbnMgZG9uJ3Qgc2hvd1xuICAgICAgICAgICAqIHdoZW4gYXQgc3RhcnQgYW5kIGVuZCBvZiBjeWNsZSwgaWYgdGhlcmUnc1xuICAgICAgICAgICAqIG5vIGxvb3BpbmcuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKCFsb29wKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICR3cmFwLmhhc0NsYXNzKCdmcy1ibG9jay1zbGlkZXInKSA/IGUuaXRlbS5pbmRleCA6IGUucGFnZS5pbmRleDtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09IDAgfHwgaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgICAgJGFycm93cy5maW5kKCdsaS5wcmV2JykucmVtb3ZlQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICAgICRhcnJvd3MuZmluZCgnbGkubmV4dCcpLmFkZENsYXNzKCdpbicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnBhZ2UuaW5kZXggKyAxID09IGUucGFnZS5jb3VudCkge1xuICAgICAgICAgICAgICAkYXJyb3dzLmZpbmQoJ2xpLm5leHQnKS5yZW1vdmVDbGFzcygnaW4nKTtcbiAgICAgICAgICAgICAgJGFycm93cy5maW5kKCdsaS5wcmV2JykuYWRkQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkYXJyb3dzLmZpbmQoJ2xpJykuYWRkQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3RhbmRhcmQgbmF2aWdhdGlvbiBkb3RzLlxuICAgICAgICAgICRuYXYuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgJG5hdi5maW5kKCdsaTpudGgtY2hpbGQoICcgKyAoZS5wYWdlLmluZGV4ICsgMSkgKyAnICknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBCaW5kIHN0YW5kYXJkIHNsaWRlciBuYXYgYW5kIHRodW1iIG5hdi5cbiAgICAgICRuYXYuZmluZCgnbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJGN1cnJlbnQgPSAkKHRoaXMpO1xuXG4gICAgICAgICRzbGlkZXIudHJpZ2dlcigndG8ub3dsLmNhcm91c2VsJywgJGN1cnJlbnQuZGF0YSgnc2xpZGUtdG8nKSk7XG5cbiAgICAgICAgJGN1cnJlbnRcbiAgICAgICAgICAuY2xvc2VzdCgndWwsIG9sJylcbiAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgJGN1cnJlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEJpbmQgc2xpZGVyIGFycm93IG5leHQvcHJldiBuYXYuXG4gICAgICAkYXJyb3dzLmZpbmQoJ2xpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICRzbGlkZXIudHJpZ2dlciggJ3N0b3Aub3dsLmF1dG9wbGF5JyApOyAvLyBEb2Vzbid0IHdvcmsgcmlnaHQgYXMgb2YgdjIuMi4xLlxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbmV4dCcpKSB7XG4gICAgICAgICAgJHNsaWRlci50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzbGlkZXIudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7IC8vIEVuZCAuZWFjaCgpXG4gIH0pOyAvLyBFbmQgLm9uKCAnbG9hZCcgKVxufSkoJCk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgRnJvbnRTdHJlZXQgZnJvbSAnLi9Gcm9udFN0cmVldCc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2Jsb2Nrcy9CYWNrZ3JvdW5kJztcbmltcG9ydCBNZW51IGZyb20gJy4vYmxvY2tzL01lbnUnO1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9ibG9ja3MvTW9iaWxlTWVudSc7XG5pbXBvcnQgVGFiYmVkIGZyb20gJy4vYmxvY2tzL1RhYmJlZCc7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4vYmxvY2tzL1RvZ2dsZSc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL2Jsb2Nrcy9Ub29sdGlwJztcbmltcG9ydCAnLi9ibG9ja3MvbW9kYWwnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9zbGlkZXInO1xuXG5jb25zdCB7ICRkb2N1bWVudCwgJHdpbmRvdyB9ID0gZG9tO1xuY29uc3QgZnJvbnRzdHJlZXQgPSBuZXcgRnJvbnRTdHJlZXQoKTtcblxuLy8gUmVnaXN0ZXIgYWxsIGRlZmF1bHQgYmxvY2tzLlxuZnJvbnRzdHJlZXQuYWRkKCdiYWNrZ3JvdW5kJywgQmFja2dyb3VuZCk7XG5mcm9udHN0cmVldC5hZGQoJ21lbnUnLCBNZW51KTtcbmZyb250c3RyZWV0LmFkZCgnbW9iaWxlLW1lbnUnLCBNb2JpbGVNZW51KTtcbmZyb250c3RyZWV0LmFkZCgndGFiYmVkJywgVGFiYmVkKTtcbmZyb250c3RyZWV0LmFkZCgndG9nZ2xlJywgVG9nZ2xlKTtcbmZyb250c3RyZWV0LmFkZCgndG9vbHRpcCcsIFRvb2x0aXApO1xuXG4vLyBBZGQgcmVnaXN0ZXJlZCBibG9ja3MgdG8galF1ZXJ5IG5hbWVzcGFjZS5cbmZyb250c3RyZWV0LmluaXQoKTtcblxuLyoqXG4gKiBCaW5kIGJsb2NrcyBkZWZhdWx0IGNsYXNzZXMgd2l0aCBqUXVlcnkuXG4gKlxuICogQHNpbmNlIDEuMC4wXG4gKi9cbiRkb2N1bWVudC5yZWFkeShmdW5jdGlvbigkKSB7XG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgZGVmYXVsdCBgbWVudWAgYmxvY2suXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKi9cbiAgJCgnLmZzLW1lbnUnKS5mcm9udHN0cmVldCgnbWVudScpO1xuXG4gIC8qKlxuICAgKiBBZGRzIG5vLWNsaWNrIGZ1bmN0aW9uYWx0aXkgdG8gYW55IGxpbmsgYnlcbiAgICogYWRkaW5nIGNsYXNzIFwibm8tY2xpY2tcIi5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IGludGVyZmFjZS5cbiAgICovXG4gICQoJ2Eubm8tY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBZGRzIG5vLWNsaWNrIGZ1bmN0aW9uYWx0aXkgdG8gYW55IGxpbmsgZGlyZWN0bHlcbiAgICogd2l0aGluIGFuIGxpIHdpdGggY2xhc3MgYG5vLWNsaWNrYC5cbiAgICpcbiAgICogTm90ZTogVGhpcyBpcyBtYWlubHkgaGVyZSB0byBhY2Ntb2RhdGUgaW50ZXJmYWNlc1xuICAgKiBsaWtlIFdvcmRQcmVzcyB3aGljaCBhbGxvdyBidWlsZGluZyBtZW51cywgYnV0IG9ubHlcbiAgICogYWxsb3cgYWRkaW5nIENTUyBjbGFzc2VzIHRvIHRoZSBtZW51IGxpc3QgaXRlbXMuXG4gICAqXG4gICAqIEBzaW5jZSAxLjAuMFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBpbnRlcmZhY2UuXG4gICAqL1xuICAkKCdsaS5uby1jbGljaycpXG4gICAgLmZpbmQoJ2E6Zmlyc3QnKVxuICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAvKipcbiAgICogQmluZHMgdGhlIGRlZmF1bHQgYHRhYnNgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy10YWJiZWQnKS5mcm9udHN0cmVldCgndGFiYmVkJyk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIHRoZSBkZWZhdWx0IGB0b2dnbGVgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy10b2dnbGUnKS5mcm9udHN0cmVldCgndG9nZ2xlJyk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIHRoZSBkZWZhdWx0IGB0b29sdGlwYCBibG9jay5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICAkKCcuZnMtdG9vbHRpcC10cmlnZ2VyJykuZnJvbnRzdHJlZXQoJ3Rvb2x0aXAnKTtcbn0pO1xuXG4kd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gIC8qKlxuICAgKiBTZWxmLWludm9rZXMgdGhlIHBhcmFsbGF4IGVmZmVjdCBvZiB0aGVcbiAgICogYGJhY2tncm91bmRgIGJsb2NrLlxuICAgKlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gICQoJy5mcy1iZy1wYXJhbGxheCcpLmZyb250c3RyZWV0KCdiYWNrZ3JvdW5kJywgeyB0eXBlOiAncGFyYWxsYXgnIH0pO1xufSk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIFN0b3JlIGFuZCBjYWNoZSByZS11c2FibGUgRE9NIGVsZW1lbnRzLlxuICpcbiAqIEBzaW5jZSAxLjAuMFxuICpcbiAqIEB2YXIge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGRvbSA9IHtcbiAgJHdpbmRvdzogJCh3aW5kb3cpLFxuICAkZG9jdW1lbnQ6ICQoZG9jdW1lbnQpLFxuICAkYm9keTogJCgnYm9keScpXG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiB3ZWJzaXRlIGlzIGJlaW5nIGxvYWRlZCBmcm9tIGEgbW9iaWxlXG4gKiBkZXZpY2UuXG4gKlxuICogQHNpbmNlIDEuMC4wXG4gKlxuICogQHBhcmFtICB7Qm9vbGVhbn0gdmlld3BvcnRDaGVjayBXaGV0aGVyIHRvIGxldCB2aWV3cG9ydCBzaXplIGhlbHAgZGV0ZXJtaW5lLlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB3ZSdyZSBvbiBhIG1vYmlsZSBkZXZpY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSh2aWV3cG9ydENoZWNrKSB7XG4gIGNvbnN0IHsgJGJvZHkgfSA9IGRvbTtcblxuICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ21vYmlsZScpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgYWdlbnRDaGVjayA9IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICBuYXZpZ2F0b3IudXNlckFnZW50XG4gICk7XG5cbiAgaWYgKGFnZW50Q2hlY2spIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh2aWV3cG9ydENoZWNrKSB7XG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XG5cbiAgICBpZiAoJHdpbmRvdy53aWR0aCgpIDwgOTkyIHx8ICR3aW5kb3cuaGVpZ2h0KCkgPCA1MDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=