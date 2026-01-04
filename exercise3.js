// Задание 3. Нахождение НОД
// Напишите функцию, которая находит наибольший общий делитель (НОД) двух неотрицательных натуральных целых чисел, переданных в качестве первого и второго параметров, используя алгоритм Евклида .


function getNOD(first, second) {
    try {
        const temp = first % second;
        if(temp === 0) {
            return second;
        } else {
            return getNOD(second, temp);
        }
    } catch {
        return 0;
    }
}

console.log(getNOD(0, 2));
console.log(getNOD(5, 5));
console.log(getNOD(3, 6));
console.log(getNOD(1, 3));
console.log(getNOD(0, 0));


// Вход	Выход
// 0 2	    2
// 5 5	    5
// 3 6	    3
// 1 3	    1
// 0 0	    0