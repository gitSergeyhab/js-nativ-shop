const resultsList = document.querySelector('.results__list');

const filterForm = document.querySelector('.filter__form');
const categoriesSelect = filterForm.querySelector('#categories');


const slider = filterForm.querySelector('#sampleSlider');
const priceMin = filterForm.querySelector('#price-min');
const priceMax = filterForm.querySelector('#price-max');

const estateTypeBoxes = filterForm.querySelectorAll('.filter__checkboxes-list--estate input');
const squareInput = filterForm.querySelector('#square');
const roomRadios = filterForm.querySelectorAll('[name="rooms"]');

const cameraTypeBoxes = filterForm.querySelectorAll('.filter__type--camera input');
const matrixSelect = filterForm.querySelector('#resolution-matrix');
const videoSelect = filterForm.querySelector('#resolution-video');

const laptopTypeBoxes = filterForm.querySelectorAll('[name="laptop-type"]');
const ramRadios = filterForm.querySelectorAll('[name="ram"]');
const diagonalRadios = filterForm.querySelectorAll('[name="diagonal"]');
const laptopProcessorBoxes = filterForm.querySelectorAll('[name="laptop-processor"]');

const carYearSelect = filterForm.querySelector('#car_year');
const transmissionRadios = filterForm.querySelectorAll('[name="transmission"]');
const carBodyBoxes = filterForm.querySelectorAll('[name="car-body"]');

const submitBtn = filterForm.querySelector('.filter__button');


const sortingForm = document.querySelector('.sorting__form');
const sortingFielset = sortingForm.querySelector('.sorting__order');
const sortingMarkers = sortingForm.querySelectorAll('[name="sorting-order"]');
const favouritesBtn = sortingForm.querySelector('#favourites');

const popup = document.querySelector('.popup');

export {
  resultsList, filterForm, categoriesSelect,
  slider, priceMin, priceMax,
  estateTypeBoxes, squareInput, roomRadios,
  cameraTypeBoxes, matrixSelect, videoSelect,
  laptopTypeBoxes, ramRadios, diagonalRadios, laptopProcessorBoxes,
  carYearSelect, transmissionRadios, carBodyBoxes,
  submitBtn,
  sortingForm, sortingFielset, sortingMarkers,
  favouritesBtn,
  popup
};
