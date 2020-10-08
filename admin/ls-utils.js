import { cocktails } from '../data/cocktails.js';

export function addProduct(newDrink) {
    const localStorageProducts = getLocalStorage();

    localStorageProducts.push(newDrink);

    const stringyLocalProduct = JSON.stringify(localStorageProducts);
    localStorage.setItem('PRODUCTS', stringyLocalProduct);
    
}

export function getLocalStorage() {
    let localStorageDrinks = JSON.parse(localStorage.getItem('PRODUCTS'));

    if (!localStorageDrinks) {
        const stringyDrinks = JSON.stringify(cocktails);

        localStorage.setItem('PRODUCTS', stringyDrinks);
        localStorageDrinks = cocktails;
    }
    return localStorageDrinks;
}