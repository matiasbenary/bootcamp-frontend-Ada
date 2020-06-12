// Destructuring se utiliza para desarmar un objeto y quedarme con lo que voy a utilizar.
//  me evita estar estar recorriendo todo el objeto
const estudiante = {
  edad: 16,
  calificaciones: {
    matematica: 10,
    informatica: 9,
    fisica: 8,
  },
  nombre: "Ada Lovelace",
};

// const soloNombreYCalificaciones = ({ nombre, calificaciones }) => {
//   console.log(nombre, calificaciones);
// };

// const materiasNotasConLegua = ({
//   calificaciones: { matematica, informatica, lengua = 7 },
// }) => {
//   console.log(matematica, informatica, lengua);
// };

// const materiasNotas = ({ calificaciones: { matematica, informatica } }) => {
//   console.log(matematica, informatica);
// };

// soloNombreYCalificaciones(estudiante);
// materiasNotas(estudiante);
// materiasNotasConLegua(estudiante);

// const { fisica, matematica, informatica } = estudiante.calificaciones;

// console.log(fisica, matematica, informatica);

// si ponemos dos puntos podemos renombrar nuestra variable,del lado izquierdo va el nombre original(fisica) y despues de los dos puntos el alias(fisicoQuimica)
// const {
//   fisica: fisicoQuimica,
//   matematica,
//   informatica,
// } = estudiante.calificaciones;

// console.log(fisicoQuimica, matematica, informatica);

// Se puede agrega un valor por defecto colocando un igual y el valor esperado
// const {
//   fisica,
//   matematica,
//   informatica,
//   lengua = 7,
// } = estudiante.calificaciones;

// console.log(fisica, matematica, informatica, lengua);

// const {
//   calificaciones: { fisica, matematica, informatica },
// } = estudiante;

// console.log(fisica, matematica, informatica);

// Objetos: llama por propiedad por ende no importa el orden de las viriables
// Array: llama por indice por esto es importante el orden de las variables
// const rgb = [255, 200, 0];

// // Array Destructuring
// const [red, green, blue] = rgb;

// console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 200, B: 0

// const numeros = [2, 3, 6, 9, 87, 22];
// const [dos, , seis] = numeros;
// console.log(dos, seis);

// const numeros2 = [2, 3];
// const [dos, tres, seis = 6] = numeros2;
// console.log(dos, tres, seis);

// const numeros = [2, 3, 6, 9, 87, 22, 787];
// const [dos, , , , , veintidos] = numeros;
// console.log(dos, veintidos);

// let alto = 150;
// let ancho = 250;
// console.log("original", alto, ancho);
// [alto, ancho] = [ancho, alto];
// console.log("intercambio", alto, ancho);

// const color = ["#FF00FF", [255, 0, 255], "rgb(255, 0, 255)"];

// // usamos nested destructuring para asignar las variables red, green y blue
// const [hex, [red, green, blue]] = color;

// console.log(hex, red, green, blue); // #FF00FF 255 0 255

// const rainbow = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "indigo",
//   "violet",
// ];

// // asignamos el primer y tercer elementos a las variables red y yellow
// // asignamos los elementos restantes a la variable otherColors usando el spread(rest) operator
// const [red, , yellow, ...otherColors] = rainbow;

// console.log(otherColors); // ['green', 'blue', 'indigo', 'violet']

const persona = {
  nombre: "Ada Lovelace",
  edad: 27,
  ubicacion: {
    pais: "UK",
    ciudad: "Londres",
    coordenadas: [51.509865, -0.118092],
  },
};

// veamos como estamos utilizando array/object destructuring de forma mezclada
// estamos asignando 5 variables: nombre, pais, ciudad, lat y lng
const {
  nombre,
  ubicacion: {
    pais,
    ciudad,
    coordenadas: [lat, lng],
  },
} = persona;

console.log(
  `Yo soy ${nombre} de ${ciudad}, ${pais}. Latitud(${lat}), Longitud(${lng})`
);
