
$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
    $("#socicon").toggleClass("open-socicon");
  })

  $('.slider-cont').slick({
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
  });

  $('.cont').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
      
