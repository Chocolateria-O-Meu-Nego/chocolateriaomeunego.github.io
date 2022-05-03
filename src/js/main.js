import Swiper, {Autoplay} from 'swiper';
Swiper.use([Autoplay]);

window.addEventListener('load', () => {
  if(!!document.querySelector('.m-list.-logos')) {
    const $sliderLogos = document.querySelectorAll('.m-list.-logos');

    $sliderLogos.forEach(item => {
      const slider = new Swiper(item, {
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
      const slider = new Swiper(item, {
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
    const highlightsConfig = {
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: true
    };

    $swiperHighlights.forEach(item => {
      const slider = new Swiper(item, highlightsConfig);
      
      window.addEventListener('resize', () => {
        if (window.innerWidth > 1280) {
          return slider.detroy();
        }

        return slider.init();
      });
    });

  }
});