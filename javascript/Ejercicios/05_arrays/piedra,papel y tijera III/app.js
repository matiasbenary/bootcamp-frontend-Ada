/*
**Piedra, papel, tijera III**

- Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los valores de la jugada en una ronda de "piedra, papel o tijera". Primero debe preguntarse el nombre de la jugadora 1, luego sus jugadas, luego el nombre de la jugadora 2, luego sus jugadas. El programa debe comparar los valores de las listas uno a uno (el primero con el primero, el segundo con el segundo) sumando un punto a la jugadora que gane la ronda. Al finalizar, mostrar quién gano y los puntajes finales. Ejemplo:

```javascript
// Ingrese nombre jugadora 1: Ada
// Ingrese jugadas de Ada: piedra papel papel piedra tijera

// Ingrese nombre jugadora 2: Grace
// Ingrese puntajes de Grace: papel piedra tijera tijera papel

// Resultado: 3 (Ada) vs 2 (Grace)
// Ganadora: Ada
```

1- definir variables:
    * Nombre de jugadora1(string)
    * jugadas 1 (array)
    * Nombre de jugadora2(string)
    * jugadas 2 (array) 

    * puntaje1(number)
    * puntaje2(number)
2- tengo recorrer cualquier array - pero tengo que tener cuidado de que tengan el mismo largo
3- hay comparalos con las reglas del piedra papel y tijera y sumar puntaje
4- Una vez de recorrer el array muestro resultados

*/

const nombreJugadora1 = prompt("Ingrese el nombre de jugadora 1");
const jugadasJugadora1 = prompt("Ingrese sus jugadas").split(" ");

const nombreJugadora2 = prompt("Ingrese el nombre de jugadora 2");
const jugadasJugadora2 = prompt("Ingrese sus jugadas").split(" ");
//  Esto es hardcodear es fijar unas variables para hacer pruebas
// const nombreJugadora1 = "Matias";
// const jugadasJugadora1 = "papel piedra tijera".split(" ");

// const nombreJugadora2 = "Pepito";
// const jugadasJugadora2 = "papel papel papel".split(" ");

let puntaje1 = 0;
let puntaje2 = 0;

const comprobarGanador = (jugadaJugador1, jugadaJugador2) => {
  if (jugadaJugador1 == jugadaJugador2) {
    return;
  }
  const ganoJugador1 =
    (jugadaJugador1 == "piedra" && jugadaJugador2 == "tijera") ||
    (jugadaJugador1 == "tijera" && jugadaJugador2 == "papel") ||
    (jugadaJugador1 == "papel" && jugadaJugador2 == "piedra");

  if (ganoJugador1) {
    puntaje1++;
  } else {
    puntaje2++;
  }
};
if (jugadasJugadora1.length == jugadasJugadora2.length) {
  for (let i = 0; i < jugadasJugadora1.length; i++) {
    comprobarGanador(jugadasJugadora1[i], jugadasJugadora2[i]);
    alert(
      `jugadas ${i + 1} ${nombreJugadora1}:${
        jugadasJugadora1[i]
      } ${nombreJugadora2}:${jugadasJugadora2[i]}`
    );
    alert(
      `puntajes ${nombreJugadora1}:${puntaje1} ${nombreJugadora2}:${puntaje2}`
    );
  }
} else {
  alert("No tienen la misma cantidad de jugadas");
}
