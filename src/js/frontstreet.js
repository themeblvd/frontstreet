import $ from 'jquery';
import { dom } from './modules/utils';

// import './modules/info';
// import './modules/init';
// import './modules/background';
// import './modules/menu';
// import './modules/mobile-menu';
// import './modules/modal';
// import './modules/slider';
// import './modules/tabs';
import Toggle from './modules/toggle';
// import './modules/tooltip';

/**
 * Adds all components as one item to the jQuery
 * namespace.
 *
 * @since 1.0.0
 *
 * @param {string} component Framework component ID.
 * @param {object} options   Options for component.
 */
$.fn.frontstreet = function(component, options) {
  return this.each(function() {
    switch (component) {
      case 'toggle':
        return new Toggle(this, options);
    }
  });
};

const { $document } = dom;

$document.ready(function($) {
  /**
   * Binds the default the `toggle` component.
   *
   * @since 1.0.0
   */
  $('.fs-toggle').frontstreet('toggle');
});
