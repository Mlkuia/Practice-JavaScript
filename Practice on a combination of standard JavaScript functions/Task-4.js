// Проверьте, что строка заканчивается на .html

let str = 'index.html';
if (str.substr(-5) == '.html') {
    console.log('Да');
} else {
    console.log('Нет');
}