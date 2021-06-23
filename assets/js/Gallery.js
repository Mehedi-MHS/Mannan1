/* 
-www.mannan.ml
-developed by Mehedi Hasan Shuvo
-email: mehedishuvo685638@gmail.com
 */

/**darkmode**/
var dmodecheck=document.querySelector(".form-check-input");
var body=document.querySelector("body");
var header=document.querySelector(".header");
var navbar=document.querySelector(".navbar");
//Set dark/light mode when window loaded
   //getting localStorage values for operation
   if(localStorage.getItem("dmode")){
      body.classList.add("body-dark");
      header.classList.add("header-dark");
      navbar.classList.add("navbar-dark");
      dmodecheck.checked=true;
   }else if(!localStorage.getItem("dmode")){
       body.classList.remove("body-dark");
      header.classList.remove("header-dark");
      header.classList.add("header-light");
      navbar.classList.remove("navbar-dark");
      navbar.classList.add("navbar-light");
   }
function darkmode(mh){
   //first setting localStorage values
   if(mh.checked){
     localStorage.setItem("dmode","on");
   }else if(!mh.checked){
     localStorage.removeItem("dmode");
   }
   //getting localStorage values for operation
   if(localStorage.getItem("dmode")){
      body.classList.add("body-dark");
      header.classList.add("header-dark");
      navbar.classList.add("navbar-dark");
   }else if(!localStorage.getItem("darkmode")){
     body.classList.remove("body-dark");
     header.classList.remove("header-dark");
     header.classList.add("header-light");
     navbar.classList.remove("navbar-dark");
     navbar.classList.add("navbar-light");
   }
}
/*********************/

/*navicon*/
//script for mobile devices.For changing animated navIcon.
var navpanel=document. getElementById("navbar");
var dimbg=document. getElementById("dimbg");
var num=0;
function openNav(x){
x.classList.toggle("change");
num++;
if(num%2!==0){
navpanel.style. display="block";
dimbg.style. display="block";
}else{
navpanel.style. display="none";
dimbg.style. display="none";
 }
}
/*end of navicon script */



/*glightbox*/
const lightbox=GLightbox({
  touchNavigation:true,
});
/*End of glightbox*/




/*isotope_in_homepage*/
$(".isotope-container1").isotope({
  itemSelector:".isotope-item",
  layoutMode:"fitRows",
});
var classes=document.querySelectorAll('.isotope-category');
  classes.forEach(function(a){
    a.addEventListener("click",function(){
      classes.forEach(function(c){
        c.classList.remove("isotope-active");
      });
      this.classList.add("isotope-active");
      $(".isotope-container1").isotope({
        filter:this.getAttribute("mh-filter"),
      });
    });
  });
/*end of isotope_in_homepage*/
/*back-to-top*/
function back_to_top(){
 var backToTop=document.querySelector(".back-totop");
 if(window.scrollY>100){
    backToTop.classList.add("back-totop-active");
 }else{
   backToTop.classList.remove("back-totop-active");
 }
}
window.addEventListener("load",back_to_top);
window.addEventListener("scroll",back_to_top);
/*****/


/*Tooltip*/
new bootstrap.Tooltip(document.querySelector(".tooltip1"),{
 selector:'[data-bs-toggle="tooltip"]',
});
/*****/
/*aos*/
window.addEventListener("load",function(){
AOS.init({
  duration:1000,
  easing:"ease-in-out",
  once:true,
  mirror:false
})
});
/******/
/*preloader*/
$(window).on("load",function(){
   $(".preloader_contents").hide(100);
   $(".preloader").animate({width:'0px'});
});