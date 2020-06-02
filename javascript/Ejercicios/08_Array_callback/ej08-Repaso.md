# Estructuras de datos: Arrays

# Parte 1 - Repaso

## Ejercicio Array 001

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

## Ejercicio Array 002

- Crear un array con el nombre **notas** y asignar un array con 10 valores numéricos de 1 a 10
- Sumar los valores de la primera, cuarta, quinta y última entrega
- Cada nota del array notas corresponde a una entrega de las alumnas

## Ejercicio Array 003

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

## Ejercicio Array 004

- Declarar una variable `etiquetasHtml` con varios de los nombres de las etiquetas de HTML que ya conocés
- Mostrar en consola el nombre de la 2da etiqueta del array **en mayúsculas**
- Mostrar en consola el nombre de la 5ta etiqueta del array **en minúsculas**
- Mostrar en consola la cantidad de etiquetas guardadas en el array

## Ejercicio Array 005

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

## Ejercicio Array 006

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

## Ejercicio Array 007

- Crear un documento con el nombre arr_011.js
- Eliminá el primer elemento del array y colocá en su lugar tu fruta o verdura preferida utilizando `shift` y `unshift`.

```js
const frutas = ["Manzana", "Banana"];
```

## Ejercicio Array 008

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

## Ejercicio Array 009

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

## Ejercicio Array 010

- Partiendo del siguiente array de números `const numeros = [6, 1, 2, 3, 4, 5];`
- Eliminar el primer elemento, y agregarlo al final del array.
- Mostrar el resultado final.
- Resultado esperado

```bash
[1, 2, 3, 4, 5, 6]
```

## Ejercicio Array 011

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

## Ejercicio Array 012

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

## Ejercicio Array 013

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

## Ejercicio Array 014

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

## Ejercicio Array 015

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

## Ejercicio Array 016

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

## Ejercicio Array 017

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

## Ejercicio Array 018

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

## Ejercicio Array 019

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

## Ejercicio Array 020

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

# Parte 2 - ForEach

## Ejercicio Array 001

- Tenemos un array en una variable `playlist` con una lista de canciones de un disco.
- Recorrer la lista con la función **forEach** y mostrarlas una por una utilizando `console.log()`

```js
const playlist = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt",
];
```

## Ejercicio Array 002

- Tenemos un array en una variable `librosDeJS` con una lista de libros de javascript.
- Queremos saber la cantidad de libros que tenemos en el array
- Nos pidieron que evitemos usar la propiedad `length` para contar los elementos de un array y que tenemos que usar si o si un `forEach`
- Completá el siguiente código para que funcione el último `console.log()` y muestre el mensaje **Mi lista de libros de JavaScript tiene 9 libros**

```js
const librosDeJS = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

/// ¡escribir en este espacio la solución del ejercicio!

console.log(
  "Mi lista de libros de JavaScript tiene " + totalLibros + " libros"
);
```

## Ejercicio Array 003

- Tenemos un array en una variable `playlist` con una lista de canciones de un disco.
- Recorrer la lista con la función **forEach** y mostrar la posición y el nombre de la canción utilizando un `console.log()`

```js
const playlist = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt",
];

/// completá acá el código

// resultado esperado
// 0 - Concrete and Gold
// 1 - The Line
// 2 - Sunday Rain
// 3 - Happy Ever After (Zero Hour)
// 4 - Arrows
// 5 - Dirty Water
// 6 - La Dee Da
// 7 - The Sky Is a Neighborhood
// 8 - Make It Right
// 9 - Run
// 10 - T-Shirt
```

## Ejercicio Array 004

- Tenemos un array llamado `numbers` con números enteros al azar.
- Queremos calcular la suma de todos los números que están en el array.
- Por ejemplo: Si tenemos `[1, 2, 3]`, la suma de todos los números es **6**
- Es necesario utilizar `forEach` para conseguir la suma

```js
const numbers = [6, 1, 34, 94, 3, 17];
const sum = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(sum);
// deberia mostrar 155
```

## Ejercicio Array 005

- Tenemos un array llamado `notasDeTPs` con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
- Queremos calcular la nota promedio final de trabajos prácticos _(el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas)_.
- Por ejemplo: Si tenemos `[7, 8, 9, 10]`, la nota final es **8.5**
- Es obligatorio utilizar `forEach` para conseguir el promedio

```js
const notasDeTPs = [4, 7, 8, 5, 10];
const notaFinal = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(notaFinal);
// deberia mostrar 6.8
```

## Ejercicio Array 006

- Tenemos un array en una variable `masNumeros` con números al azar.
- También tenemos dos arrays vacios en las dos variables `numerosPares` y `numerosImpares`.
- Recorré el array `masNumeros` (**utilizando forEach**) y:
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

## Ejercicio Array 007

- Tenemos un array en una variable `valores` con números al azar.
- También tenemos un array vacio en la variable `dobles`.
- Recorré el array `valores` (**utilizando forEach**) y guardá, en el mismo orden, cada número pero multiplicándolo por 2.
- Por ejemplo: Si tenemos `[1, 4, 7]`, `dobles` quedaría `[2, 8, 14]`

```js
const valores = [6, 0, 5, 2, 3, 8, 7, 4, 1, 9];
const dobles = [];

// codea aca tu solución al ejercicio

console.log("valores: ", valores);
console.log("dobles: ", dobles);
// deberias tener como resultado
// valores:  [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ]
// dobles:  [ 12, 0, 10, 4, 6, 16, 14, 8, 2, 18 ]
```

# Parte 3 - Map

## Ejercicio Array 001

- Tenemos un array en una variable `numeros` con números al azar.
- Usá la función `map` para crear un nuevo array incrementando cada valor del array en 10, y guardarlo en la variable `numerosMasDiez`
- Mostrar por consola el array original y el nuevo

```js
const numeros = [1, 2, 3, 4, 5];

const numerosMasDiez;

// codear acá la solución del ejercicio

console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosMasDiez); // [11, 12, 13, 14, 15]
```

## Ejercicio Array 002

- Tenemos un array en una variable `numeros` con números al azar.
- Usar la función `map` para crear un nuevo array multiplicando cada valor del array por 2, y guardarlo en la variable `dobles`
- Mostrar por consola el array original y el nuevo

```js
const numeros = [3, 7, 13, 99];

// codear acá la solución del ejercicio

console.log(numeros); // [3, 7, 13, 99]
console.log(dobles); // [6, 14, 26, 198]
```

## Ejercicio Array 003

- Tenemos un array en una variable `frases` con frases al azar.
- Usar la función `map` para crear un nuevo array donde cada frase empiece y termine con signo de exclamación.
- Mostrar por consola el array original y el nuevo

```js
const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// codear acá la solución del ejercicio

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]
```

## Ejercicio Array 004

- Tenemos un array en una variable `libros` con libros para leer sobre Javascript.
- Usar la función `map` para crear un nuevo array donde cada titulo de los libros esté encerrado en una etiqueta `<li></li>`.
- Mostrar por consola el array nuevo, encerrándolo entre `<ul></ul>`

```js
const librosDeJS = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

// codear acá la solución del ejercicio

// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>
```

## Ejercicio Array 005

- Tenemos un array en una variable `frases` con frases al azar.
- Usar la función `map` para crear un nuevo array que contenga la longitud de cada palabra.
- Mostrar por consola el array original y el nuevo.

```js
const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// codear acá la solución del ejercicio

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(longitudes); // [ 17, 18, 16 ]
```

## Ejercicio Array 006

- Tenemos un array en una variable `playlist` con una lista de canciones de un disco.
- Usar la función `map` para agregar a cada título de la canción el número de posición en la que está dentro del array.

```js
const playlist = ["Everlong", "The Pretender", "Learn to Fly"];

/// completá acá el código

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]
```

## Ejercicio Array 007

- Tenemos un array en una variable `playlist` con una lista de canciones de un disco.
- Usar la función `map` para agregar a cada título de la canción el número de posición en la que está dentro del array.

```js
const playlist = ["Everlong", "The Pretender", "Learn to Fly"];

/// completá acá el código

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]
```

## Ejercicio Array 008

- Tenemos un array en una variable `costos` con números que representan costos de diferentes productos.
- Completar el siguiente código para llegar al resultado esperado
- A un costo primero se le agrega la ganancia y después el IVA

```js
const costos = [12.5, 56, 98, 45.75];

const agregarIVA = function (costo) {
  return costo * 1.21;
};

const sumarGanancia = function (costo) {
  return costo * 1.5;
};

// codear acá la solución del ejercicio

console.log(preciosFinales);
// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]
```

## Ejercicio Array 009

- Tenemos un array en una variable `costos` con números que representan costos de diferentes productos.
- También tenemos un array en una variable `productos` con los nombres de cada producto.
- Completar el siguiente código para llegar al resultado esperado
- A un costo primero se le agrega la ganancia y después el IVA
- El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición. Por ejemplo: el producto que está en la posición **1** tiene un costo igual al elemento en la posición **1** del array `costos`

```js
const productos = ["celular", "notebook", "monitor"];
const costos = [12.5, 56, 98];

const agregarIVA = function (costo) {
  return costo * 1.21;
};

const sumarGanancia = function (costo) {
  return costo * 1.5;
};

// codear acá la solución del ejercicio

console.log(preciosFinales);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]
```

# Parte 4 - Filter

## Ejercicio Array 001

- Tenemos un array en una variable `costos` con números que representan costos de diferentes productos.
- Usando `filter`, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable `losMasCaros`
- Mostrar el array original y el filtrado

```js
const costos = [
  39,
  53,
  17,
  99,
  7,
  9,
  6,
  68,
  54,
  97,
  27,
  90,
  92,
  75,
  26,
  86,
  22,
  42,
  20,
  14,
];
// codear acá la solución del ejercicio

console.log(costos);
console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]
```

## Ejercicio Array 002

- Tenemos un array en una variable `frases` con frases al azar.
- Usando `filter`, crear un nuevo array con las frases que tengan menos de 20 caracteres y guardarlo en la variable `frasesCortas`
- Mostrar el array resultante

```js
const frases = [
  'Ut vero.',
  'Gubergren labore clita et duo accusam diam dolor. Ipsum nonumy et labore kasd lorem takimata ea sed dolor. Kasd no.',
  'Diam rebum nonumy et.',
  'Kasd stet.',
  'Sit et dolor.',
  'Est diam justo gubergren dolores et vero.',
  'Et sanctus sanctus et dolor clita.',
  'Dolores.',
  'Diam sea takimata voluptua ipsum labore voluptua kasd. At consetetur dolore diam.'
];

// codear acá la solución del ejercicio
const frasesCortas = ;

console.log(frasesCortas);
// deberia mostrar
// [ 'Ut vero.', 'Kasd stet.', 'Sit et dolor.', 'Dolores.' ]
```

## Ejercicio Array 003

- Tenemos un array en una variable `numeros` con números al azar.
- También tenemos dos arrays vacios en las dos variables `numerosPares` y `numerosImpares`.
- Utilizando `filter` crear un nuevo array con todos los números pares y guardalo en la variable `numerosPares`
- Utilizando `filter` crear un nuevo array con todos los números impares y guardalo en la variable `numerosImpares`

```js
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// codea acá tu solución
const numerosPares = ;
const numerosImpares = ;

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
```

## Ejercicio Array 004

- Tenemos un array en una variable `mix` con varios elementos, de distintos tipos de datos.
- Usando `filter`, crear un nuevo array con todos los elementos que sean strings y guardalo en la variable `soloStrings`.
- Ayuda: para saber si algo es un string en javascript, podés usar typeof [ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/typeof)
- Mostrar el array resultante

```js
const mix = [
  "Ut vero.",
  2,
  function () {
    console.log("hola mundo!");
  },
  56,
  "Diam rebum nonumy et.",
  true,
  false,
  "Kasd stet.",
  "Sit et dolor.",
  null,
  null,
  [1, 2, 3],
  "Dolore.",
];

// codear acá la solución del ejercicio

console.log(soloStrings);
// deberia mostrar
// [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]
```

## Ejercicio Array 005

- Tenemos un array `playlist` con canciones seleccionadas al azar por spotify para reproducir.
- Tenemos otro array `playlistEscuchada` que tiene canciones que ya escuchamos anteriormente.
- Usando `filter`, queremos crear una nueva lista que solo contenga aquellas canciones guardadas en `playlist` que no están en `playlistEscuchada`
- Guarda el resultado en la variable `playlistSinEscuchar`

```js
const playlist = [
  "Smells Like Teen Spirit",
  "Everlong",
  "Come As You Are",
  "The Pretender",
  "Heart-Shaped Box",
  "Learn to Fly",
  "Lithium",
];
const playlistEscuchada = ["The Pretender", "Lithium", "Come As You Are"];

/// codea aca tu solución

console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]
```

# Parte 4 - Reduce

## Ejercicio Array 001

- Tenemos un array llamado `numbers` con números enteros al azar.
- Utilizando `reduce`, queremos calcular la suma de todos los números que están en el array.
- Por ejemplo: Si tenemos `[1, 2, 3]`, la suma de todos los números es **6**

```js
const numbers = [6, 1, 34, 94, 3, 17];
const sum = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(sum);
// deberia mostrar 155
```

## Ejercicio Array 002

- Utilizando `reduce`, queremos calcular la multiplicación de todos los números que están en el array.
- Por ejemplo: Si tenemos `[1, 2, 3, 4]`, la suma de todos los números es **24**
- Ayuda: ojo con el valor de comienzo

```js
const numbers = [6, 1, 34, 94, 3, 17];
const mul = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(mul);
// deberia mostrar 977976
```

## Ejercicio Array 003

- Tenemos un array llamado `notasDeTPs` con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
- Usando `reduce`, queremos calcular la nota promedio final de trabajos prácticos _(el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas)_.
- Por ejemplo: Si tenemos `[7, 8, 9, 10]`, la nota final es **8.5**

```js
const notasDeTPs = [4, 7, 8, 5, 10];
const notaFinal = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(notaFinal);
// deberia mostrar 6.8
```

## Ejercicio Array 004

- Tenemos un array en una variable `libros` con libros para leer sobre Javascript.
- Usar la función `reduce` para crear un string con todos los titulos de los libros encerrados en una etiqueta `<li></li>`.
- Mostrar por consola el array nuevo, encerrándolo entre `<ul></ul>`

```js
const librosDeJS = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

// codear acá la solución del ejercicio

// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>
```

## Ejercicio Array 005

- Tenemos un array llamado `numeros` con números enteros al azar.
- Utilizando `reduce`, queremos crear un nuevo array con todos los números, pero eliminando aquellos que estén repetidos.
- Por ejemplo: Si tenemos `[1, 4, 3, 2, 4]`, el nuevo array sería `[1, 4, 3, 2]`

```js
const numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];

// codea debajo de este comentario la solucion al ejercicio
const sinRepetidos = ;

console.log(sinRepetidos);
// deberia mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]
```

## Ejercicio Array 006

- Crear un documento con el nombre arr_052.js
- Tenemos un array en una variable `numeros` con números al azar.
- Utilizando `reduce` crear un nuevo array con todos los números pares y guardalo en la variable `numerosPares`

```js
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// codea acá tu solución
const numerosPares = ;

console.log("pares: ", numerosPares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
```

## Ejercicio Array 007

- Tenemos un array en una variable `numeros` con números al azar.
- Utilizando `reduce` crear un nuevo array con todos los números impares y guardalo en la variable `numerosImpares`

```js
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// codea acá tu solución
const numerosImpares = ;

console.log("impares: ", numerosImpares);
// deberias tener como resultado
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
```
