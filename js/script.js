
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
 const demoBanner = document.querySelector(".demo-cont")
 const demoBtn = document.querySelector(".demo-cont button")

 setTimeout(() => {
    demoBanner.classList.add("activ");
 },3000);

 demoBtn.addEventListener("click", () => {
   demoBanner.classList.remove("activ");
 });




