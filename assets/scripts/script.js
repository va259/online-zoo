import { carouselInit } from './pets-carousel.mjs';
import { toggleHandler } from './toggle-nav.mjs';
import { scrollTestimonials } from './testimonials-scroll.mjs';

const toggleNav = document.querySelector('.toggleNav');
const range = document.querySelector('input[type="range"]');

const init = () => {
  alert(`Hi there! Please check back at the latest you can. Sorry, I'm a bit behind with the tasks, but trying to do my best. Thank you!`)
  toggleNav.addEventListener('click', toggleHandler);
  carouselInit();
  range.addEventListener('click', scrollTestimonials);
}

document.addEventListener('DOMContentLoaded', init);
