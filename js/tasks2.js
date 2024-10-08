/*****************************************************************************************************/
/*******                                                                                       *******/
/*******                              Задачи на JS ( часть 2 )                                 *******/
/*******                                                                                       *******/
/*****************************************************************************************************/

// Дано целое число A. Проверить истинность высказывания: «Число A является нечетным»
function oddNumber(A){
  return Boolean(A % 2)
}

// Дана масса M в килограммах. Используя операцию деления нацело, 
// найти количество полных тонн в ней (1 тонна = 1000 кг)
// Если передоваемое число менше нуля вывести строку формата "Число должно быть больше чем 0" 
function massInKilograms(K){
  return K > 0 ? Math.floor(K/1000) : "Число должно быть больше чем 0"
}

// Даны стороны прямоугольника a и b. Найти его площадь S=a*b и периметр P=2*(a+b)
// Фомат строки:
// S = 12
// P = 14
function areaPerimeter(A, B){
  return `S = ${A * B}\nP = ${(A + B) * 2}`
}

// Дан размер файла в байтах. Используя операцию деления нацело, 
// найти количество полных килобайтов, которые занимает данный файл (1 килобайт = 1024 байта)
function bytesSize(b){
  return Math.floor(b/1024)
}

// Дано целое число A. Проверить истинность высказывания: «Число A является четным»
function evenNumber(A){
  return A%2 == 0
}

// Даны десять вещественных чисел в формате сторки "9 5 1 4 14 2 0 6 32 111". 
// Найти их сумму и вернуть число
function sumTenNumbers(A){
  A = A.split(" ")
  let res = 0
  for (var i = 0; i < A.length; i++) {
      res += (parseInt(A[i])) 
  }
  return res
}

// Подается строка чисел, вывести в консоль эти числа в кубе. Формат:
// Число 5 в кубе = 125
// Число 3 в кубе = 27
// Число 1 в кубе = 1
// Число 2 в кубе = 8
// Число 6 в кубе = 216
function numbersIn3(A){
  for (var i = 0; i < A.length; i++) {
    console.log(`Число ${parseInt(A[i])} в кубе = ${Math.pow(parseInt(A[i]), 3)}`)
  } 
}

// Описать функцию CircleS(R), находящую площадь круга радиуса R. 
// Площадь круга радиуса R вычисляется по формуле S=π*R^2. 
// В качестве значения π использовать 3.14
function circleSquare(r){
  return 3.14 * Math.pow(r, 2)
}

// Дана длина ребра куба a. Найти объем куба V=a^3 и площадь его поверхности S=6*a^2
// return сторока формата: "Объем куба V = 27, Площадь его поверхности S = 54"
function squareSurface(a){
  let square = Math.pow(a, 3)
  let surface = 6 * Math.pow(a, 2)
  return `Объем куба V = ${square}, Площадь его поверхности S = ${surface}`
}

// Даны целые положительные числа A и B (A > B). На отрезке длины A размещено 
// максимально возможное количество отрезков длины B (без наложений). 
// Используя операцию деления нацело, найти количество отрезков B, размещенных на отрезке A
// Формат строки: "Количество отрезков B, размещенных на отрезке A = 4"
function segmentsInSegment(A, B){
  return `Количество отрезков B, размещенных на отрезке A = ${Math.floor(A / B)}`
}

// Даны два целых числа: A, B. Проверить истинность высказывания: 
//«Справедливы неравенства A ≥ 0 или B < –2»
// Формат строки: "Неравенства A ≥ 0 или B < –2 ложны, при A=-3 B=7"
function inequalityAreFair(A, B){
  let res = A >= 0 || B < -2 ? "справедливы" : "ложны"
  return `Неравенства A ≥ 0 или B < –2 ${res}, при A=${A} B=${B}`
}

// Даны три целых числа: A, B, C. Проверить истинность высказывания: 
// «Справедливо двойное неравенство A < B < C»
function doubleInequality(A, B, C){
  return A < B && B < C
}

// Дано целое число. Если оно является положительным, то прибавить к нему 1; 
// если отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10.
function numMath(N){
  return N == 0 ? 10 : N > 0 ? N +=1 : N -=2
}

// Дан номер месяца (1 — январь, 2 — февраль и т. д.). 
// Вернуть название соответствующего времени года («зима», «весна», «лето», «осень»)
// Если число менше 1 или больше 12 "Ошибка"
function timeOfYear(month){
  let result
  switch(month) {
    case 12: case 1: case 2: result = 'Зима'; break;
    case 3: case 4: case 5: result = 'Весна'; break;
    case 6: case 7: case 8: result = 'Лето'; break;
    case 9: case 10: case 11: result = 'Осень'; break;
    default: result = 'Ошибка';
  }
  return result
}

// Единицы массы пронумерованы следующим образом: 1 — килограмм, 2 — миллиграмм, 3 — грамм, 4 — тонна, 5 — центнер. 
// Дан номер единицы массы (целое число в диапазоне 1–5) и масса тела в этих единицах (вещественное число). 
// Найти массу тела в килограммах
// Если единица массы менше 1 или больше 5 "Ошибка"
function massKg(A, B){
  let result
  switch(A) {
    case 1: result = B; break;
    case 2: result = B / 1000000; break;
    case 3: result = B / 1000; break;
    case 4: result = B * 1000; break;
    case 5: result = B * 100; break;
    default: B = 'Ошибка';
  }
  return result
}


// Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1, 2, 3 кг конфет
function  priceSweets(cost){
  console.log(cost * 1)
  console.log(cost * 2)
  console.log(cost * 3)
}