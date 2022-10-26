'use strict';

$(function(){
	//configuration
	var width = 1260;
	var animationSpeed = 1000;
	var pause = 3000; //auto interval
	var currentSlide = 1;
	
	//cache DOM
	var $slider = $('#slider__wrap');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide__item');
	
	var interval;
	
	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){
				currentSlide++;
				if(currentSlide === $slides.length){
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}
	
	function stopSlider() {
		clearInterval(interval);
	}
	
	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
	
	startSlider();
	
});