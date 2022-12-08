const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const toggleNav = document.querySelector('.toggleNav');

const init = () => {
  toggleNav.addEventListener('click', toggleHandler);
  // alert(`Hi there! Please check back at the latest you can. Sorry, I'm a bit behind with the tasks, but doing my best. Thank you!`)
}

const toggleHandler = event => {
  nav.firstElementChild.classList.toggle('toggled');
  const menuElements = Array.from(nav.firstElementChild.children);
  menuElements.reduce((acc, el) => {
    el.classList.toggle('toggled_item');
  }, 1);

  toggleNav.classList.toggle('toggle_nav__toggled');
  body.classList.toggle('dimmed');

  const overlay = document.querySelector('.dimmed');
  if (overlay) overlay.addEventListener('click', brightenHandler);
}

const brightenHandler = event => {
  if (event.target.classList.contains('dimmed')) toggleHandler();
}

document.addEventListener('DOMContentLoaded', init);
