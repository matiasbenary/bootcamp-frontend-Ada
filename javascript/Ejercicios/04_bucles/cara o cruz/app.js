/* 
**💲Cara o cruz**

- Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.


variables
 1-   caraOCruz -> prompt
 1-   fx -> Eleccion Correcta o incorrecta
 2-   contador de aciertos -> si ganastes ++
 2-   cantidad de ronda seguidas -> si perdiste comparo ronda seguidas con contador de aciertos y me quedo con  el mas grande.
 3-   fx Salir -> mostrar mensaje con cantidad de rondas seguidas acertadas y terminar ejecucion
*/
let contadorAciertos = 1;
let contadorRondas = 1;
let resultado = false;
let accion = "";

const tirarMoneda = (caraOCruz) => {
  const tirada = Math.random();
  // 0 1 0 a 0.5 0.5 a 1
  let moneda = tirada >= 0.5 ? "😋" : "✘";

  return moneda === caraOCruz;
};

const jugarJuego = (caraOCruz) => {
  // prompt a reemplazar
  alert(`La cantidad de rondas son: ${contadorAciertos}`);
  resultado = tirarMoneda(caraOCruz);
  if (resultado) {
    alert("ganaste");
    contadorAciertos++;
  } else {
    alert("perdiste");
    contadorRondas =
      contadorRondas > contadorAciertos ? contadorRondas : contadorAciertos;
    contadorAciertos = 1;
  }
};

while (accion !== "SALIR") {
  // let caraOCruz = "✘";
  accion = prompt("Ingrese 😋 o ✘ para jugar sino ingrese SALIR");

  switch (accion) {
    case ("😋", "✘"):
      jugarJuego(accion);
      break;
    case "SALIR":
      alert(`Hasta la vista Baby,tu maximo de ronda es de ${contadorRondas}`);
      break;
    default:
      alert("Opcion invalida");
  }
}

const primerArray = [1, 2, 3, 4, 5];
const segundoArray = [1, 2, 3, 4, 5];

let iguales = true;
const igualLargo = () => {
  if (primerArray.length !== segundoArray.length) {
    alert("Los array no son iguales. Tienen distinta longitud.");
  }
};
igualLargo();
const sonIguales = () => {
  for (let i = 0; i < primerArray.length; i++) {
    if (primerArray[i] !== segundoArray[i]) {
      iguales = false;
      break;
    }
  }
  const msj = iguales ? "son iguales" : "No son iguales";
  alert(msj);
};
sonIguales();
