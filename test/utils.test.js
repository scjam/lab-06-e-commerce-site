import { renderTiki } from '../utils.js';

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

    const expected = '<li id="pinaColada" class="drink"><h3 class="name">Piña colada</h3><img class="image" src="../assets/pinaColada.jpg"><p class="description">A blended pineapple and coconut classic, originated in Puerto Rico.</p><p class="price">$8.00</p><button value="pinaColada">Add</button></li>';

    const actual = renderTiki(drink);

    expect.equal(actual.outerHTML, expected);
});