/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/



const basketItems = ['Пианино', 'Пианино', 'Кофеварка', 'Пылесос'];
const ItemsCost = [['Пианино', 30000], ['Кофеварка', 2600], ['Пылесос', 40000]];



function getItemPrice(item, array){
  const items = [];
  const costs = [];
  // предполагаем, что мы знаем структуру массива со стоимостями товара, поэтому разбиваем его на 2 одномерных массива
  for (let i = 0; i < array.length; i++) {
    items.push(array[i][0]);
    costs.push(array[i][1]);
  }
  // используя метод .indexOf получаем индекс товара в массиве с названиями товаров и возвращаем стоимость по этому индексу из массива цен
  return costs[items.indexOf(item)];
};




function countBasketPrice (basketArr, costArr){
  let totalCost = 0;
  for (let i = 0; i < basketArr.length; i++) {
    // на каждой итерации обхода массива корзины обращаемся к функции получения стоимости единицы товара.
    totalCost += getItemPrice(basketArr[i], costArr);
  }
  return totalCost;
};
console.log('Массив корзины: ' + basketItems);
console.log('Массив стоимости каждого товара: ' + ItemsCost);
console.log('Вывод полной стоимости корзины: ' + countBasketPrice(basketItems, ItemsCost));