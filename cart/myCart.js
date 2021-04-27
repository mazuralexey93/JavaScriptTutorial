/*Продолжаем реализовывать модуль корзины:
Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
* У товара может быть несколько изображений. Нужно:
Реализовать функционал показа полноразмерных картинок товара в модальном окне;
Реализовать функционал перехода между картинками внутри модального окна.
*/

const $cart = document.querySelector('#cart');
const $showCaseList = document.querySelector('#showcase-list');
const $popup = document.querySelector('#popup');


const cart = [];
const showcase = [];

function addedGoods(name, price, quantity = 1) {
    this.name = name,
        this.price = price,
        this.quantity = quantity;
}

function showedGoods(name, price) {
    this.name = name,
        this.price = price,
        this.images = [
            './img/img-1.jpg',
            './img/img-2.jpg',
            './img/img-3.jpg',
        ]
}

function countCartPrice(arr) {
    return arr.reduce(function (acc, good) {
        return acc + (good.price * good.quantity)
    }, 0);
}

function countCartQuantity(arr) {
    return arr.reduce(function (acc, good) {
        return acc + good.quantity;
    }, 0);
}

function drawCartInfo() {
    $cart.textContent = '';
    const p = document.createElement('p');

    if (cart.length !== 0) {
        p.textContent = `В корзине ${countCartQuantity(cart)} товаров, на сумму ${countCartPrice(cart)} рублей`;
    } else {
        p.textContent = 'Ваша корзина пуста'
    }

    $cart.appendChild(p);
}

function drawShowcaseInfo() {
    showcase.forEach(function (good, i) {
        const imagesHtml = good.images.map(function (src) {
            return `<img width="50" src="${src}"></img>`
        }).join('');

        const html = `<div class="good"><h5>${good.name}</h5><p>${good.price}</p><p>${imagesHtml}</p><button data-id="${i}">Добавить в корзину</button></div>`;
        $showCaseList.insertAdjacentHTML('beforeend', html);
    })
}

document.addEventListener('keydown', function (e) {
    if (e.key === `Escape`) {
        $popup.style.display = 'none';
    }
})

$showCaseList.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        $popup.textContent = '';
        $popup.style.display = 'block';
        $popup.insertAdjacentHTML('beforeend', `<img src="${e.target.getAttribute('src')}">`);
    }
})

$showCaseList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const id = Number(e.target.getAttribute('data-id'));
        const good = showcase[id];
        const uniqueId = cart.findIndex(function (item) {
            return good.name == item.name;
        });
        if (uniqueId < 0) {
            cart.push(new addedGoods(good.name, good.price));
        }
        else {
            cart[uniqueId].quantity++;
        }
        drawCartInfo();
    }
});

showcase.push(new showedGoods('item1', 100));
showcase.push(new showedGoods('item2', 200));
showcase.push(new showedGoods('item3', 300));

drawCartInfo();
drawShowcaseInfo();
