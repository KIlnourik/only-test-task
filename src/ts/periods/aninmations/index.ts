import { periodBlockAnimate } from './period-animation';
import { periodTitleAnimate } from './period-title-animation';

function initAnimations(): void {
  periodBlockAnimate();
  periodTitleAnimate();
}

export { initAnimations };
