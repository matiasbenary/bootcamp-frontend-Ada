// const nombre = "Matias";
// const nombreIndice = "apellido";
// const persona = {
//   nombre: nombre,
//   apellido: "Benary",
//   edad: 25,
//   leguajes: ["PHP", "HTML", "JS"],
//   test: {
//     tetera: "para hacer te",
//   },
// };

// // Se puede agregar mas propiedades de la siguiente forma
// persona.trabajo = ["ADA", "fonselp"];
// // Para acceder a una propideda de forma estatica usamos el punto
// console.log(`Hola ${persona.nombre} ${persona.apellido}`);
// // Para acceder a una propiedad de forma dinamica usamos corchete,dentro de este puede ir una variable en formato string
// console.log(persona["nombre"]);
// console.log(persona[nombreIndice]);
// console.table(persona);

// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// // Object
// // Por parametro recibe un objeto y te retorna un array con todos lo propiedades de esta.
// console.log(Object.keys(persona));

// const persona2 = {
//   nombre: "Matias",
//   apellido: "Benary",
//   edad: 25,
//   leguajes: ["PHP", "HTML", "JS"],
//   test: {
//     tetera: "para hacer te",
//   },
//   saludar: function () {
//     console.log(this, self, `Hola ${this.apellido}`);
//   },
//   saludarArrow() {
//     console.log(this, `Hola ${persona2.nombre}`);
//   },
// };

// persona2.saludarArrow();

const zises = [50, 75, 100, 120];
const wardrobeLength = 250;

// 50 50 50 50 50
// 50 50 50 50 /75
// 50 50 50 75 /75
// 50 75 75 /75
// 75 75 75 /75
// 50 100 50 50
// 75 75 100
// 100 100 50
// 120 120 50
// 120 120 75
// 120 120 100
// 120 120 120
// const getMaxReps = () => {
//   const min = Math.min(...zises);
//   let aux = 1;
//   let acc = min;
//   while (acc <= wardrobeLength) {
//     acc += min;
//     aux++;
//   }
//   return aux - 1;
// };

// const getMinReps = () => {
//   const max = Math.max(...zises);
//   let aux = 1;
//   let acc = max;
//   while (acc <= wardrobeLength) {
//     acc += max;
//     aux++;
//   }
//   return aux - 1;
// };

// // const max = getMaxReps();
// // const min = getMinReps();
// // const posibility = [];
// // const matriz = [0, 0];
// // console.log(min, max);
// // for (let candElementos = min; candElementos <= max; candElementos++) {
// //   // for (let index = 0; index < zises.length; index++) {
// //   // }
// //   while (true) {
// //     if(zises[ma] )
// //   }
// // }
