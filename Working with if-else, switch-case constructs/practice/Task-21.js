// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str = "123456"
let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2])
let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5])
if (sum1 == sum2) {
    alert('Да')
} else {
    alert('Нет')
}