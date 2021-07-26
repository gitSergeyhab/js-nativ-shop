import {formatPrice} from './util.js';


const getNumberDate = (date) => {
  const newDate = new Date(+date);
  return `${newDate.getDate()} . ${newDate.getMonth()} . ${newDate.getFullYear()}`;
};


const markerFav = (date) => {
  const ids = localStorage.getItem('fav-ids') ? JSON.parse(localStorage.getItem('fav-ids')) : [];
  if (ids.some((id) => id === date)) {
    return 'fav-add--checked';
  }
  return '';
};

export const createCard = (
  {name, price, address: {city, street, building}, 'publish-date': date, photos},
) => `
  <li class="results__item product" data-id=${date}>
  <button class="product__favourite fav-add ${markerFav(date)}" type="button" aria-label="Добавить в избранное" data-id=${date}>
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
      d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z"
      stroke="white" stroke-width="2" stroke-linejoin="round"/>
    </svg>
  </button>
  <div class="product__image">
    <div class="product__image-more-photo hidden">+2 фото</div>
    <img src="${photos[0]}" width="318" height="220" alt="${name}">
    <div class="product__image-navigation hidden">
      <span class="product__navigation-item product__navigation-item--active"></span>
      <span class="product__navigation-item"></span>
      <span class="product__navigation-item"></span>
      <span class="product__navigation-item"></span>
      <span class="product__navigation-item"></span>
    </div>
  </div>
  <div class="product__content">
    <h3 class="product__title">
      <a href="#">${name}</a>
    </h3>
    <div class="product__price">${formatPrice(price)} ₽</div>
    <div class="product__address">${city}, ${street}, ${building}</div>
    <div class="product__date">${getNumberDate(date)}</div>
  </div>
  </li>`;
