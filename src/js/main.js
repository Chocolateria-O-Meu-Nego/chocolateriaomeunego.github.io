import swiper from './controllers/swiper';

window.addEventListener('load', () => {
  if(!!document.querySelector('.m-list-logos')) {
    const $sliderLogos = document.querySelectorAll('.m-list-logos');

    $sliderLogos.forEach(item => {
      swiper(item, {
        loop: true,
        freeMode: true,
        slidesPerView: 10,
        spaceBetween: 48,
        autoplay: {
          delay: 1000
        },
      });
    })
  }


  if(!!document.querySelector('.m-list-products')) {
    const $swiperProducts = document.querySelectorAll('.m-list-products');

    $swiperProducts.forEach(item => {
      swiper(item, {
        slidesPerView: 'auto',
        spaceBetween: 32,
        autoplay: {
          delay: 1000
        },
      });
    });
  }
});