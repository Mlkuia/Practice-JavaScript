// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function result(chislo) {
    if (chislo > 0 && chislo < 8) {
        if (chislo == 1) {
            return 'Понедельник'
        } if (chislo == 2) {
            return 'Вторник'
        }
        if (chislo == 3) {
            return 'Среда'
        }
        if (chislo == 4) {
            return 'Четверг'
        }
        if (chislo == 5) {
            return 'Пятница'
        }
        if (chislo == 6) {
            return 'Суббота'
        }
        if (chislo == 7) {
            return 'Воскресенье'
        }
    } else {
        return 'Введите число от 1 до 7'
    }
}
result()