// 1.С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

// инициализация;
// while (проверка) {
//     инструкция;
//     инкремент;
// }

let n = 100;
let i = 0;
while (i <= n) {
    let flag = 1;
    if (i > 2 && i % 2 != 0) {
        for (let j = 3; j * j <= i; j = j + 2) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
    }
    else if (i != 2) flag = 0;
    if (flag == 1) { console.log(i); }
    i++;
}

