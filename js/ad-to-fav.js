import {
  resultsList
} from './dom-elements.js';

export const arrayIds = localStorage.getItem('fav-ids') ? JSON.parse(localStorage.getItem('fav-ids')) : [];
// console.log(arrayIds)


export const addToFav = () => {
  resultsList.addEventListener('click', (evt) => {
    const button = evt.target.closest('button.product__favourite');
    if (button) {
      const id = button.dataset.id;
      const index = arrayIds.indexOf(id);
      index > -1 ? arrayIds.splice(index, 1) : arrayIds.push(id);
      localStorage.setItem('fav-ids', JSON.stringify(arrayIds));
      button.classList.toggle('fav-add--checked');
    }
  });
};
