import {resultsList} from './dom-elements.js'


export const addMessage = (color, text) => {
    const li = document.createElement('li');
    li.textContent = text;
    li.style.color = color;
    li.style.fontSize = '33px';
    resultsList.textContent = '';
    resultsList.append(li);
}