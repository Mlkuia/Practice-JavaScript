// Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

let obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}
for (key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`)
}