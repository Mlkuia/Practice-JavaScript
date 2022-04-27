// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

a = 587
sqrt = Math.sqrt(a)
max = Math.ceil(sqrt)
min = Math.floor(sqrt)

let obj = {

}

obj.floor = min
obj.ceil = max

console.log(obj.floor, obj.ceil)
console.log(obj)