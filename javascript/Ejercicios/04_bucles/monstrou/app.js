/* EJ monstruo 
1- definir variables: 
- Vida jugadora 
- Vida monstruo 
- Cantidad de pociones 
- Ataque máximo jugadora 
- Ataque máximo monstruo 
- Curación máxima poción 
2- escribir cada accion del switch 
-atacar mosntruo: mathrandom para eegir num e/ 1 y ataque max jugadora restarle el resultado a vida del monstruo 
-tomar pocion: mathrandom para eegir num e/ 1 y cant max pocion. sumarlo a vida jugadora. restarle 1 a cant pociones 
-buscar pocion: mathrandom para eegir num e/ 1 y 4 si sale 1 sumar pocion else: nada 
-salir (cada uno es una funcion) nombrar fx 

3- mostrar los valores de todo (alert, console.log()) 
4-solicitar al usuario la accion deseada (prompt) 
5- correr el switch - paso la accion del usuario
6- mostrar valores actualizados 
6 y 1/2 - chequear que los valores no sean cero 
7- llamar ataque monstruo (fx) 
8-repetir paso 3 hasta que algun valor llegue a 0 
9- msj con resultado final */

/* EJ monstruo 
1- definir variables: 
- Vida jugadora 
- Vida monstruo 
- Cantidad de pociones
- Ataque máximo jugadora 
- Ataque máximo monstruo 
- Curación máxima poción 

2- escribir cada accion del switch 
-atacar mosntruo: mathrandom para eegir num e/ 1 y ataque max jugadora restarle el resultado a vida del monstruo 
-tomar pocion: mathrandom para eegir num e/ 1 y cant max pocion. sumarlo a vida jugadora. restarle 1 a cant pociones 
-buscar pocion: mathrandom para eegir num e/ 1 y 4 si sale 1 sumar pocion else: nada -salir (cada uno es una funcion) nombrar fx 
3- mostrar los valores de todo (alert, console.log()) 
4-solicitar al usuario la accion deseada (prompt) 
5- correr el switch 
6- mostrar valores actualizados 
6 y 1/2 - chequear que los valores no sean cero 
7- llamar ataque monstruo (fx) 
8-repetir paso 3 hasta que algun valor llegue a 0 

9- msj con resultado final */

let vidaJugadora = 10;
let vidaMonstruo = 10;
let cantPociones = 2;
let ataqueMaxJugadora = 3;
let ataqueMaxMonstruo = 10;
let curacionMaxPocion = 4;

const atacarMonstruo = () => {
  vidaMonstruo -= tirarDado(ataqueMaxJugadora);
};

const tomarPocion = () => {
  vidaJugadora += tirarDado(curacionMaxPocion);
  cantPociones--;
};

const buscarPocion = () => {
  let dado = tirarDado(4);
  if (dado == 1) {
    cantPociones++;
    console.log("pociones encontradas:", cantPociones);
  } else {
    console.log("no se encontro");
  }
};

const atacarJugadora = () => {
  vidaJugadora -= tirarDado(ataqueMaxMonstruo);
};

const mostrarEstado = () => {
  alert(`Vida jugadora: ${vidaJugadora}
Vida mounstruo: ${vidaMonstruo}
Cantidad de pociones: ${cantPociones}`);
};

const tirarDado = (max) => {
  // max = 4
  // 0 a 1 * 4 -> 0 a 3 -> 1 a 4
  // 0 0.1 0.56 .80 .95 -> 0 0.4 2.24 3.32 3.8 -> 0 0 2 3 4
  return Math.floor(Math.random() * (max + 1)) + 1;
};

for (let i = 0; i <= 1000; i++) {
  console.count(tirarDado(2));
}
const menuJugador = (parametro) => {
  switch (parametro) {
    case "atacar monstruo":
      atacarMonstruo();
      break;
    case "tomar pocion":
      tomarPocion();
      break;
    case "buscar pocion":
      buscarPocion();
      break;
    case "salir":
      break;
    default:
      alert("accion invalida");
  }
};
// esto se ejecuta infinitamente hasta que llega un break
// while (true) {
//   mostrarEstado();
//   let accion = prompt("que deseas hacer?");
//   menuJugador(accion);
//   if (accion == "atacar monstruo" && vidaMonstruo <= 0) {
//     alert("Felicitaciones Ganaste");
//     break;
//   }
//   mostrarEstado();
//   atacarJugadora();
//   alert("el mounstro te ataco");
//   if (vidaJugadora <= 0) {
//     alert("Felicitaciones Perdiste");
//     break;
//   }
// }
