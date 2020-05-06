const numMaximo = 2 ** 53 - 1;
const numMinmo = -(2 ** 53) + 1;

const num1 = 30,
  num2 = 2,
  num3 = 64.5;
num4 = -10;
num5 = 0.1;
num6 = "10";
num7 = NaN;
num8 = Infinity;
num9 = -Infinity;

let resultado;

resultado = num1 + num2;
resultado = num1 - num2;
resultado = num1 * num2;
resultado = num1 ** num2;
resultado = num1 / num2;
resultado = num1 % num2;

Number(num6);
parseInt(num6);
parseFloat(num6);
resultado = (num5 + num3).toFixed(2);

// PI
resultado = Math.PI;
// redondeo
resultado = Math.floor(2.99);
//  raiz cuadrada
resultado = Math.sqrt(144);
// absolutp
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

test = test + 1;
test += 1;
test++;
