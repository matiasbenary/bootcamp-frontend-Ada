const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // forEach es para recorre elementos
// numeros.forEach((numero) => {
//   console.log(numero);
// });

// // map es para crear un nuevo array modificando el viejo
// const numeros15 = numeros.map((numero) => {
//   return numero + 15;
// });

// console.log(numeros15);

// // filter me retorna un array con los elemento que pasaron una condicion
// const numerosFilter = numeros.filter((numero) => {
//   return numero >= 5;
// });

// console.log(numerosFilter);

//  reduce se usa para hacer calculo sobre el array, sumaTotal,concatenar elemento
//  1 , 2
//  3 , 3
//  6 , 4

// const sumaTotal = (acumulador, numero, indice) => {
//   console.log("ronda ", indice, "acumulador", acumulador, "numero", numero);
//   return acumulador + numero;
// };

// console.log(numeros);
// const numeroTotal = numeros.reduce(sumaTotal, 15);

// console.log(numeroTotal);

// const cuenta = numeros
//   .map((numero) => numero + 15)
//   .filter((numero) => numero >= 20)
//   .reduce(sumaTotal, 15);

// console.log(cuenta);
// for of para el valor
for (const numero of numeros) {
  console.log(numero + 12);
}
// for in para el indice
for (const numero in numeros) {
  console.log(numero);
}

const personaje = {
  nombre: "Leia",
  apellido: "Skywalker",
  profecion: "jedi",
  edad: 23,
};

// compara con otro objeto
for (const atributos in personaje) {
  console.log(atributos);
  console.log(personaje[atributos]);
}

const checkLadoOscuro = (personaje) => {
  const personaje2 = Object.assign({}, personaje);
  if (personaje2.profecion == "jedi") {
    personaje2.ladoOscuro = false;
  } else {
    personaje2.ladoOscuro = true;
  }
  return personaje2;
};
const personaje2 = checkLadoOscuro(personaje);
console.log(personaje);
console.log(personaje2);
