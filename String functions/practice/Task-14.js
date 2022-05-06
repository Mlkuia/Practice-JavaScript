// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

let str = 'var_test_text';
let arr = str.split('_')
for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1);
}
var result = arr.join('');
console.log(result);