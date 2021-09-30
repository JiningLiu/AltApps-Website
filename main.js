$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 250) {
        $('.scroll1').fadeOut();
        $('.scroll2').fadeIn();
    } else {
        $('.scroll2').fadeOut();
        $('.scroll1').fadeIn();
    }
});
