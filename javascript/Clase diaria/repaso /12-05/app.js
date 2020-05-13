/*
const test = (moneda) => moneda * 70;

test(16);
*/
// typeof
const tipoCambio = prompt("Ingrese la el tipo de cambio que quiere");
let indiceConversion = null;
/*
if (tipoCambio === "dolar") {
  indiceConversion = 65;
} else if (tipoCambio === "libra") {
  indiceConversion = 80;
} else if (tipoCambio === "euro") {
  indiceConversion = 75;
} else {
  alert("Tipo de cambio invalido");
}
*/
switch (tipoCambio) {
  case "dolar":
    // 0 al 20 mas 60 = 60 a 80;
    indiceConversion = Math.floor(Math.random() * 20) + 60;
    break;
  case "libra":
    indiceConversion = 80;
    break;
  case "euro":
    indiceConversion = 75;
    break;
  default:
    indiceConversion = null;
}
/*
let mensaje = null;
if (indiceConversion) {
  mensaje = "Felicitaciones ingrasaste bien el tipo cambio";
} else {
  mensaje = "Tipo de cambio invalido";
}*/
// (condicion)?si es verdadero es este valor : es falso es este valor
const mensaje = indiceConversion
  ? "Felicitaciones ingrasaste bien el tipo cambio"
  : "Tipo de cambio invalido";

alert(mensaje);

if (indiceConversion) {
  const convertirMoneda = (moneda) => moneda * indiceConversion;
  const moneda = Number(prompt("Ingrese la moneda"));
  console.log(typeof moneda);
  // null Nan 0 false '' undifined
  if (moneda && typeof moneda === "number") {
    alert(`tu pesos son ${convertirMoneda(moneda)}`);
  } else {
    console.log("sino se ejecuta esto");
  }
}
