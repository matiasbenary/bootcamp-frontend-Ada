const numero = 45;
const edad = "edad";
// Un objeto es una coleccion de variables, con nombres como indice.Esto me permite abstraer(Que cualidades tiene?).se utiliza ":" para darle un valor.
const persona = {
  nombre: "Matias",
  edad: numero,
  lenguajes: ["PHP", "HTML", "JS", "MYSQL"],
};
console.log("Altura:", persona.altura);
persona.altura = 1.8;
console.log("Altura:", persona.altura);
persona.altura = undefined;
const personaArray = ["Matias", 25];

console.log("edad:", persona.edad);
// Se puede acceder de forma dinamica a la propiedad de un objeto usando corchetes y el nombre del la propiedad en formato string
console.log("edad:", persona["edad"]);
console.log("edad:", persona[edad]);

console.log("Lenguajes", persona.lenguajes);

// cuando hago persona.lenguajes -> ["PHP", "HTML", "JS", "MYSQL"]
// persona.lenguajes.length -> 4
persona.lenguajes.push("CSS");
for (let i = 0; i < persona.lenguajes.length; i++) {
  console.log(`Yo conozco un poco de ${persona.lenguajes[i]}`);
}
