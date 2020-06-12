mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

describe("Peliculas", () => {
  it("Envio una review y info y me retorna un objeto pelicula", () => {
    const reviews = {
      reviewIMDB: 9,
      reviewFilmAffinity: 8.1,
    };

    const peliInfo = {
      titulo: "The Dark Knight",
      anio: 2008,
    };

    const pelicula = {
      titulo: "The Dark Knight",
      anio: 2008,
      reviewIMDB: 9,
      reviewFilmAffinity: 8.1,
    };
    expect(obtenerPelicula(reviews, peliInfo)).to.eql(pelicula);
  });

  //   it("Revisar que no modifico los objetos", () => {
  //     const reviews = {
  //       reviewIMDB: 9,
  //       reviewFilmAffinity: 8.1,
  //     };

  //     const peliInfo = {
  //       titulo: "The Dark Knight",
  //       anio: 2008,
  //     };

  //     const pelicula = {
  //       titulo: "The Dark Knight",
  //       anio: 2008,
  //       reviewIMDB: 9,
  //       reviewFilmAffinity: 8.1,
  //     };
  //       obtenerPelicula(reviews, peliInfo);
  //     expect(reviews).to.eql(pelicula);
  //   });
}); //

mocha.run(); //Correr test
