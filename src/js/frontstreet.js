import $ from 'jquery';
import { dom } from './utils';
import Background from './blocks/background';
import Menu from './blocks/menu';
import MobileMenu from './blocks/mobile-menu';
import Tabs from './blocks/tabs';
import Toggle from './blocks/toggle';
import Tooltip from './blocks/tooltip';
import './blocks/modal';
import './blocks/slider';

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
    switch (block) {
      case 'background':
        return new Background(this, options);
      case 'mobile-menu':
        return new MobileMenu(this, options);
      case 'menu':
        return new Menu(this, options);
      case 'tabs':
        return new Tabs(this, options);
      case 'toggle':
        return new Toggle(this, options);
      case 'tooltip':
        return new Tooltip(this, options);
    }
  });
};

const { $document, $window } = dom;

$document.ready(function($) {
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
  $('a.no-click').on('click', function(event) {
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
  $('li.no-click')
    .find('a:first')
    .on('click', function(event) {
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

$window.on('load', function() {
  /**
   * Self-invokes the background slider of the
   * `background` block.
   *
   * @since 1.0.0
   */
  $('.fs-bg-slider').frontstreet('background', { type: 'slider' });

  /**
   * Self-invokes the parallax effect of the
   * `background` block.
   *
   * @since 1.0.0
   */
  $('.fs-bg-parallax').frontstreet('background', { type: 'parallax' });
});
