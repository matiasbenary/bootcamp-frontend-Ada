const filtarSolista = (artistas) =>
  artistas.filter((artista) => artista.solista);

// const filtarSolista = (artistas) => {
//   return artistas.filter((artista) => {
//     return artista.solista;
//   });
// };
// artistas []
// artista {}
// artistaConMasEntradas {}
const artistaConMasEntradasVendida = (artistas) =>
  artistas.reduce((artistaConMasEntradas, artista) =>
    artistaConMasEntradas.ultimoRecital.entradasVendidas >
    artista.ultimoRecital.entradasVendidas
      ? artistaConMasEntradas
      : artista
  );
