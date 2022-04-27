// Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while)

let arr = []
for (i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}
console.log(arr)