
/*№3.	Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.Затем написать скрипт, который работает по следующему принципу:
o	если a и b положительные, вывести их разность;
o	если а и b отрицательные, вывести их произведение;
o	если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.*/

let a = 7, b = 3;
let a = 0, b = -3;
let a = -2, b = -13;


if (a >= 0 && b >= 0) {
    console.log(a - b);
}
else if (a < 0 && b < 0) {
    console.log(a * b);
}
else {
    console.log(a + b);
}

/*№4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. */


// let a = 110;
let a = 8;

switch (a) {
    case a = 1:
    case a = 2:
    case a = 3:
    case a = 4:
    case a = 5:
    case a = 6:
    case a = 7:
    case a = 8:
    case a = 9:
    case a = 10:
    case a = 11:
    case a = 12:
    case a = 13:
    case a = 14:
    case a = 15:
        let i = 0
        while (a + i <= 15) {
            console.log(a + i)
            i++;
        }
        break;
    default:
        console.log('Присвойте значение в промежутке [0..15].');
        break;
}

// /*Скрипт реализовал кривовато, нет возможности масштабировать диапазон, задействовал цикл, чтобы хоть как-то смотрелось, вариант с подобным решением : console.log(a++, a++, a++, a++, a++, a++) отбросил */  


/*№5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return*/


function summ(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


let s = summ(3, 7);
let r = subtract(100, 28)
let m = multiply(7, 8)
let d = divide(312, 82)

console.log(s);
console.log(r);
console.log(m);
console.log(d);

/*№6.	Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch). */

function mathOperation(arg1, arg2, operation) {
    a = arg1, b = arg2;
    switch (operation) {
        case operation = 'summ':
            let s = summ(arg1, arg2);
            console.log(s)
            break;
        case operation = 'subtract':
            let r = subtract(arg1, arg2);
            console.log(r)
            break;
        case operation = 'multiply':
            let m = multiply(arg1, arg2);
            console.log(m)
            break;
        case operation = 'divide':
            let d = divide(arg1, arg2);
            console.log(d)
            break;
        default:
            console.log('arg1, arg2 — значения аргументов, operation — строка с названием операции(summ, subtract, multiply, divide')

    }
}

mathOperation(3, 2, 'summ');
mathOperation(3, 2, 'subtract');
mathOperation(3, 2, 'multiply');
mathOperation(3, 2, 'divide');
mathOperation(3, 2, 'da')

/*№8 С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень. */

function power(val, pow) {
    if (pow == 1)
        return val;
    if (val != 1)
        return val * power(val, pow - 1)
}

console.log(power(5, 5));
