import Swiper from 'swiper';

const swiper = new Swiper('.m-list-logos', {
  loop: true,
  slidesPerView: 10,
  spaceBetween: 48,
  autoplay: {
    delay: 1000
  }
});