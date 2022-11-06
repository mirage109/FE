//1) Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//То есть дефисы удаляются, а все слова после них получают заглавную букву.
//Примеры:
//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//camelize("-webkit-transition") == 'WebkitTransition';
//P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
let string = "my-short-string";
let string2 = "background-color";
let string3 = "list-style-image";
let string4 = "-webkit-transition";
//console.log(string);
//console.log(string.split("-"));

function camelize(str) {
  //console.log(str.split("-").join("").toUpperCase());
  let result = "";
  let array = str.split("-");
  for (let index = 0; index < array.length; index++) {
    const word = array[index];
    //console.log(word);
    for (let j = 0; j < word.length; j++) {
      const bukva = word[j];
      if (j == 0 && index != 0) {
        //console.log(bukva.toUpperCase());
        result += bukva.toUpperCase();
      } else {
        //console.log(bukva);
        result += bukva;
      }
    }
  }
  return result;
}

console.log(camelize(string));
console.log(camelize(string2));
console.log(camelize(string3));
console.log(camelize(string4));

//2) Задача: написать функцию, принимающую массив чисел
//и возвращающую сумму всех его положительных элементов и отрицательных
//чисел отдельно в виде нового массива
//например функция принимает как аргумент следующий массив
//arr = [1, -2, 3, 4, -9, 6]
//и должна вернуть [14, -11]
let arr = [1, -2, 3, 4, -9, 6];

function sumPosNeg(array) {
  let sumNeg = 0;
  let sumPos = 0;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num < 0) {
      sumNeg += num;
    }
    if (num > 0) {
      sumPos += num;
    }
  }
  let result=[sumPos, sumNeg]
  //console.log(sumPos);
  //console.log(sumNeg);
  //console.log(result);
  return result;
}

console.log(sumPosNeg(arr));