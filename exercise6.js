// Задание 6. Шифр ​​Цезаря
// Существует алфавит, состоящий из букв: a, b, c, d, e, f. Каждая буква алфавита может быть заменена по следующему правилу: a = def, b = efc, c = abe, d = cba, e = fba, f = dcb.

// Напишите функцию, которая принимает строку (состоящую из этого алфавита) в качестве первого аргумента и число (сколько раз нужно применить преобразование) в качестве второго.

// Функция возвращает строку после применения преобразований.

const map = {
    a: 'def',
    b: 'efc',
    c: 'abe',
    d: 'cba',
    e: 'fba',
    f: 'dcb'
}

function alphabetMap(rawString, mapCount) {
    for(; mapCount > 0; mapCount--) {
        let temp = '';
        for(ch of rawString) {
            temp += map[ch];
        }
        rawString = temp;   
    }

    return rawString;
}

console.log(alphabetMap('aa', 2));




// Вход	            Выход
// "abcdef" 1	    defefcabecbafbadcb
// "аа"     2	    cbafbadcbcbafbadcb
// "bad"    1	    efcdefcba