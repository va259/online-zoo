import { toggleHandler } from './toggle-nav.mjs';
import { petsCarouselInit } from './pets-carousel.mjs';
import { testimonialsCarouselInit } from './testimonials-carousel.mjs';
import { popoverHandler } from './testimonials-popover.mjs';

const toggleNav = document.querySelector('.toggleNav');
const testimonials = document.querySelector('.testimonials');

const init = () => {
  alert(`Hi there! Please check back at the latest you can. Sorry, I'm a bit behind with the tasks, but trying to do my best. Thank you!`)
  toggleNav.addEventListener('click', toggleHandler);
  if (window.innerWidth < 1000) testimonials.addEventListener('click', popoverHandler);
  petsCarouselInit();
  testimonialsCarouselInit();
}

document.addEventListener('DOMContentLoaded', init);
