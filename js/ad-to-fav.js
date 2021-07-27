import {resultsList} from './dom-elements.js'

export const arrayIds = localStorage.getItem('fav-ids') ? JSON.parse(localStorage.getItem('fav-ids')) : [];

export const addToFav = (clickElement) => {
  clickElement.addEventListener('click', (evt) => {
    const favFromList = evt.target.closest('button.product__favourite');
    const favFromPopup = evt.target.closest('button.gallery__favourite')
    const button = favFromList || favFromPopup;
    if (button) {
      const id = button.dataset.id;
      const index = arrayIds.indexOf(id);
      index > -1 ?
        arrayIds.splice(index, 1) :
        arrayIds.push(id);
      localStorage.setItem('fav-ids', JSON.stringify(arrayIds));
      button.classList.toggle('fav-add--checked');
      //при нажатии в попапе на кнопку "в избранные - добавить и в листе resultsList"
      if (favFromPopup) {
        const buttonInList = resultsList.querySelector(`button.product__favourite[data-id="${id}"]`);
        buttonInList.classList.toggle('fav-add--checked');
      }
    }
  });
};
