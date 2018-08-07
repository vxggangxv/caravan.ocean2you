$(function() {
	
	init();
	commonFn();
	
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
	}, 4650);
	function waveFn() {
//		main.find(".wave").delay(100).animate({"top": "-=15px", "left": "+=12px"},1800, function() {
//			$(this).delay(500).animate({"top": "+=15px", "left": "-=12px"},2200);
//		});
		main.find(".wave").css("left", "12px");
		main.find(".wave").delay(100).animate({"top": "+=15px", "left": "-=12px"},1800, function() {
			$(this).delay(500).animate({"top": "-=15px", "left": "+=12px"},2200);
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
	
}

function commonFn() {
	var hd = $(".header"),
		gnbLi = $(".header .gnb .menu > li"),
		gnbA = $(".header .gnb .menu a"),
		modalContainer = $(".contents .modal-container"),
		modalX = $(".contents .modal-container section .xBtn"),
		ft = $(".footer"),
		footerBtn = (".footer .footerBtn");
	
	gnbA.click(function() {
		var idx = $(this).closest("li").index();
		console.log(idx + " , " + gnbLi.length );
//		console.log(idx + " , " + gnbLi.length );
		if ( idx != (gnbLi.length-1) ) {
			modalContainer.find("section").eq(idx).addClass("active").siblings().removeClass("active");
		}
	});
	modalX.click(function() {
		modalContainer.find("section").removeClass("active");
	});
}