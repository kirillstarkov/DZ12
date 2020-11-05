$(document).ready(function(){
  $('.slider-fade').slick({
  	speed: 500,
  	fade: true,
  	cssEase: 'linear',
  	arrows: false,
  	dots: true
  });

  $('.sldr').slick({
  	speed: 500,
  	arrows: false,
  	slidesToShow: 1
  	// responsive: [
  	// {
  	// 	breakpoint: 460,
  	// 	settings: {
  	// 		arrows: false,
  	// 		dots: true,
  	// 		slidesToShow: 1
  	// 	}
  	// },
  	// {
  	// 	breakpoint: 768,
  	// 	settings: {
  	// 		arrows: false,
  	// 		dots: true,
  	// 		slidesToShow: 2
  	// 	}
  	// }
  	// {
  	// 	breakpoint: 1024,
  	// 	settings: {
  	// 		arrows: true,
  	// 		dots: false,
  	// 		slidesToShow: 4
  	// 	}
  	// }
  	// ]
  });
});