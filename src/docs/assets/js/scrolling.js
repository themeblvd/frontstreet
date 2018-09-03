const toTop = document.querySelector('.to-top');

/**
 * Scroll webpage back to the top when the
 * "Back to Top" button is clicked.
 */
toTop.addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

// Bind "Back to Top" button stick events.
window.addEventListener('scroll', stickButton);
window.addEventListener('load', stickButton);

/**
 * Stick "Back to Top" button so it never
 * leaves the visible viewport.
 */
function stickButton(event) {
  const sidebarHeight = document.querySelector('.site-sidebar > .wrap').offsetHeight;
  const btnHeight = toTop.offsetHeight;

  if (window.scrollY >= sidebarHeight - btnHeight) {
    toTop.classList.add('stick');
  } else {
    toTop.classList.remove('stick');
  }
}
