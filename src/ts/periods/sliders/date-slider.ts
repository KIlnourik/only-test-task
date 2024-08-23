import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';

function initDateSlider(): void {
  const period: HTMLElement = document.querySelector('.period--active');
  const slider: HTMLElement = period.querySelector('.period__swiper');

  const swiperOptions: SwiperOptions = {
    init: false,
    direction: 'horizontal',
    breakpoints: {
      320: {
        slidesPerView: 1,
        width: 166,
        spaceBetween: 25,
      },
      1024: {
        width: 320,
        spaceBetween: 80,
      }
    },
    modules: [Navigation],
    navigation: {
      nextEl: '.period__nav-btn--next',
      prevEl: '.period__nav-btn--prev',
    },
    nested: true,
    initialSlide: 0,
    grabCursor: true,
    observer: true,
    observeParents: true,
    centeredSlides: true,
  };

  const swiper: Swiper = new Swiper(slider, swiperOptions);

  swiper.on('beforeInit', () => swiper.slideTo(0));
  swiper.init();
}

export { initDateSlider };
