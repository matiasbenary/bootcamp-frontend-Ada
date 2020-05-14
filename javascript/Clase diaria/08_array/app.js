// Array es un objeto que contiene ninguno o varios elementos

const numeros = [12, 20, 35, 47, 5, 6, 7, 8, 9];

const meses = new Array("ene", "feb", "mar", "abr");

const remix = [1, "soy un simple texto", null, meses, numeros];

// console.log(meses[1]);
// // El indice es el valor que hace referencia a una variable dentro del array,es decir,es la posicion donde esta el valor - by Vale.
// console.log(remix);
// console.log(remix[0]);
// console.log(remix[3][0]);
// console.log("largo:", numeros.length);

// for (let i = 0; i < meses.length; i++) {
//   console.log(meses[i]);
// }
console.log("Es un array?", Array.isArray(numeros));
console.log("meses", meses);
console.log("enero", meses[0]);
meses[4] = "may";
// push me agrega al final y unshift al principio
meses.push("jun");
meses.unshift("PreEnero");
console.log(meses);

// Elimina el ultimo elemento del array
meses.pop();
// Elimina el primer elemento del array
meses.shift();

console.log(meses);

console.log("Donde esta Marzo:", meses.indexOf("mar"));
// splice recive tres parametros,ultimo opcional, donde el primero es donde comienza,el segundo es la cantidad a reemplazar-borrar y el ultimo es un opcional del elemento que voy a borrar
//  "ene", "feb", "mar", "abr", "may"
//    0     1       2       3    4
//                  primer parametro
//                  c1    c2
// splice me devolver los valores que saco,en este caso ,marzo y abril
//  pero me modifico meses y ahora ya no tienen marzo ni abril
meses.splice(2, 2);
console.log("Saquemos dos elementos,marzo y abril", meses);
console.log("De cabeza", meses.reverse());
console.log("vamos a unir:", meses.concat(numeros));
console.log("vamos a ordenar:", meses.sort());

const numerosDesordenados = [12, 32, 213, 1412, 85, 263, 75, 38, 69];
console.log(numerosDesordenados.sort());
console.log(
  "vamos a ordenar:",
  numerosDesordenados.sort((x, y) => x - y)
);
