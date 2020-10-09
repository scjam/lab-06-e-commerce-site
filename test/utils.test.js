import { renderTiki } from '../utils.js';
import { renderLineItems } from '../shopping-cart/render-line-items.js';
import { calcLineItem } from '../utils.js';
import { calcOrderTotal } from '../shopping-cart/shopping-cart-utils.js';
import { addProduct, getLocalStorageDrinks } from '../admin/ls-utils.js';

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

    const expected = '<li id="pinaColada" class="drink"><h3 class="name">Piña colada</h3><img class="image" src="../assets/pinaColada.jpg"><p class="description">A blended pineapple and coconut classic, originated in Puerto Rico.</p><p class="price">$8.00</p><button>Add</button><select class="select"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></li>';

    const actual = renderTiki(drink);

    expect.equal(actual.outerHTML, expected);
});

test('should take in a cart item and return a tr element with appropriate contents', (expect) => {
    const cartItem = {
        id: 'zombie',
        quantity: 2,        
    };

    const expected = '<tr><td>Zombie</td><td>$12</td><td>2</td><td>$24</td></tr>';

    const cocktails = getLocalStorageDrinks();
    const actual = renderLineItems(cartItem, cocktails);

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
    const cart = [{
        id: 'zombie',
        quantity: 2,
    }];
    const expected = 24;
    const cocktails = getLocalStorageDrinks();

    const actual = calcOrderTotal(cocktails, cart);

    expect.equal(actual, expected);
});

test('addProduct should take in a product and add it to localStorage', (expect) => {
    const newDrink = {
        name: 'Hula Hero',
        price: 13
    };
    const expected = [
        {
            id: 'pinaColada',
            name: 'Piña Colada',
            image: '../assets/pinaColada.jpg',
            description: 'A blended pineapple and coconut classic, originated in Puerto Rico.',
            liquor: 'light rum',
            price: 8,
        },
        {
            id: 'singaporeSling',
            name: 'Singapore Sling',
            image: '../assets/singaporeSling.jpg',
            description: 'Created by Ngiam Tong Boon around 1915, this is one of the few classic tiki cocktails made without rum.',
            liquor: 'gin',
            price: 9,
        },
        {
            id: 'painkiller',
            name: 'Painkiller',
            image: '../assets/painkiller.jpg',
            description: 'Pineapple, orange, high-proof rum and nutmeg make this concoction from the 1970s a lasting favorite.',
            liquor: 'dark rum',
            price: 10,
        },
        {
            id: 'jungleBird',
            name: 'Jungle Bird',
            image: '../assets/jungleBird.jpg',
            description: 'Another 1970s cocktail, hailing from Kuala Lumpur, that has the surprising addition of Campari.',
            liquor: 'dark rum',
            price: 9,
        },
        {    
            id: 'zombie',
            name: 'Zombie',
            image: '../assets/zombie.jpg',
            description: 'Created by Don Beach in 1934, this cocktail can best be described as high-octane rocket fuel disguised as fruit punch.',
            liquor: 'dark rum',
            price: 12,
        },
        {
            name: 'Hula Hero',
            price: 13 
        }
    ];

    addProduct(newDrink);

    const localStorageAfter = JSON.parse(localStorage.getItem('PRODUCTS'));

    expect.deepEqual(expected, localStorageAfter);

});