// Задание 8. Бинарный поиск
// Напишите функцию для бинарного поиска элемента в отсортированном массиве.

// Первый аргумент — это массив чисел.
// Второй аргумент — это число, которое нужно найти.
// Функция возвращает индекс числа.


function binarySearch(arrayOfNumbers, num) {
    let [left, right] = [0, arrayOfNumbers.length - 1];
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arrayOfNumbers[mid] > num) {
            right = mid - 1;
        } else if (arrayOfNumbers[mid] < num) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([2, 4, 6, 8, 10], 8));
console.log(binarySearch([-10, -5, 0, 5, 10], 0));




// Вход	                        Выход
// [1, 2, 3, 4, 5, 6],  4	    3
// [2, 4, 6, 8, 10],    8	    3
// [-10, -5, 0, 5, 10], 0	    2