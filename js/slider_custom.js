$(document).ready(function(){ 
    
//Слайдер

  $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: true,
      dots: true,
      speed: 500,
      fade: true,
      responsive: [
          {
            breakpoint: 750,
            settings: {
              arrows: false,
            }
          },
      ]
  });

  $('.slider2').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      dots: true,
      speed: 500,
      fade: true,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              dots: false,
            }
          },
      ]
  });



});
