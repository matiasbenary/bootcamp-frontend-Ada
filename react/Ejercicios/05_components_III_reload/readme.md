# Ejercicios React

## Enunciado:

Se nos encarga crear un pagina web usando react que me liste los elementos de una api y cuando pase el puntero por arriba este se de vuelta y me muestre otro tipo de informacion

## Aclarancion:

- Crear y reutilizar componentes cuando sea necesario
- Utilizar Key para las lista
- Utilizar PropType

---

## Primeros Pasos

1. Crear dentro de `src` una carpeta `components`
2. Copiar y pegar la carpeta api dentro de `src`
3. Importar en App.js el archivo api
4. Crear los siguientes componentes

## Card Container

- Por props se le pasa una lista de recetas
- Por cada elemento del array crea un componente card y lo ubica formando filas de 3 elementos

## Card

- Recibe por props la info
- El componente se va a dividir en dos parte, CardFront y CardBack

## CardFront

- Muestra la imagen de fondo
- Por evaluación de circuito corto, mostrar en pantalla los tags

## CardBack

- Muestra el nombre de la receta
- Muestra la puntuacion del 1 al 10, usar el componente Score
- Muestra la dificultad del 1 al 10, usar el componente Score
- Muestra el tiempo

## Score

- Por props recibe un numero,que va del 0 al 10 y como segundo parametro recibe un objeto con el tipo de icono a usar

---

## Info extra

- https://www.w3schools.com/css/css3_images.asp
- https://davidwalsh.name/css-flip
- https://react-icons.github.io/react-icons/
- https://coolors.co/
