$(window).load(function() {
//$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
	  
	items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    //autoplayHoverPause:true,
    autoplaySpeed: 4000  
	
	
 
  });
 
	$("#owl-demo-1").owlCarousel({
	  
	items: 4,
	loop: true,
	margin: 35,
	//autoplay: true,
	autoplayTimeout: 2000,
	//autoplayHoverPause:true,
	autoplaySpeed: 4000
	
	
 
  });
});