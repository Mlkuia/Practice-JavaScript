// Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

let arr = [1, 2, 3, 3, 5]
let flag = false
for (i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        flag = true
        break
    }
}
if (flag) { // flag возвращает boolean, поэтому не нужно в проверке указывать if(flag === true)
    console.log("Да"); // если flag true
} else {
    console.log("Нет"); // если false или иных случаях
}