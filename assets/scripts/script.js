import { carouselInit } from './pets-carousel.mjs';
import { toggleHandler } from './toggle-nav.mjs';

const toggleNav = document.querySelector('.toggleNav');

const init = () => {
  toggleNav.addEventListener('click', toggleHandler);
  carouselInit();
  // alert(`Hi there! Please check back at the latest you can. Sorry, I'm a bit behind with the tasks, but doing my best. Thank you!`)
}

document.addEventListener('DOMContentLoaded', init);
