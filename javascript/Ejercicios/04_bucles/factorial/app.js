// const esImpar = (num) => num % 2; //si par 0 si es impar 1

// for (let numero = 0; numero <= 20; numero++) {
//   if (esImpar(numero)) {
//     console.log(numero);
//   }
// }
const numeroUsuario = Number(prompt("ingresa un numero factorial"));
let numeroFactorial = 1;

//  4*3*2*1 numero-- => numero -= 1 => numero = numero -1
for (let numero = numeroUsuario; numero >= 1; numero--) {
  numeroFactorial *= numero;
}
console.log(numeroUsuario, numeroFactorial);
