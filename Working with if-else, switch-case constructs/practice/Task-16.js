// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = prompt("Введите число от 1 до 31")
if (day >= 1 && day <= 10) {
    alert("Первая декада")
} else if (day >= 11 && day <= 20) {
    alert("Вторая декада")
} else {
    alert("Третья декада")
}