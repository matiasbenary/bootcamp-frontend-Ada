const hola = document.getElementById("hola");
const text = document.getElementById("text");
const titulo = document.getElementById("titulo");

hola.addEventListener("click", () => {
  alert("hola");
});

text.addEventListener("blur", (event) => {
  console.log(event.type + " " + event.target.value);
});

text.addEventListener("change", (event) => {
  titulo.innerHTML = event.type + " " + event.target.value;
});
