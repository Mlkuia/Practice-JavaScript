// Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

let fact = 1;
let num = 5;
for (i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log(fact);