// $('border-hover').on('click', function(e) {
//    $(this).toggleClass('border-hover--click');
// });

$( document ).ready(function() {
    const borderHover = $('.border-hover'); 
    
    $(borderHover).click(function() {
        $(this).toggleClass("border-hover--click");
    });
});