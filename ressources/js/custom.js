$( document ).ready(function() {
    const borderHover = $('.border-hover'); 
    
    $(borderHover).click(function() {
        $(this).toggleClass("border-hover--click");
    });
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
})

$(window).scroll(function() {
var top_of_element = $(".about__contet").offset().top;
var bottom_of_element = $(".about__content").offset().top + $(".about__content").outerHeight();
var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
var top_of_screen = $(window).scrollTop();

if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    $(".about__content").addClass("fadeIn animated delay-05s");
}
else {
    $(".about__content").removeClass("fadeIn animated delay-05s");
}
});