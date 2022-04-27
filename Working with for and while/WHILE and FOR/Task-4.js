// С помощью цикла найдите сумму чисел от 1 до 100. Решите эти задачи сначала через цикл while, а затем через цикл for.

let number = 1;
var b = 0;
while (number <= 100) {
    b = b + number;
    number++;
}
console.log(b);

console.log("РАЗДЕЛИТЕЛЬ---------------------------------------")

for (number; number <= 100; number++) {
    b = b + number;
}
console.log(b);