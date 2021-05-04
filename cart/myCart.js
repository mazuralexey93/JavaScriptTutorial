/*Реализовать страницу корзины:
Добавить возможность не только смотреть состав корзины, но и редактировать его, обновляя общую стоимость или выводя сообщение «Корзина пуста».
На странице корзины:
Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
Сделать эти поля сворачиваемыми;
Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу которого есть кнопка «Далее». Если нажать ее, сворачивается «Состав корзины» и открывается «Адрес доставки» и так далее.
*/

const $cart = document.querySelector('#cart');
const $showCaseList = document.querySelector('#showcase-list');
const $popup = document.querySelector('#popup');
const $cartPopup = document.querySelector('#cartPopup');


const cart = [];
const showcase = [];
const cartList = [];

// function cloneArray(arr) {
//     var result = [];
//     arr.forEach(function (value) {
//         var arr_elem = {};
//         for (var prop in value)
//             arr_elem[prop] = value[prop];
//         result.push(arr_elem)
//     });
//     return result;
// }

// cartList = cloneArray(cart)



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
        $cartPopup.style.display = 'none';

    }
})

$showCaseList.addEventListener('click', function (e) {

    if (e.target.tagName === 'IMG') {
        // const arrowNext = `<button class="arrow next">⇨</button>`
        // const arrowPrev = `<button class="arrow prev">⇦</button>`

        $popup.textContent = '';
        $popup.style.display = 'block';

        // $popup.insertAdjacentHTML('beforeend', arrowPrev);

        $popup.insertAdjacentHTML('beforeend', `<img src="${e.target.getAttribute('src')}">`);

        // $popup.insertAdjacentHTML('beforeend', arrowNext);
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

$cart.addEventListener('click', function (e) {
    $cartPopup.style.display = 'block';
    $cartPopup.textContent = '';
    const p = document.createElement('p');
    const str = document.createElement('p')
    const deliv = document.createElement('TEXTAREA')
    const comment = document.createElement('TEXTAREA')
    deliv.placeholder = 'Адрес доставки'
    comment.placeholder = 'Комментарии'
    str.textContent = `Состав корзины: ${cartList} `


    if (cart.length !== 0) {
        p.textContent = `В корзине ${countCartQuantity(cart)} товаров, на сумму ${countCartPrice(cart)} рублей`;
    } else {
        p.textContent = 'Ваша корзина пуста'
    }
    $cartPopup.appendChild(p);
    $cartPopup.appendChild(str);
    $cartPopup.appendChild(deliv);
    $cartPopup.appendChild(comment);
})



showcase.push(new showedGoods('item1', 100));
showcase.push(new showedGoods('item2', 200));
showcase.push(new showedGoods('item3', 300));

drawCartInfo();
drawShowcaseInfo();


