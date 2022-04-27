// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let arr = [12, 15, 20, 25, 59, 79];
let num = 0;
for (var i = 0; i < arr.length; i++) {
    num += arr[i]
}
let average = num / arr.length;
console.log(average);