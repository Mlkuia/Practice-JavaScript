// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

let test = prompt("Введите текст (true = false)")
if (test != 'true') {
    alert("Верно")
} else {
    alert("Неверно")
}

let testMore = prompt("Введите текст (true = false)")
if (testMore != 'true') alert('Верно'); else alert('Неверно');