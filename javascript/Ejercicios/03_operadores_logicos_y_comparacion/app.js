let dineroDisponible = 5000;

const mostrarDineroDisponible = () => {
  alert(dineroDisponible);
};
const retirarDinero = (cantidad) => {
  // 5000 >= 3000
  if (dineroDisponible >= cantidad) {
    //   dineroDisponible = dineroDisponible - cantidad
    dineroDisponible -= cantidad;
    mostrarDineroDisponible();
  } else {
    alert("Te quedaste sin dinero");
  }
};
// const retirarDinero = (cantidad) => {
//   //  voy a sacar dos veces 3000
//   //primer vuelta- 5000 -3000
//   //segunda vuelta- 2000 -3000
//   const aux = dineroDisponible - cantidad;
//   if (aux < 0) {
//     //segunda vuelta- 2000 -3000
//     alert("Te quedaste sin dinero");
//   } else {
//     //primer vuelta- asigna lode aux a dinero disponible
//     dineroDisponible = aux;
//     mostrarDineroDisponible();
//   }
// };

const isOdd = (num) => {
  return num % 2 ? "es impar" : "es par";
};
