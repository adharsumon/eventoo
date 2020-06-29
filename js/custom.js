$(function () {

    //    DROPDOWN MENU
    $(".nav-link.active").click(function () {
        $(".submenu").toggleClass("active");
    });

    // TIMER COUNTDOWN
    var deadline = new Date("jun 27, 2021 15:37:25").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);
        if (t < 0) {
            clearInterval(x);
            $(".countdown-wrapper").fadeOut();
        }
    }, 1000);

    //PLAY BUTTON JS

    $('.venobox').venobox();

    //    FESTIVAL SLIDE JS HERE

        $('.f_slider_active').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });


    //EVENT GALLERY SLICK JS
    $('.gallery_wrapper').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //    EVENT GALLERY VENOBOX
    $('.venobox_gall').venobox({
        share: [] // default: []
    });


    //    FEEDBACK SLIDER JS
    $('.feedback_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: ".btn_right",
        prevArrow: ".btn_left"
    });


    //    PRICING SLIDER JS

    $('.pricing_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: ".pricing_arrow .btn_left",
        prevArrow: ".pricing_arrow .btn_right",
        autoplay: true,
        autoplaySpeed: 2000

    });






});
