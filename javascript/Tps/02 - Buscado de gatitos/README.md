# Asincronismo y pedidos HTTP - Buscador gatites

## Consignas

- Refactorizar el resto de código en lo posible para reutilizar y simplificar funciones y realizar la menor cantidad de pedidos HTTP repetidos que se pueda.
- Modificar los estilos y el html segun las necesidades.

### 1. Tabs

Hacer funcionar las tabs, para eso, al hacer click en una tab, debería:

- sacarle la clase a `is-active` a todos los `li` de las tabs
- agregarsela al `li` del tab que fue clickead (TIP: usar `parentElement` para acceder al `li`)
- agregar la clase `is-hidden` a todos los elementos con clase `tab-section`
- sacarle la clase `is-hidden` al elemento _cuyo id corresponda con la propiedad href del elemento clickeado_
  <br>

### 2. Sección Random

Hacer funcionar la sección `Random`, para eso:

- al cargar la página y al hacer click en el botón, debería cargar una nueva imagen de un gato
- usar el siguiente endpoint: https://api.thecatapi.com/v1/images/search/
- **EXTRA:** agregarle al botón la clase `is-loading` antes de hacer el pedido y sacársela cuando se obtiene la respuesta
  <br>

### 3. Sección `Búsqueda de razas`

Hacer la sección `Búsqueda de razas`, para eso:

- al hacer click en el botón de búsqueda, obtener el `value` del input de búsqueda
- con ese dato, hacer una consulta a https://api.thecatapi.com/v1/breeds/search?q=busqueda, reemplazando `busqueda` por el `value` del input
- con la respuesta, actualizar la tabla para mostrar los nombres de las razas
- **EXTRA:** agregarle al botón y al input la clase `is-loading` antes de hacer el pedido y sacársela cuando se obtiene la respuesta
- **EXTRA:** hacer que funcione cuando se da enter al escribir la búsqueda  
  <br>

### 4. Sección `Razas`

Hacer funcionar la sección `Razas`, para eso

- al cargar la página, cargar la lista de razas con el endpoint: https://api.thecatapi.com/v1/breeds
- actualizar el select con los nombres de las razas, el option debería tener como value el id de la raza, por ejemplo
  ```html
  <option value="beng">Bengal</option>
  ```
- Agregarle al primer `option` el atributo `selected`
- cuando se selecciona una raza, actualizar la información con imagen, descripción y temperamento
- para reaccionar a la selección de una opción en un `select`, tenemos el evento `change`. El `value` de un `select` es el `value` del `option` seleccionado
- para actualizar la info de una raza, usar el endpoint: https://api.thecatapi.com/v1/breeds/:id, donde `:id` es el id del value del select, por ejemplo https://api.thecatapi.com/v1/breeds/beng
- la imagen la obtenemos de https://api.thecatapi.com/v1/images/search?breed_ids=raza_id, donde `raza_id` es el id de la raza
- al cargar la página, actualizar la info de la raza con la primera raza de la consulta

<br>

### 5.Lista de razas con filtros

- La sección debería cargar un listado con todas las razas
- El contenedor de resultados es el elemento con id `breed-results`
- Dentro de la misma se encuentra un template de ejemplo
- La card de cada raza debería contener una imagen de la misma y el nombre de la raza
- La lista de razas se obtiene con `https://api.thecatapi.com/v1/breeds/`
- La imagen de una raza se obtiene con `https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}`
- Esa lista obtenida debería filtrarse según los filtros elegidos
- En la respuesta, llega como 1 si tiene el atributo y 0 sino. Por ejemplo, la raza Sphynx tiene "rare" con 1 (es exótica), "hairless" con 1 (no tiene pelos), "short_legs" con 0 (tiene piernas largas)
- Para saber si un checkbox está chequeado, se usa la propiedad `checked` del elemento que devuelve un booleano, p. ej.:

```js
document.querySelector(".checkbox").checked; // false
```

- Al modificarse cualquier filtro, debería actualizarse la lista de resultados
- Debería mostrar la cantidad de resultados obtenidos
  <br>
