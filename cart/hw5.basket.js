/*Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML - структуре.Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/

const $cart = document.querySelector('#cart');
const cart = [];

function addedGoods(name, price, quantity = 1) {
    this.name = name,
        this.price = price,
        this.quantity = quantity;
}

function countCartPrice(arr) {
    return arr.reduce(function (acc, goods) {
        return acc + (goods.price * goods.quantity)
    }, 0);
}

function countCartQuantity(arr) {
    return arr.reduce(function (acc, goods) {
        return acc + goods.quantity;
    }, 0);
}

function drawCartInfo() {
    const p = document.createElement('p');

    if (cart.length !== 0) {
        p.textContent = `В корзине ${countCartQuantity(cart)} товаров, на сумму ${countCartPrice(cart)} рублей`;
    } else {
        p.textContent = 'Ваша корзина пуста'
    }
    $cart.appendChild(p);
}


cart.push(new addedGoods('item1', 100, 2));
cart.push(new addedGoods('item2', 200, 3));

drawCartInfo();

/** Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
*/

const $showCaseList = document.querySelector('#showcase-list');
const showcase = [];


function showedGoods(name, price) {
    this.name = name,
        this.price = price;
}

function drawShowcaseInfo() {
    showcase.forEach(function (good) {
        const html =
            `<div class="good"><h5>${good.name}</h5><p>${good.price}</p></div>`
        $showCaseList.insertAdjacentHTML('beforeend', html)
    })
}

showcase.push(new showedGoods('item1', 100));
showcase.push(new showedGoods('item2', 200));
showcase.push(new showedGoods('item3', 300));

drawShowcaseInfo();
