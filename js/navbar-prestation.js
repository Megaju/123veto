$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#navbar-prestation');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.nav-prestations').css('opacity', '1');
                $('.nav-prestations').css('transition', '0.5s');
            } else {
                $(".nav-prestations").css('opacity', '0');
            }
        });
    }
});