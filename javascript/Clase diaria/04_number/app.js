const numMaximo = 2 ** 53 - 1;
const numMinmo = -(2 ** 53) + 1;
console.log(numMinmo, numMaximo);
const num1 = 30,
  // int
  num2 = 2,
  //   float
  num3 = 64.5,
  num4 = -10,
  num5 = 0.1,
  num6 = "10",
  num7 = NaN,
  num8 = Infinity,
  num9 = -Infinity,
  num10 = "10.5";

let resultado;

resultado = num1 + num2;
resultado = num1 - num2;
resultado = num1 * num2;
resultado = num1 ** num2;
resultado = num1 / num2;
// Modulo, resto de la division  5/2 2.5, 5%2 1 ,5-4 = 1
resultado = num1 % num2;

Number(num6);
parseInt(num6);
parseFloat(num6);
resultado = (num5 + num3).toFixed(2);
resultado = +(num5 + num3).toFixed(2) + 4;
resultado = Number((num5 + num3).toFixed(2)) + 4;

// PI
resultado = Math.PI;
// redondeo
resultado = Math.floor(2.99);
resultado = Math.round(2.99);
resultado = Math.ceil(2.99);
//  raiz cuadrada
resultado = Math.sqrt(144);
// absoluto
resultado = Math.abs(num4);
// potencia
resultado = Math.pow(8, 3);
// min
resultado = Math.min(15, 698, 8, 5, -5);
// max
resultado = Math.max(15, 698, 8, 5, -5);
// random
resultado = Math.random();

let test = 5;

test = test + 1; //6
test += 1; //7
test++; //8
