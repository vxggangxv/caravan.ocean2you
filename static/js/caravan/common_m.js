$(function() {
	
	headerFn();
	scrFn();
	
});

function headerFn() {
	
	var hd = $(".header"),
		gnb = $(".header .gnb .menu a"),
		navBack = $(".nav-back"),
		navTab = $(".header .nav-tab"),
		navArea = $(".header .nav-area");
	
	navTab.click(function() {
		navFn();
	});
		
	function navFn() {
		navTab.toggleClass("active");
		navArea.fadeToggle();
		navBack.fadeToggle();
		if ( navTab.hasClass("active") ) {
			$("html, body").on("scroll touchmove mousewheel", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});	
		} else { 
			$("html, body").off("scroll touchmove mousewheel");
		}
	}
	
}

function scrFn() {
	$(window).on('scroll', function() {
		var scr = $(window).scrollTop();
		var setTop = 568;
		
		if (scr < setTop) {
			$("#goTop").removeClass("on");
		}
		if (scr >= setTop) {
			$("#goTop").addClass("on");
		}
	});

	$("#goTop").on("click", function() {
		$(window).scrollTop(0);
	});
}