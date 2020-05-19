/*
**Frutas**

- Crear un programa que pida ingresar 🍎, 🍐y 🍑 y devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:

```
// Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// Hay 3 🍎, 1 🍐 y 2 🍑
```
1-ingresa un string
2- convierto en Array
3- recorrer
4- clasificar la fruta si no existe agrego un nuevo cajon si exite le sumo un punto

*/
// ingresa un string y lo convierto en array
const frutasString = "🍎 🍎 🍐 🍑 🍎 🍑 🍌";
const frutas = frutasString.split(" ");

// indice de frutas me va a guardar frutas contadas
let listadoDeFruta = [];
// va contar frustas
let conteoFruta = [];

for (let i = 0; i < frutas.length; i++) {
  // voy a buscar en listadoDeFruta la frutas[i],en el primer caso va a ser 🍎,como no existe me va a retorna un -1
  let indiceDeFruta = listadoDeFruta.indexOf(frutas[i]);
  if (indiceDeFruta === -1) {
    listadoDeFruta.push(frutas[i]);
    conteoFruta.push(1);
  } else {
    conteoFruta[indiceDeFruta]++;
  }
}
console.log(conteoFruta,listadoDeFruta)
// let manzana = 0;
// let durazno = 0;
// let pera = 0;

// // console.log(listadoDeFruta, conteoFruta);
// for(let i = 0; i< frutas.length; i++){
//   if(frutas[i] === "🍎"){
//     manzana++;
//   }else if(frutas[i] === "🍐"){
//     pera++;
//   } else if(frutas[i] === "🍑"){
//     durazno++;
//   }
// }
// console.log(manzana,pera,durazno)