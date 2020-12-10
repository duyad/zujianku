$(function () {
	$('.banner').slide({titCell: '.hd ul', mainCell: '.bd ul', effect: 'fold', autoPlay: true, autoPage: '<li></li>'});
    $('.news').slide();

   $(".nav ul li").hover(function(){
		$("dl",this).css("display","block");
		$(this).addClass("hover");
	},function(){
		$("dl",this).css("display","none");
		$(this).removeClass("hover");
	});


})
  