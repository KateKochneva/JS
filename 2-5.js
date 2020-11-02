/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');

function summa(a, b) {
  return (a + b);
}
let sum = summa(a, b);

alert("Сумма двух чисел: " + sum);

function subtraction(a, b) {
  return (a - b);
}
let subtr = subtraction(a, b);
alert("Вычитание двух чисел: " + subtr);

function multiplication(a, b) {
  return (a * b);
}
let mult = multiplication(a, b);
alert("Произведение двух чисел: " + mult);


function division(a, b) {
  return (a / b);
}
let div = division(a, b);
alert("Деление двух чисел: " + div);


