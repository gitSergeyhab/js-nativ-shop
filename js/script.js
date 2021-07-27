// import './filters/filter.js'
import {makeSliderPrices} from './slider-setup.js';
import {createCard} from './create-card.js';
import {getData} from './api.js';
import {addMessage} from './inform-message.js';
import {filterAll} from './filters/filter.js';
import {filterFav} from './filters/filter-fav.js';
import {createFormValuesObj} from './filters/create-form-values-obj.js';
import {resultsList, categoriesSelect, filterForm, submitBtn, sortingFieldset} from './dom-elements.js';
import {sort} from './sort.js';
import {resetForm} from './filters/reset-form.js';
import {addToFav} from './ad-to-fav.js';
import {showFav} from './show-fav.js';
import {makeModal} from './popup/modal.js';
import {showSmallSlider} from './image-sliders/small-slider.js';
import {checkEmptyData} from './check-empty-data.js';


const createAllCards = (data) => data.reduce((acc, el) => acc + createCard(el), '');
const optionalDefault = (data) => data;

const getCustomData = (optional = optionalDefault) => (
  getData(addMessage)
    .then(optional)
    .then((data) => sort(data))
    .then((data) => filterAll(data, createFormValuesObj()))
    .then((data) => checkEmptyData(data, 'filter'))
    .then((data) => createAllCards(data))
    .then((data) => resultsList.innerHTML = data)
    .then(() => showSmallSlider())
    .catch(() => addMessage('red', 'ничено не загрузилось =(('))
);

const getFavoriteData = () => (
  getData(addMessage)
    .then((data) => filterFav(data))
    .then((data) => checkEmptyData(data, 'favor'))
    .then((data) => createAllCards(data))
    .then((data) => resultsList.innerHTML = data)
    .catch(() => addMessage('red', 'ничено не загрузилось =(('))
);

getCustomData((data) => makeSliderPrices(data, createFormValuesObj())); // параметр выставляет слайдер цен


// долбанный firefox при   <form ... autocomplete="off"/>   умеет только так:
submitBtn.addEventListener('click', () => getCustomData());
filterForm.addEventListener('submit', (evt) => evt.preventDefault());


categoriesSelect.addEventListener('change', (evt) => {
  resetForm(evt);
  getData().
    then((data) => makeSliderPrices(data, createFormValuesObj()));
});

sortingFieldset.addEventListener('change', () => getCustomData());

addToFav(resultsList);

showFav(getCustomData, getFavoriteData);

makeModal();
