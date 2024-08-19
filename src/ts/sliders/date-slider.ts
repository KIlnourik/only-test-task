import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';

const period: HTMLElement = document.querySelector('.period--active');
const slider: HTMLUListElement = period.querySelector('.swiper');
const prevBtn: HTMLButtonElement = period.querySelector('.period__nav-btn--prev');
const nextBtn: HTMLButtonElement = period.querySelector('.period__nav-btn--next');

const swiperOptions: SwiperOptions = {
  init: false,
  direction: 'horizontal',
  breakpoints: {
    320: {
      slidesPerView: 1,
      width: 166,
      spaceBetween: 25
    },
    1024: {
      width: 320,
      spaceBetween: 80
    }
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.period__nav-btn--next',
    prevEl: '.period__nav-btn--prev',
  },
}

function hideControls() {
  const isBeginning = swiper.isBeginning;
  const isEnd = swiper.isEnd;

  (isBeginning) ? prevBtn.style.display = 'none' : prevBtn.style.display = 'flex';
  (isEnd) ? nextBtn.style.display = 'none' : nextBtn.style.display = 'flex';
}

const swiper: Swiper = new Swiper(slider, swiperOptions);

swiper.on('init', () => prevBtn.style.display = 'none');
swiper.init();


swiper.on('slideChange', hideControls);
