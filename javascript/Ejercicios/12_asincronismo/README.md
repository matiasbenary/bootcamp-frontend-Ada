# Asincronismo

## Try,catch y throw

- Crear un programa que dada una lista de numero lance un excepcion avisandome que la lista no es valida

- Crear un programa que divida dos numero,en caso de ser infinito el resultado me lance un excepcion avisandome que no se puede realizar esa cuenta

- Crear un programa que pregunte por el día, el mes y devuelva la estación del año correspondiente,en caso contario lanzar una excepcion que diga si el dia o el mes es invilido.

## Asincronismo

- Copia el código HTML y JS dado más abajo
- Implementá las acciones en el orden y tiempos propuestos por el enunciado

**HTML**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Event Loop</title>
  </head>

  <body>
    <style>
      .box {
        margin: 5rem;
        background: yellow;
        padding: 5rem;
        width: 25rem;
        height: 25rem;
        transition: all 0.2s;
      }

      .box.circle {
        border-radius: 50%;
      }

      .box.orange {
        background: orange;
      }

      .box.purple {
        background: purple;
        color: white;
      }

      .box.fadeOut {
        opacity: 0;
      }
    </style>
    <div class="box">¡Click!</div>

    <script src="index.js"></script>
  </body>
</html>
```

**JS**:

```js
function clickCaja(e) {
  const el = document.querySelector(".box");

  // 1. Cambiar el texto del elemento a "¡Clickeado!"

  // 2. Hacer que el elemento sea un círculo después de 2 segundos (agregar la clase circle)

  // 3. Hacer que el elemento sea naranja después de medio segundo (agregar la clase orange)

  // 4. Hacer que el elemento sea un cuadrado después de un cuarto de segundo (remover la clase circle)

  // 5. Hacer que el elemento sea violeta desdpués de un tercio de segundo (remover la clase orange y agregar la clase purple)

  // 6. Ocultar el elemento después de medio segundo (agregar la clase fadeOut)
}

const box = document.querySelector(".box");
box.addEventListener("click", clickCaja);
```

## bonus

**🐛 Tamagochi**

- Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
  - ALIMENTAR: +3 energía, +2 felicidad
  - JUGAR: +2 felicidad, -2 energía, -1 limpieza
  - DORMIR: +5 energía, +2 salud, -2 limpieza
  - VACUNAR: +5 salud, -6 felicidad
  - BAÑAR: +3 salud
  - RETAR: -3 felicidad
  - ACARICIAR: +4 felicidad

Cuando el usuario selecciona una, debe mostrar el valor final de las variables.

En pantalla se debe mostrar los stast,cada 5 segundos se reduce la salud,felicidad y limpieza.
Todas las opciones se debe representar como botones.

**🎨 Simón dice III**

- Replicar el juego de Simón dice. El programa debe mostrar una secuencia de colores, agregando por cada ronda que pase otro color más. El usuario debe ingresar los colores de la secuencia uno por uno. Si erra la secuencia (es decir, si ingresa algún color mal), el programa debe terminar. Los colores posibles son: rojo, azul, verde y amarillo. Hay dos variantes posibles: o el juego continúa indefinidamente hasta que se erra la secuencia, y muestra cuántas rondas se sobrevivió, o el programa permite elegir al principio cuántas rondas se desea hacer, y mostrar un mensaje de victoria si se llega a esa cantidad de rondas sin errarle a la secuencia.Regular los tiempos para que a medida que halla mas colores se muestren mas rapido

## Promesas

## **Ejercicio 2**

- Partiendo de la solución del anterior , utilizando varios `setTimeout`
- ¿Cómo haríamos la misma implementación utilizando promesas, para evitar el callback hell?
- Podés utilizar la función vista como ejemplo `delay`:

```js
const delay = (time) =>
  new Promise((resolveCallback) => setTimeout(resolveCallback, time));
```

## **Ejercicio 3**

- Dentro del archivo [index.js](./ej_03/index.js) tenemos dos funciones
  - `fetchAlumnas`: que nos devuelve un listado de alumnas con su respectivo código de curso
  - `fetchCurso`: que nos devuelve un listado de cursos con su código y nombre
- Ambas funciones son asíncronas, por lo que no me retornan directamente los arrays, sino que me devuelve una promesa hasta que la operación se pueda resolver
- Necesito mostrar por pantalla, un listado de las alumnas que muestre `[NOMBRE_ALUMNA] es parte del curso [NOMBRE_CURSO]`
- Utilizando ambas funciones y promesas, ¿cómo podríamos implementar una solución en JS para asegurarnos de tener ambas respuestas al momento de mostrar la tabla?

```js
// 1. traer y asegurarme de tener todos los datos
// por ahora, algo así no es posible 😔
const alumnas = fetchAlumnas();
const cursos = fetchCursos();

// 2. unir ambos arrays para que dentro de cada objeto alumna tenga el nombre del curso directamente

// 3. mostrar por consola el listado pedido

// Ada Lovelace es parte del curso 1ra Generación
// Hedy Lamarr es parte del curso 1ra Generación
// Grace Hopper es parte del curso 1ra Generación
// Katherine Johnson es parte del curso 2da Generación
// Mary Jackson es parte del curso 2da Generación
// Dorothy Vaughan es parte del curso 2da Generación
// Radia Perlman es parte del curso 3ra Generación
// Carol Shaw es parte del curso 3ra Generación
// Katie Bouman es parte del curso 3ra Generación
```

## **Ejercicio 4**

- Escribí una función esMayorADiez que recibe un número y retorna una **promesa**
- La promesa tiene que verificar si el número es mayor a diez
  - Si es mayor, tiene que resolver correctamente y devolver el mensaje `[NUM] es mayor a diez, ¡éxito!`
  - Si es menor o igual, tiene que rechazarse y devolver el mensaje `[NUM] es menor o igual a diez, ¡error!`

```js
const esMayorADiez = (num) => {
  // SOLUCION
};

esMayorADiez(15)
  .then((result) => console.log(result)) // 15 es mayor a diez, ¡éxito!
  .catch((error) => console.log(error));

esMayorADiez(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // 8 es menor o igual a diez, ¡error!
```

## **Ejercicio 5**

- Escribí dos funciones que retorten **promesas** que podamos encadenar
- La primera función `pasarAMayusculas`, recibe un array de strings y pasa cada uno a mayúsculas
- La segunda función `ordenarPalabras`, recibe un array de strins y los ordena alfabeticamente
- Si el array contiene algún elemento que no sea un string, la promesa debería ser rechazada

```js
const palabras = ['nirvana', 'foo fighters', 'pearl jam']
const  = ['blind melon', 44, true]

const pasarAMayusculas = (array) => {
  // SOLUCION
}

const ordenarPalabras = (array) => {
  // SOLUCION
}


pasarAMayusculas(palabras)
  .then(ordenarPalabras)
  .then((result) => console.log(result))
  .catch(error => console.log(error))

pasarAMayusculas(arrayMix)
  .then(ordenarPalabras)
  .then((result) => console.log(result))
  .catch(error => console.log(error))
```

## ⚙️ **Ejercicio 6**

- Vamos a escribir un función `todosPares(arr)` que recibe un array de números
- La función tiene que devolver una promesa
- `todosPares(arr)` tiene que:
  - Verificar que todos los números del array son pares
  - Si todos son pares, tenemos que ejecutar el método `resolve` con el texto "Todos los número son pares"
  - Si hay al menos un número que no es par, tenemos que ejecutar la función `reject` con el texto "No todos los números del array son pares"

```js
const todosPares = (arr) => {
  return new Promise((resolve, reject) => {
    // codea acá tu solución
  });
};

todosPares([2, 4, 6])
  .then((res) => console.log(`Promesa resuelta: ${res}`))
  .catch((err) => console.log(`Promesa con error: ${err}`));
// Promesa resuelta: Todos los número son pares

todosPares([2, 4, 7, 6])
  .then((res) => console.log(`Promesa resuelta: ${res}`))
  .catch((err) => console.log(`Promesa con error: ${err}`));
// Promesa con error: No todos los números del array son pares
```

## ⚙️ **Ejercicio 7**

- Tenemos que escribir una función `login(user, pass)` para que una persona pueda ingresar en nuestra aplicación web
- La función recibe dos parámetros: `user` y `pass`
- La función retorna una promesa
- Dentro de la promesa, tenemos que validar si **user** existe dentro del array de perfiles y si la contraseña coincide con la pasada por parámetro
  - Si existe y la pass coincide, tenemos que ejecutar el método `resolve` con el objeto que contiene todos los datos de la persona (no te olvides de borrar la propieda `pass` por seguridad 🦹‍♀️)
  - Si existe y la pass **no** coincide, tenemos que ejecutar el método `reject` con el mensaje de error `Contraseña incorrecta`
  - Si no existe, tenemos que ejecutar el método `reject` con el mensaje de error `El perfil con user ${user} no existe`

```js
const users = [
  { id: 1, user: "adalovelace", pass: "AL1815" },
  { id: 2, user: "gracehopper", pass: "GH4536" },
  { id: 3, user: "hedylamarr", pass: "HL7788" },
];

const login = (user, pass) => {
  // codea acá tu solución
};

login("adalovelace", "AL1815")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// { id: 1, user: 'adalovelace' }

login("gracehopper", "123")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// Contraseña incorrecta

login("sherylsandberg", "SS1234")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// El perfil con user sherylsandberg no existe
```

## ⚙️ **Ejercicio 8**

- Tenemos la función `climaCincoDias()` que devuelve un listado con el clima a 5 días (cuando se resuelve la promesa)
- El listado es un array de 5 objetos
- Cada objeto representa un día, con las siguientes propiedades: `fecha` (Date), `min` (número con la temp. mín), `max` (número con la temp. max), `icono` (string con un emoji que representa el estado del clima)
- Utilizá la función para obtener el clima y mostrar por consola, un línea por cada día, con su temperatura máxima, mínima y el ícono
- Los datos son generados automáticamente, no son reales

```js
const climaCincoDias = () => {
  const sumarDias = (f, d) =>
    new Date(new Date(Number(f)).setDate(f.getDate() + d));

  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const icons = ["🔆", "⛅", "🌩", "🌧", "⛈", "⛄"];

  return new Promise((resolve, reject) => {
    const diasClima = [];

    const int = setInterval(() => {
      const min = random(-1, 27),
        max = random(min, min + 10);

      if (
        diasClima.push({
          fecha: sumarDias(new Date(), diasClima.length),
          min,
          max,
          icono: icons[random(0, icons.length - 1)],
        }) === 5
      ) {
        clearInterval(int);
        resolve(diasClima);
      }
    }, 150);
  });
};

// utilizar la funcion climaCincoDias y mostrar por pantalla el siguiente resultado (los valores van a variar porque son aleatorios)

// Lunes 06/07 - ⛄ - Temp. Min.: 8ºc - Temp. Máx.: 10ºc
// Martes 07/07 - 🌩 - Temp. Min.: 3ºc - Temp. Máx.: 4ºc
// Miercoles 08/07 - ⛅ - Temp. Min.: 9ºc - Temp. Máx.: 13ºc
// Jueves 09/07 - 🔆 - Temp. Min.: 3ºc - Temp. Máx.: 5ºc
// Viernes 10/07 - 🔆 - Temp. Min.: 18ºc - Temp. Máx.: 21ºc
```

## ⚙️ **Ejercicio 9**

- Tenemos un listado de users de una app y una función `fetchUser` que recibe una dirección de email por parámetro y nos devuelve el objeto del registro que coincida con la búsqueda
- `fetchUser` es una función asíncrona, por lo que nos retornará una promesa
- Si no se encuentra ningún registro, la promesa se resuelve igual, pero nos devuelve el valor `null`
- Tenemos que implementar la función `createUser` que recibe un email y un nombre por parámetro
- La función tiene que:
  - Utilizar `fetchUser` para verificar si ya existe un registro con el mismo email
  - Si existe, rechazar la promesa con el mensaje `Ya existe un registro con el email ${email}`
  - Si el usuario no existe, tenemos que crear el nuevo objeto con las propiedades email, nombre (con los datos pasados por parámetro) y **id**, un número que deberá tomar el `id` más alto en todo el array, y asignar el siguiente
  - Una vez agregado el nuevo registro, la promesa tiene que retorna el objeto completo (con id, email y nombre)

```js
const users = [
  { id: 1, email: "diana@gmail.com", name: "Diana Prince" },
  { id: 2, email: "bruce@gmail.com", name: "Bruce Wayne" },
  { id: 3, email: "clark@gmail.com", name: "Clark Kent" },
];

const fetchUser = (email) =>
  Promise.resolve(users.find((u) => u.email === email));

const createUser = (email, name) => {
  // SOLUCION
};

createUser("diana@gmail.com", "Wonder Woman")
  .then((res) => console.log(`Registro creado: ${res}`))
  .catch((err) => console.log(`No se creó el registro: ${err}`));
// No se creó el registro: Ya existe un registro con el email diana@gmail.com

createUser("barry@gmail.com", "Barry Allen")
  .then((res) => console.log(`Registro creado: ${res}`))
  .catch((err) => console.log(`No se creó el registro: ${err}`));
// Registro creado: { id: 4, email: 'barry@gmail.com', name: 'Barry Allen' }
```
