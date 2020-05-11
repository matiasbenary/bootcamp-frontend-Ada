const getRandom = () => {
  return Math.ceil(Math.random() * 10);
};

let salud = getRandom();
let felicidad = getRandom();
let limpieza = getRandom();
let energia = getRandom();

/* poner un boton:
    onclick="nombreFuncion('parametros')" en el html


    si yo quiero mostrar informacion:
    en el html,a la etiqueta que yo quiera le agrego un id

    y en el js
    creo un const con un nombre y le asigno document.getElementById("NombredelID")

    y cuando lo quiero escribir uso el nombre.innerHTML y le asigno un valor

*/

// pido del html el elemento con el id healthSpan y lo asigno en la variable healthSpan
const healthSpan = document.getElementById("healthSpan");
const happinessSpan = document.getElementById("happinessSpan");
const cleanlinessSpan = document.getElementById("cleanlinessSpan");
const energySpan = document.getElementById("energySpan");

const updateSpan = () => {
  // de la referencia healthSpan le guardo cambio el valor de la salud actual
  healthSpan.innerHTML = salud;
  happinessSpan.innerHTML = felicidad;
  cleanlinessSpan.innerHTML = limpieza;
  energySpan.innerHTML = energia;
};

const alimentar = () => {
  energia += 3;
  felicidad += 2;
};

const jugar = () => {
  energia -= 2;
  felicidad += 2;
  limpieza -= 1;
};
const dormir = () => {
  energia += 5;
  salud += 2;
  limpieza -= 2;
};

const vacunar = () => {
  salud += 5;
  felicidad -= 6;
};

const baniar = () => {
  salud += 3;
};

const retar = () => {
  felicidad -= 3;
};

const acariciar = () => {
  felicidad += 4;
};

const tamagochiMenu = (action) => {
  switch (action) {
    case "ALIMENTAR":
      alimentar();
      break;
    case "JUGAR":
      jugar();
      break;
    case "DORMIR":
      dormir();
      break;
    case "VACUNAR":
      vacunar();
      break;
    case "BAÑAR":
      baniar();
      break;
    case "RETAR":
      retar();
      break;
    case "ACARICIAR":
      acariciar();
      break;
  }
};

// inicializo - muestro en pantalla los valores de status
updateSpan();

//  cada vez que se apreta un boton se llama a tamagochi
const tamagochi = (action) => {
  tamagochiMenu(action);
  updateSpan();
};
