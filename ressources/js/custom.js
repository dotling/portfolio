// BUTTON
$( document ).ready(function() {
    const borderHover = $('.border-hover'); 
    
    $(borderHover).click(function() {
        $(this).toggleClass("border-hover--click");
    });
});

// SCROLL TO TOP
$('.to-top').click(function(){
    $('.to-top').animate({
        pageYOffset: 0
    }, 2000);
});

$(window).scroll(function() {
    const scroll_pos = window.pageYOffset;
    const scroll_pos_check = 500;

    if(scroll_pos > scroll_pos_check) {
        $('.to-top').css('display', 'block');
    }

    if(scroll_pos < scroll_pos_check) {
        $('.to-top').css('display', 'none')
    }

    console.log(scroll_pos);
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 80,
    nav: false,
    autoWidth:true,
    center:true,
    navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
        items: 1,
        margin: 40
        },
        600: {
        items: 3,
        margin: 60
        },
        1000: {
        items: 5
        }
    }
});