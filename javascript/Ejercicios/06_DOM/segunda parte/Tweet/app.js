/*
Tweet: hacer un textarea que permita escribir hasta 240 caracteres. Debe haber un contador de caracteres restantes que se vaya actualizando, debe empezar con 240 e irse restando. También debe haber un botón de enviar que cuando se haga click en este borre el texto ingresado, reinicie el contador y muestre un alert que diga que fue enviado. Si el texto ingresado es más largo que el permitido, tanto el texto como el contador debe ponerse en color rojo, el contador debe pasar a números negativo y el botón debe cambiar de estilo y deshabilitarse (no poder clickearlo).


HTMl: 
    label -> contador
    textarea -> ingrese el texto
    boton -> enviar 

clase que cambie los colores a rojo
cambiar estilos al boton 
y deshabilitarse

variables del DOM:
    label 
    textarea
    boton

variables logica:
    maxCarateres

1- Cuando apreto una tecla dentro del textarea se me actualiza el contador
2- Cuando click en el boton borre el textarea y me muestre un alert mostrando el texto 
3- Si supero el limite de caracteres,el texto dentro del textarea se muestra rojo,el label tambien y se me deshabilita el boton.
    
*/

const label = document.querySelector("#labelTweet");
const textarea = document.querySelector("#textAreaTweet");
const button = document.querySelector("#buttonTweet");

const maxCarateres = 240;

const actualizarLabel = () => {
  label.innerHTML = caracteresRestantes();
};

const caracteresRestantes = () => {
  return maxCarateres - textarea.value.length;
};

const excesoDeCaracterer = () => {
  if (caracteresRestantes() < 0) {
    label.classList.add("error");
    textarea.classList.add("error");
    button.disabled = true;
  } else {
    label.classList.remove("error");
    textarea.classList.remove("error");
    button.disabled = false;
  }
};

textarea.addEventListener("keyup", () => {
  actualizarLabel();
  excesoDeCaracterer();
});

button.addEventListener("click", () => {
  alert(textarea.value);
  textarea.value = "";
  actualizarLabel();
});

actualizarLabel();
