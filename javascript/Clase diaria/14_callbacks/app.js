const productos = ["pefurmes","mochila","peine","celular"];

const precios = [15,20,25,30,35];

for(let i = 0 ; i< productos.length ; i++){
    console.log(productos[i]);
}

// primer parametro el valor y el segundo el indice. Ej primera vuelta producto => perfumes y el indice => 0
const imprimirArray = (producto,indice) =>{
    console.log(producto,indice)
}

productos.forEach(imprimirArray);

console.log(productos);



let aux = [];
for(let i = 0 ; i< precios.length ; i++){
    aux.push(precios[i]*2)
}
// El map crea un nuevo array con el resultado del callback(es la funcion que le pasamos)
const preciosDuplicados = precios.map((precio)=>{
    return precio*1.21
})


// const costos = [12.5, 56, 98, 45.75];

// const agregarIVA = function (costo) {
//   return costo * 1.21;
// };

// const sumarGanancia = function (costo) {
//   return costo * 1.5;
// };

// // codear acá la solución del ejercicio
// const preciosFinales = costos.map(agregarIVA).map(sumarGanancia);

// console.log(preciosFinales);


// Filter recorrer el array y me deja los elementos que sean verdareros en callback
const multiplosDe10 = precios.filter((precio)=>{
    return (precio % 10) === 0;
})
console.log("multiplos de 10 son", multiplosDe10);


// //  
// let aux = 0;
// for (let index = 0; index < array.length; index++) {
//     aux += array[index];
    
// }

// Reduce usa un acumulador,que es una variable que se mantiene en cada ronda
// esta se pasa por parmetro seguido del valor del array
// si despues del callback colocamos una coma y colocamos un valor este va ser el valor inicial del acumulador
// sino va a ser el primer elemento del array 
const precioTotal = productos.reduce((acumulador,valor) =>{
    return acumulador + valor;
},)

console.log("Precio total con reduce",precioTotal);