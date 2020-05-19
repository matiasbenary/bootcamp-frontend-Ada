/*
- Recrear el piedra,papel y tijera.Este consta de 3 botones,piedra,papel y tijera respectivamente,cuando se le hace click este muestra un mensaje de ganaste,empataste,o perdiste.Cada mensaje tiene un color distintivo.

dom:
 titulo ->h1
 botones *3 -> piedra,papel y tijera
 status -> voy a mostrar si gane perdi o empate.
*/

const btnPiedra = document.getElementById("btnPiedra");
const btnPapel = document.getElementById("btnPapel");
const btnTijera = document.getElementById("btnTijera");
const status = document.getElementById("status");

const getRandomOption = () => {
  const random = Math.random();
  if (random <= 0.33) {
    return "piedra";
  }
  if (random <= 0.66) {
    return "tijera";
  } else {
    return "papel";
  }
};

const jugarPartida = (player) => {
  const cpu = getRandomOption();

  if (player == cpu) {
    return 0;
  }
  const isWin =
    (player == "piedra" && cpu == "tijera") ||
    (player == "tijera" && cpu == "papel") ||
    (player == "papel" && cpu == "piedra");

  return isWin ? 1 : -1;
};

const mostrarStatus = (statusPartida) => {
  switch (statusPartida) {
    case -1:
      status.className = "status status--lose";
      status.innerHTML = "Perdiste la partida";
      break;
    case 0:
      status.className = "status";
      status.innerHTML = "Empataste la partida";
      break;
    case 1:
      status.className = "status status--win";
      status.innerHTML = "Ganaste la partida";
      break;
  }
};

/*
-1 perdi
0 empate
1 gane

0 perdi
1 empate 
2 ganar
*/
btnPiedra.addEventListener("click", () => {
  const statusPartida = jugarPartida("piedra");
  mostrarStatus(statusPartida);
});

btnPapel.addEventListener("click", () => {
  const statusPartida = jugarPartida("papel");
  mostrarStatus(statusPartida);
});

btnTijera.addEventListener("click", () => {
  const statusPartida = jugarPartida("tijera");
  mostrarStatus(statusPartida);
});
