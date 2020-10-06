import { cart } from '../data/cart.js';
import { cocktails } from '../data/cocktails.js';
import { renderLineItems } from '../shopping-cart/render-line-items.js';
import { findById } from '../utils.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const cocktail = cart[i];
    const tr = renderLineItems(cocktail);
    table.appendChild(tr);
}

const total = calculateTotal(cart);

const totalLine = document.querySelector('.total');

totalLine.textContent = `Total: $${total}`;

function calculateTotal(cartArray) {
    let accumulator = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];

        const trueItem = findById(cocktails, item.id);

        const subtotal = trueItem.price * item.quantity;

        accumulator = accumulator + subtotal;
    }

    return accumulator;
}