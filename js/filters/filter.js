import {
  resultsList, filterForm, categoriesSelect,
  slider, priceMin, priceMax,
  estateTypeBoxes, squareInput, roomRadios,
  cameraTypeBoxes, matrixSelect, videoSelect,
  laptopTypeBoxes, ramRadios, diagonalRadios, laptopProcessorBoxes,
  carYearSelect, transmissionRadios, carBodyBoxes,
} from '../dom-elements.js';

import {
  filterValues,
  mainCategories,
  estateCategories, estateRooms,
  laptopCategories, processorCategories,
  cameraCategories, resolutionVideo,
  carCategories,
} from '../form-categories.js';

const CATEGORY_SPLIT = 'filter__';

const hidingFilters = document.querySelectorAll('.filter__form > div:not(.filter__select-wrapper):not(.filter__range)');

// const getCategory = (className) => className.split(CATEGORY_SPLIT)[1];

const mainSideFilter = () => {

  categoriesSelect.addEventListener('change', (evt) => {
    const value = evt.target.value;
    if (value !== filterValues.all) {
      hidingFilters.forEach((filter) => {
        filter.style.display = 'none';
      });
      filterForm.querySelector(`.${CATEGORY_SPLIT}${value}`).style.display = '';
    } else {
      hidingFilters.forEach((filter) => {
        filter.style.display = '';
      });
    }
  });

};

// export const mainFilter = (x) => x;

export const filterByCategory = (elem, values) => mainCategories[values.category] === elem.category || !mainCategories[values.category];

export const filterAll = (data, values) => {

  const videoComparator = {
    'hd': 1,
    'full-hd': 2,
    '4K': 4,
    '5K': 5,
  };

  const checkMoreOrEqual = (elementValue, formValue) => (elementValue >= formValue || !formValue || !elementValue || elementValue === '-');

  return data
    .filter((elem) => filterByCategory(elem, values))

    .filter((elem) => elem.price >= values.price.min && elem.price <= values.price.max) // PRICE

    .filter((elem) => values.estate.type.some((type) => type === elem.filters.type) || // Types homes/camera/laptop
      values.camera.type.some((type) => type === elem.filters.type) ||
      values.laptop.type.some((type) => type === elem.filters.type) ||
      !elem.filters.type ||
      elem.filters.type === '-' ||
      values.estate.type.length + values.camera.type.length + values.laptop.type.length === 0)

    .filter((elem) => elem.filters.area >= values.estate.area || !elem.filters.area) // SQUARE

    .filter((elem) => elem.filters['rooms-count'] === values.estate['rooms-count'] || // ROOMS
      !elem.filters['rooms-count'] ||
      elem.filters['rooms-count'] === '-' ||
      !values.estate['rooms-count'] ||
      (values.estate['rooms-count'] === 5 && elem.filters['rooms-count'] > 4))

    .filter((elem) => videoComparator[elem.filters['supporting']] >= videoComparator[values.camera['supporting']] || // VIDEO QUALITY
      !values.camera['supporting'] ||
      !elem.filters['supporting'] ||
      elem.filters['supporting'] === '-')

    .filter((elem) => checkMoreOrEqual(elem.filters['matrix-resolution'], values.camera['matrix-resolution'])) // MATRIX

    .filter((elem) => checkMoreOrEqual(elem.filters['ram-value'], values.laptop['ram-value'])) // RAM

    .filter((elem) => checkMoreOrEqual(elem.filters['screen-size'], values.laptop['screen-size'])) // DIAGONAL

    .filter((elem) => values.laptop['cpu-type'].some((type) => type === elem.filters['cpu-type']) || // PROCESSOR
      !elem.filters['cpu-type'] ||
      elem.filters['cpu-type'] === '-' ||
      !values.laptop['cpu-type'].length)
    .filter((elem) => checkMoreOrEqual(elem.filters['production-year'], values.camera['production-year'])) // CAR YEAR

    .filter((elem) => elem.filters.transmission === values.car.transmission || // CAR TRANSMISSION
      !elem.filters.transmission ||
      !values.car.transmission ||
      values.car.transmission === '-' ||
      values.car.transmission === 'any')

    .filter((elem) => values.car['body-type'].some((type) => type === elem.filters['body-type']) || // BODY CAR
      !elem.filters['body-type'] ||
      elem.filters['body-type'] === '-' ||
      !values.car['body-type'].length)
    .slice(0, 7);
};

mainSideFilter();
