$(window).load(function () {
//$(document).ready(function() {
 
	$("#owl-demo").owlCarousel({
		items : 1,
		loop: true,
		margin : 10,
		autoplay: true,
		autoplayTimeout: 2000,
		//autoplayHoverPause:true,
		autoplaySpeed: 4000,
		
	});
 
	$("#owl-demo-1").owlCarousel({
	
		loop: true,
		margin: 35,
		nav : true,
		navText: ["prev", "next"],
		//pagination : true,
		items: 4,
		responsiveClass:false,
		responsive: {
			0: {
				items: 1,
				nav: true,
				
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 4,
				nav: true,
				loop: false
			}
		}

	
	});
	
});