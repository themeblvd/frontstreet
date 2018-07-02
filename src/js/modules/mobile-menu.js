/**
 * Adds submenu navigation to mobile menus.
 *
 * @summary  Mobile Menus
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   mobile-menu.js
 * @requires init.js
 */
+(function($, frontStreet) {
  'use strict';

  if ('undefined' === typeof frontStreet) {
    return;
  }

  frontStreet.mobileMenu = {};

  /**
   * Initialize the `mobile-menu` component on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {object} element this
   * @param {object} options Component options (currently not used).
   */
  frontStreet.mobileMenu.init = function(element, options) {
    var $menu = $(element),
      $triggers = $menu.find('li').has('ul');

    $triggers
      .addClass('menu-item-has-children')
      .children('.menu-btn')
      .on('click.fs.mobile-menu', function() {
        frontStreet.mobileMenu.show($(this));
        return false;
      });

    $triggers
      .find('ul')
      .prepend('<li><a href="#" class="menu-btn back"></a></li>')
      .find('.back')
      .on('click.fs.mobile-menu-back', function() {
        frontStreet.mobileMenu.hide($(this));
        return false;
      });

    $menu.height($menu.prop('scrollHeight'));
  };

  /**
   * Show a submenu.
   *
   * @since 1.0.0
   *
   * @param {object} $trigger Parent menu item triggering submenu.
   */
  frontStreet.mobileMenu.show = function($trigger) {
    $trigger
      .closest('li')
      .children('ul')
      .addClass('on');
  };

  /**
   * Hide a submenu.
   *
   * @since 1.0.0
   *
   * @param {object} $trigger Parent menu item triggering submenu.
   */
  frontStreet.mobileMenu.hide = function($trigger) {
    $trigger.closest('ul').removeClass('on');
  };
})(jQuery, window.frontStreet);
