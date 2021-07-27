import {filterForm} from '../dom-elements.js';

export const resetForm = (evt) => {
  const value = evt.target.value;
  filterForm.reset();
  evt.target.value = value; // вернуть категорию, что была до рисета
};
