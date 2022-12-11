const body = document.querySelector('body');
const nav = document.querySelector('nav');
const toggleNav = document.querySelector('.toggleNav');

export const toggleHandler = event => {
  nav.firstElementChild.classList.toggle('toggled');
  const menuElements = [...nav.firstElementChild.children];

  menuElements.reduce((_, el) => {
    el.classList.toggle('toggled_item');
  }, 1);

  toggleNav.classList.toggle('toggle_nav__toggled');
  body.classList.toggle('dimmed');

  const dimHandler = event => {
    if (event.target.classList.contains('dimmed')) toggleHandler();
  }

  const overlay = document.querySelector('.dimmed');
  if (overlay) overlay.addEventListener('click', dimHandler);
}
