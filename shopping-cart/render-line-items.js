import { cocktails } from '../data/cocktails.js';
import { findById } from '../utils.js';

export function renderLineItems(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const cocktailData = findById(cocktails, cartItem.id);

    const price = cocktailData.price;
    const name = cocktailData.name;

    tdPrice.textContent = `$${price}`;
    tdName.textContent = name;

    const total = price * cartItem.quantity;

    tdTotal.textContent = `$${total}`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;
}