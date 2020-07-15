# React - Props

## Precio

Crear un componente `Precio` que tenga los props:

- `valor`, que toma un número
- `moneda`, que tome un string con el tipo de moneda (ARS, USD, EUR, etc.)

y que renderice el precio formateado con el símbolo de la moneda adelante

Investigar [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

## Fecha

Crear un componente `Fecha` que tenga un prop `fecha` que tome un objeto de tipo `Date`, y renderice un elemento `p` con la fecha formateada, por ejemplo: `miércoles, 29 de abril de 2020`

Investigar [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

## Paginado

Crear un componente `Pagina` que tome los siguientes props:

- `actual`, número de la página actual
- `maximo`, número de la página máxima

y renderice un paginado de la siguiente forma: `[Previous] [1] [...] [5] [...] [10] [Next]`, es decir, la página 1, puntos suspensivos, la página actual, puntos suspensivos y la página máxima, con las palabras para avanzar y retroceder.

Ignorar lo que sucede si la página actual es igual a la primera o a la última.

Darle algunos estilos, por ejemplo:

![](https://miro.medium.com/max/800/1*HqgSs4VRO5OaMIo8TSo5dg.png)

## PuntajeItem y Puntaje

Crear un componente `PuntajeItem` que tome un prop `tipo` con los valores `lleno` o `vacio` y muestre un ícono de una estrella llena o vacía según el caso

Crear un componente `Puntaje` que tome un prop `puntaje` que sea del 1 al 5 y renderice 5 estrellas, siendo valor de `score` la cantidad de `PuntajeItem` con `tipo` `lleno`, mientras las restantes son `tipo` `vacio`, por ejemplo: ★★★✩✩

Pueden usar íconos de FontAwesome o emojis

**EXTRA:**

- Si usan íconos, permitir cambiar el color de las estrellas
- Permitir que `PuntajeItem` pueda tener otra ícono (corazón por ejemplo) y pueda ser configurado mediante un prop
- Permitir que `Puntaje` muestre un texto con el puntaje, por ejemplo: `★★★✩✩ 2 de 5 estrellas`. Se puede ocultar el elemento usando una clase de CSS con la propiedad `display: none`

## Alert

Crear un componente `Alert` que

- tenga como props `status` y `message`
- `message` es el mensaje de la alert
- `status` es un string con alguno de los siguientes valores:
  - `danger`
  - `success`
  - `warning`
  - `info`
- cada `status` renderiza el componente de un forma distinta, con sus propios colores de e iconos, de la siguiente forma:

![](https://user-images.githubusercontent.com/1174092/69897281-33747800-134a-11ea-953f-3e31912f1f15.png)

Pueden usar íconos de FontAwesome o emojis

## Stock y ListaStock

Crear un componente `Stock` que tome como props `producto` (string correspondiente a nombre), `cantidad` (número) y `maximo` (número), y renderice un elemento `li` que: - si la cantidad es menor al 10% de `maximo`, ponga el texto en rojo - si la cantidad es mayor a 10% de `maximo`y menor al 25% de `maximo`, ponga el texto en naranja - si la cantidad es mayor al 25% de `maximo` y menor al 40% de `maximo`, ponga el texto en amarillo - si la cantidad es mayor al 40% de `maximo`, ponga el texto en verde

Crear un componente `ListaStock` que tome una lista de productos y renderice un `ul` con un array de `Stock` por cada ítem de la lista. Ejemplo de lista:

```js
const productos = [
  { producto: "Chocolates", cantidad: 34, maximo: 100 },
  { producto: "Caramelos", cantidad: 99, maximo: 200 },
  { producto: "Turrones", cantidad: 3, maximo: 50 },
  { producto: "Alfajores", cantidad: 25, maximo: 130 },
  { producto: "Tortas", cantidad: 9, maximo: 10 },
];
```

# Todo Junto

## Blog

Crear los componentes para armar la estructura de un blog, poniendo cada componente en un archivo separado e importándolos donde corresponda. Pueden usar componentes del ejercicio anterior.

### Header

- Crear un componente `Header` que renderice un elemento `header` y que pueda contener componente dentro suyo

### NavMenu

- Crear un componente `Nav` que renderice un elemento `nav` y un elemento `ul` dentro del nav, el componente debe poder contener elementos dentro suyo
- El elemento `ul` debe tener el estilo `display: flex` y `list-style: none`
- El componente `NavMenu` debe aceptar la prop `direction` con los valores `"row"` o `"column"`, siendo `"row"` el valor por defecto, y cambiar el valor de la propiedad `flex-direction` del elemento `ul` en consecuencia

### NavItem

- Crear un componente `MenuItem` que renderice un componente `li` con un componente `a`, el componente debe poder contener elementos dentro suyo
- El elemento `li` debe tener el estilo `display: flex`
- Debe aceptar la prop `path` que corresponde al atributo `href` del componente `a`

### UserControl

- Crear un componente UserControl que acepte una prop user (que es un string). Si user tiene algún valor, debe renderizar un componente `p` que diga `Hola ${user}` y un componente a que diga Logout, en cambio si user no tiene ningún valor, debe mostrar dos componentes `a`, uno que diga Login y otro Register. Separar luego ambas opciones en dos componentes distintos: `GuestUserMessage` (para cuando user no tiene ningún valor) y `LoggedUserMessage`

### BlogArticle

- Crear un componente `BlogArticle` que renderice un componente `main` y que pueda contener componente dentro suyo

### BlogImage

- Crear un componente `BlogImage` que tome una prop `img` (un string) renderice un componente `img` donde `src` contiene el valor de `img`

### BlogTitle

- Crear un componente `BlogTitle` que renderice un componente `h1` y que pueda contener texto dentro suyo

### BlogContent

- Crear un componente `BlogContent` que renderice un componente `p` y que pueda contener texto dentro suyo

### Comments

- Crear un componente `Comments` que tome como prop `comments` un array de objetos, y renderice

  - un componente `section`
  - un componente `h2`, dentro de `section` que tenga como texto 'Comentarios'
  - por cada ítem de `comments`, generar un componente `Comment` con `CommentUser` y `CommentContent` dentro suyo

### Comment

- Crear un componente `Comment` que renderice un componente `article` y que pueda contener componentes dentro suyo

### CommentUser

- Crear un componente `CommentUser` que renderice un componente `h3` y que pueda contener texto dentro suyo

### CommentContent

- Crear un componente `CommentContent` que renderice un componente `p` y que pueda contener texto dentro suyo

### Footer

- Crear un componente `Footer` que renderice un componente `footer` y que pueda contener componente dentro suyo

Crear un layout usando los componentes anteriores, de la siguiente forma:

```jsx

const comments = [{
  user: 'Grace Hopper',
  comment: 'Genial artículo!
}, {
  user: 'Hedy Lamarr',
  comment: 'Muy bueno! Gracias por compartir'
}]


<Header>
  <NavMenu>
    <NavItem path='/home'>Home</NavItem>
    <NavItem path='/about-us'>Sobre mí</NavItem>
    <NavItem path='/contact'>Artículos</NavItem>
  </Menu>
  <UserControl user="Ada" />
</Header>
<BlogArticle>
  <BlogImage img="imagen.jpg" />
  <BlogTitle>Cómo hacer un proyecto en React</BlogTitle>
  <BlogContent>Lorem ipsum...</BlogContent>
</BlogArticle>
<Comments comments={comments} />
<Footer>® 2020 - All rights reserved</Footer>
```
