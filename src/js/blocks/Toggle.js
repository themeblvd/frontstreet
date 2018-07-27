import $ from 'jquery';

/**
 * Adds toggles block functionality, which allows
 * toggle display of content.
 *
 * @summary  Toggle
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   Toggle.js
 */
class Toggle {
  /**
   * Initialize the `tabs` block on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Block options.
   */
  constructor(element, options) {
    const $toggle = $(element);
    const settings = $.extend({}, this.defaults, options);
    const { open, close } = this;

    let $group = null;

    if ($toggle.parents('.toggle-group').length > 0) {
      $group = $toggle.closest('.toggle-group');
    }

    if ($group && $group.hasClass('toggle-accordion')) {
      settings.accordion = true;
    }

    // Set up accessiblity.
    $toggle.find('.toggle-content').attr('aria-expanded', false);

    // Open initially if has class `toggle-expanded`.
    if ($toggle.hasClass('toggle-expanded')) {
      open($toggle, settings.speed);
    }

    // Set up toggle click.
    $toggle.find('.toggle-title').on('click', function(event) {
      event.preventDefault();

      $(this).blur();

      if ($toggle.hasClass('toggle-expanded')) {
        // Toggle is open; so close it.
        close($toggle, settings.speed);
      } else {
        if ($group && settings.accordion) {
          $group.find('.fs-toggle').each(function() {
            close($(this), settings.speed);
          });
        }

        // Toggle is closed; so open it.
        open($toggle, settings.speed);
      }
    });
  }

  /**
   * Default toggle options.
   *
   * @since 1.0.0
   *
   * @return {Object}
   */
  get defaults() {
    return {
      speed: 200,
      accordion: false
    };
  }

  /**
   * Open a toggle.
   *
   * @since 1.0.0
   *
   * @param {Object} $toggle The binded jQuery DOM element.
   * @param {number} speed   Animation speed in milliseconds.
   */
  open($toggle, speed) {
    $toggle
      .addClass('toggle-expanded')
      .find('.toggle-content')
      .stop(true, true)
      .attr('aria-expanded', true)
      .slideDown(speed);
  }

  /**
   * Close a toggle.
   *
   * @since 1.0.0
   *
   * @param {Object} $toggle The binded jQuery DOM element.
   * @param {number} speed   Animation speed in milliseconds.
   */
  close($toggle, speed) {
    $toggle
      .removeClass('toggle-expanded')
      .find('.toggle-content')
      .stop(true, true)
      .attr('aria-expanded', false)
      .slideUp(speed);
  }
}

export default Toggle;
