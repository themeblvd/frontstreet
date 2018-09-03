/**
 * Example of animating menu toggle.
 */
document.querySelectorAll('.fs-menu-toggle').forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    if (item.classList.contains('collapse')) {
      item.classList.remove('collapse');
      // Code to close menu...
    } else {
      item.classList.add('collapse');
      // Code to open menu...
    }
  });
});

// @TODO
// $('.mobile-menu-bar').frontstreet('mobile-menu');
