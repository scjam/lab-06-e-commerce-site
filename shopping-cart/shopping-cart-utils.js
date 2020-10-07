import { findById, getFromLocalStorage } from '../utils.js';
import { cocktails } from '../data/cocktails.js';

const orderButton = document.querySelector('#order');

const cart = getFromLocalStorage('CART') || [];

if (cart.length === 0) {
    orderButton.disabled = true;
}

export function calcOrderTotal(cartArray) {
    let total = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];

        const cocktail = findById(cocktails, item.id);

        const subtotal = cocktail.price * item.quantity;

        total += subtotal;
    }

    return total;
}

orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);

    localStorage.clear();
    window.location.href = '/';
});
