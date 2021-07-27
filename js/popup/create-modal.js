import {createCharTemplates} from './create-prod-char-templates.js';
import {formatPrice, formateDate} from '../util.js';
import {markerFav} from '../create-card.js';


export const createModal = (data) => {

  const getClassRating = (rating) => {
    if (rating < 4) {
      return 'seller--bad';
    } else if (rating > 4.8) {
      return 'seller--good';
    }
    return '';
  };

  const createPhotoLi = (photo) => `
    <li class="gallery__item">
      <img src=${photo} alt=${data.name} width="124" height="80">
    </li>`;

  const getPhotoList = (photos) => photos.reduce((acc, img) => acc + createPhotoLi(img), '');

  const {building, city, street} = data.address;
  return `
        <div class="popup__inner">
          <button class="popup__close" type="button" aria-label="Закрыть">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.41421 8L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8 9.41421L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"/>
            </svg>
          </button>
          <div class="popup__date">${formateDate(data['publish-date'])}</div>
          <h3 class="popup__title">${data.name}</h3>
          <div class="popup__price">${formatPrice(data.price)} ₽</div>
          <div class="popup__columns">
            <div class="popup__left">
              <div class="popup__gallery gallery">
                <button class="gallery__favourite fav-add  ${markerFav(data['publish-date'])}" data-id=${data['publish-date']}>
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                  </svg>
                </button>
                <div class="gallery__main-pic">
                  <img src=${data.photos[0] || '#'} width="520" height="340" alt=${data.name}>
                </div>
                <ul class="gallery__list">
                ${getPhotoList(data.photos)}
                </ul>
              </div>
              <ul class="popup__chars chars">
              ${createCharTemplates(data)}
              </ul>
              <div class="popup__seller seller ${getClassRating(data.seller.rating)}">
                <h3>Продавец</h3>
                <div class="seller__inner">
                  <a class="seller__name" href="#">${data.seller.fullname}</a>
                  <div class="seller__rating ${getClassRating(data.seller.rating)}"><span>${data.seller.rating}</span></div>
                </div>
              </div>
              <div class="popup__description">
                <h3>Описание товара</h3>
                <p>${data.description}</p>
              </div>
            </div>
            <div class="popup__right">
              <div class="popup__map" id="js-map">

              </div>
              <div class="popup__address">${city}, ${street}, ${building}</div>
            </div>
          </div>
        </div>`;
};
