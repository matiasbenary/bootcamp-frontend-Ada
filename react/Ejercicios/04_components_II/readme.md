# Ejercicios React

## Nuestro primer componente

1. Crear dentro de `src` una carpeta `components`
2. Crear dentro de `components` una carpeta `Post`
3. Crear dentro de `Post` un archivo `Post.js`
4. Crear dentro de `Post.js` crear un componente funcional llamado `Post` (recordar importar la librería React)
5. Pasar el JSX que estaba en `App.js` al componente `Post`
6. Exportar el componente `Post`
7. Dentro de `App.js`, importar el componente `Post` e incluirlo dentro del mismo

---

## JSX

1. Copiar y pegar la variable `postInfo` dentro del archivo `Post.js`.
   ```js
   const postInfo = {
     date: new Date(2020, 1, 1),
     user: {
       username: "Ada Lovelace",
       avatar:
         "https://www.stylist.co.uk/images/app/uploads/2018/10/09155947/ada-lovelace-day-2018-quotes-facts-biography-crop-1539097197-1366x1366.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
     },
     img: {
       src:
         "http://it-world.xyz/wp-content/uploads/2019/03/og-learning-path-react.jpg",
       altText: "Logo de React con imagen de paisaje de fondo",
     },
     title: "Cómo hacer un componente en React",
     content:
       "Sit in a box for hours hide head under blanket so no one can see. Sleep everywhere, but not in my bed always hungry this human feeds me, i should be a god paw at your fat belly sit in a box for hours. Sleep on keyboard. Bury the poop bury it deep. What the heck just happened,  something feels fishy lounge in doorway. Stare out the window catch mouse and gave it as a present, yet eat and than sleep on your face unwrap toilet paper claws in your leg or loved it, hated it, loved it, hated it poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls...",
     comments: [
       {
         user: {
           username: "Grace Hopper",
           avatar:
             "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1479476409/iujuzczbplblfzqjwiq5.png",
         },
         date: new Date(2020, 1, 2),
         content: "Muy buen artículo!",
       },
       {
         user: {
           username: "Margaret Hamilton",
           avatar:
             "https://wehackthemoon.com/sites/default/files/styles/tile/public/2019-03/73326.jpg?h=5e39e9b9&itok=z6BmzeDc",
         },
         date: new Date(2020, 1, 2),
         content: "Excelente!",
       },
       {
         user: {
           username: "Katie Bouman",
           avatar:
             "https://d3i6fh83elv35t.cloudfront.net/static/2019/04/57096998_10213321822497968_5057670792469282816_o.jpg",
         },
         date: new Date(2020, 1, 3),
         content: "Muy útil! Gracias por subirlo",
       },
     ],
   };
   ```
2. Reemplazar la información hardcodeada previamente en el componente `Post` por la información contenida en el objeto `postInfo`, accediendo a las propiedades del objeto correspondientes y agregándolas donde vayan, alternando entre contexto de JSX y JS para poder visualizarlo correctamente
3. Para la fecha de publicación, crear una función `formatDate` en el mismo archivo (fuera del componente), que tome un objeto `Date` como argumento y devuelva un `string` con la fecha formateada. Utilizar dicha función para renderizar la fecha dentro del componente.

---

## Props

1. Mover el objeto `postInfo` a `App.js`
2. Asignar cada una de sus propiedades como `props` del componente `Post`
3. En el componente `Post`, desestructurar los props y asignarlos donde corresponde

---

## Dividiendo en components

1. Dividir `Post` en dos componentes: `PostAuthor` y `PostContent`. Para eso:
2. Crear las carpetas y los archivos necesarios
3. En cada archivo crear el componente correspondiente y exportarlo
4. Pasarle el `JSX` actual en `Post` a dichos componentes según corresponda
5. Declarar los `props` y las definiciones de `propTypes` necesarias en cada componente
6. Importar los componentes en `Post` y agregarlos dentro de mismo
7. Pasarles los `props` que correspondan

---

## Agregando componentes

1. Crea dos componentes, `Comments` y `Comment`
2. `Comment` que debe contener un `article` con clase `comment`, el cual debe tener como hijos un componente `PostInfo` y un elemento `p` que contenga el texto del comentario, con la clase `comment-content`. Importar `PostInfo`.
3. Agregar a `Comment` los `props` que correspondan
4. `Comments` debe contener un `section` con la clase `comments`. La section, como hijos debe tener un `h2` con el texto "Comentarios" y la clase "comments-title", y un componente `Comment`. Pasarle al componente `Comment` los props necesarios con datos cualquiera para que se muestre.
5. Agregar `Comments` a `Post.js`, al final luego de `PostContent`.

---

## Listas

1. Agregar a `Comments` un `prop` llamado `comments` y pasarle la propiedad `comments` (que contiene el array con comentarios) del objeto `postInfo`
2. En el componente `Comments`, después de `comments-title`, agregar un `ul` con clase `comments-list`
3. Dentro del `ul`, iterar sobre la `prop` `comments`, y por cada item, mapear el componente `Comment` dentro de un `li` con clase `comment-item`, pasándole las `props` correspondiente
