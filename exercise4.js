// Задание 4. Нахождение простых чисел
// Напишите функцию, которая находит все натуральные простые целые числа, используя алгоритм решета Эратосфена .

// Функция принимает в качестве аргумента кортеж, где первый элемент — это начало диапазона (не менее 2), а второй — конец диапазона (также не менее 2).
// Функция возвращает новый массив простых чисел.

function getSimpleNumbers(touple) {
    const [start, end] = touple;

    const isPrime = new Array(end + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= end; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= end; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const result = [];
    for (let i = Math.max(start, 2); i <= end; i++) {
        if (isPrime[i]) {
            result.push(i);
        }
    }

    return result;
}

console.log(getSimpleNumbers([2, 10]));
console.log(getSimpleNumbers([2, 2]));


// Вход	        Выход
// [2, 10]	    [2, 3, 5, 7]
// [2, 2]	    [2]