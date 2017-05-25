window.onload = function() {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
	window.onresize = function() {
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
	};
	//rem计算

	$(".glyphicon").click(function(){
		
	})

		//导航
	var flag = true;
	$(".menu").bind("touchend", function() {
		if(flag == true) {
			$(".cover").animate({
				"left": '-4rem'
			})
			$(".cover_right>ul>li").eq(0).css({
				"left": "0",
				"transition-duration": "1s"
			})
			$(".cover_right>ul>li").eq(1).css({
				"left": "0",
				"transition-duration": "1.3s"
			})
			$(".cover_right>ul>li").eq(2).css({
				"left": "0",
				"transition-duration": "1.6s"
			})
			$(".cover_right>ul>li").eq(3).css({
				"left": "0",
				"transition-duration": "1.9s"
			})
			$(".cover_right>ul>li").eq(4).css({
				"left": "0",
				"transition-duration": "2.2s"
			})
			flag = false;
			$("body").addClass("noJob");
		} else {
			$(".cover").animate({
				"left": '0rem'
			})
			$(".cover_right>ul>li").css({
				"left": "4rem",
				"transition-duration": "0s"
			})
			flag = true;
			$("body").removeClass("noJob");
		}
	})

		$(window).scroll(function(){
		var toTop=$(document).scrollTop();
		$(".cover_right").css({"top":toTop})	
	})


	$(".shouye").click(function(){
		window.location.href="../index.html";
	})
	$(".show").click(function(){
		window.location.href="show.html";
	})
	$(".qushi").click(function(){
		window.location.href="news.html";
	})
	$(".guanyu").click(function(){
		window.location.href="About Us.html";
	})


}