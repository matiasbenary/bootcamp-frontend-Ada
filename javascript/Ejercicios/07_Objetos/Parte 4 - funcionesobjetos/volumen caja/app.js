// ## Volumen de caja

// - Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.

// ```javascript
// const size = { width: 2, length: 5, height: 1 };
// getBoxVolume(size); // returns 10
// ```

getBoxVolume = (size) => {
    return size.width * size.length * size.height;
}