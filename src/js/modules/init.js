/**
 * This file initializes all Front Street JavaScript.
 * A global window.frontStreet object is stored that
 * holds all variables and methods, which is passed around.
 *
 * We also add `frontStreet` to the jQuery namespace
 * here. All components can be binded like:
 *
 * $( '.foo' ).frontStreet( 'component-name', options );
 *
 * @summary  Front Street JavaScript setup.
 *
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   menu.js
 */

/**
 * Global Front Street object.
 *
 * @since 1.0.0
 *
 * @var {object}
 */
window.frontStreet = {};

+(function($, frontStreet) {
  'use strict';

  // Verify that jQuery exists.
  if ('undefined' === typeof jQuery) {
    throw new Error("Front Street's JavaScript requires jQuery");
  }

  // Verity jQuery version.
  var version = $.fn.jquery.split(' ')[0].split('.');

  if (
    (version[0] < 2 && version[1] < 9) ||
    (version[0] == 1 && version[1] == 9 && version[2] < 1) ||
    version[0] > 3
  ) {
    throw new Error(
      "Front Street's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4."
    );
  }

  /**
   * Global Front Street configuration.
   *
   * This configuration can be overridden by
   * creating an fsConfig object before we
   * get to this point in the loading process.
   *
   * @since 1.0.0
   *
   * @var {object}
   */
  frontStreet.config = 'undefined' !== typeof fsConfig ? fsConfig : {};

  /**
   * Store and cache re-usable DOM elements.
   *
   * @since 1.0.0
   *
   * @var {object}
   */
  frontStreet.dom = {
    window: $(window),
    document: $(document),
    body: $('body')
  };

  /**
   * Checks if a framework component should be loaded.
   *
   * @since 1.0.0
   *
   * @param  {string} component Framework component ID.
   * @return {bool}             Whether to include component.
   */
  frontStreet.doComponent = function(component) {
    if ('undefined' === typeof frontStreet.config[component]) {
      return true; // All components are true by default.
    }

    if (false === frontStreet.config[component]) {
      return false;
    }

    if ('false' === frontStreet.config[component]) {
      return false;
    }

    return true;
  };

  /**
   * Checks if website is being loaded from a mobile
   * device.
   *
   * @since 1.0.0
   *
   * @param  {bool} viewportCheck Whether to let viewport size help determine.
   * @return {bool}               Whether we're on a mobile device.
   */
  frontStreet.isMobile = function(viewportCheck) {
    var $body = frontStreet.dom.body;

    if ($body.hasClass('mobile')) {
      return true;
    }

    var agentCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (agentCheck) {
      return true;
    }

    if (viewportCheck) {
      var $window = $(window);

      if ($window.width() < 992 || $window.height() < 500) {
        return true;
      }
    }

    return false;
  };

  /**
   * Adds all components as one item to the jQuery
   * namespace.
   *
   * @since 1.0.0
   *
   * @param {string} component Framework component ID.
   * @param {object} options   Options for component.
   */
  $.fn.frontStreet = function(component, options) {
    /*
		 * To get object name, convert component name to
		 * camel case, i.e. `my-string` to `myString`.
		 */
    var name = component.replace(/-([a-z])/g, function(g) {
      return g[1].toUpperCase();
    });

    return this.each(function() {
      if ('undefined' !== typeof frontStreet[name]) {
        frontStreet[name].init(this, options);
      } else {
        console.log('Front Street component "' + component + '" is missing.');
      }
    });
  };
})(jQuery, window.frontStreet);
