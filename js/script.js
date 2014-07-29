$(function(){
    $('.bxslider').bxSlider({
        minSlides: 3,
        maxSlides: 10,
        slideWidth: 160,
        slideMargin: 10
    });
	
	$('.main_slider').bxSlider({
	  mode: 'fade',
	  captions: false,
	  controls: false,
	  auto: true,
	  speed: 100
	});
});