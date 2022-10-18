//Сравнить две константы двумя разными способами:
// Создать две константы, присвоив одной значение строкового типа, а второй числового
// Сравнить эти константы и вывести в консоль результат типа boolean так, чтобы
// в одном случае ( == ) он был true, а в другом ( === ) false

const text = "4";
const number = 4;
console.log(text == number);
console.log(text === number);

//Реализовать решение задачи в JS:
//У нас есть 100 (создать константу)
//Цена помидоров на рынке - 10 (создать константу)
//Цена огурцов на рынке - 5 (создать константу)
//Цена яблок на рынке - 15 (создать константу)
//Оставшиеся деньги потратим на орехи (создать переменную)

const moneyWeHave = 100;
const tomatosPrice = 10;
const cucumbersPrice = 5;
const applePrice = 15;
let nutSpend;

//Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
//оставшиеся деньги потратили на орехи (присвоить значение переменной)
let marketCard = 2 * (cucumbersPrice + tomatosPrice + applePrice);
nutSpend = moneyWeHave - marketCard;

//сколько денег мы потратили на орехи? (вывести переменную в консоль)
console.log(nutSpend);

//на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)
console.log(nutSpend > marketCard);

//в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
//выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи'

if (nutSpend > marketCard) {
  console.log("Больше потратили на орехи");
} else {
  console.log("Больше потратили на фрукты и овощи");
}
