// Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

let str = 'hello';
str = str[0].toUpperCase() + str.substr(1);
console.log(str);

var str2 = 'hello';
str2 = str2.split('');
str2[0] = str2[0].toUpperCase();
var result = str2.join('');
console.log(result);