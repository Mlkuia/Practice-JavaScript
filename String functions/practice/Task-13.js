// Преобразуйте первую букву каждого слова строки в верхний регистр.

let str = 'я учу javascript!';
let arr = str.split(' ');
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
console.log(`${arr[0]} ${arr[1]} ${arr[2]}`);