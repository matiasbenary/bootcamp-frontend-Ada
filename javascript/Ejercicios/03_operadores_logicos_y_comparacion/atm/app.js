/* 
**💵 ATM**

- Crear un programa que permita hacer las siguientes operaciones: EXTRAER, DEPOSITAR, TRANSFERIR, CAMBIAR PIN, SALIR.

  - El programa debe tener un dinero inicial
  - El programa debe tener un PIN inicial
  - Para empezar a utilizarlo y llegar al menú de opciones, debe pedir ingresar el PIN. Si se lo ingresa incorrectamente debe terminar el programa
  - EXTRAER debe pedir cuánto se desea extraer y mostrar luego el dinero restante, sólo si la extracción es menor al dinero disponible
  - DEPOSITAR debe pedir cuánto se desea ingresar y mostrar luego el dinero resultante
  - TRANSFERIR debe pedir por un CBU (o alias) a transferir, preguntar cuánto se desea transferir y mostrar el dinero restante, si la transferencia es menor al dinero disponible y si el CBU es válido. Los CBU o alias válidos posibles (2 o 3) deben estar guardados en variables.
  - CAMBIAR PIN debe pedir primero por la contraseña nueva y luego por la contraseña original para confirmar el cambio
  - SALIR debe mostrar un mensaje de despedida
  - En cualquier situación mostrar mensajes de lo que esté pasando operaciones exitosas
*/
let dinero = 5000;
let pinInicial = 1234;
const CBUPepito = 123456;
const CBUMengano = 987654;

const atm = () => {
  const pin = Number(prompt("Ingrese su pin"));
  if (pin === pinInicial) {
    menuAtm();
  } else {
    alert("pin invalido, intente nuevamente");
  }
};

const transferirDinero = () => {
  const CBU = Number(prompt("ingrese el CBU"));
  if (CBU === CBUMengano || CBU === CBUPepito) {
    const monto = Number(prompt("ingrese el monto a TRANSFERIR"));
    actualizarDinero(-monto);
  } else {
    alert("CBU invalido");
  }
};
// si el pin es tipo number y si tiene 4 digitos
const cambiarPin = () => {
  const nuevoPin = Number(prompt("ingrese el nuevo pin"));
  if (typeof nuevoPin === "number" && nuevoPin.toString().length === 4) {
    pinInicial = nuevoPin;
  } else {
    alert("pin nuevo ingresado es invalido");
  }
};

const menuAtm = () => {
  const accionARealizar = prompt(
    "Cual de las siguientes operaciones desea realizar: EXTRAER, DEPOSITAR, TRANSFERIR, CAMBIAR PIN, SALIR"
  );
  let monto = null;
  switch (accionARealizar) {
    case "EXTRAER":
      monto = Number(prompt("ingrese la candida que desea EXTRAER"));
      actualizarDinero(-monto);
      break;
    case "DEPOSITAR":
      monto = Number(prompt("ingrese la candida que desea DEPOSITAR"));
      actualizarDinero(monto);
      break;
    case "TRANSFERIR":
      transferirDinero();
      break;
    case "CAMBIAR PIN":
      cambiarPin();
      break;
    case "SALIR":
      alert("Usted esta saliendo,vuelva pronto");
      break;
    default:
      alert("Opcion invalida,intente nuevamente");
  }
};
// 200 -250 -50
const actualizarDinero = (cambio) => {
  if (dinero + cambio >= 0) {
    dinero += cambio;
  } else {
    alert("fondos insuficientes");
  }
  alert(`el dinero disponible es de: ${dinero}`);
};
atm();
atm();
atm();
atm();
atm();
atm();
atm();
atm();
