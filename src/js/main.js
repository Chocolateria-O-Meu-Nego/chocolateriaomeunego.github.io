import swiper from './modules/swiper';

window.addEventListener('load', () => {
  if(!!document.querySelector('.m-list.-logos')) {
    const $sliderLogos = document.querySelectorAll('.m-list.-logos');

    $sliderLogos.forEach(item => {
      swiper.init(item, {
        loop: true,
        freeMode: true,
        slidesPerView: 10,
        spaceBetween: 48,
        autoplay: {
          delay: 1000
        },
      });
    });
  }


  if(!!document.querySelector('.m-list.-products')) {
    const $swiperProducts = document.querySelectorAll('.m-list.-products');

    $swiperProducts.forEach(item => {
      swiper.init(item, {
        slidesPerView: 'auto',
        spaceBetween: 32,
        autoplay: {
          delay: 1000
        },
      });
    });
  }

  if(!!document.querySelector('.m-list.-highlights')) {
    const $swiperHighlights = document.querySelectorAll('.m-list.-highlights');
    
    $swiperHighlights.forEach(item => {
      swiper.destroyOnBreakpoint('1280px', item, {
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: true
      });
    });
  }
});