//Подсчёт количества свойств объекта
//Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

//console.log(count(user)); // 2

//Максимальная зарплата
//У нас есть объект salaries с зарплатами:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(x) {
  let max = 0;
  let best = null;
  for (let name of Object.keys(x)) {
    //console.log(value);
    if (x[name] > max) {
      max = x[name];
      best = name;
    }
    //console.log(x[name]);
  }
  return best;
}
console.log(topSalary(salaries));

//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//Если объект salaries пустой, то нужно вернуть null.
