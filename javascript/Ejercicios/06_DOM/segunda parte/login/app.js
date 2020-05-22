/*
- Hacer un login,se deber crear un form,donde se ingrese usuario y password,en caso de ser correcto,mostrar un alert que diga estas logeado,en caso contrario mostrar un mensaje en pantalla que diga usuario no registrado.

DOM : 
 label y input para el usuario
 label y input para la clave
 boton para enviar 
 p donde se muestre el texto

 js:
    variable de usuario
    variable de clave

1- Cuando se aprete el boton de login se revisa que el usuario y clave ingresada coincidan con las variables que creamos con anterioridad.Si es correcta muetro un alert que me diga que estoy logeado
sino me muestre un mensaje que diga que el usuario no esta registrado.
*/

const usuarioDom = document.querySelector("#user");
const claveDom = document.querySelector("#password");
const botonDom = document.querySelector("#submit");
const msjDom = document.querySelector("#msj");

const usuario = "Matias";
const clave = "1234";

botonDom.addEventListener("click", (event) => {
  event.preventDefault(); //Evito que se haga el submit,es decir que evito que se recarge la pagina.

  const exitesElUsuario =
    usuario === usuarioDom.value && clave === claveDom.value;

  if (exitesElUsuario) {
    alert("usuario Logeado");
    msjDom.innerHTML = "";
  } else {
    msjDom.innerHTML = "El usuario o clave invalida";
  }
});
