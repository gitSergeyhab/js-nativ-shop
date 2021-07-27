import {addMessage} from './inform-message.js';

export const checkEmptyData = (data, type) => {
  if (!data.length) {
    switch (type) {
      case 'filter' : addMessage('green','сорь, ничего такого у нас нет (( ; попробуй изменть параметры поиска', type); break;
      case 'favor' : addMessage('green','в избранные пока ничено не добавлено', type); break;
    }
  }
  return data;
};
