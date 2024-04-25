var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop:true,
  });


  var menu = document.querySelector(".ri-equal-line");
  var close = document.querySelector(".ri-close-fill");
  var nav = document.querySelector(".respo-nav");

  menu.addEventListener("click", function(){
    nav.style.top = "0%";
  })
  
  close.addEventListener("click", function(){
    nav.style.top = "-120%";
  })

  var store = document.querySelector("#store");
  var submenu = document.querySelector(".submenu");
  var submenu2 = document.querySelector(".submenu2");
  var submenu3 = document.querySelector(".submenu3");
  var mac = document.querySelector("#mac");
  var ipad = document.querySelector("#ipad");
  var iphone = document.querySelector("#iphone");
 
  
  store.addEventListener("mousemove", function(){
    submenu.style.top = "4%";
  })

  
  mac.addEventListener("mousemove", function(){
    
    submenu.style.display ="none";
    submenu2.style.top = "4%";
  })
  ipad.addEventListener("mousemove", function(){
    
    submenu2.style.display ="none";
    submenu3.style.top = "4%";
  })
 
  
  

 



 
 
  
  
  