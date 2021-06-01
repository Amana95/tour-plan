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
  
  //Добавление или удаление класса при клике по кнопке
  var menuButton = $(".menu-button");
  menuButton.on("click", function()
  {
    document
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    $("body").toggleClass("blocked-body")

  });

//добавление скролла
  $('.navbar-bottom--visible').scroll(function() {
 $('#log').append('<div>Handler for .scroll() called.</div>');
});




  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal)

    function openModal(){
      var modalOverlay=$(".modal__overlay");
      var modalDialog=$(".modal__dialog");
      var bode=$(body);
      modalOverlay.addClass('modal__overlay--visible');
      modalDialog.addClass('modal__dialog--visible');
      bode.addClass('blocked-body');

    }
    function closeModal(event){
      event.preventDefault();
      var modalOverlay=$(".modal__overlay");
      var modalDialog=$(".modal__dialog");
      var bode=$(body);
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
      bode.removeClass('blocked-body');
    }
    //обработка форм
    $('.form').each(function(){
    $(this).validate({
      errorClass:"invalid",
      messages: {
        name: {
          required: "Please enter your name",
          minlength:"The name must be at least two characters"
      },
        email: {
          required: "Email is required",
          email: "Email should be in the following format: name@domain.com"
        },
        phone:{
          required: "Phone is required",
        },
      },
    });
  });

   //обработка форм
   $('.newsletter__subscribe').validate({
      errorClass:"invalid-2",
      messages: {
        email: {
          required: "Email is required",
          email: "Email should be in the following format: name@domain.com"
        },
      },
    });

  //Код jQuery, установливающий маску для ввода телефона элементу input

  $('[data-mask=phone]').mask("+7(999) 999-99-99");
  
  AOS.init();



//Блокировка скролла
var body = document.body,
    overlay = document.querySelector('.overlay'),
    overlayBtts = document.querySelectorAll('button[class$="overlay"]');

[].forEach.call(overlayBtts, function(btt) {

  btt.addEventListener('click', function() { 

     /* Detect the button class name */
     var overlayOpen = this.className === 'open-overlay';

     /* Toggle the aria-hidden state on the overlay and the 
        no-scroll class on the body */
     overlay.setAttribute('aria-hidden', !overlayOpen);
     body.classList.toggle('noscroll', overlayOpen);

     /* On some mobile browser when the overlay was previously
        opened and scrolled, if you open it again it doesn't 
        reset its scrollTop property */
     overlay.scrollTop = 0;

  }, false);

});

//Скрытие скролла
  
  });

