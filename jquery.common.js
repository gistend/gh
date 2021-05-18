

$(function(){$(window).scroll(function(){if($(window).scrollTop()>=50){$('#back-to-top').fadeIn(300)}else{$('#back-to-top').fadeOut(300)}});$('.stop').click(function(){$('html,body').animate({scrollTop:'0px'},300)})});document.writeln('<div id="back-to-top"><a class="stop" href="javascript:"><span></span></a></div>');
//menu
$(".icon-back").click(function(){history.go(-1)});
$(".icon-index").click(function(){self.location.href="/"});
$('.icon-menu').click(function(){$('.icon-menu').toggleClass('icon-menu-on');$('#nav').toggleClass('show')});
//alert

function ShowAlert(notice){$("#Prompt").text(notice).show();setTimeout(function(){$("#Prompt").hide()},2000)};
//readall

$(function(){var widHeight=$(window).height();var artHeight=$('.content').height();if(artHeight>(widHeight*1.5)){$('.content').height(widHeight*1.5-86).css({'overflow':'hidden'});var article_show=true;$('.readall-more').on('click',bindRead_more)}else{article_show=true;$('.readall').hide().addClass('readall-on')}function bindRead_more(){if(!article_show){$('.content').height(widHeight*1.5).css({'overflow':'hidden'});$('.readall').show().removeClass('readall_box_nobg');article_show=true}else{$('.content').height("").css({'overflow':'hidden'});$('.readall').show().addClass('readall-on');$('.readall').hide().addClass('readall-on');article_show=false}}});

