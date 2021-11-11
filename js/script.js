


const header = document.querySelector('.head-cont');

window.onscroll = function(){
  var top = window.scrollY;
  console.log(top);
  if (top >= 15){
    header.classList.add('active')
  }else {
    header.classList.remove('active');
  }
};


//------- MENU FILTR  -----------
$(document).ready(function() {
  $('.sub-btn').click(function() {
    $(this).next('.sub-menu').slideToggle();
    $(this).next('.sub-menu-2').slideToggle();
    $(this).next('.sub-menu-3').slideToggle();
    $(this).next('.sub-menu-4').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });
  $('.flt-icon').click(function() {
    $('.side-bar').addClass('bar-active');
    $('.close-btn').css("visibility", "visible");
    $('.flt-ico-nm-bar').css("visibility", "visible");
    $('.sid-icon').css("visibility", "hidden");
  });
  $('.user-icon-head').click(function() {
    $('.user-bar').addClass('user-bar-active');
    $('.user-close-btn').css("visibility", "visible");
    $('.user-ico-nm-bar').css("visibility", "visible");
    $('.users-icon').css("visibility", "hidden");
  });
  $('.user-icon').click(function() {
    $('.user-bar').addClass('user-bar-active');
    $('.user-close-btn').css("visibility", "visible");
    $('.user-ico-nm-bar').css("visibility", "visible");
    $('.users-icon').css("visibility", "hidden");
  });
  $('.sid-icon-head').click(function() {
    $('.side-bar').addClass('bar-active');
    $('.close-btn').css("visibility", "visible");
    $('.flt-ico-nm-bar').css("visibility", "visible");
    $('.sid-icon').css("visibility", "hidden");
  });
  $('.sid-icon').click(function() {
    $('.side-bar').addClass('bar-active');
    $('.close-btn').css("visibility", "visible");
    $('.flt-ico-nm-bar').css("visibility", "visible");
    $('.sid-icon').css("visibility", "hidden");
  });
  $('.users-icon').click(function() {
    $('.user-bar').addClass('user-bar-active');
    $('.user-close-btn').css("visibility", "visible");
    $('.user-ico-nm-bar').css("visibility", "visible");
    $('.users-icon').css("visibility", "hidden");
  });
  //----- Big IMAGE --------
  $('.pc-k1-img').click(function() {
    $('.pc-k1-img-cont').addClass('pc-k1-img-big-img');
    $('.close-big-img').css("visibility", "visible");
    
    $('.flt-user-cont').css("visibility", "hidden");
  });
  $('.close-big-img').click(function() {
    $('.pc-k1-img-big-img').removeClass('pc-k1-img-big-img');
    $('.close-big-img').css("visibility", "hidden");
    $('.flt-user-cont').css("visibility", "visible");
  });
  //-----------------------
  $('.close-btn').click(function() {
    $('.side-bar').removeClass('bar-active');
    $('.close-btn').css("visibility", "hidden");
    $('.flt-ico-nm-bar').css("visibility", "hidden");
    $('.sid-icon').css("visibility", "visible");
  });
  $('.user-close-btn').click(function() {
    $('.user-bar').removeClass('user-bar-active');
    $('.user-close-btn').css("visibility", "hidden");
    $('.user-ico-nm-bar').css("visibility", "hidden");
    $('.users-icon').css("visibility", "visible");
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

 




