# React - JSX

# Ejercicio `01` funciones en JSX

Cuando creamos funciones que retornan HTML, JSX nos va a permitir tratarlas como **Componentes**, básicamente se convertirán en nuestras propias etiquetas HTML personalizadas.

## Creando nuestro primer Componente Funcional

Una de las cosas que podemos hacer gracias a JSX es llamar a funciones como si fueran una etiqueta HTML, por ejemplo:

```js
// si declaramos una función llamada Mensaje
const Mensaje = () => {
  return <h1>¡Vamos React!</h1>;
};

// vamos a poder llamar como si fuera una etiqueta de HTML:
<Mensaje />;

// en lugar del típico uso con los paréntesis
Mensaje();
```

Cuando llamamos a una función como esa, se convierte en un **Componente de React**, que es una función que genera (retorna) HTML dinámicamente. Lo que sea que devuelva la función se reemplazará en el mismo lugar donde se colocó la etiqueta original `<Mensaje />`.

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-09-6xrcx

En la línea 10 del archivo App.js, cambiar la forma en la que la función es llamada. Utilizar como un **Componente de React** usando `<` y `>` como en las etiquetas de HTML.

# Ejercicio `02` Un componente más real

En el anterior ejercicio, hicimos nuestro primer componente llamado **DarLaBienvenida**, y aprendimos que podemos utilizarlo como una etiqueta de HTML.

```jsx
<DarLaBienvenida />
```

Ahora vamos a crear otro componente (función) llamado **Card** que retorna el siguiente HTML:

```jsx
<div class="card m-5">
  <img
    class="card-img-top"
    src="https://lastfm.freetls.fastly.net/i/u/arO/f0c695de2eb443a6a4ea0456c994abf3"
    alt="Card image cap"
  />
  <div class="card-body">
    <h5 class="card-title">Dave Grohl</h5>
    <p class="card-text">
      David Eric Grohl (born January 14, 1969) is an American singer,
      songwriter, musician and ... guest for a concert at the Anfield football
      stadium in Liverpool, in one of the central events of the English city's
      year as European Capital of Culture.
    </p>
    <a href="https://en.wikipedia.org/wiki/Dave_Grohl" class="btn btn-primary">
      Go to wikipedia
    </a>
  </div>
</div>
```

El código del HTML está basado en las Card de bootstrap: [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/#example)

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-10-968l2

En `App.js`, creá una función llamada `BootstrapCard` que retorne el código de la Card y usala como una etiqueta dentor del código de la función `App` para agregarla al DOM.

# Ejercicio `03` Propiedades de componentes

El componente **BootstrapCard** que hicimos en el ejercicio anterior está [hard coded](https://www.quora.com/What-does-hard-coded-something-mean-in-computer-programming-context) solo para **Dave Grohl**.

Pero, ¿que pasa si necesitamos re-utilizar el mismo componente `<BootstrapCard />` para **Kurt Cobain**?

## Usando propiedades en HTML

Cuando estamos escribiendo HTML, estamos constanmente usando las propiedades/atributos de `<tag>` para modificar su comportamiento. Ejemplo:

Cuando usamos la etiqueta **anchor** (ancla) `<a>` necesitamos especificar la propiedad **href** de la siguiente forma:

```html
<a href="http://google.com">Vamos a google</a>
<a href="http://linkedin.com">Vamos a linkedin</a>
```

☝🏽 Acá estamos la misma etiqueta `<a>` para dos direcciones diferentes

## Usando las propiedades en React.js

En React también podemos crear nuestras propias etiquetas y usar nuestras propias propiedades inventadas, por ejemplo, podríamos especificar la propiedad `title` de nuestra`<BootstrapCard />`de esta manera:

```jsx
               //for Kurt Cobain
<BootstrapCard title="Kurt Cobain" />

               //for Dave Grohl
<BootstrapCard title="Dave Grohl" />
```

Nuestro componente de función va a recibir todas sus propiedades (incluido el title) a través del primer parámetro que podemos llamar **props**.

```jsx
const BootstrapCard = (props) => {
  return (
    <div class="card">
      ...
      <h5 class="card-title">{props.title}</h5>
      ...
    </div>
  );
};
```

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-11-0qc7c

Ahora vamos a agregar/usar las propiedades `imageUrl`, `description`, `buttonUrl` y `buttonLabel` dentro del componente/función **BootstrapCard** y también sobre la etiqueta `<BootstrapCard />`. Hay que hacerlo de la misma forma en la que fue incluída la propiedad `title` en ambos lados.

#### 💡 Pista:

- Tenés que editar 2 partes del archivo.
- El primer paso debería ser remplazar las partes harcoded con las propiedades dentro del componente.
- El siguiente paso sería agregar la etiqueta `<BootstrapCard>` dentro de la función `App` incluyendo todas las propiedades y sus respectivos valores.

# Ejercicio `04` Componente Jumbotron

Se trata de un componente para mostrar contenidos de forma destacada.

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/ejercicio-react-12-ppx46

Usando lo que aprendimos en los anteriores ejercicios, vamos a construir un componente Jumbotron que recibe las siguientes propiedades:

```jsx
<Jumbotron
  title="Welcome to react"
  description="React is the most popular rendering library in the world"
  buttonLabel="Go to the official website"
  buttonURL="https://reactjs.org/"
/>
```

El componente debería tener como HTML de salida algo similar a:

```html
<div class="jumbotron m-5">
  <h1 class="display-4">¡Hola mundo!</h1>
  <p class="lead">Consetetur ipsum rebum et at et amet dolore, kasd elitr.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">¡Click!</a>
</div>
```

#### 💡 Pista:

Así es como debería verse el resultado final.

![Jumbotron](https://ucarecdn.com/d376101b-6af1-45cb-97fc-ee246ee312d3/)

# Ejercicio `05` Componente Alert

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/ejercicio-react-13-887df

Con lo que aprendimos hasta este ejercicio, vamos a crear un componente `<Alert />` que reciba 1 prop `text` y muestre un [Alert de bootstrap](https://getbootstrap.com/docs/4.0/components/alerts/#examples), como el siguiente:

Así es como deberíamos usar el componente:

```jsx
<Alert text="¡Ocurrió un error!" />
```

Así es el HTML resultado que deberíamos obtener:

```html
<div class="alert alert-danger" role="alert">
  ¡Ocurrió un error!
</div>
```

# Ejercicio `06` Componente Alert

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/ejercicio-react-14-ji5su

Con lo que aprendimos hasta este ejercicio, vamos a crear un componente `<Alert />` que reciba 2 props `text` y `type`, y muestre un [Alert de bootstrap](https://getbootstrap.com/docs/4.0/components/alerts/#examples), como el siguiente:

Así es como deberíamos usar el componente:

```jsx
<Alert text="¡Ocurrió un error!" type="danger" />
<Alert text="¡Todo salió de 10!" type="success" />
```

Así es el HTML resultado que deberíamos obtener:

```html
<div class="alert alert-danger" role="alert">
  ¡Ocurrió un error!
</div>
<div class="alert alert-success" role="alert">
  ¡Ocurrió un error!
</div>
```

## Card

- Crear un componente `Card` que renderice un elemento `article` y que pueda contener componentes dentro suyo
- Crear un componente `CardTitle` que renderice un elemento `h3` y que pueda contener texto dentro suyo
- Crear un componente `CardDescription` que renderice un elemento `p` y que pueda contener texto dentro suyo
- Crear un componente `CardActions` que renderice un elemento `div` y que pueda contener componentes dentro suyo. Dicho div debe contener la propiedad `display: flex`
- Crear un componente `CardAction` que renderice un elemento `button` y que pueda contener texto dentro suyo

```jsx
<Card>
  <CardTitle />;
  <CardDescription />;<CardActions>
    <CardAction />
  </CardActions>;
</Card>
```

## Layout

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

### Main

- Crear un componente `Main` que renderice un componente `main` y que pueda contener componente dentro suyo

### Footer

- Crear un componente `Footer` que renderice un componente `footer` y que pueda contener componente dentro suyo

Crear un layout usando los componentes anteriores, de la siguiente forma:

```jsx
<Header>
  <NavMenu>
    <NavItem path='/home'>Home</NavItem>
    <NavItem path='/about-us'>About Us</NavItem>
    <NavItem path='/contact'>Contact</NavItem>
  </Menu>
</Header>
<Main>
  Hola mundo
</Main>
<Footer>® 2020 - All rights reserved</Footer>
```
