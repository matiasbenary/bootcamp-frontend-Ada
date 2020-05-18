// Crear un input y un h1,cuando se escriba en el input se vea reflejado en el h1

const titulo = document.getElementById("titulo");
const input = document.querySelector("#inputTitulo");

input.addEventListener("keypress",(e) =>{
 
    titulo.innerHTML = input.value; 
})