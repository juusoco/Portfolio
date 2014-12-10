$(window).scroll(function() {
	oVal = ($(window).scrollTop() / 360);
	$('.blur').css('opacity', oVal);
});