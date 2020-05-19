// Crear un input y un h1,cuando se escriba en el input se vea reflejado en el h1

const titulo = document.getElementById("titulo");
const input = document.querySelectorAll(".input");
// Event es un objeto que contiene informacion del evento,como que tecla se apreto,etc. Tambien el elemento que disparo el evento
for(let i = 0; i< input.length ; i++){
  input[i].addEventListener("keyup", (event) => {
      titulo.innerHTML = event.target.name;
    });
}

// const addEventListener=(evento,callback)=>{
//   // hacer algo js
//   if("keyup" && input){
//     callback(event)
//   }
// }

// const hacerCuenta = (num1,num2,accion) =>{
//   return accion(num1,num2);
// }

// const sumar = (num1,num2)=> num1+num2;

// hacerCuenta(15,16,sumar);

// input.addEventListener("keyup", (event) => {
//   // console.log(event);
//   // console.log(event.target);
//   // console.log(input);
//   // console.log(input === event.target);
//   titulo.innerHTML = event.target.value;
// });
