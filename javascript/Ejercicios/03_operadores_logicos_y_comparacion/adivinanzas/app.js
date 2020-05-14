/*
**🤔 Adivinanzas**

- Crear un programa que muestre una adivinanza (entre 4 o 5 posibles) al azar, y permita al usuario ingresar la respuesta. Mostrarle un mensaje indicándole si acertó o no.

crear las adivinanzas,guardarlas en variables
crear las respuesta de estas y guarudarlas en variables
crear funcion que use Math.random y que me devuelva una adivinanza al azar

mostrar la adivinanza y pedir al usuario que ingrese la respuesta
vamos a comparar la respuesta de la adivinanza con la que ingreso el usuario
Si es correcta mostramos un mensaje de felicitaciones
Sino mostrar mostramos un mensaje de error
*/
/* 
Solucion 1:


const riddle1 = "No es cama ni es león, y desaparece en cualquier rincón.";
const riddle2 =
  "En la ciudad o el campo es un amigo del hombre.Adivina cuál es este animal sin que te diga su nombre.";
const riddle3 =
  "Es la reina de los mares, su dentadura es muy buena, y por no ir nunca vacía, siempre dicen que va llena.";
const riddle4 =
  "En el circo lo veo, en el zoo, también. Tiene la nariz más grande que en el mundo pueda haber.";
const riddle5 = "Oro parece, plata no es.Quien no lo adivine listo no es.";

const response1 = "camaleon";
const response2 = "perro";
const response3 = "ballena";
const response4 = "elefante";
const response5 = "platano";


 //     4.2 5.6 5.5
  //  round
   // 4 6 6
   // ceil 
   // 5 6 6
   // floor
  //  4 5 5
  
const getRiddle = () => {
  const random = Math.floor(Math.random() * 5) + 1; // 1 al 5 al azar
  // 0 a 1 -> 0.15 0.25 0.65 0.7 -> 0.75 1.25 3.25 3.5 -> 0 1 3 3 -> 1 2 4 4
  // const random = Math.random();  0 100 %  100 / 5 20 20%   0  riddle1 0.2 riddle2 0.4 riddle3 0.6  riddle4 0.8  riddle5 1

  //   if (random === 1) {
  //     return riddle1;
  //   } else if (random === 2) {
  //     return riddle2;
  //   } else if (random === 3) {
  //     return riddle3;
  //   } else if (random === 4) {
  //     return riddle4;
  //   } else if (random === 5) {
  //     return riddle5;
  //   }

  //  no se coloca break por que el return me corta la funcion y el default no se coloca porque todos los casos posibles estan contenidos y no se va a generar error

  switch (random) {
    case 1:
      return riddle1;
    case 2:
      return riddle2;
    case 3:
      return riddle3;
    case 4:
      return riddle4;
    case 5:
      return riddle5;
  }
};

const riddle = getRiddle();
const response = prompt(riddle);
if (
  (riddle === riddle1 && response === response1) ||
  (riddle === riddle2 && response === response2) ||
  (riddle === riddle3 && response === response3) ||
  (riddle === riddle4 && response === response4) ||
  (riddle === riddle5 && response === response5)
) {
  alert("Ganaste");
} else {
  alert("Perdiste");
}
*/
//  Solucion 2 - by Chiara
const riddle1 = " No es cama ni es león, y desaparece en cualquier rincón.";
const riddle2 =
  "En la ciudad o el campo es un amigo del hombre.Adivina cuál es este animal sin que te diga su nombre.";
const riddle3 =
  "Es la reina de los mares, su dentadura es muy buena, y por no ir nunca vacía, siempre dicen que va llena.";
const riddle4 =
  "En el circo lo veo, en el zoo, también. Tiene la nariz más grande que en el mundo pueda haber.";
const riddle5 = "Oro parece, plata no es.Quien no lo adivine listo no es.";
const getRandomRiddle = () => {
  const random = Math.random();
  if (random <= 0.2) {
    return riddle1;
  }
  if (random <= 0.4) {
    return riddle2;
  }
  if (random <= 0.6) {
    return riddle3;
  }
  if (random <= 0.8) {
    return riddle4;
  }
  if (random <= 1) {
    return riddle5;
  }
};
const currentRiddle = getRandomRiddle();
alert(currentRiddle);
const correctAnswer = (par) => {
  if (par == riddle1) {
    return "camaleon";
  }
  if (par == riddle2) {
    return "perro";
  }
  if (par == riddle3) {
    return "ballena";
  }
  if (par == riddle4) {
    return "elefante";
  }
  if (par == riddle5) {
    return "platano";
  }
};
const currentAnswer = correctAnswer(currentRiddle);
const userAnswer = prompt("respuesta:");
console.log(userAnswer);
console.log(currentAnswer);
const gameResult = (ans) => {
  if (ans == currentAnswer) {
    alert("correcto!");
  } else if (ans !== currentAnswer) {
    alert("incorrecto");
  } else {
    alert("error");
  }
};
gameResult(userAnswer);
