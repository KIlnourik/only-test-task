function setCirclePosition(): void {
  const pagination: HTMLDivElement = document.querySelector('.controls__pagination');
  const bullets: NodeListOf<HTMLElement> = pagination.querySelectorAll('.controls__pagination-item');
  const bulletsLength: number = bullets.length;
  const activeBullet: HTMLElement = document.querySelector('.controls__pagination-item--active');
  const arc: number = 2 * Math.PI * (1 / bulletsLength);
  const RADIUS: number = 50;
  const ACTIVE_BULLET_ANGLE = 5.236;

  const activeBulletX = RADIUS * Math.cos(ACTIVE_BULLET_ANGLE);
  const activeBulletY = RADIUS * Math.sin(ACTIVE_BULLET_ANGLE);

  activeBullet.style.left = 49.5 + activeBulletX + '%';
  activeBullet.style.top = 49.5 + activeBulletY + '%';


  for (let i = 0; i < bulletsLength; i++) {
    const angle = i * arc;
    const x = RADIUS * Math.cos(angle + ACTIVE_BULLET_ANGLE);
    const y = RADIUS * Math.sin(angle + ACTIVE_BULLET_ANGLE);

    if (!bullets[i].classList.contains('controls__pagination-item--acitve')) {
      bullets[i].style.left = 49.5 + x + '%';
      bullets[i].style.top = 49.5 + y  + '%';
    }

  }
};

export { setCirclePosition };
