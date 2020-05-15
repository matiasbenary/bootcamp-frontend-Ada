/*
**Mayor número**

- Crear un programa que dado un array 2d de números, indique cuál es el mayor de ellos. El array debe estar guardado en una variable (no hace falta ingresarlo). Array de ejemplo:

```javascript
[
  [2, 7, 12, 1],
  [8, 23],
  [9, 45, 7],
  [22, 3, 24, 4],
];
```
1-declaramos la variables
  *tipo acumulador que me guarde el numero mas grande
2- recorrer el array
3- 

*/
// le paso array y me devuelve el numero del array
const numeroMasGrande = (arrayNumeros) => {
  let numeroGrande = -Infinity;
  for (let i = 0; i < arrayNumeros.length; i++) {
    numeroGrande =
      numeroGrande <= arrayNumeros[i] ? arrayNumeros[i] : numeroGrande;
  }

  return numeroGrande;
};

const numeros = [
  [2, 7, 12, 1], //12
  [8, 23], //23
  [9, 45, 7], //45
  [22, 3, 24, 4], //24
];

let resultado = -Infinity;

for (let i = 0; i < numeros.length; i++) {
  let resultadoParcial = numeroMasGrande(numeros[i]);

  console.log(
    "resultadoParcial",
    resultadoParcial,
    "resultado",
    resultado,
    "comparacion:",
    resultado <= resultadoParcial
  );
  //  -infi <= 12
  // resultado = 12
  // 12 <= 23
  //  resultado = 23
  //  23 <= 45
  //  resultado = 45
  //  45 <= 24
  //  resultado = 45
  resultado = resultado <= resultadoParcial ? resultadoParcial : resultado;
}

console.log(resultado);
