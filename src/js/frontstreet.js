import $ from 'jquery';
import { dom } from './modules/utils';

// import './modules/info';
// import './modules/init';
import Background from './modules/background';
// import './modules/menu';
// import './modules/mobile-menu';
// import './modules/modal';
// import './modules/slider';
import Tabs from './modules/tabs';
import Toggle from './modules/toggle';
// import './modules/tooltip';

/**
 * Adds all components as one item to the jQuery
 * namespace.
 *
 * @since 1.0.0
 *
 * @param {String} component Framework component ID.
 * @param {Object} options   Options for component.
 */
$.fn.frontstreet = function(component, options) {
  return this.each(function() {
    switch (component) {
      case 'background':
        return new Background(this, options);
      case 'tabs':
        return new Tabs(this, options);
      case 'toggle':
        return new Toggle(this, options);
    }
  });
};

const { $document, $window } = dom;

$document.ready(function($) {
  /**
   * Binds the default `tabs` component.
   *
   * @since 1.0.0
   */
  $('.fs-tabs').frontstreet('tabs');

  /**
   * Binds the default `toggle` component.
   *
   * @since 1.0.0
   */
  $('.fs-toggle').frontstreet('toggle');
});

$window.on('load', function() {
  /**
   * Self-invokes the background slider of the
   * `background` component.
   *
   * @since 1.0.0
   */
  $('.fs-bg-slider').frontstreet('background', { type: 'slider' });

  /**
   * Self-invokes the parallax effect of the
   * `background` component.
   *
   * @since 1.0.0
   */
  $('.fs-bg-parallax').frontstreet('background', { type: 'parallax' });
});
