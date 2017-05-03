/*!
 * Front Street v1.0.0 (http://getbootstrap.com)
 * Copyright 2017 Theme Blvd
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
	throw new Error('Front Street\'s JavaScript requires jQuery');
}

+function ($) {

	'use strict';

	var version = $.fn.jquery.split(' ')[0].split('.');

	if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
		throw new Error('Front Street\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4');
	}

}(jQuery);
