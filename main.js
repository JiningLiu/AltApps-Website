$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 1000) {
    if (y < 2000) {
      $('.scroll1').fadeOut();
      $('.scroll2').fadeIn();
      $('.scroll3').fadeOut();
      $('.scroll4').fadeOut();
      $('.scroll5').fadeOut();
      $('.scroll6').fadeOut();
      $('.scroll7').fadeOut();
      $('.toTop').fadeIn();
      $('.scrollDown').fadeOut();
    } else {
      if (y > 3000) {
        if (y < 4000) {
          $('.scroll1').fadeOut();
          $('.scroll2').fadeOut();
          $('.scroll3').fadeOut();
          $('.scroll4').fadeIn();
          $('.scroll5').fadeOut();
          $('.scroll6').fadeOut();
          $('.scroll7').fadeOut();
          $('.toTop').fadeIn();
          $('.scrollDown').fadeOut();
        } else {
          if (y < 5000) {
            $('.scroll1').fadeOut();
            $('.scroll2').fadeOut();
            $('.scroll3').fadeOut();
            $('.scroll4').fadeOut();
            $('.scroll5').fadeIn();
            $('.scroll6').fadeOut();
            $('.scroll7').fadeOut();
            $('.toTop').fadeIn();
            $('.scrollDown').fadeOut();
          } else {
            if (y < 6000) {
              $('.scroll1').fadeOut();
              $('.scroll2').fadeOut();
              $('.scroll3').fadeOut();
              $('.scroll4').fadeOut();
              $('.scroll5').fadeOut();
              $('.scroll6').fadeIn();
              $('.scroll7').fadeOut();
              $('.toTop').fadeIn();
              $('.scrollDown').fadeOut();
            } else {
              $('.scroll1').fadeOut();
              $('.scroll2').fadeOut();
              $('.scroll3').fadeOut();
              $('.scroll4').fadeOut();
              $('.scroll5').fadeOut();
              $('.scroll6').fadeOut();
              $('.scroll7').fadeIn();
              $('.toTop').fadeIn();
              $('.scrollDown').fadeOut();
            }
          }
        }
      } else {
        $('.scroll1').fadeOut();
        $('.scroll2').fadeOut();
        $('.scroll3').fadeIn();
        $('.scroll4').fadeOut();
        $('.scroll5').fadeOut();
        $('.scroll6').fadeOut();
        $('.scroll7').fadeOut();
        $('.toTop').fadeIn();
        $('.scrollDown').fadeOut();
      }
    }
  } else {
    $('.scroll1').fadeIn();
    $('.scroll2').fadeOut();
    $('.scroll3').fadeOut();
    $('.scroll4').fadeOut();
    $('.scroll5').fadeOut();
    $('.scroll6').fadeOut();
    $('.scroll7').fadeOut();
    $('.toTop').fadeOut();
    $('.scrollDown').fadeIn();
  }
});
