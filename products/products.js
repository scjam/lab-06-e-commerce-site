import { cocktails } from '../cocktails.js';
import { renderTiki } from '../utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < cocktails.length; i++) {
    const drink = cocktails[i];

    const li = renderTiki(drink);

    ul.appendChild(li);
}