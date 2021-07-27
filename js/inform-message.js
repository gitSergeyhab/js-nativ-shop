import {resultsList} from './dom-elements.js';
const resultsHead = document.querySelector('.results__head');


export const addMessage = (color, text, type) => {
  const li = document.createElement('li');
  li.textContent = text;
  li.style.color = color;
  li.style.fontSize = '33px';
  resultsList.textContent = '';
  if(type) {
    resultsHead.append(li);
    setTimeout(() => li.remove(), 2000);
  } else {
    resultsList.append(li);
  }
};
