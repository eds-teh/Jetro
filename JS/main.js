$(function(){


    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav',
    //     });

    // $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     centerMode: true,
    //     focusOnSelect: true,
    //     prevArrow: '<button class="slick-arrow slick-prev"><img src="images/svg/prevArrow.svg" alt=""></button>',
    //     nextArrow: '<button class="slick-arrow slick-next"><img src="images/svg/nextArrow.svg" alt=""></button>',
    //   });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        // autoplay: true,
        // autoplaySpeed: 3000,
        // speed: 2500,
        });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // speed: 2500,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/svg/prevArrow.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/svg/nextArrow.svg" alt=""></button>',
      });

});

// идем в документацию ищем в сетингс prewArrow & nextArrow