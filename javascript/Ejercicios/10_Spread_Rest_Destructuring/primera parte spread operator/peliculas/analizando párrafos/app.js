// ### **Ejercicio 4**

// - Completá el siguiente código para llegar al resultado esperado (respetar orden).
// - Quiero obtener un único objeto final con todas las propiedades

// ```js
// const reviews = {
//  reviewIMDB: 9,
//  reviewFilmAffinity: 8.1
// };

// const peliInfo = {
//  titulo: 'The Dark Knight',
//  anio: 2008
// };

// const pelicula = // ACA LA SOLUCION

// console.log(pelicula);
// // {
// //   titulo: 'The Dark Knight',
// //   anio: 2008,
// //   reviewIMDB: 9,
// //   reviewFilmAffinity: 8.1
// // }
// ```

const obtenerPelicula = (reviews, peliInfo) => {
  return { ...reviews, ...peliInfo };
};
