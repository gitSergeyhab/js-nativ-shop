import {resultsList} from '../dom-elements.js';

const SPAN_CLASS_ACTIVE = 'product__navigation-item--active';

const cards = resultsList.children;

const onCardMouseEnter = (evt) => startNavigation(evt);
const onCardMouseLeave = (evt) => stopNavigation(evt);

export const showSmallSlider = () => {
  for (const card of cards) {
    card.addEventListener('mouseenter', onCardMouseEnter);
    card.addEventListener('mouseleave', onCardMouseLeave);
  }
};

function startNavigation(evt) {
  const li = evt.target;
  const nav = li.querySelector('.product__image-navigation');
  nav.classList.remove('hidden'); // показать табы

  const navSpans = nav.querySelectorAll('span');
  const liPhotos = li.querySelectorAll('.product__image img');
  const morePhoto = li.querySelector('.product__image-more-photo');

  // переключение фоток по наведениюна разные спаны
  navSpans.forEach((span, i) => {
    span.addEventListener('mouseenter', () => {
      navSpans.forEach((spanI) => spanI.classList.remove(SPAN_CLASS_ACTIVE));
      liPhotos.forEach((photo) => photo.classList.add('hidden'));

      span.classList.add(SPAN_CLASS_ACTIVE);
      liPhotos[i].classList.remove('hidden');

      if (i === 4 && morePhoto.classList.contains('js-more-photo')) {
        morePhoto.classList.remove('hidden');
      } else {
        morePhoto.classList.add('hidden');
      }
    });
  });
}

function stopNavigation(evt) {
  const li = evt.target;
  const nav = li.querySelector('.product__image-navigation');
  nav.classList.add('hidden');

  const morePhoto = li.querySelector('.product__image-more-photo');
  morePhoto.classList.add('hidden');

  const navSpans = nav.querySelectorAll('span');
  navSpans.length ? navSpans[0].parentElement.innerHTML = navSpans[1-1].parentElement.innerHTML : null; // удалить обработчики со всех спанов
}
