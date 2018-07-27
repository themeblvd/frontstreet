import $ from 'jquery';
import { dom } from '../utils';

/**
 * Adds tabs block functionality, which allows
 * toggling between tab content panes.
 *
 * @summary  Tabs
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   Tabbed.js
 */
class Tabbed {
  /**
   * Initialize the `tabs` block on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Block options (currently not used).
   */
  constructor(element, options) {
    const $tabs = $(element);
    const settings = $.extend({}, this.defaults, options);
    const { $window } = dom;

    this.deepLink = this.deepLink.bind(this);

    const { show, matchHeight, deepLink } = this;

    /*
     * The following classes being added to the tabs element
     * can override the height and deepLink options.
     */
    if ($tabs.hasClass('tabs-fixed-height')) {
      settings.height = true;
    }

    if ($tabs.hasClass('tabs-deep-link')) {
      settings.deepLink = true;
    }

    // Set up accessiblity.
    $tabs.find('.tab-pane').each(function() {
      const $pane = $(this);

      if ($pane.hasClass('active')) {
        $pane.attr('aria-expanded', true);
      } else {
        $pane.attr('aria-expanded', false);
      }
    });

    // Toggle tab content.
    $tabs
      .find(settings.navSelector)
      .find('a')
      .on('click', function(event) {
        event.preventDefault();
        show($tabs, $(this), settings);
      });

    // Setup fixed height and/or deep-linking.
    if (settings.height || settings.deepLink) {
      $window.on('load', function() {
        // Match height of all tabs to tallest.
        if (settings.height) {
          matchHeight($tabs);
        }

        // Watch for deep-linking.
        if (settings.deepLink) {
          deepLink($tabs, settings);
        }
      });
    }
  }

  /**
   * Default tabs options.
   *
   * @since 1.0.0
   *
   * @return {Object}
   */
  get defaults() {
    return {
      navSelector: '.menu-bar, .submenu-bar, .submenu-tabs, .submenu-pills',
      height: false,
      deepLink: false
    };
  }

  /**
   * Show a tab.
   *
   * @since 1.0.0
   *
   * @param {Object} $tabs    The binded jQuery DOM element.
   * @param {Object} $trigger Link (tab) which is triggering new content.
   * @param {Object} settings Block settings.
   */
  show($tabs, $trigger, settings) {
    const $nav = $trigger.closest(settings.navSelector);
    const target = $trigger.attr('href').split('#')[1];

    $nav.find('li').removeClass('active');

    $trigger.closest('li').addClass('active');

    $tabs
      .find('.tab-pane')
      .attr('aria-expanded', false)
      .removeClass('in')
      .hide()
      .removeClass('fade');

    $tabs
      .find('#' + target)
      .attr('aria-expanded', true)
      .addClass('fade')
      .show(0, function() {
        $(this).addClass('in');
      });
  }

  /**
   * Set all tab content panes to have equal height, to
   * the tallest one.
   *
   * @since 1.0.0
   *
   * @param {Object} $tabs The binded jQuery DOM element.
   */
  matchHeight($tabs) {
    let tallest = 0;

    $tabs.find('.tab-pane').each(function() {
      const $pane = $(this);
      const currentHeight = $pane.show().outerHeight();

      if (!$pane.hasClass('active')) {
        $pane.hide();
      }

      if (currentHeight > tallest) {
        tallest = currentHeight;
      }
    });

    $tabs.find('.tab-pane').height(tallest);
  }

  /**
   * Watch for tab deep-linking.
   *
   * Tab deep-linking is when the user passes a tab ID
   * through the URL of the webpage to trigger opening
   * a specific tab pane.
   *
   * To deep link to a tab, you need to prefix
   * the ID of the tab with "tab_" like this:
   *
   * `http://your-site.com/page-with-tabs/#tab_id_of_tab`
   *
   * @since 1.0.0
   *
   * @param {Object} $tabs    The binded jQuery DOM element.
   * @param {Object} settings Block settings.
   */
  deepLink($tabs, settings) {
    let hash = document.location.hash;

    if (hash && -1 != hash.indexOf('tab_')) {
      hash = hash.replace('tab_', '');

      this.show($tabs, $tabs.find('a[href="' + hash + '"] '), settings);

      $('html, body').animate(
        {
          scrollTop: $tabs.offset().top - 20
        },
        800
      );
    }
  }
}

export default Tabbed;
