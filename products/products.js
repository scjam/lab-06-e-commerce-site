// import { cocktails } from '../data/cocktails.js';
import { renderTiki } from '../utils.js';
import { getLocalStorageDrinks } from '../admin/ls-utils.js';

const localStorageDrinks = getLocalStorageDrinks();

const ul = document.querySelector('#list');

for (let i = 0; i < localStorageDrinks.length; i++) {
    const drink = localStorageDrinks[i];

    const li = renderTiki(drink);

    ul.appendChild(li);
}
