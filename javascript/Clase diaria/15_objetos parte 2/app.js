const nombre = "Matias";
const nombreIndice = "apellido";
const persona = {
  nombre: nombre,
  apellido: "Benary",
  edad: 25,
  leguajes: ["PHP", "HTML", "JS"],
  test: {
    tetera: "para hacer te",
  },
};

// Se puede agregar mas propiedades de la siguiente forma
persona.trabajo = ["ADA", "fonselp"];
// Para acceder a una propideda de forma estatica usamos el punto
console.log(`Hola ${persona.nombre} ${persona.apellido}`);
// Para acceder a una propiedad de forma dinamica usamos corchete,dentro de este puede ir una variable en formato string
console.log(persona["nombre"]);
console.log(persona[nombreIndice]);
console.table(persona);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Object
// Por parametro recibe un objeto y te retorna un array con todos lo propiedades de esta.
console.log(Object.keys(persona));
