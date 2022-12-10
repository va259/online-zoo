import { toggleHandler } from '../../assets/scripts/toggle-nav.mjs';
import { donateAmountInit } from '../../assets/scripts/amount-panel.mjs'

const toggleNav = document.querySelector('.toggleNav');

const init = () => {
  toggleNav.addEventListener('click', toggleHandler);
  donateAmountInit();
}

document.addEventListener('DOMContentLoaded', init);
