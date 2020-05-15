/*
**Encontrar índice**

- Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado. Ejemplo:

```javascript
// Ingrese valores: 5 7 12 34 54 2 12
// Ingrese valor a buscar: 12

// El valor 12 se encuentra en el índice 2
```
1- definir variables necesarias
2- convetir string a un array para poder recorrelo,la condicion de corte va un espacio.
3- Recorrer el array completo
4 - Buscar la coincidencia, del valor con valor buscado.Con valor se refiere al valor referenciado del  array con el indice (valor[0] = 5)
5-Si se lo encuentra retornar el valor del indice


*/

// pido al usuario ingrese lo valores separado por un espacio y con split(" "),digo que por cada espacio me cree un elemento en un array
const valores = prompt("ingrese los valores").split(" ");
const valor = prompt("ingrese los valores a buscar");

// declaro  un variable que se a mantener el estado despues del bucle,esta contiene -1 por si no se encuentra un resultado
let indice = -1;
// Se reccore el array completo que creamos antes(valores), valores.length me a dar el largo del array,es decir,la cantidad de elementos que tengo en este.
for (let i = 0; i < valores.length; i++) {
  // valores[i] hace referencia a un valor de la array,donde i me dice que valor quiero comparar
  if (valores[i] == valor) {
    indice = i;
    //   break me rompe el ciclo for para que se deje de ejecutar.
    break;
  }
}
// Solucion mas rapida
// let indice = valores.indexOf(valor);
console.log(`El indice es: ${indice}`);
