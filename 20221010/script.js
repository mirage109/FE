// При помощи цикла for выведите чётные числа от 2 до 10.
// Для проверки на чётность используйте оператор получения остатка от деления % - if (i % 2 == 0)

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Заменить for на while
// for (let i = 0; i < 3; i++) {
// console.log( number ${i}! );
// }

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}
