import { gsap } from 'gsap';

function currentPeriodAnimate(oldText: string, item: string): void {
  gsap.from(item,
    {
      textContent: oldText,
      duration: 0.5,
      ease: 'power1.easeIn',
      snap: { textContent: 1 },
      stagger: 1,
      delay: 0.02
    })
};

function initCurrentPeriodAnimation() {
  let oldFrom: string = document.querySelector('.swiper-slide-active .period__from').textContent;
  let oldTo: string = document.querySelector('.swiper-slide-active .period__to').textContent;

  const prevBtn = document.querySelector('.controls__nav-btn--prev');
  const nextBtn = document.querySelector('.controls__nav-btn--next');

  function animate() {
    currentPeriodAnimate(oldFrom, '.swiper-slide-active .period__from');
    currentPeriodAnimate(oldTo, '.swiper-slide-active .period__to');
  };

  nextBtn.addEventListener('click', animate);
  prevBtn.addEventListener('click', animate);
}

export { currentPeriodAnimate, initCurrentPeriodAnimation };
