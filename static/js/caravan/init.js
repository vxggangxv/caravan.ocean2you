$(function() {
	
	init();
	commonFn();
	scrFn();
	
});

function init() {
	var contents = $(".contents"),
		main = $(".contents .wrap.main"),
		wh = $(window).height();
	$(window).resize(function() {
		wh = $(window).height();
		contents.height(wh);	
		main.height(wh);	
	}).resize();
	
	main.find(".cloud-left").delay(500).animate({"left": "-=80px"},3000);
	main.find(".cloud-right").delay(500).animate({"right": "-=80px"},3000);
	main.find(".gless-left").delay(500).animate({"left": "-=30px"},3000);
	main.find(".gless-right").delay(500).animate({"right": "-=30px"},3000);
	waveFn();
	var waveMove = setInterval(function() {
		waveFn();
	}, 4600);
	function waveFn() {
		main.find(".wave").delay(100).animate({"top": "-=15px", "left": "+=12px"},1800, function() {
			$(this).delay(500).animate({"top": "+=15px", "left": "-=12px"},2200);
		});
	}
					  
	birdFn();
	var birdFly = setInterval(function() {
		birdFn();
	}, 2200);
	function birdFn() {
		main.find("[class*=bird]").delay(200).animate({"top": "+=6px"},1000, function() {
			$(this).animate({"top": "-=6px"},1000);
		});
	}
	
	modalContainer.find(".")
}

function commonFn() {
	var hd = $(".header"),
		gnbLi = $(".header .gnb .menu > li"),
		gnba = $(".header .gnb .menu a"),
		modalContainer = $(".contents .modal-container"),
		ft = $(".footer"),
		footerBtn = (".footer .footerBtn");
	
	gnba.click(function() {
		var idx = $(this).closest("li").index();
		if ( idx != gnbLi.length() ) {
			modalContainer.find(".section").eq(idx).addClass("active").siblings().removeClass("active");
		}
	});
}

/*
function scrFn() {
	var topBtn = $("#goTop");
	
	$(window).on('scroll', function() {
		var scr = $(window).scrollTop();
		var setTop = $(".wrap.about").offset().top;
		
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
*/
