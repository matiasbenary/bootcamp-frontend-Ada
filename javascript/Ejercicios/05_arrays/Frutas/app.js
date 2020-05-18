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

const frutasString = "🍎 🍎 🍐 🍑 🍎 🍑";
const frutas = frutasString.split(" ");

let indiceDeFrutas = [];
let conteoFruta = [];

for (let i = 0; i < frutas.length; i++) {
  let indiceDeFruta = indiceDeFrutas.indexOf(frutas[i]);
  if (indiceDeFruta === -1) {
    indiceDeFrutas.push(frutas[i]);
    conteoFruta.push(1);
  } else {
    conteoFruta[indiceDeFruta]++;
  }
}

console.log(indiceDeFrutas, conteoFruta);
