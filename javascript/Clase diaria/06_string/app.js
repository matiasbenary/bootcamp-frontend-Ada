const nombre = "Matias",
  apellido = "Benary";
const referencia = "'hey'Como estas !\n \" estoy escapado \"";
const lorem =
  "Lorem ipsum Lorem dolor sit amet consectetur adipisicing elit. Voluptatem a dolore, harum aut fuga iusto consectetur magni voluptatum magnam Lorem laborum amet ducimus animi provident obcaecati, possimus doloribus temporibus nam cum. Lorem";
const concat1 = nombre + " " + apellido;
const concat2 = nombre.concat(" ", apellido);
const concat3 = `nombre: ${nombre}  apellido:${apellido}`;

console.log("normal", lorem);
// sirve para ver la cantidad de caracteres
console.log("largo:", lorem.length);
// convierte el texto en mayuscula o miniscula
console.log("Mayuscula:", lorem.toUpperCase());
console.log("Miniscula:", lorem.toLowerCase());

// me retorna la ubicacion del la palabra buscarda,ej ipsum me retorana 6,ya que contara desde 0 a partir de Lorem.Si no se encuantra retornara un -1
console.log("busqueda por indice:", lorem.indexOf("ipsum"));

// Cortar texto indico el principio y final basandome en el indice
console.log("Corta texto:", lorem.substring(3, 21));
console.log("Corta texto:", lorem.slice(3, 21));

// le paso como parametro un patron y me retorna un array.es decir le pasamos el punto de corte - by Vale
console.log("Texto a array:", lorem.split("m"));
// Cambia una palabra por otra
console.log("Remplazo:", lorem.replace("Lorem", "Merol"));
// Retorna un booleano
console.log("Existe Lorem?:", lorem.includes("Lorem"));
