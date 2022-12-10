const range = document.querySelector('input[type="range"]');
const cardsWrapper = document.querySelector('.testimonials__inner');
const card = document.querySelector('.testimonials .card');

const cardWidth = card.offsetWidth;
const containerGap = card.nextElementSibling.offsetLeft - cardWidth;

const carouselHandler = event => {
  const value = range.value;
  console.log(value);
  const length = cardWidth + containerGap;
  cardsWrapper.style.transform = `translateX(-${value * length}px)`;
}

export const testimonialsCarouselInit = () => {
  range.addEventListener('input', carouselHandler);
}
