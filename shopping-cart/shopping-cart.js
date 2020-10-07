import { cart } from '../data/cart.js';
import { calcOrderTotal } from '../shopping-cart/shopping-cart-utils.js';
import { renderLineItems } from '../shopping-cart/render-line-items.js';


const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const cocktail = cart[i];

    if (cocktail.quantity >= 0) {
        const tr = renderLineItems(cocktail);
        table.appendChild(tr);
    }
}

const total = calcOrderTotal(cart);

const totalLine = document.querySelector('.total');

totalLine.textContent = `Total: $${total}`;