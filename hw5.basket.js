/*Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML - структуре.Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/

const items = [];

function myBasket(name, itemCost) {
    this.name = name,
        this.itemCost = itemCost
};


items.push(
    new myBasket('item1', 100)
);
items.push(
    new myBasket('item2', 200)
);

function drawInfo() {
    const $basketItems = document.querySelector('basketInfo');
    items.forEach(function (myBasket) {
        console.log(myBasket);
    })
}

function countBasketPrice(items) {
    return items.reduce(function (acc, items) {
        return acc + items.itemCost
    }, 0)
}

function drawItem() {
    const basketItems = document.querySelector('basketInfo');
    const html = `div class=basketInfo`
    $basketItems.insertAdjacentHTML('beforeend', html);

}

drawInfo(items);
console.log(`total: ${countBasketPrice(items)}`);

