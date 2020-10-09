import { findById } from '../utils.js';

export function calcOrderTotal(cocktails, cartArray) {
    let total = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];

        const cocktail = findById(cocktails, item.id);

        const subtotal = cocktail.price * item.quantity;

        total += subtotal;
    }

    return total;
}