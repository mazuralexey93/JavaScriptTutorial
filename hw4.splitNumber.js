/*Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */

let num = {
    hundreds: 0,
    dozens: 0,
    ones: 0
};

function splitNumber(number) {
    if (number > 999 || number < 0) {
        console.log('Cоответствующее сообщение')
        return {}
    }
    else {
        num.dozens = Math.floor((number / 10) % 10);
        num.hundreds = Math.floor(number / 100);
        num.ones = number % 10;
        // console.log('единицы: ' + this.ones + ' ' + 'десятки: ' + this.dozens + ' ' + 'cотни: ' + this.hundreds)
        console.log(num)
    }
}

splitNumber(-1231)
splitNumber(763)
