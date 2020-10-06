export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        if (item.id === someId) {
            return item;
        }
    }
}

export function renderTiki(drink) {
    const li = document.createElement('li');
    const name = document.createElement('h3');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');

    li.id = 'pinaColada';
    li.classList.add('drink');

    name.classList.add('name');
    name.textContent = drink.name;

    li.appendChild(name);

    image.classList.add('image');
    image.src = `../assets/${drink.image}`;

    li.appendChild(image);

    description.classList.add('description');
    description.textContent = drink.description;

    li.appendChild(description);

    price.classList.add('price');
    price.textContent = `$${drink.price.toFixed(2)}`;

    li.appendChild(price);

    button.textContent = 'Add';
    button.value = li.id;

    li.appendChild(button);

    return li;
}