// noExisteFuncion("hola");
// console.log("hola");

// try {
//   noExisteFuncion("hola");
// } catch (error) {
//   console.error(error);
// }
// console.log("hola");

try {
  noExisteFuncion("hola");
} catch (error) {
  console.error(error);
} finally {
  console.log("Soy otro texto");
}
