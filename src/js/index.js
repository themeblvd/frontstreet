import $ from 'jquery';
import { dom } from './utils';
import FrontStreet from './FrontStreet';
import Background from './blocks/Background';
import Menu from './blocks/Menu';
import MobileMenu from './blocks/MobileMenu';
import Tabbed from './blocks/Tabbed';
import Toggle from './blocks/Toggle';
import Tooltip from './blocks/Tooltip';
import './blocks/modal';
import './blocks/slider';

const { $document, $window } = dom;
const frontstreet = new FrontStreet();

// Register all default blocks.
frontstreet.add('background', Background);
frontstreet.add('menu', Menu);
frontstreet.add('mobile-menu', MobileMenu);
frontstreet.add('tabbed', Tabbed);
frontstreet.add('toggle', Toggle);
frontstreet.add('tooltip', Tooltip);

// Add registered blocks to jQuery namespace.
frontstreet.init();

/**
 * Bind blocks default classes with jQuery.
 *
 * @since 1.0.0
 */
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
