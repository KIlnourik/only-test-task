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
    });
}

function initCurrentPeriodAnimation() {
  const oldFrom: string = document.querySelector('.swiper-slide-active .period__from').textContent;
  const oldTo: string = document.querySelector('.swiper-slide-active .period__to').textContent;

  const prevBtn: HTMLButtonElement = document.querySelector('.controls__nav-btn--prev');
  const nextBtn: HTMLButtonElement = document.querySelector('.controls__nav-btn--next');
  const bulletBlock: HTMLElement = document.querySelector('.controls__pagination');

  function animate() {
    currentPeriodAnimate(oldFrom, '.swiper-slide-active .period__from');
    currentPeriodAnimate(oldTo, '.swiper-slide-active .period__to');
  }

  bulletBlock.addEventListener('click', (evt) => {
    const target = evt.target as HTMLElement;
    if (target.closest('span')) {
      animate();
    }
  });

  nextBtn.addEventListener('click', animate);
  prevBtn.addEventListener('click', animate);
}

export { currentPeriodAnimate, initCurrentPeriodAnimation };
