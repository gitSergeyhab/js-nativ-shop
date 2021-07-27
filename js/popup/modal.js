import {resultsList} from '../dom-elements.js';
import {createModal} from './create-modal.js';
import {getData} from '../api.js';
import {addMap} from '../map.js';
import {showPopupSlider} from '../image-sliders/popup-slider.js';

const openPopup = (id) => {
  getData()
    .then((res) => res.find((elem) => elem['publish-date'] === id)) // поиск по дате публикации тыкнутого объявления
    .then((res) => {
      const popupCardText = createModal(res);
      const popupCardElement = document.createElement('section');
      popupCardElement.classList.add('popup');
      popupCardElement.style.display = 'block';
      popupCardElement.innerHTML = popupCardText;

      const popupCloseBtn = popupCardElement.querySelector('.popup__close');

      // обработчики закрытия попапа
      const onCloseBtnClick = () => closePopup();
      const onOutsidePopupClick = (evt) => {
        if (!evt.target.closest('.popup__inner')) {closePopup();}
      };
      const onEscPress = (evt) => {
        if (evt.keyCode === 27) {closePopup();}
      };

      // удаления обработчиков закрытия
      document.addEventListener('keydown', onEscPress);
      popupCardElement.addEventListener('click', onOutsidePopupClick);
      popupCloseBtn.addEventListener('click', onCloseBtnClick);

      function closePopup () {
        popupCardElement.remove();

        popupCloseBtn.removeEventListener('click', onCloseBtnClick);
        popupCardElement.removeEventListener('click', onOutsidePopupClick);
        document.removeEventListener('keydown', onEscPress);
      }

      document.body.append(popupCardElement);

      showPopupSlider();

      addMap(res);
    });
};

export const makeModal = () => {
  resultsList.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (
      evt.target.closest('.product__image > img') || // попап при тыке на картинку
      evt.target.closest('.product__title > a') || // ... на название
      evt.target.closest('.product__image-more-photo') // .. на идиотскую запись, что фоток на Х польше 5
    ) {
      const cardLi = evt.target.closest('.results__item')  || evt.target.classList.contains('product__image-more-photo');
      cardLi ? openPopup(cardLi.dataset.id) : null;
    }
  });
};
