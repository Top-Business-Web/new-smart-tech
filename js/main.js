$(function(){

    'use strict';

    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.small-slider'
      });
      $('.small-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });

    // featured product

    $(".services--slider").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 4,
        nav: false,
        loop: true,
        dots: true,
        responsive: {
            0 : {
                items: 1
            },
            485 : {
                items: 2
            },
            728 : {
                items: 3
            },
            1200 : {
                items: 4
            }
        }
    });
    

    $('.btn-faq').click(function(){
        $(this).toggleClass('active');
    });
    

});
