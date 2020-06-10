mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// Test
// ## Búsqueda laboral

// suite de Test
//  primer parametro nombre del la suite
//  segundo es una funcion
describe("busqueda laboral", () => {
  it("ingreso una oferta y un candidato valido y debe retornar true", () => {
    const persona = {
      experience: 4,
      languages: ["JavaScript", "HTML", "CSS"],
      location: ["Buenos Aires"],
      remuneration: 35000,
    };

    const busqueda = {
      experience: 1,
      languages: ["JavaScript", "HTML"],
      location: ["Buenos Aires"],
      remuneration: 40000,
    };

    expect(busquedaLaboral(persona, busqueda)).to.be.true;
  });

  it("ingreso una oferta y un candidato invalido y debe retornar false", () => {
    const persona = {
      experience: 4,
      languages: ["JavaScript", "HTML", "CSS"],
      location: ["Buenos Aires"],
      remuneration: 35000,
    };

    const busqueda = {
      experience: 1,
      languages: ["JavaScript", "HTML", "Python"],
      location: ["Buenos Aires"],
      remuneration: 40000,
    };

    expect(busquedaLaboral(persona, busqueda)).to.be.false;
  });

  it("revisar que la experiencia sea true cuando es mayor la de la persona", () => {
    const personaExperiencia = 1;
    const busquedaExperiencia = 1;
    expect(comprobarExperiencia(personaExperiencia, busquedaExperiencia)).to.be
      .true;
  });

  it("revisar que la remuneration sea true cuando es mayor igual la de la busqueda", () => {
    const personaRemuneracion = 40000;
    const busquedaRemuneracion = 40000;
    expect(comprobarRemuneration(personaRemuneracion, busquedaRemuneracion)).to
      .be.true;
  });

  it("comprobar si envio dos array que el segundo este contenido en el primero y retorne true", () => {
    const array1 = ["JavaScript", "HTML", "CSS"];
    const array2 = ["JavaScript", "HTML"];
    expect(comprobarSiEstaContenido(array1, array2)).to.be.true;
  });

  it("comprobar si envio dos array que el segundo este contenido en el primero y retorne false", () => {
    const array1 = ["JavaScript", "HTML", "CSS"];
    const array2 = ["Python", "HTML"];
    expect(comprobarSiEstaContenido(array1, array2)).to.be.false;
  });
}); //

mocha.run(); //Correr test
