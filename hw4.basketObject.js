/*Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */
// добавить this.count, дополнить функцию кол-во * цена

function myBasket(name, itemCost) {
    this.name = name,
        this.itemCost = itemCost
};

const items = []

items.push(
    new myBasket('item1', 100)
);
items.push(
    new myBasket('item2', 200)
);

items.forEach(function (myBasket) {
    console.log(myBasket)
})

function countBasketPrice(items) {
    return items.reduce(function (acc, items) {
        return acc + items.itemCost
    }, 0)
}

console.log(`total: ${countBasketPrice(items)}`);
