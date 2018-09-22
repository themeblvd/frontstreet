import { isRtl } from '../utils';

/**
 * Adds accessible menu dropdowns.
 *
 * @summary Menu Dropdowns
 *
 * @author Jason Bobich
 * @link   http://frontstreet.io
 * @since  1.1.0
 * @module dropdowns.js
 */

/**
 * Dropdowns.
 *
 * @param {Object}   settings                  Element settings.
 * @param {string}   settings.target           CSS selector for top-level <ul> containing menu and dropdowns.
 * @param {number}   settings.delay            Delay (in ms) between mouseleave and dropdown menu being hidden.
 * @param {string}   settings.dropDownSelector CSS selector for inner dropdown menus.
 * @param {string}   settings.labelDropdown    Aria label to denote a link triggers a submenu.
 * @param {Function} callback                  Callback function once element is set up.
 */
const dropdowns = (settings, callback) => {
  settings = {
    target: '.fs-dropdowns',
    delay: 500,
    dropDownSelector: 'ul:not(.mega-sub-menu), .fs-mega',
    labelDropdown: 'Submenu',
    ...settings
  };

  document.querySelectorAll(settings.target).forEach(function(menu) {
    setup(menu);
  });

  if (typeof callback === 'function') {
    callback.call();
  }

  /**
   * Set up each individiual tooltip.
   *
   * @param {Element} menu Menu element containing dropdowns.
   */
  function setup(menu) {
    const listItems = {}; // Keep track of active list items.
    const timeouts = {}; // Keep track of delayed transitions.
    const data = menu.dataset;
    const { dropDownSelector } = settings;
    const delay = data.delay ? data.delay : settings.delay;

    // If we've made it here, there's JavaScript and we
    // don't need the CSS fallback styling.
    menu.classList.remove('no-js');

    /*
     * Adds `level-*` CSS classes to all menu items
     * (3 levels deep).
     */
    menu.querySelectorAll('li').forEach(function(item) {
      const parentMenu = item.parentNode;

      if (parentMenu === menu) {
        return item.classList.add('level-1');
      }

      const grandParentMenu = parentMenu.parentNode.parentNode;

      if (grandParentMenu === menu || grandParentMenu.classList.contains('fs-mega')) {
        return item.classList.add('level-2');
      }

      const greatGrandParentMenu = grandParentMenu.parentNode.parentNode;

      if (greatGrandParentMenu === menu || greatGrandParentMenu.classList.contains('fs-mega')) {
        return item.classList.add('level-3');
      }
    });

    /**
     * Handle each dropdown menu, for menu item
     * triggers only.
     */
    menu.querySelectorAll('.menu-btn').forEach(function(button) {
      const listItem = button.parentNode;

      // Across all buttons, allow the ESC key to work
      // logically at different levels, hiding proper
      // dropdowns and changing focus to relevent links.
      button.addEventListener('keyup', handleEsc);

      const dropdowns = listItem.querySelectorAll(dropDownSelector);

      // If the button doesn't have have a dropdown menu,
      // we'll simply make sure sibling list item dropdowns
      // are hidden, when navigated to.
      if (!dropdowns.length) {
        button.addEventListener('focus', () => hideSiblings(button.parentNode));
        return; // Exit. Nothing more do to.
      }

      const dropdown = dropdowns[0]; // Determine target dropdown.

      // Add CSS class for any special styling of items
      // that contain dropdown menus.
      listItem.classList.add('menu-item-has-children');

      // Add standard accessibility properties.
      button.setAttribute('aria-haspopup', true);
      dropdown.setAttribute('aria-label', settings.labelDropdown);
      dropdown.setAttribute('aria-expanded', false);

      // Add sub indicator icon to links with dropdowns.
      const indicator = document.createElement('span');
      indicator.classList.add('sub-indicator');
      button.appendChild(indicator);

      // Show/Hide the dropdowns when hovering on/off the
      // list items containing the buttons.
      listItem.addEventListener('mouseenter', show);
      listItem.addEventListener('mouseleave', hide);

      // For accessibility, target the actual button
      // links for tabbing.
      button.addEventListener('focus', show);
    });

    /**
     * Shows a dropdown menu.
     *
     * @since 1.1.0
     *
     * @param {Event} event
     */
    function show(event) {
      const listItem = event.target.nodeName === 'A' ? event.target.parentNode : event.target;
      const { dropDownSelector } = settings;
      const level = getLevel(listItem);
      const selectedChildren = Object.values(listItem.querySelectorAll(dropDownSelector));

      const dropdown = selectedChildren.find(function(child) {
        return child.parentNode === listItem;
      });

      // Store current level's list item.
      listItems[`level-${level}`] = listItem;

      // Clear any existing timeouts for the current level.
      clearTimeout(timeouts[`level-${level}`]);

      hideSiblings(listItem, function() {
        // Display element, while opacity == 0.
        dropdown.classList.add('show', 'fade');

        // Determine if dropdown needs to be shifted to
        // accomodate viewport edge.
        position(listItem, dropdown);

        // After 100 ms, add class to beging CSS transition
        // to fade in opacity. --
        // Note: The 100ms delay for classes to be staggered
        // enough for browser to render CSS transition.
        timeouts[`level-${level}`] = setTimeout(function() {
          dropdown.classList.add('in');
          dropdown.setAttribute('aria-expanded', true);
        }, 100);
      });
    }

    /**
     * Hides a dropdown menu.
     *
     * @since 1.1.0
     *
     * @param {Event} event
     */
    function hide(event) {
      const { target, type } = event;
      const listItem = target.nodeName === 'A' ? target.parentNode : target;
      const { dropDownSelector, delay } = settings;
      const level = getLevel(listItem);
      const doDelay = type === 'mouseleave' ? true : false;
      const selectedChildren = Object.values(listItem.querySelectorAll(dropDownSelector));

      const dropdown = selectedChildren.find(function(child) {
        return child.parentNode === listItem;
      });

      const hideDropdown = () => {
        dropdown.classList.remove('in');
        setTimeout(function() {
          dropdown.classList.remove('show', 'fade');
          dropdown.setAttribute('aria-expanded', false);
        }, 100); // 100ms delay for classes to be staggered enough for browser to render CSS transition.
      };

      delete listItems[`level-${level}`];

      clearTimeout(timeouts[`level-${level}`]);

      if (doDelay) {
        timeouts[`level-${level}`] = setTimeout(hideDropdown, delay);
      } else {
        hideDropdown();
      }
    }

    /**
     * Determine dropdown location based on
     * viewport space.
     *
     * This helps determine if (1) the dropdown menus should
     * accomdate an RTL setup, or (2) fit within the viewport
     * when they approach the edge of the window.
     *
     * @since 1.1.0
     *
     * @param {Element} listItem
     * @param {Element} dropdown
     */
    function position(listItem, dropdown) {
      if (getLevel(listItem) !== 1) {
        return;
      }

      const rect = listItem.getBoundingClientRect();
      const location = isRtl() ? rect.right : rect.left;

      let space = dropdown.offsetWidth;

      if (dropdown.querySelector('.level-3')) {
        space += space; // Space doubles a third level exists.
      }

      if (window.offsetWidth - location <= space) {
        dropdown.classList.add('reverse');
      } else {
        dropdown.classList.remove('reverse');
      }
    }

    /**
     * Handle ESC key press.
     *
     * Across all buttons, allow the ESC key to work
     * logically at different levels, hiding proper
     * dropdowns and changing focus to relevent links.
     *
     * @since 1.1.0
     *
     * @param {Event} event
     */
    function handleEsc(event) {
      if (event.which !== 27) {
        return;
      }

      event.preventDefault();

      const listItem = event.target.parentNode;
      const level = getLevel(listItem);

      if (level === 1) {
        return hideSiblings(listItem);
      }

      const isMegaMenu = listItem.parentNode.classList.contains('mega-sub-menu');

      if (isMegaMenu) {
        listItems['level-1'].querySelectorAll('a')[0].focus();
        return hideSiblings(menu.querySelectorAll('li')[0]); // Grab any list item from top level.
      }

      let parent = listItem.parentNode;

      while (parent.nodeName !== 'LI' && getLevel(parent) !== level - 1) {
        parent = parent.parentNode;
      }

      const fakeEvent = {
        target: parent,
        type: 'keyup',
        nodeName: 'LI'
      };

      listItems[`level-${level - 1}`].querySelectorAll('a')[0].focus();

      hide(fakeEvent);
    }

    /**
     * Hide sibling dropdown menus.
     *
     * @since 1.1.0
     *
     * @param {Element}  listItem
     * @param {Function} callback
     */
    function hideSiblings(listItem, callback) {
      const siblings = listItem.parentNode.querySelectorAll(dropDownSelector);
      const level = getLevel(listItem);

      clearTimeout(timeouts[`${level}-siblings`]);

      siblings.forEach(function(dropdownToHide) {
        dropdownToHide.classList.remove('in');
      });

      timeouts[`${level}-siblings`] = setTimeout(function() {
        siblings.forEach(function(dropdownToHide) {
          dropdownToHide.classList.remove('show', 'fade');
          dropdownToHide.setAttribute('aria-expanded', false);
        });

        if (callback) {
          callback.call();
        }
      });
    }

    /**
     * Determines the current level of the dropdown parent
     * item being triggered.
     *
     * @since 1.0.0
     *
     * @param {Element} listItem Parent list item dropdown belongs to.
     */
    function getLevel(listItem) {
      if (listItem.classList.contains('level-3')) {
        return 3;
      } else if (listItem.classList.contains('level-2')) {
        return 2;
      } else if (listItem.classList.contains('level-1')) {
        return 1;
      }
      return 0;
    }
  }
};

export default dropdowns;
