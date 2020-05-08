// **🗓 Meses del año**
// - Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente.
//  entra un numero y me devuelve un mes
const getMonth = (num) => {
  let mes = "";
  // if(num === 1){
  //  mes = "enero"
  // }else if(num ===2){
  // mes = "febrero"
  // }else{
  //  caso por default
  //   }
  switch (num) {
    case 1:
      mes = "enero";
      break;
    case 2:
      mes = "febrero";
      break;
    case 3:
      mes = "marzo";
      break;
    case 4:
      mes = "abril";
      break;
    case 5:
      mes = "mayo";
      break;
    case 6:
      mes = "junio";
      break;
    case 7:
      mes = "julio";
      break;
    case 8:
      mes = "agosto";
      break;
    case 9:
      mes = "septiembre";
      break;
    case 10:
      mes = "octubre";
      break;
    case 11:
      mes = "noviembre";
      break;
    case 12:
      mes = "diciembre";
      break;
    default:
      mes = "invalido";
  }

  return mes;
};
// mesesNumero = 5
const mesNumero = Number(prompt("Ingrese el numero del mes"));
// mesNombre = getMonth(5);
// mesNombre = "mayo";
const mesNombre = getMonth(mesNumero);
alert(`el numero de mes ${mesNumero} es ${mesNombre}`);

// const test = (parametro1, parametro2) => {
//     console.log(parametro1,parametro2);
// }

// const horno = (comida) => {
//   // variable local a la funcion
//   console.log(`estas cocinando una ${comida}`);
// };

// const comida1 = "pollo";
// horno("torta");
// horno("pizza");
// horno(comida1);
