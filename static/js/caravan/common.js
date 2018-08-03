$(function() {
	
	scrFn();
	
});

function scrFn() {
	var topBtn = $("#goTop");
	
	$(window).on('scroll', function() {
		var scr = $(window).scrollTop();
		var setTop = 920;
		
		if (scr < setTop) {
			topBtn.removeClass("on");
		}
		if (scr >= setTop) {
			topBtn.addClass("on");
		}
	});

	topBtn.on("click", function() {
		$(window).scrollTop(0);
	});
}
