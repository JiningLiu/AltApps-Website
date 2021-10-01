$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
      if (y < 600) {
        $('.scroll1').fadeOut();
        $('.scroll2').fadeIn();
        $('.scroll3').fadeOut();
        $('.scroll4').fadeOut();
        $('.scroll5').fadeOut();
      } else {
        if (y > 600) {
          if ($(window).width() > 1280)
            $('.scroll1').fadeOut();
            $('.scroll2').fadeOut();
            $('.scroll3').fadeIn();
            $('.scroll4').fadeOut();
            $('.scroll5').fadeOut();
          } else {
            if (y < 900) {
              $('.scroll1').fadeOut();
              $('.scroll2').fadeOut();
              $('.scroll3').fadeOut();
              $('.scroll4').fadeIn();
              $('.scroll5').fadeOut();
            } else {
              $('.scroll1').fadeOut();
              $('.scroll2').fadeOut();
              $('.scroll3').fadeOut();
              $('.scroll4').fadeOut();
              $('.scroll5').fadeIn();
            }
          }
        } else {
          $('.scroll1').fadeOut();
          $('.scroll2').fadeIn();
          $('.scroll3').fadeOut();
          $('.scroll4').fadeOut();
          $('.scroll5').fadeOut();
        }
      }
    } else {
      $('.scroll1').fadeIn();
      $('.scroll2').fadeOut();
      $('.scroll3').fadeOut();
      $('.scroll4').fadeOut();
      $('.scroll5').fadeOut();
    }
});
