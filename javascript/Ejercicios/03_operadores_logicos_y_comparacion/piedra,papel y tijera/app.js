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

const game = (player) => {
  const cpu = getRandomOption();

  if (player == cpu) {
    return "empato";
  }
  const isWin =
    (player == "piedra" && cpu == "tijera") ||
    (player == "tijera" && cpu == "papel") ||
    (player == "papel" && cpu == "piedra");

  return isWin ? `gano contra ${cpu}` : `perdio contra ${cpu}`;
};

const changeStatus = (msj) => {
  const status = document.getElementById("status");
  const mensaje = msj ? `El jugador ${msj}` : "";
  status.innerHTML = mensaje;
};

const tijera = document.getElementById("btnTijera");
const papel = document.getElementById("btnPapel");
const piedra = document.getElementById("btnPiedra");

tijera.addEventListener("click", () => {
  const status = game("tijera");
  changeStatus(status);
});
papel.addEventListener("click", () => {
  const status = game("papel");
  changeStatus(status);
});
piedra.addEventListener("click", () => {
  const status = game("piedra");
  changeStatus(status);
});
