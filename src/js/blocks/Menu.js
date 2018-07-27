import $ from 'jquery';
import { dom, isMobile } from '../utils';

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
class Menu {
  /**
   * Initialize the `menu` block on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Block options.
   */
  constructor(element, options) {
    const $menu = $(element);

    this.settings = $.extend(this.defaults, options);

    if ($menu.data('delay') || 0 === $menu.data('delay')) {
      this.settings.delay = $menu.data('delay');
    }

    this.timer = {}; // Keep track of delayed transitions.
    this.flyout = this.flyout.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    const { flyout, show, hide } = this;

    $menu.removeClass('no-js');

    /*
     * Triggers dropdown show and hide, upon mouseenter
     * and mouseleave.
     */
    $menu
      .find('li')
      .has(this.settings.dropDownSelector)
      .addClass('menu-item-has-children')
      .on('mouseenter', function() {
        const $trigger = $(this);
        flyout($trigger); // Determine and adds class for flyout direction.
        show($trigger);
      })
      .on('mouseleave', function() {
        hide($(this));
      })
      .find('> a')
      .append('<span class="sub-indicator"></span>');

    // Adds CSS classes to each level of the menu, 1-3.
    $menu.children('li').each(function() {
      $(this)
        .addClass('level-1')
        .children('ul')
        .children('li')
        .each(function() {
          $(this)
            .addClass('level-2')
            .children('ul')
            .children('li')
            .each(function() {
              $(this).addClass('level-3');
            });
        });
    });

    // Add mobile touch support.
    if (isMobile()) {
      // Tap anywhere on iOS to unfocus a submenu.
      $('html')
        .css('cursor', 'pointer')
        .on('click', $.noop);
    }
  }

  /**
   * Default menu options.
   *
   * @since 1.0.0
   *
   * @return {Object}
   */
  get defaults() {
    return {
      delay: 500,
      dropDownSelector: 'ul:not(.mega-sub-menu), .fs-mega'
    };
  }

  /**
   * Determines the direction the dropdown menu should
   * flyout towards.
   *
   * @since 1.0.0
   *
   * @param {Object} $trigger The parent menu item, for which the dropdown belongs to.
   */
  flyout($trigger) {
    if (!$trigger.hasClass('level-1')) {
      return;
    }

    const { dropDownSelector } = this.settings;
    const { $body } = dom;
    const $flyout = $trigger.children(dropDownSelector);
    let location = $trigger.offset();
    let space = 200;

    if ($body.hasClass('rtl')) {
      location = location['right'];
    } else {
      location = location['left'];
    }

    if ($flyout.find('.level-3').length > 0) {
      space += space; // Space doubles for level 3.
    }

    // Can't used cached window here.
    if ($(window).width() - location <= space) {
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
  show($trigger) {
    const { dropDownSelector } = this.settings;
    const level = this.getLevel($trigger);
    const $siblings = $trigger.siblings().find(dropDownSelector);
    const $target = $trigger.children(dropDownSelector);

    clearTimeout(this.timer[level]);

    $siblings.removeClass('in');

    $target.addClass('show fade');

    this.timer[level] = setTimeout(function() {
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
  hide($trigger, settings) {
    const { dropDownSelector, delay } = this.settings;
    const level = this.getLevel($trigger);
    const $flyout = $trigger.children(dropDownSelector);

    clearTimeout(this.timer[level]);

    this.timer[level] = setTimeout(function() {
      $flyout.removeClass('in');

      setTimeout(function() {
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
  getLevel($trigger) {
    if ($trigger.hasClass('level-3')) {
      return 'level-3';
    } else if ($trigger.hasClass('level-2')) {
      return 'level-2';
    }
    return 'level-1';
  }
}

export default Menu;
