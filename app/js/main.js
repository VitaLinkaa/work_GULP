$(document).ready(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arr-left.svg" alt="arrow">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arr-right.svg" alt="arrow">',
    asNavFor: '.slider__dots'
  });
  // основной слайдер

  $('.slider__dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider'
  });
  // склеиваем 2 слайдера

});