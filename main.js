$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 1000) {
    if (y < 2000) {
      $('.scroll1').fadeOut();
      $('.scroll2').fadeIn();
      $('.scroll3').fadeOut();
      $('.scroll4').fadeOut();
      $('.scroll5').fadeOut();
    } else {
      if (y > 3000) {
        $('.scroll1').fadeOut();
        $('.scroll2').fadeOut();
        $('.scroll3').fadeIn();
        $('.scroll4').fadeOut();
        $('.scroll5').fadeOut();
      } else {
        $('.scroll1').fadeOut();
        $('.scroll2').fadeIn();
        $('.scroll3').fadeOut();
        $('.scroll4').fadeOut();
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
