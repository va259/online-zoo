const amountRadios = document.querySelectorAll('input[type="radio"]');
const anotherAmount = document.querySelector('input[type="number"]');

const radioInputHandler = event => {
  const value = event.target.value;
  anotherAmount.placeholder = value;
}

const numberInputHandler = event => {
  const value = event.target.value;
  const donations = [5000, 2000, 1000, 500, 250, 100, 50, 25];
  if (donations.includes(+value)) {
    [...amountRadios].reduce((_, radio) => {
      if (+radio.value === +value) radio.checked = true;
    }, 0)
  }
}

export const donateAmountInit = () => {
  anotherAmount.placeholder = 100;

  [...amountRadios].reduce((_, radio) => {
    radio.addEventListener('change', radioInputHandler);
  }, 0)

  anotherAmount.addEventListener('input', numberInputHandler);
}
