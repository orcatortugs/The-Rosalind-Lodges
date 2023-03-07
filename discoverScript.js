$(function() {
	// Cache the window object
	var $window = $(window);

	// Parallax Background Effect
	$('section[data-type="background"]').each(function() {
		
		var $bgobj = $(this); // assingning the object
		
		$(window).scroll(function() {
			
			// scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Put together our final background position
			var coords = '50% ' + yPos + 'px';

			// Move the Background
			$bgobj.css({backgroundPosition: coords});
		}); //end Window Scroll
	});
});