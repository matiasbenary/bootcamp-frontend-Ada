# Fetch

# Parte 1

## **Ejercicio 1**

- Vamos a obtener los datos de un user desde GitHub
- Creá una función `getUser(name)`, que reciba el nombre de login de GitHub
- Dentro de la función, obtené la información del perfil de GitHub pasado por parámetro
- La URL de la API de Github para obtener la información de USERNAME es `https://api.github.com/users/USERNAME`
- Una vez obtenido el json resultante, mostrar por consola:
  ```bash
  Login: USERNAME
  Repos públicos: NUM_REPOS
  Seguidores: Q_SEGUIDORES
  Siguiendo: Q_SIGUIENDO
  URL Avatar: URL_AVATAR
  ```

```js
const getUser = (name) => {};

getUser("BrendanEich");

// Login: BrendanEich
// Repos públicos: 13
// Seguidores: 4212
// Siguiendo: 5
// URL Avatar: https://avatars0.githubusercontent.com/u/313317?v=4
```

## **Ejercicio 2**

- Vamos a tomar la solución del ejercicio 1 y el [HTML base](./ej_02/index.html)
- Modifiquemos la función para que, una vez obtenido los datos, actualicemos cada elemento del HTML con la información del perfil de GitHub
- Además, para enviarle ese parámetro a la función, utilicemos el input del formulario, de forma que nos permita buscar cualquier perfil

# Parte 2

Tienen libertad creativa de resolución en cuanto a la parte visual de diseño

Vamos a consumir la api de [The Breaking Bad API](https://breakingbadapi.com/)

- Crear una card que muestre Nombre del personaje,imagen del mismo,cumpleanios,status,apodo y temporada.
