$(document).ready(function () {
var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.menu-icon').click(function () {
    var $menuIcon = $(this);
    $('.menu').slideToggle(500);
    if ($menuIcon.hasClass('menu-icon_open')) {
      $menuIcon.removeClass('menu-icon_open');
    } else {
      $menuIcon.addClass('menu-icon_open')
    }   
  });
}); 