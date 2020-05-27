/*
**Plantas**

- Crear un programa que permita ingresar una lista de plantas con una oruga y una calavera (veneno) entre ellas. La oruga se come todas las plantas que hay a su derecha, hasta que se encuentra con el veneno. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda de la oruga y a la derecha del veneno. Ejemplo:

```javascript
// Ingrese plantas y oruga: 🌱🌻🌱🐛🌱🌸🌱🌱💀🌷
// Plantas sobrevivientes: 🌱🌻🌱🌷
```
variables:
    string -> secuencia de plantas,oruga y veneno -> fijo(hardcoreado) o  prompt(pedir al usuario)
    convertir el string en un array.

    indexOf de oruga y otro de la planta y con splice remplazo.


    variables: 
        auxiliar -> array -> guardar las flores
        estaLaOruga -> boolean -> Si pase por la oruga
        estaElVeneno -> boolean -> Si pase por la veneno
    
    recorrer el array:
        Si no es una oruga guardar en el auxiliar
        Si hay una oruga dejo de guardar hasta encontrar una calabera
        Si hubo una oruga y una calabera sigo guardando

        Si no esta la oruga o si esta la oruga y el veneno guardo la flores
        si me encuentro una oruga aviso
        si me encuento el veneno aviso
    
*/
const plantas = "🌱 🌻 🌱 🐛 🌱 🌸 🌱 🌱 💀 🌷 🌷 🌷 🌷 🌷 🌷 🌷 🌷".split(" ");
// 3
const indiceOruga = plantas.indexOf("🐛");
// 8
const indiceVeneno = plantas.indexOf("💀") + 1;
// splice,primer parametro indice de donde empezar,segundo es la cantidad de elementos a a borrar
plantas.splice(indiceOruga, indiceVeneno - indiceOruga);
console.log(plantas);

// const plantas = "🌱 🌻 🌱 🐛 🌱 🌸 🌱 🌱 💀 🌷".split(" ");

// const plantasSobrevivientes = [];

// let estaLaOruga = false;
// let estaElVeneno = false;

// for (let i = 0; i < plantas.length; i++) {
//   if (plantas[i] == "🐛") {
//     estaLaOruga = true;
//   }

//   if (plantas[i] == "💀") {
//     estaElVeneno = true;
//   }

//   if ((!estaLaOruga || (estaLaOruga && estaElVeneno)) && plantas[i] != "💀") {
//     plantasSobrevivientes.push(plantas[i]);
//   }
// }
