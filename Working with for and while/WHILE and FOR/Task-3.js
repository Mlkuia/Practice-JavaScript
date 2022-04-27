// Выведите столбец четных чисел в промежутке от 0 до 100.  Решите эти задачи сначала через цикл while, а затем через цикл for.

let number = 0
while (number < 100) {
    number += 2;
    console.log(number)
}

console.log("РАЗДЕЛИТЕЛЬ---------------------------------------")

for (number = 2; number <= 100; number += 2) {
    console.log(number)
}