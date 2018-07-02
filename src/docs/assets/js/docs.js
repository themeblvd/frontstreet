import $ from 'jquery';
import Fuse from 'fuse.js';
import searchIndex from './search-index';
import 'owl.carousel';
import 'magnific-popup';
import '../../../js/main';

$(document).ready(function($) {
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

  var fuse = new Fuse(searchIndex, options),
    $searchField = $('#site-search-field'),
    $resultsList = $('#search-results > ul'),
    $selected = null;

  $searchField.on('keyup', function(e) {
    // Is up, down, or enter being pressed?
    if (e.which == 13 || e.which == 38 || e.which == 40) {
      return;
    }

    // $selection = null;

    var $el = $(this),
      results = fuse.search($el.val());

    $resultsList.empty();

    for (var i = 0; i < results.length; i++) {
      $resultsList.append(
        '<li><a href="' +
          results[i].item.url +
          '" data-score="' +
          results[i].score +
          '">' +
          results[i].item.title +
          '</a></li>'
      );
    }
  });

  $searchField.on('keydown', function(e) {
    var enter = e.which == 13,
      up = e.which == 38,
      down = e.which == 40;

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
        var url = $selected.find('a').attr('href');

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
  var $toTop = $('.to-top');

  $toTop.on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  });

  $(window).on('scroll load', function() {
    var sidebarHeight = $('.site-sidebar > .wrap').outerHeight();
    var btnHeight = $toTop.outerHeight();

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
  $('.mobile-menu-bar').frontStreet('mobile-menu');
});
