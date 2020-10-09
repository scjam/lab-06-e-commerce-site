import { getLocalStorageDrinks } from '../admin/ls-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const id = data.get('id');
    const name = data.get('name');
    const image = ('../assets/placeholder.png');
    const description = data.get('description');
    const price = data.get('price');

    const newCocktail = {
        id: id,
        name: name,
        image: image,
        description: description,
        price: Number(price),
    };

    const localStorageDrinks = getLocalStorageDrinks();

    localStorageDrinks.push(newCocktail);

    const stringyLocalDrinks = JSON.stringify(localStorageDrinks);
    localStorage.setItem('PRODUCTS', stringyLocalDrinks);
});