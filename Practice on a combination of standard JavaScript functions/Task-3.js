// Проверьте, что строка начинается на http://.

let str = 'http://phphtml';
if (str.substr(0, 7) == 'http://') {
    console.log('Да');
} else {
    console.log('Нет');
}