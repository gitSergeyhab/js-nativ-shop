
const IMG_CLASS_ACTIVE = 'gallery__item--active';

import {addToFav} from '../ad-to-fav.js';

export const showPopupSlider = () => {
  const popupGallery = document.querySelector('.popup__gallery');  // нужно создать внутри ф-ции или при загрузке жс его не наедет
  const mainPic = popupGallery.querySelector('.gallery__main-pic img');
  const galleryItems = popupGallery.querySelectorAll('.gallery__item');
  galleryItems.length ? galleryItems[0].classList.add(IMG_CLASS_ACTIVE) : null;
  galleryItems.forEach((img) => {
    img.addEventListener('click', () => {
      mainPic.src = img.querySelector('img').src;
      galleryItems.forEach((imgI) => imgI.classList.remove(IMG_CLASS_ACTIVE));
      img.classList.add(IMG_CLASS_ACTIVE);
    });
  });
  addToFav(popupGallery); // что бы добавление в избранные работало и при открытом попапе
};
