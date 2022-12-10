import { toggleHandler } from '../../assets/scripts/toggle-nav.mjs';
import { petsCarouselInit } from '../../assets/scripts/pets-carousel.mjs';
import { testimonialsCarouselInit } from '../../assets/scripts/testimonials-carousel.mjs';
import { popoverHandler } from '../../assets/scripts/testimonials-popover.mjs';

const toggleNav = document.querySelector('.toggleNav');
const testimonials = document.querySelector('.testimonials');

const init = () => {
  toggleNav.addEventListener('click', toggleHandler);
  if (window.innerWidth < 1000) testimonials.addEventListener('click', popoverHandler);
  petsCarouselInit();
  testimonialsCarouselInit();
}

document.addEventListener('DOMContentLoaded', init);
