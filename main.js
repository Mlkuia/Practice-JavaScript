// Преобразуйте первую букву каждого слова строки в верхний регистр.

var str = 'я учу javascript!';
var str1 = str.substring(0, 1).toUpperCase() + str.slice(1) && str.substring(2, 3).toUpperCase() + str.slice(3)
console.log(str1);