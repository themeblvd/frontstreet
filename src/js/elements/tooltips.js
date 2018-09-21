import { uniqueID } from '../utils';

/**
 * Adds accessible tooltip functionality.
 *
 * @summary  Tooltips
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.1.0
 * @module   tooltips.js
 */

/**
 * Tooltips.
 *
 * Note: For termiology throughout this function,
 * a given tooltip is comprised of two parts:
 *
 *   1. Trigger: The link or element you provide
 *   that triggers a tooltip.
 *   2. Help: This is the actual, generated tooltip
 *   box that displays when triggered.
 *
 * @param {Object}   settings               Element settings.
 * @param {string}   settings.target        CSS selector for tooltip trigger elements.
 * @param {number}   settings.helpClass     CSS class attached generated tooltip help box.
 * @param {string}   settings.helpColor     Optional. Custom background color hex for generated tooltip help box.
 * @param {string}   settings.helpPlacement Placement of tooltip, relative to trigger - `top`, `right`, `bottom` or `left`.
 * @param {Function} callback               Callback function once element is set up.
 */
const tooltips = (settings, callback) => {
  settings = {
    target: '.fs-tooltip',
    helpClass: 'fs-tooltip-help',
    helpColor: '',
    helpPlacement: 'top',
    ...settings
  };

  const helpElements = []; // Holds all built tooltip help elements.

  document.querySelectorAll(settings.target).forEach(function(trigger) {
    setup(trigger);
  });

  if (typeof callback === 'function') {
    callback.call();
  }

  /**
   * Set up each individiual tooltip.
   *
   * @param {Element} trigger Tooltip trigger element.
   */
  function setup(trigger) {
    const data = trigger.dataset;

    // If the help text wasn't found in the data attribute,
    // we'll attempt to pull it from the title.
    if (!data.help) {
      data.help = trigger.getAttribute('title');
    }

    // If the help text data attribute matches the title,
    // we'll remove the title so that screen readers do
    // not repeat the same line of text.
    if (trigger.getAttribute('title') === data.help) {
      trigger.removeAttribute('title');
    }

    // At this point, without any tooltip help text,
    // there's no reason to move forward.
    if (!data.help) {
      return;
    }

    // Determine placement.
    if (!data.helpPlacement) {
      data.helpPlacement = settings.helpPlacement;
    }

    // Because we've removed the title attribute, we'll
    // use the `aria-describedby` attribute to point screen
    // readers to the tooltip help element instead.
    trigger.setAttribute('aria-describedby', uniqueID('fs-tooltip-help-'));

    // If a trigger is not an inherently focusable element,
    // it'll need a tabindex. But if it can be inherently
    // focused, then don't set a tabindex.
    if (
      trigger.nodeName !== 'A' &&
      trigger.nodeName !== 'BUTTON' &&
      trigger.nodeName !== 'INPUT' &&
      trigger.nodeName !== 'TEXTAREA' &&
      trigger.nodeName !== 'SELECT'
    ) {
      trigger.setAttribute('tabindex', '0');
    }

    // Show/Hide the tooltip help element with mouse
    // events and tab events.
    trigger.addEventListener('mouseenter', showHelp);
    trigger.addEventListener('focus', showHelp);
    trigger.addEventListener('mouseleave', hideHelp);
    trigger.addEventListener('blur', hideHelp);

    // Also, hide the tooltip with ESC key is presed, for
    // better accessibility.
    trigger.addEventListener('keyup', function(event) {
      if (event.which === 27) {
        event.preventDefault();
        hideHelp(event);
      }
    });

    // Build the help tooltip and and add it to the
    // <body> of the DOM.
    document.body.appendChild(buildHelp(trigger));
  }

  /**
   * Show a tooltip.
   *
   * @param {Event}
   */
  function showHelp(event) {
    const triggerElem = event.target;
    const help = getHelp(triggerElem.getAttribute('aria-describedby'));
    const helpElem = help.elem;
    const placement = triggerElem.dataset.helpPlacement;

    clearTimeout(help.timeout);

    // Without "fade" class, element is `display: none`
    // and we can't make calculations on its size.
    helpElem.classList.add('fade');

    // Position the help text.
    let x = 0;
    let y = 0;

    if (placement === 'top' || placement === 'bottom') {
      // Top and bottom placement.
      x = triggerElem.offsetLeft + 0.5 * triggerElem.offsetWidth - 0.5 * helpElem.offsetWidth;

      y =
        placement === 'bottom'
          ? triggerElem.offsetTop + triggerElem.offsetHeight
          : triggerElem.offsetTop - helpElem.offsetHeight;

      // Overflowing right edge of document?
      if (x + helpElem.offsetWidth >= document.body.offsetWidth) {
        helpElem.classList.add('fit-right');
        x = triggerElem.offsetLeft - triggerElem.offsetWidth;
      }

      // Overflowing left edge of document?
      if (x <= 0) {
        helpElem.classList.add('fit-left');
        x = triggerElem.offsetLeft;
      }
    } else {
      // Left and right placement.
      x =
        placement === 'right'
          ? triggerElem.offsetLeft + triggerElem.offsetWidth
          : triggerElem.offsetLeft - helpElem.offsetWidth;

      y = triggerElem.offsetTop + 0.5 * triggerElem.offsetHeight - 0.5 * helpElem.offsetHeight;
    }

    // Apply final positioning.
    helpElem.style.left = x + 'px';
    helpElem.style.top = y + 'px';

    // Show the help text.
    setTimeout(() => helpElem.classList.add('in'), 1); // 1 ms delay hack to allow CSS transition.
  }

  /**
   * Hide a tooltip.
   *
   * @param {Event}
   */
  function hideHelp(event) {
    const help = getHelp(event.target.getAttribute('aria-describedby'));
    const helpElem = help.elem;

    helpElem.classList.remove('in');

    help.timeout = setTimeout(() => {
      helpElem.classList.remove('fade', 'fit-right', 'fit-left');
      helpElem.style.top = 0;
      helpElem.style.left = 0;
    }, 1000); // Allow 200ms CSS transition.
  }

  /**
   * Build a tooltip help element, given
   * a trigger.
   *
   * @param {Element} trigger DOM element which triggers a tooltip.
   * @return {Element} Tooltip element.
   */
  function buildHelp(trigger) {
    const data = trigger.dataset;
    const helpID = trigger.getAttribute('aria-describedby');
    const helpElem = document.createElement('span');

    if (data.helpClass) {
      helpElem.classList.add(data.helpClass);
    }

    if (settings.helpClass) {
      helpElem.classList.add(settings.helpClass);
    }

    helpElem.classList.add(data.helpPlacement);

    helpElem.setAttribute('id', helpID);
    helpElem.setAttribute('role', 'tooltip');
    helpElem.innerHTML = data.help + '<span class="tooltip-arrow"></span>';

    if (data.helpColor) {
      helpElem.style.backgroundColor = data.helpColor;
      helpElem.querySelector('.tooltip-arrow').style[`border-${data.helpPlacement}-color`] = data.helpColor; // prettier-ignore
    }

    helpElements.push({ id: helpID, elem: helpElem, timeout: false });

    return helpElem;
  }

  /**
   * Find a help tooltip element from the
   * saved array.
   *
   * This is less expensive than searching the
   * DOM for the correct help tooltip element
   * every time we want to show one.
   *
   * @param {string} id Help tooltip ID.
   * @return {Object}
   */
  function getHelp(id) {
    return helpElements.find(elem => id === elem.id);
  }
};

export default tooltips;
