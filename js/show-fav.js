import {resultsList, filterForm, categoriesSelect,
  slider, priceMin, priceMax,
  estateTypeBoxes, squareInput, roomRadios,
  cameraTypeBoxes, matrixSelect, videoSelect,
  laptopTypeBoxes, ramRadios, diagonalRadios, laptopProcessorBoxes,
  carYearSelect, transmissionRadios, carBodyBoxes,
  submitBtn,
  sortingForm, sortingFielset, sortingMarkers,
  favouritesBtn
} from './dom-elements.js';

const fieldsets = filterForm.querySelectorAll('fieldset');

const activeFields = (fields, block = false) => fields.forEach((field) => field.disabled = block);

export const showFav = (getUsualData, getFavData) => {
  favouritesBtn.addEventListener('change', () => {
    if (favouritesBtn.checked) {
      activeFields(fieldsets, true);
      activeFields([sortingFielset], true);
      activeFields([matrixSelect, videoSelect, carYearSelect, submitBtn], true);
      filterForm.style.pointerEvents = 'none';
      return getFavData();
    } else {
      activeFields(fieldsets);
      activeFields([sortingFielset]);
      activeFields([matrixSelect, videoSelect, carYearSelect, submitBtn]);
      filterForm.style.pointerEvents = '';
      return getUsualData();
    }
  });
};
