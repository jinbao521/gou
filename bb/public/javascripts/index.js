window.onload = function() {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
	window.onresize = function() {
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
	};
	//rem计算
	  var mySwiper = new Swiper ('.lb1', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:2000,
	    pagination: '.swiper-pagination',
	  })
	  var mySwiper1 = new Swiper ('.lb2', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:false,
	    pagination: '.swiper-pagination',
	  })
	  var mySwiper1 = new Swiper ('.lb3', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:false,
//	    pagination: '.swiper-pagination',
	  })
	  
	var flag=true;
	$(".menu").bind("touchend",function(){
		
		if(flag==true){
			setTimeout(function(){
				flag=false;
			},500)
			$(".cover").animate({"left":'-4rem'})
			$(".cover_right>ul>li").eq(0).css({"left":"0","transition-duration":"1s"})
			$(".cover_right>ul>li").eq(1).css({"left":"0","transition-duration":"1s"})
			$(".cover_right>ul>li").eq(2).css({"left":"0","transition-duration":"1s"})
			$(".cover_right>ul>li").eq(3).css({"left":"0","transition-duration":"1s"})
			$(".cover_right>ul>li").eq(4).css({"left":"0","transition-duration":"1s"})
			$("body").addClass("noJob");
		}else{
			
			$(".cover").animate({"left":'0rem'});
//			$(".cover_right>ul>li").css({"left":"4rem"})
			$("body").removeClass("noJob");
			setTimeout(function(){
				flag=true;
			},500)
		}
	})
	$(window).scroll(function(){
		var toTop=$(document).scrollTop();
		$(".cover_right").css({"top":toTop})	
	})
	$(".returnTop").bind("touchend",function(){
		$(document).scrollTop(0);
	})
	$(".index_searchText").bind("touchend",function(){
		location.href="html/seek.html"
	})
	$(".index_messageBoard").bind("touchend",function(){
		location.href="html/message board.html"
	})
	$(".index_dogNews").bind("touchend",function(){
		location.href="html/news.html"
	})
	$(".index_AboutUs").bind("touchend",function(){
		location.href="html/About Us.html"
	})
	$(".index_dogshow").bind("touchend",function(){
		location.href="html/show.html"
	})
}