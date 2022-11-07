//1. Напишите следующую функцию, которая принимает некий массив данных.

//если в массиве только строковый тип данных, то функция должна находить самую длинную строку и возвращать массив из двух элементов - эту строку и её индекс исходном массиве

//если в массиве только цифры, то функция должна находить самую большую цифру и возвращать массив из двух элементов - из этой цифры и её индекса в исходном массиве

//во всех остальных случаях (если там другие типы данных или же они смешаны), то функция должна возвращать массив из двух элементов - первый это строка 'неверный тип данных в массиве', а второй элемент это общая длина массива.

let array0 = [1, 45, 67, 89, 98, 67];
let array1 = ["rytyt", "too", "love", "peace"];
let array2 = [true, false];
let array3 = [];
let array4 = [45, 78, true, false, "homework"];
let array5 = [-3, -6, -2, -3];
let array6 = [""];

function foobar(array) {
  let strings = true;
  let numbers = true;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element != "string") {
      strings = false;
    }
    if (typeof element != "number") {
      numbers = false;
    }
  }
  console.log(array);
  console.log(strings);
  console.log(numbers);
  if (strings == false && numbers == false) {
    return ["неверный тип данных в массиве", array.length];
  }
  if (strings == true && numbers == true) {
    return ["неверный тип данных в массиве", array.length];
  }
  if (strings == false && numbers == true) {
    let maxNum = array[0];
    let index = 0;
    for (let j = 1; j < array.length; j++) {
      const element = array[j];
      if (element > maxNum) {
        maxNum = element;
        index = j;
      }
    }
    return [maxNum, index];
  }
  if (strings == true && numbers == false) {
    let longString = "";
    let index = 0;
    for (let y = 0; y < array.length; y++) {
      const element = array[y];
      if (element.length > longString.length) {
        longString = element;
        index = y;
      }
    }
    return [longString, index]
  }
}

console.log(foobar(array0));
console.log(foobar(array1));
console.log(foobar(array2));
console.log(foobar(array3));
console.log(foobar(array4));
console.log(foobar(array5));
console.log(foobar(array6));


