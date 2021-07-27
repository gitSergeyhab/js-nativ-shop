import {arrayIds} from '../ad-to-fav.js';

export const filterFav = (data) => data.filter((elem) => arrayIds.some((id) => id === elem['publish-date']));
