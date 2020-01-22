/** first slider */
$(".slider-one")
.not(".slick-intialized")
.slick({
    autoplay: true,
    autoplayspeed: 3000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
});


/** second slider */
$(".slider-two")
.not(".slick-intialized")
.slick({
    prevArrow:".site-slider-two .prev",
    nextArrow:".site-slider-two .next",
    slidestoshow: 5,
    slidestoscroll: 1,
    autoplayspeed: 3000,
});
