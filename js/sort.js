import {sortingForm, sortingMarkers} from './dom-elements.js';

export const sort = (data) => {
  let x;
  for (const marker of sortingMarkers) {
    if (marker.checked) {
      x = marker.id;
    }
  }

  switch (x) {
    // case 'sort-popular': return data;
    case 'sort-cheap':
      return data.sort((first, second) => first.price - second.price);
    case 'sort-new':
      return data.sort((first, second) => second['publish-date'] - first['publish-date']);
    default:
      return data;
  }
};
