type activeBulletCoords = {
  left: string;
  top: string
};

function getActiveBulletCoords(): activeBulletCoords {
  const RADIUS: number = 50;
  const ACTIVE_BULLET_ANGLE = 5.238;

  const activeBulletX = RADIUS * Math.cos(ACTIVE_BULLET_ANGLE);
  const activeBulletY = RADIUS * Math.sin(ACTIVE_BULLET_ANGLE);

  return {
    left: `${49.5 + activeBulletX}%`,
    top: `${49.5 + activeBulletY}%`
  };
}

function setCirclePosition(block: HTMLDivElement): void {
  const pagination: HTMLDivElement = block.querySelector('.controls__pagination');
  const bullets: NodeListOf<HTMLElement> = pagination.querySelectorAll('.controls__pagination-item');
  const bulletsLength: number = bullets.length;
  const activeBullet: HTMLElement = block.querySelector('.controls__pagination-item--active');
  const arc: number = 2 * Math.PI * (1 / bulletsLength);
  const RADIUS: number = 50;
  const ACTIVE_BULLET_ANGLE = 5.238;

  const { left, top } = getActiveBulletCoords();

  if (activeBullet !== null) {
    activeBullet.style.left = left;
    activeBullet.style.top = top;
  }

  for (let i = 0; i < bulletsLength; i++) {
    const angle = i * arc;
    const x = RADIUS * Math.cos(angle + ACTIVE_BULLET_ANGLE);
    const y = RADIUS * Math.sin(angle + ACTIVE_BULLET_ANGLE);

    if (!bullets[i].classList.contains('controls__pagination-item--active')) {
      bullets[i].style.left = `${49.5 + x}%`;
      bullets[i].style.top = `${49.5 + y}%`;
    }
  }
}

export { setCirclePosition, getActiveBulletCoords };
