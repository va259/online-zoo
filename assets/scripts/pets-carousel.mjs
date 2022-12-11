import { petCardsList } from "../data/pets-list.mjs";

const carouselPagination = document.querySelector('.pagination');
const carouselArrowLeft = document.querySelector('.arrow__left');
const carouselArrowRight = document.querySelector('.arrow__right');
const carouselInner = document.querySelector('.carousel');

const carouselInnerWidth = carouselInner.offsetWidth;
let carouselCurrentPosition = 0;

export const petsCarouselInit = () => {
  loadPetCards(petCardsList);
  carouselPagination.addEventListener('click', carouselHandler);
}

const renderSlide = (cards) => {
  const slide = document.createElement('div')
  slide.classList.add('carousel__slide')

  cards.reduce((_, card) => {
    slide.innerHTML += `
      <div class="animal_card ${card.img}">
        <div class="animal_info__container">
          <div class="animal_info">
              <h4>${card.name}</h4>
              <p>${card.origin}</p>
          </div>
          <div class="feed_icon ${card.feed}"></div>
        </div>
      </div>
    `
  }, 0)
  return slide;
}

const shuffle = array => {
  return array.reduce((_, __, i, ar) => {
    const rnd = Math.floor(Math.random() * i);
    [ar[i], ar[rnd]] = [ar[rnd], ar[i]];
    return ar;
  })
}

const delay = time => {
  return new Promise(resolve => setTimeout(resolve, time));
}

const generateNextSlide = cards => {
  const nextSlide = renderSlide(shuffle(cards));
  nextSlide.style.left = `${-1 * carouselCurrentPosition}px`;
  return nextSlide;
}

const carouselHandler = event => {
  const targetArrowLeft = event.target.closest('.arrow__left');
  const targetArrowRight = event.target.closest('.arrow__right');

  if (!targetArrowLeft === carouselArrowLeft) return;
  if (!targetArrowRight === carouselArrowRight) return;

  if (targetArrowLeft) {
    carouselCurrentPosition += carouselInnerWidth;
    carouselInner.style.transform = `translateX(${carouselCurrentPosition}px)`;
    carouselInner.prepend(generateNextSlide(petCardsList));
    toggleVisibilityArrows();
    delay(500).then(() => carouselInner.lastElementChild.remove());
  } else if (targetArrowRight) {
    carouselCurrentPosition -= carouselInnerWidth;
    carouselInner.style.transform = `translateX(${carouselCurrentPosition}px)`;
    carouselInner.append(generateNextSlide(petCardsList));
    toggleVisibilityArrows();
    delay(500).then(() => carouselInner.firstElementChild.remove());
  };
}

const toggleVisibilityArrows = () => {
  carouselPagination.removeEventListener('click', carouselHandler);
  delay(500).then(() => {
    carouselPagination.addEventListener('click', carouselHandler);
  });
}

const loadPetCards = cards => {
  carouselInner.appendChild(renderSlide(shuffle(cards)));
}
