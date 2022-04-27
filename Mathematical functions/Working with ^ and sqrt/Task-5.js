// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr = [4, 2, 5, 19, 13, 0, 10]
let result = 0;
for (i = 0; i < arr.length; i++) {
    result += Math.pow(arr[i], 3);
}
console.log(Math.sqrt(result));