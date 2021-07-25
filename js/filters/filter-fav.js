import {
  arrayIds
} from '../ad-to-fav.js';

export const filterFav = (data) => {
  console.log(arrayIds);
  return data.filter((elem) => arrayIds.some((id) => id === elem['publish-date']));
};
