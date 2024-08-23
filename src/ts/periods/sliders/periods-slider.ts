import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import { initDateSlider } from './date-slider';
import { setCirclePosition } from '../pagination';
import { initAnimations } from '../aninmations';
import { initCurrentPeriodAnimation } from '../aninmations/current-period-animation';
import { animateBullets } from '../aninmations/pagination-animation';

function initPeriodsSlider(block: HTMLDivElement): void {
  const periodsSlider: HTMLDivElement = block.querySelector('.periods__slider');
  const nextSliderBtn: HTMLElement = block.querySelector('.controls__nav-btn--next');
  const prevSliderBtn: HTMLElement = block.querySelector('.controls__nav-btn--prev');
  const sliderPagination: HTMLElement = block.querySelector('.controls__pagination');


  const periodsSwiperOptions: SwiperOptions = {
    init: false,
    modules: [
      Navigation,
      Pagination,
      EffectCreative
    ],
    navigation: {
      nextEl: nextSliderBtn,
      prevEl: prevSliderBtn,
    },
    pagination: {
      el: sliderPagination,
      type: 'bullets',
      clickable: true,
      bulletClass: 'controls__pagination-item',
      bulletActiveClass: 'controls__pagination-item--active',
      renderBullet: function (index, className) {
        return `<span class=${className}><span>${index + 1}</span></span>`;
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

  const periodsSwiper: Swiper = new Swiper(periodsSlider, periodsSwiperOptions);

  function setActivePeriod(): void {
    const periods: NodeListOf<HTMLElement> = block.querySelectorAll('.period');

    for (let i = 0; i < periods.length; i++) {
      if (periodsSwiper.activeIndex === i) {
        periods[i].classList.add('period--active');
        periods[i].style.height = '100%';
        periods[i].style.zIndex = '100';
        initDateSlider(block);
      } else {
        periods[i].classList.remove('period--active');
        periods[i].style.height = '0';
      }
    }
  }

  function showSlidePages(): void {
    const currentSlide: HTMLElement = block.querySelector('.controls__current');
    const totalSlides: HTMLElement = block.querySelector('.controls__total');
    totalSlides.textContent = `0${periodsSwiper.slides.length}`;

    const currentSlideIndex = ++periodsSwiper.realIndex;
    currentSlide.textContent = `0${currentSlideIndex}`;
  }

  periodsSwiper.on('init', () => {
    setActivePeriod();
    initAnimations(block);
    initCurrentPeriodAnimation(block);
    showSlidePages();
    setCirclePosition(block);
  });

  periodsSwiper.on('slideChange', () => {
    setActivePeriod();
    initAnimations(block);
    animateBullets(block, periodsSwiper.slides.length, periodsSwiper.activeIndex);
    showSlidePages();
  });

  periodsSwiper.init();
}

export { initPeriodsSlider };
