// Array es un objeto que contiene ninguno o varios elementos

const numeros = [12, 20, 35, 47, 5, 6, 7, 8, 9];

const meses = new Array("ene", "feb", "mar", "abr");

const remix = [1, "soy un simple texto", null, meses, numeros];
// // El indice es el valor que hace referencia a una variable dentro del array,es decir,es la posicion donde esta el valor - by Vale.
// console.log(remix);
// console.log(remix[0]);
// console.log(remix[3][0]);
// console.log("largo:", numeros.length);

// for (let i = 0; i < meses.length; i++) {
//   console.log(meses[i]);
// }
// console.log("Es un array?", Array.isArray(numeros));
// console.log("meses", meses);
// console.log("enero", meses[0]);
// meses[4] = "may";
// meses.push("jun");
// meses.unshift("PreEnero");
// console.log(meses);

// // Elimina el ultimo elemento del array
// meses.pop();
// // Elimina el primer elemento del array
// meses.shift();

// console.log(meses);

// console.log("Donde esta Marzo:", meses.indexOf("mar"));
// console.log("Saquemos dos elementos,marzo y abril", meses.splice(2, 2));
// console.log("De cabeza", meses.reverse());
// console.log("vamos a unir:", meses.concat(numeros));
// console.log("vamos a ordenar:", meses.sort());

// const numerosDesordenados = [12, 32, 213, 14, 85, 26, 75, 38, 69];

// console.log(
//   "vamos a ordenar:",
//   numerosDesordenados.sort((x, y) => x - y)
// );
