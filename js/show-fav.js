import { filterForm,
  matrixSelect, videoSelect,
  carYearSelect,
  submitBtn,
  sortingFieldset,
  favouritesBtn
} from './dom-elements.js';

const fieldsets = filterForm.querySelectorAll('fieldset');

const activeFields = (fields, block = false) => fields.forEach((field) => field.disabled = block);

export const showFav = (getUsualData, getFavData) => {
  favouritesBtn.addEventListener('change', () => {
    // октровка фильтров при клике на избранные
    if (favouritesBtn.checked) {
      activeFields(fieldsets, true);
      activeFields([sortingFieldset], true);
      activeFields([matrixSelect, videoSelect, carYearSelect, submitBtn], true);
      filterForm.style.pointerEvents = 'none';
      // фильтрация по избранным
      return getFavData();
    } else {
      activeFields(fieldsets);
      activeFields([sortingFieldset]);
      activeFields([matrixSelect, videoSelect, carYearSelect, submitBtn]);
      filterForm.style.pointerEvents = '';
      return getUsualData();
    }
  });
};
