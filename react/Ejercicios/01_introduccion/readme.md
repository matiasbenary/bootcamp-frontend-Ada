# Ejercicio `01` JSX

JSX permite incluir variables en nuestro HTML, por ejemplo, supongamos que tenemos disponible la siguiente variable:

```js
let edad = 27;
```

Si queremos incluir el valor de esa variable en el código HTML dinámicamente, podemos hacerlo así:

```jsx
<span> Ada tiene {edad} años </span>
```

_Prestemos atención a la posición de las llaves `{` y `}` envolviendo la variable._

The resulting website HTML document will look like this:
El documento HTML resultante se verá como:

```html
<div id="root">
  <span>Ada tiene 27 años</span>
</div>
```

Básicamente, ahora podemos mezclar HTML y JS en el mismo archivo sin tener que concatenar y usar strings.

## ⚙️ Ejercicio

Código del ejercicio: https://codesandbox.io/s/react-ejercicio-01-e0swp

En el proyecto del enlace hay una variable llamada `name` que contiene un nombre.

Incluir la variable en el HTML para reemplazar el texto hard coded `"Grace"`.

# Ejercicio `02` Rendering con objetos

Ahora usemos una variable más compleja para representar nuestro HTML, digamos que tenemos el siguiente objeto JS que contiene información de una persona:

```js
const customer = {
  firstName: "Ada",
  lastName: "Lovelace",
};
```

Para obtener cualquier propiedad del objeto `customer` tenemos que usar el operador punto `.` de esta manera:

```js
console.log(customer.firstName); // va a mostrar "Ada" en la consola.
```

## ⚙️ Ejercicio

Código del ejercicio: https://codesandbox.io/s/react-ejercicio-02-duyz1

Abrir el código y agregar el código necesario para hacer que React genere el siguiente documento:

```jsx
<div>
  <h1>My first name is Ada</h1>
  <h2>My last name is Lovelace</h2>
</div>
```

# Ejercicio `03` Construyendo un layout

Vamos a practicar un poco más sobre el uso de JSX para crear HTML.

Ahora tenemos otro objeto que es un poco más complejo que el anterior.

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-03-qvt5g

Tenemos el objeto `data` que contiene información sobre Dave Grohl (imagen, título, etc).

```js
const data = {
  image:
    "https://lastfm.freetls.fastly.net/i/u/arO/f0c695de2eb443a6a4ea0456c994abf3",
  cardTitle: "Dave Grohl",
  cardDescription:
    "David Eric Grohl (born January 14, 1969) is an American singer, songwriter, musician and ... guest for a concert at the Anfield football stadium in Liverpool, in one of the central events of the English city's year as European Capital of Culture.",
  button: {
    url: "https://en.wikipedia.org/wiki/Dave_Grohl",
    label: "Go to wikipedia",
  },
};
```

Utilicemos la información contenida en `data` para representar una card de bootstrap, por ejemplo: el título de la tarjeta será `data.cardTitle`, y así con cada campo.

Aquí está el código HTML para crear una tarjeta en bootstrap:

```html
<div class="card m-5">
  <img class="card-img-top" src="..." alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the cards content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

Source: [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/#example)

### Así se vería el resultado final:

![Dave Grohl Card](https://files-valdcvtvnf.now.sh)

# Ejercicio `04` Construyendo con arrays

Con JSX también podemos crear **arrays** de elementos HTML. Por ejemplo: si tenemos un array de `<li>`, podemos incluirlos todos en el documento de una vez de esta forma:

```jsx
const namesInHTML = [
  <li>Dave Grohl</li>,
  <li>Neil Peart</li>,
  <li>John Bonham</li>,
  <li>Taylor Hawkins</li>,
];

const content = <ul>{namesInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#root"));
```

El documento HTML resultado será:

```html
<div id="root">
  <ul>
    <li>Dave Grohl</li>
    <li>Neil Peart</li>
    <li>John Bonham</li>
    <li>Taylor Hawkins</li>
  </ul>
</div>
```

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-04-bprdt

Supongmos que queremos que react muestre el siguiente contenido HTML:

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link" href="#">Link to google.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link to facebook.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link to amazon.com</a>
  </li>
</ul>
```

Actualizá el array `navlinkItems` para hacer que el código muestre lo que queremos.

#### 💡 Pista:

- Solo tenés que actualizar el array `navlinkItems`, nada más.
- React te va a pedir que uses keys en cada item del array, [podés lear más acá](https://reactjs.org/docs/lists-and-keys.html#keys).
- Recordá que tenés que usar `className` en lugar del atributo `class`

# Ejercicio `05` .map() de un array a `<li>`

Ahora vamos a crear un array de forma dinámica. Supongamos que tenemos un array de animales:

```js
const animals = ["Horse", "Turtle", "Elephant", "Monkey"];
```

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-05-xoxlb

Actualizá el código de la función `.map()` para crear un nuevo array de `<li>` donde cada uno corresponde a un animal del array original, resultando en el siguiente HTML:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephant</li>,
  <li>Monkey</li>,
];
```

Finalmente incluí a cada uno en el documento principal.

#### 💡 Pista:

- Podés usar el segundo parámetro del map como la `key` de cada item.

El resultado final debería ser: ![LIs](https://ucarecdn.com/773cea7c-acab-46f2-b8af-d03911bbfe24/)

# Ejercicio `06` .map() de un array a `<li>`

Usando el conocimiento del ejercicio anterior, ahora vamos a arreglar la función del .map() otra vez pero con la diferencia que el array contiene objetos.

```js
const animals = [
  { label: "Horse" },
  { label: "Turtle" },
  { label: "Elephant" },
  { label: "Monkey" },
];
```

# :speech_balloon: Instructions

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-06-8dgs1

Actualizá el código de la función `.map()` para crear un nuevo array de `<li>` donde cada uno corresponde a un animal del array original **de objetos**, resultando en el siguiente HTML:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephant</li>,
  <li>Monkey</li>,
];
```

Finalmente incluí a cada uno en el documento principal.

#### 💡 Pista:

- Podés usar el segundo parámetro del map como la `key` de cada item.

El resultado final debería ser: ![LIs](https://ucarecdn.com/773cea7c-acab-46f2-b8af-d03911bbfe24/)

# Ejercicio `07` .map() de un array a `<li>`

Cuando estamos transformando un array de datos con `.map()` para convertirlo en array de HTML, tenemos que especificar **una función de transformación** que recibe cada item del array original, lo transforma y agrega en un array nuevo.
Ej:

```js
const originalData = [];

const mappingFunction = (item, index) => {
  // return algo en JSX.
};

const htmlList = originalData.map(mappingFunction);
// la variable htmlList ahora contiene un nuevo array.
```

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-07-xqgli

Vamos a utilizar el componente [list-group bootstrap](https://getbootstrap.com/docs/4.1/components/list-group/#basic-example) para mostrar una lista de planetas partienda del array:

```js
const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];
```

Usá el método `.map` y lográ que el HTML resultado sea el siguiente:

```jsx
<ul class="list-group m-5">
  <li class="list-group-item">Mars</li>
  <li class="list-group-item">Venus</li>
  <li class="list-group-item">Jupiter</li>
  <li class="list-group-item">Earth</li>
  <li class="list-group-item">Saturn</li>
  <li class="list-group-item">Neptune</li>
</ul>
```

#### El resultado final debería ser:

![list-group](https://ucarecdn.com/2fa34a3a-33ba-4938-a69f-94d550ece79c/)

# Ejercicio `08` funciones en JSX

JSX permite usar funciones para mostrar HTML!

Es una práctica recomendada porque te permite crear plantillas y reutilizarlas.
Ej:

```js
// WHAT: Esta función retorna un string que va a ser mostrado
const Saludar = () => {
  return <h1>Hola Mundo</h1>;
};
//what           //where
ReactDOM.render(Saludar(), document.getElementById("root"));
```

Nota: la función Saludar empieza con mayúscula porque la vamos a convertir en un [Componente de React](https://reactjs.org/docs/react-component.html) en el próximo ejercicio.

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-08-dlbo4

Modificá el código para que la función **DarLaBienvenida** retorne `<h1>¡Aguante React!</h1>` en lugar de `<h1>Hola Mundo</h1>`.
