
$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
    $("#socicon").toggleClass("open-socicon");
    $("#head-size").toggleClass("open-head-size");
  })

const header = document.querySelector('.head-cont');

window.onscroll = function(){
  var top = window.scrollY;
  console.log(top);
  if (top >= 30){
    header.classList.add('active')
  }else {
    header.classList.remove('active');
  }
};
//------- MENU FILTR  -----------
$(document).ready(function() {
  $('.sub-btn').click(function() {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });
  $('.flt-icon').click(function() {
    $('.side-bar').addClass('bar-active');
    $('.close-btn').css("visibility", "visible");
    $('.flt-ico-nm-bar').css("visibility", "visible");
  });
  $('.sid-icon').click(function() {
    $('.side-bar').addClass('bar-active');
    $('.close-btn').css("visibility", "visible");
    $('.flt-ico-nm-bar').css("visibility", "visible");
  });
  $('.close-btn').click(function() {
    $('.side-bar').removeClass('bar-active');
    $('.close-btn').css("visibility", "hidden");
    $('.flt-ico-nm-bar').css("visibility", "hidden");
  });
});
//------- DEMO BANER ------------
 const demoBanner = document.querySelector(".demo-cont")
 const demoBtn = document.querySelector(".demo-cont button")

 setTimeout(() => {
    demoBanner.classList.add("activ");
 },3000);

 demoBtn.addEventListener("click", () => {
   demoBanner.classList.remove("activ");
 });




