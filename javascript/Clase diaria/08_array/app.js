const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const meses = new Array("ene", "feb", "mar", "abr");

const remix = [1, "soy un simple texto", null, meses, numeros];

console.log("largo:", numeros.length);
console.log("Es un array?", Array.isArray(numeros));
console.log("meses", meses);
console.log("enero", meses[0]);
meses[4] = "may";
meses.push("jun");
meses.unshift("PreEnero");
console.log(meses);

// Elimina el ultimo elemento del array
meses.pop();
// Elimina el primer elemento del array
meses.shift();

console.log(meses);

console.log("Donde esta Marzo:", meses.indexOf("mar"));
console.log("Saquemos dos elementos,marzo y abril", meses.splice(2, 2));
console.log("De cabeza", meses.reverse());
console.log("vamos a unir:", meses.concat(numeros));
console.log("vamos a ordenar:", meses.sort());

const numerosDesordenados = [12, 32, 213, 14, 85, 26, 75, 38, 69];

console.log(
  "vamos a ordenar:",
  numerosDesordenados.sort((x, y) => x - y)
);
