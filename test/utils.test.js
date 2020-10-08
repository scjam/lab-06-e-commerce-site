import { renderTiki } from '../utils.js';
import { renderLineItems } from '../shopping-cart/render-line-items.js';
import { calcLineItem } from '../utils.js';
import { calcOrderTotal } from '../shopping-cart/shopping-cart-utils.js';
import { cart } from '../data/cart.js';
import { cocktails } from '../data/cocktails.js';

const test = QUnit.test;

test('should take in a drink and return a li with relevant information', (expect) => {
    const drink = {
        id: 'pinaColada',
        name: 'Piña colada',
        image: 'pinaColada.jpg',
        description: 'A blended pineapple and coconut classic, originated in Puerto Rico.',
        liquor: 'light rum',
        price: 8,        
    };

    const expected = '<li id="pinaColada" class="drink"><h3 class="name">Piña colada</h3><img class="image" src="../assets/pinaColada.jpg"><p class="description">A blended pineapple and coconut classic, originated in Puerto Rico.</p><p class="price">$8.00</p><button>Add</button></li>';

    const actual = renderTiki(drink);

    expect.equal(actual.outerHTML, expected);
});

test('should take in a cart item and return a tr element with appropriate contents', (expect) => {
    const cartItem = {
        id: 'zombie',
        quantity: 2,        
    };

    const expected = '<tr><td>Zombie</td><td>$12</td><td>2</td><td>$24</td></tr>';

    const actual = renderLineItems(cartItem);

    expect.equal(actual.outerHTML, expected);
});

test('should take 2 and 12 and return 24', (expect) => {
    let quantity = 2;
    let price = 12;

    const expected = 24;
    const actual = calcLineItem(quantity, price);

    expect.equal(actual, expected);
});

test('should take in cart array and products array and return total price of cart', (expect) => {
    
    const expected = 59;
    
    const actual = calcOrderTotal(cart, cocktails);

    expect.equal(actual, expected);
});