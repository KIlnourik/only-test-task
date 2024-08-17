const revolver: HTMLDivElement = document.querySelector('.revolver');
const bullets: NodeListOf<HTMLElement> = revolver.querySelectorAll('.revolver__bullet');
const bulletsLength: number = bullets.length;
const arc: number = 2 * Math.PI * (1 / bulletsLength);
const RADIUS: number = 50;

function setCirclePosition(): void {
  for (let i = 0; i < bulletsLength; i++) {
    const angle = i * arc;
    const x = RADIUS * Math.cos(angle);
    const y = RADIUS * Math.sin(angle);

    bullets[i].style.left = 49.5 + x + '%';
    bullets[i].style.top = 49.5 + y + '%';
  }
}

setCirclePosition();
