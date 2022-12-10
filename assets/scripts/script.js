import { toggleHandler } from './toggle-nav.mjs';
import { petsCarouselInit } from './pets-carousel.mjs';
import { testimonialsCarouselInit } from './testimonials-carousel.mjs';

const toggleNav = document.querySelector('.toggleNav');

const init = () => {
  // alert(`Hi there! Please check back at the latest you can. Sorry, I'm a bit behind with the tasks, but trying to do my best. Thank you!`)
  toggleNav.addEventListener('click', toggleHandler);
  petsCarouselInit();
  testimonialsCarouselInit();
}

document.addEventListener('DOMContentLoaded', init);
