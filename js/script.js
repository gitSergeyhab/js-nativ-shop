// import './filters/filter.js'
import {makeSliderPrices} from './slider-setup.js';
import {createCard} from './create-card.js';
import {getData} from './api.js';
import {addMessage} from './inform-message.js';
import {filterAll} from './filters/filter.js';
import {filterFav} from './filters/filter-fav.js';
import {createFormValuesObj} from './filters/create-form-values-obj.js';
import {resultsList, categoriesSelect, filterForm, submitBtn, sortingFielset} from './dom-elements.js';
import {sort} from './sort.js';
import {resetForm} from './filters/reset-form.js';
import {addToFav} from './ad-to-fav.js';
import {showFav} from './show-fav.js';
import {makeModal} from './popup/modal.js';


const createAllCards = (data) => data.reduce((acc, el) => acc + createCard(el), '');


const getCustomData = (addMessage) => (
  getData(addMessage)
    .then(r => {
      console.log(1, r);
      return r;
    })
    .then((data) => sort(data))
    .then(r => {
      console.log(2, r);
      return r;
    })
    .then((data) => filterAll(data, createFormValuesObj()))

    .then(r => {
      console.log(3, r);
      return r;
    })

    .then((res) => createAllCards(res))
    .then((res) => resultsList.innerHTML = res)
    // .catch(() => addMessage('red', 'ничено не загрузилось =(('))
);

const getFavoriteData = (addMessage) => (
  getData(addMessage)
    .then((data) => filterFav(data))

    // .then(r => {
    //   console.log(r);
    //   return r;
    // })

    .then((res) => createAllCards(res))
    .then((res) => resultsList.innerHTML = res)
  // .catch(() => addMessage('red', 'ничено не загрузилось =(('))
);


getCustomData(addMessage);

// filterForm.addEventListener('change', () => {
//   getCustomData(addMessage);
// });


filterForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
});
// долбанный firefox при   <form ... autocomplete="off"/>   умеет только так:
submitBtn.addEventListener('click', () => getCustomData(addMessage));

categoriesSelect.addEventListener('change', (evt) => {
  resetForm(evt);
  getData().
    then((data) => makeSliderPrices(data, createFormValuesObj()));
});

sortingFielset.addEventListener('change', () => getCustomData(addMessage));

addToFav();

showFav(() => getCustomData(addMessage), () => getFavoriteData(addMessage));

makeModal();
