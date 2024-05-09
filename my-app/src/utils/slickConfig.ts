import $ from 'jquery'
import 'slick-carousel'

export function initializeTestimonialSlider(): void {
	$('.testimonial-slider').slick({
		infinite: true,
		autoplay: true,
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.testimonial-slider-nav',
	})

	$('.testimonial-slider-nav').slick({
		arrows: false,
		dots: false,
		focusOnSelect: true,
		centerMode: true,
		centerPadding: '22px',
		slidesToShow: 3,
		asNavFor: '.testimonial-slider',
	})

	$('.testimonial .slider-nav').css({ position: 'relative', height: '160px' })
}
