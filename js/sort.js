import {sortingMarkers} from './dom-elements.js';

export const sort = (data) => {
  let id;
  for (const marker of sortingMarkers) {
    if (marker.checked) {
      id = marker.id;
    }
  }

  switch (id) {
    case 'sort-cheap':
      return data.sort((first, second) => first.price - second.price);
    case 'sort-new':
      return data.sort((first, second) => second['publish-date'] - first['publish-date']);
    default:
      return data;
  }
};
