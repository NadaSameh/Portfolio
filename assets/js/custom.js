$(document).ready(function(){
  $('.home-page .left .parts .about').click(function(){
      $('html, body').animate({
          scrollTop:$('.home-page .right .header').offset().top
      },2000); 
  });
  $('.home-page .left .parts .work').click(function(){
      $('html, body').animate({
          scrollTop:$('.home-page .right .work').offset().top
      },2000); 
  });
  $('.home-page .left .parts .contact').click(function(){
      $('html, body').animate({
          scrollTop:$('.home-page .right .contact').offset().top
      },2000); 
  });
  $('.home-page .right .header .contain .art .contact').click(function(){
      $('html, body').animate({
          scrollTop:$('.home-page .right .contact').offset().top
      },2000); 
  });
  $('.home-page .right .button i').click(function(){
      if($('.home-page .left').css('opacity') == '0'){
          $('body').animate({
              marginLeft:'150px'
          },300);
          $('body').toggleClass('scroll');
          $('.home-page .left').animate({
              opacity:'1'
          },300);
          $('.home-page .right .button').css({
              position:'fixed',
              left:'180px',
              zindex:'1'
          });
      }
      if($('.home-page .left').css('opacity') == '1'){
          $('.home-page .left').animate({
              opacity:'0'
          },0);
          $('body').animate({
              marginLeft:'0'
          },300);
          $('body').toggleClass('scroll');
          $('.home-page .right .button').css({
              position:'absolute',
              left:'30px'
          });
      }
  });
}); 