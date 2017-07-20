$(function () {
					$(".nav-ul-li,.nav-ul-lia").mousemove(function(){
						$(this).css("color","orange").siblings().css("color","#eee");
					});
					$(".logo-ul-li").mousemove(function(){
						$(this).css("color","red").siblings().css("color","#666");
					});
					var back = $(".foot-top");
					$(window).scroll(function(){
						if($(document).scrollTop()>=1500){
							back.css("display","block");
						}
						else{
							back.css("display","none");
						}
					});

$(".car").hover(function(){
	$("#car_content").css({"width":"120px"}).animate({
        height:"100px"
    },400).finish();
    
},function(){
    $(this).css("background", "#424242");
    $(".head_car_text").css("color", "#424242");
    $("#car_content").css({"width":"120px"}).animate({
        height:"0px"
    },400);
})

$(".logo-ul-li a").mouseenter(function(){
	$(this).css("color","orange")
})
$(".logo-ul-li a").mouseleave(function(){
	$(this).css("color","#999")
})

$(".banner-ul-li").hover(function(){
    $(this).css("background","#ff6700");
    $(this).children(".banner_menu_content").css("border","1px solid #F0F0F0").show();
},function(){
    $(this).css("background","none");
    $(this).children(".banner_menu_content").css("border","0px solid #F0F0F0").hide();
})




$(".logo-ul-li a").hover(function(){
	$(this).children(".car_contenta").css({"width":"120px"}).animate({
        height:"100px"
    },400).finish();
},function(){
    $(this).children(".car_contenta").css({"width":"120px"}).animate({
        height:"0px"
    },400);
})


		$('#ul1').width($('#ul1 li').length*$('#ul1 li').width());
		
		$('#ol1 li').click(function(){
			$('#ol1 li').removeClass('active');
			$(this).addClass('active');
			$('#ul1').stop().animate({left:-$(this).index()*$('#ul1 li').width()})
		})





$(".logo-inp input").focus(function(){
    $(".logo-inp input").css("border","1px solid #ff6700");
})
$(".logo-inp input").blur(function(){
    $(".logo-inp input").css("border","1px solid #F0F0F0");
})



$(".jiadian-right ul li").hover(function(){
	$(this).css({"top":"-5px","box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"});
},function(){
	$(this).css({"top":"0px","box-shadow":"none"});
})











})