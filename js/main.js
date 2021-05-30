$(document).ready(function(){
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
  });
  const reviewsSlider = new Swiper('.reviews-container', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });
  
  var menuButton = $(".menu-button");
  menuButton.on("click", function()
  {
    document
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal)

    function openModal(){
      var modalOverlay=$(".modal__overlay");
      var modalDialog=$(".modal__dialog");
      modalOverlay.addClass('modal__overlay--visible');
      modalDialog.addClass('modal__dialog--visible');
    }
    function closeModal(event){
      event.preventDefault();
      var modalOverlay=$(".modal__overlay");
      var modalDialog=$(".modal__dialog");
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
    //обработка форм
    $('.form').each(function(){
    $(this).validate({
      errorClass:"invalid",
      messages: {
        name: {
          required: "Укажите имя",
          minlength:"Имя должно быть не короче двух символов"
      },
        email: {
          required: "Email обязателен",
          email: "Email должен быть следующего формата: name@domain.com"
        },
        phone:{
          required: "Телефон обязателен",
        },
      },
    });
  });
  //Код jQuery, установливающий маску для ввода телефона элементу input
$(function(){
  $('[data-mask=phone]').mask("+7(999) 999-99-99");
});
  AOS.init();
  });

