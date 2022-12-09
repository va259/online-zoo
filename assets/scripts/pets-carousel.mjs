const carouselPagination = document.querySelector('.pagination');
const carouselArrowLeft = document.querySelector('.arrow__left');
const carouselArrowRight = document.querySelector('.arrow__right');
const carouselInner = document.querySelector('.carousel__inner');
const initialSlide = document.querySelector('.carousel__slide');
console.log('initialSlid:', initialSlide);
const slideLeft = document.querySelector('.slide__left');
const slideRight = document.querySelector('.slide__right');

const slide = document.querySelector('.carousel__slide');
const slideElements = document.querySelector('.carousel__slide').children;
console.log(slideElements);
const cardNodes = document.querySelectorAll('animal_card');

const petCards = [  'card_1', 'card_2', 'card_3',
                    'card_4', 'card_5', 'card_6' ]

const carouselInnerWidth = carouselInner.offsetWidth;
let carouselCurrentPosition = 0;
let emptySlide = {};

export const carouselInit = () => {
  emptySlide = initialSlide.cloneNode(true);
  console.log('emptySlide:', emptySlide);
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

const generateNextSlide = () => {
  const nextSlide = emptySlide.cloneNode(true);
  // nextSlide.classList.add(`slide__${slideNumber}`)
  // console.log('nextSlide:', nextSlide);
  const slideCards = Array.from(nextSlide.children);
  const shuffled = shuffle(petCards);
  slideCards.reduce((_, el, i) => el.classList.add(shuffled[i]), 0);
  return nextSlide;
}

const carouselHandler = event => {
  const targetArrowLeft = event.target.closest('.arrow__left');
  const targetArrowRight = event.target.closest('.arrow__right');

  if (!targetArrowLeft === carouselArrowLeft) return;
  if (!targetArrowRight === carouselArrowRight) return;

  if (targetArrowLeft) {
    // initialSlide.classList.add('.move_left');
    // carouselInner.after(generateNextSlide());
    carouselCurrentPosition += carouselInnerWidth;
    carouselInner.style.transform = `translateX(${carouselCurrentPosition}px)`;
    carouselCurrentPosition -= carouselInnerWidth;
    slideRight.classList.remove('slide__right');
  } else if (targetArrowRight) {
    // initialSlide.classList.add('.move_right');
    // carouselInner.insertBefore(generateNextSlide(), slide);
    carouselCurrentPosition -= carouselInnerWidth;
    carouselInner.style.transform = `translateX(${carouselCurrentPosition}px)`;
    carouselCurrentPosition += carouselInnerWidth;
    slideLeft.classList.remove('slide__left');
  };
}

const loadPetCards = cards => {
  const shuffled = shuffle(petCards);
  cards.reduce((_, el, i) => el.classList.add(shuffled[i]), 0);
}
