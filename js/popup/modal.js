import {resultsList /*, popup*/} from '../dom-elements.js';
import {createModal} from './create-modal.js';
import {getData} from '../api.js';
import {addMap} from '../map.js';


const getNotFoundMessage = () => console.log('Not Element') // ПРМДУМАТЬ СООБЩЕНИЕ

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
      addMap(res);
    });
};

export const makeModal = () => {
  resultsList.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.closest('.product__image > img') || evt.target.closest('.product__title > a')) {
      // openPopup();
      const cardLi = evt.target.closest('.results__item');
      cardLi ? openPopup(cardLi.dataset.id) : getNotFoundMessage();
    }
  });
};
