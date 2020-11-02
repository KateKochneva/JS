//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,operation
//– строка с названием операции. В зависимости 
//от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).*/

let arg1 = +prompt('Введите первый аргумент');
let arg2 = +prompt('Введите второй аргумент');
let operation = prompt('Введите название операции');


function mathOperation(arg1, arg2, operation){
  switch(operation) {
    case 'сложение':
      return 'сумма: ' + summa(arg1, arg2);
    case 'разность':
      return 'разность: ' + subtraction(arg1, arg2);
    case 'деление':
      return 'частное: ' + multiplication(arg1, arg2);
    case 'умножение':
      return 'произведение: ' + division(arg1, arg2);
  }
}


let c = mathOperation(arg1, arg2, operation);
alert(c);

