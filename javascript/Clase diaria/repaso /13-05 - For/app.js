for (let indice = 0; indice <= 100; indice++) {
  console.log(indice);
}

for (let indice = 100; indice >= 0; indice--) {
  console.log(indice);
}

for (let indice = 100; indice >= 0; indice--) {
  if (indice % 2 == 0) {
    console.log(`El indice par es: ${indice}`);
  }
}

const playlistName = prompt("cual sera el nombre de su playlist?");
const songNumber = Number(prompt("cuantas canciones quiere en su playlist?"));
// document.write(`${playlistName} <br>`);
// for (let addsongs = 0; addsongs < songNumber; addsongs++) {
//   let cancionesFaltan = songNumber - addsongs;
//   let ingresarCanciones = prompt(
//     `ingrese el nombre de la nueva cancion a la playlist - faltan ingersar ${cancionesFaltan} canciones de ${songNumber}.`
//   );
//   document.write(` ${ingresarCanciones} <br> `);
// }

let canciones = [];
const nombrePlaylist = prompt("Ingrese un nombre para la Playlist");
const cantidadCanciones = Number(prompt("Cuantas canciones deseas agregar?"));
for (let i = 0; i < cantidadCanciones; i++) {
  canciones.push(
    prompt(
      "Nombre playlist: " +
        nombrePlaylist +
        " / canciones -> " +
        canciones +
        " / ingrese cancion " +
        (i + 1) +
        " --> " +
        " te quedan " +
        (cantidadCanciones - (i + 1)) +
        " canciones por agregar"
    )
  );
}
alert(
  "Tu playlist se llama" + nombrePlaylist + "y tus canciones son" + canciones
);
