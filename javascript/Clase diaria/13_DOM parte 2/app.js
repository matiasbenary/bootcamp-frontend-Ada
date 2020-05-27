// con parentElement obtengo la referencia del padre
// children obtengo los hijos del nodo
document.querySelector("#span1").parentElement.id; // myDiv
document.querySelector("#myDiv").children; // [<span1>, <span2>]
document.querySelector("#myDiv").children[0].id; // span1

const test = document.getElementById("test");
const url = document.getElementById("url");
const img = document.getElementById("img");
const inputText = document.getElementById("inputText");
const orange = document.getElementById("orange");
// innerHTML vs textContent,el primero me permite cambiar el html,mientras que el segundo me deja agregra texto plano
test.innerHTML; // Devuelve todo el contenido interno del element incluyendo los tags en formato string
test.textContent; // Devuelve el contenido de texto, sin traer los tags
test.src; // Devuelve el contenido del attr src
test.href; // Devuelve el contenido del attr href
test.value; // Devuelve el valor que tiene un elemento de tipo input, select, textarea
test.selected; // Devuelve si el elemento esta seleccionado
test.id; // Devuelve el ID del elemento
test.hidden; // Devuelve si el elemento esta oculto
test.name; // Devuelve la clase de un elemento
// console.log(test.innerHTML);
// test.innerHTML = ` <div id="myDiv">
//       <span id="span1">Span 1</span>
//       <span id="span2">Span 2</span>
//     </div>`;
// console.log(test.textContent);
// test.textContent = ` <div id="myDiv">
//       <span id="span1">Span 1</span>
//       <span id="span2">Span 2</span>
//     </div>`;
console.log(img.src);
img.src = "img/gato2.jpg";
console.log(url.href);
url.href = "https://www.mercadolibre.com";
console.log(inputText.value);
inputText.value = "pepito";

orange.selected = true;
img.hidden = true;
console.log(inputText.name);
inputText.name = "tesd";
