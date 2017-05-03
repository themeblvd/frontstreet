jQuery(document).ready(function($){

	$('.menu-toggle').on('click', function(){

		var $el = $(this);

		if ( $el.hasClass('collapse') ) {

			$el.removeClass('collapse');

			// Code to close your menu...

		} else {

			$el.addClass('collapse');

			// Code to open your menu...

		}

		return false;

	});



});
