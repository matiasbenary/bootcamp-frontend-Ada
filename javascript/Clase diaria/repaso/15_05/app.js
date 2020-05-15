// Funcion, es una instruccion que dentro tiene mas instrucciones,este puede tener una entrada que son los parametros de entrada y me devuelve una salida,que es el resultado esperado.
//  Una funcion tiene que hacer solo una cosa y ser claro con el nombre
/*
const hornerar = (mezclaDeTorta, tiempoDeHorneado = 60) => {
  if (mezclaDeTorta == "vainilla") {
    return "torta Vainilla y tardo " + tiempoDeHorneado;
  } else {
    return "torta Chocolate";
  }
};

const torta = hornerar("vainilla");
console.log(torta);

const licuar = (ingrediente1, ingrediente2, ingrediente3) => {
  return `Licuado con ${ingrediente1},${ingrediente2},${ingrediente3}`;
};

console.log(licuar("banana", "manzana", "frutilla"));

const mixFrutal = licuar("banana", "manzana", "frutilla");

let vaso = "Sin rellenar";
console.log(vaso);
const rellenarVaso = (liquido) => {
  vaso = liquido;
};

rellenarVaso(mixFrutal);
console.log("El vaso tiene:", vaso);
rellenarVaso("Agua");
console.log("El vaso tiene:", vaso);
*/
//Un condicional me va el flujo del programa,segun una afirmacion o negacion se va optar por un camino o el otro,es decir que se va tomar una decision segun una condicion que esta es verdadera o falsa
// una condición siempre te va a devolver true or false -by Vale
// para que sean verdaderas: true,1 2 5 6, "Hola como estas"
// para que sean falsa: false,null,undefined,NaN,""

// if ("") {
//   console.log("sigo el camino verdadero");
// } else {
//   console.log("sigo el camino oscuro");
// }

// == === != !== < <= > >=
// if ("15" == 15) {
//   console.log("somos iguales");
// }
// console.log(typeof "15", typeof 15);
// if ("15" === 15) {
//   console.log("somos iguales");
// }

// if ("15" != 15) {
//   console.log("somos iguales");
// } else {
//   console.log("somos diferentes");
// }
// console.log(typeof "15", typeof 15);
// if ("15" !== 15) {
//   console.log("no somos extrictamente diferentes");
// } else {
//   console.log("somos diferentes");
// }
// Operador ternario (condicion) ? Si es verdadero : Si es falso
// const test = 16 < 17 ? "Si es verdadero" : "Si es falso";

// console.log(test);

// const nombre = "pepito";

// if (nombre == "Matias") {
//   console.log("Hola Matias");
// } else if (nombre == "Tomas") {
//   console.log("pedir tarea");
// } else if (nombre == "pepito") {
//   console.log("entregar trabajo");
// } else {
//   console.log("nombre invalido");
// }
// case traducilo como: En caso de que pase.. esto, hacer esto. - by Iris
//  nombre=== case
//  nombre==="Matias"
//  nombre==="Tomas"
//  nombre==="pepito"

// switch (nombre) {
//   case "pepito":
//     console.log("Hola Matias");
//     break;
//   case "Tomas":
//     console.log("pedir tarea");
//     break;
//   case "pepito":
//     console.log("entregar trabajo");
//     break;
//   default:
//     console.log("nombre invalido");
// }

// Bucle es algo repite hasta el infinito hasta que algo lo hace parar.

// For se usa cuando tengo un cantidad exactas de repeticiones
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Se usa cuando nose cuantas veces se tiene que hacer algo

// let esCruz = true;
// while (esCruz) {
//   // 0 a 1 0.15 0.25 0.8
//   if (Math.random() >= 0.95) {
//     console.log("cara");
//     esCruz = false;
//   } else {
//     console.log("cruz", "tirar de vuelta");
//   }
// }

// Un array es un conjunto de variables o valores que se guardan en un referencia de memoria.

// const nombre = "Matias";

// const nombres = [nombre, "Flor", "Iris", "Vale", "Mika", "Belu", "Caro"];
// // agrega al final
// nombres.push("Tomas");
// nombres.push("Pepito");
// // modifico el indice 3 y el 1.
// nombres[9] = "Juan";
// nombres[1] = "Tomasito";

// for (let i = 0; i < nombres.length; i++) {
//   if (nombres[i] == "Pepito") {
//     console.log("Vos tenes nombre de galletita");
//   }
//   console.log(nombres[i]);
// }

// console.log(nombres.sort());

const numeros = [1, 58, 65, 32, 98, 45, 15, 62];

let numeroGrande = -Infinity;
for (let i = 0; i < numeros.length; i++) {
  // numeros[1] = 58
  console.log(
    `pasos ${i},Valor mas grande ${numeroGrande},valor actual ${numeros[i]}`
  );
  numeroGrande = numeroGrande <= numeros[i] ? numeros[i] : numeroGrande;
}

console.log(numeroGrande);

let sumaNumeros = 0;
for (let i = 0; i < numeros.length; i++) {
  sumaNumeros += numeros[i];
  console.log("Estoy dentro del for", sumaNumeros);
}
console.log(sumaNumeros);
