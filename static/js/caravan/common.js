$(function() {
	
	headerFn();
	
});

function headerFn() {
	var hd = $(".header"),
		gnb = $(".header .gnb .menu a");
	
	gnb.click(function() {
		console.log('click');
		$('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 89
        }, 800, 'easeInOutQuad');
	});
}