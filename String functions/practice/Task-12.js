// Преобразуйте первую букву строки в верхний регистр.

var str = 'я учу javascript!';
var str1 = str.substring(0, 1).toUpperCase() + str.slice(1);
console.log(str1);