/*2. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
    Товары в корзине хранятся в массиве. Задачи:
a.	Организовать такой массив для хранения товаров в корзине;
b.	Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

let arr = [1, 2, 3, 4, 5, 10];
let newArr = [100, 500, 3123];

function countBasketPrice(...arr) {
    let result = arr.reduce((sum, current) => sum + current);
    console.log(result);
}

countBasketPrice(...arr);
countBasketPrice(...newArr);
