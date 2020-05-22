// DOM API JavaScript
// Document Object Model
// Modelo de Objeto del Documento
// Nodos y Eventos
// Nodo es una etiqueta de html que a su vez puede contener mas nodos

// selecciona el elemento por id
const porId = document.getElementById("btnTijera");
// selecciona todos los elemento por ese tag,esto retorna un array
const porTag = document.getElementsByTagName("h1");
// selecciona todos los elemento por ese clase,esto retorna un array
const porClase = document.getElementsByClassName("buttons");
// selecciona la primera ocurrencia con el selector,es como en css el selector
const seleccionar = document.querySelector(".title");
// retorna un array con todos los elementos seleccionados
const seleccionarTodos = document.querySelectorAll(".title");

// con la propiedad style y seguido del atributo a modificar cambio el valor
porId.style.backgroundColor = "black";
// porTag[0].style.backgroundColor = "blue";
// porClase[0].style.backgroundColor = "black";
// seleccionar.style.backgroundColor = "black";
// seleccionarTodos[0].style.backgroundColor = "black";

// Me muestra todos los estilos aplicados a un elemento
 const estilos = getComputedStyle(porId);
//  const estilo = window.getComputedStyle(porId);


// retorna un array con las clases aplicadas al elemento
porTag[0].classList;
//  agrega una clase al elemento
porTag[0].classList.add("title--red");
//  remueve una clase al elemento
porTag[0].classList.remove("title--red");
//  Si exite la clase en el elemento la borra,y si esta no exite la agrega
porTag[0].classList.toggle("title--red");
//  remplaza una clase por otra,primer parametro es la clase vieja y el otro la que lo va a remplazar
porTag[0].classList.replace("title", "title--red");
//  retorna un booleano si la clase existe en el elemento
porTag[0].classList.contains("title--red");
// retorna un string con todas la clases aplicadas
porTag[0].className;
//  Si se le asigna un valor se sobreescriben todas las clase
porTag[0].className = "title";

// Este me modifica el contenido dentro de un html
porTag[0].innerHTML = "Nuevo Titulo";

//  Eventos
// console.dir(porId);
// Event handler
// Event listener
// a la propiedad onclick le asigno un funcion,esta se puede sobreescribir por eso no es recomendada
porId.onclick = () => {
  alert("Hola");
};
// porId.onclick = () => { alert("Chau")};

//agrego un escuchador de evento al elemento,como parametro el evento al que quiero atender,y seguido la funcion que va a manejar el evento
porId.addEventListener("click", () => {
  alert("hola");
});

const despedir = () => {
  alert("chau");
};

porId.addEventListener("click", despedir);

// Bloque de codigo a usar cuando quiero que mi script se carge luego de que cargo toda la pagina
// const init = () =>{

// }

// window.onload = init;

const input = document.querySelector("#name");
//  keypress keydown keyup
input.addEventListener("keypress", () => {
  console.log("Hola");
});
// como primer parametro se envia un objeto evento que este contiene toda la informacion del evento en si
const keyPressHandler = (event) => {
  console.log("Evento:", event);
  console.log(event.target);
  console.log(event.target.value);
  console.log(event.key);
};

input.addEventListener("keypress", keyPressHandler);

const btnPapel = document.getElementById("btnPapel");
const btnPiedra = document.querySelector("#btnPiedra");

btnPapel.addEventListener("click", (e) => {
  alert(input.value);
  alert(input.name);
});

btnPiedra.addEventListener("click", () => {
  input.value = "";
});
