// - Una calculadora
/*
 2 input numeros
 4 botones con operaciones basicas
 1 p para mostrar el resultado


 10 botones numeros
 4 botones con operaciones basicas
 1 p para mostrar el resultado
*/
// numero 1 y 2 van a darme los numero ejecutar
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
// acciones a realizar
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const dividir = document.getElementById("dividir");
const multiplicar = document.getElementById("multiplicar");

// Valor a escribir
const resultado = document.getElementById("resultado");

resultado.innerHTML = 0;

sumar.addEventListener("click", () => {
  resultado.innerHTML = Number(numero1.value) + Number(numero2.value);
});

restar.addEventListener("click", () => {
  resultado.innerHTML = Number(numero1.value) - Number(numero2.value);
});

dividir.addEventListener("click", () => {
  resultado.innerHTML = Number(numero1.value) / Number(numero2.value);
});

multiplicar.addEventListener("click", () => {
  resultado.innerHTML = Number(numero1.value) * Number(numero2.value);
});

// const numero1 = document.getElementById("numero1");

// Le podes agregar un evento numero1.addEventListener
// Le podes pedir el valor numero1.value numero1.innerHTML
// Le podes sobreescribir el valor numero1.value = "valor a asignar" numero1.innerHTML="valor a asignar"
//  diferencias entre innerHTML y value,innerHTML los usas para cualquier etiqueta menos los input.Y value solo para input
