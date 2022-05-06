// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.

let arr = [1, 2, 3, 4, 5, 6, 5]
let flag = false
for (i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) { // ??????
        flag = true
        break
    }
}
if (flag) {
    console.log('Да')
} else {
    console.log('Нет')
}