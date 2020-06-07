// ## Redondeo

// - Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo (`Math.floor`), hacia arriba (`Math.ceil`) y dependiendo de su punto flotante (`Math.round`)

// ```javascript
// round(13.3); //  returns { floor: 13, ceil: 14, round: 13 }
// ```

const round = (value) => {
    return {
        floor:Math.floor(value),
        ceil:Math.ceil(value),
        round:Math.round(value),
    }
}