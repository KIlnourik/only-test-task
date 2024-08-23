import { periodBlockAnimate } from './period-animation';
import { periodTitleAnimate } from './period-title-animation';

function initAnimations(block: HTMLDivElement): void {
  periodBlockAnimate(block);
  periodTitleAnimate(block);
}

export { initAnimations };
