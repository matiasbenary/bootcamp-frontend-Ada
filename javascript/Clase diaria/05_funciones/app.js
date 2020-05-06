/*
    creo un variable const con el nombre de mi funcion
    arrow function

*/

const multiplicar = (num1, num2) => {
  return num1 * num2;
};

const alertSaludor = (nombre) => {
  alert(`Hola ${nombre}, como estas?`);
};

const numerosRandom = () => {
  return Math.random();
};

const alertDespedidor = (nombre = "") => {
  alert(`Chau ${nombre}`);
};

const conversacion = () => {
  const nombre = "pepito";
  alertSaludor(nombre);
  alertDespedidor();
};
