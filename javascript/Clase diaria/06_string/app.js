const nombre = "Matias",
  apellido = "Benary";
const referencia = "'hey'Como estas ! \" estoy escapado\"";
const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a dolore, harum aut fuga iusto consectetur magni voluptatum magnam laborum amet ducimus animi provident obcaecati, possimus doloribus temporibus nam cum.";
const concat1 = nombre + " " + apellido;
const concat2 = nombre.concat(" ", apellido);
const concat3 = `${nombre} ${apellido}`;

console.log("normal", lorem);
console.log("largo:", lorem.length);
console.log("Mayuscula:", lorem.toUpperCase());
console.log("Miniscula:", lorem.toLowerCase());

console.log("busqueda por indice:", lorem.indexOf("elit"));

console.log("Corta texto:", lorem.substring(3, 21));
console.log("Corta texto:", lorem.slice(3, 21));
console.log("Texto a array:", lorem.split(" "));
console.log("Remplazo:", lorem.replace("Lorem", "Merol"));
console.log("Existe Lorem?:", lorem.includes("Lorem"));
