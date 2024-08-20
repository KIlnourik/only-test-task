import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { initDateSlider } from './date-slider';
import { setCirclePosition } from '../pagination';

function initPeriodsSlider(): void {
  const periodsSlider: HTMLDivElement = document.querySelector('.periods__slider');

  const periodsSwiperOptions: SwiperOptions = {
    init: false,
    direction: 'horizontal',
    centeredSlides: true,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.controls__nav-btn--next',
      prevEl: '.controls__nav-btn--prev',
    },
    pagination: {
      el: '.controls__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'controls__pagination-item',
      bulletActiveClass: 'controls__pagination-item--active',
      renderBullet: function(index, className) {
        return `<span class=${className}>${index + 1}</span>`;
      }
    },
    slidesPerView: 1,
    breakpoints: {
      320: {
        width: 280,
      },
      1024: {
        width: 864,
      },
      1440: {
        width: 1280,
      }
    },
    allowTouchMove: false,
  };

  function setActivePeriod(): void {
    const periods: NodeListOf<HTMLElement> = document.querySelectorAll('.period');

    for (let i = 0; i < periods.length; i++) {
      if (periodsSwiper.activeIndex === i) {
        periods[i].classList.add('period--active');
        initDateSlider();
      } else {
        periods[i].classList.remove('period--active');
      }
    }
  }

  function showSlidePages(): void {
    const currentSlide: HTMLElement = document.querySelector('.controls__current');
    const totalSlides: HTMLElement = document.querySelector('.controls__total');
    totalSlides.textContent = `0${periodsSwiper.slides.length}`;

    const currentSlideIndex = ++periodsSwiper.realIndex;
    currentSlide.textContent = `0${currentSlideIndex}`;
  };

  const periodsSwiper: Swiper = new Swiper(periodsSlider, periodsSwiperOptions);

  periodsSwiper.on('init', () => {
    initDateSlider();
    showSlidePages();
    setCirclePosition();
  });

  periodsSwiper.on('slideChange', () => {
    setActivePeriod();
    showSlidePages();
  });
  periodsSwiper.init();
}

export { initPeriodsSlider };
