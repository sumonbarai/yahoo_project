$(document).ready(function(){
    // testimonial_slider
    $('.testimonial_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        arrows:false,
        responsive: [
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        ]
      });
// drop-down btn
$('.header .sub_menu').click(function(){
  $('.header .main_menu ul ').slideToggle(800);
});










});