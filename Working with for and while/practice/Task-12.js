// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr = [10, 20, 30, 50, 235, 3000]
for (i = 0; i < arr.length; i++) {
    arr[i] = String(arr[i])
    if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) {
        console.log(arr[i])
    }
}

