// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

str = 'Я-учу-javascript!'
let str2 = str.replace(/-/g, '!')
console.log(str2)