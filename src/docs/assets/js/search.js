import Fuse from 'fuse.js';
import searchIndex from './search-index';

const config = {
  shouldSort: true,
  includeScore: true,
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

const fuse = new Fuse(searchIndex, config);
const searchField = document.getElementById('site-search-field');
const resultsList = document.querySelector('#search-results > ul');

let selected; // Keeps track of keyboard navigation of results.

/**
 * Search site and update results as the
 * user types.
 *
 * Note that if the user hits up, down or enter,
 * this function will not execute.
 */
searchField.addEventListener('keyup', function(event) {
  // Is esc, up, down, or enter being pressed?
  const keys = [27, 13, 38, 40];
  if (keys.includes(event.which)) {
    return;
  }

  resultsList.innerHTML = '';

  resultsList.style.display = 'block';

  const results = fuse.search(event.target.value);

  results.forEach(function(result) {
    const newItem = document.createElement('li');

    newItem.innerHTML = `<a href="${result.item.url}" data-score="${result.score}">${
      result.item.title
    }</a>`;

    resultsList.appendChild(newItem);
  });

  // When clicking a link on the same page, make sure
  // search results are cleared.
  resultsList.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      searchField.value = '';
      resultsList.style.display = 'none';
    });
  });
});

/**
 * Handle keyboard navigation through
 * search results.
 */
searchField.addEventListener('keydown', function(event) {
  const enter = event.which == 13;
  const up = event.which == 38;
  const down = event.which == 40;

  if (down) {
    if (!selected) {
      selected = resultsList.querySelector('li:first-child');
    } else {
      if (selected.nextSibling) {
        selected = selected.nextSibling;
      } else {
        selected = resultsList.querySelector('li:first-child');
      }
    }
  } else if (up) {
    if (!selected) {
      selected = resultsList.querySelector('li:last-child');
    } else {
      if (selected.previousSibling) {
        selected = selected.previousSibling;
      } else {
        selected = resultsList.querySelector('li:last-child');
      }
    }
  } else if (enter && selected) {
    const url = selected.querySelector('a').href;
    selected = null;
    resultsList.innerHTML = '';
    searchField.value = '';
    window.location.href = url;
  }

  if (selected && (up || down)) {
    resultsList.querySelectorAll('li').forEach(function(item) {
      item.classList.remove('selected');
    });

    selected.classList.add('selected');
  }
});

/**
 * When focusing on the search field,
 * display search results.
 */
searchField.addEventListener('focus', function() {
  resultsList.style.display = 'block';
});

/**
 * Close search results when hitting
 * the ESC key.
 */
searchField.addEventListener('keydown', function(event) {
  if (event.which === 27) {
    resultsList.style.display = 'none';
  }
});

/**
 * If the user clicks outside of the search
 * area, hide the search results.
 */
document.querySelector('.site-main').addEventListener('click', function(event) {
  resultsList.style.display = 'none';
});
