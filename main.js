var mySwiper = new Swiper('.swiper-container', {

   navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },

   pagination:{
    el: '.swiper-pagination',
    type: 'bullets',
   },

   autoplay:{
    delay:4000,
   },
});

var mySwiper2 = new Swiper('.swiper-container2', {   
   
   pagination:{
      el: '.swiper-pagination',
      type: 'bullets',
   },

   autoplay:{
    delay:6000,
   },

});
var mySwiper3 = new Swiper('.swiper-container3', { 

   pagination:{
    el: '.swiper-pagination',
    type: 'bullets',
   },

   autoplay:{
    delay:3000,
   },
});
// $('.main_menu').on('mouseover', function(){
//    $('.sub_menu').show();
// });

// $('.main_menu').on('mouseout', function(){
//    $('.sub_menu').hide();
// });

$('.main-menu').mouseenter(function(){
  $('nav').addClass('main-menu-acitve');
});