//animation navbar side prestations (changement de couleur)
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#consultation');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-stethoscope').css('color', '#337ab7');
                $('.fa-stethoscope').css('transition', '0.5s');
            } else {
                $(".fa-stethoscope").css('color', '#F58900');
                $('.fa-stethoscope').css('transition', '0.5s');
            }
        });
    }
});
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#imagerie');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-camera').css('color', '#337ab7');
                $('.fa-camera').css('transition', '0.5s');
            } else {
                $(".fa-camera").css('color', '#F58900');
                $('.fa-camera').css('transition', '0.5s');
            }
        });
    }
});
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#analyse');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-medkit').css('color', '#337ab7');
                $('.fa-medkit').css('transition', '0.5s');
            } else {
                $(".fa-medkit").css('color', '#F58900');
                $('.fa-medkit').css('transition', '0.5s');
            }
        });
    }
});
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#chirurgie');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-heartbeat').css('color', '#337ab7');
                $('.fa-heartbeat').css('transition', '0.5s');
            } else {
                $(".fa-heartbeat").css('color', '#F58900');
                $('.fa-heartbeat').css('transition', '0.5s');
            }
        });
    }
});
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#hospitalisation');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-hospital-o').css('color', '#337ab7');
                $('.fa-hospital-o').css('transition', '0.5s');
            } else {
                $(".fa-hospital-o").css('color', '#F58900');
                $('.fa-hospital-o').css('transition', '0.5s');
            }
        });
    }
});
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#nac');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-paw').css('color', '#337ab7');
                $('.fa-paw').css('transition', '0.5s');
            } else {
                $(".fa-paw").css('color', '#F58900');
                $('.fa-paw').css('transition', '0.5s');
            }
        });
    }
});
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#tarifs');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-eur').css('color', '#337ab7');
                $('.fa-eur').css('transition', '0.5s');
            } else {
                $(".fa-eur").css('color', '#F58900');
                $('.fa-eur').css('transition', '0.5s');
            }
        });
    }
});



//animation navbar side conseils (changement de couleur)
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#dent');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-user-md').css('color', '#337ab7');
                $('.fa-user-md').css('transition', '0.5s');
            } else {
                $(".fa-user-md").css('color', '#F58900');
                $('.fa-user-md').css('transition', '0.5s');
            }
        });
    }
});

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#yeux-oreilles');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-eye').css('color', '#337ab7');
                $('.fa-eye').css('transition', '0.5s');
            } else {
                $(".fa-eye").css('color', '#F58900');
                $('.fa-eye').css('transition', '0.5s');
            }
        });
    }
});

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#pelage');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-paw').css('color', '#337ab7');
                $('.fa-paw').css('transition', '0.5s');
            } else {
                $(".fa-paw").css('color', '#F58900');
                $('.fa-paw').css('transition', '0.5s');
            }
        });
    }
});

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#parasite');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-bug').css('color', '#337ab7');
                $('.fa-bug').css('transition', '0.5s');
            } else {
                $(".fa-bug").css('color', '#F58900');
                $('.fa-bug').css('transition', '0.5s');
            }
        });
    }
});

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#vaccin-chien');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-plus-square').css('color', '#337ab7');
                $('.fa-plus-square').css('transition', '0.5s');
            } else {
                $(".fa-plus-square").css('color', '#F58900');
                $('.fa-plus-square').css('transition', '0.5s');
            }
        });
    }
});

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#vaccin-chat');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-medkit').css('color', '#337ab7');
                $('.fa-medkit').css('transition', '0.5s');
            } else {
                $(".fa-medkit").css('color', '#F58900');
                $('.fa-medkit').css('transition', '0.5s');
            }
        });
    }
});

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#id');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-info-circle').css('color', '#337ab7');
                $('.fa-info-circle').css('transition', '0.5s');
            } else {
                $(".fa-info-circle").css('color', '#F58900');
                $('.fa-info-circle').css('transition', '0.5s');
            }
        });
    }
});

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#education');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.fa-book').css('color', '#337ab7');
                $('.fa-book').css('transition', '0.5s');
            } else {
                $(".fa-book").css('color', '#F58900');
                $('.fa-book').css('transition', '0.5s');
            }
        });
    }
});
