import Swiper, {Autoplay} from 'swiper';
Swiper.use([Autoplay]);

const swiper = {
   destroyOnBreakpoint(size, el, config) {
    const breakpoint = window.matchMedia(`(min-width: ${size})`);
    let mySwiper;
  
    const breakpointChecker = function() {
       if ( breakpoint.matches === true ) {
          if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
          return;
       } else if ( breakpoint.matches === false ) {
          return enableSwiper();
       }
    };
  
    const enableSwiper = function() {
       mySwiper = new Swiper(el, config);
    };
  
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
  init(el, config) {
   const swiper = new Swiper(el, config);
  }
};

export default swiper;