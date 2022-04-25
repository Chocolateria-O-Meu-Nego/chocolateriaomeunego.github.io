import Swiper, {Autoplay} from 'swiper';
Swiper.use([Autoplay]);

const swiper = (el, config) => {  
  new Swiper(el, config);
};

export default swiper;