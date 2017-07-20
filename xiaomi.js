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


var aBtn=$('#ol1 li');
		var oUl=$('#ul1');
		var aLi=$('#ul1 li');
		
		aBtn.click(function(){
			aBtn.removeClass('active');
			$(this).addClass('active');
			oUl.animate({top:-$(this).index()*aLi.height()})
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