import { calcOrderTotal } from '../shopping-cart/shopping-cart-utils.js';
import { renderLineItems } from '../shopping-cart/render-line-items.js';
import { getFromLocalStorage } from '../utils.js';
import { cocktails } from '../data/cocktails.js';

const table = document.querySelector('tbody');
const cart = getFromLocalStorage('CART') || [];

for (let i = 0; i < cart.length; i++) {
    const drink = cart[i];

    const tr = renderLineItems(drink, cocktails);
    table.appendChild(tr);
}

const total = calcOrderTotal(cart);

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