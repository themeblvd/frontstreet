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
