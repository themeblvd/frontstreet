import $ from 'jquery';
import hljs from 'highlight.js/lib/highlight';
import Fuse from 'fuse.js';
import searchIndex from './search-index';

// Register language syntaxes
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));

/**
 * Escape HTML.
 *
 * @param {string} html HTML code.
 * @return {string} Escaped html.
 */
function escape(html) {
  const replace = {
    // '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  return html.replace(/[<>]/g, tag => replace[tag]);
}

$(document).ready(function($) {
  // Code highlighting
  $('pre.highlight').each(function(i, block) {
    var $block = $(this);
    block.innerHTML = escape(block.innerHTML);
    hljs.highlightBlock(block);
    $block.addClass('show');
  });

  // Site Search
  var options = {
    shouldSort: true,
    includeScore: true,
    // tokenize: true,
    // matchAllTokens: true,
    threshold: 0.3,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 3,
    keys: [
      {
        name: 'title',
        weight: 0.9
      },
      {
        name: 'tags',
        weight: 0.1
      }
    ]
  };

  const fuse = new Fuse(searchIndex, options);
  const $searchField = $('#site-search-field');
  const $resultsList = $('#search-results > ul');
  var $selected = null;

  $searchField.on('keyup', function(event) {
    // Is up, down, or enter being pressed?
    if (event.which === 13 || event.which === 38 || event.which === 40) {
      return;
    }

    const $el = $(this);
    const results = fuse.search($el.val());

    $resultsList.empty();

    results.forEach(function(result) {
      $resultsList.append(
        `<li><a href="${result.item.url}" data-score="${result.score}">${
          result.item.title
        }</a></li>`
      );
    });
  });

  $searchField.on('keydown', function(event) {
    const enter = event.which == 13;
    const up = event.which == 38;
    const down = event.which == 40;

    if (down) {
      if (!$selected) {
        $selected = $resultsList.find('li:first-child');
      } else {
        $selected = $selected.next();
      }

      // If there was no next(), then go back to first item.
      if (!$selected.length) {
        $selected = $resultsList.find('li:first-child');
      }
    } else if (up) {
      if (!$selected) {
        $selected = $resultsList.find('li:last-child');
      } else {
        $selected = $selected.prev();
      }

      // If there was no prev(), then go back to last item.
      if (!$selected.length) {
        $selected = $resultsList.find('li:last-child');
      }
    } else if (enter) {
      if ($selected) {
        const url = $selected.find('a').attr('href');
        $selected = null;
        $resultsList.empty();
        $searchField.val('');
        window.location.href = url;
      }
    }

    if (up || down) {
      $resultsList.find('li').removeClass('selected');
      $selected.addClass('selected');
    }
  });

  $resultsList.on('click', 'a', function() {
    $searchField.val('');
    $resultsList.stop(true, true).fadeOut(100);
  });

  $searchField.on('focus', function() {
    $resultsList.stop(true, true).fadeIn(100);
  });

  $searchField.on('focusout', function() {
    setTimeout(function() {
      $resultsList.stop(true, true).fadeOut(100);
    }, 500);
  });

  // Scroll To Top
  const $toTop = $('.to-top');

  $toTop.on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  });

  $(window).on('scroll load', function() {
    const sidebarHeight = $('.site-sidebar > .wrap').outerHeight();
    const btnHeight = $toTop.outerHeight();

    if ($(this).scrollTop() >= sidebarHeight - btnHeight) {
      $toTop.addClass('stick');
    } else {
      $toTop.removeClass('stick');
    }
  });

  // Menu Toggle examples

  $('.fs-menu-toggle').on('click', function() {
    var $el = $(this);

    if ($el.hasClass('collapse')) {
      $el.removeClass('collapse');
      // Code to close your menu...
    } else {
      $el.addClass('collapse');
      // Code to open your menu...
    }

    return false;
  });

  // Moble Menu examples
  $('.mobile-menu-bar').frontstreet('mobile-menu');
});
