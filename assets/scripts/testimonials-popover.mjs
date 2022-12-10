const body = document.querySelector('body');
const section = document.querySelector('.five');
const main = document.querySelector('main');

const addPopoverElement = card => {
  const popover = body.appendChild(document.createElement('div'));
  popover.classList.add('popover')

  const cardInner = card.firstElementChild;
  const user = cardInner.firstElementChild;
  const userPicClass = cardInner.firstElementChild.firstElementChild.className;
  const userName = cardInner.firstElementChild.lastElementChild.firstElementChild.textContent;
  const userLocal = cardInner.firstElementChild.lastElementChild.lastElementChild.textContent;
  const reviewBody = cardInner.lastElementChild.textContent;

  popover.innerHTML += `
    <div class="close"></div>
    <div class="card_inner">
    <div class="user">
        <div class="${userPicClass}"></div>
        <div class="user_info">
            <div class="name">${userName}</div>
            <div class="local">${userLocal}</div>
        </div>
    </div>
    <p>${reviewBody}</p>
    </div>
  `
}

const removePopoverElement = () => {
  const popover = document.querySelector('.popover')
  if (popover) popover.remove();
}

const dimHandler = event => {
  console.log('dim target:', event.target);
  if (event.target.classList.contains('dimmed')) {
    body.classList.toggle('dimmed');
    removePopoverElement();
  }

  if (event.target.classList.contains('close')) {
    body.classList.toggle('dimmed');
    removePopoverElement();
  };
}

export const popoverHandler = event => {
  const targetCard = event.target.closest('.card');
  if (!targetCard) return;

  addPopoverElement(targetCard);
  body.classList.toggle('dimmed');

  const overlay = document.querySelector('.dimmed');
  if (overlay) overlay.addEventListener('click', dimHandler);
}
