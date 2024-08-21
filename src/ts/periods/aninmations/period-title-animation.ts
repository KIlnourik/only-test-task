import { gsap } from 'gsap';

function periodTitleAnimate() {
  if (document.documentElement.clientWidth >= 320 && document.documentElement.clientWidth < 1024) {
    gsap.fromTo('.swiper-slide .period__title',
      {
        x: 0,
        y: 30,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.01,
        ease: "power2.out",
      }
    );
  } else {
    gsap.fromTo('.swiper-slide .period__title',
      {
        x: 0,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: 0.01,
        ease: "power2.out",
      }
    );
  }
};

export { periodTitleAnimate };
