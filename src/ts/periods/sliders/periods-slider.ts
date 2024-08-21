import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import { initDateSlider } from './date-slider';
import { setCirclePosition } from '../pagination';
import { initAnimations } from '../aninmations';
import { initCurrentPeriodAnimation } from '../aninmations/current-period-animation';

function initPeriodsSlider(): void {
  const periodsSlider: HTMLDivElement = document.querySelector('.periods__slider');

  const periodsSwiperOptions: SwiperOptions = {
    init: false,
    modules: [
      Navigation,
      Pagination,
      EffectCreative
    ],
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
      renderBullet: function (index, className) {
        return `<span class=${className}>${index + 1}</span>`;
      }
    },
    direction: 'horizontal',
    effect: 'creative',
    creativeEffect: {
      next: {
        opacity: 0,
      },
      prev: {
        opacity: 0,
      },
    },
    speed: 0,
    centeredSlides: true,
    slidesPerView: 1,
    allowTouchMove: false,
  };

  function setActivePeriod(): void {
    const periods: NodeListOf<HTMLElement> = document.querySelectorAll('.period');

    for (let i = 0; i < periods.length; i++) {
      if (periodsSwiper.activeIndex === i) {
        periods[i].classList.add('period--active');
        periods[i].style.height = '100%';
        periods[i].style.zIndex = '100';
        initDateSlider();
      } else {
        periods[i].classList.remove('period--active');
        periods[i].style.height = '0';
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

  periodsSwiper.fadeEffect

  periodsSwiper.on('init', () => {
    setActivePeriod();
    initAnimations();
    initCurrentPeriodAnimation();
    showSlidePages();
    setCirclePosition();
  });

  periodsSwiper.on('slideChange', () => {
    setActivePeriod();
    initAnimations();
    showSlidePages();
  });

  periodsSwiper.init();
}

export { initPeriodsSlider };
