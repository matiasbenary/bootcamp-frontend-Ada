const porId = document.getElementById("title");
const porTag = document.getElementsByTagName("h1");
const porClass = document.getElementsByClassName("title");
const porSelector = document.querySelector(".title");
const porSelectorAll = document.querySelectorAll(".title");

const list = document.querySelector("#list");

porId.style.fontSize = "50px";
porId.style.color = "red";
porId.innerHTML = `<button>Click</button>Hola`;
porId.innerText = `<button>Click</button>Hola`;
porId.classList.add("title__black");
porId.classList.remove("title");
porId.classList.toggle("title__black");
porId.classList.add("title");
porId.classList.contains("title__black");
porId.classList.replace("title", "title__black");

porId.className = "title";
// list.childNodes.forEach((element) => {
//   console.log(element.innerHTML);
// });

const bottonAlert = document.querySelector("#alert");

const cambiarColor = (event) => {
  alert("hola");
  console.log(event);
  event.target.style.backgroundColor = "red";
};
bottonAlert.addEventListener("click", cambiarColor);

const saludar = (nombre) => {
  const empleade = empleades.find((empleade) => {
    return empleade.nombre == nombre;
  });
  alert(`Se trabajar en ${empleade.lenguajes.join(",")}`);
};

const borrar = (nombre) => {
  empleades = empleades.filter((empleade) => {
    return empleade.nombre != nombre;
  });
  generarCards();
};

const generarCards = () => {
  const cards = document.querySelector("#cards");
  cards.innerHTML = empleades.reduce((html, empleade) => {
    return (
      html +
      `<div class="card">
          <div class="card--title">${empleade.nombre}</div>
          <div class="card--body">
            Soy de ${empleade.pais} tengo ${empleade.edad} anios y trabajo en el area de ${empleade.area}
          </div>
          <div class="card--footer"><button onClick="(saludar('${empleade.nombre}'))">Saludar</button></div>
          <div class="card--footer"><button onClick="(borrar('${empleade.nombre}'))">Borrar</button></div>
        </div>
        `
    );
  }, "");
};

generarCards();
