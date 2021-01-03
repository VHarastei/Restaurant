const itemFactory = (img, name, description, price) => {
    return {img, name, description, price};
};

let menu = [
    itemFactory('item-1', '4 chees','Cream, oregano, mozzarella, gorgonzola, parmesan, ricotta','12$'),
    itemFactory('item-2', 'Salami','Сream, oregano, mozzarella, fragrant feta, salami','18$'),
    itemFactory('item-3', 'Palermo','red sauce, mozzarella, meat, salami, tomatoes','10$'),
    itemFactory('item-4', 'Pepperoni','Red sauce, mozzarella, hunting sausages, salami, chili peppers','21$'),
    itemFactory('item-5', 'Carbonara','Cream, oregano, mozzarella, meat, brisket, parmesan, quail egg','9.5$'),
    itemFactory('item-6', 'Milano','Cream, oregano, mozzarella, chicken fillet, shiitake','25$'),
];

function menuDOM(listItem) {
    let list = document.querySelector('.list');

    const item = document.createElement('li');
    item.className = 'list-item';

    const image = document.createElement('img');
    image.src = '../dist/images/' + listItem.img + '.png';

    const itemName = document.createElement('h1');
    itemName.innerText = listItem.name;

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.innerText = listItem.description;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('item-price');
    itemPrice.innerText = listItem.price;

    const itemBuyBtn = document.createElement('button');
    itemBuyBtn.innerText = 'Buy';

    item.appendChild(image);
    item.appendChild(itemName);
    item.appendChild(itemDescription);
    item.appendChild(itemPrice);
    item.appendChild(itemBuyBtn);

    list.appendChild(item);
}

function menuLoad() {
    const content = document.getElementById('content');
    content.style.backgroundImage = "url('../dist/images/menu-background.jpg')";
    content.style.height = 100 + '%';

    const mainContent = document.querySelector('.main-content');
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.lastChild);
    }
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');
    
    const h1 = document.createElement('h1');
    h1.innerText = 'MENU';

    const list = document.createElement('ul');
    list.className = 'list';

    menuPage.appendChild(h1);
    menuPage.appendChild(list);    

    mainContent.appendChild(menuPage);

    menu.forEach(item => {
        menuDOM(item);
    });
}

export default menuLoad;