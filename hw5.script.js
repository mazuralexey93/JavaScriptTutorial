/*Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

let field = document.createElement('div');
document.body.appendChild(field);

for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
        let css = x ? {} : { clear: 'left' };
        let content = '';
        if (y == 0 || y == 9)
            content = x > 0 && x < 9 ? 'ABCDEFGH'.charAt(x - 1) : null;
        else if (x == 0 || x == 9)
            content = 9 - y;
        else css.background = (x + y) % 2 ? '#077' : '#fbb';

        let node = document.createElement('div');
        css.width = '50px';
        css.height = css.width;
        css.textAlign = 'center';
        css.float = 'left';
        for (let i in css) node.style[i] = css[i];
        if (content)
            node.innerHTML = content;
        field.appendChild(node);
    }
}
