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
class MobileMenu {
  /**
   * Initialize the `mobile-menu` block on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Block options (currently not used).
   */
  constructor(element, options) {
    const $menu = $(element);
    const $triggers = $menu.find('li').has('ul');
    const { show, hide } = this;

    $triggers
      .addClass('menu-item-has-children')
      .children('.menu-btn')
      .on('click.fs.mobile-menu', function(event) {
        event.preventDefault();
        show($(this));
        return false;
      })
      .append('<span class="sub-indicator"></span>');

    $triggers
      .find('ul')
      .prepend('<li><a href="#" class="menu-btn back"><span class="sub-indicator"></span></a></li>')
      .find('.back')
      .on('click.fs.mobile-menu-back', function(event) {
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
  show($trigger) {
    $trigger
      .closest('li')
      .children('ul')
      .addClass('on');
  }

  /**
   * Hide a submenu.
   *
   * @since 1.0.0
   *
   * @param {Object} $trigger Parent menu item triggering submenu.
   */
  hide($trigger) {
    $trigger.closest('ul').removeClass('on');
  }
}

export default MobileMenu;
