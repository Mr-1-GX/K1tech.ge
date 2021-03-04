
$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
    $("#socicon").toggleClass("open-socicon");
  })

  $('.sect-conteiner-1').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
