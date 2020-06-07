const personaje = {
    nombre:"Leia",
    apellido:"Skywalker",
    profecion:"jedi",
    edad:23
}

const array = [20,31,52,43,2324,52,46];

// console.log(Object.values(personaje));
// console.log(Object.keys(personaje));

// for of para el valor
// for (const number of array){
//     console.log(number);
// }

// for in para el indice
// for (const number in array){
//     console.log(number);
// }

// En objetos retorna el nombre de la propiedad
// en objetos no se puede usar for of porque no es iterable
// for (const prop in personaje) {
//     console.log(`objeto.${prop} = ${personaje[prop]}`);
// }


// const persona = personaje;
// Siempre que se pueda me conviene clonar mi objeto para evitar efectos secundarios,o side effect
const persona = Object.assign({},personaje);
persona.edad = 35;

console.log(personaje,persona);
console.log(persona==personaje);