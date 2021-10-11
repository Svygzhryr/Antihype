$(function() {

    var header = $("#header"),
        introh = $("#intro").innerHeight(),
        scrolloffset = $(window).scrollTop();

    // Fixed header бровь

    checkScroll(scrolloffset);

    $(window).on("scroll", function() {
        scrolloffset = $(this).scrollTop();

        checkScroll(scrolloffset);

    });

    function checkScroll() {
        scrolloffset = $(this).scrollTop();

        if (scrolloffset >= introh) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }

    // Smooth Scroll понятно

    $("[data-scroll").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockoffSet = $(blockId).offset().top;

        $("#nav a").removeClass("active");

        $this.addClass('active');

        $("html, body").animate({
            scrollTop: blockoffSet
        }, 500);
    });

    // Borgir

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    // коллапс анала

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');
        $(blockId).slideToggle();
    });

    // выкатывание комментов
    // используем slick.js

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


});