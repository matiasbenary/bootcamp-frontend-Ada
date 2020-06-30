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
