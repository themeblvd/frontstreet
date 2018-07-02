import { isMobile } from './utils';

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
 * @requires init.js
 */
+(function($, frontStreet) {
  'use strict';

  if ('undefined' === typeof frontStreet) {
    return;
  }

  var $body = frontStreet.dom.body,
    $document = frontStreet.dom.document;

  frontStreet.menu = {};

  /**
   * Default menu options.
   *
   * @since 1.0.0
   *
   * @var {object}
   */
  frontStreet.menu.defaults = {
    delay: 500,
    dropDownSelector: 'ul:not(.mega-sub-menu), .fs-mega'
  };

  /**
   * Assign a unique ID to each menu.
   *
   * @since 1.0.0
   *
   * @var {number}
   */
  frontStreet.menu.count = 0;

  /**
   * Help with delayed effects between handlers.
   *
   * @since 1.0.0
   *
   * @var {Array}
   */
  frontStreet.menu.timer = [];

  /**
   * Initialize the `menu` component on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {object} element this
   * @param {object} options Component options.
   */
  frontStreet.menu.init = function(element, options) {
    var $menu = $(element),
      settings = $.extend(
        {
          menuID: frontStreet.menu.count++
        },
        frontStreet.menu.defaults,
        options
      );

    if ($menu.data('delay') || 0 === $menu.data('delay')) {
      settings.delay = $menu.data('delay');
    }

    frontStreet.menu.timer[settings.menuID] = [];

    $menu.removeClass('no-js');

    /*
		 * Triggers dropdown show and hide, upon mouseenter
		 * and mouseleave.
		 */
    $menu
      .find('li')
      .has(settings.dropDownSelector)
      .addClass('menu-item-has-children')
      .on('mouseenter', function() {
        var $trigger = $(this);
        frontStreet.menu.flyout($trigger, settings); // Determine flyout direction.
        frontStreet.menu.show($trigger, settings);
      })
      .on('mouseleave', function() {
        frontStreet.menu.hide($(this), settings);
      });

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
  };

  /**
   * Determines the direction the dropdown menu should
   * flyout towards.
   *
   * @since 1.0.0
   *
   * @param {object} $trigger The parent menu item, for which the dropdown belongs to.
   * @param {object} settings Current settings.
   */
  frontStreet.menu.flyout = function($trigger, settings) {
    if (!$trigger.hasClass('level-1')) {
      return;
    }

    var $flyout = $trigger.children(settings.dropDownSelector),
      location = $trigger.offset(),
      space = 200;

    if ($body.hasClass('rtl')) {
      location = location['right'];
    } else {
      location = location['left'];
    }

    if ($flyout.find('.level-3').length > 0) {
      space += space; // Space doubles for level 3.
    }

    if ($(window).width() - location <= space) {
      $flyout.addClass('reverse');
    } else {
      $flyout.removeClass('reverse');
    }
  };

  /**
   * Shows a dropdown menu.
   *
   * @since 1.0.0
   *
   * @param {object} $trigger The parent menu item, for which the dropdown belongs to.
   * @param {object} settings Current settings.
   */
  frontStreet.menu.show = function($trigger, settings) {
    var level = frontStreet.menu.getLevel($trigger),
      $siblings = $trigger.siblings().find(settings.dropDownSelector),
      $target = $trigger.children(settings.dropDownSelector);

    clearTimeout(frontStreet.menu.timer[settings.menuID][level]);

    $siblings.removeClass('in');

    $target.addClass('show fade');

    frontStreet.menu.timer[settings.menuID][level] = setTimeout(function() {
      $siblings.removeClass('show fade');

      $target.addClass('in');
    }, 200);
  };

  /**
   * Hides a dropdown menu.
   *
   * @since 1.0.0
   *
   * @param {object} $trigger The parent menu item, for which the dropdown belongs to.
   * @param {object} settings Current settings.
   */
  frontStreet.menu.hide = function($trigger, settings) {
    var level = frontStreet.menu.getLevel($trigger),
      $flyout = $trigger.children(settings.dropDownSelector);

    clearTimeout(frontStreet.menu.timer[settings.menuID][level]);

    frontStreet.menu.timer[settings.menuID][level] = setTimeout(function() {
      $flyout.removeClass('in');

      setTimeout(function() {
        $flyout.removeClass('show fade');
      }, 200);
    }, settings.delay);
  };

  /**
   * Determines the current level of the dropdown parent
   * item being triggered.
   *
   * @since 1.0.0
   *
   * @param  {object} $trigger The parent menu item, for which the dropdown belongs to.
   * @return {string} level    Current menu level, `level-1`, `level-2` or `level-3`.
   */
  frontStreet.menu.getLevel = function($trigger) {
    var level = 'level-1';

    if ($trigger.hasClass('level-2')) {
      level = 'level-2';
    } else if ($trigger.hasClass('level-3')) {
      level = 'level-3';
    }

    return level;
  };

  $document.ready(function($) {
    /**
     * Self-invokes the `menu` component.
     *
     * @since 1.0.0
     */
    $('.fs-menu').frontStreet('menu');

    /**
     * Adds no-click functionaltiy to any link by
     * adding class "no-click".
     *
     * @since 1.0.0
     *
     * @param {Event} event Event interface.
     */
    $('a.no-click').on('click', function(event) {
      event.preventDefault();
    });

    /**
     * Adds no-click functionaltiy to any link directly
     * within an li with class "no-click".
     *
     * Note: This is mainly here to accmodate interfaces
     * like WordPress which allow building menus, but only
     * allow adding CSS classes to the menu list items.
     *
     * @since 1.0.0
     *
     * @param {Event} event Event interface.
     */
    $('li.no-click')
      .find('a:first')
      .on('click', function(event) {
        event.preventDefault();
      });
  });
})(jQuery, window.frontStreet);
