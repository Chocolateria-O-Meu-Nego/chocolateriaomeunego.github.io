import Swiper, {Autoplay} from 'swiper';
Swiper.use([Autoplay]);

const swiper = new Swiper('.m-list-logos', {
  loop: true,
  freeMode: true,
  slidesPerView: 10,
  spaceBetween: 48,
  autoplay: {
    delay: 1000
  },
});