import $ from 'jquery';

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
class FrontStreet {
  /**
   * Class constructor.
   *
   * @since 1.0.0
   */
  constructor() {
    this.blocks = {};
    this.add = this.add.bind(this);
    this.init = this.init.bind(this);
  }

  /**
   * Add a registered block type.
   *
   * @since 1.0.0
   */
  add(type, module) {
    this.blocks[type] = module;
  }

  /**
   * Apply all registered block types to
   * jQuery namespace.
   *
   * @since 1.0.0
   */
  init() {
    const { blocks } = this;

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
    $.fn.frontstreet = function(block, options) {
      return this.each(function() {
        if (blocks[block]) {
          return new blocks[block](this, options);
        }
      });
    };
  }
}

export default FrontStreet;
