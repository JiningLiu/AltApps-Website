<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.scroll1').fadeOut();
        $('.scroll2').fadeIn();
    } else {
        $('.scroll2').fadeOut();
        $('.scroll1').fadeIn();
    }
});
