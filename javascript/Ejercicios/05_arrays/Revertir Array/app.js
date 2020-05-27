/* **Revertir array**

- Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el array inverso. Ejemplo:

```javascript
// Ingrese números: 5 7 99 34 54 2 12

// El array invertido es: [12, 2, 54, 34, 99, 7, 5]
```


variables 
    numeros =>string que voy a convertir a array -> lista de numeros -> hardcodeado(string fijo) o prompt(ingrese el usuario)

    axiliar que guarde en sentido inverso los numero

    recorrer el array for --i
                       numeros.length - i

    
*/

// const numeros = [5, 7, 99, 34, 54, 2, 12];
// //const valoresIngresados = Number(prompt("Ingrese números:")); // Imprimir arreglo original
// console.log("Original: ", numeros);
// // Invertir con método existente
// numeros.reverse();
// console.log("Invertido con reverse: ", numeros);
const arrayUsuario = prompt("Ingrese números:").split(" ");
const arrayInvertido = [];
const invertir = () => {
  for (let i = arrayUsuario.length - 1; i >= 0; --i) {
    arrayInvertido.push(arrayUsuario[i]);
  }
};
invertir();
alert(arrayInvertido);
