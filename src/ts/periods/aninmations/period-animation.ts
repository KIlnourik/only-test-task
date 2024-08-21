import { gsap } from 'gsap';

function periodBlockAnimate() {
  if (document.documentElement.clientWidth >= 320 && document.documentElement.clientWidth < 1024) {
    gsap.fromTo('.swiper-slide .period__swiper',
      {
        x: 0,
        y: 30,
        autoAlpha: 0,
      },
      {
        x: 0,
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 0.02,
        ease: "power2.out",
      }
    );
  } else {
    gsap.fromTo('.swiper-slide .period__swiper',
      {
        x: 0,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        zIndex: 100,
        position:'relative',
        duration: 1.5,
        delay: 0.01,
        ease: "power2.out",
      }
    );
  }
};

export { periodBlockAnimate };
