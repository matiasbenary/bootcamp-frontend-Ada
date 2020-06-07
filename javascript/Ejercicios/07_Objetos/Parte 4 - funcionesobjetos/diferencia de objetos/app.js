// ## Diferencia de objetos

// - Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos

// ```javascript
// const info1 = { a: 1, b: 2, c: 3 };
// const info2 = { d: 4, b: 5 };
// differentiate(info1, info2); // returns {a: 1, c: 3, d: 4}
// ```

const differentiate = (object1, object2) => {
    
    const object = {}

    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    for (const prop in object1){
        if(!keys2.includes(prop)){
            object[prop] = object1[prop]
        }
    }
    
    for (const prop in object2){
        if(!keys1.includes(prop)){
            object[prop] = object2[prop]
        }
    }

    return object;
}; 