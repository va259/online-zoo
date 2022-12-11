import { reviewsList } from '../data/testimonials-list.mjs'

const testimonials = document.querySelector('.testimonials')
const range = document.querySelector('input[type="range"]');

const renderCards = cards => {
  const slide = document.createElement('div')
  slide.classList.add('testimonials__inner')
  
  cards.reduce((_, card) => {
    slide.innerHTML += `
      <div class="card">
        <div class="card_inner">
            <div class="user">
                <div class="user_icon ${card.imgClass}"></div>
                <div class="user_info">
                    <div class="name">${card.name}</div>
                    <div class="local">${card.local}</div>
                </div>
            </div>
            <p>${card.review}</p>
        </div>
      </div>
    `
  }, 0)
  return slide;
}

const carouselHandler = event => {
  const card = document.querySelector('.testimonials .card');
  const cardsWrapper = document.querySelector('.testimonials__inner');
  const cardWidth = card.offsetWidth;
  const containerGap = card.nextElementSibling.offsetLeft - cardWidth;

  const value = range.value;
  const length = cardWidth + containerGap;

  cardsWrapper.style.transform = `translateX(-${value * length}px)`;
}

export const testimonialsCarouselInit = () => {
  testimonials.appendChild(renderCards(reviewsList));
  range.addEventListener('input', carouselHandler);
}
