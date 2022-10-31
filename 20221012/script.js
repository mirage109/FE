//Напишите функцию, которая будет проверять тип данных (typeof someValue) и если это будет строка, то проверять сколько в ней символов, возвращать (return) результат (количество символов в строке - число).
function dataType(param){
    if (typeof param == "string"){
        return param.length
    }
//если это значение присланное в функцию будет число, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованной из числа строке.
    if (typeof param == "number"){
        return String(param).length
    }
//если это значение присланное в функцию будет boolean - true или false, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованном из boolean значения строке.
    if (typeof param == "boolean"){
        return String(param).length
    }
//если тип данных не строка и не число и не boolean, то функция должена вернуть строку  'неверный тип данных'
    return 'Invalid data type'
}
console.log(dataType("Sasha"));
console.log(dataType(-178));
console.log(dataType(true));
console.log(dataType(false));
console.log(dataType(null));
