// Задание 1
// let a = 5;
// let b, c;

// b = (a * 5);
// b = (c = (b / 2));

// alert(`a=${a}, b=${b}, c=${c}`);

// Задание 2.

// let yourAge = +prompt("Введите Ваш возраст");
// alert(` Год Вашего рождения ${2023 - yourAge}`);

// Задание 3.

// let degreeFarengeit = +prompt("Введите Вашу температуру в F");

// if (degreeFarengeit > 79.7 && degreeFarengeit < 104) {
//   alert(
//     `Ваша температура в градусах Цельсия составит ${(
//       (degreeFarengeit - 32) *
//       (5 / 9)
//     ).toFixed(1)} градусов`
//   );
// } else {
//   alert("Вы точно живы?");
// }
// let degreeCelsius = +prompt(`Введите Вашу температуру в C`);
// if (degreeCelsius > 26.5 && degreeCelsius < 40) {
//   alert(
//     `Ваша температура в Фаренгейтах составит ${(
//       1.8 * degreeCelsius +
//       32
//     ).toFixed(1)} градусов`
//   );
// } else {
//   alert("Вы точно живы?");
// }

// Задание 4.

// let firstValue = +prompt("Введите значение 1");
// let secondValue = +prompt("Введите значение 2");
// alert(`Результат ${Math.round(firstValue / secondValue)}`);

// Задание 5.

// const sell = 36.5;
// const buy = 36.0;
// alert(`Курс валют на сегодня:\n
//  Покупка - ${sell} грн. за единицу валюты\n
//  Продажа - ${buy} грн. за единицу валюты`);

// let b = +prompt(`Продать валюту по курсу ${buy}.
// Введите сумму валюты, которую Вы хотите продать:`);
// if (b > 0) {
//   alert(`В результате продажи Вы получите ${(b * buy).toFixed(2)} в гривнах.`);
// } else {
//   alert("Ну и шо ты собрался продать?");
// }

// let c = +prompt(`Купить валюту по курсу ${sell}.
// Введите сумму валюты, которую Вы хотите купить:`);
// if (c > 0) {
//   alert(`Приготовьте ${(c * sell).toFixed(2)} гривен`);
// } else {
//   alert("Ну и шо ты собрался купить?");
// }

// Задание 6.
// alert(`Для расчета Вы должны использовать целые положительные числа`);
// let colourRed = +prompt(`Введите значение red`);
// let colourGreen = +prompt(`Введите значение green`);
// let colourBlue = +prompt(`Введите значение blue`);

// if (
//   Number.isInteger(colourRed) &&
//   colourRed >= 0 &&
//   Number.isInteger(colourGreen) &&
//   colourGreen >= 0 &&
//   Number.isInteger(colourBlue) &&
//   colourBlue >= 0
// ) {
//   alert(
//     `Ваш CSS-цвет в формате #RRGGBB:
//      "#"${String(colourRed).slice(0, 2)}${String(colourGreen).slice(
//       0,
//       2
//     )}${String(colourBlue).slice(0, 2)}`
//   );
// } else alert(`Попробуйте еще раз`);

// Задание 7.
// let floorAmount = +prompt("Введите количество этажей в доме");

// let apartOnTheFloor = +prompt("Введите количество квартир на этаже");

// let numOfApart = +prompt("Введите номер квартиры ");

// kvartirvPodjezde = floorAmount * apartOnTheFloor;

// alert(`Ваша квартира расположена в подьезде №: ${
//   1 + Math.trunc((numOfApart - 1) / (floorAmount * apartOnTheFloor))
// } на этаже №: ${Math.trunc(
//   1 + ((numOfApart - 1) % (floorAmount * apartOnTheFloor)) / apartOnTheFloor
// )}
// `);
