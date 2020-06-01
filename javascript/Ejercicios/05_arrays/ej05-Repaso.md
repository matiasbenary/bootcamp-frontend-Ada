# Estructuras de datos: Arrays

**Saludos**

# Ejercicio Array 001

- Dado el array `playlistFoo`, mostrar en consola la canción que está en segundo y quinto lugar.

```js
const playlistFoo = [
  "Everlong",
  "The Pretender",
  "Learn to Fly",
  "Best of You",
  "All My Life",
  "Monkey Wrench",
  "The Sky is a Neighborhood",
];
```

# Ejercicio Array 002

- Crear un array con el nombre **notas** y asignar un array con 10 valores numéricos de 1 a 10
- Sumar los valores de la primera, cuarta, quinta y última entrega
- Cada nota del array notas corresponde a una entrega de las alumnas

# Ejercicio Array 003

- Declarar un array con el nombre **discoNevermind** y asignar los siguientes valores:
  - Smells Like Teen Spirit
  - In Bloom
  - Come As You Are
  - Immodium
  - Lithium
  - Polly
  - Territorial Pissings
  - Drain You
  - Lounge Act
  - Pay To Play
  - On a Plain
  - Endless, Nameless
- Reemplazar `Immodium` por `Breed`
- Reemplazar `Pay To Play` por `Stay Away`
- Reemplazar `Tim` por `Something in the Way`
- Mostrar en consola la lista de canciones modificada
- El resultado debería ser: `["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way"]`

# Ejercicio Array 004

- Declarar una variable `etiquetasHtml` con varios de los nombres de las etiquetas de HTML que ya conocés
- Mostrar en consola el nombre de la 2da etiqueta del array **en mayúsculas**
- Mostrar en consola el nombre de la 5ta etiqueta del array **en minúsculas**
- Mostrar en consola la cantidad de etiquetas guardadas en el array

# Ejercicio Array 005

- Teniendo el array `ganadorasRupaul`, mostrar en consola el nombre de la primer y última ganadora.
- Para la última ganadora no se puede usar un índice a mano sino que hay que hacerlo de forma dinámica _como si no supieramos la cantidad exacta de elementos_

```js
const ganadorasRupaul = [
  "BeBe Zahara Benet",
  "Tyra Sanchez",
  "Raja",
  "Sharon Needles",
  "Jinkx Monsoon",
  "Bianca del Rio",
  "Violet Chachki",
  "Bob the Drag Queen",
  "Sasha Velour",
  "Aquaria",
];
```

# Ejercicio Array 006

- Teniendo dos arrays de canciones, comparar sus longitudes y mostrar en pantalla “La playlist de Nirvana tiene más canciones” si el array `playlistNirvana` tiene más canciones, o “La playlist de Foo Fighters tiene más canciones” si el array `playlistFoo` tiene más elementos.

```js
const playlistNirvana = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistFoo = ["Everlong", "The Pretender", "Learn to Fly"];
```

# Ejercicio Array 007

- Crear un documento con el nombre arr_011.js
- Eliminá el primer elemento del array y colocá en su lugar tu fruta o verdura preferida utilizando `shift` y `unshift`.

```js
const frutas = ["Manzana", "Banana"];
```

# Ejercicio Array 008

- Declarar una variable llamada `concreteAndGold` y asignarle un array vacio `[]`
- Agregar al array las siguientes canciones:
  - T-Shirt
  - Run
  - Make It Right
  - The Sky Is a Neighborhood
  - La Dee Da
  - Dirty Water
  - Arrows
  - Happy Ever After (Zero Hour)
  - Sunday Rain
  - The Line
  - Concrete and Gold
- No se puede utilizar índices numéricos
- Utilizar alguna de las siguientes funciones: `shift`, `unshift`, `push`, `pop`
- Los elementos tienen que guardarse en el mismo orden que se van ingresando
- Mostrar en consola la primera y última canción
- Mostrar en consola el contenido del array
- Resultado esperado:

```bash
"T-Shirt"
"Concrete and Gold"
["T-Shirt", "Run", "Make It Right", "The Sky Is a Neighborhood", "La Dee Da", "Dirty Water", "Arrows", "Happy Ever After (Zero Hour)", "Sunday Rain", "The Line", "Concrete and Gold"]
```

# Ejercicio Array 009

- Declarar una variable llamada `concreteAndGold` y asignarle un array vacio `[]`
- Agregar al array las siguientes canciones:
  - T-Shirt
  - Run
  - Make It Right
  - The Sky Is a Neighborhood
  - La Dee Da
  - Dirty Water
  - Arrows
  - Happy Ever After (Zero Hour)
  - Sunday Rain
  - The Line
  - Concrete and Gold
- No se puede utilizar índices numéricos
- Utilizar alguna de las siguientes funciones: `shift`, `unshift`, `push`, `pop`
- Los elementos tienen que guardarse en el orden inverso al que se van ingresando
- Mostrar en consola la primera y última canción
- Mostrar en consola el contenido del array
- Resultado esperado:

```bash
"Concrete and Gold"
"T-Shirt"
["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"]
```

# Ejercicio Array 010

- Partiendo del siguiente array de números `const numeros = [6, 1, 2, 3, 4, 5];`
- Eliminar el primer elemento, y agregarlo al final del array.
- Mostrar el resultado final.
- Resultado esperado

```bash
[1, 2, 3, 4, 5, 6]
```

# Ejercicio Array 011

- Crear un documento con el nombre arr_016.js
- Teniendo las siguientes variables `playlist` y `playlistEscuchada`:

```js
const playlist = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistEscuchada = ["School"];
```

- Eliminar la primer canción del array `playlist`, y agregar el elemento eliminado al final del array `playlistEscuchada`
- Mostrar el contenido de `playlist`
- Mostrar el contenido de `playlistEscuchada`
- Resultado espeardo:

```bash
playlist: ["Come As You Are", "Heart-Shaped Box", "Lithium"]
playlistEscuchada: ["School", "Smells Like Teen Spirit"]
```

# Ejercicio Array 012

- Crear un documento con el nombre arr_018.js
- Si tenemos el array `womenInTech`

```js
const womenInTech = [
  "Ada Lovelace",
  "Hedy Lamarr",
  "Grace Hopper",
  "Radia Perlman",
  "Janie Tsao",
  "Sheryl Sandberg",
  "Susan Kare",
  "Parisa Tabriz",
];
```

- Ordenar el array
- Mostrar en la consola el array ordenado
- Revertir el orden de la lista ordenada
- Mostrar en la consola el array revertido
- Unir los nombres de todas las mujeres en tecnología utilizando `" - "` para separa

# Ejercicio Array 013

- Crear un documento con el nombre arr_019.js
- Si tenemos dos arrays `playlistNirvana` y `playlistFoo`:

```js
const playlistNirvana = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistFoo = ["Everlong", "The Pretender", "Learn to Fly"];
```

- Crear una variable `playlistCompleta`, con los nombres de todas las canciones que hay en `playlistNirvana` y `playlistFoo`.
- Mostrar en consola los siguiente nombres de forma individual (uno por linea):
  - Nombres de las canciones de nirvana (a mano utilizando índices)
  - Nombres de los canciones de foo fighters (utilizando while)
  - Nombres de todas las canciones entre ambas listas (utilizando for)

# Ejercicio Array 014

- Tenemos un array de canciones de Spotify. Queremos mostrar por consola la siguiente información:
  - Posición de la canción **Lithium**
  - Posición de la canción **On a Plain**
- Completar el siguiente código para que pueda mostrarnos lo que solicitamos

```js
const playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];


// completar las dos asignaciones de abajo
const indiceLithium = ;
const indiceOnAPlain = ;

console.log("El índice de la canción Lithium es:");
console.log(indiceLithium); // deberia mostrar 3
console.log("El índice de la canción On a Plain es:");
console.log(indiceOnAPlain); // deberia mostrar -1
```

# Ejercicio Array 015

- Tenemos un array con todas las ganadoras de RuPaul’s Drag Race, en la variable `ganadorasRupaul`. Vamos a escribir un programa en el que queremos saber la siguiente información:
  - Que número de ganadora es **Sharon Needles**
  - Mostrar por pantalla si **Latrice Royale** fue una ganadora del concurso.
- Completar el siguiente código para que pueda mostrarnos lo que solicitamos

```js
const ganadorasRupaul = ["Tyra Sanchez", "Chad Michaels", "Raja", "Trixie Mattel", "Aquaria", "Bebe Zahara Benet", "Sharon Needles", "Jinkx Monsoon", "Alaska Thunderfuck 5000", "Bianca Del Rio", "Violet Chachki", "Bob the Drag Queen", "Sasha Velour"];

// completar el código para el primero punto
const posicionSharonNeedles = ;
// si Latrice Royale está en el array de ganadoras, asignamos TRUE... si no está, asignamos FALSE
const latriceRoyaleGano = ;

console.log("Sharon Needles es la ganadora número:");
console.log(posicionSharonNeedles); // deberia mostrar 5

if (latriceRoyaleGano) {
  console.log("Latrice Royale fue ganadora de RuPaul's Drag Race");
} else {
  console.log("Latrice Royale NO fue ganadora de RuPaul's Drag Race");
}
// deberia mostrar "Latrice Royale NO fue ganadora de RuPaul's Drag Race"
```

# Ejercicio Array 016

- Tenemos un array llamado `womenInTech` sobre el que tenés que realizar las siguientes operaciones:

  - eliminar a "Bill Gates", que está en la última posición
  - agregar "Parisa Tabriz" al final del array

- Luego de realizar las dos operaciones, vamos a mostrar la siguiente información por consola:
  - la longitud del array
  - quien está en la posición 3
  - mostrar todos los elementos del array, uno debajo del otro

```js
const womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Bill Gates"];

// ACA VA EL CODIGO DE LA PRIMERA PARTE DEL EJERCICIO
// UNA VEZ QUE REALIZAMOS LAS OPERACIONES PASAMOS AL SIGUIENTE PASO

// completar las cuatro asignaciones de abajo
const longitud = ;
const enLaPosicion3 = ;

console.log("La longitud del array es:");
console.log(longitud);
console.log("En la posición 3 está:");
console.log(enLaPosicion3);

// utilizar un for para mostrar cada nombre del array
```

# Ejercicio Array 017

- Tenemos un array llamado `womenInTech` con nombres de mujeres influyentes en la tecnología.
- Queremos transformar el array en un string sin usar **join**, separando los nombres con un guión y guardando el string resultante en la variable `nombresSeparadosPorGuion`

```js
const womenInTech = [
  "Ada Lovelace",
  "Hedy Lamarr",
  "Grace Hopper",
  "Radia Perlman",
  "Janie Tsao",
  "Sheryl Sandberg",
  "Susan Kare",
  "Parisa Tabriz",
];
const nombresSeparadosPorGuion = "";

// aca va la solucion

console.log(nombresSeparadosPorGuion);
// deberia mostrar "Ada Lovelace - Hedy Lamarr - Grace Hopper - Radia Perlman - Janie Tsao - Sheryl Sandberg - Susan Kare - Parisa Tabriz"
```

# Ejercicio Array 018

- Tenemos un array llamado `numbers` con números enteros al azar.
- Queremos calcular la suma de todos los números que están en el array.
- Por ejemplo: Si tenemos `[1, 2, 3]`, la suma de todos los números es **6**

```js
const numbers = [6, 1, 34, 94, 3, 17];
const sum = 0;

// solucion

console.log(sum);
// deberia mostrar 155
```

# Ejercicio Array 019

- Tenemos un array llamado `notasDeTPs` con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
- Queremos calcular la nota promedio final de trabajos prácticos _(el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas)_.
- Por ejemplo: Si tenemos `[7, 8, 9, 10]`, la nota final es **8.5**

```js
const notasDeTPs = [4, 7, 8, 5, 10];
const notaFinal = 0;

// SOLUCION

console.log(notaFinal);
// deberia mostrar 6.8
```

# Ejercicio Array 020

- Crear un documento con el nombre arr_026.js
- Tenemos un array en una variable `masNumeros` con números al azar.
- También tenemos dos arrays vacios en las dos variables `numerosPares` y `numerosImpares`.
- Recorré el array `masNumeros` y:
  - Si el número es par, agregalo al array `numerosPares`
  - Si el número es impar, agregalo al array `numerosImpares`
- Por ejemplo: Si tenemos `[7, 8, 9, 10]`, `numerosPares` quedaría `[8, 10]` y `numerosImpares` quedaría `[7, 9]`

```js
const masNumeros = [
  43,
  11,
  18,
  46,
  44,
  37,
  42,
  29,
  9,
  3,
  37,
  0,
  40,
  10,
  38,
  34,
  25,
  40,
  4,
  32,
];
const numerosPares = [];
const numerosImpares = [];

// SOLUCION

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
```
