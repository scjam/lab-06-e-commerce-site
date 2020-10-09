import { calcOrderTotal } from '../shopping-cart/shopping-cart-utils.js';
import { renderLineItems } from '../shopping-cart/render-line-items.js';
import { getFromLocalStorage } from '../utils.js';
import { getLocalStorageDrinks } from '../admin/ls-utils.js';


const table = document.querySelector('tbody');
const cart = getFromLocalStorage('CART') || [];

for (let i = 0; i < cart.length; i++) {
    const drink = cart[i];

    const drinksArray = getLocalStorageDrinks();
    const tr = renderLineItems(drink, drinksArray);
    table.appendChild(tr);
}

const drinksArray = getLocalStorageDrinks();
const total = calcOrderTotal(drinksArray, cart);

const totalLine = document.querySelector('.total');

totalLine.textContent = `Total: $${total}`;

const orderButton = document.querySelector('#order');

if (cart.length === 0) {
    orderButton.disabled = true;
}

orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);

    localStorage.clear();
    window.location.href = '/';
});