import {resultsList, popup} from './dom-elements.js';

const popupClose = popup.querySelector('.popup__close');
const popupInner = popup.querySelector('.popup__inner');

const openPopup = () => popup.style.display = 'block';
const closePopup = () => popup.style.display = '';


export const makeModal = () => {
  resultsList.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.closest('.product__image > img') || evt.target.closest('.product__title > a')) {
      openPopup();
    }
    // popupInner.addEventListener('click', (evtp) => console.log(evtp.target, popupInner))
    // popup.addEventListener('click', (evtp) => console.log(evtp.target, popup))
  });

  popup.addEventListener('click', (evt) => {
    if (!evt.target.closest('.popup__inner')) {
      closePopup();
    }
  });

  popupClose.addEventListener('click', () => closePopup());
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      closePopup();
    }
  });
};
