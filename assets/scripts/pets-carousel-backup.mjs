const carouselPagination = document.querySelector('.pagination');
const carouselArrowLeft = document.querySelector('.arrow__left');
const carouselArrowRight = document.querySelector('.arrow__right');
const carouselInner = document.querySelector('.carousel');
const initialSlide = document.querySelector('.carousel__slide');

const carouselInnerWidth = initialSlide.offsetWidth;
let emptySlide = {};
let carouselCurrentPosition = 0;

const petCards = [  'card_1', 'card_2', 'card_3',
                    'card_4', 'card_5', 'card_6' ]

export const petsCarouselInit = () => {
  emptySlide = initialSlide.cloneNode(true);
  loadPetCards(Array.from(initialSlide.children));
  carouselPagination.addEventListener('click', carouselHandler);
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

const generateNextSlide = () => {
  const nextSlide = emptySlide.cloneNode(true);
  const slideCards = Array.from(nextSlide.children);
  const shuffled = shuffle(petCards);
  slideCards.reduce((_, el, i) => el.classList.add(shuffled[i]), 0);
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
    carouselInner.prepend(generateNextSlide());
    toggleVisibilityArrows();
    delay(500).then(() => carouselInner.lastElementChild.remove());
  } else if (targetArrowRight) {
    carouselCurrentPosition -= carouselInnerWidth;
    carouselInner.style.transform = `translateX(${carouselCurrentPosition}px)`;
    carouselInner.append(generateNextSlide());
    toggleVisibilityArrows();
    delay(500).then(() => carouselInner.firstElementChild.remove());
  };
}

const toggleVisibilityArrows = () => {
  carouselArrowLeft.style.display = 'none';
  carouselArrowRight.style.display = 'none';
  delay(500).then(() => {
    carouselArrowLeft.style.display = '';
    carouselArrowRight.style.display = '';
  });
}

const loadPetCards = cards => {
  const shuffled = shuffle(petCards);
  cards.reduce((_, el, i) => el.classList.add(shuffled[i]), 0);
}
