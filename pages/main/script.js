const header = document.querySelector('header');
const main = document.querySelector('main');
const one = document.querySelector('.one');

const init = () => {
  const toggleNav = document.querySelector('.toggleNav');
  toggleNav.addEventListener('click', toggleHandler);
  alert(`Hi there! Please check back at the latest you can. Sorry, I'm a bit behind with the tasks, but trying to do my best.`)
}

const toggleHandler = event => {
  console.log('event.target: ', event.target)
  const popup = one.appendChild(document.createElement('div'));
  popup.textContent = 'This is going to be a modal window';
  popup.classList.add('popup');
}

document.addEventListener('DOMContentLoaded', init);
