// Задание 10. Нахождение самой длинной последовательности нулей.
// Напишите функцию, которая принимает строку из нулей и единиц и возвращает длину самой длинной последовательности нулей.


function getMaxZeroCount(raw) {
    return Math.max(...raw.split("1").map(n => n.length));
}

console.log(getMaxZeroCount("1010010001"))
console.log(getMaxZeroCount("100100100"))
console.log(getMaxZeroCount("11111"))



// Вход	            Выход
// "1010010001"	    3
// "100100100"	    2
// "11111"	        0