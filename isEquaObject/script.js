//Напишите функцию, которая поверхностно сравнивает два объекта.
//Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

function isEqual(obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  for (let key in obj2) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const data = { a: 1, b: 1 };
const data1 = { a: 1, b: 1, c:3 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data1)); // false
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false

