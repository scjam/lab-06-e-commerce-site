// import { cocktails } from '../data/cocktails.js';
import { renderTiki, getLocalStorageDrinks } from '../utils.js';

const localStorageDrinks = getLocalStorageDrinks();

const ul = document.querySelector('#list');

for (let i = 0; i < localStorageDrinks.length; i++) {
    const drink = localStorageDrinks[i];

    const li = renderTiki(drink);

    ul.appendChild(li);
}
