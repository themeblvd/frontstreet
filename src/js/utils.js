/**
 * Checks if website is being loaded from a mobile
 * device.
 *
 * @since 1.0.0
 *
 * @param  {boolean} viewportCheck Whether to let viewport size help determine.
 * @return {boolean} Whether we're on a mobile device.
 */
export function isMobile(viewportCheck) {
  if (document.body.classList.contains('mobile')) {
    return true;
  }

  const agentCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (agentCheck) {
    return true;
  }

  if (viewportCheck) {
    if (window.offsetWidth < 992 || window.offsetHeight < 500) {
      return true;
    }
  }

  return false;
}

/**
 * Generate a unqiue ID.
 *
 * @since 1.1.0
 *
 * @param {string} prefix Optional. String to prefix ID with.
 * @return {string} Final HTML ID.
 */
export function uniqueID(prefix) {
  const max = 1000000;

  do {
    prefix += ~~(Math.random() * max); // "~~" acts like a faster Math.floor() here.
  } while (document.getElementById(prefix));

  return prefix;
}

/**
 * Check if this is an RTL website.
 *
 * Note: For RTL, make sure you have the
 * class "rtl" on the website <body>.
 */
export function isRtl() {
  return document.body.classList.contains('rtl');
}
