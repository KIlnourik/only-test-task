import { gsap } from 'gsap';

function animateBullets(slides: number, index: number = 0): void {
  const paginationBlock = document.querySelector('.controls__pagination');
  const bullets = paginationBlock.querySelectorAll('.controls__pagination-item span')
  const angle = 360 - ((360 / slides) * index);

  if (document.documentElement.clientWidth >= 1024) {
    gsap.to(
      paginationBlock,
      {
        rotate: angle,
        duration: 0.5,
        delay: 0.02
      },
    );

    bullets.forEach(bullet => {
      gsap.to(bullet,
        {
          rotate: -angle,
          duration: 0,
          delay: 0,
        }
      )
    })
  }
};


export { animateBullets };
