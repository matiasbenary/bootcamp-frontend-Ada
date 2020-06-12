const nombres = [
  "Matias",
  "Maria",
  "Giselle",
  "Florencia",
  "Ezequiel",
  "Matias",
  "Maria",
  "Maria",
  "Jose",
  "Jose",
];

// {
//   "Matias": 2,
//   "Maria": 3,
//   "Giselle":1
// }

// 1- verifico que tengo retornar,esto va ser mi acumulador
// 2- tengo que matener mi acumulador en este formato
// 3- siempre debo retornar el acumulador
const cantidadNombres = nombres.reduce((contadorNombre, nombre, indice) => {
  //  {},"Matias",0
  //  {Matias:1},"Maria",1
  //
  //
  //
  console.log(contadorNombre, nombre, indice, contadorNombre[nombre]);
  if (contadorNombre[nombre]) {
    contadorNombre[nombre]++;
  } else {
    contadorNombre[nombre] = 1;
  }
  return contadorNombre;
}, {});

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numChico = numeros.reduce((minNum, numero) =>
  minNum > numero ? minNum : numero
);
